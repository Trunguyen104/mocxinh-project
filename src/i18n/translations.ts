// ─── Types ────────────────────────────────────────────────────────────────────
export type Lang = "vi" | "en";

export type TranslationKey = keyof typeof translations.vi;

// ─── Translations ─────────────────────────────────────────────────────────────
export const translations = {
  vi: {
    // ── Nav ────────────────────────────────────────────────────────────────────
    nav_about: "Về dự án",
    nav_team: "Thành viên",
    nav_story: "Nguyên liệu & Quy trình",
    nav_products: "Sản phẩm",
    nav_workshop: "Workshop",
    nav_values: "Giá trị bền vững",
    nav_contact: "Liên hệ",
    nav_contact_btn: "Đăng ký Workshop",
    nav_contact_mobile: "Đăng ký Workshop ngay",

    // ── About ──────────────────────────────────────────────────────────────────
    about_badge: "Về dự án",
    about_title_1: "Mộc Xinh —",
    about_title_italic: "Sinh ra từ sợi thực vật",
    about_subtitle:
      "Thương hiệu giấy thủ công và sản phẩm sáng tạo sinh thái từ sợi cỏ tự nhiên và phụ phẩm nông nghiệp (lá dứa, bã mía, cây sậy), lan tỏa lối sống xanh bền vững.",
    about_desc_1:
      "Mộc Xinh ra đời năm 2026 tại Đại học FPT Cần Thơ với khát vọng khai thác nguồn phụ phẩm thực vật bản địa giàu xơ sợi để chế tác nên những tấm giấy mộc độc bản, an toàn và không hóa chất tẩy trắng công nghiệp.",
    about_desc_2:
      "Bên cạnh các dòng sản phẩm thủ công ứng dụng, Mộc Xinh còn mang đến không gian Workshop trải nghiệm — nơi mỗi người trực tiếp chạm vào kết cấu xơ sợi mộc mạc và tự tay cá nhân hóa tác phẩm nghệ thuật của riêng mình.",
    about_mission_label: "Sứ mệnh",
    about_mission: "Tái sinh phụ phẩm thực vật qua từng tờ giấy và trải nghiệm thủ công",
    about_vision_label: "Tầm nhìn",
    about_vision: "Trở thành thương hiệu giấy thủ công xanh tiêu biểu tại Đồng bằng sông Cửu Long",
    about_founded_label: "Năm thành lập",
    about_founded: "2026",
    about_location_label: "Địa điểm",
    about_location: "600 Nguyễn Văn Cừ, An Bình, Cần Thơ",
    about_university_label: "Trường",
    about_university: "Đại học FPT Cần Thơ",
    about_stat1_value: "100%",
    about_stat1_label: "Thủ công",
    about_stat2_value: "0%",
    about_stat2_label: "Thuốc tẩy",
    about_stat3_value: "5+",
    about_stat3_label: "Loại xơ sợi",
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
    team_member5_name: "Trần Khôi Nguyên",
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
    hero_badge: "Giấy thủ công từ sợi thực vật",
    hero_tagline: "Tái sinh từ thiên nhiên",
    hero_description:
      "Chế tác từ sợi cỏ tự nhiên, lá dứa, bã mía, cây sậy và giấy Dó — lưu giữ trọn vẹn kết cấu mộc mạc và khơi nguồn cảm hứng sáng tạo thủ công.",
    hero_cta_primary: "Tham gia Workshop",
    hero_cta_secondary: "Khám phá sản phẩm",
    hero_scroll: "Cuộn",
    hero_stat_natural: "Xơ thực vật",
    hero_stat_eco: "Không tẩy trắng",
    hero_stat_origin: "Cần Thơ",

    // ── Story & Materials ──────────────────────────────────────────────────────
    story_badge: "Nguyên liệu & Quy trình chế tác",
    story_title_1: "Từ phụ phẩm thực vật",
    story_title_italic: "bản địa",
    story_title_2: "đến tấm giấy mộc độc bản",
    story_subtitle:
      "Qua 4 phiên bản R&D (MVP), Mộc Xinh hoàn thiện quy trình xử lý cơ – sinh học khép kín, phối trộn sợi cỏ cùng lá dứa, bã mía, cây sậy và giấy Dó mà không dùng hóa chất tẩy trắng công nghiệp.",
    story_quote: '"Mỗi bề mặt giấy là một kết cấu xơ sợi sống động từ thiên nhiên"',
    story_eco_title: "Kiểm soát chất lượng 3 giai đoạn",
    story_eco_desc:
      "Tuyển chọn nguyên liệu sạch không ẩm mốc (Đầu vào) → Chuẩn hóa kích thước & độ chắc chắn khi gia công (Trong quá trình) → Kiểm định độ bám màu nước & acrylic trước khi trao tay khách hàng (Đầu ra).",
    story_texture_label: "Hệ nguyên liệu thực vật & Vật liệu phụ trợ xanh",
    materials_heading: "5 Nguồn Chất Liệu Xơ Sợi Chủ Đạo",
    materials_subheading:
      "Sự kết hợp tỷ lệ vàng giữa các loại xơ thực vật giúp giấy Mộc Xinh đạt độ đầm tay, bám màu nước Thiên Long và bút acrylic vượt trội mà không bị lem nhòe hay rách bục.",
    mat1_name: "Lá dứa (Giấy lá dứa)",
    mat1_trait: "Dày, vân sần tự nhiên, độ dai cao",
    mat1_desc: "Tạo độ dai chịu lực và bề mặt sần nghệ thuật cho Tranh Đông Hồ A5 & Bookmark.",
    mat2_name: "Bã mía (Giấy mía)",
    mat2_trait: "Xơ đanh chắc, cứng cáp, đầm tay",
    mat2_desc: "Tăng độ cứng cơ học và độ phẳng bề mặt cho bìa, ruột Sổ tay thủ công & Tranh vẽ.",
    mat3_name: "Thân cây sậy (Giấy sậy)",
    mat3_trait: "Sợi thực vật dài, khung kết cấu vững",
    mat3_desc: "Tạo khung liên kết bền bỉ, giữ form dáng cứng cáp cho Sổ tay và Bookmark.",
    mat4_name: "Giấy Dó truyền thống",
    mat4_trait: "Mỏng nhẹ, dẻo dai, xuyên sáng tốt",
    mat4_desc:
      "Chịu ẩm cao khi vẽ màu nước, ứng dụng cho Đèn lồng LED 4 mặt và Quạt giấy nghệ thuật.",
    mat5_name: "Sợi cỏ & Phụ trợ xanh",
    mat5_trait: "Tre, gỗ, dây thừng mộc, đèn LED",
    mat5_desc:
      "Nền tảng chất liệu mộc kết hợp khung nan tre, que gỗ, dây tua rua thân thiện môi trường.",

    // ── Story steps ────────────────────────────────────────────────────────────
    step1_title: "Thu gom & Tuyển chọn xơ sợi",
    step1_desc:
      "Thu gom cỏ tự nhiên, lá dứa, bã mía, thân cây sậy bản địa; loại bỏ hoàn toàn nguyên liệu ẩm mốc trước khi đưa vào xử lý.",
    step2_title: "Ủ mềm & Nghiền tơi cơ – sinh học",
    step2_desc:
      "Tách xơ tự nhiên bằng quy trình cơ – sinh học khép kín, tuyệt đối không dùng hóa chất tẩy trắng để giữ sắc độ mộc nguyên bản.",
    step3_title: "Phối trộn tỷ lệ vàng & Ép nhiệt",
    step3_desc:
      "Phối trộn sợi cỏ cùng lá dứa (độ dai), bã mía (độ đanh) và sậy (khung kết cấu), sau đó đổ khuôn và ép nhiệt sinh học.",
    step4_title: "Sấy khô & Gia công hoàn thiện",
    step4_desc:
      "Sấy chuẩn hóa chống thấm lem với màu nước & acrylic; gia công cắt chuẩn kích thước, đóng gáy dây thừng và lắp khung gỗ/tre.",

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
    products_badge: "Danh mục sản phẩm",
    products_title_1: "5 Dòng sản phẩm",
    products_title_italic: "thủ công sinh thái",
    products_subtitle:
      "Chế tác từ giấy lá dứa, giấy mía, giấy sậy và giấy Dó — sẵn sàng để bạn sử dụng, làm quà tặng hoặc tự tay tô vẽ sáng tạo.",
    products_add_to_cart: "Tìm hiểu & Đặt mua",
    products_custom_badge: "Trải nghiệm & Cá nhân hóa",
    products_custom_title: "Tự tay trang trí sản phẩm tại Workshop Mộc Xinh",
    products_custom_desc:
      "Tất cả 5 dòng sản phẩm đều có mặt tại buổi Workshop kèm đầy đủ màu nước Thiên Long, bút acrylic và phụ kiện để bạn thỏa sức sáng tạo.",
    products_custom_cta: "Xem lịch Workshop",

    // ── Workshop ───────────────────────────────────────────────────────────────
    workshop_badge: "Sự kiện trải nghiệm",
    workshop_title_1: "Workshop Mộc Xinh —",
    workshop_title_italic: "Chạm xơ sợi tự nhiên,",
    workshop_title_2: "khơi nguồn sáng tạo thủ công",
    workshop_subtitle:
      "Không chỉ lắng nghe hành trình tái sinh phụ phẩm nông nghiệp thành giấy mộc, bạn còn được trực tiếp chạm vào từng thớ giấy lá dứa, mía, sậy, giấy Dó và tự tay hoàn thiện tác phẩm mang dấu ấn cá nhân.",
    workshop_date_label: "Thời gian tổ chức",
    workshop_date_value: "18:15 – 21:00 | Ngày 07/10/2026",
    workshop_location_label: "Địa điểm",
    workshop_location_value: "600 Nguyễn Văn Cừ, P. An Bình, TP. Cần Thơ",
    workshop_scale_label: "Quy mô phục vụ",
    workshop_scale_value: "Giới hạn ~10 khách/buổi (Hỗ trợ 1-1 tại bàn)",
    workshop_perks_title: "Quyền lợi dành cho người tham gia",
    workshop_perk1:
      "Tự chọn phôi sản phẩm thủ công (Tranh Đông Hồ A5, Sổ tay, Đèn lồng LED, Quạt giấy Dó, Bookmark).",
    workshop_perk2:
      "Chuẩn bị sẵn toàn bộ bộ màu nước Thiên Long, bút acrylic, cọ vẽ, keo, dây thừng & dây tua rua.",
    workshop_perk3:
      "Người hướng dẫn làm mẫu trực tiếp & nhân sự hỗ trợ kỹ thuật đi màu trên từng chất liệu giấy.",
    workshop_perk4:
      "Hỗ trợ sấy/làm khô hoàn thiện, đóng gói túi/hộp sinh thái chỉn chu và chụp ảnh check-in nghệ thuật.",
    workshop_activities_title: "5 Hoạt động trải nghiệm tự chọn tại bàn",
    workshop_timeline_title: "Lịch trình trải nghiệm (18:15 – 21:00)",
    workshop_cta_primary: "Đăng ký tham gia Workshop ngay",
    workshop_cta_secondary: "Nhắn tin Fanpage tư vấn",
    workshop_cta_note: "Số lượng chỗ ngồi giới hạn ~10 người/buổi để đảm bảo trải nghiệm tốt nhất.",

    // ── Workshop Mascot Tour Guide ─────────────────────────────────────────────
    tour_badge: "Hướng dẫn viên Mộc Xinh",
    tour_step1_title: "Khám phá Workshop Mộc Xinh",
    tour_step1_desc:
      "Chào bạn! Buổi Workshop diễn ra vào 18:15 – 21:00 ngày 07/10/2026 tại 600 Nguyễn Văn Cừ, Cần Thơ. Quy mô giới hạn ~10 khách để được hỗ trợ 1-1 tận tình nhất!",
    tour_step1_btn: "Khám phá 5 hoạt động DIY 🎨",
    tour_step2_title: "5 Hoạt động DIY từ sợi thực vật",
    tour_step2_desc:
      "Bạn sẽ được tự tay làm Tranh Đông Hồ A5, Sổ tay dây thừng, Đèn lồng Dó LED, Quạt giấy Dó và Bookmark từ xơ sợi lá dứa, mía, sậy tự nhiên!",
    tour_step2_btn: "Xem lịch trình trải nghiệm ⏰",
    tour_step3_title: "Lịch trình trải nghiệm (18:15 – 21:00)",
    tour_step3_desc:
      "Trọn vẹn từ đón khách, nghe câu chuyện tái sinh giấy, thực hành vẽ với người hướng dẫn, đến sấy khô và đóng gói quà tặng sinh thái mang về!",
    tour_step3_btn: "Đăng ký tham gia ngay 👇",
    tour_step4_title: "Giữ chỗ tham gia ngay!",
    tour_step4_desc:
      "Số lượng chỗ ngồi chỉ ~10 người mỗi buổi. Nhấn nút xanh bên dưới để mở form đăng ký giữ chỗ cùng Mộc Xinh nhé!",
    tour_step4_btn: "Đăng ký Workshop ngay 🌿",
    tour_minimize: "Thu gọn",
    tour_expand: "Mascot hướng dẫn",
    tour_close: "Đóng hướng dẫn",
    tour_mascot_hint: "Nhấn vào mình để đi tour Workshop nhé! 🌿",
    tour_step_counter: "Bước",

    // ── Values ─────────────────────────────────────────────────────────────────
    values_badge: "Giá trị bền vững",
    values_title_1: "Vì sao chọn",
    values_title_italic: "Mộc Xinh?",
    values_subtitle:
      "Chúng tôi không chỉ bán giấy — chúng tôi lan tỏa một cách sống xanh, gắn kết con người với thiên nhiên qua từng sản phẩm.",
    values_cta_banner_title: "Bắt đầu hành trình xanh cùng Mộc Xinh",
    values_cta_banner_desc: "Một tờ giấy từ sợi thực vật — một lựa chọn nhỏ vì môi trường lớn hơn.",
    values_cta: "Đăng ký Workshop & Đặt hàng",

    value1_title: "Thân thiện môi trường",
    value1_desc:
      "Tận dụng lá dứa, bã mía, cây sậy và cỏ tự nhiên. Quy trình cơ – sinh học khép kín không hóa chất tẩy trắng công nghiệp.",
    value1_stat: "0%",
    value1_stat_label: "Hóa chất tẩy",
    value2_title: "Nghệ thuật thủ công",
    value2_desc:
      "Mỗi sản phẩm là kết tinh của đôi tay thủ công và nét vẽ cá nhân hóa — bám màu nước và acrylic bền đẹp, không lem nhòe.",
    value2_stat: "100%",
    value2_stat_label: "Thủ công",
    value3_title: "Kinh tế tuần hoàn bản địa",
    value3_desc:
      "Biến phụ phẩm nông nghiệp tại Đồng bằng sông Cửu Long thành sản phẩm văn hóa – sáng tạo có giá trị thẩm mỹ và ứng dụng cao.",
    value3_stat: "Bản địa",
    value3_stat_label: "Nguồn xơ sợi",

    testimonial1_text:
      "Giấy lá dứa và giấy mía của Mộc Xinh có độ sần rất đặc biệt, khi tô màu nước Thiên Long và bút acrylic lên tranh Đông Hồ không hề bị lem hay rách giấy.",
    testimonial1_author: "Nguyễn Lan Anh",
    testimonial1_role: "Khách tham gia Workshop",
    testimonial2_text:
      "Đèn lồng giấy Dó và sổ tay đóng gáy dây thừng rất chỉn chu. Trải nghiệm tự vẽ lên 4 mặt đèn và bật LED lên thực sự ấm cúng và ý nghĩa.",
    testimonial2_author: "Trần Minh Khôi",
    testimonial2_role: "Nhà thiết kế trẻ",

    // ── Contact ────────────────────────────────────────────────────────────────
    contact_badge: "Liên hệ với chúng tôi",
    contact_title_1: "Kết nối cùng",
    contact_title_italic: "Mộc Xinh",
    contact_subtitle:
      "Đặt mua sản phẩm, đăng ký tham gia Workshop hoặc hợp tác cùng Mộc Xinh — chúng tôi luôn sẵn sàng lắng nghe.",
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
      "Sống xanh bắt đầu từ những lựa chọn nhỏ — một tấm giấy thực vật, một buổi workshop sáng tạo, một hành trình tái sinh cùng thiên nhiên.",
    footer_contact_title: "Liên hệ",
    footer_nav_title: "Điều hướng",
    footer_copyright: "Giấy thủ công từ sợi thực vật — Tái sinh từ thiên nhiên.",
    footer_made: "Made with 🌿 tại Cần Thơ, Việt Nam",
  },

  en: {
    // ── Nav ────────────────────────────────────────────────────────────────────
    nav_about: "About",
    nav_team: "Team",
    nav_story: "Materials & Process",
    nav_products: "Products",
    nav_workshop: "Workshop",
    nav_values: "Our Values",
    nav_contact: "Contact",
    nav_contact_btn: "Join Workshop",
    nav_contact_mobile: "Register for Workshop",

    // ── About ──────────────────────────────────────────────────────────────────
    about_badge: "About the Project",
    about_title_1: "Mộc Xinh —",
    about_title_italic: "Born from Plant Fibers",
    about_subtitle:
      "An eco-craft handmade paper brand utilizing wild grass and local agricultural byproducts (pineapple leaf, bagasse, reed, and Do paper) to spread a sustainable green lifestyle.",
    about_desc_1:
      "Founded in 2026 at FPT University Cần Thơ, Mộc Xinh transforms fiber-rich local plant byproducts into unique, unbleached handmade paper sheets through a closed bio-mechanical process.",
    about_desc_2:
      "Beyond eco-friendly handcrafted products, Mộc Xinh hosts hands-on creative Workshops where participants feel natural plant textures and personalize their own crafts.",
    about_mission_label: "Mission",
    about_mission: "Rebirthing agricultural plant fibers through handmade paper & workshops",
    about_vision_label: "Vision",
    about_vision: "To become the leading green handmade paper brand in the Mekong Delta",
    about_founded_label: "Founded",
    about_founded: "2026",
    about_location_label: "Location",
    about_location: "600 Nguyen Van Cu, An Binh, Can Tho",
    about_university_label: "University",
    about_university: "FPT University Cần Thơ",
    about_stat1_value: "100%",
    about_stat1_label: "Handmade",
    about_stat2_value: "0%",
    about_stat2_label: "Bleach",
    about_stat3_value: "5+",
    about_stat3_label: "Plant Fibers",
    about_stat4_value: "2026",
    about_stat4_label: "Founded",

    // ── Team ───────────────────────────────────────────────────────────────────
    team_badge: "Founding Team",
    team_title_1: "The people who",
    team_title_italic: "created Mộc Xinh",
    team_subtitle:
      "6 students with a passion for creativity and innovation — together turning a green dream into reality.",
    team_member1_name: "Lê Mỹ Trà Giang",
    team_member1_title: "CEO",
    team_member1_role: "Chief Executive Officer",
    team_member1_role_vi: "Giám đốc Điều hành",
    team_member1_desc:
      "Manages the entire project; assigns tasks; tracks progress; liaises with lecturers/partners; builds brand direction and development strategy.",
    team_member2_name: "Nguyễn Kim Bảo Nguyên",
    team_member2_title: "COO",
    team_member2_role: "Chief Operating Officer",
    team_member2_role_vi: "Giám đốc Vận hành",
    team_member2_desc:
      "Manages the paper production process; monitors materials and product quality; optimizes workflows; supports MVP operations.",
    team_member3_name: "Lê Nhựt Huy",
    team_member3_title: "CMO",
    team_member3_role: "Chief Marketing Officer",
    team_member3_role_vi: "Giám đốc Marketing",
    team_member3_desc:
      "Conducts market research; builds marketing strategy; manages social media; finds customers and partners; supports sales and product promotion.",
    team_member4_name: "Nguyễn Trung Nguyên",
    team_member4_title: "CTO",
    team_member4_role: "Chief Technology Officer",
    team_member4_role_vi: "Giám đốc Công nghệ",
    team_member4_desc:
      "Builds the website/landing page; manages technology and data; supports digital tools for business operations and promotion.",
    team_member5_name: "Trần Khôi Nguyên",
    team_member5_title: "CFO",
    team_member5_role: "Chief Financial Officer",
    team_member5_role_vi: "Giám đốc Tài chính",
    team_member5_desc:
      "Tracks production costs; plans budgets; calculates product pricing; manages finances and supports revenue–profit reporting.",
    team_member6_name: "Trương Trọng Tường Vy",
    team_member6_title: "CPO",
    team_member6_role: "Chief Product Officer",
    team_member6_role_vi: "Giám đốc Sản phẩm",
    team_member6_desc:
      "Designs logo, packaging and brand identity; designs paper patterns and handmade products; builds product visual identity.",

    // ── Hero ───────────────────────────────────────────────────────────────────
    hero_badge: "Plant-Fiber Handmade Paper",
    hero_tagline: "Reborn from Nature",
    hero_description:
      "Crafted from wild grass, pineapple leaf, sugarcane bagasse, reed fibers, and traditional Do paper — preserving organic textures for sustainable art and craft.",
    hero_cta_primary: "Join Workshop",
    hero_cta_secondary: "Explore Products",
    hero_scroll: "Scroll",
    hero_stat_natural: "Plant Fibers",
    hero_stat_eco: "Unbleached",
    hero_stat_origin: "Can Tho",

    // ── Story & Materials ──────────────────────────────────────────────────────
    story_badge: "Materials & Eco-Craft Process",
    story_title_1: "From local agricultural",
    story_title_italic: "byproducts",
    story_title_2: "to unique botanical paper",
    story_subtitle:
      "Through 4 R&D MVP iterations, Mộc Xinh perfected a closed bio-mechanical process blending grass fibers with pineapple leaf, bagasse, reed, and Do paper without industrial bleach.",
    story_quote: '"Every sheet carries the living fiber texture of nature"',
    story_eco_title: "3-Stage Quality Control",
    story_eco_desc:
      "Clean mold-free raw materials (Input) → Standardized sizing & structural durability (In-Process) → Watercolor & acrylic colorfast testing before delivery (Output).",
    story_texture_label: "Botanical Fibers & Eco-Friendly Materials",
    materials_heading: "5 Core Botanical Materials",
    materials_subheading:
      "Our golden-ratio fiber blend ensures superior durability and color retention with watercolor and acrylic pens without bleeding or tearing.",
    mat1_name: "Pineapple Leaf Paper",
    mat1_trait: "Thick, textured grain, high tensile strength",
    mat1_desc:
      "Provides strong durability and rich surface grain for Dong Ho A5 Paintings & Bookmarks.",
    mat2_name: "Sugarcane Bagasse Paper",
    mat2_trait: "Firm fibers, sturdy & substantial feel",
    mat2_desc:
      "Enhances mechanical stiffness and flatness for Handmade Notebook covers/pages & Artworks.",
    mat3_name: "Reed Fiber Paper",
    mat3_trait: "Long plant fibers, solid structural frame",
    mat3_desc: "Creates a resilient structural matrix for crisp Notebooks and Bookmarks.",
    mat4_name: "Traditional Do Paper",
    mat4_trait: "Lightweight, supple, warm light diffusion",
    mat4_desc:
      "Highly moisture-resistant for watercoloring; used in 4-sided LED Lanterns and Art Fans.",
    mat5_name: "Wild Grass & Eco Accents",
    mat5_trait: "Bamboo ribs, wood frames, hemp twine, LED",
    mat5_desc:
      "Organic grass base paired with natural bamboo frames, wooden rods, and rustic twine.",

    // ── Story steps ────────────────────────────────────────────────────────────
    step1_title: "Fiber Harvesting & Sorting",
    step1_desc:
      "Collecting local wild grass, pineapple leaves, sugarcane bagasse, and reeds; strictly removing any moldy or defective raw materials.",
    step2_title: "Bio-Mechanical Pulping",
    step2_desc:
      "Softening and separating fibers naturally without industrial bleaching chemicals to retain authentic botanical hues.",
    step3_title: "Golden-Ratio Blending & Bio-Heat Pressing",
    step3_desc:
      "Blending grass with pineapple leaf (strength), bagasse (stiffness), and reed (structure), followed by hand-molding and bio-thermal pressing.",
    step4_title: "Drying & Craft Finishing",
    step4_desc:
      "Controlled drying for watercolor/acrylic resistance; precision cutting, hemp-twine binding, and wood/bamboo frame assembly.",

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
    products_badge: "Product Catalog",
    products_title_1: "5 Eco-Handcrafted",
    products_title_italic: "product lines",
    products_subtitle:
      "Crafted from pineapple leaf, bagasse, reed, and Do paper — ready for everyday use, meaningful gifting, or DIY artistic painting.",
    products_add_to_cart: "Inquire & Order",
    products_custom_badge: "Hands-on Personalization",
    products_custom_title: "Paint & personalize your own craft at Mộc Xinh Workshop",
    products_custom_desc:
      "All 5 product lines are available at our Workshop with Thien Long watercolors, acrylic markers, and rustic accessories included.",
    products_custom_cta: "Explore Workshop",

    // ── Workshop ───────────────────────────────────────────────────────────────
    workshop_badge: "Hands-on Experience",
    workshop_title_1: "Mộc Xinh Workshop —",
    workshop_title_italic: "Touch natural fibers,",
    workshop_title_2: "spark handmade creativity",
    workshop_subtitle:
      "Discover how agricultural byproducts are reborn into botanical paper, feel the authentic textures of pineapple leaf, bagasse, reed, and Do paper, and craft your own personalized keepsake.",
    workshop_date_label: "Date & Time",
    workshop_date_value: "18:15 – 21:00 | October 07, 2026",
    workshop_location_label: "Venue",
    workshop_location_value: "600 Nguyen Van Cu, An Binh, Can Tho City",
    workshop_scale_label: "Capacity",
    workshop_scale_value: "Limited to ~10 guests/session (Dedicated table support)",
    workshop_perks_title: "What's Included in Your Ticket",
    workshop_perk1:
      "Choice of 1 handcrafted base product (Dong Ho A5 Painting, Notebook, Do Paper LED Lantern, Bamboo Fan, or Bookmark).",
    workshop_perk2:
      "Full creative toolkit at your table: Thien Long watercolors, acrylic pens, brushes, glue, hemp twine & tassels.",
    workshop_perk3:
      "Live demonstration by our instructor & 1-on-1 table guidance for painting on botanical paper.",
    workshop_perk4:
      "On-site drying assistance, eco-friendly gift box/bag packaging, and photo check-in corner.",
    workshop_activities_title: "5 DIY Craft Experiences to Choose From",
    workshop_timeline_title: "Workshop Schedule (18:15 – 21:00)",
    workshop_cta_primary: "Register for Workshop Now",
    workshop_cta_secondary: "Message Fanpage for Info",
    workshop_cta_note: "Limited to ~10 seats per session to ensure a cozy, guided experience.",

    // ── Workshop Mascot Tour Guide ─────────────────────────────────────────────
    tour_badge: "Mộc Xinh Mascot Guide",
    tour_step1_title: "Discover Mộc Xinh Workshop",
    tour_step1_desc:
      "Welcome! The Workshop takes place from 18:15 to 21:00 on Oct 7, 2026 at 600 Nguyen Van Cu, Can Tho. Limited to ~10 guests for dedicated 1-on-1 support!",
    tour_step1_btn: "Explore 5 DIY Activities 🎨",
    tour_step2_title: "5 Botanical DIY Activities",
    tour_step2_desc:
      "Craft your own Dong Ho painting, rustic notebook, Do LED lantern, bamboo fan, and bookmarks from natural plant fibers!",
    tour_step2_btn: "See Evening Schedule ⏰",
    tour_step3_title: "Evening Schedule (18:15 – 21:00)",
    tour_step3_desc:
      "From welcome check-in, eco-paper story, hands-on crafting with live guidance, to drying and eco-packaging to take home!",
    tour_step3_btn: "Go to Registration 👇",
    tour_step4_title: "Reserve Your Seat Now!",
    tour_step4_desc:
      "Only ~10 spots available per session. Click the green button below to fill out the form and secure your seat with Mộc Xinh!",
    tour_step4_btn: "Register for Workshop Now 🌿",
    tour_minimize: "Minimize",
    tour_expand: "Mascot Guide",
    tour_close: "Close Guide",
    tour_mascot_hint: "Click me to take a tour of the Workshop! 🌿",
    tour_step_counter: "Step",

    // ── Values ─────────────────────────────────────────────────────────────────
    values_badge: "Sustainable Values",
    values_title_1: "Why choose",
    values_title_italic: "Mộc Xinh?",
    values_subtitle:
      "We don't just craft paper — we spread a green lifestyle, connecting people with nature through every botanical fiber.",
    values_cta_banner_title: "Start your green journey with Mộc Xinh",
    values_cta_banner_desc: "A sheet of botanical paper — a small choice for a greener planet.",
    values_cta: "Join Workshop & Order",

    value1_title: "Eco-Friendly & Unbleached",
    value1_desc:
      "Upcycling pineapple leaves, bagasse, reeds, and wild grass via a closed bio-mechanical process with zero industrial bleach.",
    value1_stat: "0%",
    value1_stat_label: "Bleach",
    value2_title: "Handcrafted & Colorfast",
    value2_desc:
      "Engineered to hold watercolor and acrylic vibrantly without bleeding or tearing — making every handmade piece one-of-a-kind.",
    value2_stat: "100%",
    value2_stat_label: "Handmade",
    value3_title: "Local Circular Economy",
    value3_desc:
      "Transforming Mekong Delta agricultural byproducts into cultural, artistic, and functional eco-products.",
    value3_stat: "Local",
    value3_stat_label: "Plant Fibers",

    testimonial1_text:
      "Mộc Xinh's pineapple leaf and bagasse paper has such a unique grain. Painting the Dong Ho A5 artwork with watercolors and acrylics was smooth with zero bleeding.",
    testimonial1_author: "Lan Anh Nguyen",
    testimonial1_role: "Workshop Participant",
    testimonial2_text:
      "The Do paper LED lantern and hemp-bound notebook are wonderfully crafted. Painting all 4 sides and lighting it up at the workshop felt magical.",
    testimonial2_author: "Minh Khoi Tran",
    testimonial2_role: "Young Designer",

    // ── Contact ────────────────────────────────────────────────────────────────
    contact_badge: "Get in Touch",
    contact_title_1: "Connect with",
    contact_title_italic: "Mộc Xinh",
    contact_subtitle:
      "Order products, register for our upcoming Workshop, or collaborate with Mộc Xinh — we're always happy to hear from you.",
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
      "Living green starts with small choices — a botanical sheet of paper, a creative workshop, a journey of rebirth with nature.",
    footer_contact_title: "Contact",
    footer_nav_title: "Navigation",
    footer_copyright: "Botanical handmade paper — Reborn from Nature.",
    footer_made: "Made with 🌿 in Cần Thơ, Vietnam",
  },
} as const;
