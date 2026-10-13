# usage: python3 -I summarize-rea-graph.py <rea-graph dir> <out.md>
# Aggregates REA analyze-javascript-application batch Evidence into one human-readable summary.
import json,os,sys,collections,glob
D,out=sys.argv[1],sys.argv[2]
node_kinds=collections.Counter(); rel_kinds=collections.Counter(); sem_kinds=collections.Counter(); sem_rel=collections.Counter()
interesting=collections.defaultdict(collections.Counter); unknown_fam=collections.Counter(); stats=collections.Counter(); files=0
def label(n):
    ident=n.get('identity') or {}
    if ident.get('key') and ident.get('namespace'):
        mech=((n.get('observations') or [{}])[0].get('properties') or {}).get('mechanism')
        return f"{ident['namespace']}: {ident['key']}"[:140]+(f'  ({mech})' if mech else '')
    for k in ('value','name','label','literal','display'):
        v=n.get(k) or n.get('properties',{}).get(k) or n.get('identity',{}).get(k)
        if isinstance(v,(str,int)) and v!='': return str(v)[:140]
    return None
for p in sorted(glob.glob(f'{D}/dir-*.json')+glob.glob(f'{D}/heavy-*.json')):
    try: d=json.load(open(p))
    except Exception: continue
    if 'normalized_result' not in d: d=(d.get('details') or {}).get('partial_observation') or {}
    n=d.get('normalized_result');
    if not n: continue
    files+=1
    for k,v in n.get('statistics',{}).items():
        if isinstance(v,int): stats[k]+=v
    for x in n['graph']['nodes']:
        node_kinds[x['kind']]+=1
        if x['kind'] not in ('javascript-module','export','import','binding','function'):
            l=label(x)
            if l: interesting[x['kind']][l]+=1
    for e in n['graph']['edges']: rel_kinds[e['relation']]+=1
    sg=n.get('semantic_graph') or {}
    for x in sg.get('nodes',[]):
        sem_kinds[x['kind']]+=1
        if x['kind'] in ('config-source','child-process','request','endpoint','storage','event','signal','resource','boundary','timer','stdio'):
            l=label(x)
            if l: interesting['sem:'+x['kind']][l]+=1
    for r in sg.get('relations',[]): sem_rel[r['relation']]+=1
    for u in sg.get('unknowns',[]): unknown_fam[u.get('family')]+=1
    del d,n,sg
L=[f'# REA application-graph summary (first-party modules)\n',f'Evidence files aggregated: {files}\n','## Statistics',*[f'- {k}: {v:,}' for k,v in stats.most_common()],
   '\n## Application graph node kinds',*[f'- {k}: {v:,}' for k,v in node_kinds.most_common()],
   '\n## Application graph edge relations',*[f'- {k}: {v:,}' for k,v in rel_kinds.most_common()],
   '\n## Semantic node kinds',*[f'- {k}: {v:,}' for k,v in sem_kinds.most_common()],
   '\n## Semantic relations',*[f'- {k}: {v:,}' for k,v in sem_rel.most_common()],
   '\n## Unknown families (explicit static gaps)',*[f'- {k}: {v:,}' for k,v in unknown_fam.most_common()]]
for k,c in sorted(interesting.items()):
    L+=[f'\n## {k} ({len(c):,} distinct)',*[f'- `{v}` ×{n}' for v,n in c.most_common(80)]]
open(out,'w').write('\n'.join(L)+'\n'); print('wrote',out,'from',files,'files')
