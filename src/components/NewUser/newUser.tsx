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
  
  const newUser = {
    user,
    password,
    passwordConfirmation
  }

  function updateLocalStorageUsers(props: User){
    const localStorageUsers = localStorage.getItem('users');
    
    const users = localStorageUsers == null
      ? [newUser]
      : [...JSON.parse(localStorageUsers), newUser]
    
    localStorage.setItem('users', JSON.stringify(users))
  }

  function handleCreateNewUser(event: FormEvent){
    event.preventDefault();

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
            onChange={event => setUser(event.target.value)}
          />

          <label htmlFor ="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="********"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          
          <label htmlFor ="password">Confirmação Password</label>
          <input
            type="text"
            name="password"
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