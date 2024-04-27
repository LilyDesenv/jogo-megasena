import { Container } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={logo} alt="logo da mega-sena" />
        </div>
        <h1>Gerador de jogo para mega-sena</h1>
      </div>
    </Container>
  )
}

export default Header
