self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
fF(d,e,f,g){var x=e==null&&g===C.W
return new A.Kr(g,f,e,x,d,null)},
Kr:function Kr(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a8h:function a8h(d,e,f){this.a=d
this.b=e
this.c=f},
va:function va(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Qw:function Qw(d,e){var _=this
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
CW:function CW(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.R=f
_.ah=g
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
ah2:function ah2(d,e){this.a=d
this.b=e},
ah1:function ah1(d,e){this.a=d
this.b=e},
Ei:function Ei(){},
Sz:function Sz(){},
SA:function SA(){}},D,B,C
A=a.updateHolder(c[36],A)
D=c[40]
B=c[0]
C=c[2]
A.Kr.prototype={
G(d,e){var x,w,v,u=this,t=null,s={},r=D.auJ(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.cj(x,q,t)
x=u.r
w=x?B.jS(e):u.f
v=D.amT(r,w,C.I,!1,t,t,t,t,new A.a8h(s,u,r))
return x&&w!=null?D.ary(v):v}}
A.va.prototype={
aA(d){var x=new A.CW(this.e,this.f,this.r,B.al(y.h),null,B.al(y.d))
x.gan()
x.CW=!0
x.sb2(null)
return x},
aD(d,e){var x
e.sdl(this.e)
e.sbI(0,this.f)
x=this.r
if(x!==e.R){e.R=x
e.al()
e.ak()}},
bA(d){return new A.Qw(this,C.R)}}
A.Qw.prototype={}
A.CW.prototype={
sdl(d){if(d===this.l)return
this.l=d
this.V()},
sbI(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.O(0,x.gtt())
x.t=e
if(x.b!=null)e.a8(0,x.gtt())
x.V()},
a_M(){this.al()
this.ak()},
e3(d){if(!(d.e instanceof B.ck))d.e=new B.ck()},
ad(d){this.Ui(d)
this.t.a8(0,this.gtt())},
a9(d){this.t.O(0,this.gtt())
this.Uj(0)},
gan(){return!0},
ga3t(){switch(B.bx(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga0x(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bx(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
Hm(d){switch(B.bx(this.l).a){case 0:return new B.a8(0,1/0,d.c,d.d)
case 1:return new B.a8(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.T(C.N,d,x.gaW())
return 0},
aE(d){var x=this.l$
if(x!=null)return x.T(C.K,d,x.gaT())
return 0},
aI(d){var x=this.l$
if(x!=null)return x.T(C.H,d,x.gaQ())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.T(C.Y,d,x.gb3())
return 0},
bM(d){var x=this.l$
if(x==null)return new B.O(C.f.E(0,d.a,d.b),C.f.E(0,d.c,d.d))
return d.b_(x.h2(this.Hm(d)))},
bE(){var x=this,w=y.a.a(B.r.prototype.ga3.call(x)),v=x.l$
if(v==null)x.k1=new B.O(C.f.E(0,w.a,w.b),C.f.E(0,w.c,w.d))
else{v.cg(0,x.Hm(w),!0)
v=x.l$.k1
v.toString
x.k1=w.b_(v)}x.t.ui(x.ga3t())
x.t.uh(0,x.ga0x())},
pc(d){var x=this
switch(x.l.a){case 0:return new B.m(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.m(-d,0)}},
JB(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pc(x)
w=new A.ah2(t,x)
x=t.JB(x)&&t.R!==C.u
v=t.ah
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jK(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.R,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ah.sap(0,null)
this.jd(0)},
dk(d,e){var x=this.t.as
x.toString
x=this.pc(x)
e.aP(0,x.a,x.b)},
iC(d){var x=this,w=x.t.as
w.toString
w=x.pc(w)
if(x.JB(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cr(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jl(new A.ah1(w,e),w.pc(x),e)}return!1},
lP(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giW()
if(!(d instanceof B.y)){x=q.t.as
x.toString
return new D.p0(x,f)}w=B.mn(d.ck(0,q.l$),f)
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
return new D.p0(r,w.cc(q.pc(r)))},
dD(d,e,f,g){this.Fe(d,null,f,D.arO(d,e,f,this.t,g,this))},
ov(){return this.dD(C.aC,null,C.v,null)},
l4(d){return this.dD(C.aC,null,C.v,d)},
m3(d,e,f){return this.dD(d,null,e,f)},
l5(d,e){return this.dD(C.aC,d,C.v,e)},
Bg(d){var x
switch(B.bx(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iJz:1}
A.Ei.prototype={
ad(d){var x
this.d7(d)
x=this.l$
if(x!=null)x.ad(d)},
a9(d){var x
this.cM(0)
x=this.l$
if(x!=null)x.a9(0)}}
A.Sz.prototype={}
A.SA.prototype={}
var z=a.updateTypes(["A(A)","va(F,fK)","~()","~({curve:eh,descendant:r?,duration:aN,rect:u?})"])
A.a8h.prototype={
$2(d,e){return new A.va(this.c,e,C.b0,this.a.a,null)},
$S:z+1}
A.ah2.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d5(x,e.a1(0,this.b))},
$S:21}
A.ah1.prototype={
$2(d,e){return this.a.l$.bD(d,e)},
$S:9};(function aliases(){var x=A.Ei.prototype
x.Ui=x.ad
x.Uj=x.a9})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.CW.prototype,"gtt","a_M",2)
w(u,"gaW","aN",0)
w(u,"gaT","aE",0)
w(u,"gaQ","aI",0)
w(u,"gb3","aM",0)
v(u,"gou",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dD","ov","l4","m3","l5"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Kr,B.a3)
u(B.dG,[A.a8h,A.ah2,A.ah1])
v(A.va,B.aP)
v(A.Sz,B.tz)
v(A.SA,A.Sz)
v(A.Qw,A.SA)
v(A.Ei,B.y)
v(A.CW,A.Ei)
x(A.Ei,B.aH)
w(A.Sz,B.yr)
w(A.SA,D.LF)})()
B.bo(b.typeUniverse,JSON.parse('{"va":{"aP":[],"ao":[],"h":[]},"Kr":{"a3":[],"h":[]},"Qw":{"b5":[],"ar":[],"F":[]},"CW":{"y":[],"aH":["y"],"Jz":[],"r":[],"J":[],"ah":[]}}'))
var y={a:B.B("a8"),h:B.B("ig"),d:B.B("bC")}}
$__dart_deferred_initializers__["zDbWsfIB8tcXZqeyXSaHaAQHKm4="] = $__dart_deferred_initializers__.current
