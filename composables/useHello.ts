export const useHello = async () => {
  const { data, error } = await useFetch("/api/hello");
  return data.value;
};
