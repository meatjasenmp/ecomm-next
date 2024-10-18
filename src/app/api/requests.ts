export default async function fetchData(endpoint?: string, method?: string) {
  const url = process.env.API_URL! + (endpoint || "");
  const response = await fetch(url, {
    cache: "no-store",
    method: method || "GET",
  });
  return await response.json();
}
