import React from "react";
import styled from "styled-components";

function InputStat() {
  return (
    <Container>
      <Main>
        <Text>
          Email
          <Ast>*</Ast>
        </Text>

        <InputHolder>
          <Input placeholder="Enter Email Here!" />
        </InputHolder>
      </Main>
    </Container>
  );
}

export default InputStat;

const Main = styled.div``;
const Text = styled.div`
  font-weight: 600;
  margin-bottom: 3px;
  display: flex;
`;
const Ast = styled.div`
  color: red;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 10px;
  outline: none;
  border: none;
  background-color: transparent;
`;
const InputHolder = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid silver;
  border-radius: 8px;
  /* background-color: black; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;
