import { api } from "../../store/api";
import { Post } from "./types";

const postsService = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Array<Post>, string>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsService;
