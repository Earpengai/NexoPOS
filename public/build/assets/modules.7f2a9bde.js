import{_ as x,m as _,p as i,bF as w,o as c,a as h,f as e,t as r,e as m,F as M,r as k,j as C,i as p,w as b,h as v,q as g}from"./bootstrap.4fc50695.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";const N={name:"ns-modules",props:["url","upload"],data(){return{modules:[],total_enabled:0,total_disabled:0}},mounted(){this.loadModules().subscribe()},computed:{noModules(){return Object.values(this.modules).length===0},noModuleMessage(){return this.$slots["no-modules-message"]?this.$slots["no-modules-message"][0].text:x("No module has been updated yet.")}},methods:{__:x,download(s){document.location="/dashboard/modules/download/"+s.namespace},performMigration:async(s,o)=>{const l=async(n,d)=>new Promise((t,u)=>{_.post(`/api/nexopos/v4/modules/${s.namespace}/migrate`,{file:n,version:d}).subscribe(a=>{t(!0)},a=>i.error(a.message,null,{duration:4e3}).subscribe())});if(o=o||s.migrations,o){s.migrating=!0;for(let n in o)for(let d=0;d<o[n].length;d++){const t=o[n][d];await l(t,n)}s.migrating=!1,s.migrated=!0}},refreshModules(){this.loadModules().subscribe()},enableModule(s){const o=`${this.url}/${s.namespace}/enable`;_.put(o).subscribe({next:async l=>{i.success(l.message).subscribe(),this.loadModules().subscribe(n=>{document.location.reload()},n=>{i.error(n.message).subscribe()})},error:l=>{i.error(l.message).subscribe()}})},disableModule(s){const o=`${this.url}/${s.namespace}/disable`;_.put(o).subscribe({next:l=>{i.success(l.message).subscribe(),this.loadModules().subscribe(n=>{document.location.reload()},n=>{i.error(n.message).subscribe()})},error:l=>{i.error(l.message).subscribe()}})},loadModules(){return _.get(this.url).pipe(w(s=>(this.modules=s.modules,this.total_enabled=s.total_enabled,this.total_disabled=s.total_disabled,s)))},removeModule(s){if(confirm(this.$slots["confirm-delete-module"]?this.$slots["confirm-delete-module"][0].text:'No text was provided for "confirm-delete-module" message.')){const o=`${this.url}/${s.namespace}/delete`;_.delete(o).subscribe({next:l=>{this.loadModules().subscribe(n=>{document.location.reload()})},error:l=>{i.error(l.message,null,{duration:5e3}).subscribe()}})}}}},B={id:"module-wrapper",class:"flex-auto flex flex-col pb-4"},V={class:"flex justify-between items-center"},D={class:"flex justify-between items-center -mx-2"},E={class:"px-2"},F={class:"ns-button"},R=e("i",{class:"las la-sync"},null,-1),S={class:"mx-2"},j={class:"px-2"},q={class:"ns-button"},H=["href"],L=e("i",{class:"las la-angle-right"},null,-1),P={class:"header-tabs flex -mx-4 flex-wrap"},T={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},U={href:"#"},z={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},A={href:"#"},G={class:"module-section flex-auto flex flex-wrap -mx-4"},I={key:0,class:"p-4 flex-auto flex"},J={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},K={class:"font-bold text-xl text-primary"},Q={class:"ns-modules rounded shadow overflow-hidden ns-box"},W={class:"module-head h-40 p-2"},X={class:"font-semibold text-lg"},Y={class:"text-xs flex justify-between"},Z={class:"py-2 text-sm"},O={class:"ns-box-footer border-t p-2 flex justify-between"},ee={class:"flex -mx-1"},se={class:"px-1 flex -mx-1"},te={class:"px-1 flex"},oe=e("i",{class:"las la-archive"},null,-1),le={class:"px-1 flex"},ae=e("i",{class:"las la-trash"},null,-1);function ne(s,o,l,n,d,t){const u=C("ns-button");return c(),h("div",B,[e("div",V,[e("div",D,[e("span",E,[e("div",F,[e("a",{onClick:o[0]||(o[0]=a=>t.refreshModules()),class:"items-center justify-center rounded cursor-pointer shadow flex px-3 py-1"},[R,e("span",S,r(t.__("Refresh")),1)])])]),e("span",j,[e("div",q,[e("a",{href:l.upload,class:"flex items-center justify-center rounded cursor-pointer shadow px-3 py-1"},[e("span",null,r(t.__("Upload")),1),L],8,H)])])]),e("div",P,[e("div",T,[e("a",U,r(s.$slots.enabled?s.$slots.enabled[0].text:t.__("Enabled"))+"("+r(d.total_enabled)+")",1)]),e("div",z,[e("a",A,r(s.$slots.disabled?s.$slots.disabled[0].text:t.__("Disabled"))+" ("+r(d.total_disabled)+")",1)])])]),e("div",G,[t.noModules?(c(),h("div",I,[e("div",J,[e("h2",K,r(t.noModuleMessage),1)])])):m("",!0),(c(!0),h(M,null,k(d.modules,(a,y)=>(c(),h("div",{class:"px-4 w-full md:w-1/2 lg:w-1/3 py-4",key:y},[e("div",Q,[e("div",W,[e("h3",X,r(a.name),1),e("p",Y,[e("span",null,r(a.author),1),e("strong",null,"v"+r(a.version),1)]),e("p",Z,r(a.description),1)]),e("div",O,[a.enabled?m("",!0):(c(),p(u,{key:0,onClick:f=>t.enableModule(a),type:"info"},{default:b(()=>[v(r(t.__("Enable")),1)]),_:2},1032,["onClick"])),a.enabled?(c(),p(u,{key:1,onClick:f=>t.disableModule(a),type:"success"},{default:b(()=>[v(r(t.__("Disable")),1)]),_:2},1032,["onClick"])):m("",!0),e("div",ee,[e("div",se,[e("div",te,[g(u,{onClick:f=>t.download(a),type:"info"},{default:b(()=>[oe]),_:2},1032,["onClick"])]),e("div",le,[g(u,{onClick:f=>t.removeModule(a),type:"error"},{default:b(()=>[ae]),_:2},1032,["onClick"])])])])])])]))),128))])])}var ie=$(N,[["render",ne]]);export{ie as default};
