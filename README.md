# AgriSmart Bot – Kiswahili AI Msaidizi kwa Kilimo

AgriSmart is an AI-powered Two-Way SMS bot that helps farmers solve agricultural problems via SMS in **Kiswahili**. It supports **offline fallback responses** and integrates with **Africa's Talking** for sending/receiving SMS and **OpenAI GPT models** for dynamic answers.

![AgriSmart SMS Bot Flow](./assets/agribot.png)

---

## Features

- Answers in **Kiswahili** using GPT-4o (via OpenAI)
- Receives and sends SMS using Africa’s Talking API (Sandbox supported)
- Works **offline** with a local fallback database (`fallback_sw.json`)
- Built with Node.js and Express.js

---

## 🚀 Live Demo (via Simulator)

> 👉 Use the [Africa’s Talking SMS Simulator](https://account.africastalking.com/apps/sandbox/sms/simulator)

- Short code: `[your shortcode]` (Sandbox)
- Message: `Nimeona wadudu kwenye mahindi`
- Sender: Any fake number (e.g. `+2557xxxxxxx`)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Africa’s Talking SMS API
- OpenAI GPT-4o / GPT-4o-mini
- Ngrok (for tunneling locally)

---

## 📦 Clone & Run Locally

### 1. Clone Repository

```bash
git clone https://github.com/your-username/agrismart-bot.git
cd agrismart-bot]
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```.env
AT_USERNAME=sandbox
AT_API_KEY=your_sandbox_api_key
PORT=3000
OPENAI_API_KEY=your_openai_key
```

### 4. Start Your Server

```bash
node index.js
```

### 5. Expose Your Localhost via ngrok

```bash
npx ngrok http 3000
```