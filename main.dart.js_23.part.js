self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
ou(d,e,f,g){var x=e==null&&g===C.a8
return new A.Io(g,f,e,x,d,null)},
Io:function Io(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a3C:function a3C(d,e,f){this.a=d
this.b=e
this.c=f},
u0:function u0(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Ol:function Ol(d,e){var _=this
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
Bl:function Bl(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.S=f
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
ac0:function ac0(d,e){this.a=d
this.b=e},
ac_:function ac_(d,e){this.a=d
this.b=e},
CD:function CD(){},
Qf:function Qf(){},
Qg:function Qg(){}},D,B,C
A=a.updateHolder(c[24],A)
D=c[27]
B=c[0]
C=c[2]
A.Io.prototype={
G(d,e){var x,w,v,u=this,t=null,s={},r=D.aoN(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.di(x,q,t)
x=u.r
w=x?B.iU(e):u.f
v=D.ahj(r,w,C.P,!1,t,t,t,t,new A.a3C(s,u,r))
return x&&w!=null?D.alG(v):v}}
A.u0.prototype={
aC(d){var x=new A.Bl(this.e,this.f,this.r,B.ag(y.h),null,B.ag(y.d))
x.gal()
x.CW=!0
x.saZ(null)
return x},
aF(d,e){var x
e.sdd(this.e)
e.sbC(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.am()
e.ah()}},
bs(d){return new A.Ol(this,C.J)}}
A.Ol.prototype={}
A.Bl.prototype={
sdd(d){if(d===this.l)return
this.l=d
this.X()},
sbC(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.O(0,x.grv())
x.t=e
if(x.b!=null)e.aa(0,x.grv())
x.X()},
Y0(){this.am()
this.ah()},
dQ(d){if(!(d.e instanceof B.c2))d.e=new B.c2()},
af(d){this.RU(d)
this.t.aa(0,this.grv())},
a6(d){this.t.O(0,this.grv())
this.RV(0)},
gal(){return!0},
ga0s(){switch(B.bn(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gYH(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bn(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
FC(d){switch(B.bn(this.l).a){case 0:return new B.a8(0,1/0,d.c,d.d)
case 1:return new B.a8(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.a0(C.Q,d,x.gb1())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.a6,d,x.gbb())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.a0(C.K,d,x.gaV())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.a0(C.S,d,x.gb5())
return 0},
bO(d){var x=this.l$
if(x==null)return new B.O(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aT(x.fH(this.FC(d)))},
bA(){var x=this,w=y.a.a(B.t.prototype.ga2.call(x)),v=x.l$
if(v==null)x.k1=new B.O(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.cj(0,x.FC(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aT(v)}x.t.ti(x.ga0s())
x.t.th(0,x.gYH())},
op(d){var x=this
switch(x.l.a){case 0:return new B.l(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.l(-d,0)}},
HJ(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ap(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.op(x)
w=new A.ac0(t,x)
x=t.HJ(x)&&t.S!==C.r
v=t.an
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.saj(0,d.jk(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.saj(0,null)
w.$2(d,e)}}},
n(d){this.an.saj(0,null)
this.iS(0)},
dc(d,e){var x=this.t.as
x.toString
x=this.op(x)
e.aI(0,x.a,x.b)},
ih(d){var x=this,w=x.t.as
w.toString
w=x.op(w)
if(x.HJ(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cp(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jT(new A.ac_(w,e),w.op(x),e)}return!1},
lm(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giB()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.og(x,f)}w=B.lw(d.d8(0,q.l$),f)
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
return new D.og(r,w.cb(q.op(r)))},
dr(d,e,f,g){this.DH(d,null,f,D.alV(d,e,f,this.t,g,this))},
nO(){return this.dr(C.aw,null,C.t,null)},
kD(d){return this.dr(C.aw,null,C.t,d)},
lz(d,e,f){return this.dr(d,null,e,f)},
kE(d,e){return this.dr(C.aw,d,C.t,e)},
zS(d){var x
switch(B.bn(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iHw:1}
A.CD.prototype={
af(d){var x
this.da(d)
x=this.l$
if(x!=null)x.af(d)},
a6(d){var x
this.cQ(0)
x=this.l$
if(x!=null)x.a6(0)}}
A.Qf.prototype={}
A.Qg.prototype={}
var z=a.updateTypes(["y(y)","u0(I,fL)","~()","~({curve:dU,descendant:t?,duration:aK,rect:u?})"])
A.a3C.prototype={
$2(d,e){return new A.u0(this.c,e,C.aQ,this.a.a,null)},
$S:z+1}
A.ac0.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d7(x,e.a_(0,this.b))},
$S:17}
A.ac_.prototype={
$2(d,e){return this.a.l$.by(d,e)},
$S:9};(function aliases(){var x=A.CD.prototype
x.RU=x.af
x.RV=x.a6})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Bl.prototype,"grv","Y0",2)
w(u,"gb1","aO",0)
w(u,"gbb","aN",0)
w(u,"gaV","aK",0)
w(u,"gb5","aM",0)
v(u,"gnN",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dr","nO","kD","lz","kE"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Io,B.a_)
u(B.ej,[A.a3C,A.ac0,A.ac_])
v(A.u0,B.aM)
v(A.Qf,B.rt)
v(A.Qg,A.Qf)
v(A.Ol,A.Qg)
v(A.CD,B.w)
v(A.Bl,A.CD)
x(A.CD,B.aD)
w(A.Qf,B.xb)
w(A.Qg,D.JE)})()
B.bW(b.typeUniverse,JSON.parse('{"u0":{"aM":[],"ak":[],"h":[]},"Io":{"a_":[],"h":[]},"Ol":{"b_":[],"an":[],"I":[]},"Bl":{"w":[],"aD":["w"],"Hw":[],"t":[],"H":[],"aa":[]}}'))
var y={a:B.F("a8"),h:B.F("hB"),d:B.F("bC")}}
$__dart_deferred_initializers__["Dn3gQ1rowEewToywoU44cqP+gLA="] = $__dart_deferred_initializers__.current
