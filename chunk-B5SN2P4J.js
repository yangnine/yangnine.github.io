import{a as Ze,b as et,c as tt}from"./chunk-TX3VXY2B.js";import{a as j,b as L,c as qe}from"./chunk-EZWWEXUD.js";import{a as Je,b as Ke,c as ne,d as oe}from"./chunk-IBOAKVWX.js";import{b as $e,c as Xe,e as ie}from"./chunk-IZFRJ2M5.js";import{$ as Le,A as Ge,Ca as P,Da as We,Ea as ee,Fa as G,Ga as E,Ia as te,Q as je,Ra as Ye,Z as D,b as Ee,h as T,j as Fe,k as R,m as ve,na as N,o as Be,q as Ae,qa as M,r as Oe,ra as ze,sa as He,ta as Ue,u as ke,w as Ve,wa as Z,x as Te,xa as Qe,y as Re,z as Ne}from"./chunk-DOX25BFD.js";import{$ as J,$a as m,$b as Pe,Hb as o,Ib as n,Jb as l,Kb as De,Lb as Me,Nb as y,Qb as p,Sb as _,Vc as k,Wa as ge,Wb as W,Wc as V,Xb as Y,Yb as $,_ as xe,ab as d,ac as s,bc as x,cc as I,da as fe,ja as u,ka as K,q,qc as Ce,sa as f,ta as g,ub as b,wb as c}from"./chunk-MAFWFZH6.js";import{h as S}from"./chunk-WWX6BADO.js";var F=class r{constructor(i,e){this.HttpClient=i;this.MatSnackBar=e;this.Http=new Xe(i,e)}Http;Product={Get:()=>this.Http.get("buy/product"),Post:(i,e)=>{let t=new FormData;console.log(i),t.append("product",JSON.stringify(i));for(let a=0;a<e.length;++a)t.append("image"+a,e[a]);return this.Http.post("buy/product",t)},Delete:i=>this.Http.delete("buy/product/"+i.id)};Test(){return this.Http.get("token")}static \u0275fac=function(e){return new(e||r)(fe(Ee),fe(Je))};static \u0275prov=xe({token:r,factory:r.\u0275fac,providedIn:"root"})},C=class{constructor(i=0,e="",t=0,a=0,v=0,h="",Et="",Ft,Bt){this.id=i;this.content=e;this.price=t;this.star=a;this.count=v;this.create=h;this.update=Et;this.images=Ft;this.tags=Bt}Get(){}};var B=class{constructor(i,e=null,t){this.ID=i;this.Data=e;this.ComponentID=t}},z=class{constructor(i=0,e){this.ID=i;this.Component=e}};var nt=".Image[_ngcontent-%COMP%]{margin:8px 4px;overflow:hidden;height:100%}.Image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}",H=class r{constructor(i){this.ActivatedRoute=i;this.GetData(this.ActivatedRoute.snapshot.params.ID)}CanEditor=!1;Images=[];ImageItems=[];ImagesViews=[];ShowSrc="";GetData(i){return S(this,null,function*(){let e=["assets/test/cozastore-master/images/product-01.jpg","assets/test/cozastore-master/images/product-02.jpg","assets/test/cozastore-master/images/product-03.jpg","assets/test/cozastore-master/images/product-04.jpg","assets/test/cozastore-master/images/product-05.jpg","assets/test/cozastore-master/images/product-06.jpg","assets/test/cozastore-master/images/product-07.jpg","assets/test/cozastore-master/images/product-08.jpg"];this.CanEditor&&e.push("add-camera.png");let t=[];for(let a=0;a<e.length;a++)t.push(new he(a,e[a]));this.Images=t,this.ImagesViews=[new z(0,Se)],this.ImageItems=this.Images.map(a=>new B(a.ID,a,this.ImagesViews[0].ID)),this.ShowSrc=this.Images[0].Data})}ReadImage(i){return S(this,null,function*(){return new Promise((e,t)=>{let a=new FileReader;a.onerror=t,a.onloadend=()=>{e(a.result)},a.readAsDataURL(i)})})}ImagesClick(i){i.Data.Data!="assets/add-camera.png"&&(console.log(i.Data.Data),this.ShowSrc=i.Data.Data)}static \u0275fac=function(e){return new(e||r)(d(T))};static \u0275cmp=u({type:r,selectors:[["buy-photo"]],decls:4,vars:5,consts:[[1,"Flex-C",2,"height","calc(100% - 108px - 16px)","overflow","hidden"],[2,"width","100%",3,"src"],[3,"Click","Width","Height","Views","Items"]],template:function(e,t){e&1&&(o(0,"div",0),l(1,"img",1),n(),l(2,"mat-divider"),o(3,"tool-recycle-list",2),p("Click",function(v){return t.ImagesClick(v)}),n()),e&2&&(m(),c("src",t.ShowSrc,ge),m(2),c("Width",108)("Height",108)("Views",t.ImagesViews)("Items",t.ImageItems))},dependencies:[te,P],styles:[nt]})},he=class{constructor(i=0,e=""){this.ID=i;this.Data=e}},Se=class r{Data;constructor(){}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["ng-component"]],inputs:{Data:"Data"},decls:3,vars:1,consts:[[1,"Image","Card","Flex",2,"flex-flow","column nowrap","justify-content","center"],[3,"src"]],template:function(e,t){e&1&&(o(0,"div",0),l(1,"img",1)(2,"div"),n()),e&2&&(m(),c("src",t.Data==null?null:t.Data.Data,ge))},styles:[nt]})};function lt(r,i){if(r&1&&(o(0,"mat-button-toggle",26),s(1),n()),r&2){let e=i.$implicit;m(),x(e)}}function ct(r,i){if(r&1){let e=y();o(0,"div",1)(1,"h1"),s(2),n(),l(3,"br"),o(4,"span",2),s(5),n(),l(6,"br"),s(7," Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat. "),l(8,"br")(9,"br")(10,"br"),o(11,"div")(12,"mat-button-toggle-group",3),b(13,lt,2,1,"mat-button-toggle",4),n()(),l(14,"br"),o(15,"div",5)(16,"div",6),s(17," Size "),n(),o(18,"div",7)(19,"div",8)(20,"select",9)(21,"option"),s(22,"Choose an option"),n(),o(23,"option"),s(24,"Size S"),n(),o(25,"option"),s(26,"Size M"),n(),o(27,"option"),s(28,"Size L"),n(),o(29,"option"),s(30,"Size XL"),n()(),o(31,"span",10)(32,"span",11)(33,"span",12)(34,"span",13),s(35,"Choose an option"),n(),o(36,"span",14),l(37,"b",15),n()()(),l(38,"span",16),n(),l(39,"div",17),n()()(),l(40,"br")(41,"br")(42,"br"),o(43,"div",18)(44,"button",19),p("click",function(){f(e);let a=_();return g(a.Add(-1))}),s(45,"-"),n(),l(46,"input",20),o(47,"button",19),p("click",function(){f(e);let a=_();return g(a.Add(1))}),s(48,"+"),n(),o(49,"div"),s(50),n()(),l(51,"div",21),o(52,"div",22)(53,"button",23),s(54,"\u8CFC\u7269\u8ECA"),n(),o(55,"button",24),s(56,"\u76F4\u63A5\u8CFC\u8CB7"),n()(),o(57,"div")(58,"div",25),s(59),n(),o(60,"div",25),s(61),n(),l(62,"mat-divider"),o(63,"div",25),s(64,"\u5206\u4EAB:"),n(),o(65,"div",25),s(66,"\u559C\u6B61"),n()()()}if(r&2){let e=_();c("formGroup",e.FormInfo),m(2),x(e.Product.content),m(3),I("\uFF04",e.Product.price,""),m(8),c("ngForOf",e.Detail.Types),m(31),c("disabled",e.FormInfo.value.Count=="0"),m(3),c("disabled",e.FormInfo.value.Count>="Product.count"),m(3),I("Max : ",e.Product.count,""),m(9),I("\u4E0A\u67B6 : ",e.Product.create,""),m(2),I("\u66F4\u65B0 : ",e.Product.update,"")}}var U=class r{constructor(i,e){this.ActivatedRoute=i;this.FormBuilder=e;this.FormInfo=this.FormBuilder.group({Name:"",Price:"",Spec:"",Count:0,OffTheShelf:"",Sales:"",Create:"",Update:"",Pay:"",Carriage:"",PersionShop:""}),this.FormInfo.controls.Count.valueChanges.subscribe(t=>{t=t<0?0:t>this.Product.count?this.Product.count:t,this.FormInfo.controls.Count.setValue(t,{emitEvent:!1})}),this.GetData(this.ActivatedRoute.snapshot.params.ID)}FormInfo;Product;Detail=new re;GetData(i){return S(this,null,function*(){let e=new C(1,"Esprit Ruffle Shirt",16.64,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-01.jpg"]),t=new re(i,["Red","Blue","Write","Gray"],[0,1,2,3]);this.Product=e,this.Detail=t})}Add(i){this.FormInfo.controls.Count.setValue(this.FormInfo.value.Count+i)}static \u0275fac=function(e){return new(e||r)(d(T),d(Ge))};static \u0275cmp=u({type:r,selectors:[["buy-order"]],decls:1,vars:1,consts:[["class","Flex-C-SS","style","flex-wrap: nowrap; height: 700px",3,"formGroup",4,"ngIf"],[1,"Flex-C-SS",2,"flex-wrap","nowrap","height","700px",3,"formGroup"],[1,"Blod","F-18",2,"color","Black"],["name","fontStyle","aria-label","Font Style"],["value","bold",4,"ngFor","ngForOf"],[1,"flex-w","flex-r-m","p-b-10"],[1,"size-203","flex-c-m","respon6"],[1,"size-204","respon6-next"],[1,"rs1-select2","bor8","bg0"],["name","time","tabindex","-1","aria-hidden","true",1,"js-select2","select2-hidden-accessible"],["dir","ltr",1,"select2","select2-container","select2-container--default",2,"width","140px"],[1,"selection"],["role","combobox","aria-haspopup","true","aria-expanded","false","tabindex","0","aria-labelledby","select2-time-mh-container",1,"select2-selection","select2-selection--single"],["id","select2-time-mh-container","title","Choose an option",1,"select2-selection__rendered"],["role","presentation",1,"select2-selection__arrow"],["role","presentation"],["aria-hidden","true",1,"dropdown-wrapper"],[1,"dropDownSelect2"],[1,"Flex","ProductCount"],["mat-stroked-button","",3,"click","disabled"],["formControlName","Count","type","number","value","1"],[1,"Spacer"],[1,"Flex-R-AB"],["mat-raised-button","","color","accent"],["mat-raised-button","","color","warn"],[2,"width","50%","display","inline-block"],["value","bold"]],template:function(e,t){e&1&&b(0,ct,67,9,"div",0),e&2&&c("ngIf",t.FormInfo)},dependencies:[k,V,Re,Ne,Be,ke,Ae,Oe,Ve,Te,D,je,Ze,et,P],styles:[".ProductCount[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:36px;padding:0;font-size:24px}.ProductCount[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#ffffff0d}.ProductCount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:24px;width:50px;text-align:center;border:none;background:transparent}.ProductCount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.ProductCount[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{line-height:36px;padding-left:16px}[_nghost-%COMP%]  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:36px}"]})},re=class{constructor(i=0,e=[],t=[]){this.ID=i;this.Types=e;this.Images=t}};var dt=["File"],ft=["template"];function gt(r,i){if(r&1){let e=y();De(0),o(1,"span",6),s(2),n(),o(3,"span",15),p("click",function(){f(e);let a=_();return g(a.StatusService.LogOut())}),s(4,"Logout"),n(),Me()}if(r&2){let e=_();m(2),I("Account: ",e.StatusService.User.username,"")}}function Ct(r,i){if(r&1){let e=y();o(0,"span",15),p("click",function(){f(e);let a=_();return g(a.Login())}),s(1,"Login"),n()}}function vt(r,i){r&1&&(o(0,"div",16),l(1,"buy-photo",17)(2,"buy-order",17),n())}var se=class r{constructor(i,e,t){this.Dialog=i;this.BuyService=e;this.StatusService=t}File;template;Items=[];NewItems=[];Prodicts=[];ngOnInit(){this.Initialize()}GetFileList=()=>this.File.nativeElement.files||new FileList;Login(){this.Dialog.open(Z,{panelClass:"Glass",disableClose:!0}).afterClosed().subscribe(e=>{e&&this.StatusService.PostAuth(new oe(e.mail,e.password)).subscribe(t=>{t&&(this.StatusService.User=t)})})}Test(){this.BuyService.Test().subscribe(i=>{console.log(i)})}Color(){let i=this.Dialog.open(Ue,{panelClass:"Glass",width:"100%",height:"90vh",data:{template:this.template}})}Initialize(){return S(this,null,function*(){let i=yield this.GetData(),e=[];for(let t of i){let a=[];a.push(new E(2,t.content)),a.push(new E(.5,`\uFF04${t.price}`,"font:16px; color:goldenrod")),a.push(new E(.5,`${t.count}`,"font:16px; color:darkcyan; text-align: right;")),e.push(new G(t.id,t.star,t.images[0],a))}this.Items=e,this.Prodicts=i})}GetData(){return S(this,null,function*(){let i=(yield q(this.BuyService.Product.Get()))||[];return console.log(i),[new C(1,"Esprit Ruffle Shirt",16.64,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-01.jpg"]),new C(2,"Herschel supply",35.31,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-02.jpg"]),new C(3,"Only Check Trouser",25.05,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-03.jpg"]),new C(4,"Classic Trench Coat",25.05,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-04.jpg"]),new C(5,"Front Pocket Jumper",25.05,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-05.jpg"]),new C(6,"Vintage Inspired Classic",25.05,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-06.jpg"]),new C(7,"Shirt in Stretch Cotton",25.05,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-07.jpg"]),new C(8,"Pieces Metallic Printed",25.05,5,100,"2028-02-21","2028-02-21",["assets/test/cozastore-master/images/product-08.jpg"])]})}ItemClick(i){this.Color()}static \u0275fac=function(e){return new(e||r)(d(N),d(F),d(ne))};static \u0275cmp=u({type:r,selectors:[["app-buy"]],viewQuery:function(e,t){if(e&1&&(W(dt,5),W(ft,5)),e&2){let a;Y(a=$())&&(t.File=a.first),Y(a=$())&&(t.template=a.first)}},decls:30,vars:4,consts:[["default",""],["template",""],[1,"Buy"],[1,"Menu","F-8","Bk-BlackBlue",2,"height","32px"],[1,"Flex","Container",2,"justify-content","space-between","align-items","center","height","100%"],[1,"Spacer"],[1,"Flex-C","Broder-R"],[4,"ngIf","ngIfElse"],[1,"Container",2,"height","90vh","overflow-y","scroll"],[3,"Click","Items"],[1,"Bk-BlackBlue",2,"position","fixed","bottom","0"],[1,"Container"],["mat-button","","routerLink",".."],[1,"Flex",2,"background","white","padding","4px","position","relative"],["mat-button","",1,"Bk-BlackBlue",2,"border-radius","0","position","absolute","right","2px",3,"click"],[1,"Flex-C","Broder-R",3,"click"],[1,"Flex-R-AS"],[2,"width","500px"]],template:function(e,t){if(e&1){let a=y();o(0,"div",2)(1,"div",3)(2,"div",4),s(3," Free shipping for standard order over $100 "),l(4,"span",5),o(5,"span",6),s(6,"Help & FAQs"),n(),o(7,"span",6),s(8,"EN"),n(),o(9,"span",6),s(10,"USD"),n(),b(11,gt,5,1,"ng-container",7)(12,Ct,2,0,"ng-template",null,0,Ce),n()(),o(14,"div",8)(15,"tool-grid-list",9),p("Click",function(h){return f(a),g(t.ItemClick(h))}),n(),o(16,"tool-grid-list",9),p("Click",function(h){return f(a),g(t.ItemClick(h))}),n()(),o(17,"mat-toolbar",10)(18,"mat-toolbar-row",11)(19,"button",12)(20,"mat-icon"),s(21,"west"),n()(),l(22,"span",5),o(23,"div",13),l(24,"input"),o(25,"button",14),p("click",function(){return f(a),g(t.Test())}),o(26,"mat-icon"),s(27,"search"),n()()()()()(),b(28,vt,3,0,"ng-template",null,1,Ce)}if(e&2){let a=Pe(13);m(11),c("ngIf",t.StatusService.Logined())("ngIfElse",a),m(4),c("Items",t.Items),m(),c("Items",t.NewItems)}},dependencies:[V,ee,R,D,M,L,j,H,U],styles:[".Buy[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:30px;font-size:larger;border:none}.Buy[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible{outline:transparent}.Buy[_ngcontent-%COMP%]   .Menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:100%;padding:0 8px;transition:color .4s}.Buy[_ngcontent-%COMP%]   .Menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{cursor:pointer;color:#1e90ff}.Buy[_ngcontent-%COMP%]   .Menu[_ngcontent-%COMP%]   .Broder-L[_ngcontent-%COMP%]{border-left:1px solid gray}.Buy[_ngcontent-%COMP%]   .Menu[_ngcontent-%COMP%]   .Broder-R[_ngcontent-%COMP%]{border-right:1px solid gray}"]})};function ht(r,i){if(r&1&&(o(0,"div",2)(1,"div",3)(2,"div")(3,"div",4)(4,"div"),s(5),n(),o(6,"div"),s(7),n()()(),l(8,"mat-divider"),o(9,"div")(10,"div",4)(11,"div",5),s(12),n(),o(13,"div",6)(14,"button")(15,"mat-icon",7),s(16,"thumb_up "),n()(),o(17,"button")(18,"mat-icon",7),s(19,"thumb_down"),n()()()()()()()),r&2){let e=i.$implicit;m(5),x(e.name),m(2),x(e.IP),m(5),I(" ",e.content," ")}}var me=class r{constructor(i){this.ActivatedRoute=i;this.GetData(this.ActivatedRoute.snapshot.params.ID)}Messages=[];MsgItems=[];MsgViews=[];GetData(i){return S(this,null,function*(){let e=[new O("Yonatan","\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9\u4E94\u661F\u8A55\u50F9",5,"192.168.1.1"),new O("Yonatan","\u8A55\u50F9",5,"192.168.1.1"),new O("Yonatan","\u4E94\u661F",5,"192.168.1.1"),new O("Yonatan","\u4E94\u661F\u8A55\u50F9",5,"192.168.1.1"),new O("Yonatan","\u8A55\u50F9",5,"192.168.1.1")];this.Messages=e,this.MsgViews=[new z(0,ye)],this.MsgItems=[new B(0,e,this.MsgViews[0].ID),new B(1,e,this.MsgViews[0].ID),new B(2,e,this.MsgViews[0].ID)]})}static \u0275fac=function(e){return new(e||r)(d(T))};static \u0275cmp=u({type:r,selectors:[["buy-message"]],decls:4,vars:4,consts:[[2,"padding","8px"],[3,"Width","Height","Items","Views"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"h1"),s(2,"\u5546\u54C1\u8A55\u50F9"),n(),l(3,"tool-recycle-list",1),n()),e&2&&(m(3),c("Width",480)("Height",500)("Items",t.MsgItems)("Views",t.MsgViews))},dependencies:[te]})},O=class{constructor(i="",e="",t=5,a=""){this.name=i;this.content=e;this.rank=t;this.IP=a}},ye=class r{Data;constructor(){}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["ng-component"]],inputs:{Data:"Data"},decls:2,vars:1,consts:[[2,"margin","8px 16px"],["style","margin-bottom: 16px",4,"ngFor","ngForOf"],[2,"margin-bottom","16px"],[1,"Flex",2,"width","100%","justify-content","space-between","flex-direction","column"],[1,"Flex",2,"justify-content","space-between"],[2,"width","calc(100% - 72px)","overflow-wrap","break-word"],[2,"width","72px"],[2,"font-size","18px"]],template:function(e,t){e&1&&(o(0,"div",0),b(1,ht,20,3,"div",1),n()),e&2&&(m(),c("ngForOf",t.Data))},dependencies:[k,P,M],styles:["button[_ngcontent-%COMP%]{position:relative;font-size:16px;background:#ffffff1a;padding:4px;margin:1px;border-radius:5px;border:none;box-shadow:2px 2px 2px #00000080;border-top:1px solid rgba(255,255,255,.5);border-left:1px solid rgba(255,255,255,.5);overflow:hidden}"]})};var le=class r{constructor(i,e){this.StorageService=i;this.Dialog=e;this.Spec=this.StorageService.GetLocal("spec")||""}Spec="";ngOnInit(){}ProductInit(){let i=`
    \u54C1\u724C
    ASUS \u83EF\u78A9
    NCC
    CCAH17LP0290T1
    \u7B46\u96FB\u985E\u578B
    \u96FB\u7AF6
    \u7B46\u96FB\u87A2\u5E55\u5C3A\u5BF8
    13\u540B
    \u5546\u54C1\u6578\u91CF
    3
    \u51FA\u8CA8\u5730
    \u81FA\u5317\u5E02\u4E2D\u6B63\u5340
    \u5546\u54C1\u8A73\u60C5
    \u5546\u54C1\u7279\u8272\uFF1A\u5168\u7403\u9996\u527513" \u7FFB\u8F49\u89F8\u63A7\u96FB\u7AF6\u7B46\u96FB / \u652F\u63F44K (3840 x 2400)\u9AD8\u89E3\u6790\u5EA6 / 116% SRGB / Pantone\xAE\u5C08\u696D\u8272\u5F69\u8A8D\u8B49 / \u652F\u63F4ADAPTIVE-SYNC \u756B\u9762\u9632\u6495\u88C2\u6280\u8853 / \u652F\u63F4XG \u5916\u63A5\u986F\u5361 / AMD 7nm R9-5900H / CPU \u6DB2\u614B\u91D1\u5C6C\u512A\u5316\u6563\u71B1 \u964D\u4F4E10\u5EA6 / \u652F\u63F4PD3.0\u5145\u96FB\u5FEB\u5145\u6280\u8853/ \u5168\u8986\u84CB\u5F0F\u7684 15 \u540B\u9375\u76E4
    \u578B\u865F\uFF1AGV301QH-0072A5900H
    \u6280\u8853\u898F\u683C\uFF1A\u25C6 \u87A2\u5E55\uFF1A13.4'/WQUXGA (3840 x 2400) 16:10/Touch Screen/IPS-level/300nits/82% NTSC/116% SRGB/85% DCI-P3/glossy display/Adaptive-Sync/Pantone\xAE\u5C08\u696D\u8272\u5F69\u8A8D\u8B49
    \u25C6 \u8655\u7406\u5668\uFF1AAMD Ryzen\u2122 9 5900HS Processor 3.1 GHz (16M Cache, up to 4.5 GHz)
    \u25C6 \u8A18\u61B6\u9AD4\uFF1A16GB LPDDR4X  on board/\u7E3D\u51710\u500B\u63D2\u69FD\uFF0C\u5DF2\u7D93\u4F7F\u75280\u500B\uFF0C\u6700\u5927\u652F\u63F416G
    \u25C6 \u8A18\u61B6\u9AD4\u652F\u63F4\u5BB9\u91CF(\u7E3D\u63D2\u69FD\u6578\u91CF/\u7E3D\u5BB9\u91CF)\uFF1A(0/16)
    \u25C6 \u786C\u789F\uFF1A1TB M.2 2230 NVMe\u2122 PCIe\xAE 3.0 SSD
    \u25C6 \u786C\u789F\u652F\u63F4\u64F4\u5145\uFF1A\u4E0D\u53EF
    \u25C6 \u986F\u793A\u5361\uFF1ANVIDIA\xAE GeForce\xAE GTX 1650 4GB GDDR6
    \u25C6 \u4ECB\u9762 (I/O\u9023\u63A5\u57E0)\uFF1A
    1x ROG XG Mobile Interface
    1x USB 3.2 Gen 2 Type-A
    2x Type C USB 3.2 Gen 2 with Power Delivery and Display Port
    1x 3.5mm Combo Audio Jack
    1x HDMI 2.0b
    Built-in array microphone
    2x 1W speaker with Smart Amp Technology
    Smart Amp Technology
    DAC
    Dolby Atmos Software
    AI mic noise-canceling
    
    \u25C6 \u7DB2\u8DEF\uFF1AWi-Fi 6(802.11ax)+Bluetooth 5.1 (Dual band) 2*2
    \u25C6 \u96FB\u6C60\u53CA\u96FB\u6E90\uFF1A62WHrs, 4S1P, 4-cell Li-ion
    \u25C6 \u91CD\u91CF\uFF1A1.3 kg
    \u25C6 \u5C3A\u5BF8\uFF1A29.9 x 22.2 x 1.58 ~ 1.58 cm
    \u25C6 \u5149\u789F\u6A5F\uFF1A\u7121
    \u25C6 \u651D\u5F71\u6A5F\uFF1A720P HD camera webcam
    \u25C6 \u6307\u7D0B\u8FA8\u8B58\uFF1A\u7121
    \u25C6 \u4F5C\u696D\u7CFB\u7D71\uFF1AWindows10 64 Bits
    \u25C6 \u4FDD\u56FA\uFF1A\u4E8C\u5E74\u570B\u969B\u4FDD\u56FA / \u9996\u5E74\u5B8C\u7F8E\u4FDD\u56FA / LCD\u7121\u4EAE\u9EDE\u4FDD\u56FA / \u96FB\u6C60\u4FDD\u56FA\u4E00\u5E74
    \u7522\u5730
    (\u570B\u5BB6)\uFF1A\u4E2D\u570B
    \u914D\u4EF6\uFF1A\u5305\u5305\u53CA\u6ED1\u9F20
    NCC\uFF1ACCAH17LP0290T1
    \u4FDD\u56FA\u671F
    (\u6708)\uFF1A24
    \u6CE8\u610F\u4E8B\u9805\uFF1A\u9000\u63DB\u8CA8\u9808\u77E5\uFF1A \u5546\u54C1\u5230\u8CA8\u9694\u65E5\u4EAB\u8766\u76AE15\u5929\u9451\u8CDE(\u7336\u8C6B)\u671F\u4E4B\u6B0A\u76CA\u3010\u9451\u8CDE(\u7336\u8C6B)\u671F\u975E\u8A66\u7528\u671F\u3011\uFF0C\u8FA6\u7406\u9000\u8CA8\u5546\u54C1\u5FC5\u9808\u662F\u5B8C\u597D\u72C0\u614B\u4E14\u9700\u4EE5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u6240\u4F7F\u7528\u7684\u5916\u5305\u88DD(\u7D19\u7BB1\u6216\u5305\u88DD\u888B)\uFF0C\u59A5\u5584\u5305\u88DD\u5F8C\u4EA4\u4ED8\u7D66\u524D\u5F80\u53D6\u4EF6\u7684\u7269\u6D41\u516C\u53F8\uFF1B\u82E5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u7684\u5916\u5305\u88DD\u5DF2\u7D93\u907A\u5931\uFF0C\u8ACB\u60A8\u5728\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u5916\uFF0C\u518D\u4EE5\u5176\u4ED6\u9069\u7576\u7684\u5916\u76D2\u9032\u884C\u5305\u88DD\uFF0C\u8ACB\u52FF\u65BC\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u4E0A\u76F4\u63A5\u9ECF\u8CBC\u4EFB\u4F55\u55AE\u64DA\u6216\u66F8\u5BEB\u6587\u5B57\uFF0C\u5426\u5247\u5C07\u6703\u5F71\u97FF\u9000\u8CA8\u6B0A\u9650\uFF0C\u6B64\u5916\u4E5F\u53EF\u80FD\u4F9D\u7167\u640D\u6BC0\u7A0B\u5EA6\u6263\u9664\u70BA\u56DE\u5FA9\u539F\u72C0\u6240\u5FC5\u8981\u7684\u8CBB\u7528\u3002 \u25CF3C\u76F8\u95DC\u5546\u54C1\uFF0C\u70BA\u4E00\u6B21\u6027\u5305\u88DD\u5546\u54C1\uFF0C\u8ACB\u52D9\u5FC5\u78BA\u8A8D\u6709\u8CFC\u8CB7\u9700\u6C42\u5F8C\u518D\u62C6\u5C01\u3002 \u25CF\u7DB2\u9801\u5546\u54C1\u6703\u56E0\u70BA\u4F7F\u7528\u4E0D\u540C\u7684\u54C1\u724C\u87A2\u5E55\u4EE5\u53CA\u89E3\u6790\u5EA6\u4E0D\u540C\uFF0C\u9020\u6210\u5716\u7247\u984F\u8272\u5448\u73FE\u7565\u6709\u4E0D\u540C\uFF0C\u8ACB\u4EE5\u5BE6\u54C1\u984F\u8272\u70BA\u6E96\u3002
    \u6CE8\u610F\u4E8B\u9805\uFF1A\u9000\u63DB\u8CA8\u9808\u77E5\uFF1A \u5546\u54C1\u5230\u8CA8\u9694\u65E5\u4EAB\u8766\u76AE15\u5929\u9451\u8CDE(\u7336\u8C6B)\u671F\u4E4B\u6B0A\u76CA\u3010\u9451\u8CDE(\u7336\u8C6B)\u671F\u975E\u8A66\u7528\u671F\u3011\uFF0C\u8FA6\u7406\u9000\u8CA8\u5546\u54C1\u5FC5\u9808\u662F\u5B8C\u597D\u72C0\u614B\u4E14\u9700\u4EE5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u6240\u4F7F\u7528\u7684\u5916\u5305\u88DD(\u7D19\u7BB1\u6216\u5305\u88DD\u888B)\uFF0C\u59A5\u5584\u5305\u88DD\u5F8C\u4EA4\u4ED8\u7D66\u524D\u5F80\u53D6\u4EF6\u7684\u7269\u6D41\u516C\u53F8\uFF1B\u82E5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u7684\u5916\u5305\u88DD\u5DF2\u7D93\u907A\u5931\uFF0C\u8ACB\u60A8\u5728\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u5916\uFF0C\u518D\u4EE5\u5176\u4ED6\u9069\u7576\u7684\u5916\u76D2\u9032\u884C\u5305\u88DD\uFF0C\u8ACB\u52FF\u65BC\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u4E0A\u76F4\u63A5\u9ECF\u8CBC\u4EFB\u4F55\u55AE\u64DA\u6216\u66F8\u5BEB\u6587\u5B57\uFF0C\u5426\u5247\u5C07\u6703\u5F71\u97FF\u9000\u8CA8\u6B0A\u9650\uFF0C\u6B64\u5916\u4E5F\u53EF\u80FD\u4F9D\u7167\u640D\u6BC0\u7A0B\u5EA6\u6263\u9664\u70BA\u56DE\u5FA9\u539F\u72C0\u6240\u5FC5\u8981\u7684\u8CBB\u7528\u3002 \u25CF3C\u76F8\u95DC\u5546\u54C1\uFF0C\u70BA\u4E00\u6B21\u6027\u5305\u88DD\u5546\u54C1\uFF0C\u8ACB\u52D9\u5FC5\u78BA\u8A8D\u6709\u8CFC\u8CB7\u9700\u6C42\u5F8C\u518D\u62C6\u5C01\u3002 \u25CF\u7DB2\u9801\u5546\u54C1\u6703\u56E0\u70BA\u4F7F\u7528\u4E0D\u540C\u7684\u54C1\u724C\u87A2\u5E55\u4EE5\u53CA\u89E3\u6790\u5EA6\u4E0D\u540C\uFF0C\u9020\u6210\u5716\u7247\u984F\u8272\u5448\u73FE\u7565\u6709\u4E0D\u540C\uFF0C\u8ACB\u4EE5\u5BE6\u54C1\u984F\u8272\u70BA\u6E96\u3002
    \u6CE8\u610F\u4E8B\u9805\uFF1A\u9000\u63DB\u8CA8\u9808\u77E5\uFF1A \u5546\u54C1\u5230\u8CA8\u9694\u65E5\u4EAB\u8766\u76AE15\u5929\u9451\u8CDE(\u7336\u8C6B)\u671F\u4E4B\u6B0A\u76CA\u3010\u9451\u8CDE(\u7336\u8C6B)\u671F\u975E\u8A66\u7528\u671F\u3011\uFF0C\u8FA6\u7406\u9000\u8CA8\u5546\u54C1\u5FC5\u9808\u662F\u5B8C\u597D\u72C0\u614B\u4E14\u9700\u4EE5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u6240\u4F7F\u7528\u7684\u5916\u5305\u88DD(\u7D19\u7BB1\u6216\u5305\u88DD\u888B)\uFF0C\u59A5\u5584\u5305\u88DD\u5F8C\u4EA4\u4ED8\u7D66\u524D\u5F80\u53D6\u4EF6\u7684\u7269\u6D41\u516C\u53F8\uFF1B\u82E5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u7684\u5916\u5305\u88DD\u5DF2\u7D93\u907A\u5931\uFF0C\u8ACB\u60A8\u5728\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u5916\uFF0C\u518D\u4EE5\u5176\u4ED6\u9069\u7576\u7684\u5916\u76D2\u9032\u884C\u5305\u88DD\uFF0C\u8ACB\u52FF\u65BC\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u4E0A\u76F4\u63A5\u9ECF\u8CBC\u4EFB\u4F55\u55AE\u64DA\u6216\u66F8\u5BEB\u6587\u5B57\uFF0C\u5426\u5247\u5C07\u6703\u5F71\u97FF\u9000\u8CA8\u6B0A\u9650\uFF0C\u6B64\u5916\u4E5F\u53EF\u80FD\u4F9D\u7167\u640D\u6BC0\u7A0B\u5EA6\u6263\u9664\u70BA\u56DE\u5FA9\u539F\u72C0\u6240\u5FC5\u8981\u7684\u8CBB\u7528\u3002 \u25CF3C\u76F8\u95DC\u5546\u54C1\uFF0C\u70BA\u4E00\u6B21\u6027\u5305\u88DD\u5546\u54C1\uFF0C\u8ACB\u52D9\u5FC5\u78BA\u8A8D\u6709\u8CFC\u8CB7\u9700\u6C42\u5F8C\u518D\u62C6\u5C01\u3002 \u25CF\u7DB2\u9801\u5546\u54C1\u6703\u56E0\u70BA\u4F7F\u7528\u4E0D\u540C\u7684\u54C1\u724C\u87A2\u5E55\u4EE5\u53CA\u89E3\u6790\u5EA6\u4E0D\u540C\uFF0C\u9020\u6210\u5716\u7247\u984F\u8272\u5448\u73FE\u7565\u6709\u4E0D\u540C\uFF0C\u8ACB\u4EE5\u5BE6\u54C1\u984F\u8272\u70BA\u6E96\u3002
    \u6CE8\u610F\u4E8B\u9805\uFF1A\u9000\u63DB\u8CA8\u9808\u77E5\uFF1A \u5546\u54C1\u5230\u8CA8\u9694\u65E5\u4EAB\u8766\u76AE15\u5929\u9451\u8CDE(\u7336\u8C6B)\u671F\u4E4B\u6B0A\u76CA\u3010\u9451\u8CDE(\u7336\u8C6B)\u671F\u975E\u8A66\u7528\u671F\u3011\uFF0C\u8FA6\u7406\u9000\u8CA8\u5546\u54C1\u5FC5\u9808\u662F\u5B8C\u597D\u72C0\u614B\u4E14\u9700\u4EE5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u6240\u4F7F\u7528\u7684\u5916\u5305\u88DD(\u7D19\u7BB1\u6216\u5305\u88DD\u888B)\uFF0C\u59A5\u5584\u5305\u88DD\u5F8C\u4EA4\u4ED8\u7D66\u524D\u5F80\u53D6\u4EF6\u7684\u7269\u6D41\u516C\u53F8\uFF1B\u82E5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u7684\u5916\u5305\u88DD\u5DF2\u7D93\u907A\u5931\uFF0C\u8ACB\u60A8\u5728\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u5916\uFF0C\u518D\u4EE5\u5176\u4ED6\u9069\u7576\u7684\u5916\u76D2\u9032\u884C\u5305\u88DD\uFF0C\u8ACB\u52FF\u65BC\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u4E0A\u76F4\u63A5\u9ECF\u8CBC\u4EFB\u4F55\u55AE\u64DA\u6216\u66F8\u5BEB\u6587\u5B57\uFF0C\u5426\u5247\u5C07\u6703\u5F71\u97FF\u9000\u8CA8\u6B0A\u9650\uFF0C\u6B64\u5916\u4E5F\u53EF\u80FD\u4F9D\u7167\u640D\u6BC0\u7A0B\u5EA6\u6263\u9664\u70BA\u56DE\u5FA9\u539F\u72C0\u6240\u5FC5\u8981\u7684\u8CBB\u7528\u3002 \u25CF3C\u76F8\u95DC\u5546\u54C1\uFF0C\u70BA\u4E00\u6B21\u6027\u5305\u88DD\u5546\u54C1\uFF0C\u8ACB\u52D9\u5FC5\u78BA\u8A8D\u6709\u8CFC\u8CB7\u9700\u6C42\u5F8C\u518D\u62C6\u5C01\u3002 \u25CF\u7DB2\u9801\u5546\u54C1\u6703\u56E0\u70BA\u4F7F\u7528\u4E0D\u540C\u7684\u54C1\u724C\u87A2\u5E55\u4EE5\u53CA\u89E3\u6790\u5EA6\u4E0D\u540C\uFF0C\u9020\u6210\u5716\u7247\u984F\u8272\u5448\u73FE\u7565\u6709\u4E0D\u540C\uFF0C\u8ACB\u4EE5\u5BE6\u54C1\u984F\u8272\u70BA\u6E96\u3002
    \u6CE8\u610F\u4E8B\u9805\uFF1A\u9000\u63DB\u8CA8\u9808\u77E5\uFF1A \u5546\u54C1\u5230\u8CA8\u9694\u65E5\u4EAB\u8766\u76AE15\u5929\u9451\u8CDE(\u7336\u8C6B)\u671F\u4E4B\u6B0A\u76CA\u3010\u9451\u8CDE(\u7336\u8C6B)\u671F\u975E\u8A66\u7528\u671F\u3011\uFF0C\u8FA6\u7406\u9000\u8CA8\u5546\u54C1\u5FC5\u9808\u662F\u5B8C\u597D\u72C0\u614B\u4E14\u9700\u4EE5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u6240\u4F7F\u7528\u7684\u5916\u5305\u88DD(\u7D19\u7BB1\u6216\u5305\u88DD\u888B)\uFF0C\u59A5\u5584\u5305\u88DD\u5F8C\u4EA4\u4ED8\u7D66\u524D\u5F80\u53D6\u4EF6\u7684\u7269\u6D41\u516C\u53F8\uFF1B\u82E5\u672C\u516C\u53F8\u6216\u7279\u7D04\u5546\u7684\u5916\u5305\u88DD\u5DF2\u7D93\u907A\u5931\uFF0C\u8ACB\u60A8\u5728\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u5916\uFF0C\u518D\u4EE5\u5176\u4ED6\u9069\u7576\u7684\u5916\u76D2\u9032\u884C\u5305\u88DD\uFF0C\u8ACB\u52FF\u65BC\u5546\u54C1\u539F\u5EE0\u5916\u76D2\u4E0A\u76F4\u63A5\u9ECF\u8CBC\u4EFB\u4F55\u55AE\u64DA\u6216\u66F8\u5BEB\u6587\u5B57\uFF0C\u5426\u5247\u5C07\u6703\u5F71\u97FF\u9000\u8CA8\u6B0A\u9650\uFF0C\u6B64\u5916\u4E5F\u53EF\u80FD\u4F9D\u7167\u640D\u6BC0\u7A0B\u5EA6\u6263\u9664\u70BA\u56DE\u5FA9\u539F\u72C0\u6240\u5FC5\u8981\u7684\u8CBB\u7528\u3002 \u25CF3C\u76F8\u95DC\u5546\u54C1\uFF0C\u70BA\u4E00\u6B21\u6027\u5305\u88DD\u5546\u54C1\uFF0C\u8ACB\u52D9\u5FC5\u78BA\u8A8D\u6709\u8CFC\u8CB7\u9700\u6C42\u5F8C\u518D\u62C6\u5C01\u3002 \u25CF\u7DB2\u9801\u5546\u54C1\u6703\u56E0\u70BA\u4F7F\u7528\u4E0D\u540C\u7684\u54C1\u724C\u87A2\u5E55\u4EE5\u53CA\u89E3\u6790\u5EA6\u4E0D\u540C\uFF0C\u9020\u6210\u5716\u7247\u984F\u8272\u5448\u73FE\u7565\u6709\u4E0D\u540C\uFF0C\u8ACB\u4EE5\u5BE6\u54C1\u984F\u8272\u70BA\u6E96\u3002
    `}Save(i){}static \u0275fac=function(e){return new(e||r)(d(ie),d(N))};static \u0275cmp=u({type:r,selectors:[["buy-specification"]],decls:4,vars:1,consts:[[2,"padding","8px"],[3,"Save","Text"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"h1"),s(2,"\u5546\u54C1\u898F\u683C"),n(),o(3,"tool-editor",1),p("Save",function(v){return t.Save(v)}),n()()),e&2&&(m(3),c("Text",t.Spec))},dependencies:[Qe]})};var ce=class r{constructor(){}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["buy-similar"]],decls:14,vars:0,template:function(e,t){e&1&&(o(0,"div"),s(1,"\u540C\u985E\u5546\u54C11"),n(),o(2,"div"),s(3,"AD1"),n(),o(4,"div"),s(5,"\u540C\u985E\u5546\u54C12"),n(),o(6,"div"),s(7,"AD2"),n(),o(8,"div"),s(9,"\u540C\u985E\u5546\u54C13"),n(),o(10,"div"),s(11,"AD3"),n(),o(12,"div"),s(13,"\u540C\u985E\u5546\u54C14"),n())}})};var Q=class r{constructor(){}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["buy-about"]],decls:1,vars:0,template:function(e,t){e&1&&s(0,`\u5BA2\u670D\u4E2D\u5FC3
\u5E6B\u52A9\u4E2D\u5FC3
\u8766\u76AE\u5546\u57CE
\u4ED8\u6B3E\u65B9\u5F0F
\u8766\u76AE\u9322\u5305
\u8766\u5E63
\u904B\u8CBB\u88DC\u52A9
\u9000\u8CA8\u9000\u6B3E
\u5EF6\u9577\u8A02\u55AE\u64A5\u6B3E
\u806F\u7D61\u5BA2\u670D
\u9632\u8A50\u9A19\u5BA3\u5C0E
\u95DC\u65BC\u8766\u76AE
\u95DC\u65BC\u8766\u76AE
\u52A0\u5165\u6211\u5011
\u8766\u76AE\u689D\u6B3E
\u96B1\u79C1\u6B0A\u653F\u7B56
\u8766\u76AE\u5546\u57CE
\u8CE3\u5BB6\u4E2D\u5FC3
\u9650\u6642\u7279\u8CE3
\u806F\u7D61\u5A92\u9AD4
\u4ED8\u6B3E
\u7269\u6D41\u5408\u4F5C
\u8766\u76AE\u76F4\u9001\u5305\u88DD\u6E1B\u91CF\u6A19\u7AE0 \xA9 2021 Shopee. \u7248\u6B0A\u6240\u6709\u3002
\u570B\u5BB6\u548C\u5730\u5340:
\u65B0\u52A0\u5761
\u5370\u5C3C
\u53F0\u7063
\u6CF0\u570B
\u99AC\u4F86\u897F\u4E9E
\u8D8A\u5357
\u83F2\u5F8B\u8CD3
\u5DF4\u897F
\u58A8\u897F\u54E5
\u54E5\u502B\u6BD4\u4E9E
\u667A\u5229`)}})};function It(r,i){r&1&&l(0,"div",8)}var pe=class r{constructor(){}CanEditor=!1;Ads=[1,2,3,4,5,6];static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["buy-product"]],decls:16,vars:1,consts:[[1,"Flex",2,"padding-bottom","70px","flex-wrap","nowrap","background","burlywood"],[1,"Product","Flex"],[1,"P-8",2,"width","500px","height","700px"],[1,"AD"],["class","Card",4,"ngFor","ngForOf"],[2,"position","fixed","bottom","0"],["mat-button","","routerLink",".."],[1,"Spacer"],[1,"Card"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1),l(2,"buy-photo",2)(3,"buy-order",2)(4,"buy-message",2)(5,"buy-specification",2)(6,"buy-similar",2)(7,"buy-about",2),n(),o(8,"div",3),b(9,It,1,0,"div",4),n()(),o(10,"mat-toolbar",5)(11,"mat-toolbar-row")(12,"button",6)(13,"mat-icon"),s(14,"west"),n()(),l(15,"span",7),n()()),e&2&&(m(9),c("ngForOf",t.Ads))},dependencies:[k,R,D,M,L,j,H,U,me,le,ce,Q],styles:[".Product[_ngcontent-%COMP%]{width:100%;margin:16px 0;flex-grow:0}.Product[_ngcontent-%COMP%] > .Card[_ngcontent-%COMP%]{margin:8px 4px}.AD[_ngcontent-%COMP%]{width:0;margin:0;flex-shrink:0}.AD[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:300px;margin:8px 4px;background:#ffb6c1}@media (min-width: 767px){.AD[_ngcontent-%COMP%]{width:300px;margin:16px}}"]})};var xt=["File"];function Dt(r,i){if(r&1){let e=y();o(0,"span",4),p("click",function(){f(e);let a=_();return g(a.Login())}),s(1,"Login"),n()}}function Mt(r,i){if(r&1){let e=y();o(0,"span",4),p("click",function(){f(e);let a=_();return g(a.StatusService.LogOut())}),s(1,"Logout"),n()}}var ue=class r{constructor(i,e,t,a,v){this.Router=i;this.Dialog=e;this.BuyService=t;this.StorageService=a;this.StatusService=v}File;Items=[];NewItems=[];AddItem=new G(-1,0,"assets/add-camera.png",[]);Prodicts=[];ngOnInit(){this.Initialize()}GetFileList=()=>this.File.nativeElement.files||new FileList;Login(){this.Dialog.open(Z,{panelClass:"Glass",disableClose:!0}).afterClosed().subscribe(e=>{e&&this.StatusService.PostAuth(new oe(e.mail,e.password)).subscribe(t=>{t&&(this.StatusService.User=t)})})}Test(){this.BuyService.Test().subscribe(i=>{console.log(i)})}Upload(){let i=this.GetFileList(),e=new Array(i.length);for(let t=0;t<e.length;t++)e[t]=new C(0,"\u3010\u5C31\u662F\u8981\u73A9\u3011SONY PS5\u4E3B\u6A5F \u53F0\u7063\u516C\u53F8\u8CA8 PS5 \u4E3B\u6A5F\u8CE3\u5834 Playstation PS5(\u539F\u50F9\u4E3B\u6A5F\u9810\u8CFC\u4E2D)",30,5,100,"","",[""]);this.BuyService.Product.Post(e,i).subscribe(t=>this.Initialize())}Color(){let i=this.Dialog.open(He,{panelClass:"Glass",disableClose:!0})}Initialize(){return S(this,null,function*(){let i=(yield q(this.GetData()))||[];this.Prodicts=i;let e=[];for(let t of i){let a=[];a.push(new E(.5,`\u50F9\u9322:${t.price}`,"font:16px; color:palevioletred")),a.push(new E(.5,`\u8CE3\u51FA:${t.count}`,"font:16px; color:darkcyan")),a.push(new E(2,t.content)),e.push(new G(t.id,t.star,$e.IP+t.images[0],a,!0))}this.Items=e,this.NewItems=[this.AddItem]})}GetData(){let i=this.BuyService.Product.Get(),e=[new C(1,"\u5C31\u662F\u8981\u73A9",30,5,100,"2028-02-21","2028-02-21",["assets/test/buy/120px-2014_Tesla_Model_S_in_Germany.jpg"]),new C(2,"\u3010\u5C31\u662F\u8981\u73A9\u3011SONY PS5\u4E3B\u6A5F \u53F0\u7063\u516C\u53F8\u8CA8 PS5 \u4E3B\u6A5F\u8CE3\u5834 Playstation PS5(\u539F\u50F9\u4E3B\u6A5F\u9810\u8CFC\u4E2D)",30,5,100,"2028-02-21","2028-02-21",["assets/test/buy/120px-2014_Tesla_Model_S_in_Germany.jpg"])];return i}ItemClick(i){if(i.ID==-1)return this.OpenFile()}ItemDelete(i){let e=this.Prodicts.find(t=>t.id==i.ID);e!=null&&(console.log(e),this.BuyService.Product.Delete(e).subscribe(t=>this.Initialize()))}OpenFile(){this.File.nativeElement.click()}OnPngAdded(i){return S(this,null,function*(){let e=Array.from(this.GetFileList()).map(t=>this.StorageService.ReadImage(t));this.NewItems=e.map(t=>new G(0,0,"",[],!0));for(let t=0;t<e.length;t++)this.NewItems[t].Image=yield e[t];this.NewItems.push(this.AddItem)})}static \u0275fac=function(e){return new(e||r)(d(Fe),d(N),d(F),d(ie),d(ne))};static \u0275cmp=u({type:r,selectors:[["buy-store"]],viewQuery:function(e,t){if(e&1&&W(xt,5),e&2){let a;Y(a=$())&&(t.File=a.first)}},decls:27,vars:5,consts:[["File",""],["type","file","accept","image/*","multiple","multiple",2,"display","none",3,"change"],[1,"Store"],[1,"Flex",2,"justify-content","flex-end","padding","0 8px","background","LightPink"],[3,"click"],[2,"margin-right","8px"],[3,"click",4,"ngIf"],[1,"Flex-C",2,"height","90vh","overflow","scroll"],[2,"width","50%","height","100%"],[3,"Click","Delete","Items"],["vertical","",2,"height","100%","background","burlywood"],[2,"position","fixed","bottom","0"],["mat-button","","routerLink",".."],[1,"Spacer"],[1,"Flex",2,"background","white","padding","2px"],["mat-button","",2,"background","#212121","border-radius","0",3,"click"]],template:function(e,t){if(e&1){let a=y();o(0,"input",1,0),p("change",function(h){return f(a),g(t.OnPngAdded(h))}),n(),o(2,"div",2)(3,"div",3)(4,"span",4),p("click",function(){return f(a),g(t.Upload())}),s(5,"Upload"),n(),o(6,"span",5),s(7),n(),b(8,Dt,2,0,"span",6)(9,Mt,2,0,"span",6),n(),o(10,"div",7)(11,"div",8)(12,"tool-grid-list",9),p("Click",function(h){return f(a),g(t.ItemClick(h))})("Delete",function(h){return f(a),g(t.ItemDelete(h))}),n()(),l(13,"mat-divider",10),o(14,"div",8)(15,"tool-grid-list",9),p("Click",function(h){return f(a),g(t.ItemClick(h))})("Delete",function(h){return f(a),g(t.ItemDelete(h))}),n()()(),o(16,"mat-toolbar",11)(17,"mat-toolbar-row")(18,"button",12)(19,"mat-icon"),s(20,"west"),n()(),l(21,"span",13),o(22,"div",14),l(23,"input"),o(24,"button",15),p("click",function(){return f(a),g(t.Test())}),o(25,"mat-icon"),s(26,"search"),n()()()()()()}e&2&&(m(7),x(t.StatusService.User.username),m(),c("ngIf",t.StatusService.Logined()==!1),m(),c("ngIf",t.StatusService.Logined()),m(3),c("Items",t.Items),m(3),c("Items",t.NewItems))},dependencies:[V,ee,R,D,P,M,L,j],styles:[".Store[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:30px;font-size:larger;border:none}.Store[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible{outline:transparent}"]})};var Pt=[{path:"",component:se},{path:"product",component:pe},{path:"store",component:ue},{path:"about",component:Q}],de=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=K({type:r});static \u0275inj=J({imports:[ve.forChild(Pt),ve]})};var Ie=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=K({type:r});static \u0275inj=J({providers:[F],imports:[Ye,de,Le,tt,We,ze,Ke,qe]})};export{Ie as default};