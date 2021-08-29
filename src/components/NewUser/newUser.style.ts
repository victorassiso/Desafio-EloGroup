import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;
`;

export const Content = styled.div`
  border: 1px solid black;
  max-width: 400px;
  margin: 0 1rem;

  img{
    padding: 2rem 2rem 0 2rem;
    width: 100%;
  }

  form{
    padding: 2rem 4rem;

    label {
      margin-left: 0.5rem;

      &.required{
        content: "*";
      }
    }

    input{
      width: 100%;
      margin: 0.8rem 0;
     height: 2rem;

    }

    button{
      margin-top: 1.5rem;
      padding: 1rem;
      width: 100%;
      background-color: transparent;
    }
  }
`;