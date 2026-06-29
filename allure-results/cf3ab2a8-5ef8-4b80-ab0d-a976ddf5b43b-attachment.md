# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-001 full shopping flow
- Location: tests/finalTask.spec.ts:16:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/payment" until "load"
============================================================
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
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as tester1782733543770
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48] [cursor=pointer]:
          - /url: /
          - text: Home
      - listitem [ref=e49]: Checkout
    - heading [level=2] [ref=e51]: Address Details
    - generic [ref=e53]:
      - list [ref=e55]:
        - listitem [ref=e56]:
          - heading [level=3] [ref=e57]: Your delivery address
        - listitem [ref=e58]: Mr. Test User
        - listitem [ref=e59]: 123 Test Street
        - listitem [ref=e60]: Sanfrancisco California 901402
        - listitem [ref=e61]: United States
        - listitem [ref=e62]: "+190008000"
      - list [ref=e64]:
        - listitem [ref=e65]:
          - heading [level=3] [ref=e66]: Your billing address
        - listitem [ref=e67]: Mr. Test User
        - listitem [ref=e68]: 123 Test Street
        - listitem [ref=e69]: Sanfrancisco California 901402
        - listitem [ref=e70]: United States
        - listitem [ref=e71]: "+190008000"
    - heading [level=2] [ref=e73]: Review Your Order
    - table [ref=e75]:
      - rowgroup [ref=e76]:
        - row [ref=e77]:
          - cell [ref=e78]: Item
          - cell [ref=e79]: Description
          - cell [ref=e80]: Price
          - cell [ref=e81]: Quantity
          - cell [ref=e82]: Total
          - cell [ref=e83]
      - rowgroup [ref=e84]:
        - row [ref=e85]:
          - cell [ref=e86]:
            - link [ref=e87] [cursor=pointer]:
              - /url: ""
              - img [ref=e88]
          - cell [ref=e89]:
            - heading [level=4] [ref=e90]:
              - link [ref=e91] [cursor=pointer]:
                - /url: /product_details/1
                - text: Blue Top
            - paragraph [ref=e92]: Women > Tops
          - cell [ref=e93]:
            - paragraph [ref=e94]: Rs. 500
          - cell [ref=e95]:
            - button [ref=e96] [cursor=pointer]: "1"
          - cell [ref=e97]:
            - paragraph [ref=e98]: Rs. 500
        - row [ref=e99]:
          - cell [ref=e100]
          - cell [ref=e101]
          - cell [ref=e102]:
            - heading [level=4] [ref=e103]: Total Amount
          - cell [ref=e104]:
            - paragraph [ref=e105]: Rs. 500
    - generic [ref=e106]:
      - generic [ref=e107]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [ref=e108]
    - link [ref=e110] [cursor=pointer]:
      - /url: /payment
      - text: Place Order
  - insertion [ref=e112]:
    - generic [ref=e115]:
      - heading [level=2] [ref=e117]: Discover more
      - link [ref=e118] [cursor=pointer]:
        - generic [ref=e119]: Manual testing services
        - img [ref=e121]
      - link [ref=e123] [cursor=pointer]:
        - generic [ref=e124]: Software
        - img [ref=e126]
      - link [ref=e128] [cursor=pointer]:
        - generic [ref=e129]: Software testing courses
        - img [ref=e131]
  - contentinfo [ref=e133]:
    - generic [ref=e138]:
      - heading [level=2] [ref=e139]: Subscription
      - generic [ref=e140]:
        - textbox [ref=e141]:
          - /placeholder: Your email address
        - button [ref=e142] [cursor=pointer]:
          - generic [ref=e143]: 
        - paragraph [ref=e144]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e148]: Copyright © 2021 All rights reserved
  - insertion [ref=e149]:
    - iframe [ref=e152]:
      - iframe [ref=f137e1]:
        - generic [active]:
          - generic [ref=f141e1]:
            - generic [ref=f141e2]:
              - generic:
                - img [ref=f141e6] [cursor=pointer]
                - button [ref=f141e10] [cursor=pointer]:
                  - img [ref=f141e11]
            - generic [ref=f141e19]:
              - link "Click Here" [ref=f141e20] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CYXPYAVtCauDyFMaxiM0PnoPBsAyCnJ3ugQGK7qjH6RSmwLTTlEYQASD9tJ6VAWCtA6ABnseazz7IAQmoAwHIA5sEqgSKAk_Q5owgtsTsR-jmJxxi8UhFcDMH1EdSSE42NlEXo6PWrlJFcpWh-gKm-GEykyxkbkgm23jYDfdYyiELZgsVrQ1MMuEWP-564pKTZsT0Lx_rS3ItcrKFe1IvX76QGcNAy-d7fKuw2wr_3yPySevoGsLV3Y4Aj3MXvg7ymj_mfzowg-WEh1YdV5ZCk7ctdaaDk2QeQkRo5iEKTtPE9h2NurtnERDHtrIb-P82hEwf9T4Jz1WuTf37g2vso4fUvfyJkkNSf0-xmpo1oTlC3aYxZv0ueU60G50gH6pHBDF5ZAw2ABqrBBwKW_DWv6yw6EjQTkL-lAUgsuLUMcyrV3P5BT46W-YNvzG0FwKPwAS4o5qjtAXgBAOIBeWJ3dtVkAYBoAZNgAee_-quGagHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIINgiA4YAQEAEYnwMyCKqCgICAgIAIOhCAwAOAgISAgJSu4AOoh4AQSL39wTpY-cCEibCslQNgAYAKAZgLAcgLAYAMAaoNAkxW6g0TCLf_hImwrJUDFcYYogMdnkEQxvANAYgOCbATt4WLI9ATANgTCtgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBugXBLIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQSbwARCiqBx_SFwuPM-EFnQJuuJrulQSoDhDXCzD3O6CUOjMvuHhriCyzgjP7nHsp1wr6Ash7hJfUlkbc-WYWtUqI47AoKZAxratARKwOHw0EKxO51Gt057TVbGKeWFgoTaIaJF0DO4ko8InWTtQrhTRgB&sig=AOD64_3cDUtQoGSWpMh8nUXo3l68mpdc1g&client=ca-pub-1677597403311019&dbm_c=AKAmf-C3rlaZxSSFG8R_1ncV8JN85qfuVm5T92pp0GUDYu8dks7qmqLkP377oLxwEn-VV9Pbc7U6KaTxu1YK7MgfX460FoH2uox9IigI78r8lbJMoKS-2nZerGj5KsixOhEVH-LLRqGPJdC1-qY-wfYvGgG-bfvGnLadZGjPPHXASiTfyV_f_AtKr6zEocbSv5cFXckPqVOi4ehbCupXmEIoE-WLxwjqbPDBAD9xuvuaQpSdVR7W_Ebit_GPh1BiAXspRvZs0Nupe3PI5IQvurvy4JpfjlDHxg&cry=1&dbm_d=AKAmf-CVc58WbXduZZFxKITFG4vYneVuSwVQJxPGzNJX4XvIrScT7IAUVBub_tQfsV8WIvv-Te6EmPgAUGNrfwizN8lxK7pUe2R1bODivmp6J4O0_javdUoMjFKXN6L_VZzkzQ6wND7qi5MfDsBtZ859NY3oQHPv_HXwR90xIXgj6WX8xGzF_hyo7zgqUK6aGJQexINIyysNLk6Yia_snbnz5aKvgBBbh9MndJtpuVrejqpd4wvcqYMpTq_H8YYck6_qwXR3ysJytuKkPWoKvaZoKFDTZ0ztMHLPrLoZPPYOKVmmgahwAtuGbZw3I50eeEcbGZ1csQmKsat-0QJFuwiDNTT1TQpXBfsGFSjtxkZ7Ko1ITU-1DeGq6wzETMmKhDvY-o6PwoCMtPhwqTU7cVvypEF-a8aUEnRolG1ksg2Wjh3YD0Ky0KWFLbyjSRFgW9xbEaSMcs2g8sE6lBodPQTMDBx1LuEhxHVz0cQ61_bAAQYyqMj6XKeBPBFC1fJNh98efVVdrIVye6eH6XQQ-0W0zGfm3zjhEbcRWDoHUpSi45v2LCAaefabYR24sacEq8aRQhR7zjXh6RZNH9m973hHZI6VBabFKxfF5ellrUJ1aO98x2u2uFvRMY76I2UaIJ7XIfyUYCuL_Srjcj0cWdFW-i_30EgpG5b36dTVw0R9W3lqGE75Ka_Inzkm9BEYFq4u9ySnD5pG&adurl=https://servedby.flashtalking.com/click/1/275018;9442808;4615372;210;0/?us_privacy=!!US_PRIVACY!&gdpr_consent=CQmkRcAQmkRcAEsACBENClFoAP_gAEPgABBoMGoB_C7EbCFCiDJ3IKMEMAhHABBAYsAwAAYAAgAADBIQIAQCgkEYBASAFCACCAAAKASBAAAgCAAAAUAAIAAFAABAAAwAIBAIIAAAgAAAAEAAAAAACIAAEQCAAAAEAEAAkAgAAAIAWEAAAAAAAACBAAAAAAAAAAAAAAAABAEAAQAAQAAAAAAAiAAAAAAAABAIAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAQgAAAAAAAAAAAAAAAAAAEAAAAAAIMGoB_C7EbCFCiDBXIKMEMAhXABAAYsAwAAYAAgAADBIQIAQCkkESBACAECAACAAAIAQBAAAoAAgAAEAAAAAVAABAAAwAIBAIAEAAgAAAQEAAAAAACIAAEQCAAAAEAEAAgAgAAAIAWEAAAAAAAACBAAAAAAAAAAAAAAAAAAEAACAAwAAAAAAAiAAAAAAAABAIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAEAAAAAAAAAAAAAAAEAAAAAAIAA.IMGoB_C7EbCFCiDJ3IKMEMAhXABBAYsAwAAYAAgAADBIQIAQCkkEaBASAFCACCAAAKASBAAAoCAgAAUAAIAAVAABAAAwAIBAIIEAAgAAAQEAAAAAACIAAEQCAAAAEAEAAkAgAAAIAWEAAAAAAAACBAAAAAAAAAAAAAAAABAEAASAAwAAAAAAAiAAAAAAAABAIEAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAQgAAEAAAAAAAAAAAAAAAEAAAAAAIA&gdpr=1&ft_partnerimpid=ABAjH0gTTufbATMhRVAIHlaNuWj0&ft_impID=C6A1466F-EB7C-6E96-76B1-C6A420CC2E32&g=6754823D5A5D99&random=785926.4153756555&ft_width=728&ft_height=90&url=https://www.adobe.com/lv/acrobat/free-trial-download.html?sdid=B8NR3JZH&mv=display&mv2=display
                - img "Click Here" [ref=f141e21]
              - link "AdChoices arrow" [ref=f141e23] [cursor=pointer]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img "AdChoices arrow" [ref=f141e24]
              - link "Privacy Notification" [ref=f141e26] [cursor=pointer]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img [ref=f141e27]
              - link "Privacy Notification" [ref=f141e29] [cursor=pointer]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img [ref=f141e30]
          - iframe
  - generic [ref=e154]:
    - button [ref=e155] [cursor=pointer]: Privacy and cookie settings
    - generic [ref=e156]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
  - link [ref=e157] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e158]: 
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BaseShopPage } from './BaseShopPage';
  3  | 
  4  | export class CheckoutPage extends BaseShopPage { //TC-001
  5  |   readonly deliveryAddress: Locator;
  6  |   readonly placeOrderButton: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     super(page);
  10 |     this.deliveryAddress = page.locator('#address_delivery');
  11 |     this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
  12 |   }
  13 | 
  14 |   async assertDeliveryAddressContains(text: string) {
  15 |     await expect(this.deliveryAddress).toContainText(text);
  16 |   }
  17 | 
  18 |   async placeOrder() {
  19 |     await this.placeOrderButton.click();
> 20 |     await this.page.waitForURL('**/payment');
     |                     ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  21 |   }
  22 |   
  23 | }
```