import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import postService, { Post } from "../services/postService";
interface PostQuery {
  pageSize: number;
}
const usePosts = (query: PostQuery) => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      }
    );
    return res.data;
  };
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 60 * 1000,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      console.log("lastPage---", lastPage);
      console.log("lastPageParam---", lastPageParam);
      return lastPageParam + 1;
    },
  });
};
export default usePosts;
