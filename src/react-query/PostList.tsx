import { Fragment, useState } from "react";
import usePosts from "./hooks/usePosts";
const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.pages.map((page, index) => {
          return (
            <Fragment key={index}>
              {page?.map((post) => (
                <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
              ))}
            </Fragment>
          );
        })}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        className="btn btn-primary"
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
