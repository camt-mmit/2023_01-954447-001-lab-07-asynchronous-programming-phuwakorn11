"use strict";(self.webpackChunkmy_async=self.webpackChunkmy_async||[]).push([[828],{7828:(U,u,l)=>{l.r(u),l.d(u,{routes:()=>F});var s=l(6814),f=l(6538),t=l(4946);let _=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-page"]],standalone:!0,features:[t.jDz],decls:9,vars:0,consts:[["routerLinkActive","app-st-active"],["routerLink","view"],["routerLink","form"]],template:function(n,r){1&n&&(t.TgZ(0,"nav")(1,"ul")(2,"li",0)(3,"a",1),t._uU(4,"View"),t.qZA()(),t.TgZ(5,"li",0)(6,"a",2),t._uU(7,"form"),t.qZA()()()(),t._UZ(8,"router-outlet"))},dependencies:[s.ez,f.lC,f.Od,f.rH]}),a})();function C(e,a){if(1&e&&(t.TgZ(0,"dl")(1,"dt"),t._uU(2,"Student ID"),t.qZA(),t.TgZ(3,"dd"),t._uU(4),t.qZA(),t.TgZ(5,"dt"),t._uU(6,"Fullname"),t.qZA(),t.TgZ(7,"dd"),t._uU(8),t.qZA(),t.TgZ(9,"dt"),t._uU(10,"Age"),t.qZA(),t.TgZ(11,"dd"),t._uU(12),t.qZA(),t.TgZ(13,"dt"),t._uU(14,"Autobiography"),t.qZA(),t.TgZ(15,"dd",2),t._uU(16),t.qZA(),t.TgZ(17,"dt"),t._uU(18,"Friends"),t.qZA(),t.TgZ(19,"dd"),t._uU(20),t.qZA()()),2&e){const o=t.oxw();t.xp6(4),t.Oqu(o.data.studentID),t.xp6(4),t.AsE("",o.data.firstname," ",o.data.lastname,""),t.xp6(4),t.hij("",o.data.age," years"),t.xp6(4),t.Oqu(o.data.autobiography),t.xp6(4),t.Oqu(o.data.friends)}}function h(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1,"No Data"),t.qZA())}let Z=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-view"]],inputs:{data:"data"},standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noData",""],[1,"app-cl-paragraph"]],template:function(n,r){if(1&n&&(t.YNc(0,C,21,6,"dl",0),t.YNc(1,h,2,0,"ng-template",null,1,t.W1O)),2&n){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},dependencies:[s.ez,s.O5],styles:["dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:100px 300px}dt[_ngcontent-%COMP%]{font-weight:700}"]}),a})();var c=l(5861);const m="profile-data";let g=(()=>{var e;class a{getDate(){return(0,c.Z)(function*(){return JSON.parse(localStorage.getItem(m)??"null")})()}setData(n){return(0,c.Z)(function*(){localStorage.setItem(m,JSON.stringify(n))})()}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();function P(e,a){if(1&e&&(t.ynx(0),t._UZ(1,"app-profile-view",1),t.BQk()),2&e){const o=a.ngIf;t.xp6(1),t.Q6J("data","undefined"===o?void 0:o)}}let x=(()=>{var e;class a{constructor(){this.profileData=(0,t.f3M)(g),this.data$=this.profileData.getDate().then(n=>n??"undefined")}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-view-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data"]],template:function(n,r){1&n&&(t.YNc(0,P,2,1,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.data$))},dependencies:[s.ez,s.O5,s.Ov,Z]}),a})();var p=l(95),y=l(1993);function v(e,a){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"button",16),t.NdJ("click",function(){const i=t.CHM(o).index,d=t.oxw();return t.KtG(d.moveFriend(i,-1))}),t._uU(2," Up "),t.qZA(),t.TgZ(3,"button",16),t.NdJ("click",function(){const i=t.CHM(o).index,d=t.oxw();return t.KtG(d.moveFriend(i,1))}),t._uU(4," Down "),t.qZA(),t._uU(5),t._UZ(6,"input",17),t.TgZ(7,"button",16),t.NdJ("click",function(){const i=t.CHM(o).index,d=t.oxw();return t.KtG(d.removeFriend(i))}),t._uU(8," X "),t.qZA(),t._UZ(9,"br"),t.BQk()}if(2&e){const o=a.ngForOf,n=a.index;t.xp6(1),t.Q6J("disabled",n===o.length-1),t.xp6(2),t.Q6J("disabled",n===o.length+1),t.xp6(2),t.hij(" Friend ",n+1," "),t.xp6(1),t.Q6J("formControlName",n),t.xp6(1),t.Q6J("disabled",0===n)}}let T=(()=>{var e;class a{constructor(){this.fb=(0,t.f3M)(p.qu).nonNullable,this.destroyRef=(0,t.f3M)(t.ktI),this.dataChange=new t.vpe}ngOnInit(){this.formGroup=this.fb.group({studentID:[this.data?.studentID??""],firstname:[this.data?.firstname??""],lastname:[this.data?.lastname??""],age:[this.data?.age??0],autobiography:[this.data?.autobiography??""],friends:this.fb.array(this.data?.friends??[""])}),this.formGroup.valueChanges.pipe((0,y.sL)(this.destroyRef)).subscribe(n=>{this.dataChange.emit(this.formGroup.getRawValue())})}addFriend(){this.formGroup.controls.friends.push(this.fb.control(""))}removeFriend(n){this.formGroup.controls.friends.removeAt(n)}moveFriend(n,r){const{friends:i}=this.formGroup.controls,d=n+r,A=i.at(n);i.removeAt(n),i.insert(d,A)}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-form"]],inputs:{data:"data"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:24,vars:2,consts:[[1,"box"],[3,"formGroup"],[1,"form-box"],["for","app-inp-student-id"],["id","app-inp-student-id","type","text","formControlName","studentID"],["for","app-inp-student-firstname"],["id","app-inp-student-firsname","type","text","formControlName","firstname"],["for","app-inp-student-lastname"],["id","app-inp-student-lastname","type","text","formControlName","lastname"],["for","app-inp-student-age"],["id","app-inp-student-age","type","number","step","1","formControlName","age"],["for","app-inp-student-autobiography"],["id","app-inp-student-autobiography","type","text","formControlName","autobiography","rows","10"],["type","button",3,"click"],["formArrayName","friends"],[4,"ngFor","ngForOf"],["type","button",3,"disabled","click"],["type","text",3,"formControlName"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),t._uU(4,"Student ID"),t.qZA(),t._UZ(5,"input",4),t.TgZ(6,"label",5),t._uU(7,"Firstname"),t.qZA(),t._UZ(8,"input",6),t.TgZ(9,"label",7),t._uU(10,"Lastname"),t.qZA(),t._UZ(11,"input",8),t.TgZ(12,"label",9),t._uU(13,"Age"),t.qZA(),t._UZ(14,"input",10),t.TgZ(15,"label",11),t._uU(16,"Autobiography"),t.qZA(),t._UZ(17,"textarea",12),t.qZA(),t.TgZ(18,"fieldset")(19,"legend")(20,"button",13),t.NdJ("click",function(){return r.addFriend()}),t._uU(21,"Add"),t.qZA()(),t.TgZ(22,"div",14),t.YNc(23,v,10,5,"ng-container",15),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.formGroup),t.xp6(22),t.Q6J("ngForOf",r.formGroup.controls.friends.controls))},dependencies:[s.ez,s.sg,p.UX,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.sg,p.u,p.CE],styles:["*[_ngcontent-%COMP%]{font-family:sans-serif}.form-box[_ngcontent-%COMP%]{display:grid;grid-template-columns:300px 1fr;grid-gap:10px}textarea[_ngcontent-%COMP%]{resize:none}.box[_ngcontent-%COMP%]{width:80%;margin:0 auto;background:#759cf1;padding:30px;border-radius:8px;color:#fff}label[_ngcontent-%COMP%]{font-weight:700}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{padding:10px;outline:none}fieldset[_ngcontent-%COMP%]{margin-top:30px;border:1px solid #fff;border-radius:8px}"]}),a})();function b(e,a){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-profile-form",1),t.NdJ("dataChange",function(r){t.CHM(o);const i=t.oxw();return t.KtG(i.save(r))}),t.qZA(),t.BQk()}if(2&e){const o=a.ngIf;t.xp6(1),t.Q6J("data","undefined"===o?void 0:o)}}const F=[{path:"",component:_,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:x},{path:"form",component:(()=>{var e;class a{constructor(){this.profileData=(0,t.f3M)(g),this.data$=this.profileData.getDate().then(n=>n??"undefined")}save(n){var r=this;return(0,c.Z)(function*(){yield r.profileData.setData(n)})()}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-form-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data","dataChange"]],template:function(n,r){1&n&&(t.YNc(0,b,2,1,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.data$))},dependencies:[s.ez,s.O5,s.Ov,T]}),a})()}]}]}}]);