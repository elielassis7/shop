import { HomeContainer, Product } from '../styles/pages/home'

import shirt1 from '../assets/Shirt/Type6.png'
import shirt2 from '../assets/Shirt/Type7.png'
import shirt3 from '../assets/Shirt/Type8.png'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
