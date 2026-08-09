import { Link,Outlet,useSearchParams } from "react-router-dom";
import { posts } from "../../data/posts";

export default function Index(){

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const searchPost = posts.find(post => {
    return post.id === Number(id)
  });

  return(

    /*
     記事詳細表示 
     ➀：記事画像
     ➁：投稿日
     ➂：カテゴリー
     ➃：タイトル
     ➄：本文
     ➅：記事一覧へ遷移
     */
    
    <div className="max-w-[800px] mx-auto pt-6 px-4 pb-12 flex flex-col gap-4">
      {/* ➀ */}
      <img src={searchPost.thumbnailUrl} className="w-full object-cover" />

      <div className="flex flex-wrap items-center gap-2">
        {/* ➁ */}
        <time className="text-[0.95rem] text-gray-600" dateTime={searchPost.createdAt}>
              {new Date(searchPost.createdAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </time>
        {/* ➂ */}
        <div className="flex flex-wrap gap-[6px]">
            {searchPost.categories.map(categori => (
                <span className="py-1 px-2 rounded-full bg-gray-200 text-gray-700 text-[.8rem]" key={categori}>
                    {categori}
                </span>
            ))}
        </div>
      </div>

      {/* ➃ */}
      <h1 className="m-0 text-[1.8rem] font-extrabold text-gray-900">{searchPost.title}</h1>

      {/* ➄ */}
      <div className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: searchPost.content }}/>

      {/* ➅ */}
      <div className="mt-4">
        <a href="/" className="text-blue-600 no-underline font-semibold">記事一覧へ戻る</a>
      </div>
    </div>
  );
}