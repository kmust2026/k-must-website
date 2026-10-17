/**
 * K-Heritage & Horizons Travel - Tours & Content Database
 * 대한민국 인바운드 & 국내 프리미엄 여행 전문 데이터
 */

const TOURS_DATA = [
  {
    id: "seoul-heritage",
    category: "culture",
    badge: "BESTSELLER",
    rating: 4.96,
    reviewCount: 342,
    duration: { ko: "1일 (오전 9시 - 오후 6시)", en: "1 Day (09:00 - 18:00)" },
    priceKRW: 135000,
    priceUSD: 105,
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[서울 궁궐&한옥] 경복궁 수문장 교대의식 · 북촌 달빛 다도 & 인사동 예술기행",
      en: "[Seoul Royal Heritage] Gyeongbokgung Guard Ceremony, Bukchon Hanok & Tea House"
    },
    shortDesc: {
      ko: "조선 600년 역사의 심장부 경복궁부터 고즈넉한 북촌 한옥마을 다도 체험까지, 전문 통역안내사와 함께하는 품격 있는 서울 헤리티지 투어입니다.",
      en: "Immerse in 600 years of Joseon dynasty grandeur: royal palace guard ceremonies, tranquil Bukchon Hanok alleys, and artisanal tea ceremony."
    },
    highlights: {
      ko: [
        "경복궁 근정전 및 경회루 심층 도슨트 (한복 대여 무료 포함)",
        "국가무형문화재 장인이 운영하는 북촌 전통 다도 다식 체험",
        "인사동 공예골목 및 조계사 도심 사찰 힐링 산책",
        "미슐랭 빕구르망 선정 전통 한정식 정갈한 중식 제공",
        "소그룹 진행 (최대 10인 제한) & 다국어 전문 가이드 동행"
      ],
      en: [
        "In-depth Gyeongbokgung Palace tour with complimentary premium Hanbok rental",
        "Traditional Korean tea & confection ceremony in a private Bukchon Hanok",
        "Artisanal Insadong alleyways & serene Jogyesa Zen temple visit",
        "Michelin Bib Gourmand authentic Korean Royal Table lunch included",
        "Strictly small group (Max 10 guests) with licensed English/Korean guide"
      ]
    },
    itinerary: [
      {
        time: "09:00",
        title: { ko: "호텔 픽업 또는 광화문역 미팅", en: "Hotel Pick-up or Gwanghwamun Meeting" },
        desc: { ko: "전용 프리미엄 리무진 밴 탑승 및 일정 브리핑", en: "Board private VIP van and receive morning tour briefing" }
      },
      {
        time: "09:30 - 11:30",
        title: { ko: "경복궁 & 수문장 교대의식 관람", en: "Gyeongbokgung Palace & Royal Guard Changing" },
        desc: { ko: "고품격 한복 착용 후 궁궐 역사 해설 및 포토스팟 인생샷 촬영", en: "Wear premium Hanbok, witness royal ceremony, and explore hidden royal pavilions" }
      },
      {
        time: "12:00 - 13:30",
        title: { ko: "정갈한 계절 전통 한정식 중식", en: "Seasonal Korean Royal Banquet Lunch" },
        desc: { ko: "외국인 입맛과 비건/할랄 옵션까지 세심하게 배려한 전통 한상차림", en: "Handcrafted 12-dish Korean banquet with dietary & vegetarian options" }
      },
      {
        time: "14:00 - 16:00",
        title: { ko: "북촌 한옥마을 & 100년 고택 다도 체험", en: "Bukchon Hanok Village & Tea Ceremony" },
        desc: { ko: "전통 가옥의 숨결을 느끼며 명인이 내리는 우전 녹차와 다식 음미", en: "Learn traditional etiquette with artisan tea master in a historic hanok" }
      },
      {
        time: "16:30 - 18:00",
        title: { ko: "인사동 쌈지길 & 조계사 산책 후 환송", en: "Insadong Craft Market & Hotel Drop-off" },
        desc: { ko: "전통 공예품 쇼핑 및 도심 속 천년 고찰 조계사 야경 감상 후 귀환", en: "Browse authentic craft boutiques and peaceful Jogyesa courtyard before drop-off" }
      }
    ],
    includes: {
      ko: ["전용 VIP 리무진 차량 및 유류비", "국가공인 전문 관광통역안내사", "경복궁 입장료 & 프리미엄 한복 대여", "정통 한정식 중식 및 전통 다도 체험비", "생수 및 여행자보험"],
      en: ["Private VIP air-conditioned transport", "Licensed multilingual professional guide", "All palace entrance fees & premium Hanbok", "Full course gourmet Korean lunch & tea ceremony", "Bottled spring water & traveler insurance"]
    },
    excludes: {
      ko: ["개인 간식 및 쇼핑 경비", "가이드 매너 팁(자율)"],
      en: ["Personal shopping expenses", "Discretionary guide gratuity"]
    }
  },
  {
    id: "k-wave-seoul",
    category: "kwave",
    badge: "POPULAR",
    rating: 4.98,
    reviewCount: 489,
    duration: { ko: "1일 (오전 10시 - 오후 7시)", en: "1 Day (10:00 - 19:00)" },
    priceKRW: 160000,
    priceUSD: 125,
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[K-컬처 & K-팝] 성수 팝업 성지 · K-Pop 댄스 클래스 & N서울타워 한강 야경",
      en: "[K-Wave Immersion] K-Pop Dance Studio, Seongsu Hotspots & N Seoul Tower Sunset"
    },
    shortDesc: {
      ko: "전 세계를 뒤흔든 한류의 진원지! 원밀리언 댄스 아카데미 원데이 클래스부터 트렌디한 성수동 편집숍, 서울의 랜드마크 N서울타워까지 이어지는 올인원 K-컬처 투어입니다.",
      en: "Dive into the heart of global Hallyu: beginner-friendly K-Pop idol choreography lesson, trendsetting Seongsu concept stores, and panoramic sunset over the Han River."
    },
    highlights: {
      ko: [
        "전문 K-Pop 댄서에게 직접 배우는 히트곡 숏폼 댄스 챌린지 영상 촬영",
        "MZ 트렌드의 중심 '성수동 카페거리 & 디스트릭트' 감성 탐방",
        "K-드라마 명소 코엑스 별마당 도서관 및 K-STAR 로드",
        "남산 케이블카 탑승 & N서울타워 서울 파노라마 석양/야경 감상",
        "한강 시민공원 즉석 끓인 라면 & 치맥 피크닉 체험"
      ],
      en: [
        "Exclusive 1-hour K-Pop dance session with high-res short-form video certificate",
        "Curated walk through Seongsu-dong 'Brooklyn of Seoul' pop-up stores & cafes",
        "Starfield COEX Library & K-Star Road iconic Gangnam photo stops",
        "Namsan Cable car ride & 360-degree twilight skyline view at N Seoul Tower",
        "Authentic Han River riverside picnic with crispy Chimaek (Chicken & Craft Beer)"
      ]
    },
    itinerary: [
      {
        time: "10:00",
        title: { ko: "강남 또는 명동 픽업", en: "Gangnam or Myeongdong Pick-up" },
        desc: { ko: "가이드 미팅 후 K-컬처 투어 전용 차량 탑승", en: "Meet your youth-culture specialist guide and set off" }
      },
      {
        time: "10:30 - 12:30",
        title: { ko: "K-Pop 댄스 아카데미 원데이 클래스", en: "K-Pop Dance Studio Experience" },
        desc: { ko: "최신 인기 아이돌 안무를 배우고 나만의 댄스 릴스/쇼츠 영상 제작", en: "Learn choreography from real idol trainers; shoot your own dance reel" }
      },
      {
        time: "13:00 - 14:30",
        title: { ko: "성수동 트렌디 브런치 & 팝업스토어", en: "Seongsu Hipster Dining & Boutiques" },
        desc: { ko: "디올 성수, 아모레성수 뷰티 체험 및 핫플레이스 탐방", en: "Gourmet fusion lunch, K-beauty personalized foundation matching & popups" }
      },
      {
        time: "15:00 - 16:30",
        title: { ko: "코엑스 별마당 도서관 & 강남 K-Star Road", en: "COEX Starfield Library & K-Star Road" },
        desc: { ko: "인스타 명소 거대 책장 포토존 및 아이돌 조형물 거리 산책", en: "Marvel at the monumental book towers and idol bear sculptures" }
      },
      {
        time: "17:30 - 19:00",
        title: { ko: "N서울타워 전망대 & 한강 선셋 감상", en: "N Seoul Tower Observatory Sunset" },
        desc: { ko: "케이블카 탑승, 사랑의 자물쇠 및 서울 360도 야경 감상 후 귀환", en: "Ride the cable car to Namsan peak for breathtaking twilight panoramas" }
      }
    ],
    includes: {
      ko: ["전용 차량", "전문 가이드", "K-Pop 댄스 스튜디오 수강료 및 영상 편집본", "N서울타워 전망대 입장권 & 케이블카", "치맥/음료 간식 세트"],
      en: ["Private transport", "Fluent English guide", "Dance class tuition & edited 4K video reel", "N Seoul Tower & cable car tickets", "Korean fried chicken & picnic refreshment"]
    },
    excludes: {
      ko: ["개인 쇼핑 비용", "알코올 추가 주문"],
      en: ["Personal shopping expenses", "Extra alcoholic beverages"]
    }
  },
  {
    id: "dmz-peace",
    category: "history",
    badge: "HISTORIC",
    rating: 4.95,
    reviewCount: 612,
    duration: { ko: "1일 (오전 7시 30분 - 오후 3시)", en: "1 Day (07:30 - 15:00)" },
    priceKRW: 110000,
    priceUSD: 85,
    image: "https://images.unsplash.com/photo-1594973843513-e4d75f284ec0?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594973843513-e4d75f284ec0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583344600122-3c8b417ee6c7?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[한반도 평화의 최전선] DMZ 비무장지대 · 제3땅굴 & 도라전망대 북한 조망 투어",
      en: "[DMZ & Peace Border] 3rd Infiltration Tunnel, Dora Observatory & Imjingak"
    },
    shortDesc: {
      ko: "세계 유일의 분단국가 한반도의 역사와 긴장, 평화의 염원을 마주하는 가장 상징적인 인바운드 필수 투어입니다. 국가공인 DMZ 전문 통역안내사가 동행합니다.",
      en: "An unforgettable journey into modern history: peer directly into North Korea from Dora Observatory, traverse the 3rd underground tunnel, and walk Imjingak peace park."
    },
    highlights: {
      ko: [
        "망원경으로 개성공단과 북한 기정동 마을을 육안 조망하는 도라전망대",
        "지하 73m 깊이의 남침용 제3땅굴 모노레일 체험",
        "임진각 평화누리공원, 독개다리, 끊어진 철마 전시",
        "탈북민 스토리텔러와의 특별 질의응답 세션 (선택 옵션)",
        "파주 장단콩 정식 로컬 향토 미식 중식 제공"
      ],
      en: [
        "Peer across the Demarcation Line into North Korea at high-tech Dora Observatory",
        "Explore 73 meters underground inside the covert 3rd Infiltration Tunnel",
        "Imjingak Peace Park, Mangbaedan memorial, and the war-scarred Steam Locomotive",
        "Optional intimate Q&A session with a North Korean defector story-teller",
        "Farm-to-table Paju Jangdan soy bean specialty traditional lunch"
      ]
    },
    itinerary: [
      {
        time: "07:30",
        title: { ko: "서울 중심부 지정 호텔 픽업", en: "Central Seoul Hotel Pick-up" },
        desc: { ko: "여권 확인 및 DMZ 출입 통제선 등록 절차 진행", en: "Passport check and military checkpoint pre-clearance" }
      },
      {
        time: "08:45",
        title: { ko: "임진각 평화누리공원 도착", en: "Arrive at Imjingak Peace World" },
        desc: { ko: "자유의 다리, 망배단, 6.25 전쟁의 상흔을 간직한 녹슨 기관차 관람", en: "Explore Bridge of Freedom, Mangbaedan Altar, and historical artillery" }
      },
      {
        time: "10:00",
        title: { ko: "제3땅굴 탐방 (모노레일)", en: "3rd Infiltration Tunnel Exploration" },
        desc: { ko: "안전모 착용 후 지하 73m 깊이의 군사 터널 내부 답사", en: "Descend into the bedrock tunnel excavated covertly beneath the DMZ" }
      },
      {
        time: "11:30",
        title: { ko: "도라전망대에서 북한 조망", en: "Dora Observatory North Korea Panorama" },
        desc: { ko: "개성공단, 김일성 동상, 선전마을 조망 및 통일 염원 해설", en: "View Gaeseong city, propaganda village flagpoles and DPRK farmland" }
      },
      {
        time: "13:00 - 15:00",
        title: { ko: "통일촌 로컬 중식 후 서울 복귀", en: "Tongilchon Lunch & Return to Seoul" },
        desc: { ko: "민통선 마을 특산물 식사 후 명동/시청 안전하게 샌딩", en: "Healthy local meal inside the restricted zone, followed by central drop-off" }
      }
    ],
    includes: {
      ko: ["군부대 출입 승인 및 전용 셔틀", "DMZ 전문 통역안내사", "제3땅굴 모노레일 및 전망대 입장료", "향토 한식 중식", "여행자보험"],
      en: ["Military check-in authorization & VIP bus", "Certified DMZ specialist guide", "Monorail ticket & observatory admission", "Traditional local lunch", "Comprehensive insurance"]
    },
    excludes: {
      ko: ["여권 미지참 시 환불 불가", "개인 쇼핑 경비"],
      en: ["Must bring valid physical passport", "Personal shopping"]
    }
  },
  {
    id: "gyeongju-unesco",
    category: "unesco",
    badge: "UNESCO HERITAGE",
    rating: 4.99,
    reviewCount: 278,
    duration: { ko: "2박 3일 (금/토 상시출발)", en: "3 Days / 2 Nights" },
    priceKRW: 580000,
    priceUSD: 450,
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[신라 천년의 숨결] 경주 유네스코 세계유산 & 안동 하회마을 품격 투어",
      en: "[Millennium Dynasty] Gyeongju UNESCO Heritage & Andong Hahoe Folk Village"
    },
    shortDesc: {
      ko: "지붕 없는 박물관 경주의 불국사, 석굴암, 동궁과 월지 야경부터 유서 깊은 양반 문화가 살아있는 안동 하회마을까지 한국의 정통 정신과 예술을 만끽하는 프리미엄 투어입니다.",
      en: "Journey through the ancient Kingdom of Silla and Joseon aristocracy: Bulguksa Temple, Seokguram Grotto, Donggung reflected moonlight, and UNESCO Hahoe Folk Village."
    },
    highlights: {
      ko: [
        "KTX 특실 왕복 또는 전용 프리미엄 리무진 리클라이너 버스 이동",
        "세계적인 석조 예술 걸작 '석굴암' 본존불 및 '불국사' 특별 도슨트",
        "동궁과 월지(안압지) 신비로운 수상 야경 프라이빗 나이트 워크",
        "안동 하회마을 고택 숙박 또는 5성급 라한셀렉트 경주 호텔 숙박",
        "신라 수라상 & 안동 간고등어·찜닭 종가 미식 풀코스"
      ],
      en: [
        "Roundtrip KTX High-Speed Train First Class or Luxury Recliner Limousine",
        "Deep docent inside Seokguram Buddhist Grotto & Bulguksa stone architecture",
        "Magical illuminated night walk around Donggung Palace & Wolji Pond",
        "5-Star Lahan Select Gyeongju Lakeview or authentic heritage Hanok stay",
        "Silla Imperial court banquet, Andong salted mackerel & Jjimdak braised chicken"
      ]
    },
    itinerary: [
      {
        time: "Day 1",
        title: { ko: "서울 KTX 출발 - 안동 하회마을 답사", en: "Seoul to Andong UNESCO Village" },
        desc: { ko: "부용대에서 내려다보는 낙동강 S자 물도리와 하회별신굿 탈놀이 관람", en: "KTX to Andong, panoramic vista from Buyongdae cliff and Mask Dance ritual" }
      },
      {
        time: "Day 2",
        title: { ko: "경주 불국사 · 석굴암 & 황리단길", en: "Bulguksa, Seokguram & Hwangridan Alleys" },
        desc: { ko: "유네스코 국보 석탑과 신라 조각 감상, 트렌디한 황리단길 한옥 카페 쉼", en: "Admire national stone pagoda treasures; artisan craft cafes in Hwangridan" }
      },
      {
        time: "Day 3",
        title: { ko: "대릉원 천마총 & 국립경주박물관 - 서울 귀환", en: "Daereungwon Royal Tombs & Return" },
        desc: { ko: "신라 황금보물 감상, 교촌 한옥마을 최부자 가문 정신 탐방 후 KTX 귀환", en: "Gyeongju Museum gold crowns, historic Gyo-dong village & evening KTX to Seoul" }
      }
    ],
    includes: {
      ko: ["왕복 KTX 또는 프리미엄 리무진", "호텔 2박(조식 포함)", "전 일정 식사(종가 한정식 5식)", "모든 유적지 입장료", "전문 통역 가이드"],
      en: ["Roundtrip high-speed KTX tickets", "2 Nights 5-Star / Boutique Hotel with breakfast", "5 gourmet heritage regional meals", "All entrance tickets", "Licensed English historian guide"]
    },
    excludes: {
      ko: ["개인 기호품", "자유 일정 시 개인 지출"],
      en: ["Personal incidentals", "Free leisure time personal expenses"]
    }
  },
  {
    id: "jeju-luxury",
    category: "nature",
    badge: "LUXURY VIP",
    rating: 5.0,
    reviewCount: 195,
    duration: { ko: "3박 4일 (단독 프라이빗)", en: "4 Days / 3 Nights (Private VIP)" },
    priceKRW: 1280000,
    priceUSD: 990,
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[세계자연유산 제주] 한라산 힐링 · 성산일출봉 해녀 물질 & 5성급 럭셔리 요트 투어",
      en: "[Jeju Emerald Isle VIP] Haenyeo Divers, Seongsan Sunrise & Sunset Yacht"
    },
    shortDesc: {
      ko: "유네스코 3관왕에 빛나는 환상의 섬 제주도! 전용 벤과 전담 가이드가 모시는 최고급 프라이빗 힐링 여행. 유네스코 해녀 문화 체험과 럭셔리 선셋 세일링이 포함됩니다.",
      en: "UNESCO triple-crown volcanic paradise: private Mercedes Sprinter van, intimate Haenyeo female diver demonstration, Seongsan crater, and luxury champagne sunset yacht."
    },
    highlights: {
      ko: [
        "전 일정 VIP 벤 전용 기사 & 다국어 전문 가이드 전담 배정",
        "유네스코 인류무형문화유산 '제주 해녀' 갓 잡은 신선 해산물 시식",
        "주상절리대 해안을 배경으로 즐기는 프라이빗 선셋 요트 세일링",
        "비자림 천년 원시림 피톤치드 웰니스 사운드 워킹",
        "제주 흑돼지 참숯구이 & 은갈치 통조림 미식 진찬"
      ],
      en: [
        "Dedicated luxury Mercedes van with private chauffeur & English-speaking host",
        "Live Haenyeo female free-diving demonstration & ultra-fresh abalone/sea urchin tasting",
        "Private sunset catamaran yacht cruise along columnar basalt sea cliffs",
        "Ancient Bijarim Nutmeg forest wellness walking meditation",
        "Black Pork charcoal BBQ & monumental whole silver-beltfish gourmet dining"
      ]
    },
    itinerary: [
      {
        time: "Day 1",
        title: { ko: "제주공항 VIP 영접 - 애월 해안도로 & 한림공원", en: "Jeju Airport VIP Greeting & Coastal Drive" },
        desc: { ko: "공항 전용 픽업, 에메랄드빛 애월 카페거리와 협재 바다 조망", en: "Airport greeting, Aewol coastal scenic drive, Hyeopjae turquoise beach" }
      },
      {
        time: "Day 2",
        title: { ko: "성산일출봉 분화구 & 해녀 물질 시연 - 우도 유람", en: "Seongsan Ilchulbong & Haenyeo Living Heritage" },
        desc: { ko: "웅장한 화산 분화구 트레킹, 70대 해녀 어머님들의 숨비소리 물질 관람", en: "Hike UNESCO volcanic cone, witness sea-women diving, visit Udo coral island" }
      },
      {
        time: "Day 3",
        title: { ko: "서귀포 폭포 - 주상절리 & 프라이빗 럭셔리 요트", en: "Seogwipo Waterfalls & Sunset Yacht Charter" },
        desc: { ko: "정방폭포 관람 후 중문 해안에서 샴페인을 곁들인 선셋 크루징", en: "Waterfalls tumbling into the sea, followed by champagne sunset sailing" }
      },
      {
        time: "Day 4",
        title: { ko: "사려니숲길 힐링 - 동문 올레시장 - 공항 환송", en: "Saryeoni Forest Trail & Local Market Farewell" },
        desc: { ko: "삼나무 숲길 산책, 오메기떡과 감귤 특산품 쇼핑 후 공항 샌딩", en: "Crisp cedar forest walk, traditional Dongmun market delicacies & flight drop-off" }
      }
    ],
    includes: {
      ko: ["제주 5성급 리조트 3박(조식 포함)", "전 일정 전용 벤 리무진 & 기사/가이드", "프라이빗 선셋 요트 탑승권", "제주 특미 7식 일체", "입장료 및 여행자보험"],
      en: ["3 Nights 5-Star Oceanview Resort with breakfast", "Dedicated Mercedes VIP Van & private guide", "Private sunset yacht charter", "7 Curated regional gourmet feasts", "All permits & insurance"]
    },
    excludes: {
      ko: ["제주 왕복 항공권 (요청 시 대행 예약 가능)", "개인 주류 주문"],
      en: ["Domestic flights to Jeju (can be arranged on request)", "Personal beverages"]
    }
  },
  {
    id: "busan-coastal",
    category: "nature",
    badge: "HOT DEAL",
    rating: 4.97,
    reviewCount: 310,
    duration: { ko: "1박 2일", en: "2 Days / 1 Night" },
    priceKRW: 290000,
    priceUSD: 225,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582650625119-3a31f8418399?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[다이내믹 부산] 해운대 블루라인 해변열차 · 자갈치시장 활어 & 감천문화마을",
      en: "[Dynamic Busan] Haeundae Coastal Sky Capsule, Jagalchi Fish Market & Gamcheon"
    },
    shortDesc: {
      ko: "바다와 영화, 로컬 미식이 살아 숨 쉬는 대한민국 제2의 도시 부산! 형형색색 감천문화마을 골목길부터 탁 트인 해운대 스카이캡슐 열차, 자갈치 수산시장까지。",
      en: "Korea's oceanic jewel: ride the iconic colorful Sky Capsule above turquoise waves, wander the terraced arts village of Gamcheon, and feast on live ocean seafood."
    },
    highlights: {
      ko: [
        "해운대 미포-청사포 간 해안 절경을 달리는 블루라인 파크 스카이캡슐 탑승",
        "한국의 산토리니로 불리는 감천문화마을 어린왕자 포토존",
        "대한민국 최대 수산시장 '자갈치시장' 싱싱한 회와 꼼장어 구이",
        "광안대교 다이아몬드 브릿지 파노라마 야경 및 광안리 해변 드론쇼 관람",
        "흰여울문화마을 영도 바다뷰 절벽 카페 힐링 티타임"
      ],
      en: [
        "Private panoramic Haeundae Blueline Sky Capsule ocean-rail ride",
        "Little Prince statue photo op at vibrant cliffside Gamcheon Culture Village",
        "Bustling Jagalchi Fish Market live sashimi & Busan fish-cake workshop",
        "Gwangalli Beach night view of the illuminated Gwangan Diamond suspension bridge",
        "Huinnyeoul Culture Village cliff walk with artisanal coastal coffee"
      ]
    },
    itinerary: [
      {
        time: "Day 1",
        title: { ko: "부산역 미팅 - 감천문화마을 - 자갈치시장 - 광안리 야경", en: "Busan Station - Gamcheon - Jagalchi - Gwangalli Night" },
        desc: { ko: "부산역 픽업, 벽화마을 탐방 후 자갈치 시장에서 싱싱한 해산물 만찬", en: "Station pickup, art village stroll, authentic fish market dinner, and illuminated bridge" }
      },
      {
        time: "Day 2",
        title: { ko: "해운대 스카이캡슐 - 해동용궁사 - 영도 흰여울마을", en: "Haeundae Capsule - Haedong Yonggungsa Temple" },
        desc: { ko: "바다 위 사찰 해동용궁사 참배, 해안열차 탑승 및 부산역/김해공항 환송", en: "Cliffside ocean temple, retro coastal train journey & farewell drop-off" }
      }
    ],
    includes: {
      ko: ["부산 호텔 1박(오션뷰)", "전용 리무진 밴 차량", "블루라인파크 스카이캡슐 탑승권", "부산 특선 회정식 & 돼지국밥 식사", "전문 가이드"],
      en: ["1 Night Busan Oceanview Hotel", "Private van & driver-guide", "Blueline Sky Capsule ticket", "Fresh seafood course & Busan Pork Soup", "Insurance"]
    },
    excludes: {
      ko: ["부산 왕복 KTX/항공편", "개인 지출"],
      en: ["Transport to/from Busan", "Personal expenses"]
    }
  },
  {
    id: "k-food-market",
    category: "gourmet",
    badge: "GOURMET",
    rating: 4.97,
    reviewCount: 420,
    duration: { ko: "반일 투어 (17:00 - 21:30)", en: "Night Tour (17:00 - 21:30)" },
    priceKRW: 95000,
    priceUSD: 75,
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[서울 나이트 미식 기행] 광장시장 빈대떡 · 마약김밥 & 을지로 노포 골뱅이 · 막걸리 테이스팅",
      en: "[Seoul Twilight Foodie Tour] Gwangjang Market, Euljiro Alley & Makgeolli Tasting"
    },
    shortDesc: {
      ko: "넷플릭스 스트리트 푸드에 방영된 100년 전통 광장시장의 생생한 활기와 힙지로의 뉴트로 감성! 전통주 소믈리에와 함께하는 K-스트리트 푸드 미식 대장정입니다.",
      en: "Feast through Netflix-featured Gwangjang traditional market: crispy mung bean bindaetteok, hand-cut knife noodles, artisan Makgeolli rice wine pairings in historic alleyways."
    },
    highlights: {
      ko: [
        "100년 전통 광장시장 5대 스트리트 푸드 풀코스 시식 (마약김밥, 육회 탕탕이, 녹두빈대떡, 꽈배기)",
        "전통주 소믈리에가 엄선한 4종 프리미엄 생막걸리 & 약주 페어링",
        "을지로 인쇄소 골목 속 숨은 '힙지로' 레트로 펍 감성 투어",
        "청계천 야경 산책길 힐링 도보 안내",
        "소규모 8인 정원 친밀한 로컬 감성 가이드"
      ],
      en: [
        "Sample 6 iconic street delicacies featured on Netflix Street Food Asia",
        "Artisanal fresh Makgeolli flight tasting guided by a certified Korean liquor sommelier",
        "Explore hidden speak-easies inside historic industrial 'Hipjiro' print district",
        "Peaceful lantern stroll along Cheonggyecheon stream under the night sky",
        "Max 8 foodies per group for an authentic insider social experience"
      ]
    },
    itinerary: [
      {
        time: "17:00",
        title: { ko: "종로5가 광장시장 정문 집결", en: "Meet at Gwangjang Market North Gate" },
        desc: { ko: "음식 가이드와 통성명 및 한국 길거리 음식 문화 오리엔테이션", en: "Introduction to Korean night-market food customs and etiquette" }
      },
      {
        time: "17:30 - 19:30",
        title: { ko: "광장시장 5대 명물 미식 릴레이", en: "Gwangjang Street Food Relay" },
        desc: { ko: "노릇한 맷돌 빈대떡, 마약김밥, 신선한 한우 육회와 낙지 탕탕이 만찬", en: "Golden crispy bindaetteok, fresh beef tartare with live octopus, spicy tteokbokki" }
      },
      {
        time: "19:45 - 20:45",
        title: { ko: "전통주 & 막걸리 바 테이스팅 세션", en: "Artisan Makgeolli & Jeon Pairing" },
        desc: { ko: "지역별 특산 쌀막걸리와 과실주의 향미를 비교하며 즐기는 전통주 토크", en: "Taste 4 distinct regional rice wines paired with savory seafood pancakes" }
      },
      {
        time: "21:00 - 21:30",
        title: { ko: "을지로 레트로 골목 & 청계천 야경 마무리", en: "Euljiro Alleys & Cheonggyecheon Twilight" },
        desc: { ko: "청계천 징검다리 산책 후 을지로3가역 또는 숙소 방향 길 안내", en: "Digestive night walk along the illuminated stream and transit guidance" }
      }
    ],
    includes: {
      ko: ["모든 길거리 음식 및 식사비 일체", "전통주 4종 시음 세트", "미식 전문 통역 가이드"],
      en: ["All street food tastings & main dishes", "Makgeolli tasting flight", "English-speaking foodie host"]
    },
    excludes: {
      ko: ["추가 개인 주류 및 테이크아웃 간식", "개인 교통비"],
      en: ["Extra alcoholic drinks outside tasting", "Personal transport"]
    }
  },
  {
    id: "korea-grand-tour",
    category: "unesco",
    badge: "ALL-INCLUSIVE",
    rating: 5.0,
    reviewCount: 142,
    duration: { ko: "6박 7일 (골든 루트)", en: "7 Days / 6 Nights (Golden Route)" },
    priceKRW: 2450000,
    priceUSD: 1890,
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"
    ],
    title: {
      ko: "[대한민국 골든루트 7일 일주] 서울 · DMZ · 설악산 · 안동 · 경주 · 부산 하이라이트",
      en: "[Korea Grand Golden Route 7D] Seoul, DMZ, Seoraksan, Andong, Gyeongju & Busan"
    },
    shortDesc: {
      ko: "외국인 여행자가 가장 찬사하는 대한민국 완전 정복 코스! 서울 궁궐에서 DMZ, 설악산 비경, 영남의 유네스코 역사문화, 부산 해양도시까지 럭셔리 전용 버스로 완벽하게 순회합니다.",
      en: "The definitive grand journey across South Korea: royal heritage, frontline DMZ peace border, misty Seoraksan peaks, UNESCO millennial relics in Gyeongju, and seaside Busan."
    },
    highlights: {
      ko: [
        "서울-강원-경북-부산을 아우르는 대한민국 대표 핵심 관광지 일주",
        "전 일정 특급 호텔 6박 숙박 & 전용 28인승 우등 리무진 버스",
        "국가공인 베테랑 수석 관광통역안내사 100% 밀착 동행",
        "설악산 신흥사 권금성 케이블카 탑승 & 동해 바다 뷰",
        "한국 8도 대표 향토 미식 (전주비빔밥, 안동찜닭, 춘천닭갈비, 부산생선회) 제공"
      ],
      en: [
        "Comprehensive cross-country itinerary covering royal, natural, historical & coastal Korea",
        "6 Nights in premium 4~5 Star hotels with daily hot buffet breakfast",
        "Private 28-seat VIP business class recliner coach with Wi-Fi",
        "Seoraksan mountain cable car to Gwongeumseong fortress peaks",
        "All 8-provincial signature regional cuisines curated by culinary guides"
      ]
    },
    itinerary: [
      { time: "Day 1", title: { ko: "인천공항 영접 - 서울 시티 오리엔테이션", en: "Incheon Airport Greeting & Seoul Highlights" }, desc: { ko: "웰컴 만찬 및 동대문 DDP 야경", en: "VIP airport reception, welcome royal dinner, DDP architecture" } },
      { time: "Day 2", title: { ko: "경복궁 & DMZ 비무장지대 탐방", en: "Gyeongbokgung Palace & DMZ Peace Border" }, desc: { ko: "왕궁 수문장 교대의식 및 제3땅굴 답사", en: "Royal Palace guard ceremony, 3rd Tunnel & Dora Observatory" } },
      { time: "Day 3", title: { ko: "설악산 국립공원 & 속초 동해안", en: "Seoraksan National Park & East Coast" }, desc: { ko: "권금성 케이블카, 신흥사 대불 및 대포항 회센터", en: "Ride cable car over granite crags, Daepo port coastal market" } },
      { time: "Day 4", title: { ko: "안동 하회마을 & 도산서원", en: "Andong Hahoe Folk Village & Academy" }, desc: { ko: "유네스코 하회탈춤 및 류성룡 종택 고즈넉한 산책", en: "Mask dance performance, ancestral clan estate visit" } },
      { time: "Day 5", title: { ko: "경주 불국사 · 석굴암 & 대릉원", en: "Gyeongju Millennial Silla Relics" }, desc: { ko: "신라 왕릉 고분군, 첨성대 및 동궁과 월지 야경", en: "Royal burial mounds, Cheomseongdae observatory, pond reflections" } },
      { time: "Day 6", title: { ko: "부산 해운대 해변열차 & 감천문화마을", en: "Busan Sky Capsule & Gamcheon Village" }, desc: { ko: "스카이캡슐 열차, 자갈치시장 만찬 & 광안대교 야경", en: "Scenic seaside rail, fresh seafood feast & farewell banquet" } },
      { time: "Day 7", title: { ko: "부산 KTX 귀환 또는 김해공항 샌딩", en: "KTX to Seoul or Gimhae Airport Departure" }, desc: { ko: "KTX 특실로 서울 서울역/인천공항 안전 환송", en: "High-speed first class KTX to Seoul or direct flight connection" } }
    ],
    includes: {
      ko: ["특급 호텔 6박(조식 포함)", "전용 리무진 버스 및 기사 일체", "전 일정 식사(14식)", "모든 케이블카/입장권", "수석 통역안내사 동행", "여행자보험"],
      en: ["6 Nights 4~5 Star accommodations", "Luxury VIP coach & personal driver", "All gourmet meals (14 meals)", "All admission & cable cars", "Dedicated bilingual lead guide", "Comprehensive insurance"]
    },
    excludes: {
      ko: ["국제선 항공권", "개인 쇼핑"],
      en: ["International flights", "Personal shopping"]
    }
  }
];

