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

<pre> 

├── constants/
│ └── configuration.ts
├── pages/
│ ├── pageObjects.ts
│ └── locators.ts
├── tests/
│ ├── TC01-addRemove.spec.ts
│ ├── TC02-basicAuth.spec.ts
│ └── TC03-brokenImages.spec.ts
├── utils/
│ ├── credentials.ts
│ └── generalUtils.ts
├── package.json
├── playwright.config.ts
└── README.md

</pre>

---

## 🛠️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/ravigitgit/playwright-the-internet-tests.git
   cd playwright-the-internet-tests

2. **Install project dependencies**
    ```bash
    npm install

3. **Install Playwright browsers with system dependencies**
    ```bash
    npx playwright install --with-deps

4. **Run Tests**
    ```bash
    npx playwright test
    # or
    npm run test

5. **Show HTML Report**
    ```bash
    npx playwright show-report
    # or
    npm run test:report

6. **View Allure Report (GitHub Pages Hosted)**
Allure test reports are automatically generated and deployed via GitHub Actions.

📎 Live Report URL:
👉 https://ravigitgit.github.io/playwright-the-internet-tests/