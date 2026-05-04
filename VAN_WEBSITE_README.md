# HƯỚNG DẪN SỬ DỤNG WEBSITE ÔN TẬP NGỮ VĂN 10

## 📚 CÁC FILE ĐÃ TẠO

### 1. vanck2.html - Trang chủ ôn tập
**Mô tả:** Trang chủ đầy đủ với 6 tabs ôn tập
- Tab 1: Đọc hiểu - Truyện ngắn
- Tab 2: Đọc hiểu - Tản văn
- Tab 3: Viết - Nghị luận xã hội
- Tab 4: Viết - Nghị luận văn học
- Tab 5: Kiến thức nền tảng
- Tab 6: Luyện tập & Đề thi

**Tính năng:**
- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ Tìm kiếm nội dung (Ctrl/Cmd + K)
- ✅ Tab navigation mượt mà
- ✅ Highlight kết quả tìm kiếm

### 2. van-nguoi-ganh-nuoc-thue.html - Trang chuyên sâu
**Mô tả:** Trang phân tích chi tiết tác phẩm "Người gánh nước thuê" của Võ Thị Hảo

**Nội dung:**
- Giới thiệu tác giả
- Bối cảnh văn học
- Phân tích nhân vật bà Diễm
- Biện pháp nghệ thuật
- Ý nghĩa tác phẩm
- Bài tập đọc hiểu có đáp án

### 3. van-hoa-tren-dao.html - Trang chuyên sâu
**Mô tả:** Trang phân tích chi tiết tác phẩm "Hoa trên đảo" của Lê Quang Trạng

**Nội dung:**
- Giới thiệu tác giả
- Bối cảnh sáng tác
- Phân tích nhân vật Hiên
- Biện pháp nghệ thuật
- Ý nghĩa chi tiết "gieo mồ hôi xuống Vọng là đảo sẽ trổ hoa"
- Bài tập đọc hiểu có đáp án

## 🚀 CÁCH SỬ DỤNG

### Cách 1: Mở trực tiếp bằng trình duyệt
1. Nhấp đúp vào file `.html` muốn mở
2. Website sẽ mở trong trình duyệt mặc định

### Cách 2: Sử dụng command line
```bash
# Mở trang chủ
cd "D:\python adb\onthi"
start vanck2.html

# Mở trang "Người gánh nước thuê"
start van-nguoi-ganh-nuoc-thue.html

# Mở trang "Hoa trên đảo"
start van-hoa-tren-dao.html
```

### Cách 3: Sử dụng local server (để phát triển)
```bash
# Sử dụng Python
cd "D:\python adb\onthi"
python -m http.server 8000

# Sau đó mở trình duyệt và truy cập:
# http://localhost:8000/vanck2.html
# http://localhost:8000/van-nguoi-ganh-nuoc-thue.html
# http://localhost:8000/van-hoa-tren-dao.html
```

## 🎨 TÍNH NĂNG CHÍNH

### 1. Responsive Design
- Tự động thích ứng với mọi kích thước màn hình
- Hỗ trợ Desktop, Tablet, Mobile

### 2. Dark/Light Mode
- Nút chuyển đổi theme ở góc trên bên phải
- Tự động lưu preference vào localStorage
- Màu sắc được tối ưu cho từng mode

### 3. Tìm kiếm
- Nhấn `Ctrl/Cmd + K` để focus vào ô tìm kiếm
- Highlight kết quả tìm kiếm
- Tìm kiếm qua tất cả các tabs

### 4. Tab Navigation
- Chuyển đổi giữa các tabs mượt mà
- Animation khi chuyển tabs
- Reset nội dung khi chuyển tabs

## 📝 NỘI DUNG CHÍNH

### Đọc hiểu - Truyện ngắn
- "Người gánh nước thuê" (Võ Thị Hảo)
- Phân tích nhân vật, biện pháp nghệ thuật
- Bài tập đọc hiểu có đáp án

