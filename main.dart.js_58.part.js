self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
ath(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dy(x.gkU(x)):C.hc
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gkU(w)
w=new A.d6(x,v==null?C.r:v)}else if(w==null)w=D.mK
break
default:w=null}return new B.j3(d.a,d.f,d.b,d.e,w)},
a8K(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.arM(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.an6(t,w?s:e.d,f)
r=r?s:d.e
r=A.ei(r,w?s:e.e,f)
r.toString
return new B.j3(x,v,u,t,r)},
j3:function j3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aj7:function aj7(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
aj8:function aj8(){},
aj9:function aj9(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[26],B)
A=c[0]
J=c[1]
C=c[2]
D=c[76]
B.j3.prototype={
gd0(d){return this.e.gek()},
gvW(){return this.d!=null},
cQ(d,e){if(d instanceof A.bK)return B.a8K(B.ath(d),this,e)
else if(d==null||d instanceof B.j3)return B.a8K(y.b.a(d),this,e)
return this.F9(d,e)},
cR(d,e){if(d instanceof A.bK)return B.a8K(this,B.ath(d),e)
else if(d==null||d instanceof B.j3)return B.a8K(this,y.b.a(d),e)
return this.Fa(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a_(e)!==A.F(x))return!1
return e instanceof B.j3&&J.f(e.a,x.a)&&J.f(e.b,x.b)&&J.f(e.c,x.c)&&A.di(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.eg(w)
return A.a8(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
Cz(d,e,f){return this.e.dG(new A.v(0,0,0+d.a,0+d.b),f).B(0,e)},
v6(d){return new B.aj7(this,d)}}
B.aj7.prototype={
a3b(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.b_(new A.b2())
u.r=x
w=u.b.a
if(w!=null)x.sac(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sxn(w.My(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a5(new A.a4(w,new B.aj8(),A.Z(w).i("a4<1,J8>")),!0,y.m)}u.x=A.a5(new A.a4(w,new B.aj9(u,d,e),A.Z(w).i("a4<1,Js>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.dG(d,e)
if(x.c!=null)u.f=x.e.h5(d,e)
u.c=d
u.d=e},
a4x(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bV(0,J.a6(A.a(v.x,"_shadowPaths"),x),J.a6(A.a(v.y,"_shadowPaints"),x));++x}}},
a2u(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.a8t(x)
v=x}else v=x
x=w.c
x.toString
v.OT(d,x,w.f,e)},
m(d){var x=this.z
if(x!=null)x.m(0)
this.F7(0)},
hF(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.v(v,u,v+w.a,u+w.b),s=f.d
x.a3b(t,s)
x.a4x(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bV(0,w,v)}x.a2u(d,f)
x.b.e.fp(d,t,s)}}
var z=a.updateTypes([])
B.aj8.prototype={
$1(d){return d.hI()},
$S:398}
B.aj9.prototype={
$1(d){return this.a.b.e.dG(this.b.ce(d.b).dC(d.d),this.c)},
$S:399};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j3,A.hD)
x(B.aj7,A.wc)
w(A.b6,[B.aj8,B.aj9])})()
A.b9(b.typeUniverse,JSON.parse('{"j3":{"hD":[]}}'))
var y={m:A.A("J8"),c:A.A("Js"),b:A.A("j3?")};(function constants(){D.mK=new A.dk(C.r,C.r,C.r,C.r)
D.eL=new A.az(50,50,50,50)})()}
$__dart_deferred_initializers__["Ds96ky8jpg7ioL8reBlRuEd+1DE="] = $__dart_deferred_initializers__.current
