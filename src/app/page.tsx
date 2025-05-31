import Container from "@/app/parts/Container";
import Sidebar from "@/app/parts/Sidebar";
import ProductsGrid from "@/app/components/ProductsGrid";

export default async function Page() {
  return (
    <Container>
      <Sidebar>Sidebar</Sidebar>
      <ProductsGrid />
    </Container>
  );
}
