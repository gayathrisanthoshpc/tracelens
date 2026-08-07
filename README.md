# 🔍 TraceLens

## AI-Powered Digital Evidence Intelligence Platform

> Transforming fragmented digital evidence into explainable investigation intelligence.

TraceLens is an **Agentic AI-powered digital evidence intelligence platform** that assists investigators in analyzing digital evidence through a collaborative multi-agent workflow.

Instead of manually reviewing scattered evidence, TraceLens processes uploaded evidence, extracts key entities, reconstructs timelines, identifies relationships, and generates explainable investigation reports.

> **Current Status:** Prototype / MVP built as a proof of concept.

---

## 🚨 Problem Statement

Modern investigations involve large volumes of digital evidence spread across multiple sources such as:

- Chat conversations
- Documents
- Digital records
- Investigation logs

Manual investigation is often:

- Time-consuming
- Difficult to scale
- Prone to missing hidden relationships

TraceLens aims to simplify this process using Agentic AI.

---

## 💡 Solution

TraceLens orchestrates multiple specialized AI agents that work together to transform raw evidence into structured investigation intelligence.

The platform helps investigators answer:

- Who is involved?
- What happened?
- When did events occur?
- How are entities connected?
- Why is the evidence important?

---

## 🤖 Current MVP Workflow

```text
Evidence Upload
      │
      ▼
Evidence Agent
      │
      ▼
Entity Extraction Agent
      │
      ▼
Timeline Reconstruction Agent
      │
      ▼
Relationship Analysis
      │
      ▼
Report Generation
      │
      ▼
Investigation Dashboard
```

---

## ✨ Current Features

- 📂 Upload digital evidence
- 🤖 Multi-agent evidence processing
- 👤 Entity extraction
- ⏳ Timeline reconstruction
- 🔗 Relationship graph visualization
- 📊 Explainable investigation report
- 💾 Case memory storage

---

## 🏗️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Python
- FastAPI

### AI

- Agentic AI workflow
- Multi-agent evidence processing

### Storage

- JSON-based case memory

---

## 📁 Project Structure

```text
TraceLens/
├── backend/
│   ├── agents/
│   ├── data/
│   ├── memory/
│   └── api.py
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 🚀 Running the Project

### Backend

```bash
cd backend
python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

uvicorn api:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

## 🎥 Demo

Demo Video:

https://drive.google.com/file/d/1CMiR_7Vt551mylnDThR57ofsRjOSJrJN/view?usp=drive_link

---

## 🔮 Future Roadmap

Future enhancements include:

- Image and video evidence analysis
- Voice transcript processing
- Cross-case intelligence
- Knowledge graph integration
- Advanced AI reasoning
- Cloud deployment

---

## 📌 Project Status

**Prototype / MVP**

This repository contains the initial proof of concept demonstrating the core Agentic AI investigation workflow. Future versions will expand support for additional evidence types and more advanced investigation capabilities.

---

## 👩‍💻 Developer

**Gayathri Santhosh**

B.Tech Information Technology  
Cochin University of Science and Technology (CUSAT)

GitHub: https://github.com/gayathrisanthoshpc

---

⭐ If you found this project interesting, consider giving it a star!