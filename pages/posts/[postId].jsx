import React from "react";
import { useRouter } from "next/router";

const PostDetail = () => {
  const router = useRouter();
  console.log(router);
  const {postId} = router.query;
  return <div>PostDetail - {postId}</div>;
};

export default PostDetail;
