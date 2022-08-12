self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
avH(d){var x,w,v=new A.bj(new Float64Array(16))
v.dK()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.np(d[x-1],v)}return v},
a18(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.a
w=e.a
if(x<w){x=y.m
g.push(x.a(A.Q.prototype.gag.call(e,e)))
return B.a18(d,x.a(A.Q.prototype.gag.call(e,e)),f,g)}else if(x>w){x=y.m
f.push(x.a(A.Q.prototype.gag.call(d,d)))
return B.a18(x.a(A.Q.prototype.gag.call(d,d)),e,f,g)}x=y.m
f.push(x.a(A.Q.prototype.gag.call(d,d)))
g.push(x.a(A.Q.prototype.gag.call(e,e)))
return B.a18(x.a(A.Q.prototype.gag.call(d,d)),x.a(A.Q.prototype.gag.call(e,e)),f,g)},
kb:function kb(){var _=this
_.b=_.a=null
_.c=!1
_.d=null},
pr:function pr(d,e,f){var _=this
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
yn:function yn(d,e,f,g,h){var _=this
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
LB:function LB(d,e,f){var _=this
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
Ly:function Ly(d,e,f,g,h,i,j){var _=this
_.B=d
_.ad=e
_.aD=f
_.aG=g
_.cd=h
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
a95:function a95(d){this.a=d},
xr(d,e,f,g,h,i){return new B.HB(f,h,i,e,g,d,null)},
ho(d,e){return new B.y8(e,D.hT,d,null)},
iW:function iW(d,e,f){this.e=d
this.c=e
this.a=f},
HB:function HB(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.c=i
_.a=j},
y8:function y8(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
jP(d,e){var x=new A.d9(d,e,D.b0)
return new A.d8(x,x,x,x)}},A,D,C,E
B=a.updateHolder(c[51],B)
A=c[0]
D=c[2]
C=c[65]
E=c[58]
B.kb.prototype={
j(d){var x=A.bN(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.pr.prototype={
sk6(d){var x=this,w=x.id
if(w===d)return
if(x.b!=null){if(w.a===x)w.a=null
d.a=x}x.id=d},
sbN(d,e){if(e.k(0,this.k1))return
this.k1=e
this.de()},
af(d){this.Th(d)
this.id.a=this},
a8(d){var x=this.id
if(x.a===this)x.a=null
this.Ti(0)},
f6(d,e,f,g){return this.jy(d,e.a7(0,this.k1),!0,g)},
fC(d){var x,w=this
if(!w.k1.k(0,D.j)){x=w.k1
w.sfk(d.xc(A.tU(x.a,x.b,0).a,y.y.a(w.w)))}w.hF(d)
if(!w.k1.k(0,D.j))d.bV(0)},
np(d,e){var x
if(!this.k1.k(0,D.j)){x=this.k1
e.aP(0,x.a,x.b)}}}
B.yn.prototype={
Bm(d){var x,w,v,u,t=this
if(t.p2){x=t.Fj()
x.toString
t.p1=A.zs(x)
t.p2=!1}if(t.p1==null)return null
w=new A.jC(new Float64Array(4))
w.tB(d.a,d.b,0,1)
x=t.p1.ap(0,w).a
v=x[0]
u=t.k3
return new A.j(v-u.a,x[1]-u.b)},
f6(d,e,f,g){var x,w=this
if(w.id.a==null){if(w.k1)return w.jy(d,e.a7(0,w.k2),!0,g)
return!1}x=w.Bm(e)
if(x==null)return!1
return w.jy(d,x,!0,g)},
Fj(){var x,w
if(this.ok==null)return null
x=this.k4
w=A.tU(-x.a,-x.b,0)
x=this.ok
x.toString
w.cE(0,x)
return w},
ZN(){var x,w,v,u,t,s,r=this
r.ok=null
x=r.id.a
if(x==null)return
w=y.A
v=A.b([x],w)
u=A.b([r],w)
B.a18(x,r,v,u)
t=B.avH(v)
x.np(null,t)
w=r.k3
t.aP(0,w.a,w.b)
s=B.avH(u)
if(s.kL(s)===0)return
s.cE(0,t)
r.ok=s
r.p2=!0},
glP(){return!0},
fC(d){var x,w,v=this
if(v.id.a==null&&!v.k1){v.k4=v.ok=null
v.p2=!0
v.sfk(null)
return}v.ZN()
x=v.ok
w=y.y
if(x!=null){v.k4=v.k2
v.sfk(d.xc(x.a,w.a(v.w)))
v.hF(d)
d.bV(0)}else{v.k4=null
x=v.k2
v.sfk(d.xc(A.tU(x.a,x.b,0).a,w.a(v.w)))
v.hF(d)
d.bV(0)}v.p2=!0},
np(d,e){var x=this.ok
if(x!=null)e.cE(0,x)
else{x=this.k2
e.cE(0,A.tU(x.a,x.b,0))}}}
B.LB.prototype={
sk6(d){var x=this,w=x.B
if(w===d)return
w.d=null
x.B=d
w=x.ad
if(w!=null)d.d=w
x.ao()},
gaw(){return!0},
by(){var x,w=this
w.tL()
x=w.k1
x.toString
w.ad=x
w.B.d=x},
ah(d,e){var x=this.ay,w=x.a,v=this.B
if(w==null)x.sar(0,new B.pr(v,e,A.ap(y.e)))
else{y.t.a(w)
w.sk6(v)
w.sbN(0,e)}x=x.a
x.toString
d.oL(x,A.e9.prototype.geM.call(this),D.j)}}
B.Ly.prototype={
sk6(d){if(this.B===d)return
this.B=d
this.ao()},
sSJ(d){if(this.ad===d)return
this.ad=d
this.ao()},
sbN(d,e){if(this.aD.k(0,e))return
this.aD=e
this.ao()},
sadh(d){if(this.aG.k(0,d))return
this.aG=d
this.ao()},
sabI(d){if(this.cd.k(0,d))return
this.cd=d
this.ao()},
a8(d){this.ay.sar(0,null)
this.mO(0)},
gaw(){return!0},
Fe(){var x=y.s.a(A.u.prototype.gar.call(this,this))
x=x==null?null:x.Fj()
if(x==null){x=new A.bj(new Float64Array(16))
x.dK()}return x},
bG(d,e){if(this.B.a==null&&!this.ad)return!1
return this.co(d,e)},
co(d,e){return d.vg(new B.a95(this),e,this.Fe())},
ah(d,e){var x,w,v,u,t=this,s=t.B.d
if(s==null)x=t.aD
else{w=t.aG.BQ(s)
v=t.cd
u=t.k1
u.toString
x=w.a7(0,v.BQ(u)).Z(0,t.aD)}w=y.s
if(w.a(A.u.prototype.gar.call(t,t))==null)t.ay.sar(0,new B.yn(t.B,t.ad,e,x,A.ap(y.e)))
else{v=w.a(A.u.prototype.gar.call(t,t))
if(v!=null){v.id=t.B
v.k1=t.ad
v.k3=x
v.k2=e}}w=w.a(A.u.prototype.gar.call(t,t))
w.toString
d.ld(w,A.e9.prototype.geM.call(t),D.j,C.JD)},
d6(d,e){e.cE(0,this.Fe())}}
B.iW.prototype={
aC(d){var x=new B.LB(this.e,null,A.ap(y.d))
x.gan()
x.gaw()
x.CW=!0
x.sbc(null)
return x},
aH(d,e){e.sk6(this.e)}}
B.HB.prototype={
aC(d){var x=this,w=new B.Ly(x.e,x.f,x.x,x.r,x.w,null,A.ap(y.d))
w.gan()
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
B.y8.prototype={}
var z=a.updateTypes([])
B.a95.prototype={
$2(d,e){return this.a.tK(d,e)},
$S:9};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.kb,A.C)
w(A.bC,[B.pr,B.yn])
w(A.jm,[B.LB,B.Ly])
x(B.a95,A.cK)
w(A.aS,[B.iW,B.HB])
x(B.y8,E.yf)})()
A.b4(b.typeUniverse,JSON.parse('{"pr":{"bC":[],"Q":[]},"yn":{"bC":[],"Q":[]},"LB":{"z":[],"aJ":["z"],"u":[],"Q":[],"aj":[]},"Ly":{"z":[],"aJ":["z"],"u":[],"Q":[],"aj":[]},"iW":{"aS":[],"aq":[],"f":[]},"HB":{"aS":[],"aq":[],"f":[]},"y8":{"cF":["fv"],"aL":[],"f":[],"cF.T":"fv"}}'))
var y={d:A.t("bC"),A:A.t("k<bC>"),e:A.t("lv"),t:A.t("pr"),m:A.t("bC?"),s:A.t("yn?"),y:A.t("aso?")};(function constants(){C.mX=new A.dI(-1,0)
C.bu=new A.dI(-1,-1)
C.eY=new A.fZ(0,0,0.58,1)
C.CB=new A.aw(16,16,16,16)
C.N=new A.aw(20,20,20,20)
C.ei=new A.bk(1,1)
C.JD=new A.x(-1/0,-1/0,1/0,1/0)
C.Ld=new A.P(48,48)})()}
$__dart_deferred_initializers__["43JfRrbQ5AaXC4Q7KFFMyXrxqwg="] = $__dart_deferred_initializers__.current
