import styled from "styled-components";
export const Container = styled.div`
  /* min-height: 692px; */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: 	#FFFFFF;
`;
export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled.a`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #070062;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;


export const Form = styled.form`
  background: #070062;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormHeading = styled.h1`
  margin-bottom: 40px;
  color: "#fff";
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: "#fff";
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #2314ff;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.div`
  text-align: center;
  margin-top: 1px;
  margin-bottom: 5px;
  color: red;
  font-size: 14px;
`;
export const RadioInput = styled.input`
  /* border: none; */
  /* border-radius: 4px; */
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  margin-bottom: 10px;
`;