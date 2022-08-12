self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
ev(d,e,f,g){var x=e==null&&g===C.M
return new A.Mk(g,f,e,x,d,null)},
Mk:function Mk(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
ac5:function ac5(d,e,f){this.a=d
this.b=e
this.c=f},
wh:function wh(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
SL:function SL(d,e){var _=this
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
Ex:function Ex(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.a9=g
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
alY:function alY(d,e){this.a=d
this.b=e},
alX:function alX(d,e){this.a=d
this.b=e},
FX:function FX(){},
UW:function UW(){},
UX:function UX(){}},D,B,C
A=a.updateHolder(c[52],A)
D=c[56]
B=c[0]
C=c[2]
A.Mk.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.aA9(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bR(x,q,t)
x=u.r
w=x?B.kw(e):u.f
v=D.as_(r,w,C.y,!1,t,t,t,t,new A.ac5(s,u,r))
return x&&w!=null?D.awN(v):v}}
A.wh.prototype={
aC(d){var x=new A.Ex(this.e,this.f,this.r,B.ap(y.h),null,B.ap(y.d))
x.gan()
x.CW=!0
x.sbc(null)
return x},
aH(d,e){var x
e.sdv(this.e)
e.sbN(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.ao()
e.am()}},
bz(d){return new A.SL(this,C.V)}}
A.SL.prototype={}
A.Ex.prototype={
sdv(d){if(d===this.l)return
this.l=d
this.V()},
sbN(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.P(0,x.gur())
x.t=e
if(x.b!=null)e.a5(0,x.gur())
x.V()},
a2y(){this.ao()
this.am()},
dr(d){if(!(d.e instanceof B.cc))d.e=new B.cc()},
af(d){this.Wt(d)
this.t.a5(0,this.gur())},
a8(d){this.t.P(0,this.gur())
this.Wu(0)},
gan(){return!0},
ga6o(){switch(B.br(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga3o(){var x=this,w=x.l$
if(w==null)return 0
switch(B.br(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
IU(d){switch(B.br(this.l).a){case 0:return new B.aa(0,1/0,d.c,d.d)
case 1:return new B.aa(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.W(C.T,d,x.gaY())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.W(C.P,d,x.gaU())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.W(C.Q,d,x.gaV())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.W(C.a0,d,x.gb5())
return 0},
bS(d){var x=this.l$
if(x==null)return new B.P(C.f.F(0,d.a,d.b),C.f.F(0,d.c,d.d))
return d.aW(x.fR(this.IU(d)))},
by(){var x=this,w=y.a.a(B.u.prototype.ga3.call(x)),v=x.l$
if(v==null)x.k1=new B.P(C.f.F(0,w.a,w.b),C.f.F(0,w.c,w.d))
else{v.cf(0,x.IU(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aW(v)}x.t.nq(x.ga6o())
x.t.nn(0,x.ga3o())},
pX(d){var x=this
switch(x.l.a){case 0:return new B.j(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.j(0,-d)
case 3:return new B.j(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.j(-d,0)}},
Lg(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ah(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pX(x)
w=new A.alY(t,x)
x=t.Lg(x)&&t.T!==C.v
v=t.a9
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sar(0,d.kb(x,e,new B.x(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sar(0,null)
w.$2(d,e)}}},
n(d){this.a9.sar(0,null)
this.jz(0)},
d6(d,e){var x=this.t.as
x.toString
x=this.pX(x)
e.aP(0,x.a,x.b)},
iZ(d){var x=this,w=x.t.as
w.toString
w=x.pX(w)
if(x.Lg(w)){w=x.k1
return new B.x(0,0,0+w.a,0+w.b)}return null},
co(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.iU(new A.alX(w,e),w.pX(x),e)}return!1},
ms(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gji()
if(!(d instanceof B.z)){x=q.t.as
x.toString
return new D.q0(x,f)}w=B.na(d.cv(0,q.l$),f)
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
return new D.q0(r,w.cl(q.pX(r)))},
e_(d,e,f,g){this.GF(d,null,f,D.ax2(d,e,f,this.t,g,this))},
pi(){return this.e_(C.aL,null,C.x,null)},
lw(d){return this.e_(C.aL,null,C.x,d)},
mI(d,e,f){return this.e_(d,null,e,f)},
lx(d,e){return this.e_(C.aL,d,C.x,e)},
CC(d){var x
switch(B.br(this.l).a){case 1:x=this.k1
return new B.x(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.x(-250,0,0+x.a+250,0+x.b)}},
$iAA:1}
A.FX.prototype={
af(d){var x
this.d4(d)
x=this.l$
if(x!=null)x.af(d)},
a8(d){var x
this.cP(0)
x=this.l$
if(x!=null)x.a8(0)}}
A.UW.prototype={}
A.UX.prototype={}
var z=a.updateTypes(["y(y)","wh(B,hd)","~()","~({curve:eE,descendant:u?,duration:aV,rect:x?})"])
A.ac5.prototype={
$2(d,e){return new A.wh(this.c,e,C.b1,this.a.a,null)},
$S:z+1}
A.alY.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.di(x,e.Z(0,this.b))},
$S:23}
A.alX.prototype={
$2(d,e){return this.a.l$.bG(d,e)},
$S:9};(function aliases(){var x=A.FX.prototype
x.Wt=x.af
x.Wu=x.a8})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Ex.prototype,"gur","a2y",2)
w(u,"gaY","aO",0)
w(u,"gaU","aJ",0)
w(u,"gaV","aK",0)
w(u,"gb5","aN",0)
v(u,"gph",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["e_","pi","lw","mI","lx"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Mk,B.a0)
u(B.cK,[A.ac5,A.alY,A.alX])
v(A.wh,B.aS)
v(A.UW,B.uG)
v(A.UX,A.UW)
v(A.SL,A.UX)
v(A.FX,B.z)
v(A.Ex,A.FX)
x(A.FX,B.aJ)
w(A.UW,B.zR)
w(A.UX,D.NC)})()
B.b4(b.typeUniverse,JSON.parse('{"wh":{"aS":[],"aq":[],"f":[]},"Mk":{"a0":[],"f":[]},"SL":{"b_":[],"ao":[],"B":[]},"Ex":{"z":[],"aJ":["z"],"AA":[],"u":[],"Q":[],"aj":[]}}'))
var y={a:B.t("aa"),h:B.t("iV"),d:B.t("bC")}}
$__dart_deferred_initializers__["ZOedFOadG2bnVxlKw6R8CmfBQHY="] = $__dart_deferred_initializers__.current
