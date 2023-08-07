import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data.articles);

export default function useThirdArticle() {
    ''
  const { data, error, isLoading } = useSWR(
    "https://newsapi.org/v2/top-headlines?page=1&q=trump&apiKey=ec33c6ed3f5044b79a1c28d5c3cbbeec",
    fetcher,
  );
  if (error) alert("failed to get data");

  return { data, error, isLoading };
}
