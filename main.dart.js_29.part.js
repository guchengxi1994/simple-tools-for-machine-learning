self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
axf(d){var x,w,v=new A.bn(new Float64Array(16))
v.dQ()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.nz(d[x-1],v)}return v},
a1M(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.a
w=e.a
if(x<w){x=y.m
g.push(x.a(A.R.prototype.gai.call(e,e)))
return B.a1M(d,x.a(A.R.prototype.gai.call(e,e)),f,g)}else if(x>w){x=y.m
f.push(x.a(A.R.prototype.gai.call(d,d)))
return B.a1M(x.a(A.R.prototype.gai.call(d,d)),e,f,g)}x=y.m
f.push(x.a(A.R.prototype.gai.call(d,d)))
g.push(x.a(A.R.prototype.gai.call(e,e)))
return B.a1M(x.a(A.R.prototype.gai.call(d,d)),x.a(A.R.prototype.gai.call(e,e)),f,g)},
kn:function kn(){var _=this
_.b=_.a=null
_.c=!1
_.d=null},
pD:function pD(d,e,f){var _=this
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
yN:function yN(d,e,f,g,h){var _=this
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
M7:function M7(d,e,f){var _=this
_.B=d
_.ab=null
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
M4:function M4(d,e,f,g,h,i,j){var _=this
_.B=d
_.ab=e
_.aA=f
_.aB=g
_.c7=h
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
aa_:function aa_(d){this.a=d},
xR(d,e,f,g,h,i){return new B.I9(f,h,i,e,g,d,null)},
hu(d,e){return new B.yz(e,D.i3,d,null)},
j5:function j5(d,e,f){this.e=d
this.c=e
this.a=f},
I9:function I9(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.c=i
_.a=j},
yz:function yz(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
jZ(d,e){var x=new A.d1(d,e,D.aV)
return new A.d0(x,x,x,x)}},A,D,C,E
B=a.updateHolder(c[54],B)
A=c[0]
D=c[2]
C=c[66]
E=c[61]
B.kn.prototype={
j(d){var x=A.bT(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.pD.prototype={
ska(d){var x=this,w=x.id
if(w===d)return
if(x.b!=null){if(w.a===x)w.a=null
d.a=x}x.id=d},
sbO(d,e){if(e.k(0,this.k1))return
this.k1=e
this.di()},
ag(d){this.Tz(d)
this.id.a=this},
a9(d){var x=this.id
if(x.a===this)x.a=null
this.TA(0)},
f7(d,e,f,g){return this.jE(d,e.a8(0,this.k1),!0,g)},
fF(d){var x,w=this
if(!w.k1.k(0,D.j)){x=w.k1
w.sfk(d.xq(A.ua(x.a,x.b,0).a,y.y.a(w.w)))}w.hJ(d)
if(!w.k1.k(0,D.j))d.bX(0)},
nz(d,e){var x
if(!this.k1.k(0,D.j)){x=this.k1
e.aS(0,x.a,x.b)}}}
B.yN.prototype={
BE(d){var x,w,v,u,t=this
if(t.p2){x=t.Fz()
x.toString
t.p1=A.zR(x)
t.p2=!1}if(t.p1==null)return null
w=new A.jK(new Float64Array(4))
w.tK(d.a,d.b,0,1)
x=t.p1.ap(0,w).a
v=x[0]
u=t.k3
return new A.j(v-u.a,x[1]-u.b)},
f7(d,e,f,g){var x,w=this
if(w.id.a==null){if(w.k1)return w.jE(d,e.a8(0,w.k2),!0,g)
return!1}x=w.BE(e)
if(x==null)return!1
return w.jE(d,x,!0,g)},
Fz(){var x,w
if(this.ok==null)return null
x=this.k4
w=A.ua(-x.a,-x.b,0)
x=this.ok
x.toString
w.cH(0,x)
return w},
a_9(){var x,w,v,u,t,s,r=this
r.ok=null
x=r.id.a
if(x==null)return
w=y.A
v=A.b([x],w)
u=A.b([r],w)
B.a1M(x,r,v,u)
t=B.axf(v)
x.nz(null,t)
w=r.k3
t.aS(0,w.a,w.b)
s=B.axf(u)
if(s.kQ(s)===0)return
s.cH(0,t)
r.ok=s
r.p2=!0},
glS(){return!0},
fF(d){var x,w,v=this
if(v.id.a==null&&!v.k1){v.k4=v.ok=null
v.p2=!0
v.sfk(null)
return}v.a_9()
x=v.ok
w=y.y
if(x!=null){v.k4=v.k2
v.sfk(d.xq(x.a,w.a(v.w)))
v.hJ(d)
d.bX(0)}else{v.k4=null
x=v.k2
v.sfk(d.xq(A.ua(x.a,x.b,0).a,w.a(v.w)))
v.hJ(d)
d.bX(0)}v.p2=!0},
nz(d,e){var x=this.ok
if(x!=null)e.cH(0,x)
else{x=this.k2
e.cH(0,A.ua(x.a,x.b,0))}}}
B.M7.prototype={
ska(d){var x=this,w=x.B
if(w===d)return
w.d=null
x.B=d
w=x.ab
if(w!=null)d.d=w
x.aq()},
gaw(){return!0},
by(){var x,w=this
w.pB()
x=w.k1
x.toString
w.ab=x
w.B.d=x},
aj(d,e){var x=this.ay,w=x.a,v=this.B
if(w==null)x.sau(0,new B.pD(v,e,A.ap(y.e)))
else{y.t.a(w)
w.ska(v)
w.sbO(0,e)}x=x.a
x.toString
d.oV(x,A.ei.prototype.geO.call(this),D.j)}}
B.M4.prototype={
ska(d){if(this.B===d)return
this.B=d
this.aq()},
sT0(d){if(this.ab===d)return
this.ab=d
this.aq()},
sbO(d,e){if(this.aA.k(0,e))return
this.aA=e
this.aq()},
sadE(d){if(this.aB.k(0,d))return
this.aB=d
this.aq()},
sac5(d){if(this.c7.k(0,d))return
this.c7=d
this.aq()},
a9(d){this.ay.sau(0,null)
this.mX(0)},
gaw(){return!0},
Ft(){var x=y.s.a(A.u.prototype.gau.call(this,this))
x=x==null?null:x.Fz()
if(x==null){x=new A.bn(new Float64Array(16))
x.dQ()}return x},
bD(d,e){if(this.B.a==null&&!this.ab)return!1
return this.cm(d,e)},
cm(d,e){return d.vs(new B.aa_(this),e,this.Ft())},
aj(d,e){var x,w,v,u,t=this,s=t.B.d
if(s==null)x=t.aA
else{w=t.aB.C7(s)
v=t.c7
u=t.k1
u.toString
x=w.a8(0,v.C7(u)).a_(0,t.aA)}w=y.s
if(w.a(A.u.prototype.gau.call(t,t))==null)t.ay.sau(0,new B.yN(t.B,t.ab,e,x,A.ap(y.e)))
else{v=w.a(A.u.prototype.gau.call(t,t))
if(v!=null){v.id=t.B
v.k1=t.ab
v.k3=x
v.k2=e}}w=w.a(A.u.prototype.gau.call(t,t))
w.toString
d.lg(w,A.ei.prototype.geO.call(t),D.j,C.L0)},
dc(d,e){e.cH(0,this.Ft())}}
B.j5.prototype={
aC(d){var x=new B.M7(this.e,null,A.ap(y.d))
x.gam()
x.gaw()
x.CW=!0
x.sbb(null)
return x},
aG(d,e){e.ska(this.e)}}
B.I9.prototype={
aC(d){var x=this,w=new B.M4(x.e,x.f,x.x,x.r,x.w,null,A.ap(y.d))
w.gam()
w.gaw()
w.CW=!0
w.sbb(null)
return w},
aG(d,e){var x=this
e.ska(x.e)
e.sT0(x.f)
e.sbO(0,x.x)
e.sadE(x.r)
e.sac5(x.w)}}
B.yz.prototype={}
var z=a.updateTypes([])
B.aa_.prototype={
$2(d,e){return this.a.tT(d,e)},
$S:8};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.kn,A.C)
w(A.bz,[B.pD,B.yN])
w(A.iE,[B.M7,B.M4])
x(B.aa_,A.cG)
w(A.aR,[B.j5,B.I9])
x(B.yz,E.yH)})()
A.b0(b.typeUniverse,JSON.parse('{"pD":{"bz":[],"R":[]},"yN":{"bz":[],"R":[]},"M7":{"x":[],"aK":["x"],"u":[],"R":[],"aj":[]},"M4":{"x":[],"aK":["x"],"u":[],"R":[],"aj":[]},"j5":{"aR":[],"an":[],"d":[]},"I9":{"aR":[],"an":[],"d":[]},"yz":{"cJ":["fE"],"aM":[],"d":[],"cJ.T":"fE"}}'))
var y={d:A.q("bz"),A:A.q("k<bz>"),e:A.q("lE"),t:A.q("pD"),m:A.q("bz?"),s:A.q("yN?"),y:A.q("atR?")};(function constants(){C.eW=new A.dP(-1,0)
C.bC=new A.dP(-1,-1)
C.f9=new A.h5(0,0,0.58,1)
C.Dx=new A.av(16,16,16,16)
C.H=new A.av(20,20,20,20)
C.ex=new A.bo(1,1)
C.L0=new A.y(-1/0,-1/0,1/0,1/0)
C.MA=new A.O(48,48)})()}
$__dart_deferred_initializers__["3qb8Z5kO52zyeruZRQoPSZVR5Lk="] = $__dart_deferred_initializers__.current
