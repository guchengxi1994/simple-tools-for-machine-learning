self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
ew(d,e,f,g){var x=e==null&&g===C.N
return new A.Ml(g,f,e,x,d,null)},
Ml:function Ml(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
aca:function aca(d,e,f){this.a=d
this.b=e
this.c=f},
wi:function wi(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
SN:function SN(d,e){var _=this
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
Ey:function Ey(d,e,f,g,h,i){var _=this
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
ama:function ama(d,e){this.a=d
this.b=e},
am9:function am9(d,e){this.a=d
this.b=e},
FY:function FY(){},
UY:function UY(){},
UZ:function UZ(){}},D,B,C
A=a.updateHolder(c[53],A)
D=c[57]
B=c[0]
C=c[2]
A.Ml.prototype={
I(d,e){var x,w,v,u=this,t=null,s={},r=D.aAm(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bN(x,q,t)
x=u.r
w=x?B.ky(e):u.f
v=D.asc(r,w,C.y,!1,t,t,t,t,new A.aca(s,u,r))
return x&&w!=null?D.ax_(v):v}}
A.wi.prototype={
aC(d){var x=new A.Ey(this.e,this.f,this.r,B.ap(y.h),null,B.ap(y.d))
x.gan()
x.CW=!0
x.sbc(null)
return x},
aH(d,e){var x
e.sdw(this.e)
e.sbN(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.ao()
e.am()}},
bz(d){return new A.SN(this,C.V)}}
A.SN.prototype={}
A.Ey.prototype={
sdw(d){if(d===this.l)return
this.l=d
this.V()},
sbN(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.P(0,x.gus())
x.t=e
if(x.b!=null)e.a5(0,x.gus())
x.V()},
a2x(){this.ao()
this.am()},
ds(d){if(!(d.e instanceof B.cc))d.e=new B.cc()},
af(d){this.Wt(d)
this.t.a5(0,this.gus())},
a8(d){this.t.P(0,this.gus())
this.Wu(0)},
gan(){return!0},
ga7M(){switch(B.br(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga3n(){var x=this,w=x.l$
if(w==null)return 0
switch(B.br(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
IV(d){switch(B.br(this.l).a){case 0:return new B.aa(0,1/0,d.c,d.d)
case 1:return new B.aa(d.a,d.b,0,1/0)}},
aP(d){var x=this.l$
if(x!=null)return x.W(C.T,d,x.gaY())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.W(C.P,d,x.gaU())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.W(C.Q,d,x.gaV())
return 0},
aO(d){var x=this.l$
if(x!=null)return x.W(C.a0,d,x.gb5())
return 0},
bS(d){var x=this.l$
if(x==null)return new B.P(C.f.G(0,d.a,d.b),C.f.G(0,d.c,d.d))
return d.aW(x.fR(this.IV(d)))},
by(){var x=this,w=y.a.a(B.u.prototype.ga3.call(x)),v=x.l$
if(v==null)x.k1=new B.P(C.f.G(0,w.a,w.b),C.f.G(0,w.c,w.d))
else{v.cf(0,x.IV(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aW(v)}x.t.nq(x.ga7M())
x.t.nn(0,x.ga3n())},
pY(d){var x=this
switch(x.l.a){case 0:return new B.j(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.j(0,-d)
case 3:return new B.j(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.j(-d,0)}},
Lh(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ah(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pY(x)
w=new A.ama(t,x)
x=t.Lh(x)&&t.T!==C.v
v=t.a9
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sar(0,d.kb(x,e,new B.x(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sar(0,null)
w.$2(d,e)}}},
n(d){this.a9.sar(0,null)
this.jz(0)},
d7(d,e){var x=this.t.as
x.toString
x=this.pY(x)
e.aQ(0,x.a,x.b)},
iZ(d){var x=this,w=x.t.as
w.toString
w=x.pY(w)
if(x.Lh(w)){w=x.k1
return new B.x(0,0,0+w.a,0+w.b)}return null},
co(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.iU(new A.am9(w,e),w.pY(x),e)}return!1},
ms(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gji()
if(!(d instanceof B.z)){x=q.t.as
x.toString
return new D.q2(x,f)}w=B.nb(d.cw(0,q.l$),f)
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
return new D.q2(r,w.cl(q.pY(r)))},
e1(d,e,f,g){this.GG(d,null,f,D.axf(d,e,f,this.t,g,this))},
pj(){return this.e1(C.aM,null,C.x,null)},
lw(d){return this.e1(C.aM,null,C.x,d)},
mI(d,e,f){return this.e1(d,null,e,f)},
lx(d,e){return this.e1(C.aM,d,C.x,e)},
CD(d){var x
switch(B.br(this.l).a){case 1:x=this.k1
return new B.x(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.x(-250,0,0+x.a+250,0+x.b)}},
$iAB:1}
A.FY.prototype={
af(d){var x
this.d5(d)
x=this.l$
if(x!=null)x.af(d)},
a8(d){var x
this.cQ(0)
x=this.l$
if(x!=null)x.a8(0)}}
A.UY.prototype={}
A.UZ.prototype={}
var z=a.updateTypes(["y(y)","wi(B,hf)","~()","~({curve:eF,descendant:u?,duration:aV,rect:x?})"])
A.aca.prototype={
$2(d,e){return new A.wi(this.c,e,C.b1,this.a.a,null)},
$S:z+1}
A.ama.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.dj(x,e.a_(0,this.b))},
$S:23}
A.am9.prototype={
$2(d,e){return this.a.l$.bG(d,e)},
$S:9};(function aliases(){var x=A.FY.prototype
x.Wt=x.af
x.Wu=x.a8})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Ey.prototype,"gus","a2x",2)
w(u,"gaY","aP",0)
w(u,"gaU","aJ",0)
w(u,"gaV","aK",0)
w(u,"gb5","aO",0)
v(u,"gpi",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["e1","pj","lw","mI","lx"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Ml,B.a0)
u(B.cK,[A.aca,A.ama,A.am9])
v(A.wi,B.aT)
v(A.UY,B.uH)
v(A.UZ,A.UY)
v(A.SN,A.UZ)
v(A.FY,B.z)
v(A.Ey,A.FY)
x(A.FY,B.aJ)
w(A.UY,B.zS)
w(A.UZ,D.ND)})()
B.b1(b.typeUniverse,JSON.parse('{"wi":{"aT":[],"aq":[],"f":[]},"Ml":{"a0":[],"f":[]},"SN":{"b_":[],"ao":[],"B":[]},"Ey":{"z":[],"aJ":["z"],"AB":[],"u":[],"R":[],"aj":[]}}'))
var y={a:B.r("aa"),h:B.r("iV"),d:B.r("bC")}}
$__dart_deferred_initializers__["C9oIGeC3NxNYpQ8dc6F17bPbuUs="] = $__dart_deferred_initializers__.current
