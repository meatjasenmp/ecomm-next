import fetchData from "@/app/api/requests";
export default async function Page() {
  const products = await fetchData();
  console.log("products", products);
  return <></>;
}
