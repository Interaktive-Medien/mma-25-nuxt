export const usePosts = async () => {
  const { data, error } = await useFetch("/api/posts");
  return data.value;
};
