import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product.styles"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  // const { isFallback } = useRouter()

  function handleBuyProduct() {
    console.log(product.defaultPriceId);
  }



  // if (isFallback) {
  //   return <p>Loading...</p>
  // }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Alternative Options: When generating too much static pages
  // Buscar os produtos mais vendidos / mais acessados

  return {
    // Load the most accessed pages or nothing
    paths: [
      { params: { id: 'prodIdSample' } }
    ],
    // This option can be enabled as a way to generate static pages not 
    // generated previously, next will try to solve the path
    // fallback: true,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      description: product.description,
      defaultPriceId: price.id
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
