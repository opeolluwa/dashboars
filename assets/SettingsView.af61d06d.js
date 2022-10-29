import{d as r,I as d,B as u,m,u as p,_ as h,r as c,o as f,c as g,e as t,f as a,i,p as _,k as w}from"./index.f52672c7.js";import{b as k}from"./default.d7ec03ea.js";const V=r({name:"SettingsView",components:{AppSwitch:k,Icon:d,BaseTextInput:u},methods:{toggleTheme(){this.settings.theme=this.settings.theme=="darkMode"?"":"darkMode",document.documentElement.setAttribute("data-theme",this.settings.theme),localStorage.setItem("theme",this.settings.theme)}},computed:{...m(p,["userInformation"]),fullname(){var e;return((e=this.userInformation)==null?void 0:e.fullname)||""},username(){var e;return((e=this.userInformation)==null?void 0:e.username)||""},email(){var e;return((e=this.userInformation)==null?void 0:e.email)||""}},data:()=>({networkError:!1,settings:{darkMode:!0,theme:"",showNetworkError:!1,allowPushNotifications:!1}})});const l=e=>(_("data-v-40df0509"),e=e(),w(),e),S={id:"settings"},I=l(()=>t("h3",null,"Preferences",-1)),v=i(" dark mode "),N=i(" network error message "),E=i(" allow push notifications "),A=l(()=>t("section",null,[t("h3",null,"Security")],-1));function B(e,o,M,C,P,T){const n=c("AppSwitch");return f(),g("div",S,[t("section",null,[I,t("div",null,[a(n,{modelValue:e.settings.darkMode,"onUpdate:modelValue":o[0]||(o[0]=s=>e.settings.darkMode=s),onClick:e.toggleTheme},null,8,["modelValue","onClick"]),v]),t("div",null,[a(n,{modelValue:e.settings.showNetworkError,"onUpdate:modelValue":o[1]||(o[1]=s=>e.settings.showNetworkError=s)},null,8,["modelValue"]),N]),t("div",null,[a(n,{modelValue:e.settings.allowPushNotifications,"onUpdate:modelValue":o[2]||(o[2]=s=>e.settings.allowPushNotifications=s)},null,8,["modelValue"]),E])]),A])}const U=h(V,[["render",B],["__scopeId","data-v-40df0509"]]);export{U as default};
