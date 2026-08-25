export type ZodiacFortune = {
  id: string;
  animal: string;
  emoji: string;
  years: string;
  summary: string;
  detail: string;
  lucky: {
    color: string;
    colorHex: string;
    number: number;
    direction: string;
    item: string;
  };
};

export type DailyFortune = typeof todayFortune & {
  dateKey: string;
};

export const coupangProducts = [
  {
    id: "tripod",
    name: "스마트폰 삼각대",
    image: "/affiliate/tripod.jpg",
    affiliateUrl: "https://link.coupang.com/a/glnrsbSFfE"
  },
  {
    id: "ring-light",
    name: "유튜브 링라이트",
    image: "/affiliate/ring-light.jpg",
    affiliateUrl: "https://link.coupang.com/a/glnwIyNycC"
  },
  {
    id: "microphone",
    name: "유튜브 마이크",
    image: "/affiliate/microphone.jpg",
    affiliateUrl: "https://link.coupang.com/a/glnzh0xtfw"
  },
  {
    id: "creator-kit",
    name: "유튜브 촬영 세트",
    image: "/affiliate/creator-kit.jpg",
    affiliateUrl: "https://link.coupang.com/a/glowBs0JdA"
  }
];

export const fortuneTopics = [
  {
    id: "love",
    label: "연애운",
    icon: "💕",
    summaries: [
      "마음을 부드럽게 표현하면 관계가 가까워져요.",
      "기다리던 답보다 먼저 따뜻한 말을 건네보세요.",
      "작은 배려가 오늘의 설렘을 만들어줍니다.",
      "솔직함과 여유가 좋은 분위기를 부릅니다."
    ],
    details: [
      "상대의 반응을 급하게 해석하지 말고 흐름을 지켜보세요. 오전에는 마음이 앞서 작은 말에도 의미를 크게 붙일 수 있습니다. 오후로 갈수록 분위기가 부드러워지니 중요한 대화는 늦은 시간에 꺼내는 편이 좋습니다.",
      "오늘은 큰 고백보다 일상적인 관심이 더 잘 통합니다. 오래된 관계라면 익숙함 속에서 놓친 고마움을 표현해보세요. 다만 답장을 재촉하거나 상대의 침묵을 부정적으로 단정하는 태도는 피하는 것이 좋습니다.",
      "새로운 만남에는 천천히 다가가는 태도가 좋습니다. 마음에 드는 사람이 있다면 부담 없는 질문으로 시작해보세요. 좋은 점은 작은 농담이 분위기를 풀어준다는 것이고, 조심할 점은 너무 빠르게 사적인 영역으로 들어가는 것입니다.",
      "서운한 일이 있었다면 공격적인 말보다 구체적인 마음을 전하는 편이 좋습니다. 오늘은 감정의 온도가 쉽게 올라갈 수 있으니 바로 반응하기보다 한 번 쉬었다 말하세요. 부드러운 표현이 오해를 풀어줍니다."
    ],
    good: [
      "짧은 안부, 칭찬, 가벼운 약속 잡기에 좋은 흐름입니다.",
      "오래된 관계에서 편안함과 신뢰가 다시 살아날 수 있습니다.",
      "새로운 인연에게 자연스럽게 호감을 전하기 좋습니다.",
      "서로의 입장을 이해하면서 관계가 한 단계 편안해질 수 있습니다."
    ],
    caution: [
      "답장이 늦다고 마음을 앞서 접지 마세요.",
      "서운함을 돌려 말하면 오히려 오해가 커질 수 있습니다.",
      "첫 만남에서 너무 많은 기대를 얹지 않는 편이 좋습니다.",
      "감정이 올라온 상태에서 긴 메시지를 보내는 것은 피하세요."
    ],
    action: [
      "오늘은 먼저 다정한 한 문장을 보내보세요.",
      "고마웠던 일을 하나 떠올려 직접 표현해보세요.",
      "대화는 짧고 가볍게 시작해 천천히 이어가세요.",
      "말하기 전 숨을 고르고 핵심 감정만 부드럽게 전하세요."
    ]
  },
  {
    id: "money",
    label: "금전운",
    icon: "💰",
    summaries: [
      "소비를 정리하면 돈의 흐름이 안정돼요.",
      "작은 절약이 예상보다 큰 만족으로 돌아옵니다.",
      "충동구매보다 필요한 투자에 운이 따릅니다.",
      "돈과 관련된 약속은 기록해두면 좋습니다."
    ],
    details: [
      "오늘은 큰 결정보다 지출 내역을 점검하기 좋은 날입니다. 오전에는 소비 욕구가 올라올 수 있지만, 오후에는 현실적인 판단이 살아납니다. 자동결제, 구독, 장바구니를 정리하면 새는 돈을 막을 수 있어요.",
      "할인이나 제안이 좋아 보여도 바로 결제하지 말고 한 번 더 비교하세요. 지금 당장 사야 할 것처럼 보여도 하루만 미뤄보면 더 나은 선택지가 보일 수 있습니다. 기다림이 더 좋은 조건을 데려올 수 있습니다.",
      "수입을 늘리는 아이디어가 떠오를 수 있습니다. 다만 무리한 투자보다 작게 테스트하는 방식이 오늘의 운에 맞습니다. 특히 처음 듣는 제안, 수익을 과하게 약속하는 말은 한 번 더 확인하세요.",
      "돈을 빌리거나 빌려주는 일은 신중하게 접근하세요. 금액과 날짜를 분명히 적어두면 불필요한 오해를 줄일 수 있습니다. 좋은 점은 작은 정리만으로도 마음이 가벼워진다는 것입니다."
    ],
    good: [
      "고정비를 줄이거나 필요 없는 구독을 정리하기 좋습니다.",
      "비교 검색, 가격 확인, 장바구니 정리에 운이 따릅니다.",
      "작은 부업 아이디어나 수입 개선 힌트가 보일 수 있습니다.",
      "계획적인 지출은 만족도가 높고 후회가 적습니다."
    ],
    caution: [
      "기분 전환용 소비가 예상보다 커질 수 있습니다.",
      "오늘만 특가라는 말에 급하게 움직이지 마세요.",
      "확실하지 않은 투자나 고수익 제안은 조심하세요.",
      "돈 관계의 약속을 말로만 남기는 것은 피하세요."
    ],
    action: [
      "결제 전 10분만 멈추고 정말 필요한지 확인하세요.",
      "자주 쓰는 카드 내역과 자동결제를 한 번 훑어보세요.",
      "새 아이디어는 큰돈보다 작은 실험으로 시작하세요.",
      "금액, 날짜, 조건은 메모로 남겨두세요."
    ]
  },
  {
    id: "work",
    label: "직장운",
    icon: "💼",
    summaries: [
      "정리된 말과 빠른 실행이 좋은 평가를 불러요.",
      "미뤄둔 업무를 끝내기 좋은 흐름입니다.",
      "협업에서 당신의 꼼꼼함이 빛납니다.",
      "오늘은 속도보다 완성도가 중요합니다."
    ],
    details: [
      "회의나 메시지에서는 핵심을 짧게 정리해보세요. 오전에는 할 일이 흩어져 보일 수 있지만, 목록으로 적으면 우선순위가 선명해집니다. 해야 할 일, 마감, 담당자를 분명히 하면 주변의 신뢰가 올라갑니다.",
      "오래 끌던 일을 하나만 끝내도 하루의 분위기가 달라집니다. 작은 완료감이 다음 업무까지 가볍게 밀어줍니다. 다만 완벽하게 끝내려다 시작을 미루는 흐름은 조심하세요.",
      "동료의 요청을 모두 떠안기보다 우선순위를 나누는 것이 좋습니다. 친절하되 경계를 세우면 성과가 더 좋아집니다. 좋은 점은 협업에서 당신의 꼼꼼함이 돋보인다는 것입니다.",
      "새로운 제안이 들어오면 당장 답하기보다 자료를 확인하세요. 숫자와 근거를 챙긴 답변이 더 좋은 인상을 남깁니다. 오후에는 집중력이 올라가니 중요한 검토 업무를 배치하기 좋습니다."
    ],
    good: [
      "정리, 보고, 마감 업무에서 좋은 평가를 받을 수 있습니다.",
      "미뤄둔 일을 끝내며 자신감이 올라갑니다.",
      "협업에서 신뢰를 쌓기 좋은 하루입니다.",
      "자료 확인과 계획 수정에 강한 흐름입니다."
    ],
    caution: [
      "여러 일을 동시에 잡으면 집중력이 흩어질 수 있습니다.",
      "완벽주의 때문에 시작이 늦어지는 것을 조심하세요.",
      "부탁을 모두 받아주면 본래 업무가 밀릴 수 있습니다.",
      "확인하지 않은 정보로 답을 서두르지 마세요."
    ],
    action: [
      "오늘 할 일 3개만 먼저 정하고 순서대로 처리하세요.",
      "작은 업무 하나를 끝내고 다음 일로 넘어가세요.",
      "도움은 주되 가능한 시간과 범위를 분명히 말하세요.",
      "중요한 답변은 숫자, 일정, 근거를 확인한 뒤 보내세요."
    ]
  }
];

