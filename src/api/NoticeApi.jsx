import { BASE_URL } from "../constants";

export const setNoticeApi = async (formData) => {
  const res = await fetch(`${BASE_URL}/contacts`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  //404,500の判定 
  if(!res.ok){
    throw new Error(res.status);
  }

  return res.json();
};