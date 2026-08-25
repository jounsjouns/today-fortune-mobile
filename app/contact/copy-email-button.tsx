"use client";

import { useState } from "react";

const EMAIL = "jounsjouns@naver.com";

export default function CopyEmailButton() {
  const [message, setMessage] = useState("");

  const handleCopy = async () => {
    try {
      await window.navigator.clipboard.writeText(EMAIL);
      setMessage("이메일이 복사되었습니다.");
    } catch {
      setMessage(EMAIL);
    }
  };

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={handleCopy}
        className="w-full rounded-2xl bg-lavender-50 px-5 py-4 text-center font-black text-lavender-600 shadow-card transition hover:bg-lavender-100"
      >
        이메일 복사하기
      </button>
      {message ? (
        <p className="mt-3 rounded-[18px] bg-[#fff7fb] p-3 text-center text-sm font-bold text-[#665a78]">
          {message}
        </p>
      ) : null}
    </div>
  );
}
