self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
f0(d,e,f,g){var x=e==null&&g===C.S
return new A.L3(g,f,e,x,d,null)},
L3:function L3(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9L:function a9L(d,e,f){this.a=d
this.b=e
this.c=f},
vv:function vv(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Rc:function Rc(d,e){var _=this
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
Dr:function Dr(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
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
ajh:function ajh(d,e){this.a=d
this.b=e},
ajg:function ajg(d,e){this.a=d
this.b=e},
EQ:function EQ(){},
Tg:function Tg(){},
Th:function Th(){}},D,B,C
A=a.updateHolder(c[45],A)
D=c[48]
B=c[0]
C=c[2]
A.L3.prototype={
I(d,e){var x,w,v,u=this,t=null,s={},r=D.awZ(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bZ(x,q,t)
x=u.r
w=x?B.kc(e):u.f
v=D.ap8(r,w,C.H,!1,t,t,t,t,new A.a9L(s,u,r))
return x&&w!=null?D.atL(v):v}}
A.vv.prototype={
aB(d){var x=new A.Dr(this.e,this.f,this.r,B.ao(y.h),null,B.ao(y.d))
x.gao()
x.CW=!0
x.sb7(null)
return x},
aF(d,e){var x
e.sdt(this.e)
e.sbK(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.am()
e.ak()}},
bB(d){return new A.Rc(this,C.U)}}
A.Rc.prototype={}
A.Dr.prototype={
sdt(d){if(d===this.l)return
this.l=d
this.W()},
sbK(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.N(0,x.gtP())
x.t=e
if(x.b!=null)e.a4(0,x.gtP())
x.W()},
a14(){this.am()
this.ak()},
eb(d){if(!(d.e instanceof B.cq))d.e=new B.cq()},
ae(d){this.Vb(d)
this.t.a4(0,this.gtP())},
aa(d){this.t.N(0,this.gtP())
this.Vc(0)},
gao(){return!0},
ga4S(){switch(B.bz(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga1V(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bz(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
HT(d){switch(B.bz(this.l).a){case 0:return new B.a9(0,1/0,d.c,d.d)
case 1:return new B.a9(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.U(C.R,d,x.gaX())
return 0},
aG(d){var x=this.l$
if(x!=null)return x.U(C.N,d,x.gaU())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.U(C.L,d,x.gaS())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.U(C.a_,d,x.gb8())
return 0},
bQ(d){var x=this.l$
if(x==null)return new B.U(C.f.G(0,d.a,d.b),C.f.G(0,d.c,d.d))
return d.b0(x.h7(this.HT(d)))},
bF(){var x=this,w=y.a.a(B.u.prototype.ga5.call(x)),v=x.l$
if(v==null)x.k1=new B.U(C.f.G(0,w.a,w.b),C.f.G(0,w.c,w.d))
else{v.cj(0,x.HT(w),!0)
v=x.l$.k1
v.toString
x.k1=w.b0(v)}x.t.uJ(x.ga4S())
x.t.uI(0,x.ga1V())},
pu(d){var x=this
switch(x.l.a){case 0:return new B.m(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.m(-d,0)}},
Ke(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pu(x)
w=new A.ajh(t,x)
x=t.Ke(x)&&t.T!==C.w
v=t.ah
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jO(x,e,new B.w(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ah.sap(0,null)
this.ji(0)},
ds(d,e){var x=this.t.as
x.toString
x=this.pu(x)
e.aQ(0,x.a,x.b)},
iJ(d){var x=this,w=x.t.as
w.toString
w=x.pu(w)
if(x.Ke(w)){w=x.k1
return new B.w(0,0,0+w.a,0+w.b)}return null},
cu(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jp(new A.ajg(w,e),w.pu(x),e)}return!1},
m3(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gj1()
if(!(d instanceof B.B)){x=q.t.as
x.toString
return new D.pn(x,f)}w=B.mF(d.cm(0,q.l$),f)
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
return new D.pn(r,w.ce(q.pu(r)))},
dL(d,e,f,g){this.FI(d,null,f,D.au0(d,e,f,this.t,g,this))},
oN(){return this.dL(C.aH,null,C.x,null)},
la(d){return this.dL(C.aH,null,C.x,d)},
mh(d,e,f){return this.dL(d,null,e,f)},
lb(d,e){return this.dL(C.aH,d,C.x,e)},
BO(d){var x
switch(B.bz(this.l).a){case 1:x=this.k1
return new B.w(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.w(-250,0,0+x.a+250,0+x.b)}},
$iKb:1}
A.EQ.prototype={
ae(d){var x
this.dd(d)
x=this.l$
if(x!=null)x.ae(d)},
aa(d){var x
this.cW(0)
x=this.l$
if(x!=null)x.aa(0)}}
A.Tg.prototype={}
A.Th.prototype={}
var z=a.updateTypes(["C(C)","vv(E,fZ)","~()","~({curve:eu,descendant:u?,duration:aQ,rect:w?})"])
A.a9L.prototype={
$2(d,e){return new A.vv(this.c,e,C.b8,this.a.a,null)},
$S:z+1}
A.ajh.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.da(x,e.a2(0,this.b))},
$S:24}
A.ajg.prototype={
$2(d,e){return this.a.l$.bE(d,e)},
$S:10};(function aliases(){var x=A.EQ.prototype
x.Vb=x.ae
x.Vc=x.aa})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Dr.prototype,"gtP","a14",2)
w(u,"gaX","aO",0)
w(u,"gaU","aG",0)
w(u,"gaS","aJ",0)
w(u,"gb8","aN",0)
v(u,"goM",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dL","oN","la","mh","lb"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.L3,B.a3)
u(B.dq,[A.a9L,A.ajh,A.ajg])
v(A.vv,B.aR)
v(A.Tg,B.tV)
v(A.Th,A.Tg)
v(A.Rc,A.Th)
v(A.EQ,B.B)
v(A.Dr,A.EQ)
x(A.EQ,B.aJ)
w(A.Tg,B.yS)
w(A.Th,D.Mh)})()
B.b8(b.typeUniverse,JSON.parse('{"vv":{"aR":[],"as":[],"h":[]},"L3":{"a3":[],"h":[]},"Rc":{"b7":[],"ay":[],"E":[]},"Dr":{"B":[],"aJ":["B"],"Kb":[],"u":[],"P":[],"ai":[]}}'))
var y={a:B.x("a9"),h:B.x("iC"),d:B.x("bD")}}
$__dart_deferred_initializers__["xT/YJI/xWKIcDCXccyJWVlOzsG4="] = $__dart_deferred_initializers__.current
