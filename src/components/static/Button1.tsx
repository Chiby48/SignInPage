import React from 'react'
import styled from 'styled-components'


interface iButton{
    desc: string,
    logo: any,
    col: string
}

const Button:React.FC<iButton> = ({desc, logo, col}) => {
  return (
    <div>
      <Container>
        <Main>
            <Logo col={col}>{logo}</Logo>
            <Text>{desc}</Text>
        </Main>
      </Container>
    </div>
  )
}

export default Button

const Text = styled.div`
font-size: 15px;
`
const Logo = styled.div<{col: string}>`
font-size: 20px;
margin-top: 4.5px;
margin-right: 10px;
color: ${({col})=>col}
`
const Container = styled.div`
margin: 7px;
cursor: pointer;
transition: all 550ms;
:hover{
    transform: scale(1.05)
}
`
const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid silver;
padding: 2px 40px;
border-radius: 30px;

`