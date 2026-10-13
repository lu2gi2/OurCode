import sys,struct,os,json,collections
binp,out=sys.argv[1],sys.argv[2]
f=open(binp,'rb'); f.seek(0x54fe000); n=struct.unpack('<Q',f.read(8))[0]; p=f.read(n)
t=p.rfind(b'\n---- Bun! ----\n'); o=t-32
bc,moff,mlen,entry,aoff,alen,flags=struct.unpack_from('<QIIIIII',p,o)
SZ=52; mods=[]
for i in range(mlen//SZ):
    v=struct.unpack_from('<12I4B',p,moff+i*SZ)
    ptr=lambda j:(v[2*j],v[2*j+1])
    mods.append(dict(i=i,name=p[slice(*(lambda a,b:(a,a+b))(*ptr(0)))].decode('utf8','replace'),
      contents=ptr(1),sourcemap=ptr(2),bytecode=ptr(3),module_info=ptr(4),bco=ptr(5),enc=v[12],loader=v[13],fmt=v[14],side=v[15]))
os.makedirs(out)
for m in mods:
    rel=m['name'].replace('/$bunfs/root/','').lstrip('/').replace('..','__') or f'mod{m["i"]}'
    a,l=m['contents']; dst=os.path.join(out,'files',rel); os.makedirs(os.path.dirname(dst),exist_ok=True)
    open(dst,'wb').write(p[a:a+l]); m['path']=rel
    for k in ('bytecode','sourcemap'):
        a,l=m[k]
        if l: open(dst+'.'+k,'wb').write(p[a:a+l])
json.dump(dict(byte_count=bc,entry=entry,flags=flags,exec_argv=p[aoff:aoff+alen].decode(),modules=mods),open(os.path.join(out,'manifest.json'),'w'),indent=1)
print('modules',len(mods),'entry',mods[entry]['name'],'flags',hex(flags))
c=collections.Counter(os.path.splitext(m['name'])[1] for m in mods); print(c.most_common(15))
for m in sorted(mods,key=lambda m:-m['contents'][1])[:15]: print(m['contents'][1],m['bytecode'][1],m['loader'],m['name'])
