# Design System Documentation

## 📋 Overview

Design system này được trích xuất từ `toanck2.html` - file gốc làm single source of truth cho toàn bộ project.

---

## 🎨 Color System

### Primary Colors
```css
--bg-primary: #F8F9FA        /* Main background */
--bg-surface: #ffffff        /* Card/surface background */
--bg-surface2: #f1f3f5       /* Secondary surface */
--text-primary: #212529      /* Main text */
--text-secondary: #6c757d    /* Secondary text */
--text-muted: #9b94b8        /* Muted text */
```

### Accent Colors
```css
--accent-blue: #03A9F4       /* Primary actions */
--accent-pink: #E91E63       /* Highlights */
--accent-green: #4CAF50      /* Success states */
--accent-orange: #FF5722     /* Warnings */
--accent-amber: #FFC107      /* Notes */
--accent-yellow: #e8c547     /* Math formulas */
--accent-purple: #7c6af7     /* Tabs, headers */
--accent-red: #f76a6a        /* Errors, alerts */
```

### Border Colors
```css
--border-primary: #dee2e6    /* Main borders */
--border-secondary: #e9ecef  /* Secondary borders */
--border-tertiary: #f1f3f5   /* Subtle borders */
```

### Dark Mode Colors
```css
--bg-primary: #0f0e17
--bg-surface: #1a1828
--bg-surface2: #221f35
--text-primary: #ede9f6
--text-secondary: #9b94b8
--text-muted: #6b6b7b
```

---

## 🔤 Typography System

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
--font-display: 'Playfair Display', Georgia, serif
--font-content: 'Source Serif 4', Georgia, serif
--font-mono: 'Fira Code', 'Courier New', monospace
```

### Font Sizes (Responsive)
```css
h1: clamp(28px, 5vw, 42px)
h2: clamp(24px, 4vw, 32px)
h3: clamp(20px, 3vw, 24px)
h4: clamp(18px, 2.5vw, 20px)
body: 16px
```

### Font Weights
```css
Regular: 300
Normal: 400
Medium: 500
Semibold: 600
Bold: 700
```

---

## 📏 Spacing System

```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 24px
--spacing-2xl: 32px
```

### Usage Guidelines
- **xs**: Small gaps, tight spacing
- **sm**: Default spacing between related elements
- **md**: Moderate spacing between sections
- **lg**: Comfortable spacing for content
- **xl**: Major section spacing
- **2xl**: Large spacing for major divisions

---

## 📦 Layout System

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
}
```

### Grid System
```css
.grid2 { /* 2 columns */ }
.grid3 { /* 3 columns */ }
.grid4 { /* 4 columns */ }
```

### Flexbox Components
```css
.tabs { /* Horizontal tabs */ }
.card { /* Card layout */ }
```

---

## 🧱 Component Library

### 1. Header Component
```html
<header>
  <div class="badge">Ôn tập cuối kỳ II</div>
  <h1>Toán 10 – Tổng Hợp Công Thức</h1>
  <p class="subtitle">Thống kê · Tổ hợp · Xác suất · Đường thẳng · Đường tròn</p>
</header>
```

**Features:**
- Gradient background
- Decorative radial gradients
- Responsive padding
- Badge for categorization

### 2. Navigation Tabs
```html
<nav class="tabs-nav" role="tablist">
  <button class="tab-btn active" onclick="switchTab('thongke', this)">📊 Thống kê</button>
  <button class="tab-btn" onclick="switchTab('tohop', this)">🎲 Tổ hợp</button>
  <a href="index.html" class="tab-btn">🏠HOME</a>
</nav>
```

**Features:**
- Active state styling
- Hover effects
- Responsive layout
- Icon support

### 3. Section Component
```html
<div class="section">
  <div class="section-title">
    <span class="icon icon-yellow">📊</span>
    I. Đại lượng đo xu hướng trung tâm
  </div>
  <div class="subsection">
    <div class="subsection-title">1. Số trung bình cộng (Mean) – \(\bar{x}\)</div>
    <p>Công thức thông thường:</p>
    <div class="formula-box yellow">\[\bar{x} = \dfrac{x_1 + x_2 + \cdots + x_n}{n}\]</div>
  </div>
</div>
```

