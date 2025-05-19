interface NewPost {
  title: string;
  content: string;
}

export const useCreatePost = async (post: NewPost) => {
  // console.log("post in composable", post);

  const { data, error } = await useFetch("/api/createPost", {
    method: "POST",
    body: post,
  });

  // console.log("data in composable", data);

  if (error.value) {
    console.error("Failed to create post:", error.value);
    return null;
  }

  return data.value;
};
