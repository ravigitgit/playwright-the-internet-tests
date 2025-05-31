# 🎭 playwright-the-internet-tests

Automated UI test suite using [Playwright](https://playwright.dev/) for the test application: [the-internet.herokuapp.com](https://the-internet.herokuapp.com/).

This project covers various interactive features of the Herokuapp test site using modern, maintainable Playwright tests.

---

## 🚀 Features Tested

- ✅ Page Title Validation
- ✅ Add/Remove Elements
- ✅ Basic Authentication (via `httpCredentials`)
- ✅ Broken Images Detection
- ✅ Button Visibility and Click Actions
- ✅ Element Count Assertions

---

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript 
- Node.js
- GitHub Actions

---

## 📂 Project Structure

├── tests/
│ ├── addRemove.spec.ts
│ ├── basicAuth.spec.ts
│ └── brokenImages.spec.ts
├── constants/
│ └── configuration.ts
├── package.json
└── README.md

---

## 🛠️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/ravigitgit/playwright-the-internet-tests.git
   cd playwright-the-internet-tests

2. **Install Dependencies**
    ```bash
    npm install

3. **Run Tests**
    ```bash
    npx playwright test

4. **Show HTML Report**
    ```bash
    npx playwright show-report
