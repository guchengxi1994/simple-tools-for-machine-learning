self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
re(d,e,f,g){return new A.Ii(g,f,e,!1,d,null)},
Ii:function Ii(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
a3o:function a3o(d,e,f){this.a=d
this.b=e
this.c=f},
tN:function tN(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Oe:function Oe(d,e){var _=this
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
Bg:function Bg(d,e,f,g,h,i){var _=this
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
abO:function abO(d,e){this.a=d
this.b=e},
abN:function abN(d,e){this.a=d
this.b=e},
Cx:function Cx(){},
Q8:function Q8(){},
Q9:function Q9(){}},D,B,C
A=a.updateHolder(c[21],A)
D=c[25]
B=c[0]
C=c[2]
A.Ii.prototype={
J(d,e){var x,w,v,u=this,t=null,s={},r=D.aox(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.dd(x,q,t)
x=u.r
w=x?B.iN(e):u.f
v=D.ah3(r,w,C.P,!1,t,t,t,t,new A.a3o(s,u,r))
return x&&w!=null?D.alr(v):v}}
A.tN.prototype={
aC(d){var x=new A.Bg(this.e,this.f,this.r,B.af(),null,B.af())
x.gak()
x.CW=!0
x.saZ(null)
return x},
aF(d,e){var x
e.sdd(this.e)
e.sbC(0,this.f)
x=this.r
if(x!==e.S){e.S=x
e.al()
e.ag()}},
bs(d){return new A.Oe(this,C.K)}}
A.Oe.prototype={}
A.Bg.prototype={
sdd(d){if(d===this.l)return
this.l=d
this.X()},
sbC(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.O(0,x.grz())
x.t=e
if(x.b!=null)e.a9(0,x.grz())
x.X()},
Y_(){this.al()
this.ag()},
dQ(d){if(!(d.e instanceof B.bZ))d.e=new B.bZ()},
ae(d){this.RT(d)
this.t.a9(0,this.grz())},
a6(d){this.t.O(0,this.grz())
this.RU(0)},
gak(){return!0},
ga0m(){switch(B.bl(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
gYG(){var x=this,w=x.l$
if(w==null)return 0
switch(B.bl(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
FB(d){switch(B.bl(this.l).a){case 0:return new B.a7(0,1/0,d.c,d.d)
case 1:return new B.a7(d.a,d.b,0,1/0)}},
aO(d){var x=this.l$
if(x!=null)return x.a0(C.Q,d,x.gb1())
return 0},
aN(d){var x=this.l$
if(x!=null)return x.a0(C.a6,d,x.gbb())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.a0(C.L,d,x.gaV())
return 0},
aM(d){var x=this.l$
if(x!=null)return x.a0(C.S,d,x.gb5())
return 0},
bO(d){var x=this.l$
if(x==null)return new B.L(C.h.E(0,d.a,d.b),C.h.E(0,d.c,d.d))
return d.aT(x.fH(this.FB(d)))},
bA(){var x=this,w=y.a.a(B.t.prototype.ga2.call(x)),v=x.l$
if(v==null)x.k1=new B.L(C.h.E(0,w.a,w.b),C.h.E(0,w.c,w.d))
else{v.ci(0,x.FB(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aT(v)}x.t.tj(x.ga0m())
x.t.ti(0,x.gYG())},
oq(d){var x=this
switch(x.l.a){case 0:return new B.l(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.l(0,-d)
case 3:return new B.l(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.l(-d,0)}},
HI(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ap(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.oq(x)
w=new A.abO(t,x)
x=t.HI(x)&&t.S!==C.r
v=t.am
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sai(0,d.jk(x,e,new B.u(0,0,0+u.a,0+u.b),w,t.S,v.a))}else{v.sai(0,null)
w.$2(d,e)}}},
n(d){this.am.sai(0,null)
this.iS(0)},
dc(d,e){var x=this.t.as
x.toString
x=this.oq(x)
e.aI(0,x.a,x.b)},
ih(d){var x=this,w=x.t.as
w.toString
w=x.oq(w)
if(x.HI(w)){w=x.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cp(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.jT(new A.abN(w,e),w.oq(x),e)}return!1},
lm(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.giB()
if(!(d instanceof B.w)){x=q.t.as
x.toString
return new D.nZ(x,f)}w=B.lm(d.d8(0,q.l$),f)
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
return new D.nZ(r,w.ca(q.oq(r)))},
dr(d,e,f,g){this.DG(d,null,f,D.alG(d,e,f,this.t,g,this))},
nP(){return this.dr(C.av,null,C.t,null)},
kD(d){return this.dr(C.av,null,C.t,d)},
lz(d,e,f){return this.dr(d,null,e,f)},
kE(d,e){return this.dr(C.av,d,C.t,e)},
zS(d){var x
switch(B.bl(this.l).a){case 1:x=this.k1
return new B.u(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.u(-250,0,0+x.a+250,0+x.b)}},
$iHp:1}
A.Cx.prototype={
ae(d){var x
this.da(d)
x=this.l$
if(x!=null)x.ae(d)},
a6(d){var x
this.cQ(0)
x=this.l$
if(x!=null)x.a6(0)}}
A.Q8.prototype={}
A.Q9.prototype={}
var z=a.updateTypes(["y(y)","tN(J,fB)","~()","~({curve:dT,descendant:t?,duration:aI,rect:u?})"])
A.a3o.prototype={
$2(d,e){return new A.tN(this.c,e,C.aQ,this.a.a,null)},
$S:z+1}
A.abO.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.d7(x,e.a_(0,this.b))},
$S:20}
A.abN.prototype={
$2(d,e){return this.a.l$.by(d,e)},
$S:9};(function aliases(){var x=A.Cx.prototype
x.RT=x.ae
x.RU=x.a6})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Bg.prototype,"grz","Y_",2)
w(u,"gb1","aO",0)
w(u,"gbb","aN",0)
w(u,"gaV","aK",0)
w(u,"gb5","aM",0)
v(u,"gnO",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["dr","nP","kD","lz","kE"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Ii,B.a3)
u(B.eX,[A.a3o,A.abO,A.abN])
v(A.tN,B.aK)
v(A.Q8,B.rd)
v(A.Q9,A.Q8)
v(A.Oe,A.Q9)
v(A.Cx,B.w)
v(A.Bg,A.Cx)
x(A.Cx,B.aB)
w(A.Q8,B.x5)
w(A.Q9,D.Jx)})()
B.c8(b.typeUniverse,JSON.parse('{"tN":{"aK":[],"aj":[],"h":[]},"Ii":{"a3":[],"h":[]},"Oe":{"aX":[],"an":[],"J":[]},"Bg":{"w":[],"aB":["w"],"Hp":[],"t":[],"G":[],"a8":[]}}'))
var y={a:B.M("a7")}}
$__dart_deferred_initializers__["LnPYpl8TKedNznT5/qnvfL5QtR0="] = $__dart_deferred_initializers__.current
