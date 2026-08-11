import { Link,Outlet,useParams } from "react-router-dom";
import { posts } from "../../data/posts";

export default function Index(){

  const { id } = useParams();

  const searchPost = posts.find(post => 
    post.id === Number(id)
  );

  // URLパラメータのIDが存在するか判定
  if(!searchPost){
    // 該当する記事が存在しない場合
    return (
      <div className="max-w-[800px] mx-auto pt-6 px-4 pb-12 flex flex-col gap-4">
        <h1>記事が見つかりませんでした。</h1>
        <Link to="/" className="text-blue-600 no-underline font-semibold" hover:underline>記事一覧へ戻る</Link>
      </div>
    );
  }

  // 記事が存在する場合
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
        <Link to="/" className="text-blue-600 no-underline font-semibold hover:underline">記事一覧へ戻る</Link>
      </div>
    </div>
  );
}