self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={xW:function xW(){},fL:function fL(){},y6:function y6(d){this.a=d},NQ:function NQ(){},Pp:function Pp(d){this.a=d},e8:function e8(){},BW:function BW(){},BV:function BV(){},PR:function PR(){},xi:function xi(){},yS:function yS(){},Ey:function Ey(){},za:function za(){},Oj:function Oj(d,e,f){this.a=d
this.b=e
this.c=f},Yp:function Yp(){},EO:function EO(){},I4:function I4(){},AE:function AE(){},Zl:function Zl(){},FF:function FF(){},Id:function Id(){},CQ:function CQ(){},JK:function JK(d,e,f){this.a=d
this.b=e
this.c=f},hV:function hV(d,e,f){this.a=d
this.b=e
this.c=f},
adq(d){var x,w,v
if(D.o.gM(d.a))throw B.c(B.V("The input is not exists."))
for(x=$.aau().a,x=x.gaU(x),x=new B.dQ(J.au(x.a),x.b),w=B.q(x).z[1];x.u();){v=x.a
if(v==null)v=w.a(v)
if(v.oX(d))return v.fl(d)}throw B.c(B.A("The input is not supported."))},
DS:function DS(d){this.a=d},
Pw:function Pw(){this.a=null},
kj:function kj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NI:function NI(d){this.a=d},
a6s(){return new A.kZ(null)},
kZ:function kZ(d){this.a=d},
Te:function Te(d,e){this.a=d
this.b=e},
Tf:function Tf(d,e){this.a=d
this.b=e},
Tg:function Tg(d,e){this.a=d
this.b=e},
Th:function Th(d,e){this.a=d
this.b=e},
a79(d,e){d=d+J.k(e)&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6}},J,B,D,C,E
A=a.updateHolder(c[3],A)
J=c[1]
B=c[0]
D=c[2]
C=c[6]
E=c[5]
A.xW.prototype={}
A.fL.prototype={
hq(d,e){var x,w,v,u
if(d===e)return!0
x=J.ao(d)
w=x.gl(d)
v=J.ao(e)
if(w!==v.gl(e))return!1
for(u=0;u<w;++u)if(!J.f(x.i(d,u),v.i(e,u)))return!1
return!0}}
A.y6.prototype={
H(d,e){var x,w,v,u=null,t=B.a4W(e),s=t.b
if(s==null)s=16
x=t.c
if(x==null)x=0
w=t.d
if(w==null)w=0
v=t.e
if(v==null)v=0
return B.nA(B.K4(B.hp(u,u,u,u,new B.eI(u,u,new B.cy(D.q,D.q,B.acI(e,u,x),D.q),u,u,u,D.aK),x,new B.dN(w,0,v,0),u,u),u,u),s,u)}}
A.NQ.prototype={}
A.Pp.prototype={
gl(d){return this.a.length}}
A.e8.prototype={
f2(d,e){var x,w,v
if(e){x=D.o.dR(d)
w=B.aa(x).j("bH<1>")
d=B.ai(new B.bH(x,w),!0,w.j("aY.E"))}for(x=d.length,v=0,w="";v<d.length;d.length===x||(0,B.J)(d),++v)w+=D.d.jU(J.abI(d[v],16),2,"0")
x=B.a2y(w.charCodeAt(0)==0?w:w,16)
return x==null?0:x},
le(d){return this.f2(d,!1)}}
A.BW.prototype={
oX(d){var x=this,w=d.a,v=w.length,u=D.o.ap(w,0,x.gkg().gq7().length),t=D.o.ap(w,v-x.gkg().guw().length,v),s=new A.fL().hq(u,x.gkg().gq7()),r=new A.fL().hq(t,x.gkg().guw())
return s&&r}}
A.BV.prototype={}
A.PR.prototype={
oX(d){var x,w,v,u,t,s,r,q,p,o,n,m=d.a,l=m.length
for(x=[C.y3,C.y4],w=l-1,v=0;v<2;++v){u=x[v]
for(t=[C.xg],s=0;s<1;++s){r=t[s]
q=new Uint8Array(m.subarray(0,B.e1(0,6,l)))
p=new Uint8Array(m.subarray(w,B.e1(w,l,l)))
o=new A.fL().hq(u,q)
n=new A.fL().hq(r,p)
if(o&&n)return!0}}return!1}}
A.xi.prototype={
glj(){return"bmp"},
fl(d){var x=d.a,w=D.o.ap(x,18,22),v=D.o.ap(x,22,26)
return new A.hV(this.f2(w,!0),this.f2(v,!0),!1)},
oX(d){var x=D.o.ap(d.a,0,2)
return x[0]===66&&x[1]===77}}
A.yS.prototype={
glj(){return"gif"},
fl(d){var x=d.a,w=D.o.ap(x,6,8),v=D.o.ap(x,8,10)
return new A.hV(this.f2(w,!0),this.f2(v,!0),!1)}}
A.Ey.prototype={}
A.za.prototype={
glj(){return"jpeg"},
fl(d){var x,w,v,u,t,s,r,q,p,o,n=this
for(x=d.a,w=x.length,v=2,u=1;!0;){t=n.Ld(d,v)
if(t==null)throw B.c(B.bm("Invalid jpeg file"))
s=t.a
if(s===225){r=n.Lo(new Uint8Array(x.subarray(v,B.e1(v,t.c+t.b,w))))
if(r!=null)u=r}if(s===192||s===194){s=v+7
q=new Uint8Array(x.subarray(s,B.e1(s,v+9,w)))
p=v+5
o=new Uint8Array(x.subarray(p,B.e1(p,s,w)))
return new A.hV(n.le(q),n.le(o),D.b.v(B.b([5,6,7,8],y.r),u))}else v+=t.b}},
Ld(d,e){var x,w,v,u,t,s
try{v=e+4
u=d.a
x=D.o.ap(u,e,v)
if(J.aL(x,0)!==255)return null
w=D.o.ap(u,e+2,v)
v=this.le(w)
t=J.aL(x,1)
return new A.JK(t,v+2,e)}catch(s){return null}},
gkg(){return new A.Yp()},
Lo(d){var x,w,v,u
if(d.length<14)return null
if(!new A.fL().hq(D.o.ap(d,4,10),[69,120,105,102,0,0]))return null
x=new A.Oj(this,d,d[10]===73)
w=x.$2(18,20)
for(v=20,u=0;u<w;++u){if(x.$2(v,v+2)===274)return x.$2(v+8,v+10)
v+=12}return null}}
A.Yp.prototype={
guw(){return C.wI},
gq7(){return C.wH}}
A.EO.prototype={}
A.I4.prototype={}
A.AE.prototype={
glj(){return"png"},
fl(d){var x=d.a,w=D.o.ap(x,16,20),v=D.o.ap(x,20,24)
return new A.hV(this.le(w),this.le(v),!1)},
gkg(){return new A.Zl()}}
A.Zl.prototype={
guw(){return C.xI},
gq7(){return C.wL}}
A.FF.prototype={}
A.Id.prototype={}
A.CQ.prototype={
glj(){return"webp"},
fl(d){var x,w,v=this,u=d.a
if(new A.fL().hq(D.o.ap(u,12,16),new B.k_("VP8X"))){x=D.o.ap(u,24,27)
w=D.o.ap(u,27,29)
return new A.hV(v.f2(x,!0)+1,v.f2(w,!0)+1,!1)}else{x=D.o.ap(u,26,28)
w=D.o.ap(u,28,30)
return new A.hV(v.f2(x,!0),v.f2(w,!0),!1)}},
oX(d){var x=d.a,w=D.o.ap(x,0,4),v=D.o.ap(x,8,12)
if(C.jP.hq(w,C.xj)&&C.jP.hq(v,C.xk))return!0
return!1}}
A.JK.prototype={
h(d){return"BlockEntity (type:"+this.a+", length:"+this.b+")"},
gl(d){return this.b}}
A.hV.prototype={
h(d){return"Size( "+this.a+", "+this.b+", needRotate: "+this.c+" )"},
k(d,e){var x=this
if(e==null)return!1
if(e===x)return!0
if(e instanceof A.hV)return x.a===e.a&&x.b===e.b&&x.c===e.c
return!1},
gt(d){var x=A.a79(A.a79(0,this.a),this.b),w=x+((x&67108863)<<3)&536870911
w^=w>>>11
return w+((w&16383)<<15)&536870911}}
A.DS.prototype={
J0(d){var x,w,v
for(x=this.a,w=0;w<5;++w){v=d[w]
x.m(0,v.glj(),v)}},
gO(d){var x=this.a
x=x.gaU(x)
return new B.dQ(J.au(x.a),x.b)}}
A.Pw.prototype={}
A.kj.prototype={
H(d,e){var x=null
return B.a5g(!1,!0,B.nA(B.a4M(B.b([this.c,C.Cy,this.d],y.u),D.dT,D.zW),60,150),x,!0,x,x,x,x,x,x,x,x,x,new A.NI(this),x)}}
A.kZ.prototype={
H(d,e){var x=this,w=null,v=e.R(y.A).f
return B.hp(w,E.a2C(B.a4M(B.b([C.Cw,C.Cx,new A.kj(C.wb,C.GM,new A.Te(x,e),w),C.vr,new A.kj(C.wa,C.GN,new A.Tf(x,e),w),new A.kj(C.wc,C.GQ,new A.Tg(x,e),w),new A.kj(C.we,C.GP,new A.Th(x,e),w)],y.u),D.dT,D.pH),w,D.au),D.pN,w,w,v.a.b,w,w,150)},
pd(d){return this.Ul(d)},
Ul(d){var x=0,w=B.a1(y.b),v,u,t,s,r
var $async$pd=B.a2(function(e,f){if(e===1)return B.Z(f,w)
while(true)switch(x){case 0:B.wO().$1("clicked")
x=2
return B.a5($.a9o().cC(B.b(["jpg","png"],y.x),D.ks),$async$pd)
case 2:v=f
if(v!=null){u=v.a
t=J.bv(u)
s=t.gE(u).c
if(s!=null){B.wO().$1("memoryImageSize = "+A.adq(new A.Pp(s)).h(0))
r=new A.Pw()
r.a=s
t.gE(u).toString
u=B.kN(d,!1,y.q)
u.b=1
u.a=r
u.ac()}}return B.a_(null,w)}})
return B.a0($async$pd,w)}}
var z=a.updateTypes([])
A.Oj.prototype={
$2(d,e){return this.a.f2(D.o.ap(this.b,d,e),this.c)},
$S:88}
A.NI.prototype={
$0(){return this.a.e.$0()},
$S:0}
A.Te.prototype={
$0(){return this.a.pd(this.b)},
$S:0}
A.Tf.prototype={
$0(){var x=B.kN(this.b,!1,y.q)
x.b/=1.2
x.ac()
return null},
$S:0}
A.Tg.prototype={
$0(){var x=B.kN(this.b,!1,y.q)
x.b*=1.2
x.ac()
return null},
$S:0}
A.Th.prototype={
$0(){var x=B.kN(this.b,!1,y.q)
x.b=1
x.ac()
return null},
$S:0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.z,[A.xW,A.fL,A.NQ,A.e8,A.BW,A.BV,A.PR,A.I4,A.Id,A.JK,A.hV,A.Pw])
w(B.ar,[A.y6,A.kj,A.kZ])
v(A.Pp,A.NQ)
w(A.e8,[A.xi,A.Ey,A.EO,A.FF,A.CQ])
v(A.yS,A.Ey)
v(A.za,A.EO)
v(A.Oj,B.jZ)
v(A.Yp,A.I4)
v(A.AE,A.FF)
v(A.Zl,A.Id)
v(A.DS,B.mL)
w(B.jY,[A.NI,A.Te,A.Tf,A.Tg,A.Th])
x(A.Ey,A.PR)
x(A.EO,A.BW)
x(A.I4,A.BV)
x(A.FF,A.BW)
x(A.Id,A.BV)})()
B.a_r(b.typeUniverse,JSON.parse('{"y6":{"ar":[],"j":[]},"xi":{"e8":[]},"yS":{"e8":[]},"za":{"e8":[]},"AE":{"e8":[]},"CQ":{"e8":[]},"DS":{"o":["e8"],"o.E":"e8"},"kj":{"ar":[],"j":[]},"kZ":{"ar":[],"j":[]}}'))
B.a3b(b.typeUniverse,JSON.parse('{"xW":1,"fL":1}'))
var y={q:B.X("hz"),x:B.X("t<p>"),u:B.X("t<j>"),r:B.X("t<n>"),A:B.X("iS"),b:B.X("@")};(function constants(){var x=a.makeConstList
C.tF=new A.xi()
C.IU=new A.xW()
C.tP=new A.yS()
C.tX=new A.za()
C.jP=new A.fL()
C.u5=new A.AE()
C.uj=new A.CQ()
C.vr=new A.y6(null)
C.w6=new B.eS(59133,!1)
C.wa=new B.fG(C.w6,null,null)
C.w8=new B.eS(984319,!1)
C.wb=new B.fG(C.w8,30,null)
C.w7=new B.eS(59134,!1)
C.wc=new B.fG(C.w7,null,null)
C.w4=new B.eS(58644,!1)
C.we=new B.fG(C.w4,null,null)
C.wH=B.b(x([255,216]),y.r)
C.wI=B.b(x([255,217]),y.r)
C.wL=B.b(x([137,80,78,71,13,10,26,10]),y.r)
C.xg=B.b(x([59]),y.r)
C.xj=B.b(x([82,73,70,70]),y.r)
C.xk=B.b(x([87,69,66,80]),y.r)
C.xI=B.b(x([0,0,0,0,73,69,78,68,174,66,96,130]),y.r)
C.y4=B.b(x([71,73,70,56,55,97]),y.r)
C.y3=B.b(x([71,73,70,56,57,97]),y.r)
C.FY=new B.l(!0,null,null,null,null,null,25,D.be,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.GO=new B.h2("Viewer",null,C.FY,null,null,null)
C.uu=new B.jW(D.a0,null,null,C.GO,null)
C.Cw=new B.jf(150,50,C.uu,null)
C.Cx=new B.jf(null,20,null,null)
C.Cy=new B.jf(null,5,null,null)
C.GM=new B.h2("Open",null,null,null,null,null)
C.GN=new B.h2("Zoom In",null,null,null,null,null)
C.GP=new B.h2("Reset",null,null,null,null,null)
C.GQ=new B.h2("Zoom Out",null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"amh","aau",()=>{var w=new A.DS(B.y(B.X("p"),B.X("e8")))
w.J0(B.b([C.tP,C.tX,C.uj,C.u5,C.tF],B.X("t<e8>")))
return w})})()}
$__dart_deferred_initializers__["m4LQ/2W1CGEWCTyC7QydWUxQ0qk="] = $__dart_deferred_initializers__.current
