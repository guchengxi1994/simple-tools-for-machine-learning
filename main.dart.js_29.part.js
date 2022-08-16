self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
avY(d){var x,w,v=new A.bj(new Float64Array(16))
v.dM()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.np(d[x-1],v)}return v},
a1e(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.a
w=e.a
if(x<w){x=y.m
g.push(x.a(A.R.prototype.gag.call(e,e)))
return B.a1e(d,x.a(A.R.prototype.gag.call(e,e)),f,g)}else if(x>w){x=y.m
f.push(x.a(A.R.prototype.gag.call(d,d)))
return B.a1e(x.a(A.R.prototype.gag.call(d,d)),e,f,g)}x=y.m
f.push(x.a(A.R.prototype.gag.call(d,d)))
g.push(x.a(A.R.prototype.gag.call(e,e)))
return B.a1e(x.a(A.R.prototype.gag.call(d,d)),x.a(A.R.prototype.gag.call(e,e)),f,g)},
ke:function ke(){var _=this
_.b=_.a=null
_.c=!1
_.d=null},
pt:function pt(d,e,f){var _=this
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
yp:function yp(d,e,f,g,h){var _=this
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
LE:function LE(d,e,f){var _=this
_.B=d
_.ad=null
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
LB:function LB(d,e,f,g,h,i,j){var _=this
_.B=d
_.ad=e
_.aD=f
_.aG=g
_.ce=h
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
a9c:function a9c(d){this.a=d},
xr(d,e,f,g,h,i){return new B.HE(f,h,i,e,g,d,null)},
hq(d,e){return new B.y9(e,D.hW,d,null)},
iW:function iW(d,e,f){this.e=d
this.c=e
this.a=f},
HE:function HE(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.c=i
_.a=j},
y9:function y9(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
jR(d,e){var x=new A.db(d,e,D.b0)
return new A.da(x,x,x,x)}},A,D,C,E
B=a.updateHolder(c[52],B)
A=c[0]
D=c[2]
C=c[66]
E=c[59]
B.ke.prototype={
j(d){var x=A.bQ(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.pt.prototype={
sk6(d){var x=this,w=x.id
if(w===d)return
if(x.b!=null){if(w.a===x)w.a=null
d.a=x}x.id=d},
sbN(d,e){if(e.k(0,this.k1))return
this.k1=e
this.dg()},
af(d){this.Th(d)
this.id.a=this},
a8(d){var x=this.id
if(x.a===this)x.a=null
this.Ti(0)},
f6(d,e,f,g){return this.jy(d,e.a7(0,this.k1),!0,g)},
fC(d){var x,w=this
if(!w.k1.k(0,D.j)){x=w.k1
w.sfk(d.xe(A.tV(x.a,x.b,0).a,y.y.a(w.w)))}w.hF(d)
if(!w.k1.k(0,D.j))d.bV(0)},
np(d,e){var x
if(!this.k1.k(0,D.j)){x=this.k1
e.aQ(0,x.a,x.b)}}}
B.yp.prototype={
Bn(d){var x,w,v,u,t=this
if(t.p2){x=t.Fk()
x.toString
t.p1=A.zu(x)
t.p2=!1}if(t.p1==null)return null
w=new A.jD(new Float64Array(4))
w.tD(d.a,d.b,0,1)
x=t.p1.aq(0,w).a
v=x[0]
u=t.k3
return new A.j(v-u.a,x[1]-u.b)},
f6(d,e,f,g){var x,w=this
if(w.id.a==null){if(w.k1)return w.jy(d,e.a7(0,w.k2),!0,g)
return!1}x=w.Bn(e)
if(x==null)return!1
return w.jy(d,x,!0,g)},
Fk(){var x,w
if(this.ok==null)return null
x=this.k4
w=A.tV(-x.a,-x.b,0)
x=this.ok
x.toString
w.cG(0,x)
return w},
ZO(){var x,w,v,u,t,s,r=this
r.ok=null
x=r.id.a
if(x==null)return
w=y.A
v=A.b([x],w)
u=A.b([r],w)
B.a1e(x,r,v,u)
t=B.avY(v)
x.np(null,t)
w=r.k3
t.aQ(0,w.a,w.b)
s=B.avY(u)
if(s.kL(s)===0)return
s.cG(0,t)
r.ok=s
r.p2=!0},
glP(){return!0},
fC(d){var x,w,v=this
if(v.id.a==null&&!v.k1){v.k4=v.ok=null
v.p2=!0
v.sfk(null)
return}v.ZO()
x=v.ok
w=y.y
if(x!=null){v.k4=v.k2
v.sfk(d.xe(x.a,w.a(v.w)))
v.hF(d)
d.bV(0)}else{v.k4=null
x=v.k2
v.sfk(d.xe(A.tV(x.a,x.b,0).a,w.a(v.w)))
v.hF(d)
d.bV(0)}v.p2=!0},
np(d,e){var x=this.ok
if(x!=null)e.cG(0,x)
else{x=this.k2
e.cG(0,A.tV(x.a,x.b,0))}}}
B.LE.prototype={
sk6(d){var x=this,w=x.B
if(w===d)return
w.d=null
x.B=d
w=x.ad
if(w!=null)d.d=w
x.ap()},
gaw(){return!0},
by(){var x,w=this
w.tN()
x=w.k1
x.toString
w.ad=x
w.B.d=x},
ah(d,e){var x=this.ay,w=x.a,v=this.B
if(w==null)x.sau(0,new B.pt(v,e,A.aq(y.e)))
else{y.t.a(w)
w.sk6(v)
w.sbN(0,e)}x=x.a
x.toString
d.oM(x,A.ea.prototype.geM.call(this),D.j)}}
B.LB.prototype={
sk6(d){if(this.B===d)return
this.B=d
this.ap()},
sSJ(d){if(this.ad===d)return
this.ad=d
this.ap()},
sbN(d,e){if(this.aD.k(0,e))return
this.aD=e
this.ap()},
sadh(d){if(this.aG.k(0,d))return
this.aG=d
this.ap()},
sabI(d){if(this.ce.k(0,d))return
this.ce=d
this.ap()},
a8(d){this.ay.sau(0,null)
this.mO(0)},
gaw(){return!0},
Ff(){var x=y.s.a(A.u.prototype.gau.call(this,this))
x=x==null?null:x.Fk()
if(x==null){x=new A.bj(new Float64Array(16))
x.dM()}return x},
bG(d,e){if(this.B.a==null&&!this.ad)return!1
return this.cp(d,e)},
cp(d,e){return d.vi(new B.a9c(this),e,this.Ff())},
ah(d,e){var x,w,v,u,t=this,s=t.B.d
if(s==null)x=t.aD
else{w=t.aG.BR(s)
v=t.ce
u=t.k1
u.toString
x=w.a7(0,v.BR(u)).a_(0,t.aD)}w=y.s
if(w.a(A.u.prototype.gau.call(t,t))==null)t.ay.sau(0,new B.yp(t.B,t.ad,e,x,A.aq(y.e)))
else{v=w.a(A.u.prototype.gau.call(t,t))
if(v!=null){v.id=t.B
v.k1=t.ad
v.k3=x
v.k2=e}}w=w.a(A.u.prototype.gau.call(t,t))
w.toString
d.ld(w,A.ea.prototype.geM.call(t),D.j,C.JF)},
d8(d,e){e.cG(0,this.Ff())}}
B.iW.prototype={
aC(d){var x=new B.LE(this.e,null,A.aq(y.d))
x.gao()
x.gaw()
x.CW=!0
x.sbc(null)
return x},
aH(d,e){e.sk6(this.e)}}
B.HE.prototype={
aC(d){var x=this,w=new B.LB(x.e,x.f,x.x,x.r,x.w,null,A.aq(y.d))
w.gao()
w.gaw()
w.CW=!0
w.sbc(null)
return w},
aH(d,e){var x=this
e.sk6(x.e)
e.sSJ(x.f)
e.sbN(0,x.x)
e.sadh(x.r)
e.sabI(x.w)}}
B.y9.prototype={}
var z=a.updateTypes([])
B.a9c.prototype={
$2(d,e){return this.a.tM(d,e)},
$S:9};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ke,A.C)
w(A.bC,[B.pt,B.yp])
w(A.jn,[B.LE,B.LB])
x(B.a9c,A.cL)
w(A.aT,[B.iW,B.HE])
x(B.y9,E.yh)})()
A.b1(b.typeUniverse,JSON.parse('{"pt":{"bC":[],"R":[]},"yp":{"bC":[],"R":[]},"LE":{"z":[],"aJ":["z"],"u":[],"R":[],"ak":[]},"LB":{"z":[],"aJ":["z"],"u":[],"R":[],"ak":[]},"iW":{"aT":[],"as":[],"f":[]},"HE":{"aT":[],"as":[],"f":[]},"y9":{"cG":["fw"],"aM":[],"f":[],"cG.T":"fw"}}'))
var y={d:A.r("bC"),A:A.r("k<bC>"),e:A.r("lx"),t:A.r("pt"),m:A.r("bC?"),s:A.r("yp?"),y:A.r("asF?")};(function constants(){C.mY=new A.dK(-1,0)
C.bu=new A.dK(-1,-1)
C.eZ=new A.h_(0,0,0.58,1)
C.CB=new A.ax(16,16,16,16)
C.L=new A.ax(20,20,20,20)
C.ej=new A.bk(1,1)
C.JF=new A.x(-1/0,-1/0,1/0,1/0)
C.Lf=new A.P(48,48)})()}
$__dart_deferred_initializers__["CE20kvoUKIR01vSNnj7nVzqhRlU="] = $__dart_deferred_initializers__.current
