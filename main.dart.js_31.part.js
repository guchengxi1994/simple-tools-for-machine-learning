self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
fm(d,e,f,g){var x=e==null&&g===C.U
return new A.KU(g,f,e,x,d,null)},
KU:function KU(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9c:function a9c(d,e,f){this.a=d
this.b=e
this.c=f},
vl:function vl(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
R_:function R_(d,e){var _=this
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
Di:function Di(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.S=f
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
aik:function aik(d,e){this.a=d
this.b=e},
aij:function aij(d,e){this.a=d
this.b=e},
EH:function EH(){},
T3:function T3(){},
T4:function T4(){}},D,B,C
A=a.updateHolder(c[41],A)
D=c[45]
B=c[0]
C=c[2]
A.KU.prototype={
F(d,e){var x,w,v,u=this,t=null,s={},r=D.aw1(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.c2(x,q,t)
x=u.r
w=x?B.k5(e):u.f
v=D.aob(r,w,C.G,!1,t,t,t,t,new A.a9c(s,u,r))
return x&&w!=null?D.asO(v):v}}
A.vl.prototype={
aB(d){var x=new A.Di(this.e,this.f,this.r,B.an(y.h),null,B.an(y.d))
x.gao()
x.CW=!0
x.sb6(null)
return x},
aF(d,e){var x
e.sds(this.e)
e.sbK(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.am()
e.ak()}},
bB(d){return new A.R_(this,C.T)}}
A.R_.prototype={}
A.Di.prototype={
sds(d){if(d===this.l)return
this.l=d
this.V()},
sbK(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.N(0,x.gtL())
x.t=e
if(x.b!=null)e.a2(0,x.gtL())
x.V()},
a0V(){this.am()
this.ak()},
ea(d){if(!(d.e instanceof B.cn))d.e=new B.cn()},
ae(d){this.V2(d)
this.t.a2(0,this.gtL())},
a9(d){this.t.N(0,this.gtL())
this.V3(0)},
gao(){return!0},
ga4G(){switch(B.bz(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga1L(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bz(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
HO(d){switch(B.bz(this.l).a){case 0:return new B.a9(0,1/0,d.c,d.d)
case 1:return new B.a9(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.T(C.Q,d,x.gaW())
return 0},
aG(d){var x=this.l$
if(x!=null)return x.T(C.M,d,x.gaT())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.T(C.K,d,x.gaR())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.T(C.Y,d,x.gb7())
return 0},
bP(d){var x=this.l$
if(x==null)return new B.T(C.f.E(0,d.a,d.b),C.f.E(0,d.c,d.d))
return d.b_(x.h4(this.HO(d)))},
bF(){var x=this,w=y.a.a(B.t.prototype.ga4.call(x)),v=x.l$
if(v==null)x.k1=new B.T(C.f.E(0,w.a,w.b),C.f.E(0,w.c,w.d))
else{v.cj(0,x.HO(w),!0)
v=x.l$.k1
v.toString
x.k1=w.b_(v)}x.t.uF(x.ga4G())
x.t.uE(0,x.ga1L())},
pp(d){var x=this
switch(x.l.a){case 0:return new B.m(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.m(-d,0)}},
K6(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pp(x)
w=new A.aik(t,x)
x=t.K6(x)&&t.S!==C.u
v=t.ah
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jL(x,e,new B.v(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
m(d){this.ah.sap(0,null)
this.jf(0)},
dr(d,e){var x=this.t.as
x.toString
x=this.pp(x)
e.aP(0,x.a,x.b)},
iE(d){var x=this,w=x.t.as
w.toString
w=x.pp(w)
if(x.K6(w)){w=x.k1
return new B.v(0,0,0+w.a,0+w.b)}return null},
cu(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jm(new A.aij(w,e),w.pp(x),e)}return!1},
m0(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giY()
if(!(d instanceof B.z)){x=q.t.as
x.toString
return new D.pb(x,f)}w=B.mv(d.cm(0,q.l$),f)
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
return new D.pb(r,w.ce(q.pp(r)))},
dK(d,e,f,g){this.FD(d,null,f,D.at3(d,e,f,this.t,g,this))},
oJ(){return this.dK(C.aE,null,C.w,null)},
l8(d){return this.dK(C.aE,null,C.w,d)},
me(d,e,f){return this.dK(d,null,e,f)},
l9(d,e){return this.dK(C.aE,d,C.w,e)},
BL(d){var x
switch(B.bz(this.l).a){case 1:x=this.k1
return new B.v(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.v(-250,0,0+x.a+250,0+x.b)}},
$iK1:1}
A.EH.prototype={
ae(d){var x
this.dc(d)
x=this.l$
if(x!=null)x.ae(d)},
a9(d){var x
this.cU(0)
x=this.l$
if(x!=null)x.a9(0)}}
A.T3.prototype={}
A.T4.prototype={}
var z=a.updateTypes(["C(C)","vl(G,fT)","~()","~({curve:eq,descendant:t?,duration:aQ,rect:v?})"])
A.a9c.prototype={
$2(d,e){return new A.vl(this.c,e,C.b6,this.a.a,null)},
$S:z+1}
A.aik.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d9(x,e.a1(0,this.b))},
$S:23}
A.aij.prototype={
$2(d,e){return this.a.l$.bE(d,e)},
$S:10};(function aliases(){var x=A.EH.prototype
x.V2=x.ae
x.V3=x.a9})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Di.prototype,"gtL","a0V",2)
w(u,"gaW","aN",0)
w(u,"gaT","aG",0)
w(u,"gaR","aJ",0)
w(u,"gb7","aM",0)
v(u,"goI",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dK","oJ","l8","me","l9"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.KU,B.a2)
u(B.dn,[A.a9c,A.aik,A.aij])
v(A.vl,B.aR)
v(A.T3,B.tK)
v(A.T4,A.T3)
v(A.R_,A.T4)
v(A.EH,B.z)
v(A.Di,A.EH)
x(A.EH,B.aJ)
w(A.T3,B.yH)
w(A.T4,D.M7)})()
B.b9(b.typeUniverse,JSON.parse('{"vl":{"aR":[],"ar":[],"h":[]},"KU":{"a2":[],"h":[]},"R_":{"b5":[],"aw":[],"G":[]},"Di":{"z":[],"aJ":["z"],"K1":[],"t":[],"K":[],"ai":[]}}'))
var y={a:B.A("a9"),h:B.A("ir"),d:B.A("bD")}}
$__dart_deferred_initializers__["lJ0+KUiUGkTg8ifBL9Op3wtLHBQ="] = $__dart_deferred_initializers__.current
