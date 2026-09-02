import { Routes, Route } from 'react-router-dom';

import Posts from '../components/posts/Posts';
import PostsList from '../components/posts/PostsList';
import PostDetailPage from '../pages/PostDetailPage';
import Notice from '../pages/notice/Index';

export default function AppRouter(){
  return(
    <Routes>
      <Route path="/" element={<Posts />}>
        <Route index element={<PostsList />}/>
        <Route path="PostDetailPage/:id" element={<PostDetailPage />} />
        <Route path="Notice" element={<Notice />} />
      </Route>
    </Routes>
  );
}