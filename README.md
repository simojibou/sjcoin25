<div align="center">
<img src="https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG" width="120" height="120" style="border-radius: 50%;" alt="SJ COIN Logo"/>
# SJ COIN ($SJ)
### Official Token of the SJ Telegram Mini App Ecosystem 🚀
Platform
Telegram
Mini App
Website
</div>
## 📝 Overview
**SJ COIN ($SJ)** is a high-utility community jetton built on the **TON (The Open Network) Blockchain**. It serves as the native currency and rewards engine for the **SJ Telegram Mini App ecosystem** designed by **SIMOJIBOU**.
Players earn **$SJ** by actively engaging in competitive mini-games, completing daily social quests, and participating in collaborative community tasks. The token is fully compatible with major TON wallets, including **Tonkeeper**, **MyTonWallet**, and **Telegram TON Space**.
## 💎 Jetton Smart Contract & Specifications

| Parameter | Value / Address |
| :--- | :--- |
| **Token Name** | SJ COIN |
| **Token Symbol** | SJ |
| **Decimals** | 9 |
| **Total Supply** | 100,000,000,000,000,000 SJ |
| **Blockchain** | TON (The Open Network) |
| **Jetton Master Contract** | EQD1TIRrCeCdO04h4V14Lt2L-DZUrnFwHhAcoZp0o9yFmSBe |
| **Admin Wallet** | UQACzRKZn07xqQK0zM5nLhEqS5L68pXvU-NfH4H8Y9_vU9ZaW |

## 🛠️ Official Jetton Metadata (TEP-64)
To display interactive buy buttons, game links, and verified details inside **Telegram Wallet** and **Tonkeeper**, use the standardized metadata below inside sjcoin.json:
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
```
## 🎮 Telegram Mini App Integration
The SJ Ecosystem utilizes the @tonconnect/ui library to allow users to link their decentralized wallets and sign transaction events securely inside Telegram.
### Quick Setup for Developers
 1. **Install TON Connect UI SDK:**
   ```bash
   npm install @tonconnect/ui
   
   ```
 2. **Configure App Manifest (tonconnect-manifest.json):**
   Place this file on your web host root directory (e.g., https://sj-one.web.app/tonconnect-manifest.json):
   ```json
   {
     "url": "[https://sj-one.web.app](https://sj-one.web.app)",
     "name": "SJ COIN Mini App",
     "iconUrl": "[https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG](https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG)"
   }
   
   ```
 3. **Initialize Connection in Code:**
   ```javascript
   import { TonConnectUI } from '@tonconnect/ui';
   
   const tonConnectUI = new TonConnectUI({
       manifestUrl: '[https://sj-one.web.app/tonconnect-manifest.json](https://sj-one.web.app/tonconnect-manifest.json)',
       buttonRootId: 'ton-connect-button'
   });
   
   ```
## 🚀 How Users Earn and Buy $SJ
### 1. The Telegram Mini Game
 * Access the bot: @sjcoin25bot
 * Play to earn free $SJ tokens through active play, quests, and referring friends.
### 2. Live Presale / Token Swaps
Interested community members can exchange **$TON** directly for **$SJ** at the current exchange rate using our Web Presale Portal at sj-one.web.app.
## 🤝 Contributing
We welcome contributions from the community to help make **SJ COIN** the leading Web3 game token on TON!
 1. Fork the Project Repository.
 2. Create your Feature Branch (git checkout -b feature/AmazingFeature).
 3. Commit your Changes (git commit -m 'Add some AmazingFeature').
 4. Push to the Branch (git push origin feature/AmazingFeature).
 5. Open a Pull Request.
## 📜 License
This project is licensed under the **MIT License** - see the LICENSE file for details.
<div align="center">
<p>Created with ❤️ by <b>SIMOJIBOU</b>. Join the future of Telegram Gaming on TON.</p>
</div>
