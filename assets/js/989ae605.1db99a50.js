"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3},r="Services",l={unversionedId:"services",id:"services",title:"Services",description:"Services Defined",source:"@site/docs/services.md",sourceDirName:".",slug:"/services",permalink:"/Knit/docs/services",draft:!1,editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/services.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/Knit/docs/gettingstarted"},next:{title:"Controllers",permalink:"/Knit/docs/controllers"}},s={},p=[{value:"Services Defined",id:"services-defined",level:2},{value:"Creating Services",id:"creating-services",level:2},{value:"Adding methods",id:"adding-methods",level:2},{value:"Adding properties",id:"adding-properties",level:2},{value:"Using methods and properties",id:"using-methods-and-properties",level:2},{value:"Using events",id:"using-events",level:2},{value:"KnitInit and KnitStart",id:"knitinit-and-knitstart",level:2},{value:"Cleaning Up Unused Memory",id:"cleaning-up-unused-memory",level:2},{value:"Client Communication",id:"client-communication",level:2},{value:"Methods",id:"methods",level:3},{value:"Events (Server-to-Client)",id:"events-server-to-client",level:3},{value:"Events (Client-to-Server)",id:"events-client-to-server",level:3},{value:"Unreliable Events",id:"unreliable-events",level:3},{value:"Properties",id:"properties",level:3},{value:"Full Example",id:"full-example",level:2},{value:"PointsService",id:"pointsservice",level:3},{value:"Client Consumer",id:"client-consumer",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"services"},"Services"),(0,a.kt)("h2",{id:"services-defined"},"Services Defined"),(0,a.kt)("p",null,"Services are singleton provider objects that serve a specific purpose on the server. For instance, a game might have a PointsService, which manages in-game points for the players."),(0,a.kt)("p",null,"A game might have many services. They will serve as the backbone of a game."),(0,a.kt)("p",null,"For the sake of example, we will slowly develop PointsService to show how a service is constructed."),(0,a.kt)("h2",{id:"creating-services"},"Creating Services"),(0,a.kt)("p",null,"In its simplest form, a service can be created like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local PointsService = Knit.CreateService { Name = "PointsService", Client = {} }\n\nreturn PointsService\n')),(0,a.kt)("admonition",{title:"Client table optional",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," table is optional for the constructor. However, it will be added by Knit if left out. For the sake of code clarity, it is recommended to keep it in the constructor as shown above.")),(0,a.kt)("admonition",{title:"No client table forces server-only mode",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," table is omitted, the service will be interpreted as server-side only. This means that the client will ",(0,a.kt)("em",{parentName:"p"},"not")," be able to access this service using ",(0,a.kt)("inlineCode",{parentName:"p"},"Knit.GetService")," on the client.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," field is required. This name is how code outside of your service will find it. This name must be unique from all other services. It is best practice to name your variable the same as the service name (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"local PointsService")," matches ",(0,a.kt)("inlineCode",{parentName:"p"},'Name = "PointsService"'),")."),(0,a.kt)("p",null,"The last line (",(0,a.kt)("inlineCode",{parentName:"p"},"return PointsService"),") assumes this code is written in a ModuleScript, which is best practice for containing services."),(0,a.kt)("h2",{id:"adding-methods"},"Adding methods"),(0,a.kt)("p",null,"Services are just simple tables at the end of the day. As such, it is very easy to add methods to services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function PointsService:AddPoints(player, amount)\n    -- TODO: add points\nend\n\nfunction PointsService:GetPoints(player)\n    return 0\nend\n")),(0,a.kt)("h2",{id:"adding-properties"},"Adding properties"),(0,a.kt)("p",null,"Again, services are just tables. So we can simply add in properties as we want. In our above method, we are returning ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"GetPoints()")," because we have nowhere to store/retrieve points. Likewise, our ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPoints()")," method can't do anything. Let's change that. Let's create a property that holds a table of points per player:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"PointsService.PointsPerPlayer = {}\n")),(0,a.kt)("h2",{id:"using-methods-and-properties"},"Using methods and properties"),(0,a.kt)("p",null,"Now we can change our ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPoints()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GetPoints()")," methods to use this field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"PointsService.PointsPerPlayer = {}\n\nfunction PointsService:AddPoints(player, amount)\n    local points = self:GetPoints(player) -- Current amount of points\n    points += amount                      -- Add points\n    self.PointsPerPlayer[player] = points -- Store points\nend\n\nfunction PointsService:GetPoints(player)\n    local points = self.PointsPerPlayer[player]\n    return if points ~= nil then points else 0 -- Return 0 if no points found for player\nend\n")),(0,a.kt)("h2",{id:"using-events"},"Using events"),(0,a.kt)("p",null,"What if we want to fire an event when the amount of points changes? This is easy. We can assign an event named ",(0,a.kt)("inlineCode",{parentName:"p"},"PointsChanged")," as a property of our service, and have our ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPoints()")," method fire the event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Load the Signal module and create PointsChanged signal:\nlocal Signal = require(Knit.Util.Signal)\nPointsService.PointsChanged = Signal.new()\n\n-- Modify AddPoints:\nfunction PointsService:AddPoints(player, amount)\n    local points = self:GetPoints(player)\n    points += amount\n    self.PointsPerPlayer[player] = points\n    -- Fire event signal, as long as we actually changed the points:\n    if amount ~= 0 then\n        self.PointsChanged:Fire(player, points)\n    end\nend\n")),(0,a.kt)("p",null,"Another service could then listen for the changes on that event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function SomeOtherService:KnitStart()\n    local PointsService = Knit.GetService("PointsService")\n    PointsService.PointsChanged:Connect(function(player, points)\n        print("Points changed for " .. player.Name .. ":", points)\n    end)\nend\n')),(0,a.kt)("h2",{id:"knitinit-and-knitstart"},"KnitInit and KnitStart"),(0,a.kt)("p",null,"In that last code snippet, there's an odd ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitStart()")," method. This is part of the Knit lifecycle (read more under ",(0,a.kt)("a",{parentName:"p",href:"/Knit/docs/executionmodel"},"execution model"),"). These methods are optional, but very useful for orchestrating communication between other services."),(0,a.kt)("p",null,"When a service is first created, it is not guaranteed that other services are also created and ready to be used. The ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitStart")," methods come to save the day! After all services are created and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Knit.Start()")," method is fired, the ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInit")," methods of all services will be fired."),(0,a.kt)("p",null,"From the ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInit")," method, we can guarantee that all other services have been created. However, we still cannot guarantee that those services are ready to be consumed. Therefore, we can ",(0,a.kt)("em",{parentName:"p"},"reference")," them within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Init")," step, but we should never ",(0,a.kt)("em",{parentName:"p"},"use")," them (e.g. use the methods or events attached to those other services)."),(0,a.kt)("p",null,"After all ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInit")," methods have finished, all ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitStart")," methods are then fired. At this point, we can guarantee that all ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInits")," are done, and thus can freely access other services."),(0,a.kt)("p",null,"In order to maintain this pattern, be sure to set up your service in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Init")," method (or earlier; just in the ModuleScript itself). By the time ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitStart")," methods are being fired, your services should be available for use."),(0,a.kt)("h2",{id:"cleaning-up-unused-memory"},"Cleaning Up Unused Memory"),(0,a.kt)("p",null,"Alright, back to our PointsService! We have a problem... We have created a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memory_leak"},"memory leak"),"! When we add points for a player, we add the player to the table. What happens when the player leaves? Nothing! And that's a problem. That player's data is forever held onto within that ",(0,a.kt)("inlineCode",{parentName:"p"},"PointsPerPlayer")," table. To fix this, we need to clear out that data when the player leaves. We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInit")," method to hook up to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Players.PlayerRemoving")," event and remove the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function PointsService:KnitInit()\n    game:GetService("Players").PlayerRemoving:Connect(function(player)\n        -- Clear out the data for the player when the player leaves:\n        self.PointsPerPlayer[player] = nil\n    end)\nend\n')),(0,a.kt)("p",null,"While memory management is not unique to Knit, it is still an important aspect to consider when making your game. Even a garbage-collected language like Lua can have memory leaks introduced by the developer."),(0,a.kt)("h2",{id:"client-communication"},"Client Communication"),(0,a.kt)("p",null,"Alright, so we can store and add points on the server for a player. But who cares? Players have no visibility to these points at the moment. We need to open a line of communication between our service and the clients (AKA players). This functionality is so fundamental to Knit, that it's where the name came from: The need to ",(0,a.kt)("em",{parentName:"p"},"knit")," together communication."),(0,a.kt)("p",null,"This is where we are going to use that ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," table defined at the beginning."),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Let's say that we want to create a method that lets players fetch how many points they have, and when their points change. First, let's make a method to fetch points:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function PointsService.Client:GetPoints(player)\n    -- We can just call our other method from here:\n    return self.Server:GetPoints(player)\nend\n")),(0,a.kt)("p",null,"This creates a client-exposed method called ",(0,a.kt)("inlineCode",{parentName:"p"},"GetPoints"),". Within it, we reach back to our top-level service using ",(0,a.kt)("inlineCode",{parentName:"p"},"self.Server")," and then invoke our other ",(0,a.kt)("inlineCode",{parentName:"p"},"GetPoints")," method that we wrote before. In this example, we've basically just created a proxy for another method; however, this will not always be the case. There will be many times where a client method will exist alone without an equivalent server-side-only method."),(0,a.kt)("p",null,"Under the hood, Knit will create a RemoteFunction and bind this method to it."),(0,a.kt)("p",null,"On the client, we could then invoke the service as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- From a LocalScript\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\nlocal PointsService = Knit.GetService("PointsService")\nPointsService:GetPoints():andThen(function(points)\n    print("Points for myself:", points)\nend)\n')),(0,a.kt)("h3",{id:"events-server-to-client"},"Events (Server-to-Client)"),(0,a.kt)("p",null,"We can use remote signals to fire events from the server to the clients. Continuing with the previous PointsService example, let's create a signal that fires when a client's points change. We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Knit.CreateSignal()")," to indicate we want a signal created for the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local PointsService = Knit.CreateService {\n    Name = "PointsService",\n    Client = {\n        PointsChanged = Knit.CreateSignal(), -- Create the signal\n    },\n}\n')),(0,a.kt)("admonition",{title:"Remote Signal",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://sleitnick.github.io/RbxUtil/api/RemoteSignal"},"RemoteSignal")," documentation for more info on how to use the RemoteSignal object.")),(0,a.kt)("p",null,"Under the hood, Knit is using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Comm")," module, which is creating a RemoteEvent object linked to this event. This is a two-way signal (like a transceiver), so we can both send and receive data on both the server and the client."),(0,a.kt)("p",null,"We can then modify our ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPoints")," method again to fire this signal too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function PointsService:AddPoints(player, amount)\n    local points = self:GetPoints(player)\n    points += amount\n    self.PointsPerPlayer[player] = points\n    if amount ~= 0 then\n        self.PointsChanged:Fire(player, points)\n        -- Fire the client signal:\n        self.Client.PointsChanged:Fire(player, points)\n    end\nend\n")),(0,a.kt)("p",null,"And from the client, we can listen for an event on the signal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- From a LocalScript\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\nlocal PointsService = Knit.GetService("PointsService")\n\nPointsService.PointsChanged:Connect(function(points)\n    print("Points for myself now:", points)\nend)\n')),(0,a.kt)("h3",{id:"events-client-to-server"},"Events (Client-to-Server)"),(0,a.kt)("p",null,"Signal events can also be fired from the client. This is useful when the client needs to give the server information, but doesn't care about any response from the server. For instance, maybe the client wants to tell the PointsService that it wants some points. This is an odd use-case, but let's just roll with it."),(0,a.kt)("p",null,"We will create another client-exposed signal called ",(0,a.kt)("inlineCode",{parentName:"p"},"GiveMePoints")," which will randomly give the player points. Again, this is nonsense in the context of an actual game, but useful for example."),(0,a.kt)("p",null,"Let's create the signal on the PointsService:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local PointsService = Knit.CreateService {\n    Name = "PointsService",\n    Client = {\n        PointsChanged = Knit.CreateSignal(),\n        GiveMePoints = Knit.CreateSignal(), -- Create the new signal\n    },\n}\n')),(0,a.kt)("p",null,"Now, let's listen for the client to fire this signal. We can hook this up in our ",(0,a.kt)("inlineCode",{parentName:"p"},"KnitInit")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function PointsService:KnitInit()\n\n    local rng = Random.new()\n    -- Listen for the client to fire this signal, then give random points:\n    self.Client.GiveMePoints:Connect(function(player)\n        local points = rng:NextInteger(0, 10)\n        self:AddPoints(player, points)\n        print("Gave " .. player.Name .. " " .. points .. " points")\n    end)\n\n    -- ...other code for cleaning up player data here\nend\n')),(0,a.kt)("p",null,"From the client, we can fire the signal like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- From a LocalScript\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\nlocal PointsService = Knit.GetService("PointsService")\n\n-- Fire the signal:\nPointsService.GiveMePoints:Fire()\n')),(0,a.kt)("admonition",{title:"Client Remote Signal",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://sleitnick.github.io/RbxUtil/api/ClientRemoteSignal"},"ClientRemoteSignal")," documentation for more info on how to use the ClientRemoteSignal object.")),(0,a.kt)("h3",{id:"unreliable-events"},"Unreliable Events"),(0,a.kt)("p",null,"Knit also supports ",(0,a.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/classes/UnreliableRemoteEvent"},"UnreliableRemoteEvents"),", which is a special version of RemoteEvent. UnreliableRemoteEvents are, as the name suggests, unreliable. When an event is fired on an UnreliableRemoteEvent, the order and delivery of the event is not guaranteed. The listener of the event may receive the events out of order, or possibly not at all."),(0,a.kt)("p",null,"Having unreliable events is useful in scenarios where the data being sent is not crucial to game state. For example, setting the tilt rotation of each avatar's head: if some packets are dropped, this won't affect actual gameplay. The benefit is that unreliable events take up less network bandwidth."),(0,a.kt)("p",null,"To create an unreliable event, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Knit.CreateUnreliableSignal()")," within the client table of a service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local MyService = Knit.CreateService {\n    Name = "MyService",\n    Client = {\n        PlayEffect = Knit.CreateUnreliableSignal(),\n    },\n}\n')),(0,a.kt)("p",null,"Using the unreliable signal is the same as normal ones (see the two sections above on events)."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"It is often useful to replicate data to all or individual players. Instead of creating methods and signals to communicate this data, RemoteProperties\ncan be used."),(0,a.kt)("p",null,"For example, let's refactor the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPoints")," method to set a RemoteProperty of the number of points the player has. The client will then be able to\neasily read this property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Create the RemoteProperty:\nPointsService.Client.Points = Knit.CreateProperty(0)\n\nfunction PointsService:AddPoints(player, amount)\n    local points = self:GetPoints(player)\n    points += amount\n    self.PointsPerPlayer[player] = points\n    self.Client.Points:SetFor(player, points)\nend\n")),(0,a.kt)("p",null,"On the client, we can now easily read the ",(0,a.kt)("inlineCode",{parentName:"p"},"Points")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- LocalScript\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\nlocal PointsService = Knit.GetService("PointsService")\n\n-- The \'Observe\' method will fire for the current value and any time the value changes:\nPointsService.Points:Observe(function(points)\n    print("Current number of points:", points)\nend)\n')),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Observe")," is the easiest way to track the value of a RemoteProperty on the client."),(0,a.kt)("admonition",{title:"Remote Property",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://sleitnick.github.io/RbxUtil/api/RemoteProperty"},"RemoteProperty")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://sleitnick.github.io/RbxUtil/api/ClientRemoteProperty"},"ClientRemoteProperty"),"\ndocumentation for more info on how to use the RemoteProperty and ClientRemoteProperty objects.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"full-example"},"Full Example"),(0,a.kt)("h3",{id:"pointsservice"},"PointsService"),(0,a.kt)("p",null,"At the end of this tutorial, we should have a PointsService that looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\nlocal Signal = require(Knit.Util.Signal)\n\nlocal PointsService = Knit.CreateService {\n    Name = "PointsService",\n    -- Define some properties:\n    PointsPerPlayer = {},\n    PointsChanged = Signal.new(),\n    Client = {\n        -- Expose signals to the client:\n        PointsChanged = Knit.CreateSignal(),\n        GiveMePoints = Knit.CreateSignal(),\n        Points = Knit.CreateProperty(0),\n    },\n}\n\n-- Client exposed GetPoints method:\nfunction PointsService.Client:GetPoints(player)\n    return self.Server:GetPoints(player)\nend\n\n-- Add Points:\nfunction PointsService:AddPoints(player, amount)\n    local points = self:GetPoints(player)\n    points += amount\n    self.PointsPerPlayer[player] = points\n    if amount ~= 0 then\n        self.PointsChanged:Fire(player, points)\n        self.Client.PointsChanged:Fire(player, points)\n    end\n    self.Client.Points:SetFor(player, points)\nend\n\n-- Get Points:\nfunction PointsService:GetPoints(player)\n    local points = self.PointsPerPlayer[player]\n    return points or 0\nend\n\n-- Initialize\nfunction PointsService:KnitInit()\n\n    local rng = Random.new()\n    \n    -- Give player random amount of points:\n    self.Client.GiveMePoints:Connect(function(player)\n        local points = rng:NextInteger(0, 10)\n        self:AddPoints(player, points)\n        print("Gave " .. player.Name .. " " .. points .. " points")\n    end)\n\n    -- Clean up data when player leaves:\n    game:GetService("Players").PlayerRemoving:Connect(function(player)\n        self.PointsPerPlayer[player] = nil\n    end)\n\nend\n\nreturn PointsService\n')),(0,a.kt)("h3",{id:"client-consumer"},"Client Consumer"),(0,a.kt)("p",null,"Example of client-side LocalScript consuming the PointsService:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- From a LocalScript\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\nKnit.Start():catch(warn):await()\n\nlocal PointsService = Knit.GetService("PointsService")\n\nlocal function PointsChanged(points)\n    print("My points:", points)\nend\n\n-- Get points and listen for changes:\nPointsService:GetPoints():andThen(PointsChanged)\nPointsService.PointsChanged:Connect(PointsChanged)\n\n-- Ask server to give points randomly:\nPointsService.GiveMePoints:Fire()\n')))}h.isMDXComponent=!0}}]);