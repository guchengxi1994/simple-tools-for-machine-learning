self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
auK(d){var x,w,v=new A.bo(new Float64Array(16))
v.dS()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.nd(d[x-1],v)}return v},
a0r(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.a
w=e.a
if(x<w){x=y.m
g.push(x.a(A.Q.prototype.gah.call(e,e)))
return B.a0r(d,x.a(A.Q.prototype.gah.call(e,e)),f,g)}else if(x>w){x=y.m
f.push(x.a(A.Q.prototype.gah.call(d,d)))
return B.a0r(x.a(A.Q.prototype.gah.call(d,d)),e,f,g)}x=y.m
f.push(x.a(A.Q.prototype.gah.call(d,d)))
g.push(x.a(A.Q.prototype.gah.call(e,e)))
return B.a0r(x.a(A.Q.prototype.gah.call(d,d)),x.a(A.Q.prototype.gah.call(e,e)),f,g)},
k4:function k4(){var _=this
_.b=_.a=null
_.c=!1
_.d=null},
pa:function pa(d,e,f){var _=this
_.id=d
_.k1=e
_.ay=_.ax=null
_.d=!1
_.e=f
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
y2:function y2(d,e,f,g,h){var _=this
_.id=d
_.k1=e
_.k2=f
_.k3=g
_.p1=_.ok=_.k4=null
_.p2=!0
_.ay=_.ax=null
_.d=!1
_.e=h
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
L8:function L8(d,e,f){var _=this
_.A=d
_.ac=null
_.l$=e
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
_.ay=f
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
L5:function L5(d,e,f,g,h,i,j){var _=this
_.A=d
_.ac=e
_.aw=f
_.aH=g
_.cb=h
_.l$=i
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
_.ay=j
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
a8n:function a8n(d){this.a=d},
x7(d,e,f,g,h,i){return new B.Hf(f,h,i,e,g,d,null)},
iP:function iP(d,e,f){this.e=d
this.c=e
this.a=f},
Hf:function Hf(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.c=i
_.a=j},
jK(d,e){var x=new A.dg(d,e,C.b9)
return new A.df(x,x,x,x)}},A,C,D
B=a.updateHolder(c[52],B)
A=c[0]
C=c[2]
D=c[64]
B.k4.prototype={
j(d){var x=A.bK(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.pa.prototype={
sjT(d){var x=this,w=x.id
if(w===d)return
if(x.b!=null){if(w.a===x)w.a=null
d.a=x}x.id=d},
sbL(d,e){if(e.k(0,this.k1))return
this.k1=e
this.d7()},
af(d){this.SF(d)
this.id.a=this},
a8(d){var x=this.id
if(x.a===this)x.a=null
this.SG(0)},
f_(d,e,f,g){return this.jo(d,e.a7(0,this.k1),!0,g)},
fs(d){var x,w=this
if(!w.k1.k(0,C.j)){x=w.k1
w.sfc(d.wT(A.tC(x.a,x.b,0).a,y.y.a(w.w)))}w.hu(d)
if(!w.k1.k(0,C.j))d.bT(0)},
nd(d,e){var x
if(!this.k1.k(0,C.j)){x=this.k1
e.aM(0,x.a,x.b)}}}
B.y2.prototype={
AZ(d){var x,w,v,u,t=this
if(t.p2){x=t.EZ()
x.toString
t.p1=A.z6(x)
t.p2=!1}if(t.p1==null)return null
w=new A.jw(new Float64Array(4))
w.tj(d.a,d.b,0,1)
x=t.p1.ap(0,w).a
v=x[0]
u=t.k3
return new A.l(v-u.a,x[1]-u.b)},
f_(d,e,f,g){var x,w=this
if(w.id.a==null){if(w.k1)return w.jo(d,e.a7(0,w.k2),!0,g)
return!1}x=w.AZ(e)
if(x==null)return!1
return w.jo(d,x,!0,g)},
EZ(){var x,w
if(this.ok==null)return null
x=this.k4
w=A.tC(-x.a,-x.b,0)
x=this.ok
x.toString
w.cD(0,x)
return w},
Z5(){var x,w,v,u,t,s,r=this
r.ok=null
x=r.id.a
if(x==null)return
w=y.A
v=A.b([x],w)
u=A.b([r],w)
B.a0r(x,r,v,u)
t=B.auK(v)
x.nd(null,t)
w=r.k3
t.aM(0,w.a,w.b)
s=B.auK(u)
if(s.kC(s)===0)return
s.cD(0,t)
r.ok=s
r.p2=!0},
glC(){return!0},
fs(d){var x,w,v=this
if(v.id.a==null&&!v.k1){v.k4=v.ok=null
v.p2=!0
v.sfc(null)
return}v.Z5()
x=v.ok
w=y.y
if(x!=null){v.k4=v.k2
v.sfc(d.wT(x.a,w.a(v.w)))
v.hu(d)
d.bT(0)}else{v.k4=null
x=v.k2
v.sfc(d.wT(A.tC(x.a,x.b,0).a,w.a(v.w)))
v.hu(d)
d.bT(0)}v.p2=!0},
nd(d,e){var x=this.ok
if(x!=null)e.cD(0,x)
else{x=this.k2
e.cD(0,A.tC(x.a,x.b,0))}}}
B.L8.prototype={
sjT(d){var x=this,w=x.A
if(w===d)return
w.d=null
x.A=d
w=x.ac
if(w!=null)d.d=w
x.an()},
gav(){return!0},
bz(){var x,w=this
w.tv()
x=w.k1
x.toString
w.ac=x
w.A.d=x},
ao(d,e){var x=this.ay,w=x.a,v=this.A
if(w==null)x.saq(0,new B.pa(v,e,A.an(y.e)))
else{y.t.a(w)
w.sjT(v)
w.sbL(0,e)}x=x.a
x.toString
d.oz(x,A.e4.prototype.geE.call(this),C.j)}}
B.L5.prototype={
sjT(d){if(this.A===d)return
this.A=d
this.an()},
sS6(d){if(this.ac===d)return
this.ac=d
this.an()},
sbL(d,e){if(this.aw.k(0,e))return
this.aw=e
this.an()},
sacz(d){if(this.aH.k(0,d))return
this.aH=d
this.an()},
saaY(d){if(this.cb.k(0,d))return
this.cb=d
this.an()},
a8(d){this.ay.saq(0,null)
this.mB(0)},
gav(){return!0},
EU(){var x=y.s.a(A.u.prototype.gaq.call(this,this))
x=x==null?null:x.EZ()
if(x==null){x=new A.bo(new Float64Array(16))
x.dS()}return x},
bH(d,e){if(this.A.a==null&&!this.ac)return!1
return this.cp(d,e)},
cp(d,e){return d.v0(new B.a8n(this),e,this.EU())},
ao(d,e){var x,w,v,u,t=this,s=t.A.d
if(s==null)x=t.aw
else{w=t.aH.Bs(s)
v=t.cb
u=t.k1
u.toString
x=w.a7(0,v.Bs(u)).Z(0,t.aw)}w=y.s
if(w.a(A.u.prototype.gaq.call(t,t))==null)t.ay.saq(0,new B.y2(t.A,t.ac,e,x,A.an(y.e)))
else{v=w.a(A.u.prototype.gaq.call(t,t))
if(v!=null){v.id=t.A
v.k1=t.ac
v.k3=x
v.k2=e}}w=w.a(A.u.prototype.gaq.call(t,t))
w.toString
d.l0(w,A.e4.prototype.geE.call(t),C.j,D.Jd)},
dm(d,e){e.cD(0,this.EU())}}
B.iP.prototype={
aC(d){var x=new B.L8(this.e,null,A.an(y.d))
x.gam()
x.gav()
x.CW=!0
x.sb9(null)
return x},
aE(d,e){e.sjT(this.e)}}
B.Hf.prototype={
aC(d){var x=this,w=new B.L5(x.e,x.f,x.x,x.r,x.w,null,A.an(y.d))
w.gam()
w.gav()
w.CW=!0
w.sb9(null)
return w},
aE(d,e){var x=this
e.sjT(x.e)
e.sS6(x.f)
e.sbL(0,x.x)
e.sacz(x.r)
e.saaY(x.w)}}
var z=a.updateTypes([])
B.a8n.prototype={
$2(d,e){return this.a.tu(d,e)},
$S:9};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.k4,A.C)
w(A.bB,[B.pa,B.y2])
w(A.jg,[B.L8,B.L5])
x(B.a8n,A.cH)
w(A.aR,[B.iP,B.Hf])})()
A.b4(b.typeUniverse,JSON.parse('{"pa":{"bB":[],"Q":[]},"y2":{"bB":[],"Q":[]},"L8":{"y":[],"aJ":["y"],"u":[],"Q":[],"ai":[]},"L5":{"y":[],"aJ":["y"],"u":[],"Q":[],"ai":[]},"iP":{"aR":[],"ao":[],"f":[]},"Hf":{"aR":[],"ao":[],"f":[]}}'))
var y={d:A.t("bB"),A:A.t("k<bB>"),e:A.t("ll"),t:A.t("pa"),m:A.t("bB?"),s:A.t("y2?"),y:A.t("ars?")};(function constants(){D.mW=new A.dE(-1,0)
D.bt=new A.dE(-1,-1)
D.Co=new A.av(16,16,16,16)
D.M=new A.av(20,20,20,20)
D.Jd=new A.x(-1/0,-1/0,1/0,1/0)})()}
$__dart_deferred_initializers__["jZ0/6B0f1PFu+HmJL70T4MQMHEs="] = $__dart_deferred_initializers__.current
