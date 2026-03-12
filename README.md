<p align="center">
  <img src="https://img.shields.io/badge/ArogyaMitra-Health%20%26%20Wellness-00C9A7?style=for-the-badge&logo=heart&logoColor=white" alt="ArogyaMitra"/>
</p>

<h1 align="center">🏥 ArogyaMitra</h1>
<p align="center">
  <strong>Your AI-Powered Multi-Platform Health & Wellness Companion</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Web_App-React_19-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square&logo=fastapi" />
  <img src="https://img.shields.io/badge/Bot-Telegram-26A5E4?style=flat-square&logo=telegram" />
  <img src="https://img.shields.io/badge/AI-Gemini_|_Groq-FF6F00?style=flat-square&logo=google" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

<p align="center">
  <em>ArogyaMitra (आरोग्यमित्र — "Health Friend") is a multi-platform AI health assistant<br/>
  available on the Web, via REST API, and through Telegram — wherever you are.</em>
</p>

---

## 🌟 What is ArogyaMitra?

ArogyaMitra is a comprehensive health and wellness ecosystem that leverages **multiple AI models** (Google Gemini, Groq/LLaMA) to deliver personalized fitness plans, nutrition guidance, medical assistance, and more — across three integrated platforms:

| Platform | Technology | Purpose |
|----------|-----------|---------|
| **🌐 Web App** | React 19 + Vite + TailwindCSS | Dashboard, workout/nutrition plans, progress tracking |
| **⚙️ REST API** | FastAPI + SQLite | Authentication, AI agent, integrations |
| **🤖 Telegram Bot** | python-telegram-bot + Gemini | Symptom checker, prescription analyzer, reminders |

---

## ✨ Features at a Glance

### 🌐 Web Application
- **AI Health Assessment** — Get a personalized health score with actionable insights
- **Smart Workout Plans** — AI-generated workout routines tailored to your fitness level & goals
- **Nutrition Plans** — Personalized meal plans with Indian cuisine support (via Spoonacular API)
- **Progress Tracking** — Interactive charts and stats powered by Recharts
- **Calorie Scanner** — Snap a photo of your food to get instant calorie & macro breakdown
- **Exercise Camera** — Webcam-based motion detection for real-time rep counting
- **AROmi Chat** — AI fitness coach with voice input & smart injury/travel detection
- **Google Calendar Sync** — Schedule workouts and reminders directly to your calendar
- **YouTube Integration** — Exercise video recommendations for each workout

### 🤖 CareGenie — Telegram Bot
- **AI Symptom Checker** — Multi-turn diagnostic conversations with follow-up questions
- **Voice Input** — Speak your symptoms instead of typing (multi-language support)
- **Prescription Analyzer** — Upload a prescription photo → get medication details + Google Calendar reminders
- **Medication Reminders** — Automated daily medicine alerts with customizable time slots
- **Health Reports** — Upload medical reports for AI-powered analysis and insights
- **Hospital Finder** — Find nearby hospitals based on your live location
- **Pharmacy Finder** — Locate nearby pharmacies instantly
- **Medical Encyclopedia** — Search any medical term for a clear, AI-generated explanation
- **Health Tips** — Personalized health advice and precautions
- **Symptom Tracking** — Monitor conditions over time with follow-up reminders

### ⚙️ Backend API
- **JWT Authentication** — Secure user registration and login
- **AI Agent** — Centralized Groq-powered intelligence for workout, nutrition & health analysis
- **Dynamic Plan Adjustment** — Re-generate plans based on injuries, travel, or lifestyle changes
- **Multi-Service Integration** — Spoonacular, YouTube Data API, Google Calendar

---

## 🏗️ Project Structure

```
ArogyaMitra/
├── 🌐 frontend/              # React Web Application
│   ├── src/
│   │   ├── pages/             # Landing, Dashboard, WorkoutPlans, NutritionPlans,
│   │   │                      # HealthAssessment, ProgressTracking, Login, Register
│   │   ├── components/        # AROmiChat, CalorieScanner, ExerciseCamera, Navbar
│   │   ├── services/          # API client (Axios)
│   │   ├── stores/            # Zustand state management
│   │   └── utils/             # Calendar URL helpers
│   └── package.json
│
├── ⚙️ backend/                # FastAPI REST API
│   ├── app/
│   │   ├── routers/           # auth, workouts, nutrition, progress,
│   │   │                      # health_assessment, ai_coach, calendar, calorie_scan
│   │   ├── services/          # ai_agent, spoonacular, youtube, calendar
│   │   ├── models/            # SQLAlchemy models
│   │   └── database.py        # DB initialization
│   └── main.py
│
└── 🤖 care/                   # Telegram Bot (CareGenie)
    ├── handlers/              # symptom, prescription, reminder, report,
    │                          # hospital, pharmacy, encyclopedia, tips, help
    ├── database/              # SQLite DB manager
    ├── utils/                 # Gemini AI client, helpers
    ├── config.py              # Bot configuration
    └── main.py                # Bot entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Python** 3.10+
- **Node.js** 18+ & npm
- **Git**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mr-rithish/gen_ai.git
cd gen_ai
```

