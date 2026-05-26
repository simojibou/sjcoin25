<div align="center">
  <img src="https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG" width="150" height="150" style="border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" alt="SJ COIN Logo"/>

  <h1>SJ COIN ($SJ)</h1>
  <p><strong>The Official Utility Token of the SJ Telegram Mini App Ecosystem 🚀</strong></p>

  <p>
    <a href="https://t.me/sjcoin25bot"><img src="https://img.shields.io/badge/Play-Mini_App-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Mini App"></a>
    <a href="https://t.me/SJCoinOfficial"><img src="https://img.shields.io/badge/Join-Community-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Official Channel"></a>
    <a href="https://sj-one.web.app"><img src="https://img.shields.io/badge/Visit-Website-5A67D8?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website"></a>
    <a href="https://ton.org"><img src="https://img.shields.io/badge/Blockchain-TON-0098EA?style=for-the-badge&logo=ton&logoColor=white" alt="TON Network"></a>
  </p>
</div>

---

## 📝 Overview

**SJ COIN ($SJ)** is a high-utility community jetton engineered on the **TON (The Open Network) Blockchain**. It functions as the core native currency and rewards engine powering the **SJ Telegram Mini App ecosystem**, created by **SIMOJIBOU**.

Built to drive engagement, players earn **$SJ** by competing in interactive mini-games, conquering daily social quests, and participating in collaborative community milestones. The token is fully integrated and natively compatible with all major TON wallets, including **Tonkeeper**, **MyTonWallet**, and the built-in **Telegram TON Space**.

---

## 💎 Tokenomics & Smart Contract

| Parameter | Specification / Address |
| :--- | :--- |
| **Token Name** | SJ COIN |
| **Token Symbol** | `$SJ` |
| **Decimals** | `9` |
| **Total Supply** | `100,000,000,000,000,000 SJ` |
| **Blockchain** | TON (The Open Network) |
| **Jetton Master Contract** | `EQD1TIRrCeCdO04h4V14Lt2L-DZUrnFwHhAcoZp0o9yFmSBe` |
| **Admin Wallet** | `UQACzRKZn07xqQK0zM5nLhEqS5L68pXvU-NfH4H8Y9_vU9ZaW` |

> **Note:** Always verify the Jetton Master Contract address before executing any swaps or transfers to avoid interacting with counterfeit tokens.

---

## 🚀 Ecosystem Features

### 1. The Telegram Mini Game
* **Instant Access:** Launch the game directly via [@sjcoin25bot](https://t.me/sjcoin25bot).
* **Play-to-Earn Mechanics:** Accumulate free `$SJ` tokens through active gameplay, daily quests, and referring friends to the ecosystem.

### 2. Live Presale & Token Swaps
* **Direct Exchange:** Community members and early adopters can seamlessly exchange **$TON** for **$SJ** at the current market rate using our decentralized [Web Presale Portal](https://sj-one.web.app).

---

## 🛠️ Developer Integration

### Official Jetton Metadata (TEP-64)
To render interactive buy buttons, game links, and verified project details inside **Telegram Wallet** and **Tonkeeper**, utilize the standardized metadata structure below. 

*Save this as `sjcoin.json` on your server:*

```json
{
  "name": "SJ COIN",
  "symbol": "SJ",
  "decimals": "9",
  "description": "SJ COIN by SIMOJIBOU - Official token of the SJ Telegram Mini App. Earn SJ by playing and completing tasks. Join the community and grow with us!",
  "image": "[https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG](https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG)",
  "buttons": [
    {
      "label": "Play Mini App",
      "url": "[https://t.me/sjcoin25bot](https://t.me/sjcoin25bot)"
    },
    {
      "label": "Official Channel",
      "url": "[https://t.me/SJCoinOfficial](https://t.me/SJCoinOfficial)"
    },
    {
      "label": "Website",
      "url": "[https://sj-one.web.app](https://sj-one.web.app)"
    }
  ]
}
