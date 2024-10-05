export default async function fetchData(endpoint?: string) {
  const url = process.env.API_URL! + (endpoint || "");
  const response = await fetch(url, { cache: "no-store" });
  return await response.json();
}
