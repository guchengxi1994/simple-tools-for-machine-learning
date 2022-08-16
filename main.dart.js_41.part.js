self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
eC(d,e,f,g){var x=e==null&&g===C.N
return new A.MM(g,f,e,x,d,null)},
MM:function MM(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
acM:function acM(d,e,f){this.a=d
this.b=e
this.c=f},
wH:function wH(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Tf:function Tf(d,e){var _=this
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
EZ:function EZ(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.a7=g
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
amY:function amY(d,e){this.a=d
this.b=e},
amX:function amX(d,e){this.a=d
this.b=e},
Gp:function Gp(){},
Vr:function Vr(){},
Vs:function Vs(){}},D,B,C
A=a.updateHolder(c[55],A)
D=c[59]
B=c[0]
C=c[2]
A.MM.prototype={
G(d,e){var x,w,v,u=this,t=null,s={},r=D.aBn(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bM(x,q,t)
x=u.r
w=x?B.kG(e):u.f
v=D.at9(r,w,C.z,!1,t,t,t,t,new A.acM(s,u,r))
return x&&w!=null?D.ay3(v):v}}
A.wH.prototype={
aC(d){var x=new A.EZ(this.e,this.f,this.r,B.ap(y.h),null,B.ap(y.d))
x.gam()
x.CW=!0
x.sbb(null)
return x},
aG(d,e){var x
e.sdA(this.e)
e.sbO(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.aq()
e.an()}},
bB(d){return new A.Tf(this,C.W)}}
A.Tf.prototype={}
A.EZ.prototype={
sdA(d){if(d===this.l)return
this.l=d
this.V()},
sbO(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.P(0,x.guA())
x.t=e
if(x.b!=null)e.a3(0,x.guA())
x.V()},
a2V(){this.aq()
this.an()},
dt(d){if(!(d.e instanceof B.ci))d.e=new B.ci()},
ag(d){this.WK(d)
this.t.a3(0,this.guA())},
a9(d){this.t.P(0,this.guA())
this.WL(0)},
gam(){return!0},
ga8a(){switch(B.bu(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga3M(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bu(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
J7(d){switch(B.bu(this.l).a){case 0:return new B.aa(0,1/0,d.c,d.d)
case 1:return new B.aa(d.a,d.b,0,1/0)}},
aQ(d){var x=this.l$
if(x!=null)return x.Y(C.U,d,x.gaZ())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.Y(C.Q,d,x.gaV())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.Y(C.R,d,x.gaW())
return 0},
aP(d){var x=this.l$
if(x!=null)return x.Y(C.a1,d,x.gb7())
return 0},
bU(d){var x=this.l$
if(x==null)return new B.O(C.f.F(0,d.a,d.b),C.f.F(0,d.c,d.d))
return d.aX(x.h_(this.J7(d)))},
by(){var x=this,w=y.a.a(B.u.prototype.ga4.call(x)),v=x.l$
if(v==null)x.k1=new B.O(C.f.F(0,w.a,w.b),C.f.F(0,w.c,w.d))
else{v.ci(0,x.J7(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aX(v)}x.t.nA(x.ga8a())
x.t.nx(0,x.ga3M())},
q6(d){var x=this
switch(x.l.a){case 0:return new B.j(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.j(0,-d)
case 3:return new B.j(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.j(-d,0)}},
Lu(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
aj(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.q6(x)
w=new A.amY(t,x)
x=t.Lu(x)&&t.T!==C.v
v=t.a7
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sau(0,d.kg(x,e,new B.y(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sau(0,null)
w.$2(d,e)}}},
n(d){this.a7.sau(0,null)
this.jD(0)},
dc(d,e){var x=this.t.as
x.toString
x=this.q6(x)
e.aR(0,x.a,x.b)},
j0(d){var x=this,w=x.t.as
w.toString
w=x.q6(w)
if(x.Lu(w)){w=x.k1
return new B.y(0,0,0+w.a,0+w.b)}return null},
cm(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.ih(new A.amX(w,e),w.q6(x),e)}return!1},
mA(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gjl()
if(!(d instanceof B.x)){x=q.t.as
x.toString
return new D.qe(x,f)}w=B.np(d.ct(0,q.l$),f)
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
return new D.qe(r,w.cp(q.q6(r)))},
e4(d,e,f,g){this.GU(d,null,f,D.ayj(d,e,f,this.t,g,this))},
pr(){return this.e4(C.aR,null,C.x,null)},
lz(d){return this.e4(C.aR,null,C.x,d)},
mR(d,e,f){return this.e4(d,null,e,f)},
lA(d,e){return this.e4(C.aR,d,C.x,e)},
CU(d){var x
switch(B.bu(this.l).a){case 1:x=this.k1
return new B.y(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.y(-250,0,0+x.a+250,0+x.b)}},
$iAX:1}
A.Gp.prototype={
ag(d){var x
this.da(d)
x=this.l$
if(x!=null)x.ag(d)},
a9(d){var x
this.cR(0)
x=this.l$
if(x!=null)x.a9(0)}}
A.Vr.prototype={}
A.Vs.prototype={}
var z=a.updateTypes(["z(z)","wH(B,hi)","~()","~({curve:eL,descendant:u?,duration:aW,rect:y?})"])
A.acM.prototype={
$2(d,e){return new A.wH(this.c,e,C.aQ,this.a.a,null)},
$S:z+1}
A.amY.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d7(x,e.a_(0,this.b))},
$S:24}
A.amX.prototype={
$2(d,e){return this.a.l$.bD(d,e)},
$S:8};(function aliases(){var x=A.Gp.prototype
x.WK=x.ag
x.WL=x.a9})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.EZ.prototype,"guA","a2V",2)
w(u,"gaZ","aQ",0)
w(u,"gaV","aK",0)
w(u,"gaW","aL",0)
w(u,"gb7","aP",0)
v(u,"gpq",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["e4","pr","lz","mR","lA"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.MM,B.a0)
u(B.cG,[A.acM,A.amY,A.amX])
v(A.wH,B.aR)
v(A.Vr,B.uX)
v(A.Vs,A.Vr)
v(A.Tf,A.Vs)
v(A.Gp,B.x)
v(A.EZ,A.Gp)
x(A.Gp,B.aK)
w(A.Vr,B.Ad)
w(A.Vs,D.O2)})()
B.b0(b.typeUniverse,JSON.parse('{"wH":{"aR":[],"an":[],"d":[]},"MM":{"a0":[],"d":[]},"Tf":{"b1":[],"ar":[],"B":[]},"EZ":{"x":[],"aK":["x"],"AX":[],"u":[],"R":[],"aj":[]}}'))
var y={a:B.q("aa"),h:B.q("i8"),d:B.q("bz")}}
$__dart_deferred_initializers__["dyu0/ajYlad61vbOaplIE6CIWRg="] = $__dart_deferred_initializers__.current