// Inbound Traveler Essential Guide
const TRAVEL_GUIDE_DATA = {
  visas: {
    ko: {
      title: "K-ETA 및 입국 비자 안내",
      desc: "대부분의 관광객은 K-ETA(전자여행허가) 또는 무사증(비자면제) 협정에 따라 간편하게 입국할 수 있습니다. 당사 예약 고객님께는 입국 서류 작성 가이드를 무료 지원합니다."
    },
    en: {
      title: "K-ETA & Visa-Free Entry",
      desc: "Eligible travelers from 112+ countries can enter visa-free or with simple online K-ETA approval. We provide complimentary entry assistance for all booked guests."
    }
  },
  transport: {
    ko: {
      title: "교통카드 (T-Money & 기후동행카드)",
      desc: "지하철과 버스, 택시까지 한 장으로 환승 가능한 T-Money 카드와 외국인 관광객용 무제한 패스를 투어 첫날 가이드가 선물 및 충전 안내를 도와드립니다."
    },
    en: {
      title: "T-Money & Seamless Transit",
      desc: "Korea boasts one of the world's cleanest and safest metro & bus systems. All our multi-day packages include a pre-loaded commemorative T-Money transit card."
    }
  },
  seasons: {
    ko: {
      title: "대한민국 사계절 여행 팁",
      desc: "봄(3~5월) 벚꽃과 화사한 축제 / 여름(6~8월) 동해와 제주의 청량한 바다 / 가을(9~11월) 오색단풍과 맑은 하늘 / 겨울(12~2월) 스키와 환상적인 눈꽃 트레킹."
    },
    en: {
      title: "Korea's Splendid 4 Seasons",
      desc: "Spring: Cherry blossoms & pleasant warmth / Summer: Emerald coastlines & water festivals / Autumn: Crisp skies & blazing maple foliage / Winter: Snowscapes & festive holiday lights."
    }
  },
  hotline: {
    ko: {
      title: "24시간 관광통역안내 1330",
      desc: "한국관광공사에서 운영하는 무료 24시간 통역 콜센터(1330)와 당사 24시간 긴급 비상 연락망(WhatsApp / 카카오톡)이 언제나 여행자의 안전을 지킵니다."
    },
    en: {
      title: "24/7 Tourist Hotline 1330",
      desc: "Korea Tourism Organization's toll-free 1330 hotline offers real-time translation & emergency assistance in English, Japanese, and Chinese around the clock."
    }
  }
};

