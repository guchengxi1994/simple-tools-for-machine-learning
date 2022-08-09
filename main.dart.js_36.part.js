self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
f2(d,e,f,g){var x=e==null&&g===C.T
return new A.Lg(g,f,e,x,d,null)},
Lg:function Lg(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaf:function aaf(d,e,f){this.a=d
this.b=e
this.c=f},
vC:function vC(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Rq:function Rq(d,e){var _=this
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
DE:function DE(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.ae=g
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
ajO:function ajO(d,e){this.a=d
this.b=e},
ajN:function ajN(d,e){this.a=d
this.b=e},
F2:function F2(){},
Tv:function Tv(){},
Tw:function Tw(){}},D,B,C
A=a.updateHolder(c[48],A)
D=c[51]
B=c[0]
C=c[2]
A.Lg.prototype={
F(d,e){var x,w,v,u=this,t=null,s={},r=D.axw(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.c0(x,q,t)
x=u.r
w=x?B.ke(e):u.f
v=D.apE(r,w,C.F,!1,t,t,t,t,new A.aaf(s,u,r))
return x&&w!=null?D.auj(v):v}}
A.vC.prototype={
aB(d){var x=new A.DE(this.e,this.f,this.r,B.am(y.h),null,B.am(y.d))
x.gam()
x.CW=!0
x.sb7(null)
return x},
aE(d,e){var x
e.sdi(this.e)
e.sbK(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.an()
e.al()}},
bD(d){return new A.Rq(this,C.V)}}
A.Rq.prototype={}
A.DE.prototype={
sdi(d){if(d===this.l)return
this.l=d
this.Y()},
sbK(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.N(0,x.gtT())
x.t=e
if(x.b!=null)e.a5(0,x.gtT())
x.Y()},
a1j(){this.an()
this.al()},
dZ(d){if(!(d.e instanceof B.cn))d.e=new B.cn()},
af(d){this.Vn(d)
this.t.a5(0,this.gtT())},
a9(d){this.t.N(0,this.gtT())
this.Vo(0)},
gam(){return!0},
ga52(){switch(B.bn(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga27(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bn(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
I0(d){switch(B.bn(this.l).a){case 0:return new B.a9(0,1/0,d.c,d.d)
case 1:return new B.a9(d.a,d.b,0,1/0)}},
aP(d){var x=this.l$
if(x!=null)return x.V(C.S,d,x.gaY())
return 0},
aG(d){var x=this.l$
if(x!=null)return x.V(C.O,d,x.gaU())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.V(C.M,d,x.gaS())
return 0},
aO(d){var x=this.l$
if(x!=null)return x.V(C.a0,d,x.gb8())
return 0},
bQ(d){var x=this.l$
if(x==null)return new B.S(C.f.E(0,d.a,d.b),C.f.E(0,d.c,d.d))
return d.b2(x.h9(this.I0(d)))},
bC(){var x=this,w=y.a.a(B.t.prototype.ga3.call(x)),v=x.l$
if(v==null)x.k1=new B.S(C.f.E(0,w.a,w.b),C.f.E(0,w.c,w.d))
else{v.ck(0,x.I0(w),!0)
v=x.l$.k1
v.toString
x.k1=w.b2(v)}x.t.n4(x.ga52())
x.t.n0(0,x.ga27())},
pw(d){var x=this
switch(x.l.a){case 0:return new B.m(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.m(0,-d)
case 3:return new B.m(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.m(-d,0)}},
Km(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
au(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pw(x)
w=new A.ajO(t,x)
x=t.Km(x)&&t.T!==C.w
v=t.ae
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jR(x,e,new B.x(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ae.sap(0,null)
this.jl(0)},
dh(d,e){var x=this.t.as
x.toString
x=this.pw(x)
e.aN(0,x.a,x.b)},
iK(d){var x=this,w=x.t.as
w.toString
w=x.pw(w)
if(x.Km(w)){w=x.k1
return new B.x(0,0,0+w.a,0+w.b)}return null},
cv(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jt(new A.ajN(w,e),w.pw(x),e)}return!1},
m6(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gj3()
if(!(d instanceof B.B)){x=q.t.as
x.toString
return new D.pv(x,f)}w=B.mM(d.cn(0,q.l$),f)
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
return new D.pv(r,w.cf(q.pw(r)))},
dM(d,e,f,g){this.FQ(d,null,f,D.auz(d,e,f,this.t,g,this))},
oP(){return this.dM(C.aJ,null,C.x,null)},
lc(d){return this.dM(C.aJ,null,C.x,d)},
mk(d,e,f){return this.dM(d,null,e,f)},
ld(d,e){return this.dM(C.aJ,d,C.x,e)},
BQ(d){var x
switch(B.bn(this.l).a){case 1:x=this.k1
return new B.x(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.x(-250,0,0+x.a+250,0+x.b)}},
$izO:1}
A.F2.prototype={
af(d){var x
this.de(d)
x=this.l$
if(x!=null)x.af(d)},
a9(d){var x
this.cX(0)
x=this.l$
if(x!=null)x.a9(0)}}
A.Tv.prototype={}
A.Tw.prototype={}
var z=a.updateTypes(["C(C)","vC(D,h3)","~()","~({curve:ew,descendant:t?,duration:aR,rect:x?})"])
A.aaf.prototype={
$2(d,e){return new A.vC(this.c,e,C.ba,this.a.a,null)},
$S:z+1}
A.ajO.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.dc(x,e.a2(0,this.b))},
$S:23}
A.ajN.prototype={
$2(d,e){return this.a.l$.bF(d,e)},
$S:10};(function aliases(){var x=A.F2.prototype
x.Vn=x.af
x.Vo=x.a9})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.DE.prototype,"gtT","a1j",2)
w(u,"gaY","aP",0)
w(u,"gaU","aG",0)
w(u,"gaS","aJ",0)
w(u,"gb8","aO",0)
v(u,"goO",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dM","oP","lc","mk","ld"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Lg,B.a_)
u(B.cR,[A.aaf,A.ajO,A.ajN])
v(A.vC,B.aS)
v(A.Tv,B.u2)
v(A.Tw,A.Tv)
v(A.Rq,A.Tw)
v(A.F2,B.B)
v(A.DE,A.F2)
x(A.F2,B.aJ)
w(A.Tv,B.z4)
w(A.Tw,D.Mu)})()
B.b6(b.typeUniverse,JSON.parse('{"vC":{"aS":[],"ao":[],"h":[]},"Lg":{"a_":[],"h":[]},"Rq":{"b8":[],"az":[],"D":[]},"DE":{"B":[],"aJ":["B"],"zO":[],"t":[],"P":[],"aj":[]}}'))
var y={a:B.v("a9"),h:B.v("iE"),d:B.v("bG")}}
$__dart_deferred_initializers__["GSQ6J5t6prZ8kE1QQ1Jx8YXyDHA="] = $__dart_deferred_initializers__.current
