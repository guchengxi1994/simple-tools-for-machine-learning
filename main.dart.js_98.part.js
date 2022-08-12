self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aFl(){return new A.mM("\u8fb9\u7f18\u68c0\u6d4b",null)},
mM:function mM(d,e){this.c=d
this.a=e},
Pp:function Pp(d,e){var _=this
_.z=_.y=$
_.d=!1
_.e=d
_.f=$
_.a=null
_.b=e
_.c=null},
ais:function ais(d){this.a=d},
air:function air(d,e){this.a=d
this.b=e},
ait:function ait(d){this.a=d},
aip:function aip(d){this.a=d},
aiq:function aiq(){},
aiu:function aiu(d){this.a=d},
ain:function ain(d){this.a=d},
aio:function aio(){}},C,B,E,I,D,F,G,K,L,M,N,J,H
A=a.updateHolder(c[17],A)
C=c[2]
B=c[0]
E=c[50]
I=c[95]
D=c[97]
F=c[39]
G=c[88]
K=c[66]
L=c[60]
M=c[81]
N=c[44]
J=c[1]
H=c[32]
A.mM.prototype={
i5(d){return new A.Pp($.rp(),C.k)}}
A.Pp.prototype={
gcL(){var x=this.y
return x===$?this.y=null:x},
grY(){var x=this.z
return x===$?this.z=null:x},
nv(d){var x,w=this,v=null,u=y.e,t=B.bt(B.b([E.fe(I.fW,new A.ais(w),v),E.fe(D.Qg,new A.ait(w),v),E.fe(D.Qe,new A.aiu(w),v)],u),C.r,C.q,C.m,v),s=y.k,r=d.F(s).f
if(w.gcL()==null)x=B.ab(v,v,v,v,v,v,v,v,v,v)
else{x=w.gcL()
x.toString
x=F.h3(x,G.cd,v,1)}r=B.bO(x,v,0.4*r.a.a)
s=d.F(s).f
if(w.grY()==null)x=B.ab(v,v,v,v,v,v,v,v,v,v)
else{x=w.grY()
x.toString
x=F.h3(x,G.cd,v,1)}return new B.bN(K.L,L.c4(B.b([t,M.ai,B.bt(B.b([r,B.bO(x,v,0.4*s.a.a)],u),C.r,C.fy,C.m,v)],u),C.r,C.q,C.m),v)}}
var z=a.updateTypes([])
A.ais.prototype={
$0(){var x=0,w=B.M(y.f),v=this,u,t
var $async$$0=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:t=new N.k0()
x=2
return B.Q(t.hY(B.b(["jpg","png"],y.h)),$async$$0)
case 2:if(t.a!=null){u=v.a
u.Z(new A.air(u,t))}return B.K(null,w)}})
return B.L($async$$0,w)},
$S:2}
A.air.prototype={
$0(){this.a.y=this.b.a},
$S:0}
A.ait.prototype={
$0(){var x=0,w=B.M(y.f),v,u=this,t,s,r,q
var $async$$0=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:q=u.a
if(q.gcL()==null){x=1
break}q.Z(new A.aip(q))
t=q.gcL()
t.toString
s=y.g
x=3
return B.Q(q.e.dX("http://192.168.50.75:14378/edgeDetection/canny",B.ay(["imgData",C.ay.gcs().aL(t)],s,s)),$async$$0)
case 3:r=e
if(r!=null){q.z=C.aD.aL(J.a2(J.a2(r.a,"data"),"imgData"))
q.d=!1
q.Z(new A.aiq())}case 1:return B.K(v,w)}})
return B.L($async$$0,w)},
$S:2}
A.aip.prototype={
$0(){this.a.d=!0},
$S:0}
A.aiq.prototype={
$0(){},
$S:0}
A.aiu.prototype={
$0(){var x=0,w=B.M(y.f),v,u=this,t,s,r,q
var $async$$0=B.N(function(d,e){if(d===1)return B.J(e,w)
while(true)switch(x){case 0:q=u.a
if(q.gcL()==null){x=1
break}q.Z(new A.ain(q))
t=q.gcL()
t.toString
s=y.g
x=3
return B.Q(q.e.dX("http://192.168.50.75:14378/edgeDetection/sobel",B.ay(["imgData",C.ay.gcs().aL(t)],s,s)),$async$$0)
case 3:r=e
if(r!=null){q.z=C.aD.aL(J.a2(J.a2(r.a,"data"),"imgData"))
q.d=!1
q.Z(new A.aio())}case 1:return B.K(v,w)}})
return B.L($async$$0,w)},
$S:2}
A.ain.prototype={
$0(){this.a.d=!0},
$S:0}
A.aio.prototype={
$0(){},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.mM,H.la)
x(A.Pp,H.jP)
w(B.bR,[A.ais,A.air,A.ait,A.aip,A.aiq,A.aiu,A.ain,A.aio])})()
B.b1(b.typeUniverse,JSON.parse('{"mM":{"T":[],"f":[]},"Pp":{"a_":["mM"]}}'))
var y={h:B.r("k<i>"),e:B.r("k<f>"),k:B.r("bM"),g:B.r("i"),f:B.r("~")};(function constants(){D.Qe=new B.aM("Sobel",null,null,null,null,null,null,null,null)
D.Qg=new B.aM("Canny",null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["/QN8XaKaGmrU/gdq+M2Cfr5FUyg="] = $__dart_deferred_initializers__.current
