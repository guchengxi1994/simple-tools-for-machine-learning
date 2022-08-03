self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
hJ(d,e,f,g){var x=e==null&&g===C.Z
return new A.K0(g,f,e,x,d,null)},
K0:function K0(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a7g:function a7g(d,e,f){this.a=d
this.b=e
this.c=f},
uO:function uO(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Q6:function Q6(d,e){var _=this
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
Cy:function Cy(d,e,f,g,h,i){var _=this
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
afX:function afX(d,e){this.a=d
this.b=e},
afW:function afW(d,e){this.a=d
this.b=e},
DV:function DV(){},
S9:function S9(){},
Sa:function Sa(){}},D,B,C
A=a.updateHolder(c[38],A)
D=c[42]
B=c[0]
C=c[2]
A.K0.prototype={
F(d,e){var x,w,v,u=this,t=null,s={},r=D.atu(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.ck(x,q,t)
x=u.r
w=x?B.jF(e):u.f
v=D.alK(r,w,C.H,!1,t,t,t,t,new A.a7g(s,u,r))
return x&&w!=null?D.aqj(v):v}}
A.uO.prototype={
aA(d){var x=new A.Cy(this.e,this.f,this.r,B.ak(y.h),null,B.ak(y.d))
x.gao()
x.CW=!0
x.sb3(null)
return x},
aE(d,e){var x
e.sdn(this.e)
e.sbI(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.al()
e.ak()}},
bA(d){return new A.Q6(this,C.Q)}}
A.Q6.prototype={}
A.Cy.prototype={
sdn(d){if(d===this.l)return
this.l=d
this.U()},
sbI(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.P(0,x.gtc())
x.t=e
if(x.b!=null)e.ab(0,x.gtc())
x.U()},
ZQ(){this.al()
this.ak()},
e4(d){if(!(d.e instanceof B.cc))d.e=new B.cc()},
ag(d){this.Tq(d)
this.t.ab(0,this.gtc())},
a7(d){this.t.P(0,this.gtc())
this.Tr(0)},
gao(){return!0},
ga2k(){switch(B.bw(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga_y(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bw(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
GP(d){switch(B.bw(this.l).a){case 0:return new B.a8(0,1/0,d.c,d.d)
case 1:return new B.a8(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.V(C.M,d,x.gaW())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.V(C.R,d,x.gaZ())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.V(C.J,d,x.gaS())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.V(C.a0,d,x.gb5())
return 0},
bQ(d){var x=this.l$
if(x==null)return new B.O(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aX(x.fX(this.GP(d)))},
bF(){var x=this,w=y.a.a(B.t.prototype.ga1.call(x)),v=x.l$
if(v==null)x.k1=new B.O(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.ci(0,x.GP(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aX(v)}x.t.u_(x.ga2k())
x.t.tZ(0,x.ga_y())},
oX(d){var x=this
switch(x.l.a){case 0:return new B.l(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.l(-d,0)}},
IZ(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.oX(x)
w=new A.afX(t,x)
x=t.IZ(x)&&t.T!==C.u
v=t.ah
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jG(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ah.sap(0,null)
this.j9(0)},
dm(d,e){var x=this.t.as
x.toString
x=this.oX(x)
e.aL(0,x.a,x.b)},
iB(d){var x=this,w=x.t.as
w.toString
w=x.oX(w)
if(x.IZ(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cr(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jh(new A.afW(w,e),w.oX(x),e)}return!1},
lI(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giU()
if(!(d instanceof B.y)){x=q.t.as
x.toString
return new D.oN(x,f)}w=B.mb(d.cl(0,q.l$),f)
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
return new D.oN(r,w.cd(q.oX(r)))},
dF(d,e,f,g){this.EP(d,null,f,D.aqy(d,e,f,this.t,g,this))},
oj(){return this.dF(C.aA,null,C.v,null)},
l_(d){return this.dF(C.aA,null,C.v,d)},
lX(d,e,f){return this.dF(d,null,e,f)},
l0(d,e){return this.dF(C.aA,d,C.v,e)},
AR(d){var x
switch(B.bw(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iJ7:1}
A.DV.prototype={
ag(d){var x
this.d8(d)
x=this.l$
if(x!=null)x.ag(d)},
a7(d){var x
this.cM(0)
x=this.l$
if(x!=null)x.a7(0)}}
A.S9.prototype={}
A.Sa.prototype={}
var z=a.updateTypes(["A(A)","uO(H,h7)","~()","~({curve:e9,descendant:t?,duration:aL,rect:u?})"])
A.a7g.prototype={
$2(d,e){return new A.uO(this.c,e,C.aZ,this.a.a,null)},
$S:z+1}
A.afX.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d6(x,e.a0(0,this.b))},
$S:23}
A.afW.prototype={
$2(d,e){return this.a.l$.bD(d,e)},
$S:9};(function aliases(){var x=A.DV.prototype
x.Tq=x.ag
x.Tr=x.a7})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Cy.prototype,"gtc","ZQ",2)
w(u,"gaW","aO",0)
w(u,"gaZ","aN",0)
w(u,"gaS","aJ",0)
w(u,"gb5","aM",0)
v(u,"goi",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dF","oj","l_","lX","l0"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.K0,B.a1)
u(B.df,[A.a7g,A.afX,A.afW])
v(A.uO,B.aN)
v(A.S9,B.tf)
v(A.Sa,A.S9)
v(A.Q6,A.Sa)
v(A.DV,B.y)
v(A.Cy,A.DV)
x(A.DV,B.aH)
w(A.S9,B.y5)
w(A.Sa,D.Lf)})()
B.ba(b.typeUniverse,JSON.parse('{"uO":{"aN":[],"an":[],"h":[]},"K0":{"a1":[],"h":[]},"Q6":{"b4":[],"aq":[],"H":[]},"Cy":{"y":[],"aH":["y"],"J7":[],"t":[],"J":[],"ag":[]}}'))
var y={a:B.B("a8"),h:B.B("i2"),d:B.B("bx")}}
$__dart_deferred_initializers__["IHRiu2A2CnkAc5d2XayGbVTPlFs="] = $__dart_deferred_initializers__.current