**Features:**
- Icon support
- Nested subsections
- MathJax integration
- Color-coded variants

### 4. Formula Box Component
```html
<div class="formula-box yellow">
  \[\bar{x} = \dfrac{x_1 + x_2 + \cdots + x_n}{n}\]
</div>
```

**Variants:**
- `.formula-box` - Default (purple)
- `.formula-box.yellow` - Yellow accent
- `.formula-box.red` - Red accent

**Features:**
- MathJax support
- Horizontal scroll for long formulas
- Responsive font sizing
- Color-coded borders

### 5. Table Component
```html
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Ký hiệu</th>
        <th>Tên</th>
        <th>Vị trí</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>\(Q_1\)</td>
        <td>Tứ phân vị thứ nhất</td>
        <td>Trung vị của nửa dưới</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Features:**
- Responsive wrapper
- Alternating row colors
- Hover effects
- Purple header background

### 6. Note Box Component
```html
<div class="note">
  <strong>⚠ Lưu ý:</strong> Mốt <em>không phải</em> là tần số lớn nhất, mà là <strong>giá trị</strong> tương ứng với tần số đó.
</div>

<div class="note-red">
  <strong>⚠ Câu sai hay gặp:</strong> \(P(A) \cdot P(\bar{A}) = 1\) → <strong>SAI!</strong> Đúng phải là \(P(A) + P(\bar{A}) = 1\)
</div>
```

**Variants:**
- `.note` - Default (yellow)
- `.note-red` - Red for errors

### 7. Card Small Component
```html
<div class="card-small">
  <div class="card-small-title">Hoán vị \(n\) phần tử</div>
  <div class="formula-box" style="margin:8px 0">
    \[P_n = n!\]
  </div>
  <p style="font-size:13px">Sắp xếp <em>tất cả</em> \(n\) phần tử, có phân biệt thứ tự.</p>
</div>
```

**Features:**
- Compact layout
- Formula integration
- Title styling

### 8. Icon Component
```html
<span class="icon icon-yellow">📊</span>
<span class="icon icon-purple">📏</span>
<span class="icon icon-red">🎲</span>
<span class="icon icon-green">💡</span>
```

**Variants:**
- `.icon-yellow` - Yellow background
- `.icon-purple` - Purple background
- `.icon-red` - Red background
- `.icon-green` - Green background

### 9. Badge Component
```html
<div class="badge">Ôn tập cuối kỳ II</div>
```

**Features:**
- Uppercase text
- Purple background
- Rounded corners
- Letter spacing

### 10. Theme Toggle Component
```html
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark/light mode">
  <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>
</button>
```

**Features:**
- Fixed positioning
- Icon switching
- Smooth transitions
- Dark/light mode support

### 11. Search Component
```html
<div class="search-container">
  <input type="text" class="search-input" id="search-input" placeholder="Tìm kiếm công thức (Ctrl/Cmd + K)..." oninput="searchContent()">
  <span class="search-icon">🔍</span>
</div>
```

**Features:**
- Full width
- Focus states
- Icon indicator
- Keyboard shortcut support

---

## 🎯 Border Radius System

```css
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 8px
--radius-xl: 12px
--radius-full: 9999px
```

### Usage Guidelines
- **sm**: Small elements, tags
- **md**: Buttons, inputs
- **lg**: Cards, containers
- **xl**: Large cards, headers
- **full**: Pills, badges, circular elements

---

## 🌊 Shadow System

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
```

### Usage Guidelines
- **sm**: Subtle elevation
- **md**: Cards, buttons
- **lg**: Hover states
- **xl**: Modals, popovers

---

## ⚡ Transition System

```css
--transition-fast: 0.15s ease
--transition-base: 0.2s ease
--transition-slow: 0.3s ease
```

### Usage Guidelines
- **fast**: Micro-interactions
- **base**: Standard transitions
- **slow**: Major state changes

