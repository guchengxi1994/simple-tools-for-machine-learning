self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
qD(d,e,f,g){return new A.Hh(g,f,e,!1,d,null)},
Hh:function Hh(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a14:function a14(d,e,f){this.a=d
this.b=e
this.c=f},
ta:function ta(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
N5:function N5(d,e){var _=this
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
As:function As(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.S=f
_.am=g
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
a94:function a94(d,e){this.a=d
this.b=e},
a93:function a93(d,e){this.a=d
this.b=e},
BH:function BH(){},
OZ:function OZ(){},
P_:function P_(){}},D,B,C
A=a.updateHolder(c[20],A)
D=c[24]
B=c[0]
C=c[2]
A.Hh.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.al7(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.dg(x,q,t)
x=u.r
w=x?B.iy(e):u.f
v=D.ae3(r,w,C.L,!1,t,t,t,t,new A.a14(s,u,r))
return x&&w!=null?D.aia(v):v}}
A.ta.prototype={
aA(d){var x=new A.As(this.e,this.f,this.r,B.ab(),null,B.ab())
x.gaj()
x.CW=!0
x.saW(null)
return x},
aE(d,e){var x
e.scZ(this.e)
e.seu(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.ak()
e.ad()}},
bo(d){return new A.N5(this,C.G)}}
A.N5.prototype={}
A.As.prototype={
scZ(d){if(d===this.l)return
this.l=d
this.V()},
seu(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.M(0,x.gqT())
x.t=e
if(x.b!=null)e.a7(0,x.gqT())
x.V()},
Wt(){this.ak()
this.ad()},
dC(d){if(!(d.e instanceof B.bS))d.e=new B.bS()},
ab(d){this.Qs(d)
this.t.a7(0,this.gqT())},
a3(d){this.t.M(0,this.gqT())
this.Qt(0)},
gaj(){return!0},
ga_X(){switch(B.bg(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gX7(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bg(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
Er(d){switch(B.bg(this.l).a){case 0:return new B.a0(0,1/0,d.c,d.d)
case 1:return new B.a0(d.a,d.b,0,1/0)}},
aM(d){var x=this.l$
if(x!=null)return x.a_(C.M,d,x.gaY())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.a_(C.a2,d,x.gb6())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.a_(C.H,d,x.gaS())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.a_(C.O,d,x.gb_())
return 0},
bH(d){var x=this.l$
if(x==null)return new B.I(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aQ(x.fp(this.Er(d)))},
bv(){var x=this,w=y.a.a(B.q.prototype.ga1.call(x)),v=x.l$
if(v==null)x.k1=new B.I(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.c7(0,x.Er(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aQ(v)}x.t.rC(x.ga_X())
x.t.rB(0,x.gX7())},
nS(d){var x=this
switch(x.l.a){case 0:return new B.k(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.k(-d,0)}},
Gt(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
an(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.nS(x)
w=new A.a94(t,x)
x=t.Gt(x)&&t.S!==C.r
v=t.am
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sah(0,d.iZ(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sah(0,null)
w.$2(d,e)}}},
n(d){this.am.sah(0,null)
this.iz(0)},
cY(d,e){var x=this.t.as
x.toString
x=this.nS(x)
e.aH(0,x.a,x.b)},
i_(d){var x=this,w=x.t.as
w.toString
w=x.nS(w)
if(x.Gt(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cd(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jz(new A.a93(w,e),w.nS(x),e)}return!1},
l_(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gih()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.nn(x,f)}w=B.kT(d.cV(0,q.l$),f)
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
return new D.nn(r,w.c1(q.nS(r)))},
da(d,e,f,g){this.Cz(d,null,f,D.aip(d,e,f,this.t,g,this))},
ng(){return this.da(C.au,null,C.t,null)},
kg(d){return this.da(C.au,null,C.t,d)},
la(d,e,f){return this.da(d,null,e,f)},
kh(d,e){return this.da(C.au,d,C.t,e)},
yX(d){var x
switch(B.bg(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iGo:1}
A.BH.prototype={
ab(d){var x
this.cW(d)
x=this.l$
if(x!=null)x.ab(d)},
a3(d){var x
this.cC(0)
x=this.l$
if(x!=null)x.a3(0)}}
A.OZ.prototype={}
A.P_.prototype={}
var z=a.updateTypes(["x(x)","ta(L,fs)","~()","~({curve:dG,descendant:q?,duration:aH,rect:u?})"])
A.a14.prototype={
$2(d,e){return new A.ta(this.c,e,C.aN,this.a.a,null)},
$S:z+1}
A.a94.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.cT(x,e.Y(0,this.b))},
$S:16}
A.a93.prototype={
$2(d,e){return this.a.l$.bt(d,e)},
$S:9};(function aliases(){var x=A.BH.prototype
x.Qs=x.ab
x.Qt=x.a3})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.As.prototype,"gqT","Wt",2)
w(u,"gaY","aM",0)
w(u,"gb6","aL",0)
w(u,"gaS","aJ",0)
w(u,"gb_","aK",0)
v(u,"gnf",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["da","ng","kg","la","kh"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Hh,B.Z)
u(B.eO,[A.a14,A.a94,A.a93])
v(A.ta,B.aF)
v(A.OZ,B.qC)
v(A.P_,A.OZ)
v(A.N5,A.P_)
v(A.BH,B.w)
v(A.As,A.BH)
x(A.BH,B.ay)
w(A.OZ,B.wq)
w(A.P_,D.Io)})()
B.c9(b.typeUniverse,JSON.parse('{"ta":{"aF":[],"af":[],"h":[]},"Hh":{"Z":[],"h":[]},"N5":{"aW":[],"aj":[],"L":[]},"As":{"w":[],"ay":["w"],"Go":[],"q":[],"F":[],"a1":[]}}'))
var y={a:B.O("a0")}}
$__dart_deferred_initializers__["YNfdsWBcB67hcfOppAiedOLgk78="] = $__dart_deferred_initializers__.current