// Customer Reviews Database
const REVIEWS_DATA = [
  {
    name: "Charlotte & David Miller",
    country: "🇺🇸 United States (New York)",
    tourId: "seoul-heritage",
    rating: 5,
    date: "2026.04.12",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    text: {
      ko: "처음 방문한 한국이었는데, K-MUST 투어 덕분에 평생 잊지 못할 추억을 만들었습니다. 경복궁에서 입었던 고급 한복과 북촌 100년 고택에서의 다도는 감동 그 자체였어요. 가이드 미셸님의 유창한 영어와 역사 설명에 깊은 찬사를 보냅니다!",
      en: "Our first trip to Korea was pure magic! With K-MUST, the Hanbok experience at Gyeongbokgung and the private tea ceremony in Bukchon were beyond words. Guide Michelle's English was flawless and her historical knowledge brought the Joseon dynasty alive. 10/10!"
    }
  },
  {
    name: "Takeshi & Yuka Sato",
    country: "🇯🇵 Japan (Tokyo)",
    tourId: "gyeongju-unesco",
    rating: 5,
    date: "2026.05.03",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    text: {
      ko: "경주 불국사와 안동 하회마을 2박 3일 코스는 정말 품격이 넘쳤습니다. 전용 리무진 버스가 너무 편안했고 식사마다 나온 전통 한정식의 깊은 맛에 아내와 저 모두 감탄했습니다. 다음에는 제주도 투어도 꼭 이곳에서 신청하겠습니다.",
      en: "The Gyeongju and Andong heritage tour was extraordinary. The VIP bus was remarkably comfortable, and every regional meal felt like a royal banquet. Truly the most authentic cultural travel agency in South Korea."
    }
  },
  {
    name: "Liam O'Connor",
    country: "🇦🇺 Australia (Sydney)",
    tourId: "dmz-peace",
    rating: 5,
    date: "2026.06.18",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    text: {
      ko: "DMZ 투어는 긴장감과 역사적 의미가 깊었습니다. 도라전망대에서 망원경으로 북한 마을을 생생히 보았고, 제3땅굴 체험도 매우 체계적이고 안전했습니다. 호텔 앞까지 정확히 픽업해주셔서 정말 편안했습니다.",
      en: "The DMZ tour exceeded all expectations. Looking across into North Korea from Dora Observatory and walking 73m deep inside the 3rd tunnel gave me chills. Punctual hotel pickup, VIP coach, and extremely professional guidance."
    }
  },
  {
    name: "Sophie Dupont & Chloe",
    country: "🇫🇷 France (Paris)",
    tourId: "k-wave-seoul",
    rating: 5,
    date: "2026.07.22",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    text: {
      ko: "딸과 함께한 K-컬처 투어! 댄스 스튜디오에서 직접 아이돌 댄스를 배우고 릴스 영상을 찍었던 순간은 딸아이에게 최고의 선물이었습니다. 성수동 팝업스토어와 남산타워 석양까지 완벽한 동선이었습니다.",
      en: "I took this tour with my teenage daughter who is an ardent BTS fan. The dance studio session was thrilling, and the high-definition reel they gave us was priceless. Seongsu cafes and N Seoul Tower at twilight were simply unforgettable."
    }
  },
  {
    name: "Marcus Tan",
    country: "🇸🇬 Singapore",
    tourId: "jeju-luxury",
    rating: 5,
    date: "2026.08.10",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    text: {
      ko: "가족들과 함께한 4일간의 제주 프라이빗 벤 투어는 최고였습니다. 해녀 어머님들이 물질해서 바로 썰어주신 전복의 맛과 석양 요트에서의 샴페인은 잊지 못할 것입니다. 부모님께서도 전혀 힘들어하지 않으셨습니다.",
      en: "Traveling with elderly parents can be challenging, but our private Mercedes van and patient guide made Jeju an absolute breeze. Sunset yachting and tasting fresh abalone right by the haenyeo cove was heavenly!"
    }
  }
];

