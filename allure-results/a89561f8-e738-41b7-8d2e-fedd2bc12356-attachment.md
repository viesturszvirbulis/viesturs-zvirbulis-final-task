# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-001 full shopping flow
- Location: tests/finalTask.spec.ts:15:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as tester1782391917582')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as tester1782391917582')

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
  - insertion [ref=e62]:
    - iframe [ref=e65]:
      - iframe [ref=f48e1]:
        - generic [ref=f52e2]:
          - link "Advertisement" [ref=f52e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvqKLFoOPy2CgA3d1C9GsXx3rgQ8gftH2DfqZ1-FItwSUXPOwrqtwxfzCF840vHcLle7uRWEpcTKEKLvh_kWH-d891_zS_d9n5TZHVGKwphNOnJTisDttN3Oe1yydfYqLUCGxT6ucdbovTUvEZu9ErQkDDiaLGGfRS-kAUlJTMSqx47jtClQ7te0tM8DH3e0wcJpfS4d6jFCK6LHa0mihguBpNqrhth_ddQwd5sZL1aiXY0D0h5ZCV8WOT6U9DIm4i9pHKFOk5chhOg8ST1XfApzpHOyrvR8jZDDu8yRXqTypyuokOfIgl4HaDFR1-yqw1L4EzZsvmJZ6EsWZD4le-sFAIoIE0OPT24UQ-JvGt4GnX9EUzVe_x5r5HhT7H3tSPSdmPcdRgNMwS_rDjN8kmRgAVVTSNP9IMH0YcsSxCFPZQPI4yQF5dNQejJE2S98h_o2EuMwZVlQqZBo6grs5lGvVVd5kQB_GMvDC23WeCxKxMZQSDaKmt2Ju3uNLKk7VGgu28LVYlLda2HJW9rg-aD1Ymium4l7sbveWIkdFoArj_TCBQCsvDQBlsbenpflnCOkCu8SsuushvwtkSIEbiGydeoRO0WI-cvbIP9RDX7sIXRXoeZtWTnaMUMbDrEId4Y1fK74STyUurXX2-iJxQcHt2VFnnh6QqhjbVGOCOTpTRuDN97XedQ7htOQ1FARDBQJFTDSt2jxfPk5eFHBL4E0pNjNVIuobeMwP-W_hYRzeaDxrX-fV_rfLyL5K3ooCYLPUR3P-DciP5DDx9X6bqLNLY-hfm-HSaIMtHhNh-zL2Ql1zcM9XQGrdM_ixiM-Ag_IT4Fl0bArpii2e6yxcabt8PXVoZhzorlYkm94IM2b32LzairGCBbdocSXUvBkCnnEoTRc2gb8r8qWPg06VNjYHkNOZnseq_1B3M-VizeoQAvml9QZaq_clTc7ugc_CSTw2huLi0U0ZIJv57smFLHwG2h7qXCPD2c0TVQYmg1bHEKADrSz44yxXP2b3yRZpHb3KlXljY0XU-K27y1h9UNHWP0Csx4f5pQuTIEb6CmkyEoazG_OfNessc-0IdYULnXeTN8bCPsK2_I5bpnJ5Qbvm9x2cXSj0vQRuQnQKLSUGVw1RHRKu8o8SmNVnM76BfTVvaS8S4EKFtZc5NOMONMnbO1kOTaqhxFhi3YMN9n-1OvSYHMEFHSJHy62_ygsBq1YwET32XgWQD1tV5WEGJdw5kHtfWaZ39-1JQnAdq3tYb45uaNFOaOV8yIO__gHkLpZHUb-FCjbrEAL7CGIVLvZ1kSPUUkbap3HaV3R_CHVvKzsfhbiFZkUvqxnyeXohfmkgPc2fJBKIs1oZKXomO3xEbKvMpkru3H-dArok9-P-d-qE1SD-5-nvXDBeFkcY6-aQ_QQ5lgGLyHQi7I634ZWG4ycvQdyM3fFXOQEQhY576bi0R9BeI2T-q_xUam74E8M-8blOCCDZUHzFiYaSOPu7nay-VFSKC0B6nac9q5Gkasz8AW8Ky3y5cOIJpcgDcr0nQ4ac-NL2nxD5WYoGppd_-petW8DlqGxowZyk-eFZk54qJax1QIew9jiB2IKYiAnZXE&sai=AMfl-YTbOVmH5y540elQKigJ8PqSHCNmBDpqXWyNdfl3tPzvFgCVYC7Gppbuxh36S0L60anSxUmDKsH4aZTXVnsk9GWcCSvzacCM4Yik7AVJw6i6MOPkw8PNXHNjGDMFTyAwyiLb1JhQOZd8uo_lmhQLP7oaMntEvP8m7P13pCkGFp2CAA37YlT35DW5dda5XC4FAWVaye65fzSWa9iOJ1myD3kMygqsOHvPektsaA4YoxjJsc0PBDbuHx46WBArg4-59-Xfza75M4jI36ljxOmmvCu4QS0HBRIDCNXvijTWQX-uBcvH_ds42OeGhk-NBcdhYZbeicL4tUPC1ezqLIV_rrXl8OnoccBthzo1gSQkBiEppjAlIhTukRQS6RsVMnEpK8uOBMhUvAkE7wKxAkXo5SallLvHDsfHlFM2unvycBeg7-A0tPv2188ShWC3vv1zVK_sJ3igL9tb_A&sig=Cg0ArKJSzLzm07eqESqr&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9ib3NjaC1wcm9mZXNzaW9uYWwuY29t&urlfix=1&adurl=https://www.bosch-professional.com/lv/lv/pro360/prodeals/%3Fdclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23890624460
            - img "Advertisement" [ref=f52e5]
          - generic [ref=f52e6]:
            - generic:
              - img [ref=f52e10] [cursor=pointer]
              - button [ref=f52e14] [cursor=pointer]:
                - img [ref=f52e15]
  - generic [ref=e67]:
    - button [ref=e68] [cursor=pointer]: Privacy and cookie settings
    - generic [ref=e69]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
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