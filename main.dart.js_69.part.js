self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
awl(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dH(x.gl1(x)):C.ht
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gl1(w)
w=new A.db(x,v==null?C.u:v)}else if(w==null)w=D.n5
break
default:w=null}return new B.jo(d.a,d.f,d.b,d.e,w)},
aaU(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.auO(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.apZ(t,w?s:e.d,f)
r=r?s:d.e
r=A.er(r,w?s:e.e,f)
r.toString
return new B.jo(x,v,u,t,r)},
jo:function jo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alX:function alX(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
alY:function alY(){},
alZ:function alZ(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[33],B)
A=c[0]
J=c[1]
C=c[2]
D=c[115]
B.jo.prototype={
gd8(d){return this.e.gev()},
gwh(){return this.d!=null},
cX(d,e){if(d instanceof A.bv)return B.aaU(B.awl(d),this,e)
else if(d==null||d instanceof B.jo)return B.aaU(y.b.a(d),this,e)
return this.FO(d,e)},
cY(d,e){if(d instanceof A.bv)return B.aaU(this,B.awl(d),e)
else if(d==null||d instanceof B.jo)return B.aaU(this,y.b.a(d),e)
return this.FP(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a3(e)!==A.G(x))return!1
return e instanceof B.jo&&J.h(e.a,x.a)&&J.h(e.b,x.b)&&J.h(e.c,x.c)&&A.dr(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.e2(w)
return A.ab(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
D8(d,e,f){return this.e.dO(new A.x(0,0,0+d.a,0+d.b),f).B(0,e)},
vt(d){return new B.alX(this,d)}}
B.alX.prototype={
a47(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.aX(new A.aY())
u.r=x
w=u.b.a
if(w!=null)x.sa6(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sxO(w.Ni(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a5(new A.a0(w,new B.alY(),A.Z(w).i("a0<1,K4>")),!0,y.m)}u.x=A.a5(new A.a0(w,new B.alZ(u,d,e),A.Z(w).i("a0<1,Ko>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.dO(d,e)
if(x.c!=null)u.f=x.e.hf(d,e)
u.c=d
u.d=e},
a5x(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bP(0,J.a2(A.a(v.x,"_shadowPaths"),x),J.a2(A.a(v.y,"_shadowPaints"),x));++x}}},
a3q(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.a9w(x)
v=x}else v=x
x=w.c
x.toString
v.PB(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.FM(0)},
hO(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.x(v,u,v+w.a,u+w.b),s=f.d
x.a47(t,s)
x.a5x(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bP(0,w,v)}x.a3q(d,f)
x.b.e.fA(d,t,s)}}
var z=a.updateTypes([])
B.alY.prototype={
$1(d){return d.hR()},
$S:406}
B.alZ.prototype={
$1(d){return this.a.b.e.dO(this.b.cn(d.b).dK(d.d),this.c)},
$S:407};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jo,A.hV)
x(B.alX,A.wS)
w(A.b2,[B.alY,B.alZ])})()
A.b4(b.typeUniverse,JSON.parse('{"jo":{"hV":[]}}'))
var y={m:A.t("K4"),c:A.t("Ko"),b:A.t("jo?")};(function constants(){D.n5=new A.df(C.u,C.u,C.u,C.u)})()}
$__dart_deferred_initializers__["fENdTyFtXpgd8rIXpICzrmh39CU="] = $__dart_deferred_initializers__.current
