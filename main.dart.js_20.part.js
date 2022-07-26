self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
qJ(d,e,f,g){return new A.Hv(g,f,e,!1,d,null)},
Hv:function Hv(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a1m:function a1m(d,e,f){this.a=d
this.b=e
this.c=f},
tf:function tf(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Nj:function Nj(d,e){var _=this
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
AA:function AA(d,e,f,g,h,i){var _=this
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
a9s:function a9s(d,e){this.a=d
this.b=e},
a9r:function a9r(d,e){this.a=d
this.b=e},
BS:function BS(){},
Pd:function Pd(){},
Pe:function Pe(){}},D,B,C
A=a.updateHolder(c[19],A)
D=c[23]
B=c[0]
C=c[2]
A.Hv.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.alC(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.di(x,q,t)
x=u.r
w=x?B.iC(e):u.f
v=D.aet(r,w,C.L,!1,t,t,t,t,new A.a1m(s,u,r))
return x&&w!=null?D.aiE(v):v}}
A.tf.prototype={
aB(d){var x=new A.AA(this.e,this.f,this.r,B.ac(),null,B.ac())
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
bo(d){return new A.Nj(this,C.G)}}
A.Nj.prototype={}
A.AA.prototype={
sd_(d){if(d===this.l)return
this.l=d
this.W()},
sev(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.M(0,x.gqY())
x.t=e
if(x.b!=null)e.a7(0,x.gqY())
x.W()},
WK(){this.al()
this.ae()},
dD(d){if(!(d.e instanceof B.bU))d.e=new B.bU()},
ac(d){this.QI(d)
this.t.a7(0,this.gqY())},
a3(d){this.t.M(0,this.gqY())
this.QJ(0)},
gak(){return!0},
ga0d(){switch(B.bg(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gXo(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bg(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
EC(d){switch(B.bg(this.l).a){case 0:return new B.a5(0,1/0,d.c,d.d)
case 1:return new B.a5(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.M,d,x.gaY())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.a0(C.a4,d,x.gb6())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.a0(C.H,d,x.gaS())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.a0(C.P,d,x.gb0())
return 0},
bJ(d){var x=this.l$
if(x==null)return new B.J(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aQ(x.fs(this.EC(d)))},
bw(){var x=this,w=y.a.a(B.r.prototype.ga1.call(x)),v=x.l$
if(v==null)x.k1=new B.J(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.c7(0,x.EC(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aQ(v)}x.t.rH(x.ga0d())
x.t.rG(0,x.gXo())},
nU(d){var x=this
switch(x.l.a){case 0:return new B.k(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.k(-d,0)}},
GE(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
an(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.nU(x)
w=new A.a9s(t,x)
x=t.GE(x)&&t.S!==C.r
v=t.am
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sai(0,d.j1(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sai(0,null)
w.$2(d,e)}}},
n(d){this.am.sai(0,null)
this.iA(0)},
cZ(d,e){var x=this.t.as
x.toString
x=this.nU(x)
e.aI(0,x.a,x.b)},
i0(d){var x=this,w=x.t.as
w.toString
w=x.nU(w)
if(x.GE(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cd(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jz(new A.a9r(w,e),w.nU(x),e)}return!1},
l0(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gii()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.nv(x,f)}w=B.kY(d.cW(0,q.l$),f)
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
return new D.nv(r,w.c1(q.nU(r)))},
dd(d,e,f,g){this.CJ(d,null,f,D.aiT(d,e,f,this.t,g,this))},
nj(){return this.dd(C.au,null,C.t,null)},
kg(d){return this.dd(C.au,null,C.t,d)},
lc(d,e,f){return this.dd(d,null,e,f)},
kh(d,e){return this.dd(C.au,d,C.t,e)},
z4(d){var x
switch(B.bg(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iGC:1}
A.BS.prototype={
ac(d){var x
this.cY(d)
x=this.l$
if(x!=null)x.ac(d)},
a3(d){var x
this.cC(0)
x=this.l$
if(x!=null)x.a3(0)}}
A.Pd.prototype={}
A.Pe.prototype={}
var z=a.updateTypes(["x(x)","tf(L,ft)","~()","~({curve:dI,descendant:r?,duration:aI,rect:u?})"])
A.a1m.prototype={
$2(d,e){return new A.tf(this.c,e,C.aN,this.a.a,null)},
$S:z+1}
A.a9s.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.cU(x,e.Z(0,this.b))},
$S:16}
A.a9r.prototype={
$2(d,e){return this.a.l$.bt(d,e)},
$S:9};(function aliases(){var x=A.BS.prototype
x.QI=x.ac
x.QJ=x.a3})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.AA.prototype,"gqY","WK",2)
w(u,"gaY","aN",0)
w(u,"gb6","aM",0)
w(u,"gaS","aJ",0)
w(u,"gb0","aL",0)
v(u,"gni",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dd","nj","kg","lc","kh"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Hv,B.a_)
u(B.eQ,[A.a1m,A.a9s,A.a9r])
v(A.tf,B.aG)
v(A.Pd,B.qI)
v(A.Pe,A.Pd)
v(A.Nj,A.Pe)
v(A.BS,B.w)
v(A.AA,A.BS)
x(A.BS,B.aA)
w(A.Pd,B.ww)
w(A.Pe,D.ID)})()
B.ci(b.typeUniverse,JSON.parse('{"tf":{"aG":[],"ah":[],"h":[]},"Hv":{"a_":[],"h":[]},"Nj":{"aW":[],"al":[],"L":[]},"AA":{"w":[],"aA":["w"],"GC":[],"r":[],"F":[],"a7":[]}}'))
var y={a:B.N("a5")}}
$__dart_deferred_initializers__["XGi0vLtX91Uch3k105Pm6PYHakA="] = $__dart_deferred_initializers__.current
