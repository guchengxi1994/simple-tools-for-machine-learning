self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
auN(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dF(x.gkX(x)):C.ho
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gkX(w)
w=new A.d9(x,v==null?C.u:v)}else if(w==null)w=D.mX
break
default:w=null}return new B.je(d.a,d.f,d.b,d.e,w)},
a9N(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.atg(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.aoB(t,w?s:e.d,f)
r=r?s:d.e
r=A.em(r,w?s:e.e,f)
r.toString
return new B.je(x,v,u,t,r)},
je:function je(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akB:function akB(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
akC:function akC(){},
akD:function akD(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[32],B)
A=c[0]
J=c[1]
C=c[2]
D=c[108]
B.je.prototype={
gd4(d){return this.e.gen()},
gw2(){return this.d!=null},
cS(d,e){if(d instanceof A.bB)return B.a9N(B.auN(d),this,e)
else if(d==null||d instanceof B.je)return B.a9N(y.b.a(d),this,e)
return this.Fm(d,e)},
cT(d,e){if(d instanceof A.bB)return B.a9N(this,B.auN(d),e)
else if(d==null||d instanceof B.je)return B.a9N(this,y.b.a(d),e)
return this.Fn(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a2(e)!==A.G(x))return!1
return e instanceof B.je&&J.f(e.a,x.a)&&J.f(e.b,x.b)&&J.f(e.c,x.c)&&A.dq(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.dY(w)
return A.a8(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
CF(d,e,f){return this.e.dI(new A.x(0,0,0+d.a,0+d.b),f).B(0,e)},
vd(d){return new B.akB(this,d)}}
B.akB.prototype={
a3y(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.b0(new A.b4())
u.r=x
w=u.b.a
if(w!=null)x.sac(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sxu(w.MQ(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a6(new A.a3(w,new B.akC(),A.Y(w).i("a3<1,Ju>")),!0,y.m)}u.x=A.a6(new A.a3(w,new B.akD(u,d,e),A.Y(w).i("a3<1,JO>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.dI(d,e)
if(x.c!=null)u.f=x.e.ha(d,e)
u.c=d
u.d=e},
a4U(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bY(0,J.a1(A.a(v.x,"_shadowPaths"),x),J.a1(A.a(v.y,"_shadowPaints"),x));++x}}},
a2R(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.a8Q(x)
v=x}else v=x
x=w.c
x.toString
v.Pb(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.Fk(0)},
hJ(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.x(v,u,v+w.a,u+w.b),s=f.d
x.a3y(t,s)
x.a4U(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bY(0,w,v)}x.a2R(d,f)
x.b.e.ft(d,t,s)}}
var z=a.updateTypes([])
B.akC.prototype={
$1(d){return d.hM()},
$S:401}
B.akD.prototype={
$1(d){return this.a.b.e.dI(this.b.cf(d.b).dE(d.d),this.c)},
$S:402};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.je,A.hP)
x(B.akB,A.wx)
w(A.b2,[B.akC,B.akD])})()
A.b6(b.typeUniverse,JSON.parse('{"je":{"hP":[]}}'))
var y={m:A.v("Ju"),c:A.v("JO"),b:A.v("je?")};(function constants(){D.mX=new A.dd(C.u,C.u,C.u,C.u)})()}
$__dart_deferred_initializers__["SRcXQ7Dc+Pk4JnEGmkhAS78A9oY="] = $__dart_deferred_initializers__.current
