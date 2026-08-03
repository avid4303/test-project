import { Fragment } from 'react'

import {posts} from "../../data/posts.js";

export default function PostsList(){
    return(
        <>
            <h1 className="mb-4 text-[1.4rem] font-bold text-gray-900">記事一覧</h1>
                {posts.map(post =>(
                    <Fragment key={post.id}>
                        <article className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b border-gray-200">
                            <img src={post.thumbnailUrl} className="w-full h-[120px] object-cover" />
                            
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <time className="text-[0.95rem] text-gray-600" dateTime={post.createdAt}>
                                          {new Date(post.createdAt).toLocaleDateString("ja-JP", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    <div className="flex flex-wrap gap-[6px]">
                                        {post.categories.map(categori => (
                                            <span className="px-2 py-1 rounded-full bg-gray-200 text-gray-700 text-[0.85rem]" key={categori}>
                                                {categori}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h2 className="m-0 text-[1.15rem] font-bold">{post.title}</h2>
                                <div className="m-0 text-gray-700 leading-[1.6] line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: post.content }}/>
                            </div>
                        </article>
                    </Fragment>
                ))}
        </>
    );
}
