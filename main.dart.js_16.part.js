self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
GZ(d,e,f){return new A.GY(f,e,!1,d,null)},
GY:function GY(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.r=f
_.x=g
_.a=h},
a0k:function a0k(d,e,f){this.a=d
this.b=e
this.c=f},
rR:function rR(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
MC:function MC(d,e){var _=this
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
Aa:function Aa(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.P=f
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
a8a:function a8a(d,e){this.a=d
this.b=e},
a89:function a89(d,e){this.a=d
this.b=e},
Bn:function Bn(){},
Oq:function Oq(){},
Or:function Or(){}},D,B,C
A=a.updateHolder(c[14],A)
D=c[17]
B=c[0]
C=c[2]
A.GY.prototype={
G(d,e){var x,w,v,u=this,t=null,s={},r=D.ak0(e,u.c,!1)
s.a=u.x
x=u.r
w=x?B.wz(e):u.f
v=D.ad4(r,w,C.O,!1,t,t,t,t,new A.a0k(s,u,r))
return x&&w!=null?D.ah3(v):v}}
A.rR.prototype={
aC(d){var x=new A.Aa(this.e,this.f,this.r,B.ab(),null,B.ab())
x.gaj()
x.CW=!0
x.saS(null)
return x},
aG(d,e){var x
e.scW(this.e)
e.seq(0,this.f)
x=this.r
if(x!==e.P){e.P=x
e.al()
e.ag()}},
bn(d){return new A.MC(this,C.G)}}
A.MC.prototype={}
A.Aa.prototype={
scW(d){if(d===this.l)return
this.l=d
this.Y()},
seq(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.M(0,x.gqH())
x.t=e
if(x.b!=null)e.aa(0,x.gqH())
x.Y()},
VX(){this.al()
this.ag()},
e_(d){if(!(d.e instanceof B.bV))d.e=new B.bV()},
ac(d){this.Q0(d)
this.t.aa(0,this.gqH())},
a4(d){this.t.M(0,this.gqH())
this.Q1(0)},
gaj(){return!0},
ga_l(){switch(B.be(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gWA(){var x=this,w=x.l$
if(w==null)return 0
switch(B.be(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
E6(d){switch(B.be(this.l).a){case 0:return new B.aa(0,1/0,d.c,d.d)
case 1:return new B.aa(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.Z(C.L,d,x.gaX())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.Z(C.a0,d,x.gb5())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.Z(C.J,d,x.gaT())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.Z(C.S,d,x.gb2())
return 0},
bG(d){var x=this.l$
if(x==null)return new B.K(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aW(x.fl(this.E6(d)))},
bv(){var x=this,w=y.a.a(B.r.prototype.ga_.call(x)),v=x.l$
if(v==null)x.k1=new B.K(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.cc(0,x.E6(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aW(v)}x.t.rn(x.ga_l())
x.t.rm(0,x.gWA())},
nI(d){var x=this
switch(x.l.a){case 0:return new B.k(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.k(-d,0)}},
G8(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ao(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.nI(x)
w=new A.a8a(t,x)
x=t.G8(x)&&t.P!==C.w
v=t.an
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sak(0,d.jV(x,e,new B.t(0,0,0+u.a,0+u.b),w,t.P,v.a))}else{v.sak(0,null)
w.$2(d,e)}}},
n(d){this.an.sak(0,null)
this.j9(0)},
cV(d,e){var x=this.t.as
x.toString
x=this.nI(x)
e.aF(0,x.a,x.b)},
hV(d){var x=this,w=x.t.as
w.toString
w=x.nI(w)
if(x.G8(w)){w=x.k1
return new B.t(0,0,0+w.a,0+w.b)}return null},
cj(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.js(new A.a89(w,e),w.nI(x),e)}return!1},
kT(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gi9()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.n1(x,f)}w=B.kx(d.cT(0,q.l$),f)
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
return new D.n1(r,w.c_(q.nI(r)))},
d6(d,e,f,g){this.Cg(d,null,f,D.ahi(d,e,f,this.t,g,this))},
n7(){return this.d6(C.aq,null,C.r,null)},
kb(d){return this.d6(C.aq,null,C.r,d)},
l3(d,e,f){return this.d6(d,null,e,f)},
kc(d,e){return this.d6(C.aq,d,C.r,e)},
yG(d){var x
switch(B.be(this.l).a){case 1:x=this.k1
return new B.t(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.t(-250,0,0+x.a+250,0+x.b)}},
$iG5:1}
A.Bn.prototype={
ac(d){var x
this.d8(d)
x=this.l$
if(x!=null)x.ac(d)},
a4(d){var x
this.cI(0)
x=this.l$
if(x!=null)x.a4(0)}}
A.Oq.prototype={}
A.Or.prototype={}
var z=a.updateTypes(["x(x)","rR(N,fh)","~()","~({curve:dA,descendant:r?,duration:aF,rect:t?})"])
A.a0k.prototype={
$2(d,e){return new A.rR(this.c,e,C.aV,this.a.a,null)},
$S:z+1}
A.a8a.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.cR(x,e.T(0,this.b))},
$S:16}
A.a89.prototype={
$2(d,e){return this.a.l$.br(d,e)},
$S:9};(function aliases(){var x=A.Bn.prototype
x.Q0=x.ac
x.Q1=x.a4})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Aa.prototype,"gqH","VX",2)
w(u,"gaX","aN",0)
w(u,"gb5","aM",0)
w(u,"gaT","aJ",0)
w(u,"gb2","aL",0)
v(u,"gn6",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["d6","n7","kb","l3","kc"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.GY,B.a6)
u(B.fq,[A.a0k,A.a8a,A.a89])
v(A.rR,B.aG)
v(A.Oq,B.qj)
v(A.Or,A.Oq)
v(A.MC,A.Or)
v(A.Bn,B.w)
v(A.Aa,A.Bn)
x(A.Bn,B.aw)
w(A.Oq,B.w9)
w(A.Or,D.I5)})()
B.cV(b.typeUniverse,JSON.parse('{"rR":{"aG":[],"ae":[],"h":[]},"GY":{"a6":[],"h":[]},"MC":{"aV":[],"aj":[],"N":[]},"Aa":{"w":[],"aw":["w"],"G5":[],"r":[],"F":[],"a3":[]}}'))
var y={a:B.R("aa")}}
$__dart_deferred_initializers__["CbUFIeOUcFEL3TKXcRJX20DCS18="] = $__dart_deferred_initializers__.current