export const todayFortune = {
  dateLabel: "오늘 아침",
  headline: "천천히 시작해도 좋은 흐름은 당신 편이에요.",
  advice:
    "중요한 결정은 오전보다 오후에 정리하세요. 작은 약속을 지키는 태도가 오늘의 운을 단단하게 만듭니다.",
  scores: [
    { label: "연애운", score: 82, icon: "💕" },
    { label: "금전운", score: 74, icon: "💰" },
    { label: "직장운", score: 88, icon: "💼" },
    { label: "행운지수", score: 91, icon: "✨" }
  ]
};

export const zodiacFortunes: ZodiacFortune[] = [
  {
    id: "rat",
    animal: "쥐띠",
    emoji: "🐭",
    years: "1960 · 1972 · 1984 · 1996 · 2008",
    summary: "새로운 연락에서 기회가 생겨요.",
    detail:
      "낯선 제안이라도 바로 거절하지 말고 조건을 차분히 살펴보세요. 사람을 통해 들어오는 정보가 오늘의 방향을 열어줍니다.",
    lucky: { color: "라일락", colorHex: "#c8a8ff", number: 3, direction: "동쪽", item: "메모장" }
  },
  {
    id: "ox",
    animal: "소띠",
    emoji: "🐮",
    years: "1961 · 1973 · 1985 · 1997 · 2009",
    summary: "묵묵히 쌓은 노력이 인정받습니다.",
    detail:
      "크게 드러내지 않아도 주변은 이미 당신의 꾸준함을 보고 있어요. 서두르지 말고 가장 확실한 일부터 마무리하세요.",
    lucky: { color: "크림 옐로", colorHex: "#ffe89a", number: 8, direction: "남서쪽", item: "따뜻한 차" }
  },
  {
    id: "tiger",
    animal: "호랑이띠",
    emoji: "🐯",
    years: "1962 · 1974 · 1986 · 1998 · 2010",
    summary: "결단력이 빛나는 하루예요.",
    detail:
      "미뤄둔 선택이 있다면 오늘은 한 걸음 내딛기 좋습니다. 단, 감정적인 말보다 짧고 분명한 표현이 더 큰 힘을 냅니다.",
    lucky: { color: "피치", colorHex: "#ffb6a3", number: 1, direction: "북쪽", item: "운동화" }
  },
  {
    id: "rabbit",
    animal: "토끼띠",
    emoji: "🐰",
    years: "1963 · 1975 · 1987 · 1999 · 2011",
    summary: "부드러운 태도가 복을 불러요.",
    detail:
      "양보가 손해처럼 느껴져도 오늘은 관계를 편안하게 만드는 쪽이 이깁니다. 대화에서는 상대의 말을 끝까지 들어주세요.",
    lucky: { color: "민트", colorHex: "#a7f3d0", number: 6, direction: "남쪽", item: "손수건" }
  },
  {
    id: "dragon",
    animal: "용띠",
    emoji: "🐲",
    years: "1964 · 1976 · 1988 · 2000 · 2012",
    summary: "큰 그림을 보기 좋은 날입니다.",
    detail:
      "당장의 성과보다 다음 달의 흐름을 생각해보세요. 계획표를 다시 정리하면 막혀 있던 일정에 숨통이 트입니다.",
    lucky: { color: "스카이 블루", colorHex: "#9bd7ff", number: 9, direction: "북동쪽", item: "캘린더" }
  },
  {
    id: "snake",
    animal: "뱀띠",
    emoji: "🐍",
    years: "1965 · 1977 · 1989 · 2001 · 2013",
    summary: "직감이 의외로 정확합니다.",
    detail:
      "숫자와 사실을 확인하되, 마지막 판단에는 마음이 끌리는 방향도 반영해보세요. 혼자 있는 시간이 좋은 답을 줍니다.",
    lucky: { color: "로즈", colorHex: "#f9a8d4", number: 4, direction: "서쪽", item: "향수" }
  },
  {
    id: "horse",
    animal: "말띠",
    emoji: "🐴",
    years: "1966 · 1978 · 1990 · 2002 · 2014",
    summary: "움직일수록 운이 살아납니다.",
    detail:
      "답답했던 기분은 장소를 바꾸며 풀릴 수 있어요. 짧은 산책, 미팅, 외출이 새로운 아이디어를 데려옵니다.",
    lucky: { color: "코랄", colorHex: "#ff9f9f", number: 7, direction: "동남쪽", item: "텀블러" }
  },
  {
    id: "goat",
    animal: "양띠",
    emoji: "🐑",
    years: "1967 · 1979 · 1991 · 2003 · 2015",
    summary: "정리와 회복에 좋은 하루예요.",
    detail:
      "많은 일을 벌이기보다 흐트러진 것을 정돈해보세요. 마음의 여유가 돌아오면 다음 행동도 자연스럽게 보입니다.",
    lucky: { color: "아이보리", colorHex: "#fff1d6", number: 2, direction: "북서쪽", item: "수납함" }
  },
  {
    id: "monkey",
    animal: "원숭이띠",
    emoji: "🐵",
    years: "1968 · 1980 · 1992 · 2004 · 2016",
    summary: "재치 있는 말 한마디가 분위기를 바꿔요.",
    detail:
      "회의나 모임에서 당신의 아이디어가 돋보입니다. 다만 장난이 과해지지 않도록 선을 지키면 더 좋은 인상을 남겨요.",
    lucky: { color: "라벤더", colorHex: "#d8b4fe", number: 5, direction: "남동쪽", item: "이어폰" }
  },
  {
    id: "rooster",
    animal: "닭띠",
    emoji: "🐔",
    years: "1969 · 1981 · 1993 · 2005 · 2017",
    summary: "디테일이 성과를 만듭니다.",
    detail:
      "작은 숫자, 문장, 약속 시간을 다시 확인하세요. 꼼꼼함 덕분에 예상치 못한 실수를 멋지게 피할 수 있습니다.",
    lucky: { color: "실버", colorHex: "#d8dee9", number: 10, direction: "서남쪽", item: "볼펜" }
  },
  {
    id: "dog",
    animal: "개띠",
    emoji: "🐶",
    years: "1958 · 1970 · 1982 · 1994 · 2006",
    summary: "신뢰가 가장 큰 자산이 됩니다.",
    detail:
      "약속한 일을 먼저 챙기면 주변의 평가가 올라갑니다. 가까운 사람에게 짧은 안부를 전하는 것도 좋은 운을 부릅니다.",
    lucky: { color: "세이지", colorHex: "#bdd7c5", number: 12, direction: "동북쪽", item: "키링" }
  },
  {
    id: "pig",
    animal: "돼지띠",
    emoji: "🐷",
    years: "1959 · 1971 · 1983 · 1995 · 2007",
    summary: "즐거운 소비와 과소비 사이를 조심하세요.",
    detail:
      "기분 전환은 필요하지만 큰 결제는 한 번 더 생각하는 편이 좋습니다. 소소한 선물이 관계운을 따뜻하게 올려줍니다.",
    lucky: { color: "베이비 핑크", colorHex: "#ffc7dd", number: 11, direction: "중앙", item: "작은 꽃" }
  }
];

