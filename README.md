# 📅 Age Calculator

<div align="center">

![Project Banner](public/assets/images/preview.jpg)

A professional application for calculating age with high accuracy and complete validation

[![Live Demo](https://img.shields.io/badge/Live_Demo-View%20Site-brightgreen?style=for-the-badge)](https://arvin-m-dev.github.io/Age-Calculator/)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-blue?style=for-the-badge)](https://www.frontendmentor.io)

</div>

---

### 📸 Screenshots

<div align="center">
  <img src="public/assets/images/preview.jpg" alt="Age Calculator" width="100%" />
</div>

---

### ✨ Features

- ✅ Accurate age calculation (years, months, days)
- ✅ Comprehensive date validation
- ✅ Leap year support
- ✅ Responsive design (Desktop-first)
- ✅ Clear error messages
- ✅ Fast performance with Vanilla JS

---

### 🛠️ Tech Stack

- HTML5 Semantic
- CSS3 (Custom Properties, BEM Methodology)
- Vanilla JavaScript (ES6+)
- Vite as Build Tool
- GitHub Pages for Deployment

---

### 🎯 Key Implementation

**Validation Logic:**
- Check for empty fields
- Validate day (1-31) and month (1-12)
- Identify leap years with accurate formula
- Calculate age with proper borrowing handling

**Date Calculation Algorithm:**
```javascript
current_day - birth_day = days
if (days < 0) {
  days += daysInPreviousMonth
  months--
}
if (months < 0) {
  months += 12
  years--
}
```

---

### 🙏 Credits

- Challenge by [Frontend Mentor](https://www.frontendmentor.io?ref=challenge)
- Design inspiration from Frontend Mentor

---

Coded with ❤️ by [Arvin Dev](https://github.com/Arvin-M-Dev)
