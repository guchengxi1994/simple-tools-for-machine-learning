self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
oH(d,e,f,g){var x=e==null&&g===C.aa
return new A.IN(g,f,e,x,d,null)},
IN:function IN(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a4F:function a4F(d,e,f){this.a=d
this.b=e
this.c=f},
ue:function ue(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
OO:function OO(d,e){var _=this
_.ch=_.p3=null
_.CW=!1
_.d=_.c=_.b=_.a=_.cx=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
BD:function BD(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.ao=g
_.l$=h
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
_.ay=i
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
ad6:function ad6(d,e){this.a=d
this.b=e},
ad5:function ad5(d,e){this.a=d
this.b=e},
CW:function CW(){},
QK:function QK(){},
QL:function QL(){}},D,B,C
A=a.updateHolder(c[25],A)
D=c[28]
B=c[0]
C=c[2]
A.IN.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.aqa(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.d_(x,q,t)
x=u.r
w=x?B.j8(e):u.f
v=D.aix(r,w,C.G,!1,t,t,t,t,new A.a4F(s,u,r))
return x&&w!=null?D.an2(v):v}}
A.ue.prototype={
aC(d){var x=new A.BD(this.e,this.f,this.r,B.aj(y.h),null,B.aj(y.d))
x.gal()
x.CW=!0
x.sb_(null)
return x},
aF(d,e){var x
e.sdg(this.e)
e.sbE(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.am()
e.ah()}},
bw(d){return new A.OO(this,C.L)}}
A.OO.prototype={}
A.BD.prototype={
sdg(d){if(d===this.l)return
this.l=d
this.X()},
sbE(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.O(0,x.grP())
x.t=e
if(x.b!=null)e.aa(0,x.grP())
x.X()},
YK(){this.am()
this.ah()},
dX(d){if(!(d.e instanceof B.c4))d.e=new B.c4()},
af(d){this.Sv(d)
this.t.aa(0,this.grP())},
a6(d){this.t.O(0,this.grP())
this.Sw(0)},
gal(){return!0},
ga19(){switch(B.bo(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gZp(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bo(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
G7(d){switch(B.bo(this.l).a){case 0:return new B.a9(0,1/0,d.c,d.d)
case 1:return new B.a9(d.a,d.b,0,1/0)}},
aP(d){var x=this.l$
if(x!=null)return x.a0(C.Q,d,x.gb1())
return 0},
aO(d){var x=this.l$
if(x!=null)return x.a0(C.a7,d,x.gbe())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.a0(C.M,d,x.gaW())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.V,d,x.gb5())
return 0},
bR(d){var x=this.l$
if(x==null)return new B.N(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aT(x.fL(this.G7(d)))},
bC(){var x=this,w=y.a.a(B.t.prototype.ga2.call(x)),v=x.l$
if(v==null)x.k1=new B.N(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.co(0,x.G7(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aT(v)}x.t.tB(x.ga19())
x.t.tA(0,x.gZp())},
oy(d){var x=this
switch(x.l.a){case 0:return new B.k(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.k(-d,0)}},
Ii(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ar(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.oy(x)
w=new A.ad6(t,x)
x=t.Ii(x)&&t.T!==C.t
v=t.ao
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.saj(0,d.jt(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.saj(0,null)
w.$2(d,e)}}},
n(d){this.ao.saj(0,null)
this.iX(0)},
df(d,e){var x=this.t.as
x.toString
x=this.oy(x)
e.aJ(0,x.a,x.b)},
io(d){var x=this,w=x.t.as
w.toString
w=x.oy(w)
if(x.Ii(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cu(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.k5(new A.ad5(w,e),w.oy(x),e)}return!1},
lt(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giH()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.os(x,f)}w=B.lR(d.cf(0,q.l$),f)
x=q.l$.k1
x.toString
switch(q.l.a){case 0:v=q.k1.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.k1.a
t=w.a
s=w.c-t
break
case 2:v=q.k1.b
t=w.b
s=w.d-t
break
case 3:v=q.k1.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new D.os(r,w.ca(q.oy(r)))},
dv(d,e,f,g){this.Ec(d,null,f,D.anh(d,e,f,this.t,g,this))},
nW(){return this.dv(C.ay,null,C.u,null)},
kM(d){return this.dv(C.ay,null,C.u,d)},
lH(d,e,f){return this.dv(d,null,e,f)},
kN(d,e){return this.dv(C.ay,d,C.u,e)},
Ag(d){var x
switch(B.bo(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iHV:1}
A.CW.prototype={
af(d){var x
this.de(d)
x=this.l$
if(x!=null)x.af(d)},
a6(d){var x
this.cV(0)
x=this.l$
if(x!=null)x.a6(0)}}
A.QK.prototype={}
A.QL.prototype={}
var z=a.updateTypes(["z(z)","ue(H,fR)","~()","~({curve:e0,descendant:t?,duration:aI,rect:u?})"])
A.a4F.prototype={
$2(d,e){return new A.ue(this.c,e,C.aS,this.a.a,null)},
$S:z+1}
A.ad6.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.dc(x,e.a_(0,this.b))},
$S:18}
A.ad5.prototype={
$2(d,e){return this.a.l$.bz(d,e)},
$S:9};(function aliases(){var x=A.CW.prototype
x.Sv=x.af
x.Sw=x.a6})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.BD.prototype,"grP","YK",2)
w(u,"gb1","aP",0)
w(u,"gbe","aO",0)
w(u,"gaW","aL",0)
w(u,"gb5","aN",0)
v(u,"gnV",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dv","nW","kM","lH","kN"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.IN,B.a1)
u(B.dZ,[A.a4F,A.ad6,A.ad5])
v(A.ue,B.aN)
v(A.QK,B.rI)
v(A.QL,A.QK)
v(A.OO,A.QL)
v(A.CW,B.w)
v(A.BD,A.CW)
x(A.CW,B.aD)
w(A.QK,B.xn)
w(A.QL,D.K2)})()
B.bU(b.typeUniverse,JSON.parse('{"ue":{"aN":[],"am":[],"h":[]},"IN":{"a1":[],"h":[]},"OO":{"b2":[],"ao":[],"H":[]},"BD":{"w":[],"aD":["w"],"HV":[],"t":[],"J":[],"ac":[]}}'))
var y={a:B.G("a9"),h:B.G("hM"),d:B.G("bB")}}
$__dart_deferred_initializers__["rqJZS1IpvQup6KV34qN8onZptz0="] = $__dart_deferred_initializers__.current
