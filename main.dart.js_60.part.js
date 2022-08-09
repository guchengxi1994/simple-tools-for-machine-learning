self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aue(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dD(x.gkW(x)):C.hj
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gkW(w)
w=new A.d8(x,v==null?C.t:v)}else if(w==null)w=D.mS
break
default:w=null}return new B.ja(d.a,d.f,d.b,d.e,w)},
a9i(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.asI(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.ao4(t,w?s:e.d,f)
r=r?s:d.e
r=A.ej(r,w?s:e.e,f)
r.toString
return new B.ja(x,v,u,t,r)},
ja:function ja(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ak4:function ak4(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
ak5:function ak5(){},
ak6:function ak6(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[26],B)
A=c[0]
J=c[1]
C=c[2]
D=c[78]
B.ja.prototype={
gd3(d){return this.e.gel()},
gw_(){return this.d!=null},
cR(d,e){if(d instanceof A.bM)return B.a9i(B.aue(d),this,e)
else if(d==null||d instanceof B.ja)return B.a9i(y.b.a(d),this,e)
return this.Fe(d,e)},
cS(d,e){if(d instanceof A.bM)return B.a9i(this,B.aue(d),e)
else if(d==null||d instanceof B.ja)return B.a9i(this,y.b.a(d),e)
return this.Ff(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a_(e)!==A.G(x))return!1
return e instanceof B.ja&&J.f(e.a,x.a)&&J.f(e.b,x.b)&&J.f(e.c,x.c)&&A.dk(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.dW(w)
return A.a8(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
CC(d,e,f){return this.e.dH(new A.w(0,0,0+d.a,0+d.b),f).B(0,e)},
va(d){return new B.ak4(this,d)}}
B.ak4.prototype={
a3l(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.b0(new A.b3())
u.r=x
w=u.b.a
if(w!=null)x.sac(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sxq(w.ME(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a6(new A.a0(w,new B.ak5(),A.Y(w).i("a0<1,Ji>")),!0,y.m)}u.x=A.a6(new A.a0(w,new B.ak6(u,d,e),A.Y(w).i("a0<1,JC>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.dH(d,e)
if(x.c!=null)u.f=x.e.h8(d,e)
u.c=d
u.d=e},
a4J(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bV(0,J.a1(A.a(v.x,"_shadowPaths"),x),J.a1(A.a(v.y,"_shadowPaints"),x));++x}}},
a2E(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.a8I(x)
v=x}else v=x
x=w.c
x.toString
v.P_(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.Fc(0)},
hI(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.w(v,u,v+w.a,u+w.b),s=f.d
x.a3l(t,s)
x.a4J(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bV(0,w,v)}x.a2E(d,f)
x.b.e.fs(d,t,s)}}
var z=a.updateTypes([])
B.ak5.prototype={
$1(d){return d.hL()},
$S:402}
B.ak6.prototype={
$1(d){return this.a.b.e.dH(this.b.ce(d.b).dD(d.d),this.c)},
$S:403};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ja,A.hO)
x(B.ak4,A.wl)
w(A.b5,[B.ak5,B.ak6])})()
A.b8(b.typeUniverse,JSON.parse('{"ja":{"hO":[]}}'))
var y={m:A.x("Ji"),c:A.x("JC"),b:A.x("ja?")};(function constants(){D.mS=new A.dm(C.t,C.t,C.t,C.t)
D.eT=new A.aA(50,50,50,50)})()}
$__dart_deferred_initializers__["B79Fr7ORaW+QODsD0M2OtWlwka0="] = $__dart_deferred_initializers__.current
