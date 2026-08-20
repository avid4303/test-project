import { Link,Outlet,useParams } from "react-router-dom";
import { useEffect,useState } from "react";

import { getPostDetailApi } from "../../api/PostsDetailApi";

import ErrorMessage from "../../components/posts/ErrorMessage";
import LoadingMessage from '../../components/posts/LoadingMessage';

export default function Index(){

  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //記事IDが変更されたら記事詳細を再取得
  useEffect(() => {
    const getPostDetail = async() => {
      setLoading(true);
      setError(null);

      try{
        // 記事IDを指定して記事詳細を取得
        const data = await getPostDetailApi(id);
        setPosts(data);
      }catch(error){
        // API通信エラーをstateに保存
        setError(error);
      }finally{
        // API通信終了後にローディングを解除
        setLoading(false);
      }
    };

    getPostDetail();
  },[id]);


  /* 
  レンダリング処理
  */


  // 該当する記事が存在しない場合
  if(error) return <ErrorMessage />

  //記事詳細読み込み時の画面
  if(loading) return <LoadingMessage />

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
    
    <div className={`max-w-[800px] mx-auto pt-6 px-4 pb-12 flex flex-col gap-4 key=${id}`}>
      {/* ➀ */}
      <img src={posts.post.thumbnailUrl} className="w-full object-cover" />

      <div className="flex flex-wrap items-center gap-2">
        {/* ➁ */}
        <time className="text-[0.95rem] text-gray-600" dateTime={posts.post.createdAt}>
          {new Date(posts.post.createdAt).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {/* ➂ */}
        <div className="flex flex-wrap gap-[6px]">
          {posts.post.categories.map(categori => (
            <span className="py-1 px-2 rounded-full bg-gray-200 text-gray-700 text-[.8rem]" key={categori}>
              {categori}
            </span>
          ))}
        </div>
      </div>

      {/* ➃ */}
      <h1 className="m-0 text-[1.8rem] font-extrabold text-gray-900">{posts.post.title}</h1>

      {/* ➄ */}
      <div className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: posts.post.content.trim(), }}/>

      {/* ➅ */}
      <div className="mt-4">
        <Link to="/" className="text-blue-600 no-underline font-semibold hover:underline">記事一覧へ戻る</Link>
      </div>
    </div>
  );
}