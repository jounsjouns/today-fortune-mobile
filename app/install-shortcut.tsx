"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallShortcut() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [message, setMessage] = useState("휴대폰 홈화면에서 매일 바로 열 수 있어요.");

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
      setMessage("버튼을 누르면 바로가기 설치 창이 열립니다.");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
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

    setMessage("설치 창이 안 뜨면 브라우저 메뉴에서 '홈 화면에 추가'를 눌러주세요.");
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
    </section>
  );
}