### Đọc hiểu - Tản văn
- "Hoa trên đảo" (Lê Quang Trạng)
- Phân tích nhân vật, ý nghĩa tác phẩm
- Bài tập đọc hiểu có đáp án

### Viết - Nghị luận xã hội
- Đề bài: Dấn thân của thế hệ trẻ
- Dàn ý chi tiết
- Ví dụ bài viết mẫu
- Mẹo viết hay

### Viết - Nghị luận văn học
- Đề bài: Giải pháp hạn chế biến đổi khí hậu
- Dàn ý chi tiết
- Mẹo phân tích văn học

### Kiến thức nền tảng
- Các biện pháp tu từ
- Các thể loại văn học
- Kỹ năng đọc hiểu

### Luyện tập & Đề thi
- Đề luyện tập số 1 (có đáp án)
- Đề luyện tập số 2 (có đáp án)
- Ma trận đề thi
- Hướng dẫn chấm

## 🧪 TESTING

### Test Checklist
- [ ] Mở được website trên trình duyệt
- [ ] Responsive design hoạt động tốt
- [ ] Dark/Light mode hoạt động
- [ ] Tìm kiếm hoạt động
- [ ] Tab navigation hoạt động
- [ ] Nội dung hiển thị đúng
- [ ] Không có lỗi JavaScript

### Test trên các trình duyệt
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Test trên các thiết bị
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

## 🎯 MỤC TIÊU SỬ DỤNG

### Cho học sinh
- Ôn tập hiệu quả cho kỳ thi
- Hệ thống kiến thức đầy đủ
- Bài tập có đáp án tự kiểm tra

### Cho giáo viên
- Tài liệu tham khảo giảng dạy
- Bài tập mẫu có đáp án
- Kiến thức hệ thống hóa

### Cho phụ huynh
- Theo dõi nội dung học tập
- Hỗ trợ con ôn tập
- Hiểu kiến thức cần đạt

## 📱 TƯƠNG THÍCH

- **Browser:** Chrome, Firefox, Safari, Edge (phiên bản mới nhất)
- **Device:** Desktop, Laptop, Tablet, Mobile
- **OS:** Windows, macOS, Linux, iOS, Android
- **Resolution:** Tối thiểu 320px, khuyến nghị 1366px trở lên

## 🛠 KỸ THUẬT SỬ DỤNG

- **HTML5:** Cấu trúc website
- **CSS3:** Styling và responsive design
- **JavaScript:** Tương tác và functionality
- **Google Fonts:** Playfair Display, Source Serif 4
- **LocalStorage:** Lưu theme preference

## 📞 HỖ TRỢ

Nếu gặp vấn đề khi sử dụng:
1. Kiểm tra trình duyệt có hỗ trợ HTML5, CSS3, JavaScript
2. Xóa cache và cookies của trình duyệt
3. Thử mở trên trình duyệt khác
4. Kiểm tra kết nối internet (cho Google Fonts)

## 📝 GHI CHÚ

- Website được thiết kế để hoạt động offline (sau khi load lần đầu)
- Có thể tải về và sử dụng offline hoàn toàn
- Nội dung dựa trên tài liệu ôn tập Ngữ văn 10 HKII
- Có thể mở rộng thêm nội dung trong tương lai

## 🎓 NGUỒN TÀI LIỆU

- Giáo trình Ngữ văn 10, Bộ Giáo dục và Đào tạo
- VĂN-10-ĐỀ-PHÁT-TRIỂN-TỪ-MA-TRẬN.docx
- VĂN-10-ĐỀ-PHÁT-TRIỂN-TỪ-MA-TRẬN-1.docx
- VĂN10-MA-TRẬN-CUỐI-KÌ-II-và-HDC-CHUẨN.docx
- VĂN-10-MA-TRẬN-ĐỀ-THAM-KHẢO-CUỐI-KỲ-II.docx

---

**Chúc bạn ôn tập hiệu quả! 📚✨**