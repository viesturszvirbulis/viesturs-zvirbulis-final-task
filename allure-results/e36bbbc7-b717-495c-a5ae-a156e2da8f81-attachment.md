# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-001 full shopping flow
- Location: tests/finalTask.spec.ts:17:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as tester1782736538510')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as tester1782736538510')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - heading [level=2] [ref=e41]: Account Created!
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link [ref=e45] [cursor=pointer]:
      - /url: /
      - text: Continue
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading [level=2] [ref=e52]: Subscription
      - generic [ref=e53]:
        - textbox [ref=e54]:
          - /placeholder: Your email address
        - button [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e63]:
    - generic [ref=e66]:
      - heading [level=2] [ref=e68]: Discover more
      - link [ref=e69] [cursor=pointer]:
        - generic [ref=e70]: Online shopping platform
        - img [ref=e72]
      - link [ref=e74] [cursor=pointer]:
        - generic [ref=e75]: Website creation tutorials
        - img [ref=e77]
      - link [ref=e79] [cursor=pointer]:
        - generic [ref=e80]: Test case documentation
        - img [ref=e82]
  - insertion [ref=e84]:
    - iframe [ref=e87]:
      - generic [active] [ref=f59e1]:
        - link "Advertisement" [ref=f59e6] [cursor=pointer]:
          - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Ci7Fiq2ZCatm5E7SBndcPyLu54AbW9dSEiAHPsZut9xXb2R4QASD9tJ6VAWCtA6ABvKXo7yrIAQmpAvsZPEIiJLM-qAMByANIqgT1AU_QZ_CQa3PMHRPvQ-jajv3CMeEn1WFfw1M8GW4iku_67r9VYDCq1spyyRO2V-9IUzObz0qKHM2UxWB7GXTnaECqaigCNarMd8yc8cpZBcuzWY1FBF2PU8vYCVjeaXCsr4y1wZBLsgxEfv2rm-iNGSHILrtpZc_6HQ1JYo6CJf1CnXXeuYe35p0W4Cle7z5h09Ds7LNRpRboTY1s2n2clGSUN1G-m9f8Dtby1iR2nRLmboYLMwK610-ln6F_ZYRWgXACo-KEfuwo4X-wE4R51UpWRfxA9HGAHf6zem-dyacl76g7iWYTFUXCAn1kOcB0SGtjON2wwASAp8Cn9QWIBZ6kvZ9ZoAYugAe83bjPBagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIINgiA4YAQEAEYnwMyCKqCgICAgIAIOhCAwAOAgISAgJSu4AOoh4AQSL39wTpY947umLuslQNgAbEJtUNsrJPe-2CACgGYCwHICwGADAGiDAOQAQGqDQJMVsgNAeoNEwivwe6Yu6yVAxW0QOcEHchdDmzwDQKIDgnYEwPQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICqE4YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMImbvumLuslQMVtEDnBB3IXQ5sEAEYASAAEgLl3fD_BwE&num=1&cid=CAQScAARCiqBLJZToD8KOGobvyNZOaT_DY4azTSZ8EnsK036WhT0JGXS4gOZczad68Ni-E35l-mCTrcH0VID7x99OlwAbY4vup7iwo5s0LjYG_aO6Q49itF9UZ3JlaeDTrgDejEm5yoisE24kA0XM89G1PAYAQ&sig=AOD64_0aTr-wA6XOQzW95NmMhza30ZQNwA&client=ca-pub-1677597403311019&rf=1&nb=25&adurl=https://drive.porsche.lv/%3Fgad_source%3D5%26gad_campaignid%3D23956771358%26gclid%3DEAIaIQobChMImbvumLuslQMVtEDnBB3IXQ5sEAEYASAAEgLl3fD_BwE
          - iframe [ref=f59e9]:
            - img [ref=f66e2] [cursor=pointer]
        - img [ref=f59e13] [cursor=pointer]
        - button [ref=f59e17] [cursor=pointer]:
          - img [ref=f59e18]
        - iframe
  - generic [ref=e90]:
    - button [ref=e91] [cursor=pointer]: Privacy and cookie settings
    - generic [ref=e92]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
```

# Test source

```ts
  1 | import { expect, Page } from '@playwright/test';
  2 | 
  3 | export class BaseShopPage {
  4 |   constructor(readonly page: Page) {}
  5 | 
  6 |   async assertLoggedInAs(username: string) {
> 7 |     await expect(this.page.getByText(`Logged in as ${username}`)).toBeVisible();
    |                                                                   ^ Error: expect(locator).toBeVisible() failed
  8 |   }
  9 | }
```