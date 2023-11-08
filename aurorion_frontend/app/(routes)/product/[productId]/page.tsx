import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import ProductReview from "@/components/ProductReview/product-review";
import axios from "axios";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  });

  if (!product) {
    return null;
  }

  
  const response = await axios.get(
    `http://localhost:8080/reviews/product/${params.productId}`
  );

  const reviewsData = response.data;
  const totalRatings = reviewsData.reduce((acc, review) => acc + review.stars, 0);
  const averageRating = totalRatings / 5 * reviewsData.length;

  
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} averageRating={averageRating} />
            </div>
            <hr className="my-10" />
          </div>


        <ProductReview
          productId= {params.productId}
        />
          <hr className="my-10" />
          <ProductList title="Related items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
