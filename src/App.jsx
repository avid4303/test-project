import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import AppRouter from "./router/AppRouter";

export default function App(){
    return(
        <div className="">
            <Header />
            <AppRouter />
        </div>
    )
}    