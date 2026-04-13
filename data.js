const allData = [
  {
    "lesson": "1",
    "words": "人生",
    "reading": "じんせい",
    "meaning": "cuộc sống"
  },
  {
    "lesson": "1",
    "words": "人間",
    "reading": "にんげん",
    "meaning": "con người"
  },
  {
    "lesson": "1",
    "words": "人",
    "reading": "ひと",
    "meaning": "người"
  },
  {
    "lesson": "1",
    "words": "祖先",
    "reading": "そせん",
    "meaning": "tổ tiên"
  },
  {
    "lesson": "1",
    "words": "親戚",
    "reading": "しんせき",
    "meaning": "họ hàng"
  },
  {
    "lesson": "1",
    "words": "夫婦",
    "reading": "ふうふ",
    "meaning": "vợ chồng"
  },
  {
    "lesson": "1",
    "words": "長男",
    "reading": "ちょうなん",
    "meaning": "trưởng nam"
  },
  {
    "lesson": "1",
    "words": "主人",
    "reading": "しゅじん",
    "meaning": "chồng, chủ tiệm"
  },
  {
    "lesson": "1",
    "words": "双子",
    "reading": "ふたご",
    "meaning": "sinh đôi"
  },
  {
    "lesson": "1",
    "words": "迷子",
    "reading": "まいご",
    "meaning": "trẻ bị lạc"
  },
  {
    "lesson": "1",
    "words": "他人",
    "reading": "たにん",
    "meaning": "người khác"
  },
  {
    "lesson": "1",
    "words": "敵",
    "reading": "てき",
    "meaning": "kẻ thù"
  },
  {
    "lesson": "1",
    "words": "味方",
    "reading": "みかた",
    "meaning": "bạn bè, đồng minh"
  },
  {
    "lesson": "1",
    "words": "筆者",
    "reading": "ひっしゃ",
    "meaning": "tác giả"
  },
  {
    "lesson": "1",
    "words": "寿命",
    "reading": "じゅみょう",
    "meaning": "tuổi thọ"
  },
  {
    "lesson": "1",
    "words": "将来",
    "reading": "しょうらい",
    "meaning": "tương lai"
  },
  {
    "lesson": "1",
    "words": "才能",
    "reading": "さいのう",
    "meaning": "tài năng"
  },
  {
    "lesson": "1",
    "words": "能力",
    "reading": "のうりょく",
    "meaning": "năng lực"
  },
  {
    "lesson": "1",
    "words": "長所",
    "reading": "ちょうしょ",
    "meaning": "sở trường"
  },
  {
    "lesson": "1",
    "words": "個性",
    "reading": "こせい",
    "meaning": "cá tính"
  },
  {
    "lesson": "1",
    "words": "遺伝",
    "reading": "いでん",
    "meaning": "di truyền"
  },
  {
    "lesson": "1",
    "words": "動作",
    "reading": "どうさ",
    "meaning": "động tác"
  },
  {
    "lesson": "1",
    "words": "真似",
    "reading": "まね",
    "meaning": "bắt chước, copy"
  },
  {
    "lesson": "1",
    "words": "睡眠",
    "reading": "すいみん",
    "meaning": "ngủ"
  },
  {
    "lesson": "1",
    "words": "食欲",
    "reading": "しょくよく",
    "meaning": "thèm ăn"
  },
  {
    "lesson": "1",
    "words": "外食",
    "reading": "がいしょく",
    "meaning": "ăn ngoài"
  },
  {
    "lesson": "1",
    "words": "家事",
    "reading": "かじ",
    "meaning": "việc nhà"
  },
  {
    "lesson": "1",
    "words": "出産",
    "reading": "しゅっさん",
    "meaning": "sinh đẻ"
  },
  {
    "lesson": "1",
    "words": "介護",
    "reading": "かいご",
    "meaning": "chăm sóc(người ko thể tự chăm sóc cho bản thân)"
  },
  {
    "lesson": "1",
    "words": "共働き",
    "reading": "ともばたらき",
    "meaning": "vợ chồng cùng làm việc"
  },
  {
    "lesson": "1",
    "words": "出勤",
    "reading": "しゅっきん",
    "meaning": "đi làm"
  },
  {
    "lesson": "1",
    "words": "出世",
    "reading": "しゅっせ",
    "meaning": "thành đạt"
  },
  {
    "lesson": "1",
    "words": "地位",
    "reading": "ちい",
    "meaning": "địa vị, vị trí"
  },
  {
    "lesson": "1",
    "words": "受験",
    "reading": "じゅけん",
    "meaning": "kì thi, tham gia kỳ thi"
  },
  {
    "lesson": "1",
    "words": "専攻",
    "reading": "せんこう",
    "meaning": "chuyên ngành"
  },
  {
    "lesson": "1",
    "words": "支度",
    "reading": "したく",
    "meaning": "chuẩn bị"
  },
  {
    "lesson": "1",
    "words": "全身",
    "reading": "ぜんしん",
    "meaning": "toàn bộ cơ thể"
  },
  {
    "lesson": "1",
    "words": "しわ",
    "reading": "しわ",
    "meaning": "nếp nhăn"
  },
  {
    "lesson": "1",
    "words": "服装",
    "reading": "ふくそう",
    "meaning": "quần áo, trang phục"
  },
  {
    "lesson": "1",
    "words": "礼",
    "reading": "れい",
    "meaning": "lễ, cảm ơn"
  },
  {
    "lesson": "1",
    "words": "世辞",
    "reading": "せじ",
    "meaning": "nịnh, ca tụng"
  },
  {
    "lesson": "1",
    "words": "言い訳",
    "reading": "いいわけ",
    "meaning": "lý do"
  },
  {
    "lesson": "1",
    "words": "話題",
    "reading": "わだい",
    "meaning": "chủ đề"
  },
  {
    "lesson": "1",
    "words": "秘密",
    "reading": "ひみつ",
    "meaning": "bí mật"
  },
  {
    "lesson": "1",
    "words": "尊敬",
    "reading": "そんけい",
    "meaning": "tôn trọng"
  },
  {
    "lesson": "1",
    "words": "謙そん",
    "reading": "けんそん",
    "meaning": "khiên tốn"
  },
  {
    "lesson": "1",
    "words": "期待",
    "reading": "きたい",
    "meaning": "mong chờ"
  },
  {
    "lesson": "1",
    "words": "苦労",
    "reading": "くろう",
    "meaning": "lo lắng"
  },
  {
    "lesson": "1",
    "words": "意志",
    "reading": "いし",
    "meaning": "ý chí"
  },
  {
    "lesson": "2",
    "words": "感情",
    "reading": "かんじょう",
    "meaning": "biểu cảm, tôn tọng"
  },
  {
    "lesson": "2",
    "words": "材料",
    "reading": "ざいりょう",
    "meaning": "nguyên liệu"
  },
  {
    "lesson": "2",
    "words": "石",
    "reading": "いし",
    "meaning": "đá"
  },
  {
    "lesson": "2",
    "words": "ひも",
    "reading": "ひも",
    "meaning": "dây"
  },
  {
    "lesson": "2",
    "words": "券",
    "reading": "けん",
    "meaning": "vé"
  },
  {
    "lesson": "2",
    "words": "名簿",
    "reading": "めいぼ",
    "meaning": "danh bạ, danh sách"
  },
  {
    "lesson": "2",
    "words": "表",
    "reading": "ひょう",
    "meaning": "bảng biểu"
  },
  {
    "lesson": "2",
    "words": "針",
    "reading": "はり",
    "meaning": "kim"
  },
  {
    "lesson": "2",
    "words": "栓",
    "reading": "せん",
    "meaning": "nút, nắp, cửa (nước chữa cháy, gas)"
  },
  {
    "lesson": "2",
    "words": "湯気",
    "reading": "ゆげ",
    "meaning": "hơi, khí"
  },
  {
    "lesson": "2",
    "words": "日当たり",
    "reading": "ひあたり",
    "meaning": "nơi có ánh sáng chiếu vào"
  },
  {
    "lesson": "2",
    "words": "空",
    "reading": "から",
    "meaning": "trống rỗng, bầu trời"
  },
  {
    "lesson": "2",
    "words": "斜め",
    "reading": "ななめ",
    "meaning": "nghiêng"
  },
  {
    "lesson": "2",
    "words": "履歴",
    "reading": "りれき",
    "meaning": "lý lịch"
  },
  {
    "lesson": "2",
    "words": "娯楽",
    "reading": "ごらく",
    "meaning": "vui chơi, thú vui"
  },
  {
    "lesson": "2",
    "words": "司会",
    "reading": "しかい",
    "meaning": "chủ trì buổi tiệc, hội nghị"
  },
  {
    "lesson": "2",
    "words": "歓迎",
    "reading": "かんげい",
    "meaning": "hoan nghênh"
  },
  {
    "lesson": "2",
    "words": "窓口",
    "reading": "まどぐち",
    "meaning": "cửa bán vé"
  },
  {
    "lesson": "2",
    "words": "手続き",
    "reading": "てつづき",
    "meaning": "thủ tục"
  },
  {
    "lesson": "2",
    "words": "徒歩",
    "reading": "とほ",
    "meaning": "đi bộ"
  },
  {
    "lesson": "2",
    "words": "駐車",
    "reading": "ちゅうしゃ",
    "meaning": "bãi đỗ xe"
  },
  {
    "lesson": "2",
    "words": "違反",
    "reading": "いはん",
    "meaning": "vi phạm"
  },
  {
    "lesson": "2",
    "words": "平日",
    "reading": "へいじつ",
    "meaning": "ngày thường"
  },
  {
    "lesson": "2",
    "words": "日付",
    "reading": "ひづけ",
    "meaning": "ngày tháng"
  },
  {
    "lesson": "2",
    "words": "日中",
    "reading": "にっちゅう",
    "meaning": "ban ngày"
  },
  {
    "lesson": "2",
    "words": "日程",
    "reading": "にってい",
    "meaning": "lịch trình, kế hoạch"
  },
  {
    "lesson": "2",
    "words": "日帰り",
    "reading": "ひがえり",
    "meaning": "đi về trong ngày"
  },
  {
    "lesson": "2",
    "words": "順序",
    "reading": "じゅんじょ",
    "meaning": "thứ tự"
  },
  {
    "lesson": "2",
    "words": "時期",
    "reading": "じき",
    "meaning": "thời kì"
  },
  {
    "lesson": "2",
    "words": "現在",
    "reading": "げんざい",
    "meaning": "hiện tại"
  },
  {
    "lesson": "2",
    "words": "臨時",
    "reading": "りんじ",
    "meaning": "tạm thời (臨時ニュース、臨時バス、臨時電車)"
  },
  {
    "lesson": "2",
    "words": "費用",
    "reading": "ひよう",
    "meaning": "chi phí"
  },
  {
    "lesson": "2",
    "words": "定価",
    "reading": "ていか",
    "meaning": "giá cố định"
  },
  {
    "lesson": "2",
    "words": "割引",
    "reading": "わりびき",
    "meaning": "giảm giá"
  },
  {
    "lesson": "2",
    "words": "おまけ",
    "reading": "おまけ",
    "meaning": "quà khuyến mại、quà kèm theo"
  },
  {
    "lesson": "2",
    "words": "無料",
    "reading": "むりょう",
    "meaning": "miễn phí"
  },
  {
    "lesson": "2",
    "words": "現金",
    "reading": "げんきん",
    "meaning": "tiền mặt"
  },
  {
    "lesson": "2",
    "words": "合計",
    "reading": "ごうけい",
    "meaning": "tổng cộng"
  },
  {
    "lesson": "2",
    "words": "収入",
    "reading": "しゅうにゅう",
    "meaning": "thu nhập"
  },
  {
    "lesson": "2",
    "words": "支出",
    "reading": "ししゅつ",
    "meaning": "chi tiêu"
  },
  {
    "lesson": "2",
    "words": "予算",
    "reading": "よさん",
    "meaning": "ngân sách"
  },
  {
    "lesson": "2",
    "words": "利益",
    "reading": "りえき",
    "meaning": "lợi nhuận"
  },
  {
    "lesson": "2",
    "words": "赤字",
    "reading": "あかじ",
    "meaning": "lỗ, thâm hụt"
  },
  {
    "lesson": "2",
    "words": "経費",
    "reading": "けいひ",
    "meaning": "kinh phí"
  },
  {
    "lesson": "2",
    "words": "勘定",
    "reading": "かんじょう",
    "meaning": "tính toán, thanh toán　（勘定お願いします：chủ quán tính tiền ）"
  },
  {
    "lesson": "2",
    "words": "弁償",
    "reading": "べんしょう",
    "meaning": "bồi thường"
  },
  {
    "lesson": "2",
    "words": "請求",
    "reading": "せいきゅう",
    "meaning": "yêu cầu"
  },
  {
    "lesson": "2",
    "words": "景気",
    "reading": "けいき",
    "meaning": "thường nói về tình hình kinh tế như thế nào"
  },
  {
    "lesson": "2",
    "words": "募金",
    "reading": "ぼきん",
    "meaning": "quyên tiền, gây quỹ"
  },
  {
    "lesson": "2",
    "words": "募集",
    "reading": "ぼしゅう",
    "meaning": "tuyển dụng"
  },
  {
    "lesson": "3",
    "words": "価値",
    "reading": "かち",
    "meaning": "giá trị"
  },
  {
    "lesson": "3",
    "words": "好む",
    "reading": "このむ",
    "meaning": "thích"
  },
  {
    "lesson": "3",
    "words": "嫌う",
    "reading": "きらう",
    "meaning": "ghét　(mức độ 嫌う→恨む→憎む)"
  },
  {
    "lesson": "3",
    "words": "願う",
    "reading": "ねがう",
    "meaning": "ước, yêu cầu"
  },
  {
    "lesson": "3",
    "words": "甘える",
    "reading": "あまえる",
    "meaning": "nũng nịu"
  },
  {
    "lesson": "3",
    "words": "かわいがる",
    "reading": "かわいがる",
    "meaning": "yêu mến, nâng niu"
  },
  {
    "lesson": "3",
    "words": "気付く",
    "reading": "きづく",
    "meaning": "nhận ra"
  },
  {
    "lesson": "3",
    "words": "疑う",
    "reading": "うたがう",
    "meaning": "nghi ngờ"
  },
  {
    "lesson": "3",
    "words": "苦しむ",
    "reading": "くるしむ",
    "meaning": "khổ, chịu đựng"
  },
  {
    "lesson": "3",
    "words": "悲しむ",
    "reading": "かなしむ",
    "meaning": "buồn"
  },
  {
    "lesson": "3",
    "words": "がっかりする",
    "reading": "がっかりする",
    "meaning": "thất vọng"
  },
  {
    "lesson": "3",
    "words": "励ます",
    "reading": "はげます",
    "meaning": "động viên, an ủi nhưng thiên về động viên hơn　 (慰める thiên về an ủi)"
  },
  {
    "lesson": "3",
    "words": "頷く",
    "reading": "うなずく",
    "meaning": "gật đầu, đồng ý"
  },
  {
    "lesson": "3",
    "words": "張り切る",
    "reading": "はりきる",
    "meaning": "hăm hở, làm việc chăm chỉ"
  },
  {
    "lesson": "3",
    "words": "威張る",
    "reading": "いばる",
    "meaning": "kiêu ngạo"
  },
  {
    "lesson": "3",
    "words": "怒鳴る",
    "reading": "どなる",
    "meaning": "hét lên"
  },
  {
    "lesson": "3",
    "words": "暴れる",
    "reading": "あばれる",
    "meaning": "nổi giận, bạo lực"
  },
  {
    "lesson": "3",
    "words": "しゃがむ",
    "reading": "しゃがむ",
    "meaning": "ngồi chơi, ngồi xổm"
  },
  {
    "lesson": "3",
    "words": "退く",
    "reading": "どく",
    "meaning": "làm tránh ra"
  },
  {
    "lesson": "3",
    "words": "退ける",
    "reading": "どける",
    "meaning": "tránh ra"
  },
  {
    "lesson": "3",
    "words": "被る",
    "reading": "かぶる",
    "meaning": "đội (hướng về bản thân)"
  },
  {
    "lesson": "3",
    "words": "被せる",
    "reading": "かぶせる",
    "meaning": "phủ lên (hướng về phía khác)"
  },
  {
    "lesson": "3",
    "words": "かじる",
    "reading": "かじる",
    "meaning": "nhai, cắn (dấu vết)"
  },
  {
    "lesson": "3",
    "words": "撃つ",
    "reading": "うつ",
    "meaning": "bắn"
  },
  {
    "lesson": "3",
    "words": "漕ぐ",
    "reading": "こぐ",
    "meaning": "đạp xe, chèo"
  },
  {
    "lesson": "3",
    "words": "敷く",
    "reading": "しく",
    "meaning": "trải ra"
  },
  {
    "lesson": "3",
    "words": "つぐ (注ぐ)",
    "reading": "つぐ",
    "meaning": "rót (rượu)"
  },
  {
    "lesson": "3",
    "words": "配る",
    "reading": "くばる",
    "meaning": "phân phát"
  },
  {
    "lesson": "3",
    "words": "放る",
    "reading": "ほうる",
    "meaning": "ném, bỏ mặc　（子供を放っておく bỏ mặc đứa trẻ）"
  },
  {
    "lesson": "3",
    "words": "掘る",
    "reading": "ほる",
    "meaning": "đào, khai quật"
  },
  {
    "lesson": "3",
    "words": "撒く",
    "reading": "まく",
    "meaning": "rắc, rải"
  },
  {
    "lesson": "3",
    "words": "測る・計る・量る",
    "reading": "はかる",
    "meaning": "đo, đo đạc"
  },
  {
    "lesson": "3",
    "words": "占う",
    "reading": "うらなう",
    "meaning": "dự đoán, bói"
  },
  {
    "lesson": "3",
    "words": "引っ張る",
    "reading": "ひっぱる",
    "meaning": "kéo"
  },
  {
    "lesson": "3",
    "words": "突く",
    "reading": "つく",
    "meaning": "chọc, đâm"
  },
  {
    "lesson": "3",
    "words": "突き当たる",
    "reading": "つきあたる",
    "meaning": "đi hết đường, đến cuối đường"
  },
  {
    "lesson": "3",
    "words": "立ち止まる",
    "reading": "たちどまる",
    "meaning": "dừng lại"
  },
  {
    "lesson": "3",
    "words": "近寄る",
    "reading": "ちかよる",
    "meaning": "tiếp cận"
  },
  {
    "lesson": "3",
    "words": "横切る",
    "reading": "よこぎる",
    "meaning": "băng xéo qua, cắt ngang hàng, ngang mặt người khác"
  },
  {
    "lesson": "3",
    "words": "転ぶ",
    "reading": "ころぶ",
    "meaning": "ngã"
  },
  {
    "lesson": "3",
    "words": "躓く",
    "reading": "つまずく",
    "meaning": "vấp (Vd: vấp hòn đá)"
  },
  {
    "lesson": "3",
    "words": "ひく",
    "reading": "ひく",
    "meaning": "chèn, cán qua (車にひかれる bị xe cán)"
  },
  {
    "lesson": "3",
    "words": "溺れる",
    "reading": "おぼれる",
    "meaning": "chìm, đắm"
  },
  {
    "lesson": "3",
    "words": "痛む",
    "reading": "いたむ",
    "meaning": "đau"
  },
  {
    "lesson": "3",
    "words": "かかる",
    "reading": "かかる",
    "meaning": "bị nhiễm"
  },
  {
    "lesson": "3",
    "words": "酔う",
    "reading": "よう",
    "meaning": "say"
  },
  {
    "lesson": "3",
    "words": "吐く",
    "reading": "はく",
    "meaning": "thở ra, nôn ra"
  },
  {
    "lesson": "3",
    "words": "診る",
    "reading": "みる",
    "meaning": "chuẩn đoán"
  },
  {
    "lesson": "3",
    "words": "見舞う",
    "reading": "みまう",
    "meaning": "đi thăm bệnh"
  },
  {
    "lesson": "3",
    "words": "勤める",
    "reading": "つとめる",
    "meaning": "làm việc"
  },
  {
    "lesson": "4",
    "words": "稼ぐ",
    "reading": "かせぐ",
    "meaning": "kiếm tiền"
  },
  {
    "lesson": "4",
    "words": "支払う",
    "reading": "しはらう",
    "meaning": "trả tiền"
  },
  {
    "lesson": "4",
    "words": "受け取る",
    "reading": "うけとる",
    "meaning": "nhận"
  },
  {
    "lesson": "4",
    "words": "払い込む",
    "reading": "はらいこむ",
    "meaning": "trả vào"
  },
  {
    "lesson": "4",
    "words": "払い戻す",
    "reading": "はらいもどす",
    "meaning": "trả lại"
  },
  {
    "lesson": "4",
    "words": "引き出す",
    "reading": "ひきだす",
    "meaning": "rút ra"
  },
  {
    "lesson": "4",
    "words": "もうかる",
    "reading": "もうかる",
    "meaning": "có lợi nhuận"
  },
  {
    "lesson": "4",
    "words": "もうける",
    "reading": "もうける",
    "meaning": "kiếm lợi, có con"
  },
  {
    "lesson": "4",
    "words": "落ち込む",
    "reading": "おちこむ",
    "meaning": "giảm, rơi"
  },
  {
    "lesson": "4",
    "words": "売れる",
    "reading": "うれる",
    "meaning": "bán chạy"
  },
  {
    "lesson": "4",
    "words": "売り切れる",
    "reading": "うりきれる",
    "meaning": "bán sạch"
  },
  {
    "lesson": "4",
    "words": "くっ付く",
    "reading": "くっつく",
    "meaning": "gắn vào"
  },
  {
    "lesson": "4",
    "words": "くっ付ける",
    "reading": "くっつける",
    "meaning": "dính vào"
  },
  {
    "lesson": "4",
    "words": "固まる",
    "reading": "かたまる",
    "meaning": "cứng lại"
  },
  {
    "lesson": "4",
    "words": "固める",
    "reading": "かためる",
    "meaning": "làm cứng"
  },
  {
    "lesson": "4",
    "words": "縮む",
    "reading": "ちぢむ",
    "meaning": "ngắn lại, co lại"
  },
  {
    "lesson": "4",
    "words": "縮まる",
    "reading": "ちぢまる",
    "meaning": "làm ngắn"
  },
  {
    "lesson": "4",
    "words": "縮める",
    "reading": "ちぢめる",
    "meaning": "làm ngắn"
  },
  {
    "lesson": "4",
    "words": "沈む",
    "reading": "しずむ",
    "meaning": "chìm, lặn, bị nhấn xuống"
  },
  {
    "lesson": "4",
    "words": "沈める",
    "reading": "しずめる",
    "meaning": "chìm, lặn"
  },
  {
    "lesson": "4",
    "words": "下がる",
    "reading": "さがる",
    "meaning": "rơi"
  },
  {
    "lesson": "4",
    "words": "下げる",
    "reading": "さげる",
    "meaning": "giảm bớt, hạ"
  },
  {
    "lesson": "4",
    "words": "転がる",
    "reading": "ころがる",
    "meaning": "(tự) lăn"
  },
  {
    "lesson": "4",
    "words": "転がす",
    "reading": "ころがす",
    "meaning": "lăn(vật gì đó, lăn quả bóng)"
  },
  {
    "lesson": "4",
    "words": "傾く",
    "reading": "かたむく",
    "meaning": "nghiêng"
  },
  {
    "lesson": "4",
    "words": "傾ける",
    "reading": "かたむける",
    "meaning": "hướng vào"
  },
  {
    "lesson": "4",
    "words": "裏返す",
    "reading": "うらがえす",
    "meaning": "lật úp"
  },
  {
    "lesson": "4",
    "words": "散らかる",
    "reading": "ちらかる",
    "meaning": "bừa bộn, trong mớ hỗn độn"
  },
  {
    "lesson": "4",
    "words": "散らかす",
    "reading": "ちらかす",
    "meaning": "vứt lung tung"
  },
  {
    "lesson": "4",
    "words": "散らばる",
    "reading": "ちらばる",
    "meaning": "văng tứ tung (làm rơi hộp bánh nên bánh văng tứ tung)"
  },
  {
    "lesson": "4",
    "words": "刻む",
    "reading": "きざむ",
    "meaning": "cắt nhỏ, chạm khắc"
  },
  {
    "lesson": "4",
    "words": "挟まる",
    "reading": "はさまる",
    "meaning": "bị kẹp"
  },
  {
    "lesson": "4",
    "words": "挟む",
    "reading": "はさむ",
    "meaning": "kẹp"
  },
  {
    "lesson": "4",
    "words": "つぶれる",
    "reading": "つぶれる",
    "meaning": "bị hỏng, bị nghiền"
  },
  {
    "lesson": "4",
    "words": "つぶす",
    "reading": "つぶす",
    "meaning": "làm hỏng, giết(thời gian)"
  },
  {
    "lesson": "4",
    "words": "凹む",
    "reading": "へこむ",
    "meaning": "lõm"
  },
  {
    "lesson": "4",
    "words": "解ける",
    "reading": "ほどける",
    "meaning": "mở, cởi ra"
  },
  {
    "lesson": "4",
    "words": "解く",
    "reading": "ほどく",
    "meaning": "cởi"
  },
  {
    "lesson": "4",
    "words": "枯れる",
    "reading": "かれる",
    "meaning": "bị héo, bị tàn"
  },
  {
    "lesson": "4",
    "words": "枯らす",
    "reading": "からす",
    "meaning": "héo"
  },
  {
    "lesson": "4",
    "words": "傷む",
    "reading": "いたむ",
    "meaning": "bị hỏng"
  },
  {
    "lesson": "4",
    "words": "湿る",
    "reading": "しめる",
    "meaning": "bị ẩm"
  },
  {
    "lesson": "4",
    "words": "凍る",
    "reading": "こおる",
    "meaning": "đông cứng"
  },
  {
    "lesson": "4",
    "words": "震える",
    "reading": "ふるえる",
    "meaning": "run rẩy"
  },
  {
    "lesson": "4",
    "words": "輝く",
    "reading": "かがやく",
    "meaning": "sáng"
  },
  {
    "lesson": "4",
    "words": "溢れる",
    "reading": "あふれる",
    "meaning": "tràn, đầy"
  },
  {
    "lesson": "4",
    "words": "余る",
    "reading": "あまる",
    "meaning": "còn sót lại"
  },
  {
    "lesson": "4",
    "words": "目立つ",
    "reading": "めだつ",
    "meaning": "nổi bật (thiết kế, hoa văn không nói đến chất lượng, giá cả sản phẩm)"
  },
  {
    "lesson": "4",
    "words": "見下ろす",
    "reading": "みおろす",
    "meaning": "nhìn xuống"
  },
  {
    "lesson": "4",
    "words": "戦う/闘う",
    "reading": "たたかう",
    "meaning": "đánh nhau, tranh chấp"
  },
  {
    "lesson": "5",
    "words": "敗れる",
    "reading": "やぶれる",
    "meaning": "bị đánh bại"
  },
  {
    "lesson": "5",
    "words": "逃げる",
    "reading": "にげる",
    "meaning": "chạy trốn"
  },
  {
    "lesson": "5",
    "words": "逃がす",
    "reading": "にがす",
    "meaning": "Để mất; để tuột mất (tuột mất một cơ hội ), Thả (thả con mèo ra)"
  },
  {
    "lesson": "5",
    "words": "戻る",
    "reading": "もどる",
    "meaning": "quay lại"
  },
  {
    "lesson": "5",
    "words": "戻す",
    "reading": "もどす",
    "meaning": "để trả lại"
  },
  {
    "lesson": "5",
    "words": "はまる",
    "reading": "はまる",
    "meaning": "khớp, bị kẹt"
  },
  {
    "lesson": "5",
    "words": "はめる",
    "reading": "はめる",
    "meaning": "làm chặt lại"
  },
  {
    "lesson": "5",
    "words": "扱う",
    "reading": "あつかう",
    "meaning": "đối xử, xử lý"
  },
  {
    "lesson": "5",
    "words": "関わる",
    "reading": "かかわる",
    "meaning": "liên quan"
  },
  {
    "lesson": "5",
    "words": "目指す",
    "reading": "めざす",
    "meaning": "hướng tới mục tiêu (ý nghĩa tích cực)"
  },
  {
    "lesson": "5",
    "words": "立つ・発つ",
    "reading": "たつ",
    "meaning": "khởi hành, rời khỏi"
  },
  {
    "lesson": "5",
    "words": "迎える",
    "reading": "むかえる",
    "meaning": "đón"
  },
  {
    "lesson": "5",
    "words": "持てる",
    "reading": "もてる",
    "meaning": "phổ biến, được yêu thích"
  },
  {
    "lesson": "5",
    "words": "例える",
    "reading": "たとえる",
    "meaning": "ví như, so với"
  },
  {
    "lesson": "5",
    "words": "努める",
    "reading": "つとめる",
    "meaning": "nỗ lực, cố gắng"
  },
  {
    "lesson": "5",
    "words": "務まる",
    "reading": "つとまる",
    "meaning": "được đảm nhiệm"
  },
  {
    "lesson": "5",
    "words": "務める",
    "reading": "つとめる",
    "meaning": "phục vụ, làm"
  },
  {
    "lesson": "5",
    "words": "取り消す",
    "reading": "とりけす",
    "meaning": "hủy"
  },
  {
    "lesson": "5",
    "words": "終える",
    "reading": "おえる",
    "meaning": "kết thúc"
  },
  {
    "lesson": "5",
    "words": "呼びかける",
    "reading": "よぶかける",
    "meaning": "gọi"
  },
  {
    "lesson": "5",
    "words": "呼び出す",
    "reading": "よぶだす",
    "meaning": "triệu hồi, triệu tập"
  },
  {
    "lesson": "5",
    "words": "有難い",
    "reading": "ありがたい",
    "meaning": "cảm ơn"
  },
  {
    "lesson": "5",
    "words": "申し訳ない",
    "reading": "もうしわけない",
    "meaning": "xin lỗi"
  },
  {
    "lesson": "5",
    "words": "めでたい",
    "reading": "めでたい",
    "meaning": "vui, hạnh phúc"
  },
  {
    "lesson": "5",
    "words": "幸いな",
    "reading": "さいわいな",
    "meaning": "hạnh phúc"
  },
  {
    "lesson": "5",
    "words": "恋しい",
    "reading": "こいしい",
    "meaning": "nhớ (thiên về tình cảm, muốn gặp, muốn làm liền bây giờ)"
  },
  {
    "lesson": "5",
    "words": "懐かしい",
    "reading": "なつかしい",
    "meaning": "hoài niệm, nhớ về quá khứ đã qua"
  },
  {
    "lesson": "5",
    "words": "幼い",
    "reading": "おさない",
    "meaning": "non nớt, bé bỏng"
  },
  {
    "lesson": "5",
    "words": "心細い",
    "reading": "こころぼそい",
    "meaning": "cô đơn, mất đi niềm tin, hy vọng"
  },
  {
    "lesson": "5",
    "words": "かわいそうな",
    "reading": "かわいそうな",
    "meaning": "tội nghiệp"
  },
  {
    "lesson": "5",
    "words": "気の毒な",
    "reading": "きのどくな",
    "meaning": "đáng tiếc, đáng thương"
  },
  {
    "lesson": "5",
    "words": "貧しい",
    "reading": "まずしい",
    "meaning": "nghèo"
  },
  {
    "lesson": "5",
    "words": "惜しい",
    "reading": "おしい",
    "meaning": "đáng tiếc, thường dùng để nói về việc thiếu chút nữa là thành công"
  },
  {
    "lesson": "5",
    "words": "仕方（が）ない",
    "reading": "しかた（が）ない",
    "meaning": "vô phương (chọn cái này, chỉ còn cách này thôi)"
  },
  {
    "lesson": "5",
    "words": "やむを得ない",
    "reading": "やむをえない",
    "meaning": "không tránh khỏi (mang tính ép buộc cao hơn)"
  },
  {
    "lesson": "5",
    "words": "面倒くさい",
    "reading": "めんどうくさい",
    "meaning": "phiền toái"
  },
  {
    "lesson": "5",
    "words": "しつこい",
    "reading": "しつこい",
    "meaning": "lằng nhằng, nói hoài, càm ràm hoài (thái độ bực mình)"
  },
  {
    "lesson": "5",
    "words": "くどい",
    "reading": "くどい",
    "meaning": "dài dòng, lắm lời (nhẹ hơn しつこい)"
  },
  {
    "lesson": "5",
    "words": "煙い",
    "reading": "けむい",
    "meaning": "nhiều khói"
  },
  {
    "lesson": "5",
    "words": "邪魔な",
    "reading": "じゃまな",
    "meaning": "vướng víu"
  },
  {
    "lesson": "5",
    "words": "うるさい",
    "reading": "うるさい",
    "meaning": "ồn ào, om sòm"
  },
  {
    "lesson": "5",
    "words": "騒々しい",
    "reading": "そうぞうしい",
    "meaning": "ồn ào, sôi nổi (thường thể hiện khung cảnh ồn ào)"
  },
  {
    "lesson": "5",
    "words": "慌ただしい",
    "reading": "あわただしい",
    "meaning": "bận rộn (nhiều thứ linh tinh phải xử lý 今日は慌ただしい日だった。)"
  },
  {
    "lesson": "5",
    "words": "そそっかしい",
    "reading": "そそっかしい",
    "meaning": "hấp tấp (tính cách)"
  },
  {
    "lesson": "5",
    "words": "思いがけない",
    "reading": "おもいがけない",
    "meaning": "không ngờ đến"
  },
  {
    "lesson": "5",
    "words": "何気ない",
    "reading": "なにげない",
    "meaning": "ngẫu nhiên, tình cờ, không cố ý"
  },
  {
    "lesson": "5",
    "words": "とんでもない",
    "reading": "とんでもない",
    "meaning": "không thể tin được, không có chuyện đó đâu"
  },
  {
    "lesson": "5",
    "words": "くだらない",
    "reading": "くだらない",
    "meaning": "vô giá trị, vô nghĩa"
  },
  {
    "lesson": "5",
    "words": "ばかばかしい",
    "reading": "ばかばかしい",
    "meaning": "vớ vẩn, ngu ngốc"
  },
  {
    "lesson": "5",
    "words": "でたらめ(な)",
    "reading": "",
    "meaning": "bừa, linh tinh"
  },
  {
    "lesson": "6",
    "words": "だらしない",
    "reading": "だらしない",
    "meaning": "không gọn gàng (tính cách)"
  },
  {
    "lesson": "6",
    "words": "ずうずうしい",
    "reading": "ずうずうしい",
    "meaning": "vô liêm sỉ, trơ trẽn"
  },
  {
    "lesson": "6",
    "words": "狡い",
    "reading": "ずるい",
    "meaning": "ranh mãnh, chỉ tính có lợi cho bản thân"
  },
  {
    "lesson": "6",
    "words": "憎らしい",
    "reading": "にくらしい",
    "meaning": "thấy ghét ghét (ganh tị)"
  },
  {
    "lesson": "6",
    "words": "憎い",
    "reading": "にくい",
    "meaning": "căm ghét đến mức muốn giết(mức độ 嫌う→恨む→憎む)"
  },
  {
    "lesson": "6",
    "words": "険しい",
    "reading": "けわしい",
    "meaning": "dốc, nghiêm khắc"
  },
  {
    "lesson": "6",
    "words": "辛い",
    "reading": "つらい",
    "meaning": "đau đớn"
  },
  {
    "lesson": "6",
    "words": "きつい",
    "reading": "",
    "meaning": "chật, gay go, khó khăn"
  },
  {
    "lesson": "6",
    "words": "緩い",
    "reading": "ゆるい",
    "meaning": "lỏng, chậm"
  },
  {
    "lesson": "6",
    "words": "鈍い",
    "reading": "にぶい",
    "meaning": "cùn, đần độn, kém"
  },
  {
    "lesson": "6",
    "words": "鋭い",
    "reading": "するどい",
    "meaning": "sắc, sắc sảo"
  },
  {
    "lesson": "6",
    "words": "荒い・粗い",
    "reading": "あらい",
    "meaning": "bạo lực, khốc liệt"
  },
  {
    "lesson": "6",
    "words": "強引な",
    "reading": "ごういんな",
    "meaning": "cưỡng bức, bắt buộc"
  },
  {
    "lesson": "6",
    "words": "勝手な",
    "reading": "かってな",
    "meaning": "tự ý, tự tiện"
  },
  {
    "lesson": "6",
    "words": "強気な",
    "reading": "つよきな",
    "meaning": "kiên định, vững vàng"
  },
  {
    "lesson": "6",
    "words": "頑固な",
    "reading": "がんこな",
    "meaning": "bảo thủ, cố chấp"
  },
  {
    "lesson": "6",
    "words": "過剰な",
    "reading": "かじょうな",
    "meaning": "vượt quá, thái quá (không đếm được) (phản ứng)"
  },
  {
    "lesson": "6",
    "words": "重大な",
    "reading": "じゅうたいな",
    "meaning": "trọng đại　(liên quan đến tính mạng, bệnh tình, tin tức, sự kiện)"
  },
  {
    "lesson": "6",
    "words": "深刻な",
    "reading": "しんこくな",
    "meaning": "nghiêm trọng"
  },
  {
    "lesson": "6",
    "words": "気楽な",
    "reading": "きらくな",
    "meaning": "thoải mái, nhàn hạ"
  },
  {
    "lesson": "6",
    "words": "安易な",
    "reading": "あんいな",
    "meaning": "dễ dàng, đơn giản (suy nghĩ)"
  },
  {
    "lesson": "6",
    "words": "運",
    "reading": "うん",
    "meaning": "số, vận mệnh"
  },
  {
    "lesson": "6",
    "words": "勘",
    "reading": "かん",
    "meaning": "trực giác, linh cảm, kiểu như giác quan thứ sáu"
  },
  {
    "lesson": "6",
    "words": "感覚",
    "reading": "かんかく",
    "meaning": "cảm giác, giác quan (5 giác quan)"
  },
  {
    "lesson": "6",
    "words": "神経",
    "reading": "しんけい",
    "meaning": "thần kinh, điều khiển giác quan"
  },
  {
    "lesson": "6",
    "words": "記憶",
    "reading": "きおく",
    "meaning": "ký ức, trí nhớ (記憶力 khả năng ghi nhớ)"
  },
  {
    "lesson": "6",
    "words": "様子",
    "reading": "ようす",
    "meaning": "trạng thái, tình trạng"
  },
  {
    "lesson": "6",
    "words": "雰囲気",
    "reading": "ふんいき",
    "meaning": "bầu không khí"
  },
  {
    "lesson": "6",
    "words": "魅力",
    "reading": "みりょく",
    "meaning": "mị lực, sức hút, sức hấp dẫn"
  },
  {
    "lesson": "6",
    "words": "機嫌",
    "reading": "きげん",
    "meaning": "tâm trạng, thần thái (今日は機嫌が良さそうだね) gần nghĩa với 気分"
  },
  {
    "lesson": "6",
    "words": "感心",
    "reading": "かんしん",
    "meaning": "quan tâm"
  },
  {
    "lesson": "6",
    "words": "意欲",
    "reading": "いよく",
    "meaning": "ý dục, muốn"
  },
  {
    "lesson": "6",
    "words": "全力",
    "reading": "ぜんりょく",
    "meaning": "toàn lực"
  },
  {
    "lesson": "6",
    "words": "本気",
    "reading": "ほんき",
    "meaning": "nghiêm chỉnh, chân thực, nghiêm túc, thật lòng"
  },
  {
    "lesson": "6",
    "words": "意識",
    "reading": "いしき",
    "meaning": "nhận thức, ý thức nhận biết"
  },
  {
    "lesson": "6",
    "words": "感激",
    "reading": "かんげき",
    "meaning": "cảm kích, xúc động"
  },
  {
    "lesson": "6",
    "words": "同情",
    "reading": "どうじょう",
    "meaning": "đồng cảm với khó khăn của người khác"
  },
  {
    "lesson": "6",
    "words": "同意",
    "reading": "どうい",
    "meaning": "đồng ý"
  },
  {
    "lesson": "6",
    "words": "同感",
    "reading": "どうかん",
    "meaning": "đồng ý, cùng ý kiến"
  },
  {
    "lesson": "6",
    "words": "対立",
    "reading": "たいりつ",
    "meaning": "đối lập"
  },
  {
    "lesson": "6",
    "words": "主張",
    "reading": "しゅちょう",
    "meaning": "chủ trương"
  },
  {
    "lesson": "6",
    "words": "要求",
    "reading": "ようきゅう",
    "meaning": "yêu cầu"
  },
  {
    "lesson": "6",
    "words": "得",
    "reading": "とく",
    "meaning": "lợi ích, lãi"
  },
  {
    "lesson": "6",
    "words": "損",
    "reading": "そん",
    "meaning": "lỗ, tổn thất"
  },
  {
    "lesson": "6",
    "words": "勝負",
    "reading": "しょうぶ",
    "meaning": "đánh cược, trận đấu"
  },
  {
    "lesson": "6",
    "words": "勢い",
    "reading": "いきおい",
    "meaning": "mạnh mẽ, tràn trề"
  },
  {
    "lesson": "6",
    "words": "爆発",
    "reading": "ばくはつ",
    "meaning": "nổ"
  },
  {
    "lesson": "6",
    "words": "災害",
    "reading": "さいがい",
    "meaning": "thảm họa　(động đất, sóng thần)"
  },
  {
    "lesson": "6",
    "words": "天候",
    "reading": "てんこう",
    "meaning": "thời tiết"
  },
  {
    "lesson": "6",
    "words": "乾燥",
    "reading": "かんそう",
    "meaning": "sự khô khan, khô hạn"
  },
  {
    "lesson": "7",
    "words": "観測",
    "reading": "かんそく",
    "meaning": "quan sát, dự đoán"
  },
  {
    "lesson": "7",
    "words": "遭難",
    "reading": "そうなん",
    "meaning": "gặp nạn (khi bị sóng thần, khi leo núi, v.v)"
  },
  {
    "lesson": "7",
    "words": "発生",
    "reading": "はっせい",
    "meaning": "phát sinh"
  },
  {
    "lesson": "7",
    "words": "登場",
    "reading": "とうじょう",
    "meaning": "lối vào, xuất hiện"
  },
  {
    "lesson": "7",
    "words": "回復",
    "reading": "かいふく",
    "meaning": "hồi phục"
  },
  {
    "lesson": "7",
    "words": "援助",
    "reading": "えんじょ",
    "meaning": "viện trợ"
  },
  {
    "lesson": "7",
    "words": "保険",
    "reading": "ほけん",
    "meaning": "bảo hiểm"
  },
  {
    "lesson": "7",
    "words": "追加",
    "reading": "ついか",
    "meaning": "thêm vào"
  },
  {
    "lesson": "7",
    "words": "応用",
    "reading": "おうよう",
    "meaning": "ứng dụng, Áp dụng"
  },
  {
    "lesson": "7",
    "words": "解答",
    "reading": "かいとう",
    "meaning": "giải quyết vấn đề, nghi vấn"
  },
  {
    "lesson": "7",
    "words": "結論",
    "reading": "けつろん",
    "meaning": "kết luận"
  },
  {
    "lesson": "7",
    "words": "案",
    "reading": "あん",
    "meaning": "kế hoạch, ý tưởng"
  },
  {
    "lesson": "7",
    "words": "集中",
    "reading": "しゅうちゅう",
    "meaning": "tập trung"
  },
  {
    "lesson": "7",
    "words": "区別",
    "reading": "くべつ",
    "meaning": "phân biệt"
  },
  {
    "lesson": "7",
    "words": "差別",
    "reading": "さべつ",
    "meaning": "khác biệt (trong cách đối xử, 人種差別 phân biệt chủng tộc )"
  },
  {
    "lesson": "7",
    "words": "中間",
    "reading": "ちゅうかん",
    "meaning": "ở giữa"
  },
  {
    "lesson": "7",
    "words": "逆",
    "reading": "ぎゃく",
    "meaning": "ngược lại"
  },
  {
    "lesson": "7",
    "words": "よそ",
    "reading": "よそ",
    "meaning": "nơi khác"
  },
  {
    "lesson": "7",
    "words": "外",
    "reading": "ほか",
    "meaning": "người (khác), ngoài ra"
  },
  {
    "lesson": "7",
    "words": "境",
    "reading": "さかい",
    "meaning": "biên giới, ngăn cách"
  },
  {
    "lesson": "7",
    "words": "半ば",
    "reading": "なかば",
    "meaning": "một nửa, ở giữa (văn viết của 途中)"
  },
  {
    "lesson": "7",
    "words": "普段",
    "reading": "ふだん",
    "meaning": "bình thường"
  },
  {
    "lesson": "7",
    "words": "日常",
    "reading": "にちじょう",
    "meaning": "hàng ngày"
  },
  {
    "lesson": "7",
    "words": "一般",
    "reading": "いっぱん",
    "meaning": "tổng quan, cái chung"
  },
  {
    "lesson": "7",
    "words": "常識",
    "reading": "じょうしき",
    "meaning": "ý thức tuân thủ luật lệ, phép tắc thông thường"
  },
  {
    "lesson": "7",
    "words": "ことわざ",
    "reading": "ことわざ",
    "meaning": "thành ngữ"
  },
  {
    "lesson": "7",
    "words": "権利",
    "reading": "けんり",
    "meaning": "quyền lợi"
  },
  {
    "lesson": "7",
    "words": "義務",
    "reading": "ぎむ",
    "meaning": "nghĩa vụ"
  },
  {
    "lesson": "7",
    "words": "きっかけ",
    "reading": "きっかけ",
    "meaning": "cơ hội, khởi đầu"
  },
  {
    "lesson": "7",
    "words": "行動",
    "reading": "こうどう",
    "meaning": "hành động"
  },
  {
    "lesson": "7",
    "words": "使用",
    "reading": "しよう",
    "meaning": "sử dụng"
  },
  {
    "lesson": "7",
    "words": "提出",
    "reading": "ていしゅつ",
    "meaning": "đề xuất, giao nộp"
  },
  {
    "lesson": "7",
    "words": "期限",
    "reading": "きげん",
    "meaning": "giới hạn, kỳ hạn"
  },
  {
    "lesson": "7",
    "words": "延期",
    "reading": "えんき",
    "meaning": "trì hoãn"
  },
  {
    "lesson": "7",
    "words": "延長",
    "reading": "えんちょう",
    "meaning": "kéo dài"
  },
  {
    "lesson": "7",
    "words": "短縮",
    "reading": "たんしゅく",
    "meaning": "rút ngắn"
  },
  {
    "lesson": "7",
    "words": "映像",
    "reading": "えいぞう",
    "meaning": "hình ảnh, phim ảnh trên tivi, điện thoại, camera"
  },
  {
    "lesson": "7",
    "words": "撮影",
    "reading": "さつえい",
    "meaning": "chụp ảnh"
  },
  {
    "lesson": "7",
    "words": "背景",
    "reading": "はいけい",
    "meaning": "bối cảnh, phông nền"
  },
  {
    "lesson": "7",
    "words": "独立",
    "reading": "どくりつ",
    "meaning": "độc lập"
  },
  {
    "lesson": "7",
    "words": "候補",
    "reading": "こうほ",
    "meaning": "ứng cử, ứng cử viên"
  },
  {
    "lesson": "7",
    "words": "支持",
    "reading": "しじ",
    "meaning": "chống đỡ, ủng hộ (支持者: người ủng hộ)"
  },
  {
    "lesson": "7",
    "words": "投票",
    "reading": "とうひょう",
    "meaning": "bầu cử"
  },
  {
    "lesson": "7",
    "words": "当選",
    "reading": "とうせん",
    "meaning": "trúng cử, trúng giải"
  },
  {
    "lesson": "7",
    "words": "抽選",
    "reading": "ちゅうせん",
    "meaning": "rút thăm"
  },
  {
    "lesson": "7",
    "words": "配布",
    "reading": "はいふ",
    "meaning": "phân phát"
  },
  {
    "lesson": "7",
    "words": "失格",
    "reading": "しっかく",
    "meaning": "mất tư cách, mất quyền"
  },
  {
    "lesson": "7",
    "words": "余暇",
    "reading": "よか",
    "meaning": "thời gian rỗi"
  },
  {
    "lesson": "7",
    "words": "行事",
    "reading": "ぎょうじ",
    "meaning": "sự kiện"
  },
  {
    "lesson": "7",
    "words": "理想",
    "reading": "りそう",
    "meaning": "lý tưởng"
  },
  {
    "lesson": "8",
    "words": "現実",
    "reading": "げんじつ",
    "meaning": "hiện thực, thực tế"
  },
  {
    "lesson": "8",
    "words": "体験",
    "reading": "たいけん",
    "meaning": "trải nghiệm"
  },
  {
    "lesson": "8",
    "words": "空想",
    "reading": "くうそう",
    "meaning": "không tưởng, kỳ diệu"
  },
  {
    "lesson": "8",
    "words": "実物",
    "reading": "じつぶつ",
    "meaning": "thực chất, nguyên bản"
  },
  {
    "lesson": "8",
    "words": "実現",
    "reading": "じつげん",
    "meaning": "hiện thực"
  },
  {
    "lesson": "8",
    "words": "実施",
    "reading": "じっし",
    "meaning": "thực thi"
  },
  {
    "lesson": "8",
    "words": "許可",
    "reading": "きょか",
    "meaning": "sự cho phép"
  },
  {
    "lesson": "8",
    "words": "全体",
    "reading": "ぜんたい",
    "meaning": "toàn thể"
  },
  {
    "lesson": "8",
    "words": "部分",
    "reading": "ぶぶん",
    "meaning": "bộ phận"
  },
  {
    "lesson": "8",
    "words": "統一",
    "reading": "とういつ",
    "meaning": "thống nhất"
  },
  {
    "lesson": "8",
    "words": "拡大",
    "reading": "かくだい",
    "meaning": "mở rộng, tăng lên"
  },
  {
    "lesson": "8",
    "words": "縮小",
    "reading": "しゅくしょう",
    "meaning": "co nhỏ, nén lại"
  },
  {
    "lesson": "8",
    "words": "集合",
    "reading": "しゅうごう",
    "meaning": "tập hợp"
  },
  {
    "lesson": "8",
    "words": "方向",
    "reading": "ほうこう",
    "meaning": "phương hướng"
  },
  {
    "lesson": "8",
    "words": "間隔",
    "reading": "かんかく",
    "meaning": "khoảng cách, khoảng giữa"
  },
  {
    "lesson": "8",
    "words": "脇",
    "reading": "わき",
    "meaning": "phía bên, bên hông, bênh nách"
  },
  {
    "lesson": "8",
    "words": "通過",
    "reading": "つうか",
    "meaning": "thông qua"
  },
  {
    "lesson": "8",
    "words": "移動",
    "reading": "いどう",
    "meaning": "di chuyển"
  },
  {
    "lesson": "8",
    "words": "停止",
    "reading": "ていし",
    "meaning": "dừng lại, tạm dừng"
  },
  {
    "lesson": "8",
    "words": "低下",
    "reading": "ていか",
    "meaning": "rơi xuống, từ chối"
  },
  {
    "lesson": "8",
    "words": "超過",
    "reading": "ちょうか",
    "meaning": "vượt quá đếm được (tiền, thời gian, bệnh)"
  },
  {
    "lesson": "8",
    "words": "立ち上がる",
    "reading": "たちあがる",
    "meaning": "đứng lên"
  },
  {
    "lesson": "8",
    "words": "飛び上がる",
    "reading": "とびあがる",
    "meaning": "bay lên , nhảy lên, bất ngờ"
  },
  {
    "lesson": "8",
    "words": "浮かび上がる",
    "reading": "うかびあがる",
    "meaning": "nổi lên, nổi lên tình nghi"
  },
  {
    "lesson": "8",
    "words": "舞い上がる",
    "reading": "まいあがる",
    "meaning": "bay vút lên, tâm trạng bay bổng"
  },
  {
    "lesson": "8",
    "words": "燃え上がる",
    "reading": "もえあがる",
    "meaning": "bốc cháy lên"
  },
  {
    "lesson": "8",
    "words": "盛り上がる",
    "reading": "もりあがる",
    "meaning": "chồng chất lên, tăng lên, phấn khích"
  },
  {
    "lesson": "8",
    "words": "沸(湧)き上がる",
    "reading": "わきあがる",
    "meaning": "sôi lên, mãnh liệt hơn"
  },
  {
    "lesson": "8",
    "words": "晴れ上がる",
    "reading": "はれあがる",
    "meaning": "sáng sủa lên"
  },
  {
    "lesson": "8",
    "words": "震え上がる",
    "reading": "ふるえあがる",
    "meaning": "run bắn lên"
  },
  {
    "lesson": "8",
    "words": "縮み上がる",
    "reading": "ちぢみあがる",
    "meaning": "Co rúm lại; sợ hãi; khúm núm"
  },
  {
    "lesson": "8",
    "words": "干上がる",
    "reading": "ひあがる",
    "meaning": "khô nẻ"
  },
  {
    "lesson": "8",
    "words": "でき上がる",
    "reading": "できあがる",
    "meaning": "hoàn thành"
  },
  {
    "lesson": "8",
    "words": "持ち上げる",
    "reading": "もちあげる",
    "meaning": "nhấc lên"
  },
  {
    "lesson": "8",
    "words": "見上げる",
    "reading": "みあげる",
    "meaning": "ngước lên, ngưỡng mộ"
  },
  {
    "lesson": "8",
    "words": "積み上げる",
    "reading": "つみあげる",
    "meaning": "vun lên, chất lên"
  },
  {
    "lesson": "8",
    "words": "打ち上げる",
    "reading": "うちあげる",
    "meaning": "hoàn thành; phóng; bắn lên"
  },
  {
    "lesson": "8",
    "words": "立ち上げる",
    "reading": "たちあげる",
    "meaning": "khởi động, thành lập"
  },
  {
    "lesson": "8",
    "words": "切り上げる",
    "reading": "きりあげる",
    "meaning": "tạm ngưng, cắt"
  },
  {
    "lesson": "8",
    "words": "繰り上げる",
    "reading": "くりあげる",
    "meaning": "sớm hơn (lịch trình), tiến lên"
  },
  {
    "lesson": "8",
    "words": "磨き上げる",
    "reading": "みがきあげる",
    "meaning": "đánh bóng lên"
  },
  {
    "lesson": "8",
    "words": "鍛え上げる",
    "reading": "きたえあげる",
    "meaning": "dạy dỗ, rèn đúc"
  },
  {
    "lesson": "8",
    "words": "書き上げる",
    "reading": "かきあげる",
    "meaning": "viết xong"
  },
  {
    "lesson": "8",
    "words": "育て上げる",
    "reading": "そだてあげる",
    "meaning": "nuôi lớn"
  },
  {
    "lesson": "8",
    "words": "読み上げる",
    "reading": "よみあげる",
    "meaning": "đọc từng cái một"
  },
  {
    "lesson": "8",
    "words": "数え上げる",
    "reading": "かぞえあげる",
    "meaning": "đếm từng cái một, liệt kê"
  },
  {
    "lesson": "8",
    "words": "投げ出す",
    "reading": "なげだす",
    "meaning": "ném ra ngoài, ngồi gác chéo chân lên"
  },
  {
    "lesson": "8",
    "words": "持ち出す",
    "reading": "もちだす",
    "meaning": "mang ra ngoài"
  },
  {
    "lesson": "8",
    "words": "追い出す",
    "reading": "おいだす",
    "meaning": "đuổi cổ, tống cổ"
  },
  {
    "lesson": "8",
    "words": "放り出す",
    "reading": "ほうりだす",
    "meaning": "quẳng đi"
  },
  {
    "lesson": "9",
    "words": "貸し出す",
    "reading": "かしだす",
    "meaning": "cho vay; cho mượn, phải trả lại (do thói quen dùng từ)"
  },
  {
    "lesson": "9",
    "words": "聞き出す",
    "reading": "ききだす",
    "meaning": "lấy thông tin, chất vấn"
  },
  {
    "lesson": "9",
    "words": "連れ出す",
    "reading": "つれだす",
    "meaning": "dẫn ra ngoài"
  },
  {
    "lesson": "9",
    "words": "引っ張り出す",
    "reading": "ひっぱりだす",
    "meaning": "lôi ra; đem ra; kéo ra ngoài"
  },
  {
    "lesson": "9",
    "words": "逃げ出す",
    "reading": "にげだす",
    "meaning": "chạy trốn"
  },
  {
    "lesson": "9",
    "words": "飛び出す",
    "reading": "とびだす",
    "meaning": "chạy ra; nhảy ra; bay ra"
  },
  {
    "lesson": "9",
    "words": "見つけ出す",
    "reading": "みつけだす",
    "meaning": "biết là có => tìm => để ra ngoài"
  },
  {
    "lesson": "9",
    "words": "探し出す",
    "reading": "さがしだす",
    "meaning": "phát hiện được => để ra"
  },
  {
    "lesson": "9",
    "words": "書き出す",
    "reading": "かきだす",
    "meaning": "viết ra"
  },
  {
    "lesson": "9",
    "words": "飛び込む",
    "reading": "とびこむ",
    "meaning": "nhảy vào, lao mình vào"
  },
  {
    "lesson": "9",
    "words": "駆け込む",
    "reading": "かけこむ",
    "meaning": "chạy bổ vào; đâm sầm vào"
  },
  {
    "lesson": "9",
    "words": "割り込む",
    "reading": "わりこむ",
    "meaning": "chen vào; xen ngang"
  },
  {
    "lesson": "9",
    "words": "差し込む",
    "reading": "さしこむ",
    "meaning": "cắm vào"
  },
  {
    "lesson": "9",
    "words": "染み込む",
    "reading": "しみこむ",
    "meaning": "thấm vào trong, thấm qua"
  },
  {
    "lesson": "9",
    "words": "引っ込む",
    "reading": "ひっこむ",
    "meaning": "lui vào trong"
  },
  {
    "lesson": "9",
    "words": "詰め込む",
    "reading": "つめこむ",
    "meaning": "nhét vào; tống vào"
  },
  {
    "lesson": "9",
    "words": "飲み込む",
    "reading": "のみこむ",
    "meaning": "nuốt, hiểu; thành thục"
  },
  {
    "lesson": "9",
    "words": "運び込む",
    "reading": "はこびこむ",
    "meaning": "mang vào bên trong"
  },
  {
    "lesson": "9",
    "words": "打ち込む",
    "reading": "うちこむ",
    "meaning": "Đóng vào(đinh); găm vào; nhập vào (thông tin )"
  },
  {
    "lesson": "9",
    "words": "注ぎ込む",
    "reading": "そそぎこむ",
    "meaning": "dồn hết vào，đổ vào"
  },
  {
    "lesson": "9",
    "words": "引き込む",
    "reading": "ひきこむ",
    "meaning": "lôi kéo vào, dẫn vào"
  },
  {
    "lesson": "9",
    "words": "書き込む",
    "reading": "かきこむ",
    "meaning": "ghi vào, viết vào"
  },
  {
    "lesson": "9",
    "words": "巻き込む",
    "reading": "まきこむ",
    "meaning": "lôi cuốn, hấp dẫn, dính líu"
  },
  {
    "lesson": "9",
    "words": "追い込む",
    "reading": "おいこむ",
    "meaning": "lùa; dồn (dồn ai đó vào tình huống nguy hiểm)"
  },
  {
    "lesson": "9",
    "words": "呼び込む",
    "reading": "よびこむ",
    "meaning": "mời gọi, lôi kéo"
  },
  {
    "lesson": "9",
    "words": "座り込む",
    "reading": "すわりこむ",
    "meaning": "ngồi lì"
  },
  {
    "lesson": "9",
    "words": "寝込む",
    "reading": "ねこむ",
    "meaning": "ngủ li bì"
  },
  {
    "lesson": "9",
    "words": "話し込む",
    "reading": "はなしこむ",
    "meaning": "Đi sâu vào cuộc thảo luận, mải nói chuyện"
  },
  {
    "lesson": "9",
    "words": "黙り込む",
    "reading": "だまりこむ",
    "meaning": "chìm vào yên lặng; nín lặng"
  },
  {
    "lesson": "9",
    "words": "泊まり込む",
    "reading": "とまりこむ",
    "meaning": "trọ lại"
  },
  {
    "lesson": "9",
    "words": "住み込む",
    "reading": "すみこむ",
    "meaning": "sinh sống"
  },
  {
    "lesson": "9",
    "words": "煮込む",
    "reading": "にこむ",
    "meaning": "nấu; ninh kỹ"
  },
  {
    "lesson": "9",
    "words": "売り込む",
    "reading": "うりこむ",
    "meaning": "nổi danh; có tiếng, cung cấp tình báo"
  },
  {
    "lesson": "9",
    "words": "頼み込む",
    "reading": "たのみこむ",
    "meaning": "yêu cầu khẩn khoản"
  },
  {
    "lesson": "9",
    "words": "教え込む",
    "reading": "おしえこむ",
    "meaning": "dạy dỗ"
  },
  {
    "lesson": "9",
    "words": "話し合う",
    "reading": "はなしあう",
    "meaning": "thảo luận; trao đổi"
  },
  {
    "lesson": "9",
    "words": "言い合う",
    "reading": "いいあう",
    "meaning": "tranh luận. cãi cọ"
  },
  {
    "lesson": "9",
    "words": "語り合う",
    "reading": "かたりあう",
    "meaning": "trò chuyện cùng nhau; nói chuyện với nhau"
  },
  {
    "lesson": "9",
    "words": "見つめ合う",
    "reading": "みつめあう",
    "meaning": "tìm thấy nhau (tình yêu)"
  },
  {
    "lesson": "9",
    "words": "向かい合う",
    "reading": "むかいあう",
    "meaning": "đối diện;đối mặt với nhau"
  },
  {
    "lesson": "9",
    "words": "助け合う",
    "reading": "たすけあう",
    "meaning": "hợp tác giúp đỡ lẫn nhau"
  },
  {
    "lesson": "9",
    "words": "分け合う",
    "reading": "わけあう",
    "meaning": "chia sẻ, chia sớt, chia đều ra.."
  },
  {
    "lesson": "9",
    "words": "出し合う",
    "reading": "だしあう",
    "meaning": "đóng góp, phối hợp, cùng góp phần"
  },
  {
    "lesson": "9",
    "words": "申し合わせる",
    "reading": "もうしあわせる",
    "meaning": "thu xếp"
  },
  {
    "lesson": "9",
    "words": "誘い合わせる",
    "reading": "さそいあわせる",
    "meaning": "hẹn nhau, rủ nhau"
  },
  {
    "lesson": "9",
    "words": "隣り合わせる",
    "reading": "となりあわせる",
    "meaning": "bên cạnh nhau"
  },
  {
    "lesson": "9",
    "words": "組み合わせる",
    "reading": "くみあわせる",
    "meaning": "ghép lại; kết hợp; liên kết lại; liên kết; phối hợp"
  },
  {
    "lesson": "9",
    "words": "詰め合わせる",
    "reading": "つめあわせる",
    "meaning": "đóng gói,đóng hộp"
  },
  {
    "lesson": "9",
    "words": "重ね合わせる",
    "reading": "かさねあわせる",
    "meaning": "xếp chồng lên"
  },
  {
    "lesson": "9",
    "words": "居合わせる",
    "reading": "いあわせる",
    "meaning": "tình cờ gặp"
  },
  {
    "lesson": "10",
    "words": "乗り合わせる",
    "reading": "のりあわせる",
    "meaning": "tình cờ đi cùng nhau, cưỡi cùng nhau"
  },
  {
    "lesson": "10",
    "words": "持ち合わせる",
    "reading": "もちあわせる",
    "meaning": "có, có mang theo"
  },
  {
    "lesson": "10",
    "words": "問い合わせる",
    "reading": "といあわせる",
    "meaning": "hỏi; hỏi thăm"
  },
  {
    "lesson": "10",
    "words": "照らし合わせる",
    "reading": "てらしあわせる",
    "meaning": "so sánh, đối chiếu"
  },
  {
    "lesson": "10",
    "words": "聞き直す",
    "reading": "ききなおす",
    "meaning": "hỏi lại lần nữa"
  },
  {
    "lesson": "10",
    "words": "やり直す",
    "reading": "やりなおす",
    "meaning": "làm lại"
  },
  {
    "lesson": "10",
    "words": "かけ直す",
    "reading": "かけなおす",
    "meaning": "gọi lại"
  },
  {
    "lesson": "10",
    "words": "出直す",
    "reading": "でなおす",
    "meaning": "làm lại từ đầu"
  },
  {
    "lesson": "10",
    "words": "持ち直す",
    "reading": "もちなおす",
    "meaning": "chuyển biến tốt"
  },
  {
    "lesson": "10",
    "words": "考え直す",
    "reading": "かんがえなおす",
    "meaning": "xem lại , suy nghĩ lại"
  },
  {
    "lesson": "10",
    "words": "思い直す",
    "reading": "おもいなおす",
    "meaning": "nghĩ lại; thay đổi ý định; thay đổi quyết định"
  },
  {
    "lesson": "10",
    "words": "アンテナ",
    "reading": "antenna",
    "meaning": "ăng ten"
  },
  {
    "lesson": "10",
    "words": "イヤホン",
    "reading": "earphone",
    "meaning": "tai nghe　"
  },
  {
    "lesson": "10",
    "words": "サイレン 　",
    "reading": "siren",
    "meaning": "tiếng chuông (chuông tan ca, chuông báo cháy)"
  },
  {
    "lesson": "10",
    "words": "コード",
    "reading": "cord",
    "meaning": "dây (điện)　"
  },
  {
    "lesson": "10",
    "words": "モニター",
    "reading": "monitor",
    "meaning": "màn hình　"
  },
  {
    "lesson": "10",
    "words": "メーター",
    "reading": "meter",
    "meaning": "đồng hồ đo　"
  },
  {
    "lesson": "10",
    "words": "ペア",
    "reading": "pair",
    "meaning": "một cặp　"
  },
  {
    "lesson": "10",
    "words": "リズム",
    "reading": "rhythm",
    "meaning": "giai điệu　　"
  },
  {
    "lesson": "10",
    "words": "アクセント",
    "reading": "accent",
    "meaning": "giọng, nhấn　"
  },
  {
    "lesson": "10",
    "words": "アルファベット",
    "reading": "alphabet",
    "meaning": "bảng chữ cái　"
  },
  {
    "lesson": "10",
    "words": "アドレス",
    "reading": "address",
    "meaning": "địa chỉ"
  },
  {
    "lesson": "10",
    "words": "メモ",
    "reading": "memo",
    "meaning": "ghi chú"
  },
  {
    "lesson": "10",
    "words": "マーク",
    "reading": "mark",
    "meaning": "đánh dấu"
  },
  {
    "lesson": "10",
    "words": "イラスト",
    "reading": "illustration",
    "meaning": "minh họa"
  },
  {
    "lesson": "10",
    "words": "サイン",
    "reading": "ｓｉｇｎ",
    "meaning": "chữ kí, kí、dấu hiệu"
  },
  {
    "lesson": "10",
    "words": "スター",
    "reading": "star",
    "meaning": "ngôi sao nổi tiếng"
  },
  {
    "lesson": "10",
    "words": "アンコール",
    "reading": "encore",
    "meaning": "lần nữa"
  },
  {
    "lesson": "10",
    "words": "モデル",
    "reading": "model",
    "meaning": "mẫu mã"
  },
  {
    "lesson": "10",
    "words": "サンプル",
    "reading": "sample",
    "meaning": "hàng mẫu"
  },
  {
    "lesson": "10",
    "words": "スタイル",
    "reading": "style",
    "meaning": "kiểu cách, phong cách"
  },
  {
    "lesson": "10",
    "words": "ウエスト",
    "reading": "waist",
    "meaning": "eo, vòng eo"
  },
  {
    "lesson": "10",
    "words": "カロリー",
    "reading": "calorie",
    "meaning": "calo"
  },
  {
    "lesson": "10",
    "words": "オーバー",
    "reading": "over",
    "meaning": "quá"
  },
  {
    "lesson": "10",
    "words": "コントロール",
    "reading": "control",
    "meaning": "kiểm soát, điều khiển"
  },
  {
    "lesson": "10",
    "words": "カーブ",
    "reading": "curve",
    "meaning": "khúc cua, cong"
  },
  {
    "lesson": "10",
    "words": "コース",
    "reading": "course",
    "meaning": "khóa học"
  },
  {
    "lesson": "10",
    "words": "レース",
    "reading": "race",
    "meaning": "cuộc đua"
  },
  {
    "lesson": "10",
    "words": "リード",
    "reading": "lead",
    "meaning": "dẫn đầu"
  },
  {
    "lesson": "10",
    "words": "トップ",
    "reading": "TOP",
    "meaning": "đầu bảng"
  },
  {
    "lesson": "10",
    "words": "ゴール",
    "reading": "goal",
    "meaning": "đạt thành tích, ghi bàn"
  },
  {
    "lesson": "10",
    "words": "パス",
    "reading": "pass",
    "meaning": "vượt qua"
  },
  {
    "lesson": "10",
    "words": "ベスト",
    "reading": "best",
    "meaning": "tốt nhất"
  },
  {
    "lesson": "10",
    "words": "レギュラー",
    "reading": "regular",
    "meaning": "bình thường"
  },
  {
    "lesson": "10",
    "words": "コーチ",
    "reading": "coach",
    "meaning": "huấn luyện viên"
  },
  {
    "lesson": "10",
    "words": "キャプテン",
    "reading": "captain",
    "meaning": "đội trưởng"
  },
  {
    "lesson": "10",
    "words": "サークル",
    "reading": "circle",
    "meaning": "vòng"
  },
  {
    "lesson": "10",
    "words": "キャンパス",
    "reading": "campus",
    "meaning": "trại"
  },
  {
    "lesson": "10",
    "words": "オリエンテーション",
    "reading": "orientation",
    "meaning": "định hướng"
  },
  {
    "lesson": "10",
    "words": "カリキュラム",
    "reading": "curriculum",
    "meaning": "giáo án"
  },
  {
    "lesson": "11",
    "words": "プログラム",
    "reading": "program",
    "meaning": "chương trình"
  },
  {
    "lesson": "11",
    "words": "レッスン",
    "reading": "lesson",
    "meaning": "bài học"
  },
  {
    "lesson": "11",
    "words": "レクリエーション",
    "reading": "recreation",
    "meaning": "giải trí"
  },
  {
    "lesson": "11",
    "words": "レジャー",
    "reading": "leisure",
    "meaning": "vui chơi, rảnh rỗi"
  },
  {
    "lesson": "11",
    "words": "ガイド",
    "reading": "guide",
    "meaning": "hướng dẫn"
  },
  {
    "lesson": "11",
    "words": "シーズン",
    "reading": "season",
    "meaning": "mùa"
  },
  {
    "lesson": "11",
    "words": "ダイヤ",
    "reading": "diagram",
    "meaning": "thời gian biểu"
  },
  {
    "lesson": "11",
    "words": "ウイークデー",
    "reading": "weekday",
    "meaning": "ngày trong tuần"
  },
  {
    "lesson": "11",
    "words": "サービス",
    "reading": "service",
    "meaning": "dịch vụ"
  },
  {
    "lesson": "11",
    "words": "アルコール",
    "reading": "alcohol",
    "meaning": "cồn, rượu"
  },
  {
    "lesson": "11",
    "words": "デコレーション",
    "reading": "decoration",
    "meaning": "trang trí"
  },
  {
    "lesson": "11",
    "words": "気が合う",
    "reading": "あの人とはよく気が合う。 hợp tính",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が大きい",
    "reading": "お酒を飲むとつい気が大きくなる。 Hào phóng",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が小さい",
    "reading": "お金があるのに、気が小さいので、なかなか大きい買い物ができない。 Hẹp hòi",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が強い",
    "reading": "気が弱いので、気が強い人が羨ましい。 Cứng cỏi",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が弱い",
    "reading": "気が弱くて、みんなの前ではなかなか意見が言えない。 nhút nhát",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が長い",
    "reading": "気が長いので、佐藤さんは駅で３０分も友達を待った。 Kiên nhẫn",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が短い",
    "reading": "課長は気が短いので、すぐ怒る。 Nóng tính",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が若い",
    "reading": "田村さんは年齢に比べて、気が若い。 như con nít",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が重い",
    "reading": "もうすぐ試験があるので、気が重い。 cảm giác nặng nề",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気がある",
    "reading": "彼は仕事をする気があるのかないのか、分からない。 quan tâm, thích, hứng thú",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が変わる",
    "reading": "映画を見に行こうと思って出かけたが、気が変わって、デパートへ行った。tính khí thay đổi, thay đổi",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気に進まない",
    "reading": "買い物に誘われたが、気に進まないので、行かなかった。 không muốn làm",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気がする",
    "reading": "この問題は試験に出るような気がある。 Có linh cảm",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が付く",
    "reading": "家を出てから、忘れ物をしたことに気が付いた。 Nhận ra",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気が楽だ",
    "reading": "両親が元気なうちは別々に住む方が楽だ。 thoải mái",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気を付ける",
    "reading": "これから寒くなるから、風邪をひかないように気を付けてください。 Chú ý",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気を悪くする",
    "reading": "彼は友達に注意されて、気を悪くしたみたいだ。 làm người khác buồn, giận",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気になる",
    "reading": "明日から山に行くので天気が気になる。 tò mò, quan tâm",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "気にする",
    "reading": "リーさんは何週間も前から発表のことを気にしている。 để ý, lo lắng",
    "meaning": ""
  },
  {
    "lesson": "11",
    "words": "最も",
    "reading": "もっとも",
    "meaning": "nhất (= 一番)"
  },
  {
    "lesson": "11",
    "words": "ほぼ",
    "reading": "ほぼ",
    "meaning": "gần như (= だいたい＝ほとんど＝おおよそ)"
  },
  {
    "lesson": "11",
    "words": "相当",
    "reading": "そうとう",
    "meaning": "đáng kể　(＝すいぶん＝かなり)"
  },
  {
    "lesson": "11",
    "words": "割に・割と・割合(に・と)",
    "reading": "わりに・わりと・わりあい(に・と)",
    "meaning": "tương đối, khá là (so với suy nghĩ bản thân)　"
  },
  {
    "lesson": "11",
    "words": "多少",
    "reading": "たしょう",
    "meaning": "một chút (= ちょっと、少し)"
  },
  {
    "lesson": "11",
    "words": "少々",
    "reading": "しょうしょう",
    "meaning": "một chút, khoảnh khắc (thời gian)"
  },
  {
    "lesson": "11",
    "words": "全て",
    "reading": "すべて",
    "meaning": "mọi thứ (= 全部 < 全て < 何もかも)"
  },
  {
    "lesson": "11",
    "words": "何もかも",
    "reading": "なにもかも",
    "meaning": "toàn bộ, mọi thứ"
  },
  {
    "lesson": "11",
    "words": "たっぷり",
    "reading": "たっぷり",
    "meaning": "đủ, nhiều (＝たくさん、いっぱい)、（trang phục: きつい＜ぴったり＜たっぷり)"
  },
  {
    "lesson": "11",
    "words": "できるだけ",
    "reading": "できるだけ",
    "meaning": "cố gắng hết sức"
  },
  {
    "lesson": "11",
    "words": "次第に",
    "reading": "しだいに",
    "meaning": "dần dần （＝だんだん＝徐々に＝少しずつ ＝追々）"
  },
  {
    "lesson": "11",
    "words": "徐々に",
    "reading": "じょじょに",
    "meaning": "từng chút một"
  },
  {
    "lesson": "11",
    "words": "さらに",
    "reading": "さらに",
    "meaning": "hơn nữa　（①もっと　②もう一度　③その上）"
  },
  {
    "lesson": "11",
    "words": "一層",
    "reading": "いっそう",
    "meaning": "hơn, vẫn　（＝もっと）"
  },
  {
    "lesson": "11",
    "words": "一段と",
    "reading": "いちだんと",
    "meaning": "hơn rất nhiều　（＝もっと）"
  },
  {
    "lesson": "11",
    "words": "より",
    "reading": "より",
    "meaning": "hơn （＝もっと）"
  },
  {
    "lesson": "11",
    "words": "結局",
    "reading": "けっきょく",
    "meaning": "kết cục, kết luận"
  },
  {
    "lesson": "11",
    "words": "ようやく",
    "reading": "ようやく",
    "meaning": "(sau bao nỗ lực) cuối cùng (=やっと＝ついに＝とうとう)"
  },
  {
    "lesson": "11",
    "words": "再び",
    "reading": "ふたたび",
    "meaning": "lần nữa　（＝もう一度＝再度）"
  },
  {
    "lesson": "11",
    "words": "忽ち",
    "reading": "たちまち",
    "meaning": "ngay lập tức　（＝あっという間に）　(biểu hiện sự thay đổi trạng thái)"
  },
  {
    "lesson": "12",
    "words": "今度",
    "reading": "こんど",
    "meaning": "lần tới"
  },
  {
    "lesson": "12",
    "words": "今後",
    "reading": "こんご",
    "meaning": "từ bây giờ"
  },
  {
    "lesson": "12",
    "words": "後(に)",
    "reading": "のち(に)",
    "meaning": "sau đó, tương lai (晴れのち曇り　trời nắng sau đó có mây)"
  },
  {
    "lesson": "12",
    "words": "間もなく",
    "reading": "まもなく",
    "meaning": "chẳng mấy chốc, sắp (①もうすぐ　②すぐに)"
  },
  {
    "lesson": "12",
    "words": "そのうち(に)",
    "reading": "そのうち(に)",
    "meaning": "chẳng mấy chốc"
  },
  {
    "lesson": "12",
    "words": "やがて",
    "reading": "やがて",
    "meaning": "chẳng mấy chốc, cuối cùng (①まもなく　②そのうち)"
  },
  {
    "lesson": "12",
    "words": "何れ",
    "reading": "いずれ",
    "meaning": "sớm hay muộn, lúc nào đó"
  },
  {
    "lesson": "12",
    "words": "先ほど",
    "reading": "さきほど",
    "meaning": "mới lúc trước (=さっき)(cảm giác của người nói không lâu)"
  },
  {
    "lesson": "12",
    "words": "とっくに",
    "reading": "とっくに",
    "meaning": "rồi, lâu rồi (cảm giác của người nói lâu)"
  },
  {
    "lesson": "12",
    "words": "既に",
    "reading": "すでに",
    "meaning": "đã (= もう)"
  },
  {
    "lesson": "12",
    "words": "事前に",
    "reading": "じぜんに",
    "meaning": "trước"
  },
  {
    "lesson": "12",
    "words": "当日",
    "reading": "とうじつ",
    "meaning": "ngày hôm đó"
  },
  {
    "lesson": "12",
    "words": "当時",
    "reading": "とうじ",
    "meaning": "thời đó"
  },
  {
    "lesson": "12",
    "words": "一時",
    "reading": "いちじ",
    "meaning": "nhất thời, có lúc"
  },
  {
    "lesson": "12",
    "words": "至急",
    "reading": "しきゅう",
    "meaning": "khẩn cấp"
  },
  {
    "lesson": "12",
    "words": "直ちに",
    "reading": "ただちに",
    "meaning": "ngay lập tức　（直ちに→すぐに→間もなく）"
  },
  {
    "lesson": "12",
    "words": "早速",
    "reading": "さっそく",
    "meaning": "nhanh chóng　（＝すぐに）"
  },
  {
    "lesson": "12",
    "words": "いきなり",
    "reading": "いきなり",
    "meaning": "bất ngờ　（＝急に、突然）"
  },
  {
    "lesson": "12",
    "words": "常に",
    "reading": "つねに",
    "meaning": "thường xuyên"
  },
  {
    "lesson": "12",
    "words": "絶えず",
    "reading": "たえず",
    "meaning": "liên tục"
  },
  {
    "lesson": "12",
    "words": "しばしば",
    "reading": "しばしば",
    "meaning": "rất thường xuyên (しばしば > たびたび > しょっちゅう＝常に)"
  },
  {
    "lesson": "12",
    "words": "たびたび",
    "reading": "たびたび",
    "meaning": "hay, nhiều lần"
  },
  {
    "lesson": "12",
    "words": "しょっちゅう",
    "reading": "しょっちゅう",
    "meaning": "luôn luôn, thường xuyên"
  },
  {
    "lesson": "12",
    "words": "たまに",
    "reading": "たまに",
    "meaning": "thỉnh thoảng"
  },
  {
    "lesson": "12",
    "words": "めったに…ない",
    "reading": "めったに",
    "meaning": "hầu như không"
  },
  {
    "lesson": "12",
    "words": "にこにこ・にっこり",
    "reading": "にこにこ・にっこり",
    "meaning": "cười khúc khích, cười sung sướng"
  },
  {
    "lesson": "12",
    "words": "にやにや・にやりと",
    "reading": "にやにや・にやりと",
    "meaning": "cười tủm"
  },
  {
    "lesson": "12",
    "words": "どきどき・どきりと",
    "reading": "どきどき・どきりと",
    "meaning": "hồi hộp"
  },
  {
    "lesson": "12",
    "words": "はらはら",
    "reading": "はらはら",
    "meaning": "run rẩy(người), rung rung(vật)"
  },
  {
    "lesson": "12",
    "words": "かんかん",
    "reading": "かんかん",
    "meaning": "rực rỡ(ánh sáng), bực mình"
  },
  {
    "lesson": "12",
    "words": "びしょびしょ・びっしょり",
    "reading": "びしょびしょ・びっしょり",
    "meaning": "ướt sũng"
  },
  {
    "lesson": "12",
    "words": "うろうろ",
    "reading": "うろうろ",
    "meaning": "đi lung tung, đi xung quanh"
  },
  {
    "lesson": "12",
    "words": "のろのろ",
    "reading": "のろのろ",
    "meaning": "chậm rãi, chậm như sên"
  },
  {
    "lesson": "12",
    "words": "ふらふら",
    "reading": "ふらふら",
    "meaning": "chóng mặt, hay thay đổi"
  },
  {
    "lesson": "12",
    "words": "ぶらぶら",
    "reading": "ぶらぶら",
    "meaning": "quanh quẩn, đung đưa (đồ vật)"
  },
  {
    "lesson": "12",
    "words": "従って",
    "reading": "したがって",
    "meaning": "đưa ra kết luận, (＝だから、それで、そのため、)(không dùng trong câu chỉ nguyên nhân, kết quả, そのため、だから、それで　dùng được)"
  },
  {
    "lesson": "12",
    "words": "だが",
    "reading": "だが",
    "meaning": "tuy nhiên　(だけど→でも/けれども→しかし/だが)"
  },
  {
    "lesson": "12",
    "words": "ところが",
    "reading": "ところが",
    "meaning": "ngoài dự đoán　(vd: nghĩ là thế này nhưng kết quả lại khác)"
  },
  {
    "lesson": "12",
    "words": "しかも",
    "reading": "しかも",
    "meaning": "hơn nữa　（①その上　②それも）"
  },
  {
    "lesson": "12",
    "words": "すると",
    "reading": "すると",
    "meaning": "①lập tức, ngay　 ②có nghĩa là"
  },
  {
    "lesson": "12",
    "words": "なぜなら",
    "reading": "なぜなら",
    "meaning": "bởi vì, vì　（＝から、なぜかというと、どうしてかというと）"
  },
  {
    "lesson": "12",
    "words": "だって",
    "reading": "だって",
    "meaning": "bởi vì, như"
  },
  {
    "lesson": "12",
    "words": "要するに",
    "reading": "ようするに",
    "meaning": "tóm lại　（＝つまり、すなわち）"
  },
  {
    "lesson": "12",
    "words": "即ち",
    "reading": "すなわち",
    "meaning": "có nghĩa là, đó là"
  },
  {
    "lesson": "12",
    "words": "或いは",
    "reading": "あるいは",
    "meaning": "①hoặc, ② có lẽ　（thường đi chung　かもしれない）"
  },
  {
    "lesson": "12",
    "words": "さて",
    "reading": "さて",
    "meaning": "nào, để xem (khi bắt đầu một việc khác)"
  },
  {
    "lesson": "12",
    "words": "では",
    "reading": "では",
    "meaning": "thế thì, trong trường hợp đó"
  },
  {
    "lesson": "12",
    "words": "ところで",
    "reading": "ところで",
    "meaning": "Nhân tiện (dùng khi đổi sang chủ đề khác để nói)"
  },
  {
    "lesson": "12",
    "words": "そう言えば",
    "reading": "そういえば",
    "meaning": "nghĩ kỹ thì"
  },
  {
    "lesson": "12",
    "words": "ただ",
    "reading": "ただ",
    "meaning": "đưa ra ý kiến, ví dụ ngược lại(quán đó ngon nhưng mà xa)"
  },
  {
    "lesson": "13",
    "words": "食料・食糧",
    "reading": "しょくりょう",
    "meaning": "đồ ăn, thực phẩm"
  },
  {
    "lesson": "13",
    "words": "粒",
    "reading": "つぶ",
    "meaning": "hạt, viên"
  },
  {
    "lesson": "13",
    "words": "くず",
    "reading": "くず",
    "meaning": "vụn rác"
  },
  {
    "lesson": "13",
    "words": "栽培",
    "reading": "さいばい",
    "meaning": "nuôi trồng"
  },
  {
    "lesson": "13",
    "words": "収穫",
    "reading": "しゅうかく",
    "meaning": "thu hoạch"
  },
  {
    "lesson": "13",
    "words": "産地",
    "reading": "さんち",
    "meaning": "nơi sản xuất"
  },
  {
    "lesson": "13",
    "words": "土地",
    "reading": "とち",
    "meaning": "đất đai"
  },
  {
    "lesson": "13",
    "words": "倉庫",
    "reading": "そうこ",
    "meaning": "kho"
  },
  {
    "lesson": "13",
    "words": "所有",
    "reading": "しょゆう",
    "meaning": "sở hữu"
  },
  {
    "lesson": "13",
    "words": "収集",
    "reading": "しゅうしゅう",
    "meaning": "thu thập"
  },
  {
    "lesson": "13",
    "words": "滞在",
    "reading": "たいざい",
    "meaning": "ở"
  },
  {
    "lesson": "13",
    "words": "便",
    "reading": "べん",
    "meaning": "thuận tiện"
  },
  {
    "lesson": "13",
    "words": "便",
    "reading": "びん",
    "meaning": "thư"
  },
  {
    "lesson": "13",
    "words": "設備",
    "reading": "せつび",
    "meaning": "thiết bị"
  },
  {
    "lesson": "13",
    "words": "設計",
    "reading": "せっけい",
    "meaning": "thiết kế, kế hoạch"
  },
  {
    "lesson": "13",
    "words": "制作・製作",
    "reading": "せいさく",
    "meaning": "chế tạo, sản xuất"
  },
  {
    "lesson": "13",
    "words": "製造",
    "reading": "せいぞう",
    "meaning": "chế tạo, sản xuất"
  },
  {
    "lesson": "13",
    "words": "建築",
    "reading": "けんちく",
    "meaning": "kiến thiết, xây dựng"
  },
  {
    "lesson": "13",
    "words": "人工",
    "reading": "じんこう",
    "meaning": "nhân tạo"
  },
  {
    "lesson": "13",
    "words": "圧力",
    "reading": "あつりょく",
    "meaning": "áp lực"
  },
  {
    "lesson": "13",
    "words": "刺激",
    "reading": "しげき",
    "meaning": "kích thích, khiêu khích"
  },
  {
    "lesson": "13",
    "words": "摩擦",
    "reading": "まさつ",
    "meaning": "ma sát, mâu thuẫn"
  },
  {
    "lesson": "13",
    "words": "立場",
    "reading": "たちば",
    "meaning": "lập trường （立場に立つ）"
  },
  {
    "lesson": "13",
    "words": "役割",
    "reading": "やくわり",
    "meaning": "vai trò　【役割を果たす】"
  },
  {
    "lesson": "13",
    "words": "分担",
    "reading": "ぶんたん",
    "meaning": "chia sẻ"
  },
  {
    "lesson": "13",
    "words": "担当",
    "reading": "たんとう",
    "meaning": "chịu trách nhiệm, đảm đương"
  },
  {
    "lesson": "13",
    "words": "交代・交替",
    "reading": "こうたい",
    "meaning": "thay phiên, thay đổi"
  },
  {
    "lesson": "13",
    "words": "代理",
    "reading": "だいり",
    "meaning": "đại diện, đại lý (代理店)"
  },
  {
    "lesson": "13",
    "words": "審判",
    "reading": "しんぱん",
    "meaning": "thẩm phám, trọng tài"
  },
  {
    "lesson": "13",
    "words": "監督",
    "reading": "かんとく",
    "meaning": "huấn luyện viên, đạo diễn (người nắm quyền chỉ đạo tổng quát chung )"
  },
  {
    "lesson": "13",
    "words": "予測",
    "reading": "よそく",
    "meaning": "dự đoán"
  },
  {
    "lesson": "13",
    "words": "予期",
    "reading": "よき",
    "meaning": "mong đợi"
  },
  {
    "lesson": "13",
    "words": "判断",
    "reading": "はんだん",
    "meaning": "phán đoán"
  },
  {
    "lesson": "13",
    "words": "評価",
    "reading": "ひょうか",
    "meaning": "đánh giá, bình phẩm"
  },
  {
    "lesson": "13",
    "words": "指示",
    "reading": "しじ",
    "meaning": "chỉ dẫn, chỉ thị"
  },
  {
    "lesson": "13",
    "words": "無視",
    "reading": "むし",
    "meaning": "bỏ qua, ngó ngơ"
  },
  {
    "lesson": "13",
    "words": "無断",
    "reading": "むだん",
    "meaning": "không cho phép, chưa có sự cho phép"
  },
  {
    "lesson": "13",
    "words": "承知",
    "reading": "しょうち",
    "meaning": "hiểu, đồng ý"
  },
  {
    "lesson": "13",
    "words": "納得",
    "reading": "なっとく",
    "meaning": "bị thuyết phục, thỏa mãn"
  },
  {
    "lesson": "13",
    "words": "疑問",
    "reading": "ぎもん",
    "meaning": "nghi vấn"
  },
  {
    "lesson": "13",
    "words": "推測",
    "reading": "すいそく",
    "meaning": "phỏng đoán"
  },
  {
    "lesson": "13",
    "words": "肯定",
    "reading": "こうてい",
    "meaning": "khẳng định"
  },
  {
    "lesson": "13",
    "words": "参考",
    "reading": "さんこう",
    "meaning": "tham khảo"
  },
  {
    "lesson": "13",
    "words": "程度",
    "reading": "ていど",
    "meaning": "mức độ; trình độ"
  },
  {
    "lesson": "13",
    "words": "評判",
    "reading": "ひょうばん",
    "meaning": "bình luận, có ý nghĩa được đánh giá tốt"
  },
  {
    "lesson": "13",
    "words": "批評",
    "reading": "ひひょう",
    "meaning": "xem xét, chỉ trích"
  },
  {
    "lesson": "13",
    "words": "推薦",
    "reading": "すいせん",
    "meaning": "tiến cử, giới thiệu"
  },
  {
    "lesson": "13",
    "words": "信用",
    "reading": "しんよう",
    "meaning": "tự tin, lòng tin　（cách thường dùng 信用する店、信用する会社、信用する人）"
  },
  {
    "lesson": "13",
    "words": "信頼",
    "reading": "しんらい",
    "meaning": "tin tưởng, tín nhiệm (tin tưởng để nhờ vả 信頼できる人)thường thể hiện dưới dạng 信頼できる"
  },
  {
    "lesson": "13",
    "words": "尊重",
    "reading": "そんちょう",
    "meaning": "tôn trọng"
  },
  {
    "lesson": "14",
    "words": "作業",
    "reading": "さぎょう",
    "meaning": "công việc, sự làm việc"
  },
  {
    "lesson": "14",
    "words": "工夫",
    "reading": "くふう",
    "meaning": "công phu, phải nghĩ nhiều phương pháp, cách thức"
  },
  {
    "lesson": "14",
    "words": "消化",
    "reading": "しょうか",
    "meaning": "tiêu hóa, tiêu thụ"
  },
  {
    "lesson": "14",
    "words": "吸収",
    "reading": "きゅうしゅう",
    "meaning": "hấp thụ"
  },
  {
    "lesson": "14",
    "words": "設置",
    "reading": "せっち",
    "meaning": "cài đặt"
  },
  {
    "lesson": "14",
    "words": "設定",
    "reading": "せってい",
    "meaning": "thiết lập"
  },
  {
    "lesson": "14",
    "words": "調節",
    "reading": "ちょうせつ",
    "meaning": "điều tiết (nhiệt độ phòng, chiều cao ghế)"
  },
  {
    "lesson": "14",
    "words": "調整",
    "reading": "ちょうせい",
    "meaning": "điều chỉnh (hướng của anten, lịch trình, mức độ lợi hại)"
  },
  {
    "lesson": "14",
    "words": "解放",
    "reading": "かいほう",
    "meaning": "mở cửa, tự do hóa, giải phóng"
  },
  {
    "lesson": "14",
    "words": "総合",
    "reading": "そうごう",
    "meaning": "tổng hợp, cùng nhau"
  },
  {
    "lesson": "14",
    "words": "連続",
    "reading": "れんぞく",
    "meaning": "liên tục (phim nhiều tập, động đất liên tục, vụ án giết người hàng loạt, )"
  },
  {
    "lesson": "14",
    "words": "持続",
    "reading": "じぞく",
    "meaning": "duy trì, kéo dài (sự hứng khởi, sự tập trung, thể lực, hiệu quả)"
  },
  {
    "lesson": "14",
    "words": "中断",
    "reading": "ちゅうだん",
    "meaning": "gián đoạn"
  },
  {
    "lesson": "14",
    "words": "安定",
    "reading": "あんてい",
    "meaning": "ổn định"
  },
  {
    "lesson": "14",
    "words": "混乱",
    "reading": "こんらん",
    "meaning": "hỗn độn, hỗn loạn"
  },
  {
    "lesson": "14",
    "words": "上昇",
    "reading": "じょうしょう",
    "meaning": "tiến lên, tăng lên"
  },
  {
    "lesson": "14",
    "words": "達成",
    "reading": "たっせい",
    "meaning": "thành tựu, đạt được"
  },
  {
    "lesson": "14",
    "words": "事情",
    "reading": "じじょう",
    "meaning": "tình hình, điều kiện"
  },
  {
    "lesson": "14",
    "words": "事態",
    "reading": "じたい",
    "meaning": "tình hình, tình trạng"
  },
  {
    "lesson": "14",
    "words": "障害",
    "reading": "しょうがい",
    "meaning": "cản trở, khó khăn"
  },
  {
    "lesson": "14",
    "words": "福祉",
    "reading": "ふくし",
    "meaning": "phúc lợi"
  },
  {
    "lesson": "14",
    "words": "社会",
    "reading": "しゃかい",
    "meaning": "xã hội"
  },
  {
    "lesson": "14",
    "words": "都会",
    "reading": "とかい",
    "meaning": "thành phố, thành thị"
  },
  {
    "lesson": "14",
    "words": "世論",
    "reading": "よろん",
    "meaning": "dư luận"
  },
  {
    "lesson": "14",
    "words": "民族",
    "reading": "みんぞく",
    "meaning": "dân tộc"
  },
  {
    "lesson": "14",
    "words": "増大",
    "reading": "ぞうだい",
    "meaning": "sự mở rộng, sự tăng thêm"
  },
  {
    "lesson": "14",
    "words": "増量",
    "reading": "ぞうりょう",
    "meaning": "tăng thêm lượng"
  },
  {
    "lesson": "14",
    "words": "増税",
    "reading": "ぞうぜい",
    "meaning": "tăng thuế"
  },
  {
    "lesson": "14",
    "words": "増員",
    "reading": "ぞういん",
    "meaning": "ｔăng nhân sự"
  },
  {
    "lesson": "14",
    "words": "減点",
    "reading": "げんてん",
    "meaning": "giảm trừ"
  },
  {
    "lesson": "14",
    "words": "減退",
    "reading": "げんたい",
    "meaning": "giảm sút"
  },
  {
    "lesson": "14",
    "words": "減量",
    "reading": "げんりょう",
    "meaning": "ｇiảm cân, lượng hao hụt"
  },
  {
    "lesson": "14",
    "words": "開発",
    "reading": "かいはつ",
    "meaning": "phát triển"
  },
  {
    "lesson": "14",
    "words": "開店",
    "reading": "かいてん",
    "meaning": "mở cửa hàng, khai trương nhà hàng"
  },
  {
    "lesson": "14",
    "words": "開業",
    "reading": "かいぎょう",
    "meaning": "khởi nghiệp"
  },
  {
    "lesson": "14",
    "words": "開催",
    "reading": "かいさい",
    "meaning": "tổ chức"
  },
  {
    "lesson": "14",
    "words": "開放",
    "reading": "かいほう",
    "meaning": "sự mở cửa; sự tự do hoá"
  },
  {
    "lesson": "14",
    "words": "閉鎖",
    "reading": "へいさ",
    "meaning": "sự phong tỏa"
  },
  {
    "lesson": "14",
    "words": "密閉",
    "reading": "みっぺい",
    "meaning": "kín hơi"
  },
  {
    "lesson": "14",
    "words": "改善",
    "reading": "かいぜん",
    "meaning": "cải tiến"
  },
  {
    "lesson": "14",
    "words": "改良",
    "reading": "かいりょう",
    "meaning": "cải tiến"
  },
  {
    "lesson": "14",
    "words": "改革",
    "reading": "かいかく",
    "meaning": "Cải cách"
  },
  {
    "lesson": "14",
    "words": "改正",
    "reading": "かいせい",
    "meaning": "cải chính, chỉnh sửa"
  },
  {
    "lesson": "14",
    "words": "改定",
    "reading": "かいてい",
    "meaning": "thay đổi quyết định"
  },
  {
    "lesson": "14",
    "words": "改修",
    "reading": "かいしゅう",
    "meaning": "sửa chữa"
  },
  {
    "lesson": "14",
    "words": "一致",
    "reading": "いっち",
    "meaning": "nhất trí"
  },
  {
    "lesson": "14",
    "words": "一方",
    "reading": "いっぽう",
    "meaning": "mặt khác"
  },
  {
    "lesson": "14",
    "words": "一定",
    "reading": "いってい",
    "meaning": "nhất định, không thay đổi"
  },
  {
    "lesson": "14",
    "words": "一人前",
    "reading": "いちにんまえ",
    "meaning": "①phần một người ăn, ②trưởng thành"
  },
  {
    "lesson": "14",
    "words": "一流",
    "reading": "いちりゅう",
    "meaning": "bậc nhất, hạng nhất"
  },
  {
    "lesson": "15",
    "words": "映る",
    "reading": "うつる",
    "meaning": "bị phản chiếu, được chiếu"
  },
  {
    "lesson": "15",
    "words": "映す",
    "reading": "うつす",
    "meaning": "chiếu, phản chiếu"
  },
  {
    "lesson": "15",
    "words": "つかる",
    "reading": "つかる",
    "meaning": "bị ngập, bị chìm, bị ngâm"
  },
  {
    "lesson": "15",
    "words": "つける",
    "reading": "つける",
    "meaning": "chìm xuống, ngâm, chấm"
  },
  {
    "lesson": "15",
    "words": "浮かぶ",
    "reading": "うかぶ",
    "meaning": "nổi, nghĩ về, bề mặt　(thuyền nổi, ý tưởng nổi lên, cá chết nổi lên)　"
  },
  {
    "lesson": "15",
    "words": "浮かべる",
    "reading": "うかべる",
    "meaning": "cho nổi"
  },
  {
    "lesson": "15",
    "words": "浮く",
    "reading": "うく",
    "meaning": "nổi, tăng lên　(đồng xu nổi, tách biệt khỏi nhóm, dư ra)"
  },
  {
    "lesson": "15",
    "words": "潜る",
    "reading": "もぐる",
    "meaning": "nhấn chìm, ẩn giấu, lặn"
  },
  {
    "lesson": "15",
    "words": "跳ねる",
    "reading": "はねる",
    "meaning": "nhảy, (dầu)bắn ra, bị cắt(cổ), bị xe đâm　跳ねられる"
  },
  {
    "lesson": "15",
    "words": "背負う",
    "reading": "せおう",
    "meaning": "mang vác, chịu　"
  },
  {
    "lesson": "15",
    "words": "追う",
    "reading": "おう",
    "meaning": "đuổi, theo đuổi　"
  },
  {
    "lesson": "15",
    "words": "追いかける",
    "reading": "おいかける",
    "meaning": "chạy theo, đuổi theo"
  },
  {
    "lesson": "15",
    "words": "追いつく",
    "reading": "おいつく",
    "meaning": "đuổi kịp"
  },
  {
    "lesson": "15",
    "words": "追い越す",
    "reading": "おいこす",
    "meaning": "vượt qua"
  },
  {
    "lesson": "15",
    "words": "振り向く",
    "reading": "ふりむく",
    "meaning": "①tha động từ: quay lại, nhìn về phía sau\n②tự động từ: làm ngơ, không quan tâm"
  },
  {
    "lesson": "15",
    "words": "捕る",
    "reading": "とる",
    "meaning": "bắt　(thú)"
  },
  {
    "lesson": "15",
    "words": "取り上げる",
    "reading": "とりあげる",
    "meaning": "nhặt lên, lấy, chọn, bàn luận"
  },
  {
    "lesson": "15",
    "words": "取り入れる",
    "reading": "とりいれる",
    "meaning": "thu hoạch、áp dụng"
  },
  {
    "lesson": "15",
    "words": "削る",
    "reading": "けずる",
    "meaning": "cắt xuống, giảm, làm sắc"
  },
  {
    "lesson": "15",
    "words": "縛る",
    "reading": "しばる",
    "meaning": "buộc, thắt"
  },
  {
    "lesson": "15",
    "words": "絞る・搾る",
    "reading": "しぼる",
    "meaning": "vắt, bóp"
  },
  {
    "lesson": "15",
    "words": "回る",
    "reading": "まわる",
    "meaning": "xoay quanh, quay lại"
  },
  {
    "lesson": "15",
    "words": "回す",
    "reading": "まわす",
    "meaning": "xoay, qua, gửi, chuyển nhượng, đầu tư"
  },
  {
    "lesson": "15",
    "words": "区切る",
    "reading": "くぎる",
    "meaning": "chia, nhấn mạnh"
  },
  {
    "lesson": "15",
    "words": "組む",
    "reading": "くむ",
    "meaning": "hiệp lực, tham gia, đoàn kết, vượt qua"
  },
  {
    "lesson": "15",
    "words": "組み立てる",
    "reading": "くみたてる",
    "meaning": "lắp ráp"
  },
  {
    "lesson": "15",
    "words": "加わる",
    "reading": "くわわる",
    "meaning": "(muối) được thêm, (lực) được thêm, (sức hút) được tăng lên"
  },
  {
    "lesson": "15",
    "words": "加える",
    "reading": "くわえる",
    "meaning": "thêm (muối), thêm (người), thêm (lực), tăng (tốc độ)"
  },
  {
    "lesson": "15",
    "words": "仕上がる",
    "reading": "しあがる",
    "meaning": "được kết thúc, được hoàn thành"
  },
  {
    "lesson": "15",
    "words": "仕上げる",
    "reading": "しあげる",
    "meaning": "hoàn thành, kết thúc"
  },
  {
    "lesson": "15",
    "words": "通りかかる",
    "reading": "とおりかかる",
    "meaning": "đi ngang qua"
  },
  {
    "lesson": "15",
    "words": "飛び回る",
    "reading": "とびまわる",
    "meaning": "bay về, vội vàng về"
  },
  {
    "lesson": "15",
    "words": "巡る",
    "reading": "めぐる",
    "meaning": "quanh quanh, lặp lại, liên quan đến"
  },
  {
    "lesson": "15",
    "words": "補う",
    "reading": "おぎなう",
    "meaning": "thêm, bổ sung"
  },
  {
    "lesson": "15",
    "words": "防ぐ",
    "reading": "ふせぐ",
    "meaning": "phòng, chống"
  },
  {
    "lesson": "15",
    "words": "救う",
    "reading": "すくう",
    "meaning": "cứu, giúp"
  },
  {
    "lesson": "15",
    "words": "除く",
    "reading": "のぞく",
    "meaning": "loại trừ, bỏ qua, lấy đi"
  },
  {
    "lesson": "15",
    "words": "省く",
    "reading": "はぶく",
    "meaning": "bỏ sót, tiết kiệm"
  },
  {
    "lesson": "15",
    "words": "誤る",
    "reading": "あやまる",
    "meaning": "mắc lỗi"
  },
  {
    "lesson": "15",
    "words": "奪う",
    "reading": "うばう",
    "meaning": "cướp đoạt, trấn lột"
  },
  {
    "lesson": "15",
    "words": "しまう",
    "reading": "しまう",
    "meaning": "cất"
  },
  {
    "lesson": "15",
    "words": "怠ける",
    "reading": "なまける",
    "meaning": "lười biếng"
  },
  {
    "lesson": "15",
    "words": "失う",
    "reading": "うしなう",
    "meaning": "mất"
  },
  {
    "lesson": "15",
    "words": "攻める",
    "reading": "せめる",
    "meaning": "tấn công"
  },
  {
    "lesson": "15",
    "words": "睨む",
    "reading": "にらむ",
    "meaning": "lườm"
  },
  {
    "lesson": "15",
    "words": "責める",
    "reading": "せめる",
    "meaning": "đổ lỗi"
  },
  {
    "lesson": "15",
    "words": "裏切る",
    "reading": "うらぎる",
    "meaning": "phảm bội"
  },
  {
    "lesson": "15",
    "words": "頼る",
    "reading": "たよる",
    "meaning": "dựa dẫm, dựa vào"
  },
  {
    "lesson": "15",
    "words": "遭う",
    "reading": "あう",
    "meaning": "gặp gỡ"
  },
  {
    "lesson": "15",
    "words": "招く",
    "reading": "まねく",
    "meaning": "mời, ra dấu, gọi, nguyên nhân"
  },
  {
    "lesson": "16",
    "words": "引っ掛かる",
    "reading": "ひっかかる",
    "meaning": "bị bắt, bị vướng vào, bị lừa"
  },
  {
    "lesson": "16",
    "words": "引っ掛ける",
    "reading": "ひっかける",
    "meaning": "mắc, lừa đảo, ném vào"
  },
  {
    "lesson": "16",
    "words": "ひっくり返る",
    "reading": "ひっくりかえる",
    "meaning": "đảo ngược, ngã"
  },
  {
    "lesson": "16",
    "words": "ひっくり返す",
    "reading": "ひっくりかえす",
    "meaning": "đảo ngược, lật ngửa"
  },
  {
    "lesson": "16",
    "words": "ずれる",
    "reading": "ずれる",
    "meaning": "trượt, đi chệch"
  },
  {
    "lesson": "16",
    "words": "ずらす",
    "reading": "ずらす",
    "meaning": "đi lạc, thay đổi, đưa ra"
  },
  {
    "lesson": "16",
    "words": "崩れる",
    "reading": "くずれる",
    "meaning": "sụp đổ"
  },
  {
    "lesson": "16",
    "words": "崩す",
    "reading": "くずす",
    "meaning": "phá"
  },
  {
    "lesson": "16",
    "words": "荒れる",
    "reading": "あれる",
    "meaning": "bão bùng, cuồng loạn"
  },
  {
    "lesson": "16",
    "words": "荒らす",
    "reading": "あらす",
    "meaning": "tàn phá, đột phá"
  },
  {
    "lesson": "16",
    "words": "認める",
    "reading": "みとめる",
    "meaning": "thừa nhận, ủy quyền, xem"
  },
  {
    "lesson": "16",
    "words": "見直す",
    "reading": "みなおす",
    "meaning": "nhìn lại, cân nhắc lại"
  },
  {
    "lesson": "16",
    "words": "見慣れる",
    "reading": "みなれる",
    "meaning": "quen, nhẵn mặt"
  },
  {
    "lesson": "16",
    "words": "求める",
    "reading": "もとめる",
    "meaning": "tìm kiếm, yêu cầu, mua"
  },
  {
    "lesson": "16",
    "words": "漏れる",
    "reading": "もれる",
    "meaning": "rò rỉ, chạy trốn, bày tỏ, bị bỏ lại"
  },
  {
    "lesson": "16",
    "words": "漏らす",
    "reading": "もらす",
    "meaning": "tràn, buông ra, bỏ lỡ"
  },
  {
    "lesson": "16",
    "words": "なる",
    "reading": "なる",
    "meaning": "đỡ"
  },
  {
    "lesson": "16",
    "words": "焦げる",
    "reading": "こげる",
    "meaning": "bị cháy"
  },
  {
    "lesson": "16",
    "words": "反する",
    "reading": "はんする",
    "meaning": "trái lại"
  },
  {
    "lesson": "16",
    "words": "膨れる",
    "reading": "ふくれる",
    "meaning": "phồng, sưng"
  },
  {
    "lesson": "16",
    "words": "膨らむ",
    "reading": "ふくらむ",
    "meaning": "to lên, tăng lên"
  },
  {
    "lesson": "16",
    "words": "膨らます",
    "reading": "ふくらます",
    "meaning": "phồng, phình, được làm đầy bởi"
  },
  {
    "lesson": "16",
    "words": "尖る",
    "reading": "とがる",
    "meaning": "trạng thái nhọn, sắc"
  },
  {
    "lesson": "16",
    "words": "当てはまる",
    "reading": "あてはまる",
    "meaning": "áp dụng"
  },
  {
    "lesson": "16",
    "words": "就く",
    "reading": "つく",
    "meaning": "kiếm việc, trở thành"
  },
  {
    "lesson": "16",
    "words": "受け持つ",
    "reading": "うけもつ",
    "meaning": "đảm trách"
  },
  {
    "lesson": "16",
    "words": "従う",
    "reading": "したがう",
    "meaning": "theo đó, theo"
  },
  {
    "lesson": "16",
    "words": "呟く",
    "reading": "つぶやく",
    "meaning": "thì thầm, thì thào"
  },
  {
    "lesson": "16",
    "words": "述べる",
    "reading": "のべる",
    "meaning": "phát biểu"
  },
  {
    "lesson": "16",
    "words": "目覚める",
    "reading": "めざめる",
    "meaning": "thức giấc, mở mắt"
  },
  {
    "lesson": "16",
    "words": "限る",
    "reading": "かぎる",
    "meaning": "không nhất thiết, là tốt nhất, nhân dịp"
  },
  {
    "lesson": "16",
    "words": "片寄る",
    "reading": "かたよる",
    "meaning": "dồn về một phía"
  },
  {
    "lesson": "16",
    "words": "薄まる",
    "reading": "うすまる",
    "meaning": "suy nhược"
  },
  {
    "lesson": "16",
    "words": "薄める",
    "reading": "うすめる",
    "meaning": "pha loãng, suy yếu"
  },
  {
    "lesson": "16",
    "words": "薄れる",
    "reading": "うすれる",
    "meaning": "trở nên mờ nhạt, phai màu"
  },
  {
    "lesson": "16",
    "words": "透き通る",
    "reading": "すきとおる",
    "meaning": "trở nên rõ ràng, trở nên trong suốt"
  },
  {
    "lesson": "16",
    "words": "静まる・鎮まる",
    "reading": "しずまる",
    "meaning": "trở nên yên lặng, được bình tĩnh lại"
  },
  {
    "lesson": "16",
    "words": "静める・鎮める",
    "reading": "しずめる",
    "meaning": "yên tĩnh, hạ hỏa, giải tỏa"
  },
  {
    "lesson": "16",
    "words": "優れる",
    "reading": "すぐれる",
    "meaning": "giỏi, ưu tú, hoàn hảo"
  },
  {
    "lesson": "16",
    "words": "落ち着く",
    "reading": "おちつく",
    "meaning": "① ổn định (tinh thần, tâm trạng, cuộc sống, công việc)\n② không khỏe trong người"
  },
  {
    "lesson": "16",
    "words": "長引く",
    "reading": "ながびく",
    "meaning": "được kéo dài"
  },
  {
    "lesson": "16",
    "words": "衰える",
    "reading": "おとろえる",
    "meaning": "trở nên yếu, sa sút"
  },
  {
    "lesson": "16",
    "words": "備わる",
    "reading": "そなわる",
    "meaning": "được trang bị, được ưu đãi với"
  },
  {
    "lesson": "16",
    "words": "備える",
    "reading": "そなえる",
    "meaning": "chuẩn bị, trang bị, cung cấp"
  },
  {
    "lesson": "16",
    "words": "蓄える",
    "reading": "たくわえる",
    "meaning": "dự trữ, tiết kiệm, có trữ lượng lớn"
  },
  {
    "lesson": "16",
    "words": "整う",
    "reading": "ととのう",
    "meaning": "chuẩn bị về mọi mặt (số lượng, phương pháp, v.v)"
  },
  {
    "lesson": "16",
    "words": "整える・調える",
    "reading": "ととのえる",
    "meaning": "chuẩn bị, sửa, điều chỉnh"
  },
  {
    "lesson": "16",
    "words": "覆う",
    "reading": "おおう",
    "meaning": "phủ, bao bọc, che để người khác không thấy (che mắt, che mặt)"
  },
  {
    "lesson": "16",
    "words": "照る",
    "reading": "てる",
    "meaning": "chiếu sáng"
  },
  {
    "lesson": "16",
    "words": "照らす",
    "reading": "てらす",
    "meaning": "được chiếu sáng"
  },
  {
    "lesson": "17",
    "words": "染まる",
    "reading": "そまる",
    "meaning": "được nhuộm, bị ảnh hưởng bởi"
  },
  {
    "lesson": "17",
    "words": "染める",
    "reading": "そめる",
    "meaning": "nhuộm, đỏ mặt"
  },
  {
    "lesson": "17",
    "words": "ダブる",
    "reading": "ダブる",
    "meaning": "gấp đôi"
  },
  {
    "lesson": "17",
    "words": "憧れる",
    "reading": "あこがれる",
    "meaning": "mong ước, mơ ước"
  },
  {
    "lesson": "17",
    "words": "羨む",
    "reading": "うらやむ",
    "meaning": "đố kỵ, ghen tị"
  },
  {
    "lesson": "17",
    "words": "諦める",
    "reading": "あきらめる",
    "meaning": "từ bỏ"
  },
  {
    "lesson": "17",
    "words": "呆れる",
    "reading": "あきれる",
    "meaning": "bị shock, ngạc nhiên"
  },
  {
    "lesson": "17",
    "words": "恐れる",
    "reading": "おそれる",
    "meaning": "sợ, dữ tợn, khủng khiếp"
  },
  {
    "lesson": "17",
    "words": "恨む",
    "reading": "うらむ",
    "meaning": "hận, căm thù　(mức độ 嫌う→恨む→憎む)"
  },
  {
    "lesson": "17",
    "words": "慰める",
    "reading": "なぐさめる",
    "meaning": "an ủi, động viên, thiên về an ủi　(励む thiên về động viên)"
  },
  {
    "lesson": "17",
    "words": "インテリア　",
    "reading": "interior",
    "meaning": "nội thất, trang trí"
  },
  {
    "lesson": "17",
    "words": "コーナー　",
    "reading": "corner",
    "meaning": "góc, phần"
  },
  {
    "lesson": "17",
    "words": "カウンター",
    "reading": "counter",
    "meaning": "quầy tính tiền, bar"
  },
  {
    "lesson": "17",
    "words": "スペース",
    "reading": "space",
    "meaning": "khoảng trống, phòng"
  },
  {
    "lesson": "17",
    "words": "オープン",
    "reading": "open",
    "meaning": "mở, mở cửa"
  },
  {
    "lesson": "17",
    "words": "センター",
    "reading": "center",
    "meaning": "trung tâm, ở giữa"
  },
  {
    "lesson": "17",
    "words": "カルチャー　",
    "reading": "culture",
    "meaning": "văn hóa"
  },
  {
    "lesson": "17",
    "words": "ブーム",
    "reading": "boom",
    "meaning": "bùng nổ, trở nên phổ biến"
  },
  {
    "lesson": "17",
    "words": "インフォメーション",
    "reading": "information",
    "meaning": "thông tin"
  },
  {
    "lesson": "17",
    "words": "キャッチ　",
    "reading": "catch",
    "meaning": "bắt lấy"
  },
  {
    "lesson": "17",
    "words": "メディア",
    "reading": "media",
    "meaning": "truyền thông"
  },
  {
    "lesson": "17",
    "words": "コメント",
    "reading": "comment",
    "meaning": "bình luận"
  },
  {
    "lesson": "17",
    "words": "コラム　",
    "reading": "column",
    "meaning": "cột"
  },
  {
    "lesson": "17",
    "words": "エピソード　",
    "reading": "episode",
    "meaning": "chương; phần"
  },
  {
    "lesson": "17",
    "words": "アリバイ　",
    "reading": "alibi",
    "meaning": "ngoại phạm"
  },
  {
    "lesson": "17",
    "words": "シリーズ　",
    "reading": "series",
    "meaning": "loạt, chuỗi"
  },
  {
    "lesson": "17",
    "words": "ポイント",
    "reading": "point",
    "meaning": "điểm"
  },
  {
    "lesson": "17",
    "words": "キー",
    "reading": "key",
    "meaning": "chìa khóa"
  },
  {
    "lesson": "17",
    "words": "マスター",
    "reading": "master",
    "meaning": "bậc thầy, giỏi"
  },
  {
    "lesson": "17",
    "words": "ビジネス",
    "reading": "business",
    "meaning": "kinh doanh"
  },
  {
    "lesson": "17",
    "words": "キャリア　",
    "reading": "career",
    "meaning": "nghề nghiệp, vận chuyển"
  },
  {
    "lesson": "17",
    "words": "ベテラン　",
    "reading": "veteran",
    "meaning": "chuyên gia, có kinh nghiệm"
  },
  {
    "lesson": "17",
    "words": "フリー",
    "reading": "free",
    "meaning": "tự do, độc thân, làm tự do"
  },
  {
    "lesson": "17",
    "words": "エコノミー　",
    "reading": "economy",
    "meaning": "nền kinh tế"
  },
  {
    "lesson": "17",
    "words": "キャッシュ",
    "reading": "cash",
    "meaning": "tiền mặt"
  },
  {
    "lesson": "17",
    "words": "インフレ　　",
    "reading": "inflation",
    "meaning": "lạm phát"
  },
  {
    "lesson": "17",
    "words": "デモ",
    "reading": "demo",
    "meaning": "cuộc biểu tình, thuyết minh"
  },
  {
    "lesson": "17",
    "words": "メーカー",
    "reading": "maker",
    "meaning": "nhà chế tạo, nhà sản xuất, nghệ sĩ"
  },
  {
    "lesson": "17",
    "words": "システム",
    "reading": "system",
    "meaning": "hệ thống"
  },
  {
    "lesson": "17",
    "words": "ケース",
    "reading": "case",
    "meaning": "trường hợp"
  },
  {
    "lesson": "17",
    "words": "パターン",
    "reading": "pattern",
    "meaning": "mẫu"
  },
  {
    "lesson": "17",
    "words": "プラン",
    "reading": "plan",
    "meaning": "kế hoạch"
  },
  {
    "lesson": "17",
    "words": "トラブル",
    "reading": "trouble",
    "meaning": "rắc rối"
  },
  {
    "lesson": "17",
    "words": "エラー",
    "reading": "error",
    "meaning": "lỗi"
  },
  {
    "lesson": "17",
    "words": "クレーム",
    "reading": "claim",
    "meaning": "phàn nàn, phản đói"
  },
  {
    "lesson": "17",
    "words": "キャンセル",
    "reading": "cancel",
    "meaning": "hủy bỏ"
  },
  {
    "lesson": "17",
    "words": "ストップ",
    "reading": "stop",
    "meaning": "dừng lại"
  },
  {
    "lesson": "17",
    "words": "カット",
    "reading": "cut",
    "meaning": "cắt bớt, giảm bớt"
  },
  {
    "lesson": "17",
    "words": "カバー",
    "reading": "cover",
    "meaning": "bao bọc, che"
  },
  {
    "lesson": "17",
    "words": "リハビリ　",
    "reading": "rehabilitation",
    "meaning": "hồi phục chức năng"
  },
  {
    "lesson": "18",
    "words": "プレッシャー",
    "reading": "pressure",
    "meaning": "sức ép"
  },
  {
    "lesson": "18",
    "words": "カウンセリング",
    "reading": "counseling",
    "meaning": "tư vấn"
  },
  {
    "lesson": "18",
    "words": "キャラクター",
    "reading": "character",
    "meaning": "nhân cách, tính cách"
  },
  {
    "lesson": "18",
    "words": "ユニークな　",
    "reading": "unique",
    "meaning": "độc nhất"
  },
  {
    "lesson": "18",
    "words": "ルーズな　",
    "reading": "loose",
    "meaning": "luộm thuộm, không đúng giờ"
  },
  {
    "lesson": "18",
    "words": "ロマンチックな",
    "reading": "romantic",
    "meaning": "lãng mạn"
  },
  {
    "lesson": "18",
    "words": "センス",
    "reading": "sense",
    "meaning": "giác quan, cảm nhận"
  },
  {
    "lesson": "18",
    "words": "エコロジー　",
    "reading": "ecology",
    "meaning": "sinh thái học"
  },
  {
    "lesson": "18",
    "words": "ダム",
    "reading": "dam",
    "meaning": "đê"
  },
  {
    "lesson": "18",
    "words": "コンクリート",
    "reading": "concrete",
    "meaning": "bê tông"
  },
  {
    "lesson": "18",
    "words": "単純",
    "reading": "たんじゅんな",
    "meaning": "đơn giản"
  },
  {
    "lesson": "18",
    "words": "純粋な",
    "reading": "じゅんすいな",
    "meaning": "trong sáng, nguyên chất"
  },
  {
    "lesson": "18",
    "words": "透明な",
    "reading": "とうめいな",
    "meaning": "trong suốt"
  },
  {
    "lesson": "18",
    "words": "爽やかな",
    "reading": "さわやかな",
    "meaning": "sảng khoái, tươi"
  },
  {
    "lesson": "18",
    "words": "素直な",
    "reading": "すなおな",
    "meaning": "vâng lời, dịu dàng, ôn hòa"
  },
  {
    "lesson": "18",
    "words": "率直な",
    "reading": "そっちょくな",
    "meaning": "trực tính, thẳng thắn"
  },
  {
    "lesson": "18",
    "words": "誠実な",
    "reading": "せいじつな",
    "meaning": "thật thà"
  },
  {
    "lesson": "18",
    "words": "謙虚な",
    "reading": "けんきょな",
    "meaning": "khiêm tốn"
  },
  {
    "lesson": "18",
    "words": "賢い",
    "reading": "かしこい",
    "meaning": "thông minh, khôn ngoan"
  },
  {
    "lesson": "18",
    "words": "慎重な",
    "reading": "しんちょうな",
    "meaning": "thận trọng"
  },
  {
    "lesson": "18",
    "words": "穏やかな",
    "reading": "おだやかな",
    "meaning": "điềm tĩnh, yên lặng"
  },
  {
    "lesson": "18",
    "words": "真剣な",
    "reading": "しんけんな",
    "meaning": "nghiêm túc, nghiêm trọng"
  },
  {
    "lesson": "18",
    "words": "正式な",
    "reading": "せいしきな",
    "meaning": "chính thức, trang trọng"
  },
  {
    "lesson": "18",
    "words": "主な",
    "reading": "おもな",
    "meaning": "chính, chủ yếu　(部分、問題)"
  },
  {
    "lesson": "18",
    "words": "主要な",
    "reading": "しゅような",
    "meaning": "chủ yếu, chính, thường ghép với từ khác (主要年、主要人物)　"
  },
  {
    "lesson": "18",
    "words": "貴重な",
    "reading": "きちょうな",
    "meaning": "quý giá"
  },
  {
    "lesson": "18",
    "words": "偉大な",
    "reading": "いだいな",
    "meaning": "vĩ đại"
  },
  {
    "lesson": "18",
    "words": "偉い",
    "reading": "えらい",
    "meaning": "đáng ngưỡng mộ, vị trí cao"
  },
  {
    "lesson": "18",
    "words": "独特な",
    "reading": "どくとくな",
    "meaning": "độc nhất, đặc biệt, riêng bản thân có thôi"
  },
  {
    "lesson": "18",
    "words": "特殊な",
    "reading": "とくしゅな",
    "meaning": "độc đáo, đặc biệt (vd: năng khiếu đặc biệt, thông minh, giỏi giang)"
  },
  {
    "lesson": "18",
    "words": "奇妙な",
    "reading": "きみょうな",
    "meaning": "kỳ lạ"
  },
  {
    "lesson": "18",
    "words": "妙な",
    "reading": "みょうな",
    "meaning": "lạ, tò mò"
  },
  {
    "lesson": "18",
    "words": "怪しい",
    "reading": "あやしい",
    "meaning": "đáng nghi, nghi ngờ, có thiên về cảm giác nguy hiểm, lo lắng, bất an"
  },
  {
    "lesson": "18",
    "words": "異常な",
    "reading": "いじょうな",
    "meaning": "bất thường"
  },
  {
    "lesson": "18",
    "words": "高度な",
    "reading": "こうどな",
    "meaning": "độ chính xác cao"
  },
  {
    "lesson": "18",
    "words": "新たな",
    "reading": "あらたな",
    "meaning": "mới, được làm mới"
  },
  {
    "lesson": "18",
    "words": "合理的な",
    "reading": "ごうりてきな",
    "meaning": "hợp lý"
  },
  {
    "lesson": "18",
    "words": "器用な",
    "reading": "きような",
    "meaning": "lanh tay, tài giỏi, khéo léo"
  },
  {
    "lesson": "18",
    "words": "手軽な",
    "reading": "てがるな",
    "meaning": "nhẹ nhàng, đơn giản"
  },
  {
    "lesson": "18",
    "words": "手ごろな",
    "reading": "てごろな",
    "meaning": "hợp lý, phù hợp"
  },
  {
    "lesson": "18",
    "words": "高価な",
    "reading": "こうかな",
    "meaning": "đắt"
  },
  {
    "lesson": "18",
    "words": "ぜいたくな",
    "reading": "ぜいたくな",
    "meaning": "sang trọng, lãng phí (phong cách sống)"
  },
  {
    "lesson": "18",
    "words": "豪華な",
    "reading": "ごうかな",
    "meaning": "hào hoa"
  },
  {
    "lesson": "18",
    "words": "高級な",
    "reading": "こうきゅうな",
    "meaning": "chất lượng cao, đắt"
  },
  {
    "lesson": "18",
    "words": "上等な",
    "reading": "じょうとうな",
    "meaning": "thượng đẳng, đủ tốt"
  },
  {
    "lesson": "18",
    "words": "上品な",
    "reading": "じょうひんな",
    "meaning": "thượng phẩm"
  },
  {
    "lesson": "18",
    "words": "適度な",
    "reading": "てきどな",
    "meaning": "mức độ thích hợp, điều độ"
  },
  {
    "lesson": "18",
    "words": "快適な",
    "reading": "かいてきな",
    "meaning": "dễ chịu, sảng khoái"
  },
  {
    "lesson": "18",
    "words": "快い",
    "reading": "こころよい",
    "meaning": "hài lòng, dễ chịu"
  },
  {
    "lesson": "18",
    "words": "順調な",
    "reading": "じゅんちょうな",
    "meaning": "ｔhuận lợi; tốt; trôi chảy"
  },
  {
    "lesson": "19",
    "words": "活発な",
    "reading": "かっぱつな",
    "meaning": "hoạt bát, sôi nổi (thiên về tính cách con người)"
  },
  {
    "lesson": "19",
    "words": "的確な",
    "reading": "てきかくな",
    "meaning": "chính xác"
  },
  {
    "lesson": "19",
    "words": "確実な",
    "reading": "かくじつな",
    "meaning": "thật （sự thật, người thật）"
  },
  {
    "lesson": "19",
    "words": "明らかな",
    "reading": "あきらかな",
    "meaning": "rõ ràng"
  },
  {
    "lesson": "19",
    "words": "曖昧な",
    "reading": "あいまいな",
    "meaning": "mơ hồ, không rõ ràng"
  },
  {
    "lesson": "19",
    "words": "具体的な",
    "reading": "ぐたいてきな",
    "meaning": "cụ thể"
  },
  {
    "lesson": "19",
    "words": "抽象的な",
    "reading": "ちゅうしょうてきな",
    "meaning": "trừu tượng"
  },
  {
    "lesson": "19",
    "words": "等しい",
    "reading": "ひとしい",
    "meaning": "giống nhau"
  },
  {
    "lesson": "19",
    "words": "平等な",
    "reading": "びょうどうな",
    "meaning": "bình đẳng (người ngoài cuộc nhìn nhận)"
  },
  {
    "lesson": "19",
    "words": "公平な",
    "reading": "こうへいな",
    "meaning": "công bằng (người trong cuộc nhìn nhận)"
  },
  {
    "lesson": "19",
    "words": "人物",
    "reading": "じんぶつ",
    "meaning": "nhân vật"
  },
  {
    "lesson": "19",
    "words": "者",
    "reading": "もの",
    "meaning": "người, kẻ"
  },
  {
    "lesson": "19",
    "words": "各自",
    "reading": "かくじ",
    "meaning": "mỗi người"
  },
  {
    "lesson": "19",
    "words": "気分",
    "reading": "きぶん",
    "meaning": "tâm tư, tinh thần"
  },
  {
    "lesson": "19",
    "words": "気配",
    "reading": "けはい",
    "meaning": "cảm giác, linh cảm"
  },
  {
    "lesson": "19",
    "words": "生きがい",
    "reading": "いきがい",
    "meaning": "mục đích sống"
  },
  {
    "lesson": "19",
    "words": "行儀",
    "reading": "ぎょうぎ",
    "meaning": "tác phong, cách cư xử"
  },
  {
    "lesson": "19",
    "words": "品",
    "reading": "ひん",
    "meaning": "hàng hóa"
  },
  {
    "lesson": "19",
    "words": "姿",
    "reading": "すがた",
    "meaning": "hình ảnh, bóng dáng"
  },
  {
    "lesson": "19",
    "words": "姿勢",
    "reading": "しせい",
    "meaning": "tư thế, thái độ"
  },
  {
    "lesson": "19",
    "words": "見かけ",
    "reading": "みかけ",
    "meaning": "nhìn bề ngoài, từ đó suy đoán bên trong"
  },
  {
    "lesson": "19",
    "words": "ふり",
    "reading": "ふり",
    "meaning": "giả vờ"
  },
  {
    "lesson": "19",
    "words": "苦情",
    "reading": "くじょう",
    "meaning": "phàn nàn"
  },
  {
    "lesson": "19",
    "words": "口実",
    "reading": "こうじつ",
    "meaning": "xin lỗi, bào chữa (văn viết của 言い訳)"
  },
  {
    "lesson": "19",
    "words": "動機",
    "reading": "どうき",
    "meaning": "động cơ"
  },
  {
    "lesson": "19",
    "words": "皮肉",
    "reading": "ひにく",
    "meaning": "giễu cợt, mỉa mai"
  },
  {
    "lesson": "19",
    "words": "意義",
    "reading": "いぎ",
    "meaning": "ý nghĩa"
  },
  {
    "lesson": "19",
    "words": "主義",
    "reading": "しゅぎ",
    "meaning": "nguyên tắc, niềm tin"
  },
  {
    "lesson": "19",
    "words": "精神",
    "reading": "せいしん",
    "meaning": "tinh thần"
  },
  {
    "lesson": "19",
    "words": "年代",
    "reading": "ねんだい",
    "meaning": "kỷ nguyên, năm"
  },
  {
    "lesson": "19",
    "words": "世代",
    "reading": "せだい",
    "meaning": "thời đại , thế hệ"
  },
  {
    "lesson": "19",
    "words": "基礎",
    "reading": "きそ",
    "meaning": "cơ bản, gốc"
  },
  {
    "lesson": "19",
    "words": "基準",
    "reading": "きじゅん",
    "meaning": "tiêu chuẩn, mang tính pháp lý, luật lệ, thường có phạm vi rộng"
  },
  {
    "lesson": "19",
    "words": "標準",
    "reading": "ひょうじゅん",
    "meaning": "tiêu chuẩn, từ nhiều mức độ xảy ra chọn mức độ trung bình làm tiêu chuẩn"
  },
  {
    "lesson": "19",
    "words": "典型",
    "reading": "てんけい",
    "meaning": "điển hình, mô hình"
  },
  {
    "lesson": "19",
    "words": "方言",
    "reading": "ほうげん",
    "meaning": "tiếng địa phương"
  },
  {
    "lesson": "19",
    "words": "分布",
    "reading": "ぶんぷ",
    "meaning": "phân bố (phân bố dân số, phân bố động thực vật)"
  },
  {
    "lesson": "19",
    "words": "発展",
    "reading": "はってん",
    "meaning": "phát triển, mở rộng"
  },
  {
    "lesson": "19",
    "words": "文明",
    "reading": "ぶんめい",
    "meaning": "văn minh"
  },
  {
    "lesson": "19",
    "words": "普及",
    "reading": "ふきゅう",
    "meaning": "phổ cập, phổ biến"
  },
  {
    "lesson": "19",
    "words": "制限",
    "reading": "せいげん",
    "meaning": "hạn chế (ăn uống, tuổi tác, thời gian, tốc độ, calorie )"
  },
  {
    "lesson": "19",
    "words": "限度",
    "reading": "げんど",
    "meaning": "mức độ giới hạn(sự chịu đựng, giới hạn khoản tiền vay, )"
  },
  {
    "lesson": "19",
    "words": "限界",
    "reading": "げんかい",
    "meaning": "mức độ giới hạn,đỉnh điểm, tối đa (năng lực, thể lực, sự chịu đựng )"
  },
  {
    "lesson": "19",
    "words": "検討",
    "reading": "けんとう",
    "meaning": "nghiên cứu, xem xét"
  },
  {
    "lesson": "19",
    "words": "選択",
    "reading": "せんたく",
    "meaning": "lựa chọn"
  },
  {
    "lesson": "19",
    "words": "考慮",
    "reading": "こうりょ",
    "meaning": "xem xét"
  },
  {
    "lesson": "19",
    "words": "重視",
    "reading": "じゅうし",
    "meaning": "xem trọng, xem là quan trọng"
  },
  {
    "lesson": "19",
    "words": "見当",
    "reading": "けんとう",
    "meaning": "phỏng đoán, ước tính"
  },
  {
    "lesson": "19",
    "words": "訂正",
    "reading": "ていせい",
    "meaning": "đính chính"
  },
  {
    "lesson": "19",
    "words": "修正",
    "reading": "しゅうせい",
    "meaning": "chỉnh sửa, sửa đổi"
  },
  {
    "lesson": "20",
    "words": "反抗",
    "reading": "はんこう",
    "meaning": "chống, không vâng lời　（ý chí chống đối）"
  },
  {
    "lesson": "20",
    "words": "抵抗",
    "reading": "ていこう",
    "meaning": "đẩy lui, chống đối"
  },
  {
    "lesson": "20",
    "words": "災難",
    "reading": "さいなん",
    "meaning": "tai nạn, thiên tai (mức độ cao nhất)"
  },
  {
    "lesson": "20",
    "words": "汚染",
    "reading": "おせん",
    "meaning": "ô nhiễm"
  },
  {
    "lesson": "20",
    "words": "害",
    "reading": "がい",
    "meaning": "có hại"
  },
  {
    "lesson": "20",
    "words": "伝染",
    "reading": "でんせん",
    "meaning": "truyền nhiễm"
  },
  {
    "lesson": "20",
    "words": "対策",
    "reading": "たいさく",
    "meaning": "đối sách, biện pháp đối phó"
  },
  {
    "lesson": "20",
    "words": "処置",
    "reading": "しょち",
    "meaning": "xử lý, điều trị, thường là những việc cần làm ngay (vd xử lý vết thương)"
  },
  {
    "lesson": "20",
    "words": "処分",
    "reading": "しょぶん",
    "meaning": "tiêu hủy, trừng trị"
  },
  {
    "lesson": "20",
    "words": "処理",
    "reading": "しょり",
    "meaning": "xử lý"
  },
  {
    "lesson": "20",
    "words": "輪",
    "reading": "わ",
    "meaning": "vòng, lặp"
  },
  {
    "lesson": "20",
    "words": "でこぼこ",
    "reading": "でこぼこ",
    "meaning": "lồi lõm, ổ gà"
  },
  {
    "lesson": "20",
    "words": "跡",
    "reading": "あと",
    "meaning": "dấu vết"
  },
  {
    "lesson": "20",
    "words": "手間",
    "reading": "てま",
    "meaning": "thời gian, phiền phức"
  },
  {
    "lesson": "20",
    "words": "能率",
    "reading": "のうりつ",
    "meaning": "hiệu quả, năng suất"
  },
  {
    "lesson": "20",
    "words": "性能",
    "reading": "せいのう",
    "meaning": "hiệu năng, hiệu quả"
  },
  {
    "lesson": "20",
    "words": "操作",
    "reading": "そうさ",
    "meaning": "thao tác hoạt động"
  },
  {
    "lesson": "20",
    "words": "発揮",
    "reading": "はっき",
    "meaning": "phát huy, gắng sức"
  },
  {
    "lesson": "20",
    "words": "頂点",
    "reading": "ちょうてん",
    "meaning": "đỉnh, điểm"
  },
  {
    "lesson": "20",
    "words": "周辺",
    "reading": "しゅうへん",
    "meaning": "xung quanh"
  },
  {
    "lesson": "20",
    "words": "現場",
    "reading": "げんば",
    "meaning": "hiện trường"
  },
  {
    "lesson": "20",
    "words": "状況",
    "reading": "じょうきょう",
    "meaning": "trạng thái, tình trạng"
  },
  {
    "lesson": "20",
    "words": "組織",
    "reading": "そしき",
    "meaning": "tổ chức"
  },
  {
    "lesson": "20",
    "words": "制度",
    "reading": "せいど",
    "meaning": "chế độ"
  },
  {
    "lesson": "20",
    "words": "構成",
    "reading": "こうせい",
    "meaning": "cấu thành"
  },
  {
    "lesson": "20",
    "words": "形式",
    "reading": "けいしき",
    "meaning": "hình thức"
  },
  {
    "lesson": "20",
    "words": "傾向",
    "reading": "けいこう",
    "meaning": "khuynh hướng"
  },
  {
    "lesson": "20",
    "words": "方針",
    "reading": "ほうしん",
    "meaning": "phương châm, chính sách"
  },
  {
    "lesson": "20",
    "words": "徹底",
    "reading": "てってい",
    "meaning": "triệt để"
  },
  {
    "lesson": "20",
    "words": "分析",
    "reading": "ぶんせき",
    "meaning": "phân tích"
  },
  {
    "lesson": "20",
    "words": "維持",
    "reading": "いじ",
    "meaning": "duy trì, (hòa bình, mức sống, tốc độ)"
  },
  {
    "lesson": "20",
    "words": "管理",
    "reading": "かんり",
    "meaning": "quản lý, điều hành, điều khiển"
  },
  {
    "lesson": "20",
    "words": "行方",
    "reading": "ゆくえ",
    "meaning": "tung tích, tương lai"
  },
  {
    "lesson": "20",
    "words": "端",
    "reading": "はし",
    "meaning": "cạnh"
  },
  {
    "lesson": "20",
    "words": "場",
    "reading": "ば",
    "meaning": "địa điểm, kinh nghiệm, dịp, hoàn cảnh"
  },
  {
    "lesson": "20",
    "words": "分野",
    "reading": "ぶんや",
    "meaning": "lĩnh vực"
  },
  {
    "lesson": "20",
    "words": "需要",
    "reading": "じゅよう",
    "meaning": "nhu cầu (CẦU)"
  },
  {
    "lesson": "20",
    "words": "供給",
    "reading": "きょうきゅう",
    "meaning": "cung cấp (CUNG)"
  },
  {
    "lesson": "20",
    "words": "物資",
    "reading": "ぶっし",
    "meaning": "vật tư"
  },
  {
    "lesson": "20",
    "words": "用途",
    "reading": "ようと",
    "meaning": "sử dụng, ứng dụng"
  },
  {
    "lesson": "20",
    "words": "関連",
    "reading": "かんれん",
    "meaning": "liên quan, quan hệ"
  },
  {
    "lesson": "20",
    "words": "消耗",
    "reading": "しょうもう",
    "meaning": "tiêu thụ, tiêu hao"
  },
  {
    "lesson": "20",
    "words": "欠陥",
    "reading": "けっかん",
    "meaning": "khuyết điểm, hỏng"
  },
  {
    "lesson": "20",
    "words": "予備",
    "reading": "よび",
    "meaning": "dự bị, dự trữ"
  },
  {
    "lesson": "20",
    "words": "付属",
    "reading": "ふぞく",
    "meaning": "sự phụ thuộc, sát nhập, phụ kiện"
  },
  {
    "lesson": "20",
    "words": "手当",
    "reading": "てあて",
    "meaning": "trị liệu, chuẩn bị"
  },
  {
    "lesson": "20",
    "words": "元",
    "reading": "もと",
    "meaning": "nguyên, ban đầu, lý do"
  },
  {
    "lesson": "20",
    "words": "面",
    "reading": "めん",
    "meaning": "mặt, mặt phẳng, diện mạo"
  },
  {
    "lesson": "20",
    "words": "説",
    "reading": "せつ",
    "meaning": "thuyết, ý kiến"
  },
  {
    "lesson": "20",
    "words": "差",
    "reading": "さ",
    "meaning": "sai khác, khoảng cách"
  },
  {
    "lesson": "21",
    "words": "間",
    "reading": "ま",
    "meaning": "giữa, trong khoảng"
  },
  {
    "lesson": "21",
    "words": "分",
    "reading": "ぶん",
    "meaning": "thành phần, điều kiện"
  },
  {
    "lesson": "21",
    "words": "筋",
    "reading": "すじ",
    "meaning": "cốt, sườn"
  },
  {
    "lesson": "21",
    "words": "余裕",
    "reading": "よゆう",
    "meaning": "dư, thừa (dùng còn dư), phụ cấp"
  },
  {
    "lesson": "21",
    "words": "負担",
    "reading": "ふたん",
    "meaning": "gánh chịu"
  },
  {
    "lesson": "21",
    "words": "保証",
    "reading": "ほしょう",
    "meaning": "bảo hành"
  },
  {
    "lesson": "21",
    "words": "催促",
    "reading": "さいそく",
    "meaning": "thúc giục, gợi nhớ"
  },
  {
    "lesson": "21",
    "words": "成立",
    "reading": "せいりつ",
    "meaning": "thành lập"
  },
  {
    "lesson": "21",
    "words": "矛盾",
    "reading": "むじゅん",
    "meaning": "mâu thuẫn"
  },
  {
    "lesson": "21",
    "words": "存在",
    "reading": "そんざい",
    "meaning": "tồn tại"
  },
  {
    "lesson": "21",
    "words": "編む",
    "reading": "あむ",
    "meaning": "đan"
  },
  {
    "lesson": "21",
    "words": "縫う",
    "reading": "ぬう",
    "meaning": "may, khâu lại"
  },
  {
    "lesson": "21",
    "words": "指す",
    "reading": "さす",
    "meaning": "biểu thị, chỉ vào,"
  },
  {
    "lesson": "21",
    "words": "示す",
    "reading": "しめす",
    "meaning": "chỉ, bày tỏ, biểu thị"
  },
  {
    "lesson": "21",
    "words": "そそぐ (注ぐ)",
    "reading": "そそぐ",
    "meaning": "rót　(nước nóng)"
  },
  {
    "lesson": "21",
    "words": "漱ぐ",
    "reading": "すすぐ",
    "meaning": "rửa, súc"
  },
  {
    "lesson": "21",
    "words": "触る",
    "reading": "さわる",
    "meaning": "sờ"
  },
  {
    "lesson": "21",
    "words": "触れる",
    "reading": "ふれる",
    "meaning": "chạm, đề cập"
  },
  {
    "lesson": "21",
    "words": "抱く",
    "reading": "いだく",
    "meaning": "ôm, mang, yêu mến"
  },
  {
    "lesson": "21",
    "words": "抱える",
    "reading": "かかえる",
    "meaning": "cầm nhiểu hơn 持つ, còn có nghĩa bóng (頭を抱える：ôm đầu)"
  },
  {
    "lesson": "21",
    "words": "担ぐ",
    "reading": "かつぐ",
    "meaning": "mang, vác"
  },
  {
    "lesson": "21",
    "words": "剥がす",
    "reading": "はがす",
    "meaning": "bóc ra, lột vỏ"
  },
  {
    "lesson": "21",
    "words": "描く",
    "reading": "えがく",
    "meaning": "vẽ, mô tả, tưởng tượng"
  },
  {
    "lesson": "21",
    "words": "砕ける",
    "reading": "くだける",
    "meaning": "bị vỡ, trơn, hỏng"
  },
  {
    "lesson": "21",
    "words": "砕く",
    "reading": "くだく",
    "meaning": "phá vỡ, nghiền nát"
  },
  {
    "lesson": "21",
    "words": "塞がる",
    "reading": "ふさがる",
    "meaning": "bị chặn, bị chiếm, khít lại, không có khoảng trống (mắc kẹt giữa dòng đời)"
  },
  {
    "lesson": "21",
    "words": "塞ぐ",
    "reading": "ふさぐ",
    "meaning": "chiếm, chặn. bị trầm cảm"
  },
  {
    "lesson": "21",
    "words": "避ける",
    "reading": "さける",
    "meaning": "tránh, tránh xa"
  },
  {
    "lesson": "21",
    "words": "よける",
    "reading": "よける",
    "meaning": "tránh, để qua một bên"
  },
  {
    "lesson": "21",
    "words": "それる",
    "reading": "それる",
    "meaning": "trượt, lỗ, lạc đề"
  },
  {
    "lesson": "21",
    "words": "逸らす",
    "reading": "そらす",
    "meaning": "trốn tránh, lảng tránh"
  },
  {
    "lesson": "21",
    "words": "見つめる",
    "reading": "みつめる",
    "meaning": "nhìn chằm chằm, đối mặt"
  },
  {
    "lesson": "21",
    "words": "眺める",
    "reading": "ながめる",
    "meaning": "nhìn, trông coi"
  },
  {
    "lesson": "21",
    "words": "見合わせる",
    "reading": "みあわせる",
    "meaning": "nhìn nhau, bị hoãn, bị hủy"
  },
  {
    "lesson": "21",
    "words": "見送る",
    "reading": "みおくる",
    "meaning": "đi tiễn (khách)"
  },
  {
    "lesson": "21",
    "words": "訪れる",
    "reading": "おとずれる",
    "meaning": "đến, thăm"
  },
  {
    "lesson": "21",
    "words": "引き返す",
    "reading": "ひきかえす",
    "meaning": "quay lại"
  },
  {
    "lesson": "21",
    "words": "去る",
    "reading": "さる",
    "meaning": "rời xa, bỏ đi"
  },
  {
    "lesson": "21",
    "words": "すする",
    "reading": "すする",
    "meaning": "hớp, hút"
  },
  {
    "lesson": "21",
    "words": "味わう",
    "reading": "あじわう",
    "meaning": "thưởng thức, trải nghiệm (món ăn ngon, phim hay, cảnh đẹp)"
  },
  {
    "lesson": "21",
    "words": "匂う",
    "reading": "におう",
    "meaning": "có mùi, nực mùi"
  },
  {
    "lesson": "21",
    "words": "飢える",
    "reading": "うえる",
    "meaning": "①đói lả, ②khao khát, thèm muốn (một cái gì đó)"
  },
  {
    "lesson": "21",
    "words": "問う",
    "reading": "とう",
    "meaning": "hỏi về, yêu cầu"
  },
  {
    "lesson": "21",
    "words": "語る",
    "reading": "かたる",
    "meaning": "nói"
  },
  {
    "lesson": "21",
    "words": "誓う",
    "reading": "ちかう",
    "meaning": "thề, hứa"
  },
  {
    "lesson": "21",
    "words": "支える",
    "reading": "ささえる",
    "meaning": "hỗ trợ, giúp đỡ"
  },
  {
    "lesson": "21",
    "words": "費やす",
    "reading": "ついやす",
    "meaning": "tiêu"
  },
  {
    "lesson": "21",
    "words": "用いる",
    "reading": "もちいる",
    "meaning": "sử dụng, nhận nuôi, thuê"
  },
  {
    "lesson": "21",
    "words": "改まる",
    "reading": "あらたまる",
    "meaning": "được cải tiến, được thay thế"
  },
  {
    "lesson": "21",
    "words": "改める",
    "reading": "あらためる",
    "meaning": "cải tiến, thay thế"
  },
  {
    "lesson": "22",
    "words": "収まる・納まる・治まる",
    "reading": "おさまる",
    "meaning": "thu nạp, định cư, bình tĩnh　"
  },
  {
    "lesson": "22",
    "words": "収める・納める・治める",
    "reading": "おさめる",
    "meaning": "giải quyết, đạt được, giao hàng （tham khảo phía trên có giải thích）"
  },
  {
    "lesson": "22",
    "words": "沿う・添う",
    "reading": "そう",
    "meaning": "dọc theo, men theo"
  },
  {
    "lesson": "22",
    "words": "添える",
    "reading": "そえる",
    "meaning": "gắn với"
  },
  {
    "lesson": "22",
    "words": "兼ねる",
    "reading": "かねる",
    "meaning": "không thể"
  },
  {
    "lesson": "22",
    "words": "適する",
    "reading": "てきする",
    "meaning": "hợp, xứng đáng"
  },
  {
    "lesson": "22",
    "words": "相当する",
    "reading": "そうとうする",
    "meaning": "tương ứng (tương ứng với A là B. VD tương ứng với trúng giải nhất là 100 triệu đồng)"
  },
  {
    "lesson": "22",
    "words": "伴う",
    "reading": "ともなう",
    "meaning": "được tham gia, kèm theo, cùng với"
  },
  {
    "lesson": "22",
    "words": "響く",
    "reading": "ひびく",
    "meaning": "vang, vọng"
  },
  {
    "lesson": "22",
    "words": "次ぐ",
    "reading": "つぐ",
    "meaning": "tiếp theo"
  },
  {
    "lesson": "22",
    "words": "略す",
    "reading": "りゃくす",
    "meaning": "lượt bớt, viết tắt, tóm gọn"
  },
  {
    "lesson": "22",
    "words": "迫る",
    "reading": "せまる",
    "meaning": "tiến sát, thúc giục, cưỡng bức"
  },
  {
    "lesson": "22",
    "words": "狙う",
    "reading": "ねらう",
    "meaning": "nhắm đến　(con mồi, đối tượng, mục tiêu, tạo cảm giác gian xảo)"
  },
  {
    "lesson": "22",
    "words": "犯す",
    "reading": "おかす",
    "meaning": "thực hiện (hành vi phạm tội)"
  },
  {
    "lesson": "22",
    "words": "侵す",
    "reading": "おかす",
    "meaning": "xâm chiếm"
  },
  {
    "lesson": "22",
    "words": "冒す",
    "reading": "おかす",
    "meaning": "can đảm, đương đầu"
  },
  {
    "lesson": "22",
    "words": "脅す",
    "reading": "おどす",
    "meaning": "bắt nạt, đe dọa"
  },
  {
    "lesson": "22",
    "words": "脅かす",
    "reading": "おどかす",
    "meaning": "hù dọa"
  },
  {
    "lesson": "22",
    "words": "逆らう",
    "reading": "さからう",
    "meaning": "làm ngược lại (ko vâng lời, bơi ngược dòng, đi ngược gió)"
  },
  {
    "lesson": "22",
    "words": "妨げる",
    "reading": "さまたげる",
    "meaning": "ngăn chặn"
  },
  {
    "lesson": "22",
    "words": "打ち消す",
    "reading": "うちけす",
    "meaning": "phủ nhận, bác bỏ"
  },
  {
    "lesson": "22",
    "words": "応じる",
    "reading": "おうじる",
    "meaning": "đáp lại, đối ứng"
  },
  {
    "lesson": "22",
    "words": "承る",
    "reading": "うけたまわる",
    "meaning": "nhận, nghe (khiêm nhường ngữ của 聞く、受ける)"
  },
  {
    "lesson": "22",
    "words": "頂戴する",
    "reading": "ちょうだいする",
    "meaning": "① nhận (=もらう), ②hãy làm (=～ください)"
  },
  {
    "lesson": "22",
    "words": "学ぶ",
    "reading": "まなぶ",
    "meaning": "học"
  },
  {
    "lesson": "22",
    "words": "練る",
    "reading": "ねる",
    "meaning": "nhào trộn (bột, đất sét), trau chuốt (kế hoạch)"
  },
  {
    "lesson": "22",
    "words": "負う",
    "reading": "おう",
    "meaning": "mang, vác"
  },
  {
    "lesson": "22",
    "words": "果たす",
    "reading": "はたす",
    "meaning": "hoàn thành"
  },
  {
    "lesson": "22",
    "words": "引き受ける",
    "reading": "ひきうける",
    "meaning": "nhận, đảm trách"
  },
  {
    "lesson": "22",
    "words": "増す",
    "reading": "ます",
    "meaning": "tăng lên"
  },
  {
    "lesson": "22",
    "words": "欠ける",
    "reading": "かける",
    "meaning": "bỏ lỡ, thiếu sót"
  },
  {
    "lesson": "22",
    "words": "欠かす",
    "reading": "かかす",
    "meaning": "thiếu, lỡ"
  },
  {
    "lesson": "22",
    "words": "澄む",
    "reading": "すむ",
    "meaning": "trở nên rõ ràng"
  },
  {
    "lesson": "22",
    "words": "濁る",
    "reading": "にごる",
    "meaning": "dính bùn, đục"
  },
  {
    "lesson": "22",
    "words": "濁す",
    "reading": "にごす",
    "meaning": "nhập nhằng (nói)"
  },
  {
    "lesson": "22",
    "words": "生じる",
    "reading": "しょうじる",
    "meaning": "phát sinh, nguyên nhân"
  },
  {
    "lesson": "22",
    "words": "及ぶ",
    "reading": "およぶ",
    "meaning": "đạt đến, lan ra"
  },
  {
    "lesson": "22",
    "words": "及ぼす",
    "reading": "およぼす",
    "meaning": "gây ra (thường là ảnh hưởng xấu)"
  },
  {
    "lesson": "22",
    "words": "至る",
    "reading": "いたる",
    "meaning": "dẫn đến, đi đến"
  },
  {
    "lesson": "22",
    "words": "達する",
    "reading": "たっする",
    "meaning": "đến, chạm tới"
  },
  {
    "lesson": "22",
    "words": "実る",
    "reading": "みのる",
    "meaning": "mang lại kết quả tốt"
  },
  {
    "lesson": "22",
    "words": "暮れる",
    "reading": "くれる",
    "meaning": "tối, hết (thường diễn tả hết ngày, hết năm)"
  },
  {
    "lesson": "22",
    "words": "劣る",
    "reading": "おとる",
    "meaning": "kém hơn"
  },
  {
    "lesson": "22",
    "words": "異なる",
    "reading": "ことなる",
    "meaning": "khác"
  },
  {
    "lesson": "22",
    "words": "乱れる",
    "reading": "みだれる",
    "meaning": "hỗn hoạn, bị nhầm lẫn"
  },
  {
    "lesson": "22",
    "words": "乱す",
    "reading": "みだす",
    "meaning": "lộn xộn, làm đảo lộn kế hoạch, làm hỏng"
  },
  {
    "lesson": "22",
    "words": "緩む",
    "reading": "ゆるす",
    "meaning": "nới lỏng, được thư giãn, phá vớ"
  },
  {
    "lesson": "22",
    "words": "緩める",
    "reading": "ゆるめる",
    "meaning": "lỏng, thư giãn, hạ xuống"
  },
  {
    "lesson": "22",
    "words": "錆びる",
    "reading": "さびる",
    "meaning": "bị rỉ sét"
  },
  {
    "lesson": "22",
    "words": "接する",
    "reading": "せっする",
    "meaning": "gắn với, tiếp xúc, gặp"
  },
  {
    "lesson": "23",
    "words": "属する",
    "reading": "ぞくする",
    "meaning": "thuộc về"
  },
  {
    "lesson": "23",
    "words": "占める",
    "reading": "しめる",
    "meaning": "chiếm, giữ (vị trí)"
  },
  {
    "lesson": "23",
    "words": "くたびれる",
    "reading": "くたびれる",
    "meaning": "bị mệt, bị chán"
  },
  {
    "lesson": "23",
    "words": "恵まれる",
    "reading": "めぐまれる",
    "meaning": "được ban phước, được ưa chuộng"
  },
  {
    "lesson": "23",
    "words": "湧く",
    "reading": "わく",
    "meaning": "sôi sục, dâng trào"
  },
  {
    "lesson": "23",
    "words": "微笑む",
    "reading": "ほほえむ",
    "meaning": "cười"
  },
  {
    "lesson": "23",
    "words": "ふざける",
    "reading": "ふざける",
    "meaning": "quậy phá"
  },
  {
    "lesson": "23",
    "words": "悔やむ",
    "reading": "くやむ",
    "meaning": "hối tiếc"
  },
  {
    "lesson": "23",
    "words": "ためらう",
    "reading": "ためらう",
    "meaning": "chần chừ"
  },
  {
    "lesson": "23",
    "words": "敬う",
    "reading": "うやまう",
    "meaning": "tôn trọng"
  },
  {
    "lesson": "23",
    "words": "さっぱり",
    "reading": "さっぱり",
    "meaning": "hoàn toàn, sảng khoái"
  },
  {
    "lesson": "23",
    "words": "すっきり",
    "reading": "すっきり",
    "meaning": "①sảng khoái, ②rõ ràng, gọn gàng (デザイン、部屋、文章)"
  },
  {
    "lesson": "23",
    "words": "実に",
    "reading": "じつに",
    "meaning": "thực sự là, thực tế, thực ra"
  },
  {
    "lesson": "23",
    "words": "思い切り",
    "reading": "おもいきり",
    "meaning": "hết sức, dứt khoát"
  },
  {
    "lesson": "23",
    "words": "何となく",
    "reading": "なんとなく",
    "meaning": "hơi hơi (cảm giác)"
  },
  {
    "lesson": "23",
    "words": "何だか",
    "reading": "なんだか",
    "meaning": "hơi hơi, 1 chút"
  },
  {
    "lesson": "23",
    "words": "どうにか",
    "reading": "どうにか",
    "meaning": "bằng cách nào đó, như thế nào đó"
  },
  {
    "lesson": "23",
    "words": "どうにも",
    "reading": "どうにも",
    "meaning": "chẳng thể làm gì"
  },
  {
    "lesson": "23",
    "words": "何とか",
    "reading": "なんとか",
    "meaning": "chút nào đó, gì đó　（何とか言ってください）"
  },
  {
    "lesson": "23",
    "words": "何とも",
    "reading": "なんとも",
    "meaning": "không…một chút nào（何とも…ない）"
  },
  {
    "lesson": "23",
    "words": "わざと",
    "reading": "わざと",
    "meaning": "cố ý"
  },
  {
    "lesson": "23",
    "words": "わざわざ",
    "reading": "わざわざ",
    "meaning": "làm phiền, gây phiền"
  },
  {
    "lesson": "23",
    "words": "せっかく",
    "reading": "せっかく",
    "meaning": "đã mất công"
  },
  {
    "lesson": "23",
    "words": "あいにく",
    "reading": "あいにく",
    "meaning": "đáng tiếc"
  },
  {
    "lesson": "23",
    "words": "案の定",
    "reading": "あんのじょう",
    "meaning": "như mong đợi"
  },
  {
    "lesson": "23",
    "words": "いよいよ",
    "reading": "いよいよ",
    "meaning": "cuối cùng, đã đến lúc, càng ngày càng"
  },
  {
    "lesson": "23",
    "words": "さすが",
    "reading": "さすが",
    "meaning": "quả là, như dự đoán, thật đúng là"
  },
  {
    "lesson": "23",
    "words": "とにかく",
    "reading": "とにかく",
    "meaning": "dù sao, cách này hay cách khác"
  },
  {
    "lesson": "23",
    "words": "ともかく",
    "reading": "ともかく",
    "meaning": "dù sao, đặt (cái gì) sang một bên"
  },
  {
    "lesson": "23",
    "words": "せめて",
    "reading": "せめて",
    "meaning": "ít nhất là（mong muốn nhiều hơn thế nhưng biết là không được \nnên ít nhất là muốn cỡ này）"
  },
  {
    "lesson": "23",
    "words": "せいぜい",
    "reading": "せいぜい",
    "meaning": "cho dù nhiều thì cũng cỡ (phán đoán)"
  },
  {
    "lesson": "23",
    "words": "どうせ",
    "reading": "どうせ",
    "meaning": "dù cho, đằng nào thì"
  },
  {
    "lesson": "23",
    "words": "ぎっしり",
    "reading": "ぎっしり",
    "meaning": "lèn chặt, đầy chặt, kín lịch"
  },
  {
    "lesson": "23",
    "words": "ずらりと",
    "reading": "ずらりと",
    "meaning": "trong một dãy"
  },
  {
    "lesson": "23",
    "words": "あっさり",
    "reading": "あっさり",
    "meaning": "① tao nhã (món ăn, màu sắc, thiết kế)\n② dễ dàng, trôi chảy"
  },
  {
    "lesson": "23",
    "words": "しんと・しいんと",
    "reading": "しんと・しいんと",
    "meaning": "yên lặng, lặng lẽ"
  },
  {
    "lesson": "23",
    "words": "ちゃんと",
    "reading": "ちゃんと",
    "meaning": "nghiêm túc, cẩn thận, tuyệt đối"
  },
  {
    "lesson": "23",
    "words": "続々",
    "reading": "ぞくぞく",
    "meaning": "liên tục, cái này sau cái kia"
  },
  {
    "lesson": "23",
    "words": "どっと",
    "reading": "どっと",
    "meaning": "tất cả cùng lúc, bất thình lình, bất chợt"
  },
  {
    "lesson": "23",
    "words": "ばったり",
    "reading": "ばったり",
    "meaning": "đột nhiên (ngã), ngẫu nhiên (gặp ai đó)"
  },
  {
    "lesson": "23",
    "words": "さっさと",
    "reading": "さっさと",
    "meaning": "thể hiện hành động, động tác nhanh (ăn nhanh lên, làm nhanh lên)"
  },
  {
    "lesson": "23",
    "words": "さっと",
    "reading": "さっと",
    "meaning": "thể hiện quá trình thay đổi nhanh (vừa bị đổ đã nhanh chóng được lau sạch, sắc mặt thay đổi rất nhanh)"
  },
  {
    "lesson": "23",
    "words": "すっと",
    "reading": "すっと",
    "meaning": "đột nhiên (đứng dậy), \nsảng khoái (trong lòng, ăn chewgum thấy trong miệng sảng khoái)"
  },
  {
    "lesson": "23",
    "words": "せっせと",
    "reading": "せっせと",
    "meaning": "siêng năng, cần cù"
  },
  {
    "lesson": "23",
    "words": "ざっと",
    "reading": "ざっと",
    "meaning": "sơ qua, đại khái (tính toán sơ, nhìn sơ qua), \nđại khái (lễ hội đại khái có 3000 người)"
  },
  {
    "lesson": "23",
    "words": "こっそり",
    "reading": "こっそり",
    "meaning": "bí mật, lén lút"
  },
  {
    "lesson": "23",
    "words": "生き生き",
    "reading": "いきいき",
    "meaning": "sinh động"
  },
  {
    "lesson": "23",
    "words": "ぼんやり",
    "reading": "ぼんやり",
    "meaning": "nhìn thấy lờ mờ\nnhớ lờ mờ, đầu óc lờ mờ\nđi bộ lững thững"
  },
  {
    "lesson": "23",
    "words": "ふと",
    "reading": "ふと",
    "meaning": "đột nhiên, tình cờ"
  },
  {
    "lesson": "23",
    "words": "直に",
    "reading": "じかに",
    "meaning": "trực tiếp"
  },
  {
    "lesson": "24",
    "words": "一度に",
    "reading": "いちどに",
    "meaning": "cùng lúc làm nhiều thứ"
  },
  {
    "lesson": "24",
    "words": "一斉に",
    "reading": "いっせいに",
    "meaning": "cùng lúc có nhiều đối tượng cùng làm một hành động"
  },
  {
    "lesson": "24",
    "words": "共に",
    "reading": "ともに",
    "meaning": "cùng với"
  },
  {
    "lesson": "24",
    "words": "相互に",
    "reading": "そうごに",
    "meaning": "lẫn nhau, cùng nhau"
  },
  {
    "lesson": "24",
    "words": "一人一人",
    "reading": "ひとりひとり",
    "meaning": "từng người một, lần lượt"
  },
  {
    "lesson": "24",
    "words": "いちいち",
    "reading": "いちいち",
    "meaning": "chi li quá (thường mang nghĩa không tốt, không cần thiết quá như thế)"
  },
  {
    "lesson": "24",
    "words": "所々",
    "reading": "ところどころ",
    "meaning": "đây đó"
  },
  {
    "lesson": "24",
    "words": "どうか",
    "reading": "どうか",
    "meaning": "làm ơn"
  },
  {
    "lesson": "24",
    "words": "できれば・できたら",
    "reading": "できれば・できたら",
    "meaning": "nếu có thể"
  },
  {
    "lesson": "24",
    "words": "たいして。。。ません",
    "reading": "たいして",
    "meaning": "Không...nhiều; không...lắm"
  },
  {
    "lesson": "24",
    "words": "恐らく",
    "reading": "おそらく",
    "meaning": "có lẽ"
  },
  {
    "lesson": "24",
    "words": "むしろ",
    "reading": "むしろ",
    "meaning": "hơn, tốt"
  },
  {
    "lesson": "24",
    "words": "果たして",
    "reading": "はたして",
    "meaning": "có thực sự là...(sẽ thành công, sẽ chiến thắng ?)\nquả thực là , đúng với dự đoán"
  },
  {
    "lesson": "24",
    "words": "かえって",
    "reading": "かえって",
    "meaning": "ngược lại, hơn"
  },
  {
    "lesson": "24",
    "words": "必ずしも",
    "reading": "かならずしも",
    "meaning": "không hẳn, không cần thiết"
  },
  {
    "lesson": "24",
    "words": "単に",
    "reading": "たんに",
    "meaning": "chỉ, đơn giản"
  },
  {
    "lesson": "24",
    "words": "いまだに。。。ません",
    "reading": "いまだに",
    "meaning": "vẫn chưa"
  },
  {
    "lesson": "24",
    "words": "ついでに",
    "reading": "ついでに",
    "meaning": "nhân tiện"
  },
  {
    "lesson": "24",
    "words": "とりあえず",
    "reading": "とりあえず",
    "meaning": "đầu tiên, trong thơi gian này"
  },
  {
    "lesson": "24",
    "words": "万一・万が一",
    "reading": "まんいち・まんがいち",
    "meaning": "khẩn cấp, trường hợp xấu"
  },
  {
    "lesson": "24",
    "words": "偶然",
    "reading": "ぐうぜん",
    "meaning": "ngẫu nhiên, bất ngờ"
  },
  {
    "lesson": "24",
    "words": "たまたま",
    "reading": "たまたま",
    "meaning": "tình cờ, thỉnh thoảng"
  },
  {
    "lesson": "24",
    "words": "実際",
    "reading": "じっさい",
    "meaning": "tình cờ, thỉnh thoảng"
  },
  {
    "lesson": "24",
    "words": "同様",
    "reading": "どうよう",
    "meaning": "giống như"
  },
  {
    "lesson": "24",
    "words": "元々",
    "reading": "もともと",
    "meaning": "ban đầu"
  },
  {
    "lesson": "24",
    "words": "本来",
    "reading": "ほんらい",
    "meaning": "từ đầu, nguyên bản"
  },
  {
    "lesson": "24",
    "words": "ある",
    "reading": "ある",
    "meaning": "có, một số"
  },
  {
    "lesson": "24",
    "words": "あらゆる",
    "reading": "あらゆる",
    "meaning": "tất cả"
  },
  {
    "lesson": "24",
    "words": "大した",
    "reading": "たいした",
    "meaning": "to lớn (đi cùng phủ định: không có gì to lớn)\ngiỏi (chỉ những người giải quyết tốt vấn đề)"
  },
  {
    "lesson": "24",
    "words": "いわゆる",
    "reading": "いわゆる",
    "meaning": "cái được gọi là"
  }
]
