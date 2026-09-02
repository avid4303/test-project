import { useState } from "react";
import { setNoticeApi } from "../../api/NoticeApi";

export default function Notice(){

  //フォーム入力値
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

  //バリデーションエラー
  const [errors, setErrors] = useState({
    name:"",
    email:"",
    message:""
  });

  //API通信の状態管理
  const [isSubmitting, setIsSubmitting] = useState(false);

  //入力値の更新
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({//formDataの最新の状態を取得
      ...prev,//現在のオブジェクトをコピー
      [name]: value,//入力フォームの値に上書き
    }));
  };

  //バリデーション
  const valiData = () => {
    const newErrors = {};

    //name
    if(!formData.name.trim()){
      newErrors.name = "お名前は必須です。";
    }else if(formData.name.length > 30){
      newErrors.name = "30文字以内で入力してください。";
    }

    //email
    if(!formData.email.trim()){
      newErrors.email = "メールアドレスは必須です。";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      newErrors.email = "メールアドレスアドレスの形式が正しくありません。";
    }

    //message
    if(!formData.message.trim()){
      newErrors.message = "本文は必須です。";
    }else if(formData.message.length > 500){
      newErrors.message = "本文は500文字以内で入力してください。";
    }

    //newErrorsをsetErrorにセット
    setErrors(newErrors);

    //errorsに要素が存在すればfalse、存在しなければtrueを返す
    return Object.keys(newErrors).length === 0;
  };

  //フォームのクリア
  const handleClear = () => {
    setFormData({
      name:"",
      email:"",
      message:""
    })
  };

  //送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = valiData();

    //バリデーションエラーの確認
    if(!isValid) return;

    //フォームの操作を不可
    setIsSubmitting(true);

    try{
      //送信用API呼び出し
      await setNoticeApi(formData);

      //API送信後の正常終了した場合にアラートを表示しフォームをクリア
      alert("送信しました");
      handleClear();

    }catch(error){
      //API送信に失敗した場合
      alert("送信に失敗しました");

    }finally{
      //API送信完了後にフォームの操作を可能にする
      setIsSubmitting(false);
    }
  };

  return(
    <div>
      <div className="max-w-200 mx-auto">
        <h1 className="text-xl font-bold mb-10">問い合わせフォーム</h1>

        <form onSubmit={handleSubmit}>
          <fieldset disabled={isSubmitting}>
            <div className="flex justify-between items-center mb-6">
              <label htmlFor="name" className="w-60">お名前</label>
              <div className="w-full">
                <input
                  id="name"
                  name="name" 
                  className="border border-gray-300 rounded-lg p-4 w-full" 
                  type="text" 
                  value={formData.name} 
                  onChange={handleChange}
                />

                {errors.name && (
                  <p className="text-red-500 mt-2">
                    {errors.name}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label htmlFor="email" className="w-60">メールアドレス</label>
              <div className="w-full">
                <input 
                  id="email" 
                  name="email" 
                  className="border border-gray-300 rounded-lg p-4 w-full" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange}
                />

                {errors.email && (
                  <p className="text-red-500 mt-2">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label htmlFor="message" className="w-60">本文</label>
              <div className="w-full">
                <textarea 
                  id="message" 
                  name="message" 
                  rows="8" 
                  className="w-full border border-gray-300 rounded-lg p-4" 
                  value={formData.message} 
                  onChange={handleChange}
                />
                
                {errors.message && (
                  <p className="text-red-500 mt-2">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <button 
                type="submit" 
                className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4"
              >
                送信
              </button>
              <button 
                type="button" 
                className="bg-gray-200 font-bold py-2 px-4 rounded-lg" 
                onClick={handleClear}
              >
                クリア
              </button>
            </div>
          </fieldset>
        </form>

      </div>
    </div>
  );
}



