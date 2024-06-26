import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
      vitae veniam ut iure. Optio, atque fugiat inventore ipsam aliquam maiores.
      Dignissimos, nam consequatur! Illum, odio aspernatur quis eum voluptas
      provident.
    </Descricao>
  </Card>
)

export default Product
