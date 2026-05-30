export const BRAND = {
  name: "Mộc Xinh",
  tagline: "Tái sinh từ thiên nhiên",
  description:
    "Giấy thủ công từ cỏ dại và sợi tự nhiên — hành trình biến những điều mộc mạc của thiên nhiên thành từng tờ giấy thân thiện và gần gũi.",
} as const;

export const NAV_LINKS = [
  { href: "#story", label: "Câu chuyện" },
  { href: "#products", label: "Sản phẩm" },
  { href: "#values", label: "Giá trị bền vững" },
  { href: "#contact", label: "Liên hệ" },
] as const;

export const CORE_VALUES = [
  {
    title: "Thân thiện môi trường",
    description:
      "Biến cỏ dại thành tài nguyên, giảm thiểu hóa chất và nhựa trong đời sống hàng ngày.",
    icon: "leaf",
    stat: "0%",
    statLabel: "Hóa chất",
  },
  {
    title: "Nghệ thuật thủ công",
    description: "Mỗi tờ giấy là kết tinh của đôi tay nghệ nhân — không hai tờ giống nhau.",
    icon: "hand",
    stat: "100%",
    statLabel: "Thủ công",
  },
  {
    title: "Giảm lãng phí nông nghiệp",
    description:
      "Tận dụng phụ phẩm từ vườn trái cây, góp phần kinh tế tuần hoàn cho nông dân địa phương.",
    icon: "cycle",
    stat: "Bản địa",
    statLabel: "Nguồn gốc",
  },
] as const;

export const PRODUCTS = [
  {
    id: "paper-a4",
    name: "Giấy Handmade A4",
    price: "85.000đ",
    tag: "Bestseller",
    texture: "Sợi cỏ dại thô, bề mặt grain tự nhiên",
    description: "Kích thước 210×297mm, 180-300gsm, phân hủy sinh học.",
    image: "/images/product-paper-a4.png",
  },
  {
    id: "notebook",
    name: "Sổ Tay Eco",
    price: "120.000đ",
    tag: "Mới",
    texture: "Bìa cứng, ruột giấy handmade, đóng chỉ thủ công",
    description: "32 trang giấy handmade A5, bìa cứng, dây bookmark tự nhiên.",
    image: "/images/product-notebook.png",
  },
  {
    id: "bookmark",
    name: "Bookmark Eco",
    price: "25.000đ",
    tag: "Thủ công",
    texture: "Ép sợi, viền cắt thủ công",
    description: "Đánh dấu sách với vẻ đẹp tự nhiên — mỗi chiếc là tác phẩm độc đáo.",
    image: "/images/product-bookmark.png",
  },
  {
    id: "card",
    name: "Thiệp Eco Handmade",
    price: "35.000đ",
    tag: "Eco Gift",
    texture: "In khoen, phủ sợi cỏ mịn, kèm phong bì kraft",
    description: "Thiệp từ giấy cỏ, kèm phong bì kraft.",
    image: "/images/product-card.png",
  },
] as const;

export const CONTACT = {
  address: "600 Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ",
  email: "mocxinh.handmade@gmail.com",
  phone: "+84 837 638 149",
} as const;
