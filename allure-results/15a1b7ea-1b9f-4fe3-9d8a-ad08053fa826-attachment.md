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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as tester1782733785743
  - generic [ref=e46]:
    - heading "Order Placed!" [level=2] [ref=e47]
    - paragraph [ref=e48]: Congratulations! Your order has been confirmed!
    - link "Download Invoice" [ref=e49] [cursor=pointer]:
      - /url: /download_invoice/500
    - link "Continue" [ref=e51] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e52]:
    - generic [ref=e57]:
      - heading "Subscription" [level=2] [ref=e58]
      - generic [ref=e59]:
        - textbox "Your email address" [ref=e60]
        - button "" [ref=e61] [cursor=pointer]:
          - generic [ref=e62]: 
        - paragraph [ref=e63]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e67]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e70]:
    - generic [ref=e73]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e75]: Discover more
      - link "Software" [ref=e76] [cursor=pointer]:
        - generic "Software" [ref=e77]
        - img [ref=e79]
      - link "Development Tools" [ref=e81] [cursor=pointer]:
        - generic "Development Tools" [ref=e82]
        - img [ref=e84]
      - link "Programming" [ref=e86] [cursor=pointer]:
        - generic "Programming" [ref=e87]
        - img [ref=e89]
  - insertion [ref=e91]:
    - iframe [ref=e94]:
      - iframe [ref=f162e1]:
        - generic [active] [ref=f163e1]:
          - link "Advertisement" [ref=f163e6] [cursor=pointer]:
            - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CM8mk9ltCarjXPIeKx-0PxdjrIdb11ISIAc2XicXhFdvZHhABIP20npUBYK0DoAG8pejvKsgBCakC-xk8QiIksz6oAwHIA0iqBPUBT9CYGA0ixBPTiwyQ8mzdltbaCqkcF_VqXCOQkry48YtIrt8HN5GvsRz_nm4KW6l4kSZ_8ZQM3q4iMbU8MrD89Ra_yLgyhIQJdV7_810K2saooSsQqYN3iiXChffe54onF0L2l-1fSNmccFq8cF9TRFblL-0ZDEipPjcSvG3toTaQBLlLOhi70RtXeU9v2-59DBjwhwCapAFfUUFhuY5sAQ6p6aDUc8kpkht1OPGJwt2AF0pynxMv1lH8bjsFaBFAMxsqiouhVcxT7NHw-6jVFdBdEgQ3knD-Ptd2UF-Xm2HhZ5Ob3Kt-CkrGZzLmw--fvfAgV9HABOzi7LHmBYgFnqS9n1mgBi6AB7zduM8FqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0gg2CIDhgBAQARifAzIIqoKAgICAgAg6EIDAA4CAhICAlK7gA6iHgBBIvf3BOliS45X-sKyVA2ABsQm1Q2ysk977YIAKAZgLAcgLAYAMAaIMA5ABAaoNAkxWyA0B6g0TCI2xlv6wrJUDFQfFsQcdRew6BPANAogOCdgTA9AVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKoThguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIuKqW_rCslQMVB8WxBx1F7DoEEAEYASAAEgIb6PD_BwE&num=1&cid=CAQScAARCiqBHTFFblgl9nJVqlAWN7QgLvr7lqs-w1pPWyU2_eOhfut0DsdU5KWFhYCfh0DjW5iQYbIf8bzgzgo1CUTPs6_GCvJUyW0a6xZp_jeED2W3pUVXxYFThBUgYsuy5NlFVuompHe-DkPwhlneDWUYAQ&sig=AOD64_0ZFgzHDgylKZjv1cQn-SemCi5nrg&client=ca-pub-1677597403311019&rf=1&nb=25&adurl=https://drive.porsche.lv/%3Fgad_source%3D5%26gad_campaignid%3D23956771358%26gclid%3DEAIaIQobChMIuKqW_rCslQMVB8WxBx1F7DoEEAEYASAAEgIb6PD_BwE
            - iframe [ref=f163e9]:
              - img [ref=f164e2] [cursor=pointer]
          - img [ref=f163e13] [cursor=pointer]
          - button [ref=f163e17] [cursor=pointer]:
            - img [ref=f163e18]
          - iframe
```