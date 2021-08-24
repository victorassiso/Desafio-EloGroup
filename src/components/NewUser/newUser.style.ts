import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.form`
  border: 1px solid black;
  margin-top: 2rem;
  max-width: 400px;

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
      margin: 0.5rem 0;

      &:required{
        border: 1px solid red;
      }
    }
    button{
      margin-top: 1.5rem;
      padding: 1rem;
      width: 100%;
      background-color: transparent;
    }
  }
`;