### 2️⃣ Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn sqlalchemy python-dotenv groq google-api-python-client httpx spoonacular

# Configure environment
cp .env.example .env
# Edit .env and add your API keys:
#   GROQ_API_KEY, YOUTUBE_API_KEY, SPOONACULAR_API_KEY, GEMINI_API_KEY

# Run the server
python main.py
```

> 🟢 Backend runs at **http://localhost:8000** — API docs at **http://localhost:8000/docs**

### 3️⃣ Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
# Create .env with:
#   VITE_API_URL=http://localhost:8000

# Run dev server
npm run dev
```

> 🟢 Frontend runs at **http://localhost:5173**

### 4️⃣ Telegram Bot Setup

```bash
cd care

# Create virtual environment
python -m venv .venv

# Activate it
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install python-telegram-bot google-generativeai

# Configure environment
cp .env.example .env
# Edit .env and add your keys:
#   TELEGRAM_BOT_TOKEN (get from @BotFather on Telegram)
#   GEMINI_API_KEY

# Run the bot
python main.py
```

> 🟢 Bot starts polling — message your bot on Telegram to interact!

---

## 🔑 API Keys Required

| Key | Source | Used By |
|-----|--------|---------|
| `GROQ_API_KEY` | [Groq Console](https://console.groq.com) | Backend AI Agent |
| `GEMINI_API_KEY` | [Google AI Studio](https://aistudio.google.com) | Telegram Bot + Backend |
| `YOUTUBE_API_KEY` | [Google Cloud Console](https://console.cloud.google.com) | Workout video search |
| `SPOONACULAR_API_KEY` | [Spoonacular](https://spoonacular.com/food-api) | Nutrition & meal plans |
| `TELEGRAM_BOT_TOKEN` | [@BotFather](https://t.me/BotFather) | Telegram Bot |

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Telegram Bot</strong></td>
</tr>
<tr>
<td>

- React 19
- Vite 7
- TailwindCSS 3
- Framer Motion
- Recharts
- Zustand
- Lucide Icons
- React Router 7
- Axios

</td>
<td>

- FastAPI
- SQLAlchemy + SQLite
- Groq (LLaMA)
- Google Gemini
- Spoonacular API
- YouTube Data API
- Google Calendar API
- JWT Auth

</td>
<td>

- python-telegram-bot
- Google Gemini 2.5 Flash
- Voice transcription
- Image analysis
- SQLite
- OpenStreetMap (Nominatim)

</td>
</tr>
</table>

---

## 📱 Multi-Platform Architecture

```
┌──────────────────────────────────────────────────────┐
│                    ArogyaMitra                        │
├──────────────┬──────────────────┬─────────────────────┤
│   🌐 Web     │    ⚙️ API        │   🤖 Telegram       │
│   React App  │    FastAPI       │   CareGenie Bot     │
│              │                  │                     │
│  Dashboard   │  /api/auth       │  /symptom           │
│  Workouts    │  /api/workouts   │  /prescription      │
│  Nutrition   │  /api/nutrition  │  /reminder           │
│  Progress    │  /api/progress   │  /report            │
│  Health AI   │  /api/health     │  /hospital          │
│  Calorie     │  /api/calories   │  /pharmacy          │
│  AROmi Chat  │  /api/calendar   │  /encyclopedia      │
│              │  /api/ai-coach   │  /tips              │
├──────────────┴──────────────────┴─────────────────────┤
│           Groq AI  ·  Gemini AI  ·  SQLite            │
└──────────────────────────────────────────────────────┘
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong><a href="https://github.com/mr-rithish">Rithish</a></strong>
</p>

<p align="center">
  <em>🌿 ArogyaMitra — Because your health deserves an intelligent friend.</em>
</p>