const dailyHeadlines = [
  "천천히 시작해도 좋은 흐름은 당신 편이에요.",
  "작은 선택 하나가 오늘의 분위기를 산뜻하게 바꿉니다.",
  "낯선 기회가 다가오니 열린 마음으로 살펴보세요.",
  "기다리던 소식이 예상보다 부드럽게 풀릴 수 있어요.",
  "마음의 속도를 낮추면 더 좋은 답이 보입니다.",
  "오늘은 말보다 행동이 운을 끌어올리는 날이에요.",
  "가까운 사람과의 대화에서 행운의 힌트가 나옵니다.",
  "정리해둔 계획이 드디어 힘을 발휘하기 시작합니다."
];

const dailyAdvice = [
  "중요한 결정은 오전보다 오후에 정리하세요. 작은 약속을 지키는 태도가 오늘의 운을 단단하게 만듭니다.",
  "급하게 결론을 내리기보다 한 번 더 확인하세요. 여유 있는 태도가 실수를 줄이고 좋은 인상을 남깁니다.",
  "오늘은 혼자 끌어안기보다 도움을 요청하는 편이 좋습니다. 생각보다 가까운 곳에 해결 실마리가 있습니다.",
  "기분에 따라 소비가 커질 수 있으니 결제 전 한 번 멈춰보세요. 필요한 것과 원하는 것을 나누면 운이 안정됩니다.",
  "새로운 일을 벌이기보다 이미 시작한 일을 마무리하기 좋습니다. 끝낸 일이 다음 기회를 데려옵니다.",
  "사소한 칭찬과 감사 표현이 관계운을 올립니다. 짧은 메시지 하나가 하루의 흐름을 따뜻하게 만듭니다.",
  "오늘은 몸을 조금 움직이면 막힌 생각이 풀립니다. 산책이나 자리 정리가 의외의 전환점이 됩니다.",
  "눈에 띄는 성과보다 기본을 지키는 태도가 중요합니다. 차분하게 쌓은 신뢰가 오래 갑니다."
];

