// ─── Types ────────────────────────────────────────────────────────────────────
export type Lang = "vi" | "en";

export type TranslationKey = keyof typeof translations.vi;

// ─── Translations ─────────────────────────────────────────────────────────────
export const translations = {
  vi: {
    // ── Nav ────────────────────────────────────────────────────────────────────
    nav_about: "Về dự án",
    nav_team: "Thành viên",
    nav_story: "Câu chuyện",
    nav_products: "Sản phẩm",
    nav_values: "Giá trị bền vững",
    nav_contact: "Liên hệ",
    nav_contact_btn: "Liên hệ",
    nav_contact_mobile: "Liên hệ ngay",

    // ── About ──────────────────────────────────────────────────────────────────
    about_badge: "Về dự án",
    about_title_1: "Mộc Xinh —",
    about_title_italic: "Sinh ra từ cỏ dại",
    about_subtitle:
      "Một dự án khởi nghiệp sinh viên với khát vọng biến những điều bình dị của thiên nhiên thành sản phẩm có giá trị, lan tỏa lối sống xanh bền vững.",
    about_desc_1:
      "Mộc Xinh ra đời năm 2026 từ ý tưởng của nhóm sinh viên Đại học FPT Cần Thơ — những người tin rằng cỏ dại hoàn toàn có thể trở thành tờ giấy nghệ thuật đẹp đẽ và thân thiện với môi trường.",
    about_desc_2:
      "Chúng tôi không chỉ tạo ra giấy — chúng tôi tạo ra một câu chuyện: biến phế phẩm nông nghiệp thành sản phẩm sáng tạo, góp phần vào kinh tế tuần hoàn và nâng cao ý thức bảo vệ môi trường trong cộng đồng.",
    about_mission_label: "Sứ mệnh",
    about_mission: "Tái sinh thiên nhiên qua từng tờ giấy thủ công",
    about_vision_label: "Tầm nhìn",
    about_vision: "Trở thành thương hiệu giấy thủ công xanh tiêu biểu tại Đồng bằng sông Cửu Long",
    about_founded_label: "Năm thành lập",
    about_founded: "2026",
    about_location_label: "Địa điểm",
    about_location: "Cần Thơ, Việt Nam",
    about_university_label: "Trường",
    about_university: "Đại học FPT Cần Thơ",
    about_stat1_value: "100%",
    about_stat1_label: "Thủ công",
    about_stat2_value: "0%",
    about_stat2_label: "Hóa chất",
    about_stat3_value: "6",
    about_stat3_label: "Thành viên",
    about_stat4_value: "2026",
    about_stat4_label: "Thành lập",

    // ── Team ───────────────────────────────────────────────────────────────────
    team_badge: "Đội ngũ sáng lập",
    team_title_1: "Những con người",
    team_title_italic: "tạo nên Mộc Xinh",
    team_subtitle:
      "6 sinh viên với đam mê sáng tạo và khát vọng đổi mới — cùng nhau biến giấc mơ xanh thành hiện thực.",
    team_member1_name: "Lê Mỹ Trà Giang",
    team_member1_title: "CEO",
    team_member1_role: "Chief Executive Officer",
    team_member1_role_vi: "Giám đốc điều hành",
    team_member1_desc:
      "Quản lý toàn bộ dự án; phân công công việc; theo dõi tiến độ; đại diện làm việc với giảng viên/đối tác; xây dựng định hướng thương hiệu và chiến lược phát triển.",
    team_member2_name: "Nguyễn Kim Bảo Nguyên",
    team_member2_title: "COO",
    team_member2_role: "Chief Operating Officer",
    team_member2_role_vi: "Giám đốc Vận hành",
    team_member2_desc:
      "Quản lý quy trình sản xuất giấy; theo dõi nguyên liệu và chất lượng sản phẩm; tối ưu quy trình làm việc; hỗ trợ vận hành MVP.",
    team_member3_name: "Lê Nhựt Huy",
    team_member3_title: "CMO",
    team_member3_role: "Chief Marketing Officer",
    team_member3_role_vi: "Giám đốc Marketing",
    team_member3_desc:
      "Nghiên cứu thị trường; xây dựng chiến lược marketing; quản lý mạng xã hội; tìm kiếm khách hàng và đối tác; hỗ trợ bán hàng và quảng bá sản phẩm.",
    team_member4_name: "Nguyễn Trung Nguyên",
    team_member4_title: "CTO",
    team_member4_role: "Chief Technology Officer",
    team_member4_role_vi: "Giám đốc Công nghệ",
    team_member4_desc:
      "Xây dựng website/landing page; quản lý công nghệ và dữ liệu; hỗ trợ các công cụ số phục vụ hoạt động kinh doanh và quảng bá.",
    team_member5_name: "Lê Nhựt Huy",
    team_member5_title: "CFO",
    team_member5_role: "Chief Financial Officer",
    team_member5_role_vi: "Giám đốc Tài chính",
    team_member5_desc:
      "Theo dõi chi phí sản xuất; lập kế hoạch ngân sách; tính giá thành sản phẩm; quản lý tài chính và hỗ trợ báo cáo doanh thu – lợi nhuận.",
    team_member6_name: "Trương Trọng Tường Vy",
    team_member6_title: "CPO",
    team_member6_role: "Chief Product Officer",
    team_member6_role_vi: "Giám đốc Sản phẩm",
    team_member6_desc:
      "Thiết kế logo, bao bì và nhận diện thương hiệu; thiết kế mẫu giấy và sản phẩm handmade; xây dựng hình ảnh sản phẩm.",

    // ── Hero ───────────────────────────────────────────────────────────────────
    hero_badge: "Giấy cỏ tự nhiên",
    hero_tagline: "Tái sinh từ thiên nhiên",
    hero_description:
      "Giấy thủ công từ cỏ dại và sợi tự nhiên — hành trình biến những điều mộc mạc của thiên nhiên thành từng tờ giấy thân thiện và gần gũi.",
    hero_cta_primary: "Khám phá câu chuyện",
    hero_cta_secondary: "Xem sản phẩm",
    hero_scroll: "Cuộn",
    hero_stat_natural: "Tự nhiên",
    hero_stat_eco: "Thân thiện",
    hero_stat_origin: "Nguồn gốc",

    // ── Story ──────────────────────────────────────────────────────────────────
    story_badge: "Hành trình Mộc Xinh",
    story_title_1: "Từ đồng cỏ",
    story_title_italic: "hoang dại",
    story_title_2: "đến tờ giấy nghệ thuật",
    story_subtitle:
      "Mộc Xinh ra đời từ câu hỏi giản dị: điều gì sẽ xảy ra nếu cỏ dại — thứ người ta thường loại bỏ — được trao một cuộc sống mới?",
    story_quote: '"Mỗi tờ giấy là một câu chuyện từ thiên nhiên"',
    story_eco_title: "Kinh tế tuần hoàn",
    story_eco_desc:
      "Cỏ dại từ các nhà vườn địa phương được thu gom và tái sinh, giảm thiểu chất thải nông nghiệp.",
    story_texture_label: "Texture thực tế — chụp trực tiếp sản phẩm",

    // ── Story steps ────────────────────────────────────────────────────────────
    step1_title: "Thu hoạch cỏ",
    step1_desc: "Cỏ dại được thu gom tại địa phương — biến phế phẩm thành tài nguyên.",
    step2_title: "Xử lý sợi",
    step2_desc:
      "Cỏ được ngâm, xử lý thủ công để tách sợi tự nhiên, không sử dụng hóa chất công nghiệp.",
    step3_title: "Tạo tờ giấy",
    step3_desc:
      "Từng tờ giấy được đổ khuôn thủ công — mỗi tờ mang vân độc đáo như dấu tay của người nghệ nhân.",
    step4_title: "Phơi & hoàn thiện",
    step4_desc:
      "Giấy được phơi dưới ánh nắng tự nhiên, tạo nên màu sắc tự nhiên và texture độc đáo.",

    // ── Gallery ────────────────────────────────────────────────────────────────
    gallery_badge: "Hình ảnh thực tế",
    gallery_title_1: "Nhìn thấy để",
    gallery_title_italic: "tin tưởng",
    gallery_subtitle:
      "Tất cả ảnh chụp trực tiếp sản phẩm thực tế — không chỉnh sửa màu sắc hay thay thế.",
    gallery_note:
      "Mỗi sản phẩm là duy nhất — texture và màu sắc có thể khác nhau do đặc tính thủ công của giấy cỏ tự nhiên.",
    gallery_label_1: "Bộ sưu tập 2026",
    gallery_label_2: "Nguyên liệu cỏ dại",
    gallery_label_3: "Giấy tự nhiên",
    gallery_label_4: "Sổ tay & thiệp",
    gallery_label_5: "Texture giấy gốc",

    // ── Products ───────────────────────────────────────────────────────────────
    products_badge: "Sản phẩm",
    products_title_1: "Giấy & phụ kiện",
    products_title_italic: "thủ công",
    products_subtitle:
      "Mỗi sản phẩm được làm tỉ mỉ bằng tay, không tờ nào giống tờ nào — đó là sự độc đáo của handmade.",
    products_add_to_cart: "Thêm vào giỏ",
    products_custom_badge: "Đặt hàng theo yêu cầu",
    products_custom_title: "Tùy chỉnh kích thước, màu sắc & thiết kế",
    products_custom_desc:
      "Liên hệ để đặt hàng số lượng lớn hoặc theo yêu cầu riêng — chúng tôi sẽ tạo ra sản phẩm hoàn toàn phù hợp với bạn.",
    products_custom_cta: "Đặt hàng tùy chỉnh",

    // ── Values ─────────────────────────────────────────────────────────────────
    values_badge: "Giá trị bền vững",
    values_title_1: "Vì sao chọn",
    values_title_italic: "Mộc Xinh?",
    values_subtitle:
      "Chúng tôi không chỉ bán giấy — chúng tôi lan tỏa một cách sống xanh, gắn kết con người với thiên nhiên qua từng sản phẩm.",
    values_cta_banner_title: "Bắt đầu hành trình xanh cùng Mộc Xinh",
    values_cta_banner_desc: "Một tờ giấy từ cỏ — một lựa chọn nhỏ vì môi trường lớn hơn.",
    values_cta: "Liên hệ & Đặt hàng",

    value1_title: "Thân thiện môi trường",
    value1_desc:
      "Biến cỏ dại thành tài nguyên. Mỗi kg giấy Mộc Xinh giúp tận dụng phế phẩm nông nghiệp, giảm áp lực lên rừng nguyên sinh.",
    value1_stat: "0%",
    value1_stat_label: "Hóa chất",
    value2_title: "Nghệ thuật thủ công",
    value2_desc:
      "Mỗi tờ giấy là kết tinh của đôi tay nghệ nhân — không hai tờ giống nhau. Texture hữu cơ tự nhiên, không thể tái tạo bằng máy.",
    value2_stat: "100%",
    value2_stat_label: "Thủ công",
    value3_title: "Giảm lãng phí nông nghiệp",
    value3_desc:
      "Tận dụng nguồn cỏ dại từ vườn trái cây địa phương, góp phần kinh tế tuần hoàn và tạo thêm thu nhập cho nông dân địa phương.",
    value3_stat: "Bản địa",
    value3_stat_label: "Nguồn gốc",

    testimonial1_text:
      "Giấy Mộc Xinh có texture rất đặc biệt, mỗi tờ đều khác nhau — điều đó khiến mỗi thiệp tôi làm trở nên thực sự độc đáo.",
    testimonial1_author: "Nguyễn Lan Anh",
    testimonial1_role: "Nghệ sĩ Journaling",
    testimonial2_text:
      "Tôi thích ý tưởng tái sử dụng cỏ dại. Sản phẩm đẹp, thân thiện môi trường và mang câu chuyện ý nghĩa.",
    testimonial2_author: "Trần Minh Khôi",
    testimonial2_role: "Nhà thiết kế",

    // ── Contact ────────────────────────────────────────────────────────────────
    contact_badge: "Liên hệ với chúng tôi",
    contact_title_1: "Kết nối cùng",
    contact_title_italic: "Mộc Xinh",
    contact_subtitle:
      "Đặt hàng, hợp tác hoặc chỉ đơn giản là muốn biết thêm về giấy cỏ — chúng tôi luôn sẵn sàng lắng nghe.",
    contact_form_name: "Họ và tên",
    contact_form_email: "Email",
    contact_form_subject: "Chủ đề",
    contact_form_message: "Nội dung tin nhắn",
    contact_form_submit: "Gửi tin nhắn",
    contact_form_sending: "Đang gửi...",
    contact_form_success: "Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi sớm.",
    contact_info_address: "Địa chỉ",
    contact_info_email: "Email",
    contact_info_phone: "Điện thoại",
    contact_hours: "Thứ 2 – Thứ 7, 8:00 – 17:00",
    contact_hours_label: "Giờ làm việc",

    // ── Footer ─────────────────────────────────────────────────────────────────
    footer_tagline:
      "Sống xanh bắt đầu từ những lựa chọn nhỏ — một tờ giấy, một lời nhắn, một hành trình tái sinh cùng thiên nhiên.",
    footer_contact_title: "Liên hệ",
    footer_nav_title: "Điều hướng",
    footer_copyright: "Giấy thủ công — Tái sinh từ thiên nhiên.",
    footer_made: "Made with 🌿 tại Cần Thơ, Việt Nam",
  },

  en: {
    // ── Nav ────────────────────────────────────────────────────────────────────
    nav_about: "About",
    nav_team: "Team",
    nav_story: "Our Story",
    nav_products: "Products",
    nav_values: "Our Values",
    nav_contact: "Contact",
    nav_contact_btn: "Contact",
    nav_contact_mobile: "Get in Touch",

    // ── About ──────────────────────────────────────────────────────────────────
    about_badge: "About the Project",
    about_title_1: "Mộc Xinh —",
    about_title_italic: "Born from Wild Grass",
    about_subtitle:
      "A student startup with a passion to transform nature's simplest elements into meaningful products, spreading a sustainable green lifestyle.",
    about_desc_1:
      "Mộc Xinh was founded in 2026 by a group of students from FPT University Cần Thơ — people who believe that wild grass can become beautiful, eco-friendly art paper.",
    about_desc_2:
      "We don't just make paper — we craft a story: turning agricultural waste into creative products, contributing to a circular economy and raising environmental awareness in the community.",
    about_mission_label: "Mission",
    about_mission: "Rebirth of nature through every handcrafted sheet of paper",
    about_vision_label: "Vision",
    about_vision: "To become the leading green handmade paper brand in the Mekong Delta",
    about_founded_label: "Founded",
    about_founded: "2026",
    about_location_label: "Location",
    about_location: "Cần Thơ, Vietnam",
    about_university_label: "University",
    about_university: "FPT University Cần Thơ",
    about_stat1_value: "100%",
    about_stat1_label: "Handmade",
    about_stat2_value: "0%",
    about_stat2_label: "Chemicals",
    about_stat3_value: "6",
    about_stat3_label: "Members",
    about_stat4_value: "2026",
    about_stat4_label: "Founded",

    // ── Team ───────────────────────────────────────────────────────────────────
    team_badge: "Founding Team",
    team_title_1: "The people who",
    team_title_italic: "created Mộc Xinh",
    team_subtitle:
      "6 students with a passion for creativity and innovation — together turning a green dream into reality.",
    team_member1_name: "Nguyễn Văn An",
    team_member1_title: "CEO",
    team_member1_role: "Chief Executive Officer",
    team_member1_role_vi: "Giám đốc Điều hành",
    team_member1_desc:
      "Manages the entire project; assigns tasks; tracks progress; liaises with lecturers/partners; builds brand direction and development strategy.",
    team_member2_name: "Trần Thị Bích",
    team_member2_title: "COO",
    team_member2_role: "Chief Operating Officer",
    team_member2_role_vi: "Giám đốc Vận hành",
    team_member2_desc:
      "Manages the paper production process; monitors materials and product quality; optimizes workflows; supports MVP operations.",
    team_member3_name: "Lê Minh Châu",
    team_member3_title: "CMO",
    team_member3_role: "Chief Marketing Officer",
    team_member3_role_vi: "Giám đốc Marketing",
    team_member3_desc:
      "Conducts market research; builds marketing strategy; manages social media; finds customers and partners; supports sales and product promotion.",
    team_member4_name: "Phạm Thị Dung",
    team_member4_title: "CTO",
    team_member4_role: "Chief Technology Officer",
    team_member4_role_vi: "Giám đốc Công nghệ",
    team_member4_desc:
      "Builds the website/landing page; manages technology and data; supports digital tools for business operations and promotion.",
    team_member5_name: "Hoàng Văn Em",
    team_member5_title: "CFO",
    team_member5_role: "Chief Financial Officer",
    team_member5_role_vi: "Giám đốc Tài chính",
    team_member5_desc:
      "Tracks production costs; plans budgets; calculates product pricing; manages finances and supports revenue–profit reporting.",
    team_member6_name: "Ngô Thị Phương",
    team_member6_title: "CPO",
    team_member6_role: "Chief Product Officer",
    team_member6_role_vi: "Giám đốc Sản phẩm",
    team_member6_desc:
      "Designs logo, packaging and brand identity; designs paper patterns and handmade products; builds product visual identity.",

    // ── Hero ───────────────────────────────────────────────────────────────────
    hero_badge: "Natural Grass Paper",
    hero_tagline: "Reborn from Nature",
    hero_description:
      "Handcrafted paper from wild grass and natural fibers — a journey transforming the rustic elements of nature into friendly and familiar sheets of paper.",
    hero_cta_primary: "Explore Our Story",
    hero_cta_secondary: "View Products",
    hero_scroll: "Scroll",
    hero_stat_natural: "Natural",
    hero_stat_eco: "Eco-friendly",
    hero_stat_origin: "Origin",

    // ── Story ──────────────────────────────────────────────────────────────────
    story_badge: "The Mộc Xinh Journey",
    story_title_1: "From wild",
    story_title_italic: "grasslands",
    story_title_2: "to artistic paper",
    story_subtitle:
      "Mộc Xinh was born from a simple question: what if wild grass — something people usually discard — could be given a new life?",
    story_quote: '"Every sheet of paper is a story from nature"',
    story_eco_title: "Circular Economy",
    story_eco_desc:
      "Wild grass from local gardens is collected and reborn, minimizing agricultural waste.",
    story_texture_label: "Real textures — photographed directly from products",

    // ── Story steps ────────────────────────────────────────────────────────────
    step1_title: "Grass Harvesting",
    step1_desc:
      "Wild grass is collected from local fruit orchards — turning agricultural waste into a valuable resource.",
    step2_title: "Fiber Processing",
    step2_desc:
      "Grass is soaked and manually processed to extract natural fibers, without industrial chemicals.",
    step3_title: "Sheet Forming",
    step3_desc:
      "Each sheet is hand-poured into molds — every page carries a unique texture like the fingerprint of an artisan.",
    step4_title: "Drying & Finishing",
    step4_desc:
      "Paper is naturally sun-dried under the sun, creating its unique natural color and texture.",

    // ── Gallery ────────────────────────────────────────────────────────────────
    gallery_badge: "Real Product Photos",
    gallery_title_1: "See it to",
    gallery_title_italic: "believe it",
    gallery_subtitle:
      "All photos are taken directly from real products — no color editing or replacement.",
    gallery_note:
      "Each product is unique — texture and color may vary due to the handmade nature of natural grass paper.",
    gallery_label_1: "2026 Collection",
    gallery_label_2: "Raw Grass Material",
    gallery_label_3: "Natural Paper",
    gallery_label_4: "Notebooks & Cards",
    gallery_label_5: "Original Paper Texture",

    // ── Products ───────────────────────────────────────────────────────────────
    products_badge: "Products",
    products_title_1: "Paper & handmade",
    products_title_italic: "accessories",
    products_subtitle:
      "Each product is meticulously handmade — no two are alike, that's the beauty of handcraft.",
    products_add_to_cart: "Add to Cart",
    products_custom_badge: "Custom Orders",
    products_custom_title: "Customize size, color & design",
    products_custom_desc:
      "Contact us for bulk orders or custom requests — we'll create a product perfectly tailored for you.",
    products_custom_cta: "Place Custom Order",

    // ── Values ─────────────────────────────────────────────────────────────────
    values_badge: "Sustainable Values",
    values_title_1: "Why choose",
    values_title_italic: "Mộc Xinh?",
    values_subtitle:
      "We don't just sell paper — we spread a green lifestyle, connecting people with nature through every product.",
    values_cta_banner_title: "Start your green journey with Mộc Xinh",
    values_cta_banner_desc: "A sheet of grass paper — a small choice for a bigger environment.",
    values_cta: "Contact & Order",

    value1_title: "Eco-Friendly",
    value1_desc:
      "Turning wild grass into a resource. Every kg of Mộc Xinh paper helps utilize agricultural waste, reducing pressure on natural forests.",
    value1_stat: "0%",
    value1_stat_label: "Chemicals",
    value2_title: "Handcraft Art",
    value2_desc:
      "Each sheet of paper is the result of an artisan's hands — no two are alike. Organic texture that can't be replicated by machines.",
    value2_stat: "100%",
    value2_stat_label: "Handmade",
    value3_title: "Reducing Agricultural Waste",
    value3_desc:
      "Utilizing wild grass from local orchards, contributing to a circular economy and additional income for local farmers.",
    value3_stat: "Local",
    value3_stat_label: "Delta Origin",

    testimonial1_text:
      "Mộc Xinh paper has a very special texture, each sheet is different — that makes every card I create truly unique.",
    testimonial1_author: "Lan Anh Nguyen",
    testimonial1_role: "Journaling Artist",
    testimonial2_text:
      "I love the idea of reusing wild grass. Beautiful product, eco-friendly and carrying a meaningful story.",
    testimonial2_author: "Minh Khoi Tran",
    testimonial2_role: "Designer",

    // ── Contact ────────────────────────────────────────────────────────────────
    contact_badge: "Get in Touch",
    contact_title_1: "Connect with",
    contact_title_italic: "Mộc Xinh",
    contact_subtitle:
      "Order, collaborate, or simply learn more about grass paper — we're always ready to listen.",
    contact_form_name: "Full Name",
    contact_form_email: "Email Address",
    contact_form_subject: "Subject",
    contact_form_message: "Your message",
    contact_form_submit: "Send Message",
    contact_form_sending: "Sending...",
    contact_form_success: "Message sent! We'll respond shortly.",
    contact_info_address: "Address",
    contact_info_email: "Email",
    contact_info_phone: "Phone",
    contact_hours: "Monday – Saturday, 8:00 AM – 5:00 PM",
    contact_hours_label: "Working Hours",

    // ── Footer ─────────────────────────────────────────────────────────────────
    footer_tagline:
      "Living green starts with small choices — a sheet of paper, a handwritten note, a journey of rebirth with nature.",
    footer_contact_title: "Contact",
    footer_nav_title: "Navigation",
    footer_copyright: "Handcrafted paper — Reborn from Nature.",
    footer_made: "Made with 🌿 in Cần Thơ, Vietnam",
  },
} as const;
