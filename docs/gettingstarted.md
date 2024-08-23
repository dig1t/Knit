---
sidebar_position: 2
---

# Getting Started

## Tutorial Videos

Knit can be used via two workflows: Roblox Studio and externally with Rojo and Wally. To help explain how Knit is used through both workflows, check out the tutorial videos for each:

- [Knit Tutorial for Studio](https://youtu.be/0Ty2ojfdOnA)
- [Knit Tutorial for Rojo/Wally](https://youtu.be/tgndvNQ5agA)

## Install

Installing Knit is very simple. Just drop the module into ReplicatedStorage. Knit can also be used within a Rojo project.

**Roblox Studio workflow:**

- Get [Knit](https://www.roblox.com/library/5530714855/Knit) from the Roblox library.
- Place Knit directly within ReplicatedStorage.

**Rojo/Wally workflow:**

- Add Knit to your `wally.toml` dependency list (e.g. `Knit = "dig1t/knit@^1.7"`)
- Require Knit like any other module grabbed from Wally

	:::note Wally
	Not familiar with Wally? Wally is a package manager (like NPM) for the Roblox ecosystem.
	To get started, check out the [Wally repository](https://github.com/UpliftGames/wally).

## Basic Usage

The core usage of Knit is the same from the server and the client. The general pattern is to create a single script on the server and a single script on the client. These scripts will load Knit, create services/controllers, and then start Knit.

The most basic usage would look as such:

```lua
local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)

Knit.Start():catch(warn)
-- Knit.Start() returns a Promise, so we are catching any errors and feeding it to the built-in 'warn' function
-- You could also chain 'await()' to the end to yield until the whole sequence is completed:
--    Knit.Start():catch(warn):await()
```

That would be the necessary code on both the server and the client. However, nothing interesting is going to happen. Let's dive into some more examples.

### A Simple Service

A service is simply a structure that _serves_ some specific purpose. For instance, a game might have a MoneyService, which manages in-game currency for players. Let's look at a simple example:

```lua
local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)

-- Create the service:
local MoneyService = Knit.CreateService {
	Name = "MoneyService",
}

-- Add some methods to the service:

function MoneyService:GetMoney(player)
	-- Do some sort of data fetch
	local money = someDataStore:GetAsync("money")
	return money
end

function MoneyService:GiveMoney(player, amount)
	-- Do some sort of data fetch
	local money = self:GetMoney(player)
	money += amount
	someDataStore:SetAsync("money", money)
end

Knit.Start():catch(warn)
```

:::note
It's better practice to put services and controllers within their own ModuleScript and then require them from your main script. For the sake of simplicity, they are all in one script for these examples.
:::

Now we have a little MoneyService that can get and give money to a player. However, only the server can use this at the moment. What if we want clients to fetch how much money they have? To do this, we have to create some client-side code to consume our service. We _could_ create a controller, but it's not necessary for this example.

First, we need to expose a method to the client. We can do this by writing methods on the service's Client table:

```lua
-- Money service on the server
...
function MoneyService.Client:GetMoney(player)
	-- We already wrote this method, so we can just call the other one.
	-- 'self.Server' will reference back to the root MoneyService.
	return self.Server:GetMoney(player)
end
...
```

We can write client-side code to fetch money from the service:

```lua
-- Client-side code
local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)
Knit.Start():catch(warn):await()

local MoneyService = Knit.GetService("MoneyService")

MoneyService:GetMoney():andThen(function(money)
	print(money)
end)

-- Don't want to use promises? When you start Knit on the client,
-- set the ServicePromises option to false:
```

:::tip Turn Off Promises
Don't want to use promises when the client calls a service method? Set the `ServicePromises` option to `false` when you start Knit on the client:
```lua
Knit.Start({ServicePromises = false}):catch(warn):await()

local MoneyService = Knit.GetService("MoneyService")

local money = MoneyService:GetMoney()
```
:::

Under the hood, Knit is creating a RemoteFunction bound to the service's GetMoney method. Knit keeps RemoteFunctions and RemoteEvents out of the way so that developers can focus on writing code and not building communication infrastructure.

Check out the [Services](services.md) documentation for more info on services.