---

## 🎬 Animation System

### Available Animations
```css
@keyframes fadeIn
@keyframes slideIn
@keyframes scaleIn
@keyframes pulse
```

### Usage Examples
```css
.card { animation: fadeIn 0.5s ease; }
.btn:hover { animation: pulse 0.3s ease; }
```

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

### Mobile-First Approach
- Default styles for mobile
- Media queries for larger screens
- Fluid typography with clamp()

---

## 🔧 Utility Classes

### Text Alignment
```css
.text-center, .text-left, .text-right
```

### Spacing Utilities
```css
.mt-0 to .mt-4  /* Margin top */
.mb-0 to .mb-4  /* Margin bottom */
.p-0 to .p-4    /* Padding */
```

### Visibility
```css
.hidden, .visible, .invisible
```

---

## 🧪 MathJax Integration

### Configuration
```javascript
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]']]
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea']
  }
};
```

### Usage Examples
```html
<!-- Inline math -->
<p>Công thức: \(\bar{x} = \dfrac{x_1 + x_2}{n}\)</p>

<!-- Display math -->
<div class="formula-box">
  \[\bar{x} = \dfrac{x_1 + x_2 + \cdots + x_n}{n}\]
</div>
```

---

## 🌙 Dark Mode Implementation

### Toggle Function
```javascript
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}
```

### Theme Persistence
- Uses localStorage
- Persists across sessions
- Automatic loading on page load

---

## 🎯 Best Practices

### 1. Component Usage
- Always use semantic HTML
- Apply appropriate classes from design system
- Avoid inline styles
- Use CSS variables for theming

### 2. Responsive Design
- Use clamp() for fluid typography
- Test on multiple breakpoints
- Ensure touch targets are 44px minimum
- Optimize for mobile first

### 3. Accessibility
- Use semantic elements
- Provide alt text for images
- Ensure color contrast ratios
- Support keyboard navigation

### 4. Performance
- Minimize CSS specificity
- Use efficient selectors
- Optimize animations
- Lazy load when appropriate

---

## 📚 File Structure

```
project/
├── styles.css              # Global design system
├── components.css          # Component-specific styles
├── design.md              # This documentation
├── toanck2.html           # Design system source
├── index.html             # Physics page
├── sinhck2.html           # Biology page
├── vlck2.html             # Physics CK2 page
└── vieclm.html            # Home page
```

---

## 🔄 Version Control

### Current Version: 1.0.0
- Based on: toanck2.html
- Last updated: 2026-05-02
- Maintainer: Design System Team

---

## 🚀 Getting Started

### 1. Include CSS
```html
<link rel="stylesheet" href="styles.css">
```

### 2. Use Components
```html
<div class="container">
  <header>
    <div class="badge">Category</div>
    <h1>Title</h1>
  </header>
  <nav class="tabs-nav">
    <button class="tab-btn active">Tab 1</button>
    <button class="tab-btn">Tab 2</button>
  </nav>
  <div class="section">
    <div class="section-title">Section Title</div>
    <div class="subsection">
      <div class="formula-box">\[E = mc^2\]</div>
    </div>
  </div>
</div>
```

### 3. Add Functionality
```html
<script>
  // Theme toggle
  function toggleTheme() { /* ... */ }

  // Tab switching
  function switchTab(id, btn) { /* ... */ }

  // Search functionality
  function searchContent() { /* ... */ }
</script>
```

---

## 📞 Support

For questions or issues with the design system:
1. Check this documentation first
2. Refer to toanck2.html as the source of truth
3. Test changes across multiple pages
4. Validate responsive behavior

---

## 🎯 Design Principles

1. **Consistency**: Use the same styles across all pages
2. **Accessibility**: Ensure WCAG AA compliance
3. **Performance**: Optimize for fast loading
4. **Maintainability**: Keep code clean and documented
5. **Scalability**: Design for future growth

---

*This design system is maintained as a single source of truth. All changes should be made to toanck2.html first, then propagated to other files.*