const summaryPool = [
  "새로운 연락에서 기회가 생겨요.",
  "묵묵히 쌓은 노력이 인정받습니다.",
  "결단력이 빛나는 하루예요.",
  "부드러운 태도가 복을 불러요.",
  "큰 그림을 보기 좋은 날입니다.",
  "직감이 의외로 정확합니다.",
  "움직일수록 운이 살아납니다.",
  "정리와 회복에 좋은 하루예요.",
  "재치 있는 말 한마디가 분위기를 바꿔요.",
  "디테일이 성과를 만듭니다.",
  "신뢰가 가장 큰 자산이 됩니다.",
  "즐거운 소비와 과소비 사이를 조심하세요."
];

const detailPool = [
  "낯선 제안이라도 바로 거절하지 말고 조건을 차분히 살펴보세요. 사람을 통해 들어오는 정보가 오늘의 방향을 열어줍니다.",
  "크게 드러내지 않아도 주변은 이미 당신의 꾸준함을 보고 있어요. 서두르지 말고 가장 확실한 일부터 마무리하세요.",
  "미뤄둔 선택이 있다면 오늘은 한 걸음 내딛기 좋습니다. 단, 감정적인 말보다 짧고 분명한 표현이 더 큰 힘을 냅니다.",
  "양보가 손해처럼 느껴져도 오늘은 관계를 편안하게 만드는 쪽이 이깁니다. 대화에서는 상대의 말을 끝까지 들어주세요.",
  "당장의 성과보다 다음 달의 흐름을 생각해보세요. 계획표를 다시 정리하면 막혀 있던 일정에 숨통이 트입니다.",
  "숫자와 사실을 확인하되, 마지막 판단에는 마음이 끌리는 방향도 반영해보세요. 혼자 있는 시간이 좋은 답을 줍니다.",
  "답답했던 기분은 장소를 바꾸며 풀릴 수 있어요. 짧은 산책, 미팅, 외출이 새로운 아이디어를 데려옵니다.",
  "많은 일을 벌이기보다 흐트러진 것을 정돈해보세요. 마음의 여유가 돌아오면 다음 행동도 자연스럽게 보입니다."
];

