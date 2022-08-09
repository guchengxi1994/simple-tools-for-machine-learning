self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
atW(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dC(x.gkW(x)):C.hi
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gkW(w)
w=new A.d8(x,v==null?C.r:v)}else if(w==null)w=D.mP
break
default:w=null}return new B.j7(d.a,d.f,d.b,d.e,w)},
a9c(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.asp(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.anM(t,w?s:e.d,f)
r=r?s:d.e
r=A.ej(r,w?s:e.e,f)
r.toString
return new B.j7(x,v,u,t,r)},
j7:function j7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ajL:function ajL(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
ajM:function ajM(){},
ajN:function ajN(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[26],B)
A=c[0]
J=c[1]
C=c[2]
D=c[77]
B.j7.prototype={
gd2(d){return this.e.gek()},
gvZ(){return this.d!=null},
cQ(d,e){if(d instanceof A.bL)return B.a9c(B.atW(d),this,e)
else if(d==null||d instanceof B.j7)return B.a9c(y.b.a(d),this,e)
return this.Fd(d,e)},
cR(d,e){if(d instanceof A.bL)return B.a9c(this,B.atW(d),e)
else if(d==null||d instanceof B.j7)return B.a9c(this,y.b.a(d),e)
return this.Fe(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a_(e)!==A.G(x))return!1
return e instanceof B.j7&&J.f(e.a,x.a)&&J.f(e.b,x.b)&&J.f(e.c,x.c)&&A.dk(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.dW(w)
return A.a8(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
CB(d,e,f){return this.e.dH(new A.w(0,0,0+d.a,0+d.b),f).B(0,e)},
v9(d){return new B.ajL(this,d)}}
B.ajL.prototype={
a3k(d,e){var x,w,v,u=this
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
v.sxp(w.MD(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a5(new A.a0(w,new B.ajM(),A.Y(w).i("a0<1,Jg>")),!0,y.m)}u.x=A.a5(new A.a0(w,new B.ajN(u,d,e),A.Y(w).i("a0<1,JA>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.dH(d,e)
if(x.c!=null)u.f=x.e.h7(d,e)
u.c=d
u.d=e},
a4I(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bV(0,J.a6(A.a(v.x,"_shadowPaths"),x),J.a6(A.a(v.y,"_shadowPaints"),x));++x}}},
a2D(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.a8G(x)
v=x}else v=x
x=w.c
x.toString
v.OY(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.Fb(0)},
hI(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.w(v,u,v+w.a,u+w.b),s=f.d
x.a3k(t,s)
x.a4I(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bV(0,w,v)}x.a2D(d,f)
x.b.e.fp(d,t,s)}}
var z=a.updateTypes([])
B.ajM.prototype={
$1(d){return d.hL()},
$S:401}
B.ajN.prototype={
$1(d){return this.a.b.e.dH(this.b.ce(d.b).dD(d.d),this.c)},
$S:402};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j7,A.hM)
x(B.ajL,A.wj)
w(A.b4,[B.ajM,B.ajN])})()
A.b8(b.typeUniverse,JSON.parse('{"j7":{"hM":[]}}'))
var y={m:A.x("Jg"),c:A.x("JA"),b:A.x("j7?")};(function constants(){D.mP=new A.dm(C.r,C.r,C.r,C.r)
D.eS=new A.az(50,50,50,50)})()}
$__dart_deferred_initializers__["j+X+7AEprua6N5e/N+fWk0gOiW0="] = $__dart_deferred_initializers__.current
