# Kết nối form Workshop với Google Sheets

1. Mở Google Sheet nhận đăng ký, chọn **Extensions → Apps Script**, xoá mã mặc định và dán nội dung từ `Code.gs`.
2. Chọn **Deploy → New deployment → Web app**. Đặt _Execute as_ là tài khoản Google của bạn; đặt quyền truy cập phù hợp với khách truy cập website (thường là _Anyone_ nếu form công khai), rồi bấm **Deploy**.
3. Sao chép URL Web App kết thúc bằng `/exec`, tạo file `.env.local` tại thư mục `mocxinh-fe` và thêm:

   ```env
   NEXT_PUBLIC_WORKSHOP_SHEET_ENDPOINT=https://script.google.com/macros/s/.../exec
   ```

4. Khởi động lại Next.js. Lần gửi hợp lệ đầu tiên sẽ tạo sheet `Workshop registrations` cùng các cột dữ liệu.

Không đưa service-account key hay thông tin đăng nhập Google vào frontend. Apps Script chạy dưới tài khoản Google đã triển khai là nơi duy nhất có quyền ghi vào Sheet.
