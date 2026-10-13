import sys,re
path,pat=sys.argv[1],sys.argv[2]; before=int(sys.argv[3]) if len(sys.argv)>3 else 300; after=int(sys.argv[4]) if len(sys.argv)>4 else 600; maxn=int(sys.argv[5]) if len(sys.argv)>5 else 3
s=open(path,encoding='utf8',errors='replace').read()
for n,m in enumerate(re.finditer(pat,s)):
    if n>=maxn: break
    print(f'--- @{m.start()}'); print(s[max(0,m.start()-before):m.end()+after]); print()
