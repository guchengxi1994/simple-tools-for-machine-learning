self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aGH(){return new A.n1("\u8fb9\u7f18\u68c0\u6d4b",null)},
n1:function n1(d,e){this.c=d
this.a=e},
PW:function PW(d,e){var _=this
_.z=_.y=$
_.d=!1
_.e=d
_.f=$
_.a=null
_.b=e
_.c=null},
ajw:function ajw(d){this.a=d},
ajv:function ajv(d,e){this.a=d
this.b=e},
ajx:function ajx(d){this.a=d},
ajt:function ajt(d){this.a=d},
aju:function aju(){},
ajy:function ajy(d){this.a=d},
ajr:function ajr(d){this.a=d},
ajs:function ajs(){}},C,B,E,I,D,F,G,K,L,M,N,J,H
A=a.updateHolder(c[17],A)
C=c[2]
B=c[0]
E=c[52]
I=c[100]
D=c[102]
F=c[41]
G=c[93]
K=c[66]
L=c[62]
M=c[86]
N=c[46]
J=c[1]
H=c[39]
A.n1.prototype={
hv(d){return new A.PW($.ov(),C.k)}}
A.PW.prototype={
gcj(){var x=this.y
return x===$?this.y=null:x},
glh(){var x=this.z
return x===$?this.z=null:x},
lU(d){var x,w=this,v=null,u=y.e,t=B.bj(B.b([E.ek(I.eK,new A.ajw(w),v),E.ek(D.RH,new A.ajx(w),v),E.ek(D.RF,new A.ajy(w),v)],u),C.q,C.r,C.m,v),s=y.k,r=d.F(s).f
if(w.gcj()==null)x=B.a6(v,v,v,v,v,v,v,v,v,v)
else{x=w.gcj()
x.toString
x=F.eR(x,G.bD,v,1)}r=B.bx(x,v,0.4*r.a.a)
s=d.F(s).f
if(w.glh()==null)x=B.a6(v,v,v,v,v,v,v,v,v,v)
else{x=w.glh()
x.toString
x=F.eR(x,G.bD,v,1)}return new B.bM(K.H,L.c_(B.b([t,M.ah,B.bj(B.b([r,B.bx(x,v,0.4*s.a.a)],u),C.q,C.eh,C.m,v)],u),C.q,C.r,C.m),v)}}
var z=a.updateTypes([])
A.ajw.prototype={
$0(){var x=0,w=B.M(y.f),v=this,u,t
var $async$$0=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:t=new N.id()
x=2
return B.P(t.fS(B.b(["jpg","png"],y.h)),$async$$0)
case 2:if(t.a!=null){u=v.a
u.W(new A.ajv(u,t))}return B.K(null,w)}})
return B.L($async$$0,w)},
$S:2}
A.ajv.prototype={
$0(){this.a.y=this.b.a},
$S:0}
A.ajx.prototype={
$0(){var x=0,w=B.M(y.f),v,u=this,t,s,r,q
var $async$$0=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:q=u.a
if(q.gcj()==null){x=1
break}q.W(new A.ajt(q))
t=q.gcj()
t.toString
s=y.g
x=3
return B.P(q.e.dM("http://192.168.50.75:14378/edgeDetection/canny",B.ae(["imgData",C.aq.gcl().aH(t)],s,s)),$async$$0)
case 3:r=e
if(r!=null){q.z=C.aC.aH(J.a1(J.a1(r.a,"data"),"imgData"))
q.d=!1
q.W(new A.aju())}case 1:return B.K(v,w)}})
return B.L($async$$0,w)},
$S:2}
A.ajt.prototype={
$0(){this.a.d=!0},
$S:0}
A.aju.prototype={
$0(){},
$S:0}
A.ajy.prototype={
$0(){var x=0,w=B.M(y.f),v,u=this,t,s,r,q
var $async$$0=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:q=u.a
if(q.gcj()==null){x=1
break}q.W(new A.ajr(q))
t=q.gcj()
t.toString
s=y.g
x=3
return B.P(q.e.dM("http://192.168.50.75:14378/edgeDetection/sobel",B.ae(["imgData",C.aq.gcl().aH(t)],s,s)),$async$$0)
case 3:r=e
if(r!=null){q.z=C.aC.aH(J.a1(J.a1(r.a,"data"),"imgData"))
q.d=!1
q.W(new A.ajs())}case 1:return B.K(v,w)}})
return B.L($async$$0,w)},
$S:2}
A.ajr.prototype={
$0(){this.a.d=!0},
$S:0}
A.ajs.prototype={
$0(){},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.n1,H.jY)
x(A.PW,H.j0)
w(B.bQ,[A.ajw,A.ajv,A.ajx,A.ajt,A.aju,A.ajy,A.ajr,A.ajs])})()
B.b0(b.typeUniverse,JSON.parse('{"n1":{"S":[],"d":[]},"PW":{"X":["n1"]}}'))
var y={h:B.q("k<i>"),e:B.q("k<d>"),k:B.q("bL"),g:B.q("i"),f:B.q("~")};(function constants(){D.RF=new B.aF("Sobel",null,null,null,null,null,null,null,null)
D.RH=new B.aF("Canny",null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["9H8yKK7g2AVIYB+cZXC874G+rBI="] = $__dart_deferred_initializers__.current