const luckyColors = [
  { color: "라일락", colorHex: "#c8a8ff" },
  { color: "크림 옐로", colorHex: "#ffe89a" },
  { color: "피치", colorHex: "#ffb6a3" },
  { color: "민트", colorHex: "#a7f3d0" },
  { color: "스카이 블루", colorHex: "#9bd7ff" },
  { color: "로즈", colorHex: "#f9a8d4" },
  { color: "라벤더", colorHex: "#d8b4fe" },
  { color: "베이비 핑크", colorHex: "#ffc7dd" }
];

const luckyDirections = ["동쪽", "서쪽", "남쪽", "북쪽", "동남쪽", "북동쪽", "남서쪽", "중앙"];
const luckyItems = ["메모장", "따뜻한 차", "운동화", "손수건", "캘린더", "향수", "텀블러", "작은 꽃"];

function getKoreanDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value ?? "2026";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";

  return {
    year,
    month,
    day,
    dateKey: `${year}-${month}-${day}`,
    label: `${Number(month)}월 ${Number(day)}일 오늘`
  };
}

function hashText(text: string) {
  let hash = 0;

  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function pickBySeed<T>(items: T[], seed: number, offset = 0) {
  return items[(seed + offset) % items.length];
}

function scoreBySeed(seed: number, offset: number) {
  return 68 + ((seed >> offset) % 29);
}

export function getDailyFortune(date = new Date()) {
  const { dateKey, label } = getKoreanDateParts(date);
  const seed = hashText(dateKey);
  const scores = todayFortune.scores.map((score, index) => ({
    ...score,
    score: scoreBySeed(seed + index * 17, index + 1)
  }));

  const zodiacs = zodiacFortunes.map((zodiac, index) => {
    const zodiacSeed = hashText(`${dateKey}-${zodiac.id}`);
    const luckyColor = pickBySeed(luckyColors, zodiacSeed, index);

    return {
      ...zodiac,
      summary: pickBySeed(summaryPool, zodiacSeed, index),
      detail: pickBySeed(detailPool, zodiacSeed, index + 3),
      lucky: {
        color: luckyColor.color,
        colorHex: luckyColor.colorHex,
        number: (zodiacSeed % 12) + 1,
        direction: pickBySeed(luckyDirections, zodiacSeed, index + 5),
        item: pickBySeed(luckyItems, zodiacSeed, index + 7)
      }
    };
  });
  const topics = fortuneTopics.map((topic, index) => {
    const topicSeed = hashText(`${dateKey}-${topic.id}`);

    return {
      id: topic.id,
      label: topic.label,
      icon: topic.icon,
      summary: pickBySeed(topic.summaries, topicSeed, index),
      detail: pickBySeed(topic.details, topicSeed, index + 2),
      good: pickBySeed(topic.good, topicSeed, index + 4),
      caution: pickBySeed(topic.caution, topicSeed, index + 6),
      action: pickBySeed(topic.action, topicSeed, index + 8)
    };
  });

  return {
    today: {
      ...todayFortune,
      dateLabel: label,
      headline: pickBySeed(dailyHeadlines, seed),
      advice: pickBySeed(dailyAdvice, seed, 3),
      scores,
      topics,
      dateKey
    },
    zodiacs
  };
}
