import { Routes, Route } from 'react-router-dom';

import Posts from '../components/posts/Posts';
import PostsList from '../components/posts/PostsList';
import PostDetailPage from '../pages/PostDetailPage';

export default function AppRouter(){
  return(
    <Routes>
      <Route path="/" element={<Posts />}>
        <Route index element={<PostsList />}/>
      </Route>
      <Route path="/PostDetailPage/:id" element={<PostDetailPage />} />
    </Routes>
  );
}