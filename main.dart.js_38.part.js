self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
f6(d,e,f,g){var x=e==null&&g===C.P
return new A.LR(g,f,e,x,d,null)},
LR:function LR(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
abm:function abm(d,e,f){this.a=d
this.b=e
this.c=f},
vZ:function vZ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Sa:function Sa(d,e){var _=this
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
Ea:function Ea(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.S=f
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
al9:function al9(d,e){this.a=d
this.b=e},
al8:function al8(d,e){this.a=d
this.b=e},
FA:function FA(){},
Uk:function Uk(){},
Ul:function Ul(){}},D,B,C
A=a.updateHolder(c[49],A)
D=c[51]
B=c[0]
C=c[2]
A.LR.prototype={
G(d,e){var x,w,v,u=this,t=null,s={},r=D.azb(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bQ(x,q,t)
x=u.r
w=x?B.ko(e):u.f
v=D.ar3(r,w,C.y,!1,t,t,t,t,new A.abm(s,u,r))
return x&&w!=null?D.avR(v):v}}
A.vZ.prototype={
aC(d){var x=new A.Ea(this.e,this.f,this.r,B.an(y.h),null,B.an(y.d))
x.gam()
x.CW=!0
x.sb8(null)
return x},
aE(d,e){var x
e.sdm(this.e)
e.sbL(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.an()
e.al()}},
bE(d){return new A.Sa(this,C.W)}}
A.Sa.prototype={}
A.Ea.prototype={
sdm(d){if(d===this.l)return
this.l=d
this.X()},
sbL(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.N(0,x.gu7())
x.t=e
if(x.b!=null)e.a3(0,x.gu7())
x.X()},
a1O(){this.an()
this.al()},
dS(d){if(!(d.e instanceof B.ch))d.e=new B.ch()},
af(d){this.VM(d)
this.t.a3(0,this.gu7())},
a8(d){this.t.N(0,this.gu7())
this.VN(0)},
gam(){return!0},
ga5G(){switch(B.br(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga2E(){var x=this,w=x.l$
if(w==null)return 0
switch(B.br(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
It(d){switch(B.br(this.l).a){case 0:return new B.aa(0,1/0,d.c,d.d)
case 1:return new B.aa(d.a,d.b,0,1/0)}},
aQ(d){var x=this.l$
if(x!=null)return x.W(C.U,d,x.gb_())
return 0},
aH(d){var x=this.l$
if(x!=null)return x.W(C.R,d,x.gaW())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.W(C.O,d,x.gaS())
return 0},
aP(d){var x=this.l$
if(x!=null)return x.W(C.a1,d,x.gb9())
return 0},
bY(d){var x=this.l$
if(x==null)return new B.P(C.f.E(0,d.a,d.b),C.f.E(0,d.c,d.d))
return d.b2(x.he(this.It(d)))},
bz(){var x=this,w=y.a.a(B.u.prototype.ga4.call(x)),v=x.l$
if(v==null)x.k1=new B.P(C.f.E(0,w.a,w.b),C.f.E(0,w.c,w.d))
else{v.cm(0,x.It(w),!0)
v=x.l$.k1
v.toString
x.k1=w.b2(v)}x.t.nd(x.ga5G())
x.t.n9(0,x.ga2E())},
pK(d){var x=this
switch(x.l.a){case 0:return new B.l(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.l(-d,0)}},
KO(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
aq(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pK(x)
w=new A.al9(t,x)
x=t.KO(x)&&t.S!==C.v
v=t.ae
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sap(0,d.jX(x,e,new B.x(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sap(0,null)
w.$2(d,e)}}},
n(d){this.ae.sap(0,null)
this.jp(0)},
dl(d,e){var x=this.t.as
x.toString
x=this.pK(x)
e.aL(0,x.a,x.b)},
iP(d){var x=this,w=x.t.as
w.toString
w=x.pK(w)
if(x.KO(w)){w=x.k1
return new B.x(0,0,0+w.a,0+w.b)}return null},
cp(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jy(new A.al8(w,e),w.pK(x),e)}return!1},
mf(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gj8()
if(!(d instanceof B.y)){x=q.t.as
x.toString
return new D.pL(x,f)}w=B.mY(d.ct(0,q.l$),f)
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
return new D.pL(r,w.cn(q.pK(r)))},
dT(d,e,f,g){this.Gh(d,null,f,D.aw7(d,e,f,this.t,g,this))},
p6(){return this.dT(C.aJ,null,C.x,null)},
li(d){return this.dT(C.aJ,null,C.x,d)},
mt(d,e,f){return this.dT(d,null,e,f)},
lj(d,e){return this.dT(C.aJ,d,C.x,e)},
Cf(d){var x
switch(B.br(this.l).a){case 1:x=this.k1
return new B.x(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.x(-250,0,0+x.a+250,0+x.b)}},
$iAf:1}
A.FA.prototype={
af(d){var x
this.dc(d)
x=this.l$
if(x!=null)x.af(d)},
a8(d){var x
this.cS(0)
x=this.l$
if(x!=null)x.a8(0)}}
A.Uk.prototype={}
A.Ul.prototype={}
var z=a.updateTypes(["z(z)","vZ(A,h8)","~()","~({curve:eB,descendant:u?,duration:aT,rect:x?})"])
A.abm.prototype={
$2(d,e){return new A.vZ(this.c,e,C.aZ,this.a.a,null)},
$S:z+1}
A.al9.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.dh(x,e.Z(0,this.b))},
$S:24}
A.al8.prototype={
$2(d,e){return this.a.l$.bH(d,e)},
$S:9};(function aliases(){var x=A.FA.prototype
x.VM=x.af
x.VN=x.a8})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Ea.prototype,"gu7","a1O",2)
w(u,"gb_","aQ",0)
w(u,"gaW","aH",0)
w(u,"gaS","aJ",0)
w(u,"gb9","aP",0)
v(u,"gp5",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dT","p6","li","mt","lj"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.LR,B.a1)
u(B.cH,[A.abm,A.al9,A.al8])
v(A.vZ,B.aR)
v(A.Uk,B.uo)
v(A.Ul,A.Uk)
v(A.Sa,A.Ul)
v(A.FA,B.y)
v(A.Ea,A.FA)
x(A.FA,B.aJ)
w(A.Uk,B.zv)
w(A.Ul,D.N7)})()
B.b4(b.typeUniverse,JSON.parse('{"vZ":{"aR":[],"ao":[],"f":[]},"LR":{"a1":[],"f":[]},"Sa":{"b8":[],"aA":[],"A":[]},"Ea":{"y":[],"aJ":["y"],"Af":[],"u":[],"Q":[],"ai":[]}}'))
var y={a:B.t("aa"),h:B.t("iO"),d:B.t("bB")}}
$__dart_deferred_initializers__["aEzgLBJDT5/gz/kDmOuViGBP2gA="] = $__dart_deferred_initializers__.current
