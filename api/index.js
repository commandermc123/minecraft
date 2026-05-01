const _0x4f2a=(x=>x.split('').map(c=>String.fromCharCode(c.charCodeAt(0)-1)).join(''));
import{Readable as _0x1a2b}from"node:stream";import{pipeline as _0x3c4d}from"node:stream/promises";

export const config={api:{bodyParser:!1},supportsResponseStreaming:!0,maxDuration:60};

const _0x5e6f=(process.env[_0x4f2a("UBSHFU`EPNBJO")]||"")[_0x4f2a("sfqmbdf")](/\/$/,"");

const _0x7a8b=new Set([
_host="host",_conn="connection",_ka="keep-alive",
_pa="proxy-authenticate",_pa2="proxy-authorization",
_te="te",_tr="trailer",_te2="transfer-encoding",
_up="upgrade",_fw="forwarded",
_xfh="x-forwarded-host",_xfp="x-forwarded-proto",
_xfp2="x-forwarded-port"
]);

export default async function(_0xreq,_0xres){
if(!_0x5e6f){_0xres.statusCode=500;return _0xres.end(_0x4f2a("Njt dpo gjhvsfe;!UBSHFU`EPNBJO!jt!opu!tfu"))}
try{
const _0xurl=_0x5e6f+_0xreq.url;
const _0xh={};let _0xip=null;

for(const _0xk of Object.keys(_0xreq.headers)){
const _0xl=_0xk.toLowerCase(),_0xv=_0xreq.headers[_0xk];
if(_0x7a8b.has(_0xl))continue;
if(_0xl.startsWith("x-vercel-"))continue;
if(_0xl==="x-real-ip"){_0xip=_0xv;continue}
if(_0xl==="x-forwarded-for"){if(!_0xip)_0xip=_0xv;continue}
_0xh[_0xl]=Array.isArray(_0xv)?_0xv.join(", "):_0xv;
}
if(_0xip)_0xh["x-forwarded-for"]=_0xip;

const _0xm=_0xreq.method;
const _0xb=_0xm!=="GET"&&_0xm!=="HEAD";

const _0xf={method:_0xm,headers:_0xh,redirect:"manual"};
if(_0xb){_0xf.body=_0x1a2b.toWeb(_0xreq);_0xf.duplex="half"}

const _0xu=await fetch(_0xurl,_0xf);

_0xres.statusCode=_0xu.status;
for(const[_0xk,_0xv]of _0xu.headers){
if(_0xk.toLowerCase()==="transfer-encoding")continue;
try{_0xres.setHeader(_0xk,_0xv)}catch{}
}

if(_0xu.body){
await _0x3c4d(_0x1a2b.fromWeb(_0xu.body),_0xres);
}else{_0xres.end()}

}catch(_0xe){
console.error(_0x4f2a("sfmbz!fssps;"),_0xe);
if(!_0xres.headersSent){
_0xres.statusCode=502;
_0xres.end(_0x4f2a("Cbe!Hbufxbz;!Uvoofm!Gbjmfe"))
}}}
