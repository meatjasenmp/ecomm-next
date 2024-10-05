export default async function fetchData(endpoint?: string) {
  const url = process.env.API_URL! + (endpoint || "");
  const response = await fetch(url);
  return await response.json();
}
