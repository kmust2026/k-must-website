/**
 * K-Heritage & Horizons Travel - Core Application Logic
 * Language switcher, Currency calculator, Filter, Search, Modal & Booking
 */

// Application State
const AppState = {
  currentLang: localStorage.getItem('kh_lang') || 'ko', // 'ko' or 'en'
  currentCurrency: localStorage.getItem('kh_curr') || 'KRW', // 'KRW' or 'USD'
  exchangeRateUSD: 1300, // 1 USD = 1,300 KRW
  activeCategory: 'all',
  searchQuery: '',
  selectedTourForBooking: null
};

// UI Translations Dictionary
const UI_TEXTS = {
  navAbout: { ko: "여행사 소개", en: "About Us" },
  navTours: { ko: "추천 여행 상품", en: "Tour Packages" },
  navThemes: { ko: "테마별 여행", en: "Themes" },
  navCustom: { ko: "맞춤·VIP 견적", en: "Bespoke VIP" },
  navGuide: { ko: "외국인 방한가이드", en: "Korea Travel Guide" },
  navReviews: { ko: "고객 여행 후기", en: "Reviews" },
  btnConsult: { ko: "실시간 상담 예약", en: "Book / Inquire" },

  heroBadge: { ko: "한국관광공사(KTO) 인증 우수 인바운드 전문 여행사", en: "Certified Korea Inbound Travel Specialist" },
  heroTitle: {
    ko: "당신이 꿈꾸던 대한민국, 가장 깊이 있게 만나다",
    en: "Experience the Soul of Korea — Beyond the Ordinary"
  },
  heroSubtitle: {
    ko: "100% 국가공인 다국어 관광통역안내사와 함께하는 프리미엄 소그룹 & 프라이빗 맞춤 여행",
    en: "Curated bespoke journeys, licensed multilingual guides, and private luxury transport across South Korea."
  },
  searchPlaceholder: { ko: "가고 싶은 여행지나 테마를 검색하세요 (예: 경복궁, 제주도, DMZ, K-Pop)", en: "Search destinations or themes (e.g. Gyeongbokgung, Jeju, DMZ, K-Pop)" },
  searchBtn: { ko: "여행 검색", en: "Search Tours" },

  whyTitle: { ko: "왜 K-MUST 인바운드 투어인가?", en: "Why Travel With K-MUST?" },
  whySubtitle: { ko: "외국인 귀빈 의전부터 가족 맞춤 투어까지, 정직과 감동으로 대한민국을 선물합니다.", en: "From state dignitaries to bespoke family trips, we guarantee authenticity, comfort, and memories." },

  toursHeading: { ko: "대한민국 대표 프리미엄 투어 컬렉션", en: "Signature Korea Tour Collections" },
  toursSubheading: { ko: "외국인 여행자가 가장 사랑하는 베스트셀러부터 깊이 있는 로컬 헤리티지까지", en: "From world-acclaimed highlights to hidden cultural sanctuaries" },

  tabAll: { ko: "전체 상품", en: "All Tours" },
  tabCulture: { ko: "궁궐 & 전통역사", en: "Royal & Heritage" },
  tabKwave: { ko: "K-컬처 & K-Pop", en: "K-Wave & Modern" },
  tabUnesco: { ko: "유네스코 세계유산", en: "UNESCO Grand Tours" },
  tabNature: { ko: "제주 & 청정자연", en: "Jeju & Nature" },
  tabGourmet: { ko: "로컬 미식 & 시장", en: "Street Food & Gourmet" },

  btnDetails: { ko: "일정표 & 상세보기", en: "View Itinerary" },
  btnBookNow: { ko: "바로 예약하기", en: "Book This Tour" },
  priceFrom: { ko: "1인 기준", en: "per person" },

  guideTitle: { ko: "외국인 여행자를 위한 대한민국 입국 & 여행 꿀팁", en: "Essential Inbound Travel Guide to South Korea" },
  guideSub: { ko: "안전하고 편리한 한국 여행을 위해 사전에 꼭 알아두어야 할 필수 정보입니다.", en: "Key practical tips, visa essentials, and emergency services for inbound visitors." },

  reviewsTitle: { ko: "전 세계 여행자가 증명하는 감동 후기", en: "Loved by Travelers from Over 40 Countries" },
  reviewsSub: { ko: "트립어드바이저 평점 4.98 / 5.0 만족도 1위의 품격을 경험하세요.", en: "Rated 4.98 / 5.0 across global travel platforms for exceptional service and care." },

  customTitle: { ko: "나만의 맞춤형 프라이빗 투어 견적 문의", en: "Design Your Tailor-Made Private Journey" },
  customSub: { ko: "가족 여행, 비즈니스 인센티브, VIP 의전 투어 등 일정과 인원에 맞춘 1:1 맞춤 일정을 무료로 설계해 드립니다.", en: "Tell us your dream route, preferred pace, and group size. Our senior planners will craft a complimentary custom proposal within 24 hours." },

  calcTourLabel: { ko: "선택 투어", en: "Select Tour Package" },
  calcDateLabel: { ko: "희망 출발일", en: "Departure Date" },
  calcAdultsLabel: { ko: "성인 인원수 (만 12세 이상)", en: "Adults (Age 12+)" },
  calcChildLabel: { ko: "아동 인원수 (만 12세 미만, 30% 할인)", en: "Children (Under 12, 30% Off)" },
  calcLangLabel: { ko: "가이드 희망 언어", en: "Preferred Guide Language" },
  calcPickupLabel: { ko: "인천/김포공항 전용 픽업 서비스 (+₩90,000 / $70)", en: "Airport VIP Van Pick-up (+₩90,000 / $70)" },
  calcEstimatedTotal: { ko: "실시간 예상 견적 금액", en: "Estimated Total Price" },
  btnSubmitBooking: { ko: "예약 및 견적 요청서 전송", en: "Submit Booking Request" },

  footerCompany: { ko: "(주)케이머스트 트래블 | 대표이사: 손태완", en: "K-MUST Travel Co., Ltd. | CEO: Tae-wan Son" },
  footerLicense: { ko: "관광사업자 등록번호: 제2024-00018호 (종합여행업) | 사업자등록번호: 104-86-12345", en: "Tourism License: No. 2024-00018 (Comprehensive Inbound Tourism) | Business Reg: 104-86-12345" },
  footerAddress: { ko: "서울특별시 중구 세종대로 110 코리아투어빌딩 7층 | 전화: +82-2-720-8800 | 팩스: +82-2-720-8801", en: "7F Korea Tour Building, 110 Sejong-daero, Jung-gu, Seoul, Republic of Korea | Tel: +82-2-720-8800" },
  footerEmail: { ko: "이메일: contact@k-must.com | 카카오톡 채널: @케이머스트 | WhatsApp: +82-10-8800-1234", en: "Email: contact@k-must.com | KakaoTalk: @KMUST | WhatsApp: +82-10-8800-1234" },
  footerRights: { ko: "© 2026 K-MUST Travel. All rights reserved. 대한민국 문화체육관광부·한국관광공사 등록 인증 여행사", en: "© 2026 K-MUST Travel. All rights reserved. Registered & Certified by Ministry of Culture, Sports & Tourism." }
};

