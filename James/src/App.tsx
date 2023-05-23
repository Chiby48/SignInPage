import React from "react";
import REACT, {useState} from "react";
import styled from "styled-components";
import {AiFillPlayCircle} from "react-icons/ai";
import {MdFavoriteBorder, MdFavorite} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import watch from "./Highlight2.mp4";



const App = () => {
  const [toggle, setToggle] = useState <boolean> (false);
  const [watchVideo, setWatchVideo] = useState<boolean>(false);
  const [myVideo, setMyVideo] = useState( [
    {title: "title1", details: "details1", video: "watch1", bg: "red", show: "",},
    {title: "title2", details: "details2", video: "watch2", bg: "blue", show: "",},
    {title: "title3", details: "details3", video: "watch3", bg: "red", show: "",},
]);

// const [getVideoValue,setgetVideoValue] =useState<string>("")

  const onToggle = () => {
    setToggle(!toggle);
  }; 
 
  const onWatchVideo = () => {
    setWatchVideo(!watchVideo);
  }

  console.log(toggle);
  
  return (
   <Container>
    <Main>
    <Text>CodeLab</Text>
   {
    myVideo.map((solex) =>(
      <Holder>
      <Videocliq bg={solex.bg}>
        <div onClick = {() => {onShowVideo()
              setgetVideoValue(props.video)}}
        
>
          <AiFillPlayCircle size ={36}/>
        </div>
        </Videocliq>
      <Content>
        <Div>First Video</Div>
        <DivSub>Video description</DivSub>
      </Content>
      <Button onClick ={() => {onToggle();
      }}>
        {toggle ? (
        <MdFavorite size={36}   
        color="red"/>) : (<MdFavoriteBorder size={36}/>
        )}
        </Button>
    </Holder>
    ))
   }

      {
        watchVideo? ( 
          <Div2 show = {props.show}>
        <BlurCliq onClick ={onWatchVideo}>
          <Icon size={30} onClick ={onWatchVideo}/>
        </BlurCliq>
          <Video src={watch} controls autoPlay playsInline/>
      </Div2>
        ) : null}
    </Main>
   </Container>
  )
};

export default App;
const Div2 = styled.div<{show: string}>`
video: ${({show}) =>show};
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Icon = styled(AiOutlineClose)`
position: absolute;
right: 30px;
top: 30px;
transition: all 350ms;
color: red;

:hover{
  cursor: pointer;
  transform: scale(1.09);
}

`;
const Video = styled.video`
width: 470px;
height: 320px;
border-radius: 10px;
overflow: hidden;
background-color: black;
object-fit: cover;
z-index: 10;
position: absolute;
top: 80px;
`;

const BlurCliq = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );

display: flex;
justify-content: center;
align-items: center;

`;

const DivSub = styled.div`
color: silver;
`;
const Div = styled.div`
font-weight: 700;
margin-bottom: 5px;
`;
const Button = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
transition: all 350ms;

:hover{
  background-color: rgba(225, 225, 225, 0.6);
  cursor: pointer;
}
`;

const Content = styled.div`
flex: 1;
margin-left: 10px;

`;

const Videocliq = styled.div<{bg:string}>`
width: 200px;
height: 120px;
background-color: ${({bg}) => bg}
border-radius: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;

div{
  color: rgba(255, 255, 255, 0.3)
  transition: all 350ms; 
}

:hover{
  cursor: pointer;

  div{
    color: rgba(255, 255, 255, 0.7)
  }
}
`;

const Holder = styled.div`
  margin-top: 10px;
  display: flex;
  height: 120px;
  align-items: center;
`;

const Text = styled.div`
font-size: 20px;
font-weight: 700;
`;

const Main = styled.div`
width: 800px;
min-height: 400px;
background-color: white;
border-radius: 20px;
border: 2px solid gray;
padding: 20px;
overflow: hidden;
position: relative;
`;


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 
0%, rgba(238,220,231,1) 
0%, rgba(196,218,222,0.7231267507002801) 
100%, rgba(0,212,255,0.7231267507002801) 100%);;
`;