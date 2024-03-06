import { ImageContainer } from "@/styles/pages/product.styles";
import { SuccessContainer } from "@/styles/pages/success.styles";
import Link from "next/link";

export default function Product() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho!
      </p>

      <Link>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
