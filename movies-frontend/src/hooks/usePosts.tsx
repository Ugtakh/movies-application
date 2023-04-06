import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePosts = (id: string) => {
  const { data, error } = useSWR("api/hello", fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePosts;
