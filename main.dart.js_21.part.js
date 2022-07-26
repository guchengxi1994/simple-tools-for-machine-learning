self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
qO(d,e,f,g){return new A.Hz(g,f,e,!1,d,null)},
Hz:function Hz(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a1x:function a1x(d,e,f){this.a=d
this.b=e
this.c=f},
tk:function tk(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
No:function No(d,e){var _=this
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
AE:function AE(d,e,f,g,h,i){var _=this
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
a9M:function a9M(d,e){this.a=d
this.b=e},
a9L:function a9L(d,e){this.a=d
this.b=e},
BW:function BW(){},
Pi:function Pi(){},
Pj:function Pj(){}},D,B,C
A=a.updateHolder(c[20],A)
D=c[24]
B=c[0]
C=c[2]
A.Hz.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.alV(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.d7(x,q,t)
x=u.r
w=x?B.iy(e):u.f
v=D.aeO(r,w,C.N,!1,t,t,t,t,new A.a1x(s,u,r))
return x&&w!=null?D.aiZ(v):v}}
A.tk.prototype={
aB(d){var x=new A.AE(this.e,this.f,this.r,B.ac(),null,B.ac())
x.gak()
x.CW=!0
x.saW(null)
return x},
aE(d,e){var x
e.sd_(this.e)
e.sev(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.al()
e.ae()}},
bo(d){return new A.No(this,C.J)}}
A.No.prototype={}
A.AE.prototype={
sd_(d){if(d===this.l)return
this.l=d
this.W()},
sev(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.M(0,x.gr_())
x.t=e
if(x.b!=null)e.a7(0,x.gr_())
x.W()},
WP(){this.al()
this.ae()},
dE(d){if(!(d.e instanceof B.bV))d.e=new B.bV()},
ac(d){this.QN(d)
this.t.a7(0,this.gr_())},
a3(d){this.t.M(0,this.gr_())
this.QO(0)},
gak(){return!0},
ga0j(){switch(B.bg(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gXt(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bg(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
EF(d){switch(B.bg(this.l).a){case 0:return new B.a5(0,1/0,d.c,d.d)
case 1:return new B.a5(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.O,d,x.gaZ())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.a0(C.a4,d,x.gb6())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.a0(C.K,d,x.gaS())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.a0(C.Q,d,x.gb0())
return 0},
bJ(d){var x=this.l$
if(x==null)return new B.J(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aQ(x.fs(this.EF(d)))},
bx(){var x=this,w=y.a.a(B.r.prototype.ga1.call(x)),v=x.l$
if(v==null)x.k1=new B.J(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.c7(0,x.EF(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aQ(v)}x.t.rJ(x.ga0j())
x.t.rI(0,x.gXt())},
nX(d){var x=this
switch(x.l.a){case 0:return new B.k(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.k(-d,0)}},
GI(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ao(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.nX(x)
w=new A.a9M(t,x)
x=t.GI(x)&&t.S!==C.r
v=t.am
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sai(0,d.j2(x,e,new B.t(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sai(0,null)
w.$2(d,e)}}},
n(d){this.am.sai(0,null)
this.iB(0)},
cZ(d,e){var x=this.t.as
x.toString
x=this.nX(x)
e.aI(0,x.a,x.b)},
i0(d){var x=this,w=x.t.as
w.toString
w=x.nX(w)
if(x.GI(w)){w=x.k1
return new B.t(0,0,0+w.a,0+w.b)}return null},
ce(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jA(new A.a9L(w,e),w.nX(x),e)}return!1},
l1(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gii()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.nA(x,f)}w=B.l0(d.cW(0,q.l$),f)
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
return new D.nA(r,w.c1(q.nX(r)))},
dd(d,e,f,g){this.CM(d,null,f,D.ajd(d,e,f,this.t,g,this))},
nm(){return this.dd(C.au,null,C.t,null)},
ki(d){return this.dd(C.au,null,C.t,d)},
ld(d,e,f){return this.dd(d,null,e,f)},
kj(d,e){return this.dd(C.au,d,C.t,e)},
z7(d){var x
switch(B.bg(this.l).a){case 1:x=this.k1
return new B.t(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.t(-250,0,0+x.a+250,0+x.b)}},
$iGG:1}
A.BW.prototype={
ac(d){var x
this.cY(d)
x=this.l$
if(x!=null)x.ac(d)},
a3(d){var x
this.cD(0)
x=this.l$
if(x!=null)x.a3(0)}}
A.Pi.prototype={}
A.Pj.prototype={}
var z=a.updateTypes(["x(x)","tk(L,fu)","~()","~({curve:dM,descendant:r?,duration:aH,rect:t?})"])
A.a1x.prototype={
$2(d,e){return new A.tk(this.c,e,C.aN,this.a.a,null)},
$S:z+1}
A.a9M.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.cV(x,e.Z(0,this.b))},
$S:16}
A.a9L.prototype={
$2(d,e){return this.a.l$.bv(d,e)},
$S:9};(function aliases(){var x=A.BW.prototype
x.QN=x.ac
x.QO=x.a3})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.AE.prototype,"gr_","WP",2)
w(u,"gaZ","aN",0)
w(u,"gb6","aM",0)
w(u,"gaS","aJ",0)
w(u,"gb0","aL",0)
v(u,"gnl",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dd","nm","ki","ld","kj"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Hz,B.Y)
u(B.eQ,[A.a1x,A.a9M,A.a9L])
v(A.tk,B.aG)
v(A.Pi,B.qN)
v(A.Pj,A.Pi)
v(A.No,A.Pj)
v(A.BW,B.w)
v(A.AE,A.BW)
x(A.BW,B.aA)
w(A.Pi,B.wA)
w(A.Pj,D.IH)})()
B.ca(b.typeUniverse,JSON.parse('{"tk":{"aG":[],"ag":[],"h":[]},"Hz":{"Y":[],"h":[]},"No":{"aW":[],"ak":[],"L":[]},"AE":{"w":[],"aA":["w"],"GG":[],"r":[],"G":[],"a7":[]}}'))
var y={a:B.O("a5")}}
$__dart_deferred_initializers__["pDnF9m01uYSL9AUnGGNJ2RmA+CM="] = $__dart_deferred_initializers__.current
