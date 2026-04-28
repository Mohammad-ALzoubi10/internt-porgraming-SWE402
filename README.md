# 💸 ExpenseFlow o

> A sleek, full-stack expense tracking application built with Node.js, Express, MongoDB, and vanilla JavaScript.

![ExpenseFlow Banner](./screenshots/banner.png)

---

## 📸 Screenshots

<div align="center">

### 🖥️ Dashboard Overview
<img width="973" height="677" alt="image" src="https://github.com/user-attachments/assets/6f215624-c34a-448f-908f-6ae67c32c081" />


### ➕ Adding a Transaction
<img width="450" height="427" alt="image" src="https://github.com/user-attachments/assets/5696a317-3b02-430d-a628-61ce080cfe17" />


### 📋 Transaction History
<img width="488" height="347" alt="image" src="https://github.com/user-attachments/assets/f49d3a17-adf7-4570-98df-5f464f43f7af" />


</div>

---

## ✨ Features

- 💰 **Real-time balance tracking** — income, expenses, and net balance calculated instantly
- 🗂️ **Category system** — organize transactions by Food, Transport, Health, Salary & more
- 🗑️ **Delete transactions** — remove any entry with one click
- 🎨 **Glassmorphism UI** — modern dark theme with animated background blobs
- ☁️ **Cloud database** — persistent storage with MongoDB Atlas
- 📱 **Responsive design** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Styling | Custom CSS with Glassmorphism |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Outfit) |

---

## 📁 Project Structure

```
expenseflow/
│
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css           # All styles & animations
│   └── script.js           # Frontend logic & API calls
│
├── screenshots/            # 📌 PUT YOUR SCREENSHOTS HERE (see guide below)
│   ├── banner.png
│   ├── dashboard.png
│   ├── add-transaction.png
│   └── transaction-history.png
│
├── .env                    # Environment variables (not committed)
├── server.js               # Express server & MongoDB connection
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/expenseflow.git
   cd expenseflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string_here
   ```

4. **Run the application**
   ```bash
   node server.js
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🔌 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/expenses` | Fetch all transactions (newest first) |
| `POST` | `/api/expenses` | Create a new transaction |
| `DELETE` | `/api/expenses/:id` | Delete a transaction by ID |

### POST Body Example
```json
{
  "title": "Weekly Groceries",
  "amount": -45.00,
  "category": "Food"
}
```
> 💡 Use **negative amounts** for expenses, **positive amounts** for income.

---

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Port the server runs on (default: 3000) |
| `MONGO_URI` | Your MongoDB Atlas connection string |

> ⚠️ **Never commit your `.env` file.** Make sure it's listed in `.gitignore`.

---

## 📌 Screenshot Guide — What to Capture & Where to Put Them

> Follow this guide to add the perfect screenshots to your README.

### 📂 Where to put them
Create a folder called `screenshots/` in your project root and place all images there.

### 🖼️ Which screenshots to take

| Filename | What to capture | How |
|----------|----------------|-----|
| `banner.png` | Full app on a wide screen — the whole page looking beautiful | Browser fullscreen, ~1400×800px |
| `dashboard.png` | The header + stats section (balance, income, expenses) with some data filled in | Crop the top half of the page |
| `add-transaction.png` | The "Add Transaction" form — ideally mid-fill with a sample entry typed in | Crop the left card |
| `transaction-history.png` | The transaction list with 5–8 mixed items (some positive/negative amounts) | Crop the right panel |

### ✅ Tips for great screenshots
- **Add sample data first** — empty screens look boring. Add 6–10 transactions before taking shots.
- **Use a mix of income and expenses** — so both green and red amounts are visible.
- **Use a screenshot tool** that captures at 2x resolution for sharp images (e.g. macOS Cmd+Shift+4, Windows Snipping Tool, or [Lightshot](https://app.prntscr.com/)).
- **Recommended size**: 1200–1400px wide for banner, ~700px wide for detail shots.
- **Optional**: Use [Shots.so](https://shots.so) or [Screely](https://screely.com) to wrap your screenshot in a browser mockup frame for a polished look.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ and JavaScript
</div>
