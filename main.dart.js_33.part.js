self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
fp(d,e,f,g){var x=e==null&&g===C.U
return new A.L1(g,f,e,x,d,null)},
L1:function L1(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9F:function a9F(d,e,f){this.a=d
this.b=e
this.c=f},
vt:function vt(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
R9:function R9(d,e){var _=this
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
Dq:function Dq(d,e,f,g,h,i){var _=this
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
aiY:function aiY(d,e){this.a=d
this.b=e},
aiX:function aiX(d,e){this.a=d
this.b=e},
EP:function EP(){},
Td:function Td(){},
Te:function Te(){}},D,B,C
A=a.updateHolder(c[44],A)
D=c[47]
B=c[0]
C=c[2]
A.L1.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.awG(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bY(x,q,t)
x=u.r
w=x?B.ka(e):u.f
v=D.aoQ(r,w,C.G,!1,t,t,t,t,new A.a9F(s,u,r))
return x&&w!=null?D.ats(v):v}}
A.vt.prototype={
aB(d){var x=new A.Dq(this.e,this.f,this.r,B.an(y.h),null,B.an(y.d))
x.gao()
x.CW=!0
x.sb6(null)
return x},
aF(d,e){var x
e.sdt(this.e)
e.sbK(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.am()
e.ak()}},
bB(d){return new A.R9(this,C.T)}}
A.R9.prototype={}
A.Dq.prototype={
sdt(d){if(d===this.l)return
this.l=d
this.W()},
sbK(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.N(0,x.gtN())
x.t=e
if(x.b!=null)e.a3(0,x.gtN())
x.W()},
a13(){this.am()
this.ak()},
ea(d){if(!(d.e instanceof B.cp))d.e=new B.cp()},
ae(d){this.V9(d)
this.t.a3(0,this.gtN())},
aa(d){this.t.N(0,this.gtN())
this.Va(0)},
gao(){return!0},
ga6b(){switch(B.bz(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga1U(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bz(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
HS(d){switch(B.bz(this.l).a){case 0:return new B.a9(0,1/0,d.c,d.d)
case 1:return new B.a9(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.U(C.R,d,x.gaW())
return 0},
aG(d){var x=this.l$
if(x!=null)return x.U(C.M,d,x.gaT())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.U(C.K,d,x.gaR())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.U(C.Y,d,x.gb7())
return 0},
bQ(d){var x=this.l$
if(x==null)return new B.U(C.f.F(0,d.a,d.b),C.f.F(0,d.c,d.d))
return d.b_(x.h6(this.HS(d)))},
bF(){var x=this,w=y.a.a(B.u.prototype.ga5.call(x)),v=x.l$
if(v==null)x.k1=new B.U(C.f.F(0,w.a,w.b),C.f.F(0,w.c,w.d))
else{v.cj(0,x.HS(w),!0)
v=x.l$.k1
v.toString
x.k1=w.b_(v)}x.t.uH(x.ga6b())
x.t.uG(0,x.ga1U())},
pt(d){var x=this
switch(x.l.a){case 0:return new B.m(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.m(-d,0)}},
Kd(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pt(x)
w=new A.aiY(t,x)
x=t.Kd(x)&&t.T!==C.v
v=t.ah
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jO(x,e,new B.w(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ah.sap(0,null)
this.ji(0)},
ds(d,e){var x=this.t.as
x.toString
x=this.pt(x)
e.aP(0,x.a,x.b)},
iH(d){var x=this,w=x.t.as
w.toString
w=x.pt(w)
if(x.Kd(w)){w=x.k1
return new B.w(0,0,0+w.a,0+w.b)}return null},
cu(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jp(new A.aiX(w,e),w.pt(x),e)}return!1},
m3(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gj_()
if(!(d instanceof B.A)){x=q.t.as
x.toString
return new D.pm(x,f)}w=B.mD(d.cm(0,q.l$),f)
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
return new D.pm(r,w.ce(q.pt(r)))},
dL(d,e,f,g){this.FH(d,null,f,D.atI(d,e,f,this.t,g,this))},
oM(){return this.dL(C.aG,null,C.x,null)},
la(d){return this.dL(C.aG,null,C.x,d)},
mh(d,e,f){return this.dL(d,null,e,f)},
lb(d,e){return this.dL(C.aG,d,C.x,e)},
BN(d){var x
switch(B.bz(this.l).a){case 1:x=this.k1
return new B.w(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.w(-250,0,0+x.a+250,0+x.b)}},
$iK9:1}
A.EP.prototype={
ae(d){var x
this.dd(d)
x=this.l$
if(x!=null)x.ae(d)},
aa(d){var x
this.cV(0)
x=this.l$
if(x!=null)x.aa(0)}}
A.Td.prototype={}
A.Te.prototype={}
var z=a.updateTypes(["C(C)","vt(E,fY)","~()","~({curve:eu,descendant:u?,duration:aQ,rect:w?})"])
A.a9F.prototype={
$2(d,e){return new A.vt(this.c,e,C.b6,this.a.a,null)},
$S:z+1}
A.aiY.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.da(x,e.a1(0,this.b))},
$S:24}
A.aiX.prototype={
$2(d,e){return this.a.l$.bE(d,e)},
$S:10};(function aliases(){var x=A.EP.prototype
x.V9=x.ae
x.Va=x.aa})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Dq.prototype,"gtN","a13",2)
w(u,"gaW","aN",0)
w(u,"gaT","aG",0)
w(u,"gaR","aJ",0)
w(u,"gb7","aM",0)
v(u,"goL",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dL","oM","la","mh","lb"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.L1,B.a2)
u(B.dq,[A.a9F,A.aiY,A.aiX])
v(A.vt,B.aR)
v(A.Td,B.tT)
v(A.Te,A.Td)
v(A.R9,A.Te)
v(A.EP,B.A)
v(A.Dq,A.EP)
x(A.EP,B.aJ)
w(A.Td,B.yQ)
w(A.Te,D.Mf)})()
B.b8(b.typeUniverse,JSON.parse('{"vt":{"aR":[],"as":[],"h":[]},"L1":{"a2":[],"h":[]},"R9":{"b6":[],"ax":[],"E":[]},"Dq":{"A":[],"aJ":["A"],"K9":[],"u":[],"P":[],"ai":[]}}'))
var y={a:B.x("a9"),h:B.x("iz"),d:B.x("bD")}}
$__dart_deferred_initializers__["ckturkcXVagtGKtsAFa40uJftDU="] = $__dart_deferred_initializers__.current
