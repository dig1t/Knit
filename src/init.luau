local RunService = game:GetService("RunService")

local KnitServer = require(script.KnitServer)
local KnitClient = require(script.KnitClient)

export type Middleware = KnitServer.Middleware

export type ServerMiddlewareFn = KnitServer.ServerMiddlewareFn
export type ServerMiddleware = KnitServer.ServerMiddleware
export type ServiceDef = KnitServer.ServiceDef
export type Service = KnitServer.Service
export type ServiceClient = KnitServer.ServiceClient
export type KnitServerOptions = KnitServer.KnitOptions

export type ClientMiddlewareFn = KnitClient.ClientMiddlewareFn
export type ClientMiddleware = KnitClient.ClientMiddleware
export type PerServiceMiddleware = KnitClient.PerServiceMiddleware
export type ControllerDef = KnitClient.ControllerDef
export type Controller = KnitClient.Controller
export type KnitClientOptions = KnitClient.KnitOptions

if RunService:IsServer() then
	return KnitServer
else
	local _KnitServer = script:FindFirstChild("KnitServer")
	if _KnitServer and RunService:IsRunning() then
		_KnitServer:Destroy()
	end

	return KnitClient
end
