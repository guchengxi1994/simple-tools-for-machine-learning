self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
jE(d,e,f,g){var x=e==null&&g===C.a2
return new A.JR(g,f,e,x,d,null)},
JR:function JR(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a6U:function a6U(d,e,f){this.a=d
this.b=e
this.c=f},
uH:function uH(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
PW:function PW(d,e){var _=this
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
Co:function Co(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.ag=g
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
afw:function afw(d,e){this.a=d
this.b=e},
afv:function afv(d,e){this.a=d
this.b=e},
DL:function DL(){},
RZ:function RZ(){},
S_:function S_(){}},D,B,C
A=a.updateHolder(c[34],A)
D=c[38]
B=c[0]
C=c[2]
A.JR.prototype={
F(d,e){var x,w,v,u=this,t=null,s={},r=D.at5(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.cr(x,q,t)
x=u.r
w=x?B.jw(e):u.f
v=D.alm(r,w,C.H,!1,t,t,t,t,new A.a6U(s,u,r))
return x&&w!=null?D.apV(v):v}}
A.uH.prototype={
aA(d){var x=new A.Co(this.e,this.f,this.r,B.aj(y.h),null,B.aj(y.d))
x.gao()
x.CW=!0
x.sb3(null)
return x},
aE(d,e){var x
e.sdm(this.e)
e.sbI(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.al()
e.ak()}},
bx(d){return new A.PW(this,C.Q)}}
A.PW.prototype={}
A.Co.prototype={
sdm(d){if(d===this.l)return
this.l=d
this.U()},
sbI(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.O(0,x.gtb())
x.t=e
if(x.b!=null)e.ab(0,x.gtb())
x.U()},
ZK(){this.al()
this.ak()},
e3(d){if(!(d.e instanceof B.ca))d.e=new B.ca()},
af(d){this.Ti(d)
this.t.ab(0,this.gtb())},
a7(d){this.t.O(0,this.gtb())
this.Tj(0)},
gao(){return!0},
ga2b(){switch(B.bv(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga_r(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bv(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
GL(d){switch(B.bv(this.l).a){case 0:return new B.a8(0,1/0,d.c,d.d)
case 1:return new B.a8(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.V(C.L,d,x.gaW())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.V(C.R,d,x.gaZ())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.V(C.J,d,x.gaS())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.V(C.a_,d,x.gb5())
return 0},
bQ(d){var x=this.l$
if(x==null)return new B.O(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aX(x.fX(this.GL(d)))},
bE(){var x=this,w=y.a.a(B.t.prototype.ga1.call(x)),v=x.l$
if(v==null)x.k1=new B.O(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.ci(0,x.GL(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aX(v)}x.t.tZ(x.ga2b())
x.t.tY(0,x.ga_r())},
oW(d){var x=this
switch(x.l.a){case 0:return new B.l(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.l(-d,0)}},
IV(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.oW(x)
w=new A.afw(t,x)
x=t.IV(x)&&t.T!==C.t
v=t.ag
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jF(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ag.sap(0,null)
this.j7(0)},
dl(d,e){var x=this.t.as
x.toString
x=this.oW(x)
e.aL(0,x.a,x.b)},
iA(d){var x=this,w=x.t.as
w.toString
w=x.oW(w)
if(x.IV(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cr(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jf(new A.afv(w,e),w.oW(x),e)}return!1},
lF(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giS()
if(!(d instanceof B.y)){x=q.t.as
x.toString
return new D.oK(x,f)}w=B.mb(d.cl(0,q.l$),f)
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
return new D.oK(r,w.cd(q.oW(r)))},
dD(d,e,f,g){this.EL(d,null,f,D.aq9(d,e,f,this.t,g,this))},
oh(){return this.dD(C.aA,null,C.u,null)},
kW(d){return this.dD(C.aA,null,C.u,d)},
lU(d,e,f){return this.dD(d,null,e,f)},
kX(d,e){return this.dD(C.aA,d,C.u,e)},
AO(d){var x
switch(B.bv(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iIY:1}
A.DL.prototype={
af(d){var x
this.d8(d)
x=this.l$
if(x!=null)x.af(d)},
a7(d){var x
this.cM(0)
x=this.l$
if(x!=null)x.a7(0)}}
A.RZ.prototype={}
A.S_.prototype={}
var z=a.updateTypes(["A(A)","uH(H,h3)","~()","~({curve:e7,descendant:t?,duration:aK,rect:u?})"])
A.a6U.prototype={
$2(d,e){return new A.uH(this.c,e,C.aY,this.a.a,null)},
$S:z+1}
A.afw.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d6(x,e.a0(0,this.b))},
$S:22}
A.afv.prototype={
$2(d,e){return this.a.l$.bB(d,e)},
$S:7};(function aliases(){var x=A.DL.prototype
x.Ti=x.af
x.Tj=x.a7})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Co.prototype,"gtb","ZK",2)
w(u,"gaW","aO",0)
w(u,"gaZ","aN",0)
w(u,"gaS","aJ",0)
w(u,"gb5","aM",0)
v(u,"gog",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dD","oh","kW","lU","kX"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.JR,B.a1)
u(B.dq,[A.a6U,A.afw,A.afv])
v(A.uH,B.aQ)
v(A.RZ,B.t8)
v(A.S_,A.RZ)
v(A.PW,A.S_)
v(A.DL,B.y)
v(A.Co,A.DL)
x(A.DL,B.aG)
w(A.RZ,B.xY)
w(A.S_,D.L6)})()
B.br(b.typeUniverse,JSON.parse('{"uH":{"aQ":[],"am":[],"h":[]},"JR":{"a1":[],"h":[]},"PW":{"b4":[],"ap":[],"H":[]},"Co":{"y":[],"aG":["y"],"IY":[],"t":[],"J":[],"af":[]}}'))
var y={a:B.C("a8"),h:B.C("hZ"),d:B.C("bA")}}
$__dart_deferred_initializers__["Ku0+PDgKjrEm5G8/bkAaA2Jnlb4="] = $__dart_deferred_initializers__.current
