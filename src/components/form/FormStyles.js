import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  background-color: #fff;

  .button-group {
    margin-left: auto;
    margin-right: auto;
  }

  .form-submit-btn {
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    margin-top: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  padding: 1rem 3rem;
  text-align: center;
  line-height: 1.6;
  font-size: 600;
  color: black;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  color: black;
  padding: 1.4rem;
  padding-right: 5rem;
  margin: 1rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 0.6rem;
  outline: none;
  border: 1px solid black;
  &::placeholder {
    color: black;
    opacity: 0.6;
  }
  &:focus {
    color: black;
    border: 1px solid black;
  }
`;
