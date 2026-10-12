# Thiết lập thanh toán Workshop

Luồng hiện tại là **một email đã xác minh chỉ mua một ghế**, thanh toán toàn bộ giá vé qua PayOS. Hệ thống chỉ xác nhận vé khi webhook PayOS có chữ ký hợp lệ; trang PayOS trả về không phải là bằng chứng thanh toán.

## 1. Tạo dữ liệu Supabase

1. Tạo một dự án Supabase và mở SQL Editor.
2. Sửa giá vé, sức chứa và ngày giờ ở cuối [`supabase/workshop-payments.sql`](../supabase/workshop-payments.sql).
3. Chạy toàn bộ file SQL một lần. Không chạy lại phần `create type` trên một database đã có kiểu dữ liệu này.
4. Sao chép Project URL và `service_role` key. Key này chỉ được đặt trong môi trường server, không được đưa vào biến `NEXT_PUBLIC_*`.

## 2. Cấu hình email OTP

Tạo API key tại Resend, xác thực tên miền gửi mail, rồi cấu hình `RESEND_API_KEY` và `EMAIL_FROM`. `EMAIL_FROM` phải dùng một domain đã được Resend xác thực.

## 3. Cấu hình PayOS

Tạo Payment Channel trong PayOS và thêm các giá trị `PAYOS_CLIENT_ID`, `PAYOS_API_KEY`, `PAYOS_CHECKSUM_KEY`. Khi website đã có domain HTTPS công khai, xác nhận webhook sau trong PayOS:

```text
https://YOUR_DOMAIN/api/payments/payos/webhook
```

PayOS sẽ gửi dữ liệu mẫu lúc xác nhận URL. Endpoint đã kiểm tra chữ ký nên không được bỏ qua bước này.

## 4. Biến môi trường và triển khai

Sao chép `.env.example` thành `.env.local`, điền toàn bộ giá trị và đặt `APP_URL` thành domain triển khai thực tế (không có dấu `/` cuối). `WORKSHOP_SLUG` phải khớp với dòng trong bảng `workshops`.

Triển khai trên một nền tảng hỗ trợ Next.js Route Handlers (Vercel là lựa chọn phù hợp). Static export không hỗ trợ các POST endpoint này.

## Kiểm thử trước khi mở bán

1. Gửi OTP, kiểm tra email đến và mã hết hạn sau năm phút.
2. Xác minh OTP, tạo payment link và hủy thanh toán để xem màn hình trạng thái.
3. Thanh toán một đơn test; kiểm tra webhook chuyển bản ghi `workshop_registrations.status` sang `PAID`.
4. Gửi lại webhook cùng một đơn: trạng thái phải không đổi.
5. Dùng cùng email đăng ký lần nữa: hệ thống phải từ chối khi vé đã `PAID`.
6. Dùng các email khác để lấp đầy sức chứa; email tiếp theo phải nhận lỗi hết chỗ.
