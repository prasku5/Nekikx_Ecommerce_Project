import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // const billboard = await getBillboard("d90756f2-17e8-4adc-abcd-0db042f366f3");
  const image = require("./../images/click.png");

  return (
    <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <img src={image}/>
          <ProductList title="Featured Products" items={products} />
        </div>
      {/* </div> */}
    </Container>
  );
}
 
export default HomePage;