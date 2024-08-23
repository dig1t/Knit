"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="Getting Started",l={unversionedId:"gettingstarted",id:"gettingstarted",title:"Getting Started",description:"Tutorial Videos",source:"@site/docs/gettingstarted.md",sourceDirName:".",slug:"/gettingstarted",permalink:"/Knit/docs/gettingstarted",draft:!1,editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/gettingstarted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"About",permalink:"/Knit/docs/intro"},next:{title:"Services",permalink:"/Knit/docs/services"}},s={},c=[{value:"Tutorial Videos",id:"tutorial-videos",level:2},{value:"Install",id:"install",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"A Simple Service",id:"a-simple-service",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"tutorial-videos"},"Tutorial Videos"),(0,a.kt)("p",null,"Knit can be used via two workflows: Roblox Studio and externally with Rojo and Wally. To help explain how Knit is used through both workflows, check out the tutorial videos for each:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/0Ty2ojfdOnA"},"Knit Tutorial for Studio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/tgndvNQ5agA"},"Knit Tutorial for Rojo/Wally"))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Installing Knit is very simple. Just drop the module into ReplicatedStorage. Knit can also be used within a Rojo project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Roblox Studio workflow:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get ",(0,a.kt)("a",{parentName:"li",href:"https://www.roblox.com/library/5530714855/Knit"},"Knit")," from the Roblox library."),(0,a.kt)("li",{parentName:"ul"},"Place Knit directly within ReplicatedStorage.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rojo/Wally workflow:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add Knit to your ",(0,a.kt)("inlineCode",{parentName:"p"},"wally.toml")," dependency list (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'Knit = "dig1t/knit@^1.7"'),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Require Knit like any other module grabbed from Wally"),(0,a.kt)("admonition",{parentName:"li",title:"Wally",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Not familiar with Wally? Wally is a package manager (like NPM) for the Roblox ecosystem.\nTo get started, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/UpliftGames/wally"},"Wally repository"),".")))),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"The core usage of Knit is the same from the server and the client. The general pattern is to create a single script on the server and a single script on the client. These scripts will load Knit, create services/controllers, and then start Knit."),(0,a.kt)("p",null,"The most basic usage would look as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local Knit = require(game:GetService(\"ReplicatedStorage\").Packages.Knit)\n\nKnit.Start():catch(warn)\n-- Knit.Start() returns a Promise, so we are catching any errors and feeding it to the built-in 'warn' function\n-- You could also chain 'await()' to the end to yield until the whole sequence is completed:\n--    Knit.Start():catch(warn):await()\n")),(0,a.kt)("p",null,"That would be the necessary code on both the server and the client. However, nothing interesting is going to happen. Let's dive into some more examples."),(0,a.kt)("h3",{id:"a-simple-service"},"A Simple Service"),(0,a.kt)("p",null,"A service is simply a structure that ",(0,a.kt)("em",{parentName:"p"},"serves")," some specific purpose. For instance, a game might have a MoneyService, which manages in-game currency for players. Let's look at a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\n-- Create the service:\nlocal MoneyService = Knit.CreateService {\n    Name = "MoneyService",\n}\n\n-- Add some methods to the service:\n\nfunction MoneyService:GetMoney(player)\n    -- Do some sort of data fetch\n    local money = someDataStore:GetAsync("money")\n    return money\nend\n\nfunction MoneyService:GiveMoney(player, amount)\n    -- Do some sort of data fetch\n    local money = self:GetMoney(player)\n    money += amount\n    someDataStore:SetAsync("money", money)\nend\n\nKnit.Start():catch(warn)\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It's better practice to put services and controllers within their own ModuleScript and then require them from your main script. For the sake of simplicity, they are all in one script for these examples.")),(0,a.kt)("p",null,"Now we have a little MoneyService that can get and give money to a player. However, only the server can use this at the moment. What if we want clients to fetch how much money they have? To do this, we have to create some client-side code to consume our service. We ",(0,a.kt)("em",{parentName:"p"},"could")," create a controller, but it's not necessary for this example."),(0,a.kt)("p",null,"First, we need to expose a method to the client. We can do this by writing methods on the service's Client table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Money service on the server\n...\nfunction MoneyService.Client:GetMoney(player)\n    -- We already wrote this method, so we can just call the other one.\n    -- 'self.Server' will reference back to the root MoneyService.\n    return self.Server:GetMoney(player)\nend\n...\n")),(0,a.kt)("p",null,"We can write client-side code to fetch money from the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Client-side code\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\nKnit.Start():catch(warn):await()\n\nlocal MoneyService = Knit.GetService("MoneyService")\n\nMoneyService:GetMoney():andThen(function(money)\n    print(money)\nend)\n\n-- Don\'t want to use promises? When you start Knit on the client,\n-- set the ServicePromises option to false:\n')),(0,a.kt)("admonition",{title:"Turn Off Promises",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Don't want to use promises when the client calls a service method? Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServicePromises")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," when you start Knit on the client:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'Knit.Start({ServicePromises = false}):catch(warn):await()\n\nlocal MoneyService = Knit.GetService("MoneyService")\n\nlocal money = MoneyService:GetMoney()\n'))),(0,a.kt)("p",null,"Under the hood, Knit is creating a RemoteFunction bound to the service's GetMoney method. Knit keeps RemoteFunctions and RemoteEvents out of the way so that developers can focus on writing code and not building communication infrastructure."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/Knit/docs/services"},"Services")," documentation for more info on services."))}m.isMDXComponent=!0}}]);