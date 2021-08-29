import { Container } from "./newUser.style";
import { Content } from "./newUser.style";
import logoImg from '../assets/logo.png';
import { FormEvent, useState } from "react";

interface User {
  user: string,
  password: string,
  passwordConfirmation: string,
}

export function NewUser() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function updateLocalStorageUsers(props: User){
    const localStorageUsers = localStorage.getItem('users');
    
    const users = localStorageUsers == null
      ? [props]
      : [...JSON.parse(localStorageUsers), props]
    
    localStorage.setItem('users', JSON.stringify(users))
  }

  function handleCreateNewUser(event: FormEvent){
    event.preventDefault();
    
    const newUser = {
      user,
      password,
      passwordConfirmation
    }

    updateLocalStorageUsers(newUser)

    setUser('')
    setPassword('')
    setPasswordConfirmation('')
  }

  return (
    <Container>
      <Content onSubmit={handleCreateNewUser}>
        <img src={logoImg} alt="EloGroup" />
        <form>
          <label htmlFor="user">Usuário</label>
          <input
            type="text"
            name="user"
            value={user}
            required
            onChange={event => setUser(event.target.value)}
          />

          <label htmlFor ="password">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="********"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          
          <label htmlFor ="password">Confirmação Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="********"
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
          />
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