import { Outlet } from "react-router-dom";

import PostsList from './PostsList';
import Header from "../header/Header";

export default function Posts(){

  return(
    <main>
      <div className="max-w-[960px] mx-auto px-4 py-6">
        <Outlet />
      </div>
    </main>
  );
}

