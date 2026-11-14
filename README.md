# GiftZone — custom digital gift card store

A Next.js starter for the GiftZone storefront. It includes a responsive catalog, product detail pages, a local cart preview, informational pages and a deliberately locked admin placeholder.

## Important status

This project is a **starter implementation / preview**, not a live store. Checkout does not collect money. Admin access is not configured. There is no gift-card inventory or email fulfillment integration yet. Do not publish as a functioning shop or accept customer payments until the launch checklist is complete.

## Run locally

1. Install Node.js 20 or newer.
2. Unzip this project.
3. In the project folder run `npm install`, then `npm run dev`.
4. Open `http://localhost:3000`.

## Backend setup required

1. Create a Supabase project.
2. Review and run `supabase/schema.sql` in its SQL editor.
3. Add environment variables from `.env.example` to `.env.local`.
4. Implement Supabase Auth, an admin role table and strict row-level security policies. The starter intentionally does not provide permissive public policies.
5. Implement a server-side order-creation endpoint with input validation and price lookup from trusted server-side catalog data.
6. Implement Stripe Checkout in test mode and a signed webhook endpoint. Mark an order paid only from a verified webhook event, never from a browser redirect.
7. Implement protected admin actions to inspect paid orders, record fulfillment and audit changes.
8. Use a secure email provider for manual admin-triggered delivery. Never expose stored unused codes in public client responses.

## Gift-code inventory and authorization

Only list brands/regions/denominations for which the business has legitimate authorized supply. Confirm reseller authorization and issuer requirements before selling branded gift cards. Do not fabricate codes or availability. Store unused codes in a server-only encrypted vault or a suitably protected secret-management system, not in client-readable tables.

## Before public launch

- Confirm business identity, registration, tax/VAT obligations and payment-provider eligibility.
- Publish complete terms, privacy, refund/cancellation, support and delivery policies reviewed for target markets.
- Confirm lawful sales and distribution rights for each issuer, region and denomination.
- Confirm price, exchange-rate, fees and VAT display rules.
- Test payment webhooks, duplicate events, failed payments, refunds, admin authorization, email delivery and audit logs.
- Add monitoring, backups, rate limiting, spam/fraud controls and security review.
- Use a custom domain with HTTPS.

## Project structure

- `app/` Next.js routes and styles
- `components/site.tsx` shared navigation/footer
- `lib/products.ts` catalog metadata
- `supabase/schema.sql` starter database schema
