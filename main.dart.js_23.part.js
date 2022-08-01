self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
ox(d,e,f,g){var x=e==null&&g===C.a9
return new A.Is(g,f,e,x,d,null)},
Is:function Is(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a4_:function a4_(d,e,f){this.a=d
this.b=e
this.c=f},
u3:function u3(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Ot:function Ot(d,e){var _=this
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
Bm:function Bm(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.an=g
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
acm:function acm(d,e){this.a=d
this.b=e},
acl:function acl(d,e){this.a=d
this.b=e},
CE:function CE(){},
Qn:function Qn(){},
Qo:function Qo(){}},D,B,C
A=a.updateHolder(c[24],A)
D=c[27]
B=c[0]
C=c[2]
A.Is.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.ap9(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.d9(x,q,t)
x=u.r
w=x?B.j1(e):u.f
v=D.ahD(r,w,C.M,!1,t,t,t,t,new A.a4_(s,u,r))
return x&&w!=null?D.am2(v):v}}
A.u3.prototype={
aC(d){var x=new A.Bm(this.e,this.f,this.r,B.ag(y.h),null,B.ag(y.d))
x.gal()
x.CW=!0
x.saZ(null)
return x},
aF(d,e){var x
e.sdf(this.e)
e.sbC(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.am()
e.ah()}},
bt(d){return new A.Ot(this,C.J)}}
A.Ot.prototype={}
A.Bm.prototype={
sdf(d){if(d===this.l)return
this.l=d
this.X()},
sbC(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.O(0,x.grC())
x.t=e
if(x.b!=null)e.aa(0,x.grC())
x.X()},
Y8(){this.am()
this.ah()},
dS(d){if(!(d.e instanceof B.c2))d.e=new B.c2()},
af(d){this.S1(d)
this.t.aa(0,this.grC())},
a6(d){this.t.O(0,this.grC())
this.S2(0)},
gal(){return!0},
ga0u(){switch(B.bn(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gYO(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bn(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
FM(d){switch(B.bn(this.l).a){case 0:return new B.a8(0,1/0,d.c,d.d)
case 1:return new B.a8(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.a0(C.Q,d,x.gb1())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.a7,d,x.gbb())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.a0(C.K,d,x.gaV())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.a0(C.T,d,x.gb5())
return 0},
bP(d){var x=this.l$
if(x==null)return new B.O(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aT(x.fJ(this.FM(d)))},
bA(){var x=this,w=y.a.a(B.t.prototype.ga2.call(x)),v=x.l$
if(v==null)x.k1=new B.O(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.ck(0,x.FM(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aT(v)}x.t.tn(x.ga0u())
x.t.tm(0,x.gYO())},
or(d){var x=this
switch(x.l.a){case 0:return new B.l(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.l(-d,0)}},
HT(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ap(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.or(x)
w=new A.acm(t,x)
x=t.HT(x)&&t.T!==C.r
v=t.an
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.saj(0,d.jm(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.saj(0,null)
w.$2(d,e)}}},
n(d){this.an.saj(0,null)
this.iT(0)},
de(d,e){var x=this.t.as
x.toString
x=this.or(x)
e.aI(0,x.a,x.b)},
ii(d){var x=this,w=x.t.as
w.toString
w=x.or(w)
if(x.HT(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cq(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jV(new A.acl(w,e),w.or(x),e)}return!1},
lo(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giC()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.oj(x,f)}w=B.lG(d.da(0,q.l$),f)
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
return new D.oj(r,w.cc(q.or(r)))},
dt(d,e,f,g){this.DR(d,null,f,D.amh(d,e,f,this.t,g,this))},
nQ(){return this.dt(C.aw,null,C.t,null)},
kF(d){return this.dt(C.aw,null,C.t,d)},
lC(d,e,f){return this.dt(d,null,e,f)},
kG(d,e){return this.dt(C.aw,d,C.t,e)},
zZ(d){var x
switch(B.bn(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iHA:1}
A.CE.prototype={
af(d){var x
this.dd(d)
x=this.l$
if(x!=null)x.af(d)},
a6(d){var x
this.cT(0)
x=this.l$
if(x!=null)x.a6(0)}}
A.Qn.prototype={}
A.Qo.prototype={}
var z=a.updateTypes(["y(y)","u3(J,fO)","~()","~({curve:dW,descendant:t?,duration:aK,rect:u?})"])
A.a4_.prototype={
$2(d,e){return new A.u3(this.c,e,C.aR,this.a.a,null)},
$S:z+1}
A.acm.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d9(x,e.a_(0,this.b))},
$S:17}
A.acl.prototype={
$2(d,e){return this.a.l$.by(d,e)},
$S:9};(function aliases(){var x=A.CE.prototype
x.S1=x.af
x.S2=x.a6})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Bm.prototype,"grC","Y8",2)
w(u,"gb1","aO",0)
w(u,"gbb","aN",0)
w(u,"gaV","aK",0)
w(u,"gb5","aM",0)
v(u,"gnP",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dt","nQ","kF","lC","kG"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Is,B.a_)
u(B.ek,[A.a4_,A.acm,A.acl])
v(A.u3,B.aM)
v(A.Qn,B.rw)
v(A.Qo,A.Qn)
v(A.Ot,A.Qo)
v(A.CE,B.w)
v(A.Bm,A.CE)
x(A.CE,B.aD)
w(A.Qn,B.xd)
w(A.Qo,D.JK)})()
B.bW(b.typeUniverse,JSON.parse('{"u3":{"aM":[],"ak":[],"h":[]},"Is":{"a_":[],"h":[]},"Ot":{"b0":[],"an":[],"J":[]},"Bm":{"w":[],"aD":["w"],"HA":[],"t":[],"I":[],"ac":[]}}'))
var y={a:B.E("a8"),h:B.E("hG"),d:B.E("bC")}}
$__dart_deferred_initializers__["Pt3T1sy45XQHdZSWVEXH47xMpSU="] = $__dart_deferred_initializers__.current
