---
title: Accounting – Bank Sync
company: Hemlane
order: 2
summary: Redesigning how property owners import, sync, and manage bank transactions, to make accounting easier and stop customers leaving for competitors.
subtitle: Re-designing the experience for users to import transactions, synchronize accounts, and other quality-of-life features to make accounting easier.
highlight: 30% adoption rate within the first 30 days of launch
cover: /work/hemlane-bank-sync/cover.webp
coverAlt: Hemlane financial dashboard showing synced bank transactions on desktop and mobile
tags: [UX Design, UI Design, Mobile Web, Finances, Dashboard, B2B]
overview:
  - { label: Timeline, value: Jan – Apr 2024 }
  - { label: Role, value: Lead UI/UX Designer }
  - { label: Platform, value: Desktop & mobile responsive web }
  - { label: Tool, value: Figma }
impact:
  - { stat: "41%", label: decrease in customer churn compared to the previous year }
  - { stat: "30%", label: "adoption rate (users who synced their bank accounts) in the first 30 days" }
  - { stat: "↑", label: Improved customer satisfaction and NPS scores }
---

## Impact

### Reducing feature churn on Hemlane’s accounting features and improving customer satisfaction

Hemlane users had expressed negative sentiments about the state of financial bookkeeping features through product reviews and exit surveys. My work aimed to remedy these customer pain points and provided new accounting capabilities for users who utilize Hemlane to help manage finances, accounting, and other bookkeeping processes for property owners.

Hemlane is a SaaS property management startup that strives to enhance its product and develop new helpful features for users to manage their properties and rentals. In early 2024, the product team decided to redesign the accounting product and implement a new bank transactions import feature to improve the user experience in the financial tab.

I took charge as the lead UX designer for the Bank Sync feature, the last part of the whole accounting redesign. Through research and collaboration with developers, I gained valuable insights and overcame challenges, ultimately designing a product that made an impact on the business and received a positive reception.

<figure><img src="/work/hemlane-bank-sync/account-mockup.webp" alt="Hemlane bank account page with synced transactions on desktop" loading="lazy" /></figure>

## Background

Hemlane makes tasks easier for property owners, property managers, and tenants. Key functionality on the platform includes:

- **Rent collection** — collect or pay rent on the Hemlane platform
- **Financial transaction tracking** — record and track transactions for your property
- **Repair coordination** — a 24/7 coordination service for repair work orders

## Context

### Customers were leaving because accounting was manual and time-consuming

Without bank transaction sync, financial accounting was manual and slow, especially for users with more than one property. Customers often resorted to adding transaction data by hand, or used another bookkeeping product to finish accounting for their properties. Several decided to leave Hemlane for our competitors.

> “We have outgrown Hemlane. The accounting and maintenance services are not sufficient for our operations.”
>
> — Owner of 13 properties

> “The accounting body of Hemlane is not suitable for the amount of doors for my portfolio… [The] product just doesn’t fit my needs anymore.”
>
> — Owner of 9 property units

## The goal

### Design a Bank Sync feature that imports transaction data from the bank, and build the tools to modify that data as needed

- Transaction management and recording tools can speed up the accounting process for property owners and managers.
- Implement new features to edit, exclude (hide from view), connect, and split transactions for bookkeeping.

## Research

I gathered industry best practices through competitor research and spotted weaknesses in Hemlane’s UI through a product audit.

#### Product audit

- Conflicting indications of which direction money is flowing between two accounts created mental blocks for users and slowed them down.
- Some UI elements appeared outdated, as they had not been updated for 3 years.

#### Competitor analysis

I studied Buildium and DoorLoop (property management software) and Stessa (accounting software for landlords). Patterns we adopted:

- A split-transaction tool
- A merge tool for duplicated imported transactions
- A simplified financial dashboard with fewer categories, to present data more clearly and let users act fast

<figure><img src="/work/hemlane-bank-sync/competitor-stessa-merge.webp" alt="Stessa transaction list with a prompt to merge duplicate transactions" loading="lazy" /><figcaption>Example of Stessa’s merge feature</figcaption></figure>

## User persona & user flow

Our core user is a property owner with more than one property. I created a user flow to clarify the different actions related to bank sync, transaction editing, and transaction merging.

<figure class="narrow"><img src="/work/hemlane-bank-sync/persona.webp" alt="Persona: property owner with multiple properties, with motivation, pain point and design consideration" loading="lazy" /><figcaption>User persona</figcaption></figure>
<figure><img src="/work/hemlane-bank-sync/user-flow.webp" alt="User flow for selecting, excluding, creating and splitting transactions" loading="lazy" /><figcaption>User flow</figcaption></figure>