// Format Price according to selected currency
function formatPrice(krw, usd) {
  if (AppState.currentCurrency === 'USD') {
    return `$${usd.toLocaleString()}`;
  } else {
    return `₩${krw.toLocaleString()}`;
  }
}

// Initialize Lucide icons
function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Tour Cards
function renderTours() {
  const container = document.getElementById('tours-grid');
  if (!container) return;

  const lang = AppState.currentLang;
  const filtered = TOURS_DATA.filter(tour => {
    // Category match
    const categoryMatch = AppState.activeCategory === 'all' || tour.category === AppState.activeCategory;
    
    // Search query match
    if (!AppState.searchQuery.trim()) return categoryMatch;

    const q = AppState.searchQuery.toLowerCase();
    const titleMatch = (tour.title.ko.toLowerCase().includes(q) || tour.title.en.toLowerCase().includes(q));
    const descMatch = (tour.shortDesc.ko.toLowerCase().includes(q) || tour.shortDesc.en.toLowerCase().includes(q));
    return categoryMatch && (titleMatch || descMatch);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <i data-lucide="compass" class="w-16 h-16 mx-auto mb-4 text-slate-300"></i>
        <p class="text-xl font-medium mb-2">${lang === 'ko' ? '검색된 여행 상품이 없습니다.' : 'No tour packages match your search criteria.'}</p>
        <p class="text-sm text-slate-400">${lang === 'ko' ? '다른 키워드로 검색하거나 전체 보기를 선택해보세요.' : 'Try different keywords or browse all categories.'}</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = filtered.map(tour => {
    const badgeClass = {
      BESTSELLER: 'badge-bestseller',
      POPULAR: 'badge-popular',
      HISTORIC: 'badge-unesco',
      "UNESCO HERITAGE": 'badge-unesco',
      "LUXURY VIP": 'badge-luxury',
      "HOT DEAL": 'badge-bestseller',
      GOURMET: 'badge-gourmet',
      "ALL-INCLUSIVE": 'badge-luxury'
    }[tour.badge] || 'badge-bestseller';

    const priceFormatted = formatPrice(tour.priceKRW, tour.priceUSD);

    return `
      <div class="tour-card bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full group">
        <!-- Thumbnail & Badges -->
        <div class="relative h-64 overflow-hidden bg-slate-900">
          <img src="${tour.image}" alt="${tour.title[lang]}" class="w-full h-full object-cover img-zoom" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>
          
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md ${badgeClass}">
              ${tour.badge}
            </span>
          </div>

          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span class="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-300"></i>
              ${tour.duration[lang]}
            </span>
            <span class="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg text-amber-300 font-semibold">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
              ${tour.rating} <span class="text-slate-300">(${tour.reviewCount})</span>
            </span>
          </div>
        </div>

        <!-- Tour Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-amber-800 transition-colors">
              ${tour.title[lang]}
            </h3>
            <p class="text-slate-600 text-sm line-clamp-2 mb-4 leading-relaxed">
              ${tour.shortDesc[lang]}
            </p>

            <!-- Highlights previews -->
            <ul class="space-y-1.5 mb-6 text-xs text-slate-700">
              ${tour.highlights[lang].slice(0, 2).map(hl => `
                <li class="flex items-start gap-1.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span>${hl}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Bottom Price & CTA Buttons -->
          <div class="pt-4 border-t border-slate-100">
            <div class="flex items-baseline justify-between mb-4">
              <span class="text-xs text-slate-500 font-medium">${UI_TEXTS.priceFrom[lang]}</span>
              <div class="text-right">
                <span class="text-2xl font-extrabold text-slate-900">${priceFormatted}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="openTourModal('${tour.id}')" class="py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
                <i data-lucide="info" class="w-3.5 h-3.5"></i>
                <span>${UI_TEXTS.btnDetails[lang]}</span>
              </button>
              <button onclick="selectTourForBooking('${tour.id}')" class="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-amber-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all">
                <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                <span>${UI_TEXTS.btnBookNow[lang]}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// Render Why Us Section
function renderWhyUs() {
  const container = document.getElementById('why-us-grid');
  if (!container) return;
  const lang = AppState.currentLang;

  container.innerHTML = WHY_US_DATA.map(item => `
    <div class="trust-seal bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col">
      <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 mb-5 shadow-inner">
        <i data-lucide="${item.icon}" class="w-6 h-6"></i>
      </div>
      <h4 class="text-lg font-bold text-slate-900 mb-2">${item.title[lang]}</h4>
      <p class="text-slate-600 text-sm leading-relaxed">${item.desc[lang]}</p>
    </div>
  `).join('');

  refreshIcons();
}

// Render Travel Guide
function renderTravelGuide() {
  const container = document.getElementById('guide-grid');
  if (!container) return;
  const lang = AppState.currentLang;

  const cards = [
    { key: 'visas', icon: 'passport', bg: 'bg-blue-50 text-blue-700' },
    { key: 'transport', icon: 'credit-card', bg: 'bg-emerald-50 text-emerald-700' },
    { key: 'seasons', icon: 'sun', bg: 'bg-amber-50 text-amber-700' },
    { key: 'hotline', icon: 'phone-call', bg: 'bg-rose-50 text-rose-700' }
  ];

  container.innerHTML = cards.map(c => {
    const data = TRAVEL_GUIDE_DATA[c.key][lang];
    return `
      <div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4">
          <i data-lucide="${c.icon}" class="w-6 h-6"></i>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-2">${data.title}</h4>
        <p class="text-slate-600 text-sm leading-relaxed">${data.desc}</p>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// Render Reviews Section
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;
  const lang = AppState.currentLang;

  container.innerHTML = REVIEWS_DATA.map(rev => {
    return `
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 mb-3 text-amber-400">
            ${Array(rev.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>').join('')}
          </div>
          <p class="text-slate-700 text-sm italic mb-6 leading-relaxed">
            "${rev.text[lang]}"
          </p>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
          <img src="${rev.photo}" alt="${rev.name}" class="w-11 h-11 rounded-full object-cover border-2 border-amber-300" />
          <div>
            <h5 class="text-sm font-bold text-slate-900">${rev.name}</h5>
            <span class="text-xs text-slate-500 font-medium">${rev.country}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// Open Tour Detail Modal
function openTourModal(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;
  const lang = AppState.currentLang;

  const modal = document.getElementById('tour-modal');
  const modalContent = document.getElementById('tour-modal-content');
  if (!modal || !modalContent) return;

  const priceFormatted = formatPrice(tour.priceKRW, tour.priceUSD);

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <div class="relative h-72 sm:h-80 bg-slate-900">
      <img src="${tour.image}" alt="${tour.title[lang]}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      
      <button onclick="closeTourModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-600 uppercase">${tour.badge}</span>
          <span class="text-xs text-slate-300 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${tour.duration[lang]}
          </span>
          <span class="text-xs text-amber-300 flex items-center gap-1">
            <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i> ${tour.rating} (${tour.reviewCount})
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold font-serif leading-tight text-white mb-1">
          ${tour.title[lang]}
        </h2>
      </div>
    </div>

    <!-- Modal Body Content -->
    <div class="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
      <!-- Short Summary -->
      <div>
        <h4 class="text-sm uppercase tracking-wider font-bold text-amber-800 mb-2">
          ${lang === 'ko' ? '투어 개요' : 'Overview'}
        </h4>
        <p class="text-slate-700 text-base leading-relaxed">
          ${tour.shortDesc[lang]}
        </p>
      </div>

      <!-- Highlights -->
      <div>
        <h4 class="text-sm uppercase tracking-wider font-bold text-amber-800 mb-3">
          ${lang === 'ko' ? '투어 핵심 하이라이트' : 'Tour Highlights'}
        </h4>
        <div class="grid sm:grid-cols-2 gap-2.5">
          ${tour.highlights[lang].map(hl => `
            <div class="flex items-start gap-2 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
              <i data-lucide="check" class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"></i>
              <span class="text-xs sm:text-sm text-slate-800 font-medium">${hl}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Day-by-Day Timeline Itinerary -->
      <div>
        <h4 class="text-sm uppercase tracking-wider font-bold text-amber-800 mb-4">
          ${lang === 'ko' ? '상세 일정표' : 'Detailed Itinerary'}
        </h4>
        <div class="space-y-4">
          ${tour.itinerary.map(item => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">${item.time}</span>
                  <h5 class="text-sm font-bold text-slate-900">${item.title[lang]}</h5>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${item.desc[lang]}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Included & Excluded Items -->
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/70">
          <h5 class="text-sm font-bold text-emerald-800 flex items-center gap-1.5 mb-3">
            <i data-lucide="check-circle" class="w-4 h-4"></i>
            ${lang === 'ko' ? '포함 사항 (Included)' : 'What\'s Included'}
          </h5>
          <ul class="space-y-2 text-xs text-slate-700">
            ${tour.includes[lang].map(inc => `
              <li class="flex items-start gap-1.5">
                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
                <span>${inc}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-200/70">
          <h5 class="text-sm font-bold text-rose-800 flex items-center gap-1.5 mb-3">
            <i data-lucide="x-circle" class="w-4 h-4"></i>
            ${lang === 'ko' ? '불포함 사항 (Excluded)' : 'What\'s Excluded'}
          </h5>
          <ul class="space-y-2 text-xs text-slate-700">
            ${tour.excludes[lang].map(exc => `
              <li class="flex items-start gap-1.5">
                <i data-lucide="x" class="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5"></i>
                <span>${exc}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span class="text-xs text-slate-500">${UI_TEXTS.priceFrom[lang]}</span>
        <div class="text-2xl font-black text-slate-900">${priceFormatted}</div>
      </div>
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <button onclick="closeTourModal()" class="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors">
          ${lang === 'ko' ? '닫기' : 'Close'}
        </button>
        <button onclick="closeTourModal(); selectTourForBooking('${tour.id}');" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <i data-lucide="calendar" class="w-4 h-4"></i>
          ${UI_TEXTS.btnBookNow[lang]}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function closeTourModal() {
  const modal = document.getElementById('tour-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Select Tour for Booking and Scroll to Form
function selectTourForBooking(tourId) {
  AppState.selectedTourForBooking = tourId;
  const tourSelect = document.getElementById('calc-tour');
  if (tourSelect) {
    tourSelect.value = tourId;
  }
  updateEstimateCalculator();

  const bookingSection = document.getElementById('booking-section');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Populate Tour Options in Calculator
function populateTourSelect() {
  const tourSelect = document.getElementById('calc-tour');
  if (!tourSelect) return;
  const lang = AppState.currentLang;

  tourSelect.innerHTML = `
    <option value="">${lang === 'ko' ? '-- 투어 상품을 선택하세요 --' : '-- Please choose a tour package --'}</option>
    ${TOURS_DATA.map(t => `
      <option value="${t.id}" ${AppState.selectedTourForBooking === t.id ? 'selected' : ''}>
        ${t.title[lang]} (${formatPrice(t.priceKRW, t.priceUSD)})
      </option>
    `).join('')}
    <option value="custom">${lang === 'ko' ? '★ 맞춤형 단독 프라이빗 투어 (일정 직접 설계)' : '★ Custom Bespoke Private Tour (Custom Itinerary)'}</option>
  `;
}

// Live Price Estimation Calculator
function updateEstimateCalculator() {
  const lang = AppState.currentLang;
  const tourId = document.getElementById('calc-tour')?.value;
  const adults = parseInt(document.getElementById('calc-adults')?.value || '1', 10);
  const children = parseInt(document.getElementById('calc-children')?.value || '0', 10);
  const pickup = document.getElementById('calc-pickup')?.checked || false;
  const totalDisplay = document.getElementById('calc-total');

  if (!totalDisplay) return;

  if (!tourId) {
    totalDisplay.innerText = AppState.currentCurrency === 'USD' ? '$0' : '₩0';
    return;
  }

  if (tourId === 'custom') {
    totalDisplay.innerText = lang === 'ko' ? '상담 후 견적 산출' : 'Quotation on Request';
    return;
  }

  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  let totalKRW = (tour.priceKRW * adults) + (tour.priceKRW * 0.7 * children);
  let totalUSD = (tour.priceUSD * adults) + (tour.priceUSD * 0.7 * children);

  if (pickup) {
    totalKRW += 90000;
    totalUSD += 70;
  }

  totalDisplay.innerText = formatPrice(Math.round(totalKRW), Math.round(totalUSD));
}

// Handle Booking Form Submission
function handleBookingSubmit(e) {
  e.preventDefault();
  const lang = AppState.currentLang;
  const tourId = document.getElementById('calc-tour')?.value;
  const date = document.getElementById('calc-date')?.value;
  const adults = document.getElementById('calc-adults')?.value;
  const name = document.getElementById('calc-name')?.value;
  const email = document.getElementById('calc-email')?.value;
  const messenger = document.getElementById('calc-messenger')?.value;
  const notes = document.getElementById('calc-notes')?.value;

  if (!tourId || !date || !name || !email) {
    alert(lang === 'ko' ? '필수 항목(투어, 날짜, 성함, 이메일)을 모두 입력해 주세요.' : 'Please fill in all required fields (Tour, Date, Name, Email).');
    return;
  }

  // Generate Reference ID
  const bookingRef = `KM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Show Confirmation Modal
  const successModal = document.getElementById('success-modal');
  const successContent = document.getElementById('success-modal-content');
  
  if (successModal && successContent) {
    const tourTitle = tourId === 'custom' 
      ? (lang === 'ko' ? '맞춤형 프라이빗 투어' : 'Custom Bespoke Tour')
      : TOURS_DATA.find(t => t.id === tourId)?.title[lang];

    successContent.innerHTML = `
      <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
        <i data-lucide="check-circle" class="w-10 h-10"></i>
      </div>
      <h3 class="text-2xl font-bold font-serif text-slate-900 mb-2">
        ${lang === 'ko' ? '예약 문의가 성공적으로 접수되었습니다!' : 'Booking Request Successfully Received!'}
      </h3>
      <p class="text-slate-600 text-sm mb-6 leading-relaxed">
        ${lang === 'ko' 
          ? 'K-MUST 전문 투어 플래너가 2시간 이내(업무시간 기준)에 이메일 및 메신저로 상세 견적서와 확정 일정을 안내해 드립니다.' 
          : 'Our dedicated inbound travel planner will contact you via email & WhatsApp within 2 hours with your official proposal.'}
      </p>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs sm:text-sm space-y-2 mb-6">
        <div class="flex justify-between">
          <span class="text-slate-500">${lang === 'ko' ? '예약 번호' : 'Reference No.'}:</span>
          <span class="font-bold text-amber-800">${bookingRef}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">${lang === 'ko' ? '신청 투어' : 'Selected Tour'}:</span>
          <span class="font-medium text-slate-900 truncate max-w-[200px]">${tourTitle}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">${lang === 'ko' ? '희망 출발일' : 'Departure Date'}:</span>
          <span class="font-medium text-slate-900">${date}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">${lang === 'ko' ? '신청자 성함' : 'Guest Name'}:</span>
          <span class="font-medium text-slate-900">${name}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-2">
        <button onclick="closeSuccessModal()" class="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors">
          ${lang === 'ko' ? '확인' : 'OK'}
        </button>
        <a href="https://wa.me/821088001234?text=Hello%20K-MUST%20Travel,%20my%20booking%20ref%20is%20${bookingRef}" target="_blank" class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          WhatsApp Fast Chat
        </a>
      </div>
    `;

    successModal.classList.remove('hidden');
    refreshIcons();
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Switch UI Language
function setLanguage(newLang) {
  AppState.currentLang = newLang;
  localStorage.setItem('kh_lang', newLang);

  // Update active state in UI switches
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === newLang) {
      btn.classList.add('bg-amber-600', 'text-white', 'font-bold');
      btn.classList.remove('text-slate-300', 'hover:text-white');
    } else {
      btn.classList.remove('bg-amber-600', 'text-white', 'font-bold');
      btn.classList.add('text-slate-300', 'hover:text-white');
    }
  });

  // Re-render UI text bindings
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (UI_TEXTS[key] && UI_TEXTS[key][newLang]) {
      el.innerHTML = UI_TEXTS[key][newLang];
    }
  });

  // Update Placeholders
  const searchInput = document.getElementById('tour-search-input');
  if (searchInput && UI_TEXTS.searchPlaceholder[newLang]) {
    searchInput.placeholder = UI_TEXTS.searchPlaceholder[newLang];
  }

  // Re-render components
  populateTourSelect();
  renderTours();
  renderWhyUs();
  renderTravelGuide();
  renderReviews();
  updateEstimateCalculator();
  updateAuthUI();
}

// Switch Currency
function setCurrency(newCurr) {
  AppState.currentCurrency = newCurr;
  localStorage.setItem('kh_curr', newCurr);

  document.querySelectorAll('.curr-btn').forEach(btn => {
    if (btn.dataset.curr === newCurr) {
      btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
      btn.classList.add('text-slate-400');
    }
  });

  populateTourSelect();
  renderTours();
  updateEstimateCalculator();
}

// Category Tabs
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.activeCategory = tab.dataset.category;
      renderTours();
    });
  });
}

// Search Bar
function setupSearchBar() {
  const searchInput = document.getElementById('tour-search-input');
  const searchBtn = document.getElementById('tour-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderTours();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const toursSection = document.getElementById('tours-section');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Sticky Navbar Scroll Listener
function setupNavbarScroll() {
  const navbar = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
}

// Set Minimum Date to Today for Booking
function setupDatePicker() {
  const dateInput = document.getElementById('calc-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

// ========================================================
// MEMBER AUTH & 6-DIGIT EMAIL DIGITAL CODE VERIFICATION
// ========================================================
const AuthState = {
  currentUser: JSON.parse(localStorage.getItem('kmust_logged_user') || 'null'),
  pendingRegistration: null,
  verificationCode: null,
  codeExpiresAt: 0,
  timerInterval: null
};

// Update Navigation Auth Area (Desktop & Mobile)
function updateAuthUI() {
  const desktop = document.getElementById('auth-desktop-area');
  const mobile = document.getElementById('auth-mobile-area');
  const lang = AppState.currentLang;
  const user = AuthState.currentUser;

  if (user) {
    const initial = (user.name || 'U').charAt(0).toUpperCase();
    const desktopHTML = `
      <div class="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-xl text-xs text-slate-200">
        <span class="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs shadow-inner">
          ${initial}
        </span>
        <span class="font-bold text-amber-300 truncate max-w-[90px]">${user.name}</span>
        <button onclick="handleLogout()" class="text-slate-400 hover:text-rose-400 transition-colors ml-1 font-semibold text-[11px]" title="로그아웃">
          ${lang === 'ko' ? '로그아웃' : 'Logout'}
        </button>
      </div>
    `;

    const mobileHTML = `
      <div class="flex items-center justify-between text-xs text-slate-200">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center">
            ${initial}
          </span>
          <span class="font-bold text-white">${user.name}님 환영합니다</span>
        </div>
        <button onclick="handleLogout()" class="px-2.5 py-1 rounded-lg bg-slate-800 text-rose-300 border border-slate-700 font-semibold text-xs">
          ${lang === 'ko' ? '로그아웃' : 'Logout'}
        </button>
      </div>
    `;

    if (desktop) desktop.innerHTML = desktopHTML;
    if (mobile) mobile.innerHTML = mobileHTML;

    // Pre-fill booking form with logged user info
    const nameInput = document.getElementById('calc-name');
    const emailInput = document.getElementById('calc-email');
    if (nameInput && !nameInput.value) nameInput.value = user.name;
    if (emailInput && !emailInput.value) emailInput.value = user.email;

  } else {
    const desktopHTML = `
      <button onclick="openAuthModal('login')" class="text-xs font-semibold px-2.5 py-1.5 text-slate-300 hover:text-white transition-colors">
        ${lang === 'ko' ? '로그인' : 'Log In'}
      </button>
      <button onclick="openAuthModal('signup')" class="text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/15 text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center gap-1.5 shadow-sm">
        <i data-lucide="user-plus" class="w-3.5 h-3.5"></i>
        <span>${lang === 'ko' ? '회원가입' : 'Sign Up'}</span>
      </button>
    `;

    const mobileHTML = `
      <div class="flex items-center gap-2">
        <button onclick="openAuthModal('login')" class="w-1/2 py-2 text-center rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700">
          ${lang === 'ko' ? '로그인' : 'Log In'}
        </button>
        <button onclick="openAuthModal('signup')" class="w-1/2 py-2 text-center rounded-xl bg-amber-500 text-slate-950 text-xs font-bold shadow-md">
          ${lang === 'ko' ? '회원가입' : 'Sign Up'}
        </button>
      </div>
    `;

    if (desktop) desktop.innerHTML = desktopHTML;
    if (mobile) mobile.innerHTML = mobileHTML;
  }

  refreshIcons();
}

function openAuthModal(tab = 'signup') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
  refreshIcons();
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  if (AuthState.timerInterval) {
    clearInterval(AuthState.timerInterval);
  }
}

function switchAuthTab(tab) {
  const signupView = document.getElementById('auth-view-signup');
  const verifyView = document.getElementById('auth-view-verify');
  const successView = document.getElementById('auth-view-success');
  const loginView = document.getElementById('auth-view-login');
  const signupBtn = document.getElementById('tab-signup-btn');
  const loginBtn = document.getElementById('tab-login-btn');
  const tabs = document.getElementById('auth-tabs');

  if (tab === 'signup') {
    tabs?.classList.remove('hidden');
    signupView?.classList.remove('hidden');
    verifyView?.classList.add('hidden');
    successView?.classList.add('hidden');
    loginView?.classList.add('hidden');
    if (signupBtn) signupBtn.className = "py-3 text-center border-b-2 border-amber-600 text-amber-800 bg-amber-50/50 transition-colors font-bold";
    if (loginBtn) loginBtn.className = "py-3 text-center border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors font-semibold";
  } else if (tab === 'login') {
    tabs?.classList.remove('hidden');
    signupView?.classList.add('hidden');
    verifyView?.classList.add('hidden');
    successView?.classList.add('hidden');
    loginView?.classList.remove('hidden');
    if (signupBtn) signupBtn.className = "py-3 text-center border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors font-semibold";
    if (loginBtn) loginBtn.className = "py-3 text-center border-b-2 border-amber-600 text-amber-800 bg-amber-50/50 transition-colors font-bold";
  }
  refreshIcons();
}

function backToSignupForm() {
  document.getElementById('auth-tabs')?.classList.remove('hidden');
  document.getElementById('auth-view-signup')?.classList.remove('hidden');
  document.getElementById('auth-view-verify')?.classList.add('hidden');
  if (AuthState.timerInterval) {
    clearInterval(AuthState.timerInterval);
  }
}

// 1단계: 회원가입 정보 검증 및 6자리 디지털 코드 발송
function handleRequestVerificationCode() {
  const name = document.getElementById('reg-name')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim();
  const password = document.getElementById('reg-password')?.value;
  const country = document.getElementById('reg-country')?.value;
  const terms = document.getElementById('reg-terms')?.checked;
  const errBox = document.getElementById('reg-error-msg');

  if (!name || !email || !password) {
    showAuthError(errBox, '성함, 이메일 주소, 비밀번호를 모두 입력해 주세요.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showAuthError(errBox, '올바른 이메일 주소 형식(example@domain.com)을 입력해 주세요.');
    return;
  }

  if (password.length < 6) {
    showAuthError(errBox, '비밀번호는 최소 6자리 이상 설정해 주세요.');
    return;
  }

  if (!terms) {
    showAuthError(errBox, '이용약관 및 개인정보 수집·이용에 동의해 주세요.');
    return;
  }

  hideAuthError(errBox);

  // 6자리 랜덤 디지털 인증코드 생성 (100000 ~ 999999)
  const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 3 * 60 * 1000; // 3분 유효시간

  AuthState.pendingRegistration = { name, email, password, country };
  AuthState.verificationCode = randomCode;
  AuthState.codeExpiresAt = expiresAt;

  // 인증 화면으로 전환
  document.getElementById('auth-tabs')?.classList.add('hidden');
  document.getElementById('auth-view-signup')?.classList.add('hidden');
  document.getElementById('auth-view-verify')?.classList.remove('hidden');

  // 안내문구 & 시뮬레이션 코드 표시
  const targetEmailEl = document.getElementById('verify-target-email');
  if (targetEmailEl) targetEmailEl.innerText = email;

  const simCodeEl = document.getElementById('simulated-code-display');
  if (simCodeEl) simCodeEl.innerText = randomCode;

  // 6개 입력칸 리셋
  for (let i = 1; i <= 6; i++) {
    const inp = document.getElementById(`digit-${i}`);
    if (inp) inp.value = '';
  }
  document.getElementById('digit-1')?.focus();

  startVerifyCountdown();
  refreshIcons();
}

// 인증코드 재전송
function handleResendCode() {
  if (!AuthState.pendingRegistration) return;
  const newCode = Math.floor(100000 + Math.random() * 900000).toString();
  AuthState.verificationCode = newCode;
  AuthState.codeExpiresAt = Date.now() + 3 * 60 * 1000;

  const simCodeEl = document.getElementById('simulated-code-display');
  if (simCodeEl) simCodeEl.innerText = newCode;

  for (let i = 1; i <= 6; i++) {
    const inp = document.getElementById(`digit-${i}`);
    if (inp) inp.value = '';
  }
  document.getElementById('digit-1')?.focus();

  startVerifyCountdown();
  hideAuthError(document.getElementById('verify-error-msg'));
  alert(`[K-MUST 인증센터] 새로운 6자리 디지털 코드(${newCode})가 ${AuthState.pendingRegistration.email} 로 재발송되었습니다.`);
}

// 3분 카운트다운 타이머
function startVerifyCountdown() {
  if (AuthState.timerInterval) clearInterval(AuthState.timerInterval);

  const timerEl = document.getElementById('verify-timer');

  const update = () => {
    const remainingMs = AuthState.codeExpiresAt - Date.now();
    if (remainingMs <= 0) {
      clearInterval(AuthState.timerInterval);
      if (timerEl) timerEl.innerText = "00:00 (만료)";
      showAuthError(document.getElementById('verify-error-msg'), '인증 유효시간(3분)이 만료되었습니다. [인증번호 재전송]을 클릭해 주세요.');
      return;
    }

    const totalSec = Math.floor(remainingMs / 1000);
    const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const s = String(totalSec % 60).padStart(2, '0');
    if (timerEl) timerEl.innerText = `${m}:${s}`;
  };

  update();
  AuthState.timerInterval = setInterval(update, 1000);
}

// 자동완성 도우미 (클릭 시 자동 입력)
function autoFillCode() {
  if (!AuthState.verificationCode) return;
  const digits = AuthState.verificationCode.split('');
  digits.forEach((d, i) => {
    const inp = document.getElementById(`digit-${i + 1}`);
    if (inp) inp.value = d;
  });
  document.getElementById('digit-6')?.focus();
  hideAuthError(document.getElementById('verify-error-msg'));
}

// 6자리 개별 박스 입력 제어
function onDigitInput(index, event) {
  const val = event.target.value;
  // 복사 붙여넣기 6자리 지원
  if (val.length === 6 && /^\d{6}$/.test(val)) {
    val.split('').forEach((d, i) => {
      const inp = document.getElementById(`digit-${i + 1}`);
      if (inp) inp.value = d;
    });
    document.getElementById('digit-6')?.focus();
    return;
  }

  // 한 글자만 남기기
  event.target.value = val.replace(/\D/g, '').slice(-1);

  // 입력 완료 시 다음 칸으로 자동 포커스
  if (event.target.value && index < 6) {
    document.getElementById(`digit-${index + 1}`)?.focus();
  }
}

// 백스페이스 시 이전 칸 포커스
function onDigitKey(index, event) {
  if (event.key === 'Backspace' && !event.target.value && index > 1) {
    const prev = document.getElementById(`digit-${index - 1}`);
    if (prev) {
      prev.focus();
      prev.value = '';
    }
  }
}

// 2단계: 디지털 코드 매칭 확인 및 회원 등록 완료
function handleVerifyCodeSubmit() {
  const errBox = document.getElementById('verify-error-msg');
  const boxes = document.getElementById('digit-boxes');

  if (Date.now() > AuthState.codeExpiresAt) {
    showAuthError(errBox, '인증 유효시간이 만료되었습니다. [인증번호 재전송]을 진행해 주세요.');
    triggerBoxShake(boxes);
    return;
  }

  let enteredCode = '';
  for (let i = 1; i <= 6; i++) {
    enteredCode += document.getElementById(`digit-${i}`)?.value || '';
  }

  if (enteredCode.length < 6) {
    showAuthError(errBox, '6자리 인증번호를 모두 빠짐없이 입력해 주세요.');
    triggerBoxShake(boxes);
    return;
  }

  // 매칭 확인
  if (enteredCode !== AuthState.verificationCode) {
    showAuthError(errBox, '❌ 입력하신 인증코드가 일치하지 않습니다. 메일로 전송된 6자리를 다시 확인해 주세요.');
    triggerBoxShake(boxes);
    return;
  }

  // 인증 성공!
  hideAuthError(errBox);
  if (AuthState.timerInterval) clearInterval(AuthState.timerInterval);

  const newUser = {
    id: 'km_user_' + Date.now(),
    name: AuthState.pendingRegistration.name,
    email: AuthState.pendingRegistration.email,
    country: AuthState.pendingRegistration.country,
    coupon: 'WELCOME-KMUST-10',
    registeredAt: new Date().toISOString()
  };

  // 사용자 데이터 영구 저장
  const users = JSON.parse(localStorage.getItem('kmust_users') || '[]');
  users.push(newUser);
  localStorage.setItem('kmust_users', JSON.stringify(users));

  // 현재 로그인 세션 저장
  localStorage.setItem('kmust_logged_user', JSON.stringify(newUser));
  AuthState.currentUser = newUser;

  // 가입 완료 축하 화면
  document.getElementById('auth-view-verify')?.classList.add('hidden');
  document.getElementById('auth-view-success')?.classList.remove('hidden');
  
  const successName = document.getElementById('success-user-name');
  if (successName) successName.innerText = newUser.name;

  updateAuthUI();
}

// 로그인 처리
function handleLoginSubmit() {
  const email = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;
  const errBox = document.getElementById('login-error-msg');

  if (!email || !password) {
    showAuthError(errBox, '이메일과 비밀번호를 모두 입력해 주세요.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('kmust_users') || '[]');
  const found = users.find(u => u.email === email);

  if (found) {
    AuthState.currentUser = found;
    localStorage.setItem('kmust_logged_user', JSON.stringify(found));
    closeAuthModal();
    updateAuthUI();
    alert(`[K-MUST] ${found.name}님, 로그인되었습니다!`);
  } else {
    // 최초 테스트 시 자동 로그인 지원
    const demoUser = {
      id: 'km_user_' + Date.now(),
      name: email.split('@')[0],
      email: email,
      coupon: 'WELCOME-KMUST-10',
      registeredAt: new Date().toISOString()
    };
    AuthState.currentUser = demoUser;
    localStorage.setItem('kmust_logged_user', JSON.stringify(demoUser));
    closeAuthModal();
    updateAuthUI();
    alert(`[K-MUST] ${demoUser.name}님, 환영합니다!`);
  }
}

// 로그아웃 처리
function handleLogout() {
  if (confirm('K-MUST에서 로그아웃 하시겠습니까?')) {
    localStorage.removeItem('kmust_logged_user');
    AuthState.currentUser = null;
    updateAuthUI();
  }
}

function triggerBoxShake(el) {
  if (!el) return;
  el.classList.add('shake-error');
  setTimeout(() => el.classList.remove('shake-error'), 450);
}

function showAuthError(el, msg) {
  if (!el) return;
  el.innerText = msg;
  el.classList.remove('hidden');
}

function hideAuthError(el) {
  if (!el) return;
  el.classList.add('hidden');
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  // Setup handlers
  setupNavbarScroll();
  setupCategoryTabs();
  setupSearchBar();
  setupDatePicker();

  // Populate dynamic elements
  setLanguage(AppState.currentLang);
  setCurrency(AppState.currentCurrency);
  updateAuthUI();

  // Form listeners
  document.getElementById('booking-form')?.addEventListener('submit', handleBookingSubmit);
  document.getElementById('calc-tour')?.addEventListener('change', updateEstimateCalculator);
  document.getElementById('calc-adults')?.addEventListener('input', updateEstimateCalculator);
  document.getElementById('calc-children')?.addEventListener('input', updateEstimateCalculator);
  document.getElementById('calc-pickup')?.addEventListener('change', updateEstimateCalculator);

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      scrollTopBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  refreshIcons();
});

