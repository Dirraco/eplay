import { HeaderBar, Links, LinkItem } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
    <HeaderBar>
        <img src={logo} alt="EPLAY" />
        <nav>
            <Links>
                <LinkItem>
                    <a href="#">Categoria</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Novidades</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Promoçôes</a>
                </LinkItem>
            </Links>
        </nav>
    </HeaderBar>
)

export default Header
