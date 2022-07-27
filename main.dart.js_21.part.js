self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
qQ(d,e,f,g){return new A.HF(g,f,e,!1,d,null)},
HF:function HF(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a1J:function a1J(d,e,f){this.a=d
this.b=e
this.c=f},
tm:function tm(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Nx:function Nx(d,e){var _=this
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
AJ:function AJ(d,e,f,g,h,i){var _=this
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
aa3:function aa3(d,e){this.a=d
this.b=e},
aa2:function aa2(d,e){this.a=d
this.b=e},
C_:function C_(){},
Pr:function Pr(){},
Ps:function Ps(){}},D,B,C
A=a.updateHolder(c[20],A)
D=c[24]
B=c[0]
C=c[2]
A.HF.prototype={
H(d,e){var x,w,v,u=this,t=null,s={},r=D.ama(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.d7(x,q,t)
x=u.r
w=x?B.iz(e):u.f
v=D.af4(r,w,C.O,!1,t,t,t,t,new A.a1J(s,u,r))
return x&&w!=null?D.aje(v):v}}
A.tm.prototype={
aB(d){var x=new A.AJ(this.e,this.f,this.r,B.ac(),null,B.ac())
x.gak()
x.CW=!0
x.saW(null)
return x},
aE(d,e){var x
e.sd0(this.e)
e.sew(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.al()
e.ae()}},
bo(d){return new A.Nx(this,C.K)}}
A.Nx.prototype={}
A.AJ.prototype={
sd0(d){if(d===this.l)return
this.l=d
this.W()},
sew(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.N(0,x.gr0())
x.t=e
if(x.b!=null)e.a8(0,x.gr0())
x.W()},
WX(){this.al()
this.ae()},
dE(d){if(!(d.e instanceof B.bV))d.e=new B.bV()},
ac(d){this.QT(d)
this.t.a8(0,this.gr0())},
a3(d){this.t.N(0,this.gr0())
this.QU(0)},
gak(){return!0},
ga_d(){switch(B.bg(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gXB(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bg(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
EI(d){switch(B.bg(this.l).a){case 0:return new B.a6(0,1/0,d.c,d.d)
case 1:return new B.a6(d.a,d.b,0,1/0)}},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.P,d,x.gaZ())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.a0(C.a5,d,x.gb7())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.a0(C.L,d,x.gaS())
return 0},
aL(d){var x=this.l$
if(x!=null)return x.a0(C.R,d,x.gb1())
return 0},
bJ(d){var x=this.l$
if(x==null)return new B.J(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aQ(x.ft(this.EI(d)))},
bx(){var x=this,w=y.a.a(B.r.prototype.ga1.call(x)),v=x.l$
if(v==null)x.k1=new B.J(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.c7(0,x.EI(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aQ(v)}x.t.rK(x.ga_d())
x.t.rJ(0,x.gXB())},
nX(d){var x=this
switch(x.l.a){case 0:return new B.k(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.k(0,-d)
case 3:return new B.k(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.k(-d,0)}},
GM(d){var x,w,v,u,t=d.a
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
w=new A.aa3(t,x)
x=t.GM(x)&&t.S!==C.r
v=t.am
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sai(0,d.j3(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sai(0,null)
w.$2(d,e)}}},
n(d){this.am.sai(0,null)
this.iC(0)},
d_(d,e){var x=this.t.as
x.toString
x=this.nX(x)
e.aI(0,x.a,x.b)},
i1(d){var x=this,w=x.t.as
w.toString
w=x.nX(w)
if(x.GM(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
ce(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jC(new A.aa2(w,e),w.nX(x),e)}return!1},
l1(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gij()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.nB(x,f)}w=B.l2(d.cX(0,q.l$),f)
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
return new D.nB(r,w.c1(q.nX(r)))},
de(d,e,f,g){this.CO(d,null,f,D.ajt(d,e,f,this.t,g,this))},
nm(){return this.de(C.au,null,C.t,null)},
kk(d){return this.de(C.au,null,C.t,d)},
ld(d,e,f){return this.de(d,null,e,f)},
kl(d,e){return this.de(C.au,d,C.t,e)},
za(d){var x
switch(B.bg(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iGM:1}
A.C_.prototype={
ac(d){var x
this.cZ(d)
x=this.l$
if(x!=null)x.ac(d)},
a3(d){var x
this.cG(0)
x=this.l$
if(x!=null)x.a3(0)}}
A.Pr.prototype={}
A.Ps.prototype={}
var z=a.updateTypes(["x(x)","tm(L,fu)","~()","~({curve:dO,descendant:r?,duration:aH,rect:u?})"])
A.a1J.prototype={
$2(d,e){return new A.tm(this.c,e,C.aN,this.a.a,null)},
$S:z+1}
A.aa3.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.cW(x,e.Z(0,this.b))},
$S:16}
A.aa2.prototype={
$2(d,e){return this.a.l$.bv(d,e)},
$S:9};(function aliases(){var x=A.C_.prototype
x.QT=x.ac
x.QU=x.a3})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.AJ.prototype,"gr0","WX",2)
w(u,"gaZ","aN",0)
w(u,"gb7","aM",0)
w(u,"gaS","aJ",0)
w(u,"gb1","aL",0)
v(u,"gnl",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["de","nm","kk","ld","kl"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.HF,B.Y)
u(B.eR,[A.a1J,A.aa3,A.aa2])
v(A.tm,B.aG)
v(A.Pr,B.qP)
v(A.Ps,A.Pr)
v(A.Nx,A.Ps)
v(A.C_,B.w)
v(A.AJ,A.C_)
x(A.C_,B.aA)
w(A.Pr,B.wF)
w(A.Ps,D.IP)})()
B.ca(b.typeUniverse,JSON.parse('{"tm":{"aG":[],"ag":[],"h":[]},"HF":{"Y":[],"h":[]},"Nx":{"aW":[],"ak":[],"L":[]},"AJ":{"w":[],"aA":["w"],"GM":[],"r":[],"G":[],"a8":[]}}'))
var y={a:B.P("a6")}}
$__dart_deferred_initializers__["VJWlXmoycjDtxIUnha0/+9wNhMk="] = $__dart_deferred_initializers__.current
