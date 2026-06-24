# 📅 محاسبه کننده سن

<div align="center">

![Project Banner](public/assets/images/preview.jpg)

[![Live Demo](https://img.shields.io/badge/Live_Demo-مشاهده%20سایت-brightgreen?style=for-the-badge)](https://arvin-m-dev.github.io/Age-Calculator/)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-چالش-blue?style=for-the-badge)](https://www.frontendmentor.io)

</div>

---

### 📸 اسکرین‌شات‌ها

<div align="center">
  <img src="public/assets/images/preview.jpg" alt="محاسبه کننده سن" width="100%" />
</div>

---

### ✨ ویژگی‌ها

- ✅ محاسبه دقیق سن (سال، ماه، روز)
- ✅ Validation جامع تاریخ
- ✅ پشتیبانی سال‌های کبیسه
- ✅ طراحی واکنش‌پذیر (Desktop-first)
- ✅ پیام‌های خطای واضح
- ✅ عملکرد سریع با Vanilla JavaScript

---

### 🛠️ تکنولوژی‌های استفاده‌شده

- HTML5 معنایی
- CSS3 (متغیرهای سفارشی، BEM Methodology)
- Vanilla JavaScript (ES6+)
- Vite به عنوان Build Tool
- GitHub Pages برای استقرار

---

### 🎯 پیاده‌سازی کلیدی

**منطق Validation:**
- بررسی فیلدهای خالی
- تایید روز (1-31) و ماه (1-12)
- شناسایی سال‌های کبیسه با فرمول دقیق
- محاسبه سن با handling قرض‌گرفتن

**الگوریتم محاسبه تاریخ:**
```
روز = روز فعلی - روز تولد
اگر (روز < 0) {
  روز += روز‌های ماه قبل
  ماه--
}
اگر (ماه < 0) {
  ماه += 12
  سال--
}
```

---

### 🙏 قدردانی‌ها

- چالش توسط [Frontend Mentor](https://www.frontendmentor.io?ref=challenge)
- الهام‌گیری طراحی از Frontend Mentor

---

ساخته شده با ❤️ توسط [Arvin Dev](https://github.com/Arvin-M-Dev)
