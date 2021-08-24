import { Container } from "./newUser.style";
import { Content } from "./newUser.style";
import logoImg from '../assets/logo.png';

export function NewUser() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="EloGroup" />
        <form>
          <label htmlFor="user">Usuário</label>
          <input type="text" name="user"/>

          <label htmlFor ="password">Password</label>
          <input type="text" name="password" placeholder="********"/>
          
          <label htmlFor ="password">Confirmação Password</label>
          <input type="text" name="password" placeholder="********"/>
          
          <button
            type='submit'
          >
            Registrar
          </button>
        </form>
      </Content>
    </Container>
  );
}