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

  return {
    today: {
      ...todayFortune,
      dateLabel: label,
      headline: pickBySeed(dailyHeadlines, seed),
      advice: pickBySeed(dailyAdvice, seed, 3),
      scores,
      dateKey
    },
    zodiacs
  };
}
