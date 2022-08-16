self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
axx(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dN(x.glf(x)):C.hz
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.glf(w)
w=new A.d0(x,v==null?C.t:v)}else if(w==null)w=D.n7
break
default:w=null}return new B.jv(d.a,d.f,d.b,d.e,w)},
abM(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.aw1(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.ar9(t,w?s:e.d,f)
r=r?s:d.e
r=A.ew(r,w?s:e.e,f)
r.toString
return new B.jv(x,v,u,t,r)},
jv:function jv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SG:function SG(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
an1:function an1(){},
an2:function an2(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[33],B)
A=c[0]
J=c[1]
C=c[2]
D=c[118]
B.jv.prototype={
gdj(d){return this.e.geD()},
gwC(){return this.d!=null},
d2(d,e){if(d instanceof A.bv)return B.abM(B.axx(d),this,e)
else if(d==null||d instanceof B.jv)return B.abM(y.b.a(d),this,e)
return this.Gc(d,e)},
d3(d,e){if(d instanceof A.bv)return B.abM(this,B.axx(d),e)
else if(d==null||d instanceof B.jv)return B.abM(this,y.b.a(d),e)
return this.Gd(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a3(e)!==A.G(x))return!1
return e instanceof B.jv&&J.h(e.a,x.a)&&J.h(e.b,x.b)&&J.h(e.c,x.c)&&A.dv(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.e8(w)
return A.a9(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
Du(d,e,f){return this.e.cP(new A.x(0,0,0+d.a,0+d.b),f).A(0,e)},
qx(d){return new B.SG(this,d)}}
B.SG.prototype={
a4R(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.aU(new A.aW())
u.r=x
w=u.b.a
if(w!=null)x.sa6(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sya(w.NQ(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a4(new A.Y(w,new B.an1(),A.W(w).i("Y<1,KA>")),!0,y.m)}u.x=A.a4(new A.Y(w,new B.an2(u,d,e),A.W(w).i("Y<1,KU>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.cP(d,e)
if(x.c!=null)u.f=x.e.hr(d,e)
u.c=d
u.d=e},
a6g(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bL(0,J.a2(A.a(v.x,"_shadowPaths"),x),J.a2(A.a(v.y,"_shadowPaints"),x));++x}}},
a49(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.aah(x)
v=x}else v=x
x=w.c
x.toString
v.Qa(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.Ga(0)},
hm(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.x(v,u,v+w.a,u+w.b),s=f.d
x.a4R(t,s)
x.a6g(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bL(0,w,v)}x.a49(d,f)
x.b.e.dX(d,t,s)}}
var z=a.updateTypes([])
B.an1.prototype={
$1(d){return d.i2()},
$S:412}
B.an2.prototype={
$1(d){return this.a.b.e.cP(this.b.cm(d.b).dW(d.d),this.c)},
$S:413};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jv,A.fu)
x(B.SG,A.lf)
w(A.b3,[B.an1,B.an2])})()
A.b1(b.typeUniverse,JSON.parse('{"jv":{"fu":[]},"SG":{"lf":[]}}'))
var y={m:A.r("KA"),c:A.r("KU"),b:A.r("jv?")};(function constants(){D.n7=new A.da(C.t,C.t,C.t,C.t)})()}
$__dart_deferred_initializers__["7Pt1bO4uJOx5dnrcaK+IDPVgbC0="] = $__dart_deferred_initializers__.current
