export const BRAND = {
  name: "Mộc Xinh",
  tagline: "Tái sinh từ thiên nhiên",
  description:
    "Giấy thủ công và sản phẩm sáng tạo sinh thái từ sợi cỏ tự nhiên, lá dứa, bã mía, cây sậy và giấy Dó — hành trình biến phụ phẩm thực vật bản địa thành tác phẩm thủ công độc bản.",
} as const;

export const NAV_LINKS = [
  { href: "#story", label: "Nguyên liệu & Quy trình" },
  { href: "#products", label: "Sản phẩm" },
  { href: "#workshop", label: "Workshop" },
  { href: "#values", label: "Giá trị bền vững" },
  { href: "#contact", label: "Liên hệ" },
] as const;

export const CORE_VALUES = [
  {
    title: "Thân thiện môi trường",
    description:
      "Tận dụng lá dứa, bã mía, cây sậy và cỏ tự nhiên theo quy trình cơ – sinh học khép kín, không hóa chất tẩy trắng.",
    icon: "leaf",
    stat: "0%",
    statLabel: "Hóa chất tẩy",
  },
  {
    title: "Nghệ thuật thủ công",
    description:
      "Mỗi sản phẩm mang kết cấu xơ sợi mộc mạc độc bản, bám màu nước và acrylic bền đẹp, không lem nhòe.",
    icon: "hand",
    stat: "100%",
    statLabel: "Thủ công",
  },
  {
    title: "Kinh tế tuần hoàn bản địa",
    description:
      "Tận dụng phụ phẩm thực vật tại Đồng bằng sông Cửu Long, tạo ra sản phẩm văn hóa – sáng tạo bền vững.",
    icon: "cycle",
    stat: "Bản địa",
    statLabel: "Nguồn xơ sợi",
  },
] as const;

export const PRODUCTS = [
  {
    id: "dong-ho-a5",
    name: "Tranh vẽ màu nước Đông Hồ (A5)",
    price: "Liên hệ / Workshop",
    tag: "Chủ đề Đông Hồ",
    texture: "Giấy lá dứa (dày, sần) hoặc giấy mía/sậy (cứng cáp), in viền nét đen",
    description:
      "Khổ A5 (14.8 × 21 cm). Bề mặt giấy bám màu nước Thiên Long và bút acrylic cực tốt, không lem nhòe hay rách bục; dùng tô màu sáng tạo, làm tranh treo tường, trang trí bàn học/làm việc hoặc quà tặng.",
    image: "/images/product-paper-a4.png",
  },
  {
    id: "notebook",
    name: "Sổ tay thủ công Mộc Xinh",
    price: "Liên hệ / Workshop",
    tag: "Đóng gáy dây thừng",
    texture: "Bìa & ruột từ giấy mía, giấy sậy; đóng gáy dây thừng mộc",
    description:
      "Kích thước 8 × 11.5 cm (10–15 trang). Gáy sổ đục lỗ đều đặn, lật mở dễ dàng; bìa trơn để tự do vẽ tô màu nước/acrylic cá nhân hóa mà không bị lem.",
    image: "/images/product-notebook.png",
  },
  {
    id: "do-lantern",
    name: "Đèn lồng giấy Dó Mộc Xinh",
    price: "Liên hệ / Workshop",
    tag: "Tích hợp LED",
    texture: "Khung que gỗ tự nhiên, 4 mặt bọc giấy Dó khổ A5, đèn LED bên trong",
    description:
      "Cao 21 × Rộng 14.8 cm. Khung gỗ vuông vức, 4 mặt giấy Dó dán căng phẳng có độ xuyên sáng ấm áp, bám màu vẽ tốt; dùng làm đèn ngủ, đèn trang trí góc chill hoặc quà tặng.",
    image: "/images/9e89018c-4900-43eb-870d-0c698709652a.jpg",
  },
  {
    id: "do-fan",
    name: "Quạt giấy Dó nghệ thuật",
    price: "Liên hệ / Workshop",
    tag: "Thủ công truyền thống",
    texture: "Khung nan tre/gỗ gấp xòe mượt mà, mặt quạt dán giấy Dó dai bền",
    description:
      "Giấy Dó chịu được độ ẩm khi vẽ màu nước và bút acrylic mà không biến dạng hay lem nhòe; dùng làm mát, đạo cụ chụp ảnh nghệ thuật, decor phòng truyền thống.",
    image: "/images/product-card.png",
  },
  {
    id: "bookmark",
    name: "Bookmark thủ công Mộc Xinh",
    price: "Liên hệ / Workshop",
    tag: "Quà tặng nhỏ xinh",
    texture: "Giấy lá dứa hoặc giấy mía/sậy đầm tay, gắn dây thừng/tua rua",
    description:
      "Kích thước 5 × 15 cm. Gia công cắt chuẩn viền thẳng gọn, đục lỗ tròn xỏ dây; chịu màu vẽ hai mặt không thấm lem sang mặt sau.",
    image: "/images/product-bookmark.png",
  },
] as const;

export const WORKSHOP_REGISTRATION_URL = "https://forms.gle/mocxinh-workshop-registration";
export const FANPAGE_URL = "https://www.facebook.com/cogiaymocxinh";

export const CONTACT = {
  address: "600 Nguyễn Văn Cừ, Phường An Bình, TP. Cần Thơ",
  email: "mocxinh.handmade@gmail.com",
  phone: "+84 837 638 149",
} as const;
