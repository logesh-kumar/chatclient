import React from "react";
import { useGetPostsQuery } from "./postService";

export const Post: React.FC = ({}) => {
  const { isError, isLoading, data } = useGetPostsQuery("posts", {
    refetchOnFocus: true,
  });

  return <div>{JSON.stringify(data)}</div>;
};
