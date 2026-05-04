<div align="center">
  <img src="https://img.icons8.com/color/96/000000/graduation-cap.png" alt="Graduation Cap"/>
  <h1>🎓 HỆ THỐNG ÔN THI TỔNG HỢP - HKII</h1>
  <p><i>Nền tảng học tập trực tuyến hiện đại, bám sát ma trận đề kiểm tra dành cho học sinh THPT.</i></p>

  <p>
    <a href="#-mục-tiêu-dự-án">Mục Tiêu</a> •
    <a href="#-tính-năng-nổi-bật">Tính Năng</a> •
    <a href="#-các-môn-học-tích-hợp">Môn Học</a> •
    <a href="#️-công-nghệ-sử-dụng">Công Nghệ</a>
  </p>
</div>

---

## 🎯 Mục Tiêu Dự Án

**Dự án Ôn Thi** ra đời với sứ mệnh cung cấp một giải pháp học tập trực tuyến nhanh chóng, hệ thống và chuẩn xác nhất cho học sinh trong giai đoạn chạy nước rút cuối Học Kỳ 2. Hệ thống được xây dựng bám sát 100% ma trận đề kiểm tra thực tế, giúp học sinh:
- **Tiết kiệm thời gian:** Tổng hợp sẵn kiến thức cốt lõi, không cần lật tìm sách vở dài dòng.
- **Dễ dàng tra cứu:** Công cụ tìm kiếm tức thời thông minh giúp tra cứu công thức, lý thuyết chỉ trong 1 giây.
- **Trải nghiệm tối ưu:** Giao diện Dark/Light mode chống mỏi mắt khi cày đêm, tối ưu cho cả giao diện điện thoại lẫn máy tính.

---

## ✨ Tính Năng Nổi Bật

- 🌓 **Giao diện sáng/tối (Light/Dark Mode):** Tự động ghi nhớ tùy chọn của người dùng, giúp bảo vệ thị lực.
- 🔍 **Tìm kiếm siêu tốc:** Thanh tìm kiếm hiện đại hỗ trợ tìm và bôi vàng (highlight) từ khóa ngay trong các thẻ kiến thức (Hỗ trợ phím tắt `Ctrl + K`).
- 📱 **Responsive 100%:** Thiết kế *Glassmorphism* (hiệu ứng kính mờ) hiện đại, hiển thị mượt mà trên mọi thiết bị.
- 📑 **Hệ thống Tab thông minh:** Phân loại kiến thức theo từng chương/chủ đề trực quan, dễ dàng chuyển đổi qua lại mà không cần tải lại trang.
- 🧪 **Công thức chuẩn xác:** Tích hợp MathJax hiển thị các công thức Toán, Lý, Hóa phức tạp dưới dạng LaTeX cực kỳ sắc nét.
- 🛠️ **Thực hành & Vận dụng:** Chuyên mục riêng biệt hỗ trợ trả lời các câu hỏi vận dụng cao và giải quyết tình huống thực tế.

---

## 📚 Các Môn Học Tích Hợp

Hệ thống bao phủ toàn diện các môn Khoa học Tự nhiên và Ngoại ngữ trọng tâm:

1. 📐 **Toán Học (`toanck2.html`)**: Đại số tổ hợp, Xác suất, Thống kê, Hình học tọa độ Oxyz, Phương trình đường tròn/đường thẳng...
2. ⚡ **Vật Lý (`vlck2.html`)**: Công suất, Hiệu suất, Động lượng, Năng lượng, Chuyển động tròn đều và Bài tập thực hành.
3. 🧪 **Hóa Học (`hoack2.html`)**: Động hóa học, Tốc độ phản ứng, Năng lượng hóa học (Enthalpy)...
4. 🧬 **Sinh Học (`sinhck2.html`)**: Chu kỳ tế bào, Vi sinh vật, Sinh sản vi sinh vật và Ứng dụng thực tiễn...
5. 🇬🇧 **Tiếng Anh (`english.html`)**: Ngữ pháp trọng tâm, Từ vựng chuyên đề...

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Core:** HTML5, CSS3 (Vanilla với biến CSS `--var`), JavaScript (ES6).
- **Thiết kế UI/UX:** Phong cách *Glassmorphism* kết hợp *Material Design*.
- **Toán học & Công thức:** Thư viện `MathJax` qua CDN.
- **DevOps/Testing:** Playwright, Node.js, Pixelmatch (cho hệ thống tự động so sánh và đồng bộ giao diện).

---

<details>
<summary><b>⚙️ Tài Liệu Kỹ Thuật (Dành cho Developer)</b></summary>
<br>

# Design System Automation

🎨 Automated design system based on `toanck2.html` with visual comparison and auto-fix capabilities.

## 🚀 Features

- ✅ **Single Source of Truth**: `toanck2.html` as the design system reference
- 🎨 **Component Library**: Reusable components with consistent styling
- 📊 **Visual Testing**: Automated screenshot comparison using Playwright
- 🔍 **Pixel Analysis**: Detailed difference analysis with pixelmatch
- 📝 **Auto-fix Suggestions**: Intelligent recommendations for fixing issues
- 🌙 **Dark Mode Support**: Built-in theme switching
- 📱 **Responsive Design**: Mobile-first approach with fluid typography

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Or use the setup script
npm run setup
```

## 📁 Project Structure

```
project/
├── toanck2.html           # Design system source (SINGLE SOURCE OF TRUTH)
├── styles.css             # Global design system
├── components.css         # Component-specific styles
├── design.md              # Design system documentation
├── compare.js             # Visual comparison system
├── package.json           # Dependencies and scripts
├── README.md              # This file
├── screenshots/           # Generated screenshots
├── output/                # Generated reports
└── index.html             # Other pages to compare
```

*(Chi tiết về cách so sánh UI, components layout có thể xem thêm trong mã nguồn automation của dự án).*
</details>

<br>

<div align="center">
  <p>Được xây dựng với ❤️ và ☕ để chuẩn bị tốt nhất cho mùa thi!</p>
</div>