## Design highlight 1

### Clarifying money-flow direction in the transaction popup

**Problem — lack of clarity.** Product owners had identified that users struggled to understand who was paying whom in the interface. The old design showed no direction of money flow and relied only on verbiage, which was hard to understand at first glance and cost users time.

**Solution**

1. An arrow represents payment flow on the dashboard
2. On smaller UI, the arrow is removed and By/From labels are added to the modal
3. Jargon is replaced with natural language

<div class="compare">
  <figure><img src="/work/hemlane-bank-sync/money-flow-before.svg" alt="Old transaction label reading “owes”, with no direction of money flow" loading="lazy" /><figcaption>Before</figcaption></figure>
  <figure><img src="/work/hemlane-bank-sync/money-flow-after.svg" alt="New transaction label with an arrow showing who pays whom" loading="lazy" /><figcaption>After</figcaption></figure>
</div>

**Outcome**

- **Improved clarity** — users find the interface easier to understand
- **Improved ease of use** — users perform tasks faster

## Design highlight 2

### Letting users view transaction details, and split or exclude transactions when needed

**Problem — limited spacing.** As we added more tooling to the bank sync feature, it became difficult to present all of the CTAs in the mobile responsive web interface.

**Process.** I tested several layouts for the call-to-action buttons while designing the modal screens.

**Solution**

1. Stack the buttons
2. Outline the buttons
3. Use an outline border instead of a colored background

<div class="compare four">
  <figure><img src="/work/hemlane-bank-sync/cta-old.webp" alt="Original modal button layout" loading="lazy" /><figcaption>Before</figcaption></figure>
  <figure><img src="/work/hemlane-bank-sync/cta-stack.webp" alt="Stacked buttons" loading="lazy" /><figcaption>Stack</figcaption></figure>
  <figure><img src="/work/hemlane-bank-sync/cta-border.webp" alt="Outlined buttons spread across the modal" loading="lazy" /><figcaption>Outline</figcaption></figure>
  <figure><img src="/work/hemlane-bank-sync/cta-final.webp" alt="Final button layout with outlined buttons of equal size" loading="lazy" /><figcaption>Final</figcaption></figure>
</div>

**Outcome**

- **If you prioritize nothing, you prioritize everything** — keeping all of the CTAs the same size and style
- **Improved efficiency** — users can reach a higher degree of financial accuracy in reporting
- **Less visual friction** — less clutter and noise while completing tasks

<div class="screens two">
  <figure><img class="tall" src="/work/hemlane-bank-sync/mobile-transaction-details.webp" alt="Mobile transaction details popup with stacked outlined buttons" loading="lazy" /><figcaption>Mobile · Transaction Details popup</figcaption></figure>
</div>

## Design

<figure><img src="/work/hemlane-bank-sync/wireframes-merge.webp" alt="Grayscale wireframes of the merge transaction process" loading="lazy" /><figcaption>Wireframes for the merge transaction process</figcaption></figure>
<figure><img src="/work/hemlane-bank-sync/dashboard-mockups.webp" alt="Hi-fi transactions dashboard mockups" loading="lazy" /><figcaption>Dashboard with filled content</figcaption></figure>

## Prototype

### Focused on detailed interactions

- **Add new transaction** — the CTA is positioned at the top
- **Edit transaction** — clearer wording throughout
- **Split transaction** — users can now split one transaction into multiple equal or non-equal smaller transactions

<figure class="w50"><img src="/work/hemlane-bank-sync/split-transaction.webp" alt="Split transaction popup dividing one transaction into several" loading="lazy" /><figcaption>Split transaction popup</figcaption></figure>
<figure class="w40"><img src="/work/hemlane-bank-sync/edit-transaction.webp" alt="Edit transaction popup" loading="lazy" /><figcaption>Edit transaction popup</figcaption></figure>

## Post-launch

Customer reviews highlighted how imported transaction data streamlined bookkeeping. The feature launched around the April tax-filing deadline and was quickly adopted for users’ accounting needs.

> “I’m thrilled about the new connect to bank feature…”
>
> — Emily, property owner in California

**Iteration.** After launch, several users asked for a date range for data syncing, so we added one.

<figure class="w40"><img src="/work/hemlane-bank-sync/historical-import.webp" alt="Bank connection modal with a date range for importing historical transactions" loading="lazy" /><figcaption>Date range for historical import</figcaption></figure>

## Takeaways

- **Good communication keeps the product moving on time.** Close cross-functional communication kept the project progressing smoothly.
- **Spot pain points through many kinds of customer feedback** — online reviews, exit surveys, and in-product surveys.
