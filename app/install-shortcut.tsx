"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallShortcut() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [message, setMessage] = useState("휴대폰 홈화면에서 매일 바로 열 수 있어요.");
  const [guide, setGuide] = useState<string[]>([
    "버튼을 눌러 설치 창을 열어보세요.",
    "설치 창이 안 뜨면 브라우저 메뉴에서 홈 화면 추가를 사용할 수 있어요."
  ]);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean };
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      navigatorWithStandalone.standalone === true;

    setIsInstalled(isStandalone);

    if (isStandalone) {
      setMessage("이미 홈화면 앱으로 실행 중이에요.");
      setGuide(["설치가 완료된 상태입니다.", "다음부터는 홈화면 아이콘으로 바로 열면 됩니다."]);
    } else if (isIos) {
      setMessage("iPhone은 버튼으로 설치창을 바로 띄울 수 없어요.");
      setGuide(["Safari 하단 공유 버튼을 누르세요.", "'홈 화면에 추가'를 선택하세요.", "오른쪽 위 '추가'를 누르면 완료됩니다."]);
    } else if (isAndroid) {
      setMessage("Android는 브라우저 상태에 따라 설치창이 뜨거나 메뉴 설치가 필요해요.");
      setGuide(["버튼을 먼저 눌러보세요.", "창이 안 뜨면 Chrome 오른쪽 위 점 3개를 누르세요.", "'앱 설치' 또는 '홈 화면에 추가'를 선택하세요."]);
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
      setMessage("버튼을 누르면 바로가기 설치 창이 열립니다.");
      setGuide(["아래 버튼을 누르세요.", "설치 확인 창에서 설치를 선택하면 완료됩니다."]);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (isInstalled) {
      setMessage("이미 홈화면에 추가되어 있어요.");
      return;
    }

    if (installPrompt) {
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      setInstallPrompt(null);
      setMessage(
        choice.outcome === "accepted"
          ? "홈화면에 추가되었습니다."
          : "설치를 취소했어요. 필요할 때 다시 눌러주세요."
      );
      return;
    }

    setMessage("이 브라우저에서는 설치창을 직접 띄울 수 없어요. 아래 순서대로 추가해주세요.");
  };

  return (
    <section id="install" className="mt-6 rounded-[30px] bg-white p-5 shadow-soft">
      <p className="text-sm font-black text-lavender-500">바로가기 생성</p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-[#2d2541]">
        내 휴대폰에 오늘의 운세 추가하기
      </h2>
      <p className="mt-3 text-sm font-bold leading-6 text-[#6d617f]">{message}</p>
      <button
        type="button"
        onClick={handleInstall}
        className="mt-4 w-full rounded-2xl bg-lavender-500 px-5 py-4 text-base font-black text-white shadow-card transition hover:bg-lavender-600"
      >
        📱 바로가기 만들기
      </button>
      <div className="mt-4 rounded-[22px] bg-lavender-50 p-4">
        <p className="text-xs font-black text-lavender-500">모바일에서 안 눌릴 때</p>
        <ol className="mt-2 space-y-2 text-sm font-bold leading-6 text-[#6d617f]">
          {guide.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
