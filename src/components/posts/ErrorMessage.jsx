import React from "react";
import { Link } from "react-router-dom";

export default function LoadingMessage(){
  return (
    <div className="max-w-[800px] mx-auto pt-6 px-4 pb-12 flex flex-col gap-4">
      <h1>記事が見つかりませんでした。</h1>
      <Link to="/" className="text-blue-600 no-underline font-semibold hover:underline">記事一覧へ戻る</Link>
    </div>
  );
}
