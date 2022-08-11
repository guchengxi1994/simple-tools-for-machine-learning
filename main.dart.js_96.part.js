self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
hI(d,e){while(!0){if(!(d>0&&e[d-1]===0))break;--d}return d},
arB(d,e,f,g){var x,w=new Uint16Array(g),v=f-e
for(x=0;x<v;++x)w[x]=d[e+x]
return w},
ax3(d){var x
if(d===0)return $.kX()
if(d===1)return $.G2()
if(d===2)return $.aAV()
if(Math.abs(d)<4294967296)return A.NI(C.f.cR(d))
x=A.aI5(d)
return x},
NI(d){var x,w,v,u,t=d<0
if(t){if(d===-9223372036854776e3){x=new Uint16Array(4)
x[3]=32768
w=A.hI(4,x)
return new A.ea(w!==0||!1,x,w)}d=-d}if(d<65536){x=new Uint16Array(1)
x[0]=d
w=A.hI(1,x)
return new A.ea(w===0?!1:t,x,w)}if(d<=4294967295){x=new Uint16Array(2)
x[0]=d&65535
x[1]=C.f.cM(d,16)
w=A.hI(2,x)
return new A.ea(w===0?!1:t,x,w)}w=C.f.bN(C.f.gMB(d)-1,16)+1
x=new Uint16Array(w)
for(v=0;d!==0;v=u){u=v+1
x[v]=d&65535
d=C.f.bN(d,65536)}w=A.hI(w,x)
return new A.ea(w===0?!1:t,x,w)},
aI5(d){var x,w,v,u,t,s,r,q
if(isNaN(d)||d==1/0||d==-1/0)throw B.c(B.bD("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.kX()
x=$.aAU()
for(w=0;w<8;++w)x[w]=0
B.ic(x.buffer,0,null).setFloat64(0,d,!0)
v=x[7]
u=x[6]
t=(v<<4>>>0)+(u>>>4)-1075
s=new Uint16Array(4)
s[0]=(x[1]<<8>>>0)+x[0]
s[1]=(x[3]<<8>>>0)+x[2]
s[2]=(x[5]<<8>>>0)+x[4]
s[3]=u&15|16
r=new A.ea(!1,s,4)
if(t<0)q=r.ll(0,-t)
else q=t>0?r.jj(0,t):r
return q},
arC(d,e,f,g){var x
if(e===0)return 0
if(f===0&&g===d)return e
for(x=e-1;x>=0;--x)g[x+f]=d[x]
for(x=f-1;x>=0;--x)g[x]=0
return e+f},
ax9(d,e,f,g){var x,w,v,u=C.f.bN(f,16),t=C.f.dA(f,16),s=16-t,r=C.f.jj(1,s)-1
for(x=e-1,w=0;x>=0;--x){v=d[x]
g[x+u+1]=(C.f.ll(v,s)|w)>>>0
w=C.f.jj((v&r)>>>0,t)}g[u]=w},
ax4(d,e,f,g){var x,w,v,u=C.f.bN(f,16)
if(C.f.dA(f,16)===0)return A.arC(d,e,u,g)
x=e+u+1
A.ax9(d,e,f,g)
for(w=u;--w,w>=0;)g[w]=0
v=x-1
return g[v]===0?v:x},
aI8(d,e,f,g){var x,w,v=C.f.bN(f,16),u=C.f.dA(f,16),t=16-u,s=C.f.jj(1,u)-1,r=C.f.ll(d[v],u),q=e-v-1
for(x=0;x<q;++x){w=d[x+v+1]
g[x]=(C.f.jj((w&s)>>>0,t)|r)>>>0
r=C.f.ll(w,u)}g[q]=r},
ag9(d,e,f,g){var x,w=e-g
if(w===0)for(x=e-1;x>=0;--x){w=d[x]-f[x]
if(w!==0)return w}return w},
aI6(d,e,f,g,h){var x,w
for(x=0,w=0;w<g;++w){x+=d[w]+f[w]
h[w]=x&65535
x=C.f.cM(x,16)}for(w=g;w<e;++w){x+=d[w]
h[w]=x&65535
x=C.f.cM(x,16)}h[e]=x},
NJ(d,e,f,g,h){var x,w
for(x=0,w=0;w<g;++w){x+=d[w]-f[w]
h[w]=x&65535
x=0-(C.f.cM(x,16)&1)}for(w=g;w<e;++w){x+=d[w]
h[w]=x&65535
x=0-(C.f.cM(x,16)&1)}},
axa(d,e,f,g,h,i){var x,w,v,u,t
if(d===0)return
for(x=0;--i,i>=0;h=u,f=w){w=f+1
v=d*e[f]+g[h]+x
u=h+1
g[h]=v&65535
x=C.f.bN(v,65536)}for(;x!==0;h=u){t=g[h]+x
u=h+1
g[h]=t&65535
x=C.f.bN(t,65536)}},
aI7(d,e,f){var x,w=e[f]
if(w===d)return 65535
x=C.f.jq((w<<16|e[f-1])>>>0,d)
if(x>65535)return 65535
return x},
ea:function ea(d,e,f){this.a=d
this.b=e
this.c=f},
aga:function aga(){},
agb:function agb(){},
IS:function IS(){},
aj3:function aj3(d){this.a=d},
t_:function t_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i
_.$ti=j},
CP:function CP(d,e,f){var _=this
_.d=d
_.a=null
_.b=e
_.c=null
_.$ti=f},
ai_:function ai_(d){this.a=d},
ahZ:function ahZ(d,e){this.a=d
this.b=e},
y5:function y5(d){var _=this
_.a=!1
_.to$=0
_.x1$=d
_.xr$=_.x2$=0
_.y1$=!1},
a17:function a17(d){this.a=d},
y4:function y4(d,e,f){this.f=d
this.b=e
this.a=f},
Pr:function Pr(){},
aEK(d,e,f,g,h){var x=B.b([],h.i("k<mJ<0>>"))
x=new A.IB(C.c.gK(f),e,!0,f,g,x,h.i("IB<0>"))
x.W6(!0,e,f,g,h)
return x},
dw(d,e,f){return new A.f_(C.b.gv(C.A.lY(A.aHF().a)),d,null,f.i("f_<0>"))},
aEL(d,e,f,g,h){var x=new A.mJ(d,e,f,g,C.j,C.j,$.aw(),null,h.i("mJ<0>"))
x.W7(d,e,f,g,h)
return x},
aw2(d,e,f){return new B.il(d.a,d.b,f,e)},
IB:function IB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.$ti=j},
a1b:function a1b(d,e){this.a=d
this.b=e},
a18:function a18(d,e,f){this.a=d
this.b=e
this.c=f},
a19:function a19(){},
a1a:function a1a(d){this.a=d},
t7:function t7(){},
f_:function f_(d,e,f,g){var _=this
_.b=d
_.c=e
_.e=$
_.r=_.f=null
_.a=f
_.$ti=g},
mJ:function mJ(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=$
_.f=g
_.w=h
_.x=i
_.to$=0
_.x1$=j
_.xr$=_.x2$=0
_.y1$=!1
_.a=k
_.$ti=l},
a16:function a16(d){this.a=d},
y6:function y6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.to$=0
_.x1$=h
_.xr$=_.x2$=0
_.y1$=!1},
Pq:function Pq(){},
Ps:function Ps(){},
t8:function t8(d,e,f){this.d=d
this.a=e
this.$ti=f},
CX:function CX(d,e,f,g){var _=this
_.d=d
_.e=e
_.a=null
_.b=f
_.c=null
_.$ti=g},
aix:function aix(d){this.a=d},
aiw:function aiw(d,e){this.a=d
this.b=e},
IC:function IC(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Rk:function Rk(d,e,f,g,h,i,j,k,l){var _=this
_.l=d
_.t=e
_.U=f
_.S=g
_.ae=h
_.bi$=i
_.O$=j
_.bQ$=k
_.go=_.fy=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=l
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
ka:function ka(d,e,f){this.bS$=d
this.V$=e
this.a=f},
U8:function U8(){},
U9:function U9(){},
Zt:function Zt(d,e,f){this.a=d
this.b=e
this.c=f},
Zv:function Zv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Zu:function Zu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ou:function ou(d,e,f){this.e=d
this.f=e
this.a=f},
CA:function CA(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
ahu:function ahu(){},
ahx:function ahx(d){this.a=d},
ahw:function ahw(d){this.a=d},
ahv:function ahv(d,e){this.a=d
this.b=e},
Cz:function Cz(d,e,f,g,h,i,j,k,l,m){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.z=_.y=!1
_.Q=2
_.to$=0
_.x1$=l
_.xr$=_.x2$=0
_.y1$=!1
_.a=m},
TL:function TL(){},
pq:function pq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=null
_.f=!1
_.a=f
_.$ti=g},
a6m:function a6m(d){this.a=d},
a6n:function a6n(d,e){this.a=d
this.b=e},
a6o:function a6o(d){this.a=d},
fx:function fx(){},
hT(d,e,f,g,h){return new A.x7(f,e,g,d)},
x7:function x7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
rR:function rR(d,e,f){this.b=d
this.c=e
this.e=f},
xP:function xP(d,e,f){this.c=d
this.d=e
this.f=f},
IR:function IR(d){this.c=d},
zt:function zt(d,e){this.a=d
this.b=e},
KF(d,e,f){return new A.zX(e,d)},
zX:function zX(d,e){this.c=d
this.r=e},
aHP(){return new A.nz(null)},
nz:function nz(d){this.a=d},
Tz:function Tz(d){var _=this
_.d=$
_.a=null
_.b=d
_.c=null},
an3:function an3(d){this.a=d},
an4:function an4(){},
lS:function lS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
aHF(){var x,w=new Uint8Array(16),v=Date.now()
for(x=5;x>=0;--x){w[x]=v&255
v=C.f.cM(v,8)}for(x=6;x<16;++x)w[x]=$.aBJ().DJ(256)
return new A.MW(w)},
MW:function MW(d){this.a=d}},B,C,D,E,J,H,L,F,I,M,K,N,O,P,Q,R,G,S,T,U,V,W
A=a.updateHolder(c[16],A)
B=c[0]
C=c[2]
D=c[113]
E=c[64]
J=c[1]
H=c[52]
L=c[77]
F=c[57]
I=c[114]
M=c[84]
K=c[101]
N=c[100]
O=c[50]
P=c[65]
Q=c[66]
R=c[53]
G=c[37]
S=c[46]
T=c[58]
U=c[110]
V=c[31]
W=c[99]
A.ea.prototype={
lc(d){var x,w,v=this,u=v.c
if(u===0)return v
x=!v.a
w=v.b
u=A.hI(u,w)
return new A.ea(u===0?!1:x,w,u)},
YC(d){var x,w,v,u,t,s,r=this.c
if(r===0)return $.kX()
x=r+d
w=this.b
v=new Uint16Array(x)
for(u=r-1;u>=0;--u)v[u+d]=w[u]
t=this.a
s=A.hI(x,v)
return new A.ea(s===0?!1:t,v,s)},
YH(d){var x,w,v,u,t,s,r,q=this,p=q.c
if(p===0)return $.kX()
x=p-d
if(x<=0)return q.a?$.at5():$.kX()
w=q.b
v=new Uint16Array(x)
for(u=d;u<p;++u)v[u-d]=w[u]
t=q.a
s=A.hI(x,v)
r=new A.ea(s===0?!1:t,v,s)
if(t)for(u=0;u<d;++u)if(w[u]!==0)return r.a7(0,$.G2())
return r},
jj(d,e){var x,w,v,u,t,s=this
if(e<0)throw B.c(B.bD("shift-amount must be posititve "+e,null))
x=s.c
if(x===0)return s
w=C.f.bN(e,16)
if(C.f.dA(e,16)===0)return s.YC(w)
v=x+w+1
u=new Uint16Array(v)
A.ax9(s.b,x,e,u)
x=s.a
t=A.hI(v,u)
return new A.ea(t===0?!1:x,u,t)},
ll(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(e<0)throw B.c(B.bD("shift-amount must be posititve "+e,null))
x=o.c
if(x===0)return o
w=C.f.bN(e,16)
v=C.f.dA(e,16)
if(v===0)return o.YH(w)
u=x-w
if(u<=0)return o.a?$.at5():$.kX()
t=o.b
s=new Uint16Array(u)
A.aI8(t,x,e,s)
x=o.a
r=A.hI(u,s)
q=new A.ea(r===0?!1:x,s,r)
if(x){if((t[w]&C.f.jj(1,v)-1)>>>0!==0)return q.a7(0,$.G2())
for(p=0;p<w;++p)if(t[p]!==0)return q.a7(0,$.G2())}return q},
aV(d,e){var x,w=this.a
if(w===e.a){x=A.ag9(this.b,this.c,e.b,e.c)
return w?0-x:x}return w?-1:1},
yx(d,e){var x,w,v,u=this,t=u.c,s=d.c
if(t<s)return d.yx(u,e)
if(t===0)return $.kX()
if(s===0)return u.a===e?u:u.lc(0)
x=t+1
w=new Uint16Array(x)
A.aI6(u.b,t,d.b,s,w)
v=A.hI(x,w)
return new A.ea(v===0?!1:e,w,v)},
ty(d,e){var x,w,v,u=this,t=u.c
if(t===0)return $.kX()
x=d.c
if(x===0)return u.a===e?u:u.lc(0)
w=new Uint16Array(t)
A.NJ(u.b,t,d.b,x,w)
v=A.hI(t,w)
return new A.ea(v===0?!1:e,w,v)},
Z(d,e){var x,w,v=this,u=v.c
if(u===0)return e
x=e.c
if(x===0)return v
w=v.a
if(w===e.a)return v.yx(e,w)
if(A.ag9(v.b,u,e.b,x)>=0)return v.ty(e,w)
return e.ty(v,!w)},
a7(d,e){var x,w,v=this,u=v.c
if(u===0)return e.lc(0)
x=e.c
if(x===0)return v
w=v.a
if(w!==e.a)return v.yx(e,w)
if(A.ag9(v.b,u,e.b,x)>=0)return v.ty(e,w)
return e.ty(v,!w)},
ad(d,e){var x,w,v,u,t,s,r=this.c,q=e.gafT()
if(r===0||!1)return $.kX()
x=C.f.Z(r,q)
w=this.b
v=e.gafM()
u=new Uint16Array(x)
for(t=0;C.f.Rk(t,q);){A.axa(v.h(0,t),w,0,u,t,r);++t}e.gafR()
s=A.hI(x,u)
return new A.ea(s!==0||!1,u,s)},
YB(d){var x,w,v,u
if(this.c<d.c)return $.kX()
this.HP(d)
x=$.arz.fO()-$.Cb.fO()
w=A.arB($.ary.fO(),$.Cb.fO(),$.arz.fO(),x)
v=A.hI(x,w)
u=new A.ea(!1,w,v)
return this.a!==d.a&&v>0?u.lc(0):u},
a4r(d){var x,w,v,u=this
if(u.c<d.c)return u
u.HP(d)
x=A.arB($.ary.fO(),0,$.Cb.fO(),$.Cb.fO())
w=A.hI($.Cb.fO(),x)
v=new A.ea(!1,x,w)
if($.arA.fO()>0)v=v.ll(0,$.arA.fO())
return u.a&&v.c>0?v.lc(0):v},
HP(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
if(h===$.ax6&&d.c===$.ax8&&i.b===$.ax5&&d.b===$.ax7)return
x=d.b
w=d.c
v=16-C.f.gMB(x[w-1])
if(v>0){u=new Uint16Array(w+5)
t=A.ax4(x,w,v,u)
s=new Uint16Array(h+5)
r=A.ax4(i.b,h,v,s)}else{s=A.arB(i.b,0,h,h+2)
t=w
u=x
r=h}q=u[t-1]
p=r-t
o=new Uint16Array(r)
n=A.arC(u,t,p,o)
m=r+1
if(A.ag9(s,r,o,n)>=0){s[r]=1
A.NJ(s,m,o,n,s)}else s[r]=0
l=new Uint16Array(t+2)
l[t]=1
A.NJ(l,t+1,u,t,l)
k=r-1
for(;p>0;){j=A.aI7(q,s,k);--p
A.axa(j,l,0,s,p,t)
if(s[k]<j){n=A.arC(l,t,p,o)
A.NJ(s,m,o,n,s)
for(;--j,s[k]<j;)A.NJ(s,m,o,n,s)}--k}$.ax5=i.b
$.ax6=h
$.ax7=x
$.ax8=w
$.ary.b=s
$.arz.b=m
$.Cb.b=t
$.arA.b=v},
gv(d){var x,w,v,u=new A.aga(),t=this.c
if(t===0)return 6707
x=this.a?83585:429689
for(w=this.b,v=0;v<t;++v)x=u.$2(x,w[v])
return new A.agb().$1(x)},
k(d,e){if(e==null)return!1
return e instanceof A.ea&&this.aV(0,e)===0},
cR(d){var x,w,v
for(x=this.c-1,w=this.b,v=0;x>=0;--x)v=v*65536+w[x]
return this.a?-v:v},
j(d){var x,w,v,u,t,s=this,r=s.c
if(r===0)return"0"
if(r===1){if(s.a)return C.f.j(-s.b[0])
return C.f.j(s.b[0])}x=B.b([],y.s)
r=s.a
w=r?s.lc(0):s
for(;w.c>1;){v=$.aAT()
if(v.c===0)B.X(D.yO)
u=w.a4r(v).j(0)
x.push(u)
t=u.length
if(t===1)x.push("000")
if(t===2)x.push("00")
if(t===3)x.push("0")
w=w.YB(v)}x.push(C.f.j(w.b[0]))
if(r)x.push("-")
return new B.cD(x,y.H).lY(0)},
$ibb:1}
A.IS.prototype={
glm(){return null},
j(d){return"IntegerDivisionByZeroException"},
$ibL:1,
$ibE:1}
A.aj3.prototype={
Wm(){var x=self.crypto
if(x!=null)if(x.getRandomValues!=null)return
throw B.c(B.T("No source of cryptographically secure random numbers available."))},
DJ(d){var x,w,v,u,t,s,r,q,p
if(d<=0||d>4294967296)throw B.c(B.dQ("max must be in range 0 < max \u2264 2^32, was "+d))
if(d>255)if(d>65535)x=d>16777215?4:3
else x=2
else x=1
w=this.a
w.setUint32(0,0,!1)
v=4-x
u=B.ex(Math.pow(256,x))
for(t=d-1,s=(d&t)===0;!0;){r=w.buffer
r=new Uint8Array(r,v,x)
crypto.getRandomValues(r)
q=w.getUint32(0,!1)
if(s)return(q&t)>>>0
p=q%d
if(q-p+d<u)return p}}}
A.t_.prototype={
ai(){return new A.CP(new A.a17(B.b([],y.y)),C.k,this.$ti.i("CP<1>"))}}
A.CP.prototype={
G(d,e){return new B.bQ(E.Co,new A.y4(this.d,new B.fR(new A.ai_(this),null),null),null)},
a2v(d,e){var x,w,v,u,t,s,r,q,p=this.a.r.$2(d,e)
e.e=new A.y6(p,C.a4,D.fH,D.fH,$.aw())
p=y.F
x=B.b([e],p)
w=B.b([e],p)
for(v=this.$ti.i("f_<1>");x.length!==0;){u=C.c.f2(x,0)
t=u.r
if((t==null?u.r=B.b([],p):t).length!==0){s=0
while(!0){t=u.r
if(t==null){t=u.r=B.b([],p)
r=t}else r=t
if(!(s<t.length))break
q=r[s]
if(!C.c.B(w,q)){t=this.a
t.toString
t=t.r.$2(d,v.a(q))
q.e=new A.y6(t,C.a4,D.fH,D.fH,$.aw())
x.push(q)
w.push(q)}++s}}}return w}}
A.y5.prototype={$ia9:1}
A.a17.prototype={
wZ(d){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
if(u!==d){u.a=!1
u.F()}}if(!C.c.B(x,d))x.push(d)
d.a=!0
d.F()},
a8G(){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
u.a=!1
u.F()}}}
A.y4.prototype={
cs(d){return!0}}
A.Pr.prototype={}
A.IB.prototype={
W6(d,e,f,g,h){C.c.a0(this.d,new A.a1b(this,h))},
gea(d){var x=this.d,w=B.Z(x).i("a0<1,f>"),v=B.a5(new B.a0(x,new A.a19(),w),!0,w.i("ak.E"))
w=this.f
x=B.Z(w).i("a0<1,ou>")
x=B.dL(B.a5(new B.a0(w,new A.a1a(this),x),!0,x.i("ak.E")),!0,y.l)
C.c.M(x,v)
return x},
wo(d){var x,w,v,u,t,s,r,q,p,o,n="_box"
for(x=this.d,w=x.length,v=this.a,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=B.a(t.e,n)
r=B.a(v.e,n).c
q=B.a(v.e,n).c
p=B.a(t.e,n).c
o=B.a(t.e,n).c
s.c=new B.il(r.a,q.b,p.c-p.a,o.d-o.b)
s.F()
s=B.a(t.e,n)
s.d=B.a(t.e,n).c
s.F()}this.Yr(v)},
Yr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="_box",g=y.F,f=B.b([d],g),e=B.b([],g)
for(x=this.b,w=x===C.P,x=x===C.L;f.length!==0;){v=C.c.gP(f)
if(x){u=B.a(v.e,h).d.c
t=B.a(v.e,h).d.d}else if(w){u=B.a(v.e,h).d.d
t=B.a(v.e,h).d.c}else{u=0
t=0}s=v.r
if((s==null?v.r=B.b([],g):s).length!==0){if(x)r=B.a(v.e,h).d.b
else r=w?B.a(v.e,h).d.a:0
s=v.r
if(s==null)s=v.r=B.b([],g)
q=s.length
p=0
while(!0){if(!(p<s.length)){o=!0
break}n=s[p]
m=n.f
if(C.c.gK(m==null?n.f=B.b([],g):m)===v)if(!C.c.B(e,n)){if(x){l=B.a(v.e,h).d.c+144
s=B.a(n.e,h).c
q=B.a(n.e,h)
q.d=new B.il(l,r,l+(s.c-s.a),r+(s.d-s.b))
q.F()}else if(w){k=B.a(v.e,h).d.b+144
s=B.a(n.e,h).c
q=B.a(n.e,h)
q.d=new B.il(r,k,r+(s.c-s.a),k+(s.d-s.b))
q.F()}f.push(n)
o=!1
break}else if(x){t=Math.max(t,B.a(n.e,h).d.d)
u=Math.max(u,B.a(n.e,h).d.c)
r=B.a(n.e,h).d.d+48}else if(w){t=Math.max(t,B.a(n.e,h).d.c)
u=Math.max(u,B.a(n.e,h).d.d)
r=B.a(n.e,h).d.c+48}s.length===q||(0,B.O)(s);++p}}else o=!0
if(o){s=B.a(v.e,h).c
q=s.c-s.a
s=s.d-s.b
j=B.a(v.e,h).d
if(x){j=A.aw2(B.a(v.e,h).d,t,u)
k=j.b
k+=(j.d-k-s)/2
m=B.a(v.e,h)
i=j.a
m.c=new B.il(i,k,i+q,k+s)
m.F()}else if(w){j=A.aw2(B.a(v.e,h).d,u,t)
l=j.a
l+=(j.c-l-q)/2
m=B.a(v.e,h)
i=j.b
m.c=new B.il(l,i,l+q,i+s)
m.F()}s=B.a(v.e,h)
s.d=j
s.F()
e.push(v)
f.pop()}}}}
A.t7.prototype={
gc3(d){var x=this.a
return x==null?this.a=new A.y5($.aw()):x}}
A.f_.prototype={
gadN(){var x=this.f
return x==null?this.f=B.b([],y.F):x},
gDK(){var x=this.r
return x==null?this.r=B.b([],y.F):x},
dj(d){this.gDK().push(d)
d.gadN().push(this)},
gbF(d){return this.c}}
A.mJ.prototype={
W7(d,e,f,g,h){this.e=new A.ou(this,new A.a16(this),null)},
afw(d){var x,w,v,u,t,s,r,q=this,p=B.a(q.c.e,"_box"),o=B.a(q.d.e,"_box")
if(q.b===C.L){x=o.c
w=o.gbX(o)
v=p.c
u=p.gbX(p)
t=o.b.a
s=p.b.c
if(x.b+w.b/2<v.b+u.b/2){q.w=new B.l(0,p.c.b-o.c.b-o.gbX(o).b/2+p.gbX(p).b/2+4)
x=o.c
p=p.c.c
q.x=new B.l(x.a-p+t+s,4)
return new B.l(p-s,x.b+o.gbX(o).b/2-4)}else{q.w=new B.l(0,4)
x=o.c
w=p.c
q.x=new B.l(x.a-w.c+t+s,x.b-w.b-p.gbX(p).b/2+o.gbX(o).b/2+4)
o=p.c
return new B.l(o.c-s,o.b+p.gbX(p).b/2-4)}}else{x=o.c
w=o.gbX(o)
v=p.c
u=p.gbX(p)
t=o.b
s=t.b
r=p.b.d
if(x.a+w.a/2<v.a+u.a/2){q.w=new B.l(p.c.a-o.c.a-o.gbX(o).a/2+p.gbX(p).a/2+4,0)
x=o.c
q.x=new B.l(4,x.b-p.c.d+s+t.d)
return new B.l(x.a+o.gbX(o).a/2-4,p.c.d-r)}else{q.w=new B.l(4,0)
x=o.c
w=p.c
v=p.gbX(p)
u=o.gbX(o)
o=o.c
t=p.c
q.x=new B.l(x.a-w.a-v.a/2+u.a/2+4,o.b-t.d+s+r)
return new B.l(t.a+p.gbX(p).a/2-4,p.c.d-r)}}},
$ia9:1}
A.y6.prototype={
gbX(d){var x=this.c
return new B.P(x.c-x.a,x.d-x.b)},
$ia9:1}
A.Pq.prototype={}
A.Ps.prototype={}
A.t8.prototype={
ai(){return new A.CX(new B.aD(null,y.A),C.j,C.k,this.$ti.i("CX<1>"))}}
A.CX.prototype={
G(d,e){var x=this,w=null,v=x.a.d
return B.cq(w,B.aq4(new A.IC(v,x.e,w,v.gea(v),x.d),C.aZ),C.y,!1,w,w,w,w,w,w,w,w,w,w,w,new A.aix(x),w,w,w,w,w,w,w)}}
A.IC.prototype={
aC(d){var x,w=B.bd(),v=new B.aX(new B.aY())
v.sa6(0,C.bV)
v.sc5(0,C.Y)
v.sf6(2)
x=new B.aX(new B.aY())
x.sa6(0,C.bV)
x.sc5(0,C.ah)
w=new A.Rk(d,this.r,C.j,this.e,new A.Zt(w,v,x),0,null,null,B.an(y.v))
w.gam()
w.gav()
w.CW=!1
return w},
aE(d,e){var x=this.e
if(x!==B.a(e.S,"_graph")){e.S=x
e.X()}x=this.f
if(!e.U.k(0,x)){e.U=x
e.X()}e.t=this.r}}
A.Rk.prototype={
bz(){var x,w,v,u,t,s,r,q,p,o,n=this,m="_graph",l="_box"
if(n.bi$===0)return
x=n.O$
for(w=y.c,v=y.e,u=y.U,t=0;x!=null;){s=w.a(x.e)
r=v.a(B.u.prototype.ga4.call(n))
x.cm(0,new B.aa(0,C.f.E(1/0,r.a,r.b),0,C.f.E(1/0,r.c,r.d)),!0)
r=x.k1
r.toString
q=B.a(n.S,m)
p=B.dL(q.f,!0,u)
C.c.M(p,q.d)
q=p[t]
if(q instanceof A.f_){o=B.a(q.e,l)
o.c=new B.il(0,0,r.a,r.b)
o.F()
o=B.a(q.e,l)
o.d=B.a(q.e,l).c
o.F()}x=s.V$;++t}B.a(n.S,m).wo(0)
v=v.a(B.u.prototype.ga4.call(n))
n.k1=new B.P(C.f.E(1/0,v.a,v.b),C.f.E(1/0,v.c,v.d))
x=n.O$
for(t=0;x!=null;){s=w.a(x.e)
v=B.a(n.S,m)
p=B.dL(v.f,!0,u)
C.c.M(p,v.d)
v=p[t]
if(v instanceof A.f_)s.a=new B.l(B.a(v.e,l).c.a+n.U.a,B.a(v.e,l).c.b+n.U.b)
else if(v instanceof A.mJ){r=x.k1
r.toString
r=v.afw(r)
q=n.U
s.a=new B.l(r.a+q.a,r.b+q.b)
v.F()}x=s.V$;++t}},
aq(d,e){var x=this,w=d.gce(d)
w.cL(0)
w.aL(0,e.a,e.b)
x.ae.aeq(w,x.l,B.a(x.S,"_graph"),x.U)
w.cJ(0)
x.kD(d,e)},
dS(d){if(!(d.e instanceof A.ka))d.e=new A.ka(null,null,C.j)},
cp(d,e){return this.nz(d,e)},
hE(d){return!0}}
A.ka.prototype={}
A.U8.prototype={
af(d){var x,w,v
this.dc(d)
x=this.O$
for(w=y.c;x!=null;){x.af(d)
v=x.e
v.toString
x=w.a(v).V$}},
a8(d){var x,w,v
this.cS(0)
x=this.O$
for(w=y.c;x!=null;){x.a8(0)
v=x.e
v.toString
x=w.a(v).V$}}}
A.U9.prototype={}
A.Zt.prototype={
aeq(d,e,f,g){C.c.a0(f.d,new A.Zv(this,f,g,e,d))}}
A.ou.prototype={
ai(){return new A.CA(C.k)}}
A.CA.prototype={
a39(){var x=this,w=x.d,v=w==null
if(!v)w.r=x.a.e.w
if(!v)w.w=x.a.e.x
if(x.c!=null)x.uk()},
uk(){var x=0,w=B.M(y.z),v=this
var $async$uk=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:x=2
return B.R(B.oJ(C.bw,null,y.z),$async$uk)
case 2:if(v.c!=null)v.a_(new A.ahu())
return B.K(null,w)}})
return B.L($async$uk,w)},
az(){var x,w=this
w.a.e.a3(0,w.gAl())
x=w.a.e
x.gc3(x).a3(0,new A.ahx(w))
w.aU()},
b6(d){var x,w=this,v=w.a.e
if(v!==d.e){x=w.d
if(x!=null)x.x=v.b
v.a3(0,w.gAl())
v=w.a.e
v.gc3(v).a3(0,new A.ahw(w))}w.bt(d)},
n(d){var x,w=this
w.a.e.N(0,w.gAl())
x=w.a.e
x.x1$=$.aw()
x.to$=0
w.aO(0)},
G(d,e){var x,w,v,u,t=this,s=null,r=t.d
if(r==null){r=B.ap(e).as
x=r.w
r=x==null?r.f:x
x=t.a.e
w=B.bd()
v=new B.aX(new B.aY())
v.sa6(0,C.bV)
v.sc5(0,C.Y)
v.sf6(2)
u=new B.aX(new B.aY())
u.sa6(0,C.bV)
u.sc5(0,C.ah)
r=new A.Cz(r,w,v,u,C.bV,C.j,C.j,x.b,$.aw(),s)
v.sf6(2)
r.mY(C.bV)
t.d=r}x=t.a.f.$0()
r.f=x
r.mY(x)
r=t.d
return B.cq(s,B.iR(s,s,s,r,r.gbX(r)),C.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,new A.ahv(t,e),s,s,s,s,s,s)}}
A.Cz.prototype={
mY(d){this.d.sa6(0,d)
this.e.sa6(0,d)
this.F()},
gbX(d){var x=this.x,w=this.w,v=this.r,u=w.a,t=v.a
w=w.b
v=v.b
return x===C.L?new B.P(u-t,Math.abs(w-v)+8):new B.P(Math.abs(u-t)+8,w-v)},
Kr(d,e){var x=d.a,w=d.b
return new B.l(Math.cos(e)*x-Math.sin(e)*w,Math.sin(e)*x+Math.cos(e)*w)},
aq(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.c
l.e0(0)
x=m.r
l.dw(0,x.a,x.b)
x=m.x
w=m.r
v=m.w
u=w.a
t=v.a
w=w.b
v=v.b
if(x===C.L){x=u+(t-u)/2
l.C9(0,x,w,x,v,t-8,v)}else{x=w+(v-w)/2
l.C9(0,u,x,t,x,t,v-8)}d.bP(0,l,m.d)
l=l.a8W()
s=l.gP(l)
r=s.xt(s.gq(s))
l=Math.cos(-r.gMq(r))
x=Math.sin(-r.gMq(r))
x=r.a.Z(0,new B.l(8*l,8*x))
l=r.b
q=B.bd()
q.dw(0,x.a,x.b-0.5)
p=8/Math.cos(0.463)
o=x.Z(0,m.Kr(l,2.678592653589793).ad(0,p))
n=x.Z(0,m.Kr(l,-2.678592653589793).ad(0,p))
q.c0(0,o.a,o.b)
q.c0(0,n.a,n.b)
q.ck(0)
d.bP(0,q,m.e)},
e6(d){var x=this
y.Y.a(d)
return!x.r.k(0,d.r)||!x.w.k(0,d.w)||!x.f.k(0,d.f)||x.x!==d.x},
e0(d){var x=this
x.z=x.y=!1
x.mY(x.f)},
qS(d){var x,w,v=this,u=v.r,t=v.w
if(u.b===t.b){u=d.a
if(u>=0)if(u<=v.gbX(v).a){u=d.b
t=v.Q/2
u=u>=4-t&&u<=4+t
x=u}else x=!1
else x=!1}else if(u.a===t.a){u=d.b
if(u>=0)if(u<=v.gbX(v).b){u=d.a
t=v.Q/2
u=u>=4-t&&u<=4+t
x=u}else x=!1
else x=!1}else{u=v.c
if(!u.B(0,d)){t=d.a
w=d.b
x=u.B(0,new B.l(t,w-1))||u.B(0,new B.l(t,w+1))||u.B(0,new B.l(t-1,w))||u.B(0,new B.l(t+1,w))}else x=!0}if(x){if(!v.y&&!v.z){u=v.b
v.mY(B.az(180,u.gp(u)>>>16&255,u.gp(u)>>>8&255,u.gp(u)&255))
v.z=!0}}else if(v.z&&!v.y){v.mY(v.f)
v.z=!1}return x}}
A.TL.prototype={}
A.pq.prototype={
a1P(){var x,w,v
try{this.f=!1
w=this.e
if(w!=null)w.bs(0)}catch(v){x=B.ay(v)
B.eg().$1(J.cy(x))}},
a6n(d){var x,w,v=this
if(!v.f){v.e=B.ig(new A.a6m(v),!1)
x=B.a(B.bX(d,!1).d,"_overlayKey").gT()
if(x!=null){w=v.e
w.toString
x.hF(0,w)}v.f=!v.f}},
G(d,e){var x=this,w=null,v=x.c,u=v.oT(),t=u.a,s=0.5*(256-t),r=v.oN()
return B.bR(new B.bQ(new B.av(s,0,s,0),B.ib(new H.iP(x.d,B.ah(w,new B.bQ(L.cU,B.fj(F.bp(v.me(),w,w,w,w,C.bq,w),w,w),w),w,w,new B.bv(r,w,w,I.n1,w,w,C.F),u.b,w,w,w,t),w),C.bv,w,new A.a6n(x,e),new A.a6o(x),w),w),w,256)}}
A.fx.prototype={}
A.x7.prototype={
bv(){var x=C.e.eB((this.e.b+2-this.c)/1)+1
return new A.lS(this.d,x,x,y._)},
oN(){return D.Ik},
oT(){var x=this,w=x.bv().a*10>100?100:x.bv().a*10
return new B.P(x.bv().b<50?50:x.bv().b,w)},
bV(){return B.F(y.N,y.z)},
me(){return this.b},
oQ(){return this.e},
gaA(d){return this.b}}
A.rR.prototype={
oN(){return M.fw},
me(){return this.c},
bv(){return new A.lS(this.b,1,1,y._)},
oT(){var x=this,w=x.bv().a*10>100?100:x.bv().a*10
return new B.P(x.bv().b<50?50:x.bv().b,w)},
bV(){return B.F(y.N,y.z)},
oQ(){return this.e},
gaA(d){return this.c}}
A.xP.prototype={
bv(){return new A.lS(this.c,1,1,y._)},
bV(){return B.F(y.N,y.z)},
oT(){var x=this,w=x.bv().a*10>100?100:x.bv().a*10
return new B.P(x.bv().b<50?50:x.bv().b,w)},
oN(){return D.Ii},
me(){return this.d},
oQ(){return this.f},
gaA(d){return this.d}}
A.IR.prototype={
bV(){return B.F(y.N,y.z)},
bv(){return this.c},
oT(){var x=this.c,w=x.b
if(w>256)w=256
return new B.P(w,x.a*10)},
oN(){return K.fx},
me(){return"input"},
oQ(){return this.c},
gaA(){return"input"}}
A.zt.prototype={
j(d){return"NodeType."+this.b}}
A.zX.prototype={
bv(){var x=this.r,w=C.e.eB((x.b-2)/2+1)
return new A.lS(x.a,w,w,y._)},
bV(){return B.F(y.N,y.z)},
oT(){var x=this,w=x.bv().a*10>100?100:x.bv().a*10
return new B.P(x.bv().b<50?50:x.bv().b,w)},
oN(){return N.uN},
me(){return this.c},
oQ(){return this.r},
gaA(d){return this.c}}
A.nz.prototype={
ai(){return new A.Tz(C.k)}}
A.Tz.prototype={
az(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2="pooling1",a3="pooling2",a4="conv3_1",a5="conv3_3",a6="pooling3",a7="pooling4"
this.aU()
x=new A.IR(D.QE)
this.d=A.dw(x,!0,y.C)
w=y.G
v=A.dw(A.hT(x.bv(),3,"conv1",64,"input"),!1,w)
B.a(this.d,"root").dj(v)
u=A.dw(A.hT(v.c.bv(),3,"conv2",64,"conv1"),!1,w)
v.dj(u)
t=y.n
s=A.dw(A.KF(u.c.bv(),a2,"conv2"),!1,t)
u.dj(s)
r=A.dw(A.hT(s.c.bv(),3,"conv2_1",128,a2),!1,w)
s.dj(r)
q=A.dw(A.hT(r.c.bv(),3,"conv2_2",128,"conv2_1"),!1,w)
r.dj(q)
p=A.dw(A.KF(q.c.bv(),a3,"conv2_2"),!1,t)
q.dj(p)
o=A.dw(A.hT(p.c.bv(),3,a4,256,a3),!1,w)
p.dj(o)
n=A.dw(A.hT(o.c.bv(),3,"conv3_2",256,a4),!1,w)
o.dj(n)
m=A.dw(A.hT(n.c.bv(),3,a5,256,a5),!1,w)
n.dj(m)
l=A.dw(A.KF(m.c.bv(),a6,a5),!1,t)
m.dj(l)
k=A.dw(A.hT(l.c.bv(),3,a4,512,a6),!1,w)
l.dj(k)
j=A.dw(A.hT(k.c.bv(),3,"conv4_2",512,"conv4_1"),!1,w)
k.dj(j)
i=A.dw(A.hT(j.c.bv(),3,"conv4_3",512,"conv4_2"),!1,w)
j.dj(i)
h=A.dw(A.KF(i.c.bv(),a7,"conv4_3"),!1,t)
i.dj(h)
g=A.dw(A.hT(h.c.bv(),3,"conv5_1",512,a7),!1,w)
h.dj(g)
f=A.dw(A.hT(g.c.bv(),3,"conv5_2",512,"conv5_1"),!1,w)
g.dj(f)
e=A.dw(A.hT(f.c.bv(),3,"conv5_3",512,"conv5_2"),!1,w)
f.dj(e)
d=A.dw(A.KF(e.c.bv(),"pooling5","conv5_3"),!1,t)
e.dj(d)
t=y.j
a0=A.dw(new A.rR(4096,"fc1",d.c.bv()),!1,t)
d.dj(a0)
a1=A.dw(new A.rR(4096,"fc2",a0.c.bv()),!1,t)
a0.dj(a1)
a1.dj(A.dw(new A.xP(1000,"fc3",a1.c.bv()),!1,y.t))},
G(d,e){var x=null,w=O.kZ(x,!1,P.b1,!0,0,B.c7(!1,!0,Q.bQ,x,!0,x,x,x,x,x,x,x,x,x,x,new A.an3(e),x,x,x),D.Qs),v=e.H(y.w).f
return R.kt(w,B.ah(x,new A.t_(B.a(this.d,"root"),C.P,!0,!1,new A.an4(),x,y.o),x,x,x,x,x,x,E.M,v.a.a),x,x)}}
A.lS.prototype={
j(d){return"["+this.a+", "+this.b+", "+this.c+"]"},
k(d,e){if(e==null)return!1
return e instanceof A.lS&&e.a===this.a&&e.b===this.b&&e.c===this.c},
gv(d){var x=C.f.gv(this.a),w=C.f.gv(this.b),v=C.f.gv(this.c)
return G.ayg(G.UH(G.UH(G.UH(0,C.f.gv(x)),C.f.gv(w)),C.f.gv(v)))}}
A.MW.prototype={
aeX(){var x,w,v=new Uint8Array(26)
this.zq(0,5,v,0,9)
this.zq(6,10,v,10,17)
this.zq(11,15,v,18,25)
for(x=0,w="";x<26;++x)w+=$.aBi()[v[x]]
return w.charCodeAt(0)==0?w:w},
j(d){return this.aeX()},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.MW){for(x=e.a,w=this.a,v=0;v<16;++v)if(x[v]!==w[v])return!1
return!0}return!1},
gv(d){return C.b.gv(C.A.lY(this.a))},
zq(d,e,f,g,h){var x,w,v=A.ax3(0)
for(x=this.a,w=d;w<=e;++w)v=v.jj(0,8).Z(0,A.ax3(x[w]))
for(w=h;w>=g;--w){f[w]=v.cR(0)&31
v=v.ll(0,5)}}}
var z=a.updateTypes(["~(f_<@>)","f(f_<@>)","~()","dU(A)","pq<fx>(A,f_<fx>)"])
A.aga.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:136}
A.agb.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:36}
A.ai_.prototype={
$1(d){var x=null,w=this.a,v=w.a2v(d,w.a.c),u=w.$ti
return B.cq(x,new A.t8(A.aEK(!0,w.a.d,v,x,u.c),x,u.i("t8<1>")),C.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,new A.ahZ(w,d),x,x,x,x,x,x)},
$S:357}
A.ahZ.prototype={
$0(){this.b.CO(y.k).f.a8G()
this.a.a.toString},
$S:0}
A.a1b.prototype={
$1(d){C.c.a0(d.gDK(),new A.a18(this.a,d,this.b))},
$S:z+0}
A.a18.prototype={
$1(d){var x=this.a,w=this.c,v=w.i("f_<0>")
x.f.push(A.aEL(x.b,v.a(this.b),v.a(d),x.e,w))},
$S:z+0}
A.a19.prototype={
$1(d){return B.a(d.e,"_box").a},
$S:z+1}
A.a1a.prototype={
$1(d){return B.a(d.e,"_edgeWidget")},
$S(){return this.a.$ti.i("ou(mJ<1>)")}}
A.a16.prototype={
$0(){return C.bV},
$S:358}
A.aix.prototype={
$1(d){var x,w,v,u,t={},s=this.a,r=B.a(s.a.d.a.e,"_box").d,q=r.c-r.a
r=r.d-r.b
x=$.I.t$.z.h(0,s.d)
x=x==null?null:x.gD()
y.B.a(x)
if(x==null)w=null
else{x=x.k1
x.toString
w=x}if(w==null)w=C.o
t.a=t.b=0
x=w.a
if(q>x){v=t.b=s.e.a+d.b.a
if(v>0)t.b=0
else{q=x-q-144
if(v<q)t.b=q}}q=w.b
if(r>q){u=t.a=s.e.b+d.b.b
if(u>0)t.a=0
else{r=q-r-144
if(u<r)t.a=r}}s.a_(new A.aiw(t,s))},
$S:8}
A.aiw.prototype={
$0(){var x=this.b,w=this.a
x.e=new B.l(w.b,w.a)
x.a.toString},
$S:0}
A.Zv.prototype={
$1(d){var x=this,w=B.a(d.e,"_box")
C.c.a0(d.gDK(),new A.Zu(x.a,x.b,w,x.c,x.d,x.e))},
$S:z+0}
A.Zu.prototype={
$1(d){},
$S:z+0}
A.ahu.prototype={
$0(){},
$S:0}
A.ahx.prototype={
$0(){var x=this.a,w=x.a.e
if(!w.gc3(w).a&&x.c!=null){x.a.toString
x=x.d
if(x!=null)x.e0(0)}},
$S:0}
A.ahw.prototype={
$0(){var x=this.a,w=x.a.e
if(!w.gc3(w).a){x.a.toString
x=x.d
if(x!=null)x.e0(0)}},
$S:0}
A.ahv.prototype={
$0(){var x=this.b.CO(y.k).f,w=this.a,v=w.a.e
x.wZ(v.gc3(v))
w.a.toString
w=w.d
if(w!=null)if(!w.y){w.y=!0
w.mY(w.b)}},
$S:0}
A.a6m.prototype={
$1(d){var x=null,w=this.a,v=w.c
return S.ny(H.x6(B.fu(C.H,!0,x,B.ah(x,T.c4(B.b([F.bp("layer name :  "+v.me(),x,x,x,D.mo,x,x),D.KV,F.bp("in :  "+v.oQ().j(0),x,x,x,D.mo,x,x),F.bp("out :  "+v.bv().j(0),x,x,x,D.mo,x,x)],y.p),C.av,C.q,C.n),x,x,D.yg,x,x,x,E.M,x),C.v,x,0,x,x,x,x,x,C.aK),E.mW,w.d,D.IG,!0,U.mU))},
$S:z+3}
A.a6n.prototype={
$1(d){return this.a.a6n(this.b)},
$S:38}
A.a6o.prototype={
$1(d){return this.a.a1P()},
$S:30}
A.an3.prototype={
$0(){B.bX(this.a,!1).bT(0)},
$S:0}
A.an4.prototype={
$2(d,e){return new A.pq(e.c,new H.k4(),null,y.i)},
$S:z+4};(function installTearOffs(){var x=a._instance_0u
x(A.CA.prototype,"gAl","a39",2)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.C,[A.ea,A.IS,A.aj3,A.Pr,A.a17,A.IB,A.t7,A.Ps,A.Zt,A.fx,A.lS,A.MW])
v(B.cH,[A.aga,A.an4])
v(B.b2,[A.agb,A.ai_,A.a1b,A.a18,A.a19,A.a1a,A.aix,A.Zv,A.Zu,A.a6m,A.a6n,A.a6o])
v(B.V,[A.t_,A.t8,A.ou,A.nz])
v(B.Y,[A.CP,A.CX,A.CA,A.Tz])
v(B.bW,[A.ahZ,A.a16,A.aiw,A.ahu,A.ahx,A.ahw,A.ahv,A.an3])
u(A.y5,A.Pr)
u(A.y4,B.b0)
v(A.t7,[A.f_,A.Pq])
u(A.mJ,A.Pq)
u(A.y6,A.Ps)
u(A.IC,B.cT)
u(A.U8,B.y)
u(A.U9,A.U8)
u(A.Rk,A.U9)
u(A.ka,B.mt)
u(A.TL,B.l7)
u(A.Cz,A.TL)
u(A.pq,B.a1)
v(A.fx,[A.x7,A.rR,A.xP,A.IR,A.zX])
u(A.zt,B.dA)
x(A.Pr,B.al)
x(A.Pq,B.al)
x(A.Ps,B.al)
w(A.U8,B.a8)
x(A.U9,B.cb)
x(A.TL,B.al)})()
B.b4(b.typeUniverse,JSON.parse('{"atP":{"bb":["atP"]},"ea":{"bb":["atP"]},"IS":{"bE":[],"bL":[]},"t_":{"V":[],"f":[]},"CP":{"Y":["t_<1>"]},"y5":{"al":[],"a9":[]},"y4":{"b0":[],"aU":[],"f":[]},"f_":{"t7":[]},"mJ":{"al":[],"t7":[],"a9":[]},"y6":{"al":[],"a9":[]},"t8":{"V":[],"f":[]},"CX":{"Y":["t8<1>"]},"ka":{"dh":[],"dI":["y"],"ch":[]},"IC":{"cT":[],"ao":[],"f":[]},"Rk":{"cb":["y","ka"],"y":[],"a8":["y","ka"],"u":[],"Q":[],"ai":[],"a8.1":"ka","cb.1":"ka","a8.0":"y"},"ou":{"V":[],"f":[]},"CA":{"Y":["ou"]},"Cz":{"al":[],"a9":[]},"pq":{"a1":[],"f":[]},"x7":{"fx":[]},"rR":{"fx":[]},"xP":{"fx":[]},"IR":{"fx":[]},"zt":{"U":[]},"zX":{"fx":[]},"nz":{"V":[],"f":[]},"Tz":{"Y":["nz"]}}'))
var y=(function rtii(){var x=B.t
return{e:x("aa"),v:x("bB"),G:x("x7"),j:x("rR"),t:x("xP"),o:x("t_<fx>"),m:x("bc<m,q>"),U:x("t7"),k:x("y4"),y:x("k<y5>"),F:x("k<f_<@>>"),s:x("k<i>"),p:x("k<f>"),A:x("aD<Y<V>>"),w:x("bN"),C:x("fx"),c:x("ka"),i:x("pq<fx>"),n:x("zX"),H:x("cD<i>"),N:x("i"),_:x("lS<m,m,m>"),l:x("f"),Y:x("Cz"),z:x("@"),B:x("y?")}})();(function constants(){D.Af=new B.q(4281807924)
D.yg=new B.bv(D.Af,null,null,I.n1,null,null,C.F)
D.yO=new A.IS()
D.AT=new B.q(4293558524)
D.AL=new B.q(4292886779)
D.AH=new B.q(4292149497)
D.Ay=new B.q(4289331455)
D.I7=new B.bc([100,D.AT,200,D.AL,400,D.AH,700,D.Ay],y.m)
D.Ii=new B.lp(D.I7,4292886779)
D.Bm=new B.q(4294964192)
D.Bg=new B.q(4294959282)
D.Bd=new B.q(4294954112)
D.Bc=new B.q(4294948685)
D.Bb=new B.q(4294944550)
D.B3=new B.q(4294675456)
D.AZ=new B.q(4294278144)
D.AV=new B.q(4293880832)
D.AQ=new B.q(4293284096)
D.HS=new B.bc([50,D.Bm,100,D.Bg,200,D.Bd,300,D.Bc,400,D.Bb,500,C.Ba,600,D.B3,700,D.AZ,800,D.AV,900,D.AQ],y.m)
D.Ik=new B.lq(D.HS,4294940672)
D.Te=new A.zt(3,"pooling")
D.Tf=new A.zt(6,"conv_activation")
D.IG=new B.l(20,0)
D.fH=new B.il(0,0,0,0)
D.BW=new V.rF(20,3,2,2,K.fx,null)
D.KV=new B.dT(200,null,D.BW,null)
D.mo=new B.r(!0,W.iG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Qs=new B.aS("this is a demo of [flow_graph]",null,null,null,null,null,null,null,null)
D.QE=new A.lS(3,224,224,y._)})();(function staticFields(){$.ax5=null
$.ax6=null
$.ax7=null
$.ax8=null
$.ary=B.bS("_lastQuoRemDigits")
$.arz=B.bS("_lastQuoRemUsed")
$.Cb=B.bS("_lastRemUsed")
$.arA=B.bS("_lastRem_nsh")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"aOV","kX",()=>A.NI(0))
x($,"aOT","G2",()=>A.NI(1))
x($,"aOU","aAV",()=>A.NI(2))
x($,"aOS","at5",()=>$.G2().lc(0))
x($,"aOQ","aAT",()=>A.NI(1e4))
x($,"aOR","aAU",()=>B.a5s(8))
x($,"aNW","aAj",()=>{var v=new A.aj3(B.aFB(8))
v.Wm()
return v})
w($,"aQ9","aBJ",()=>$.aAj())
w($,"aPF","aBl",()=>C.b.x7("0123456789ABCDEFGHJKMNPQRSTVWXYZ"))
w($,"aPB","aBi",()=>{var v,u=J.auY(32,y.N)
for(v=0;v<32;++v)u[v]=$.aBl()[v]
return u})})()}
$__dart_deferred_initializers__["IEGfx98sADqH/bCIY7eUXzHeP6s="] = $__dart_deferred_initializers__.current
