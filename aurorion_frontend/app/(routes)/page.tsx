import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import clickImage from "./../images/click.png";
import Image from "next/image";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });


  return (
    <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <Image src={clickImage} alt="" />
          <ProductList title="Featured Products" items={products} />
        </div>
      {/* </div> */}
    </Container>
  );
}
 
export default HomePage;