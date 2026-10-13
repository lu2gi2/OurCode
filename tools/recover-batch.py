# usage: python3 -I recover-batch.py <files_dir> <out_root> <jobs>
# Groups remaining JS modules into <=16-file / <=8 MiB batches and runs `rea recover-javascript-sources` on each.
import sys,os,subprocess,json,concurrent.futures as cf
files_dir,out_root,jobs=sys.argv[1],sys.argv[2],int(sys.argv[3])
done=set(os.listdir(os.path.expanduser('~/claude-code-re/src')))
todo=sorted((f for f in os.listdir(files_dir) if f.endswith(('.js','.mjs')) and f not in done and f!='cli.js'),key=lambda f:os.path.getsize(os.path.join(files_dir,f)))
batches,cur,size=[],[],0
for f in todo:
    s=os.path.getsize(os.path.join(files_dir,f))
    if cur and (len(cur)==16 or size+s>8<<20): batches.append(cur); cur,size=[],0
    cur.append(f); size+=s
if cur: batches.append(cur)
os.makedirs(out_root,exist_ok=True); os.makedirs(out_root+'-logs',exist_ok=True)
env=dict(os.environ,REA_WAKARU_COMMAND=os.path.expanduser('~/claude-code-re/tools/wakaru-dl/wakaru'))
def run(i):
    b=batches[i]; out=f'{out_root}/b{i:04d}'
    if os.path.exists(out+'/manifest.json'): return i,'skip',b
    if os.path.exists(out): subprocess.run(['rm','-rf',out])
    cmd=['node',os.path.expanduser('~/rea/scripts/rea.mjs'),'recover-javascript-sources',os.path.join(files_dir,b[0]),out,'--rewrite-level','standard','--format','json']
    for f in b[1:]: cmd+=['--additional-path',os.path.join(files_dir,f)]
    r=subprocess.run(cmd,capture_output=True,text=True,env=env)
    open(f'{out_root}-logs/b{i:04d}.json','w').write(r.stdout[-200000:])
    return i,'ok' if r.returncode==0 else 'fail',b
print(f'{len(todo)} files in {len(batches)} batches',flush=True)
with cf.ThreadPoolExecutor(jobs) as ex:
    for i,st,b in ex.map(run,range(len(batches))): print(i,st,len(b),b[0],flush=True)
