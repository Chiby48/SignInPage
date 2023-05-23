import React, {useState} from "react";
import styled from "styled-components";
import earth from "../Earth img/planet-earth.svg";


const Earth = () => {
    const [img, setImg] = useState<boolean>(true)
    const [img1, setImg1] = useState<boolean>(false)
    const [img2, setImg2] = useState<boolean>(false)
    const [myBox, setMybox] = useState (
    [{text: "text", bigtext: "bigtext"},
    {text: "text", bigtext: "bigtext"},
    {text: "text", bigtext: "bigtext"},
]);
    
        const onToggle1 = () => {
            setImg(true)
            setImg1(false)
            setImg2(false)
        }

        const onToggle2 = () => {
            setImg(false)
            setImg1(true)
            setImg2(false)
        }
        const onToggle3 = () => {
            setImg(false)
            setImg1(false)
            setImg2(true)
        }

    return (
    <Container>
        <Main>
          <Top>
            <Image src = {earth} />
            <Content>
                <Title>Earth</Title>

                    {
                        img ? <Body>
                        We, the occupants of the above mentioned residential address, 
                        hereby officially asked your electricity company to suspend with immediate effect,
                         allotting estimated electricity bills to our account as from today henceforth.
                         Due to the outrageous and highly exorbitant bills your company has been 
                         giving us for several months now which is unacceptable, 
                         we have decided that we are no longer interested in your services anymore for now.

                            </Body> : img1 ? <Body>
                            As we speak presently, your officers have since discounted our wire from the pole lines,
                            and took our wires to their office. However be informed we have officially applied for the prepaid metering system, which will be installed very soon.
                            Please, we peacefully solicit for your co-operation, thanks in anticipation.

                            </Body> :img2 ? <Body>
                            Due to the outrageous and highly exorbitant bills your company has been giving us
                            for several months now which is unacceptable, we have decided that we are no longer interested in your services anymore for now.
                            As we speak presently, your officers have since discounted our wire from the pole lines, and took our wires to their office. 
                            However be informed we have officially applied for the prepaid metering system, which will be installed very soon.

                            </Body> : null
                    }

                    <Button onClick={onToggle1} bg={img ? "tt" : ""}>
                    Overview</Button>
                    <Button onClick={onToggle2}bg={img1 ? "tt" : ""}>
                    Internal Structure</Button>
                    <Button onClick={onToggle3} bg={img2 ? "tt" : ""}>
                    Surface Geology</Button>
               
            </Content>
          </Top>
          <Bottom>
          {
          myBox.map((solex) => (
            <Card>
                <Text>Test</Text>
                <BigText>BigText</BigText>
            </Card>
          ))
        }
          </Bottom>
        </Main>
    </Container>
    );
};

export default Earth;
const Button = styled.div<{bg: string}>`
width: 300px;
height: 40px;
display: flex;
align-items: center;
padding-left: 20px; 
margin: 10px 0;
border: 1px solid silver;
transition: all 350ms;
text-transform: uppercase;
font-weight: ${({bg}) => (bg ? "700" : "normal")};
color: ${({bg}) => (bg ? "white" : "black")};
background-color: ${({bg}) => (bg ? "darkorange" : "")};

:hover{
    background-color:gray;
    cursor: pointer;
}

`;

const Body = styled.div`
width: 300px;
color: #323232;
font-size:13px;
line-height: 1.5;
margin-bottom: 50px;

`;

const Title = styled.div`
text-transform: uppercase;
font-weight: 900;
font-size: 60px;
margin-top: 120px;
`;
const BigText = styled.div`
font-szie: 30px;
font-weight: 700;
`;

const Text = styled.div``;

const Card = styled.div`
width: 190px;
border: 1px solid silver;
height: 100px;
display: flex;
justify-content: center;
flex-direction: column;
padding-left: 20px;
margin: 0 15px;
`;

const Bottom = styled.div`
margin-top: 100px;
width: 100%;
justify-content: center;
display: flex;
`;

const Content = styled.div`
margin-left: 80px;
`;

const Image = styled.img`
height: 230px;
margin-right: 80px;

`;

const Top = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Main = styled.div`
width: 900px;
min-height: 436px;
magin-top: 50px;
display: flex;
flex-direction: column;
`;

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: background: rgb(2,0,36);
background: linear-gradient(90deg, 
  rgba(2,0,36,1) 0%, rgba(230,207,221,1) 0%, 
  rgba(196,218,222,0.7231267507002801) 100%, 
rgba(0,212,255,0.7231267507002801) 100%);

`;
