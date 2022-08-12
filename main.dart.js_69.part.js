self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
axg(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dL(x.glf(x)):C.hw
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.glf(w)
w=new A.cZ(x,v==null?C.r:v)}else if(w==null)w=D.n6
break
default:w=null}return new B.ju(d.a,d.f,d.b,d.e,w)},
abD(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.avL(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.aqT(t,w?s:e.d,f)
r=r?s:d.e
r=A.eu(r,w?s:e.e,f)
r.toString
return new B.ju(x,v,u,t,r)},
ju:function ju(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SC:function SC(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
amL:function amL(){},
amM:function amM(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[34],B)
A=c[0]
J=c[1]
C=c[2]
D=c[116]
B.ju.prototype={
gdh(d){return this.e.geD()},
gwA(){return this.d!=null},
d0(d,e){if(d instanceof A.bu)return B.abD(B.axg(d),this,e)
else if(d==null||d instanceof B.ju)return B.abD(y.b.a(d),this,e)
return this.Gb(d,e)},
d1(d,e){if(d instanceof A.bu)return B.abD(this,B.axg(d),e)
else if(d==null||d instanceof B.ju)return B.abD(this,y.b.a(d),e)
return this.Gc(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a2(e)!==A.G(x))return!1
return e instanceof B.ju&&J.h(e.a,x.a)&&J.h(e.b,x.b)&&J.h(e.c,x.c)&&A.du(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.e7(w)
return A.a9(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
Dt(d,e,f){return this.e.cN(new A.x(0,0,0+d.a,0+d.b),f).A(0,e)},
qx(d){return new B.SC(this,d)}}
B.SC.prototype={
a4S(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.aT(new A.aW())
u.r=x
w=u.b.a
if(w!=null)x.sa6(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sy9(w.NP(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a3(new A.Y(w,new B.amL(),A.W(w).i("Y<1,Kx>")),!0,y.m)}u.x=A.a3(new A.Y(w,new B.amM(u,d,e),A.W(w).i("Y<1,KR>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.cN(d,e)
if(x.c!=null)u.f=x.e.hr(d,e)
u.c=d
u.d=e},
a6f(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bL(0,J.a4(A.a(v.x,"_shadowPaths"),x),J.a4(A.a(v.y,"_shadowPaints"),x));++x}}},
a4a(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.aah(x)
v=x}else v=x
x=w.c
x.toString
v.Q9(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.G9(0)},
hm(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.x(v,u,v+w.a,u+w.b),s=f.d
x.a4S(t,s)
x.a6f(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bL(0,w,v)}x.a4a(d,f)
x.b.e.dV(d,t,s)}}
var z=a.updateTypes([])
B.amL.prototype={
$1(d){return d.i0()},
$S:411}
B.amM.prototype={
$1(d){return this.a.b.e.cN(this.b.cl(d.b).dU(d.d),this.c)},
$S:412};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ju,A.ft)
x(B.SC,A.lc)
w(A.b2,[B.amL,B.amM])})()
A.b4(b.typeUniverse,JSON.parse('{"ju":{"ft":[]},"SC":{"lc":[]}}'))
var y={m:A.t("Kx"),c:A.t("KR"),b:A.t("ju?")};(function constants(){D.n6=new A.d8(C.r,C.r,C.r,C.r)})()}
$__dart_deferred_initializers__["o16Z348yanWcZpDeOlWlzA+NAS4="] = $__dart_deferred_initializers__.current
