import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;

`;

export const Content = styled.div`
  border: 1px solid black;
  margin: 0 1rem;
  width: 60%;

  button{
    background: #2196F3;
    color: #FFF;
    padding: 0.6rem 2.5rem;
    border: 0;
    margin: 1rem 2rem;

    
    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  
  img {
    max-width: 15rem;
  }

  p{
    margin-left: 4rem;
  }
`;

export const Table = styled.div`
  margin: 2rem;
  border: 1px solid black;
`;

export const THead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;


`;

export const Column = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1px solid black;

`;