# Cheapest & Easiest Domain Registrars for GitHub Pages

## Overview
Focusing on minimal time/expense waste for procuring a domain and configuring DNS (A/CNAME records) for a GitHub Pages site already launched. Recommendations prioritize registrars with low-cost .com domains (under $12/year), simple purchase process, and fast DNS setup for GitHub Pages (mapping to IPs like 185.199.108.153 and CNAME to `username.github.io`). Scalability ensures easy addition of domains without cost spikes or complexity. Top picks: **Porkbun**, **Cloudflare Registrar**, and **Namecheap**. Free subdomains (e.g., .tk) skipped due to unreliability; pricier registrars (e.g., GoDaddy) excluded for renewal hikes.

## Buckeyball Rating System
- Inspired by fullerene's efficient structure for minimal waste/maximal efficiency.
- 🌑 = 1 (Black hole: Total waste)
- 🌒 = 2 (Crescent: Barely usable)
- 🌓 = 3 (Half: Average, some drag)
- 🌔 = 4 (Gibbous: Strong, minor tweaks)
- 🌕 = 5 (Full: Perfect efficiency—fast, cheap, scalable)

## Registrar Evaluations

### 1. Porkbun
Cheapest first-year promos, simplest UI, no upsells. Ideal for fast setup and scaling multiple GitHub Pages sites.

| Factor | Rating | Why It Fits (Time/Expense Minimization) |
|--------|--------|-----------------------------------------|
| Upfront Cost (.com first year) | 🌕 (5) | ~$5-7 with promos; free privacy/SSL—no extras needed. |
| Renewal Cost (Scalability) | 🌕 (5) | $10-11/year; no hikes, easy bulk buys. |
| Ease of Purchase | 🌕 (5) | 2-click checkout; <2 min, no forced bundles. |
| DNS Setup Speed for GitHub Pages | 🌕 (5) | Intuitive panel; 3-5 min for A/CNAME; 5-30 min propagation. |
| Overall Simplicity (No Waste) | 🌕 (5) | Minimalist dashboard; no ads; scales fast. |
| Support for Issues | 🌔 (4) | Email/chat (24h); US-based, DNS help rare. |
| **Total Buckeyballs** | **29/30** | Fastest/cheapest; zero friction for mapping. |

### 2. Cloudflare Registrar
Wholesale pricing, instant DNS, free CDN/SSL. Best for scaling to 100+ domains, but minor account setup overhead.

| Factor | Rating | Why It Fits (Time/Expense Minimization) |
|--------|--------|-----------------------------------------|
| Upfront Cost (.com first year) | 🌕 (5) | $8-10 wholesale; free privacy/SSL. |
| Renewal Cost (Scalability) | 🌕 (5) | $8-10/year locked; bulk discounts. |
| Ease of Purchase | 🌔 (4) | Quick buy, but needs Cloudflare account (1 min). |
| DNS Setup Speed for GitHub Pages | 🌕 (5) | Top-tier panel; auto-suggests GitHub IPs; <5 min, instant propagation. |
| Overall Simplicity (No Waste) | 🌔 (4) | Unified DNS/security; slight learning curve. |
| Support for Issues | 🌔 (4) | Docs/forums great; chat for paid, free tier enough. |
| **Total Buckeyballs** | **28/30** | Scalable, performant; tiny setup cost. |

### 3. Namecheap
Beginner-friendly with promos, but slightly cluttered. Reliable GitHub integration, good for small-scale projects.

| Factor | Rating | Why It Fits (Time/Expense Minimization) |
|--------|--------|-----------------------------------------|
| Upfront Cost (.com first year) | 🌔 (4) | $6-9 with coupons; free privacy, watch email pitches. |
| Renewal Cost (Scalability) | 🌔 (4) | $13-15/year; higher than rivals, easy bulk. |
| Ease of Purchase | 🌔 (4) | Fast search, but upsell popups (~1 min). |
| DNS Setup Speed for GitHub Pages | 🌕 (5) | BasicDNS panel; 5-min setup; dedicated guide. |
| Overall Simplicity (No Waste) | 🌔 (4) | Clean, but ads/UI add ~2 min vs. Porkbun. |
| Support for Issues | 🌕 (5) | 24/7 chat; quick DNS fixes, newbie-friendly. |
| **Total Buckeyballs** | **26/30** | Solid one-off, but renewals/UI less efficient. |

## Recommended Action: Porkbun Setup
1. Visit `porkbun.com`, search domain (e.g., `yourapp.com`).
2. Buy (~$7, free privacy).
3. Dashboard > DNS: Add 4x A records (@ → 185.199.108.153, etc.), 1x CNAME (www → `yourusername.github.io`).
4. GitHub repo > Settings > Pages > Custom domain: Enter domain, enforce HTTPS.
5. Done in ~10 min; scales by repeating.

**Note**: For 10+ domains, Cloudflare’s pricing/DNS edge out slightly. Specific TLD or promo needs? Let me know!
