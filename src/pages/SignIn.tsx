import React from 'react'
import styled from 'styled-components'
import Button from '../components/static/Button1'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import InputStat from '../components/reuse/InputStat'

function signIn() {
  return (
    
    <div>
          <Container>
              <Main>
                <Card>
                    <BigText> Welcome to Mantine, login with</BigText>
                    <ButtonHolder>
                        <Button desc={'Twitter'} logo={<AiOutlineTwitter/>} col={'rgb(60,117,208)'}/>
                        <Button desc={'Google'} logo={<FcGoogle/>} col={'rgb(60,117,208)'}/>
                    </ButtonHolder>
                    <LineHolder>
                        <Line></Line>
                        <SmllText>Or continue with email</SmllText>
                        <Line></Line>
                    </LineHolder>
                    <InputStat/>
                </Card>
              </Main>
          </Container>
      </div>
  )
}

export default signIn

const LineHolder = styled.div`
display: flex;
height: 40px;
width: 85%;
justify-content: space-between;
align-items: center;
`
const Line = styled.div`
height: 1px;
width: 90px;

background-color: silver;
`
const SmllText = styled.div`
font-size: 12px;
margin: 0 10px;
margin-bottom: 4px

`

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const BigText = styled.div`
    font-size: large;
    font-weight: 600;
    margin-top: 20px;
    text-align: left;
    width: 80%;
`

const Container =  styled.div`
height: 90vh;

width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Card =  styled.div`
height: 400px;
width: 380px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
`
const Main =  styled.div`
width: 80%;
height: 100%;
justify-content: end;
align-items: start;
display: flex;
`