// Why Us Key Differentiators
const WHY_US_DATA = [
  {
    icon: "award",
    title: { ko: "100% 국가공인 관광통역안내사", en: "100% Licensed Multilingual Guides" },
    desc: {
      ko: "문화체육관광부 공인 자격증을 보유한 베테랑 가이드(영어, 중국어, 일본어, 유럽어)가 깊이 있는 역사와 스토리텔링을 전합니다.",
      en: "Certified by the Ministry of Culture & Tourism. Deep historical insight, warmth, and fluent storytelling in your native language."
    }
  },
  {
    icon: "shield-check",
    title: { ko: "No 강제쇼핑 · No 의무옵션", en: "Pure Travel: Zero Forced Shopping" },
    desc: {
      ko: "저가 패키지의 강제 쇼핑센터 방문을 철저히 배제하고, 오직 여행자의 감동과 진정한 한국 문화 체험에만 집중합니다.",
      en: "We strictly forbid forced shopping stops and hidden surcharges. 100% of your time is dedicated to authentic Korean culture."
    }
  },
  {
    icon: "car",
    title: { ko: "프리미엄 리무진 밴 & 안전 최우선", en: "VIP Limousine Vans & Top Safety" },
    desc: {
      ko: "최신형 럭셔리 스프린터/카니발 하이리무진 및 최고 한도 여행자종합보험 가입으로 언제나 쾌적하고 안전한 이동을 보장합니다.",
      en: "Luxury reclining VIP vans, certified professional drivers, and comprehensive traveler liability insurance on every route."
    }
  },
  {
    icon: "compass",
    title: { ko: "1:1 맞춤형 비스포크 일정 기획", en: "1:1 Bespoke Tailor-Made Itineraries" },
    desc: {
      ko: "가족 여행, VIP 의전, 기업 인센티브, K-컬처 투어 등 고객의 취향과 일정에 맞춰 전담 플래너가 나만의 여행을 설계합니다.",
      en: "From private family getaways to corporate MICE & VIP delegations, our senior travel planners craft tailor-made journeys."
    }
  }
];
