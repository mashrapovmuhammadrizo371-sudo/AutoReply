# AutoReply

Public SaaS platform for Instagram comment automation.

## Planned features
- Secure user accounts and workspace isolation
- Connect eligible Instagram Professional accounts through Meta's official authorization flow
- Configure keyword rules and approved comment/DM responses
- Process Meta webhooks safely with duplicate-event protection
- Free and paid plans with server-enforced limits
- Usage logs, privacy controls, and account disconnection

## Current status
**Foundation stage.** The current web interface is a starter/demo only. Instagram OAuth, Meta permissions, webhooks, database persistence, billing, and production security are not implemented yet.

## Stack
- Next.js App Router
- React and TypeScript
- CSS modules via global stylesheet for the starter UI

## Local development
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before public launch
Configure Meta's official developer app and required permissions, complete applicable App Review/Advanced Access steps, add a privacy policy and data-deletion process, use encrypted token storage, and configure production hosting and monitoring. Never commit access tokens, app secrets, or user credentials.
