import React from "react"
import styled from "styled-components"
import {AiFillPlayCircle} from "react-icons/ai"
import {MdFavorite} from "react-icons/md"
import {MdFavoriteBorder} from "react-icons/md"
import react, {useState} from "react"
import { AiOutlineClose } from "react-icons/ai"
import cliq from "./Highlight.mp4";
import cliq1 from "./Highlight2.mp4";
import cliq2 from "./Highlight3.mp4";



const App=() =>{
 const [toggle,setToggle] =useState<boolean>(false)

 const [showVideo,setshowVideo] =useState<boolean>(false)

 const [myVideo,setmyVideo] =useState( 
  [  
 {title:"video 1",details:"details1", video: "./Highlight.mp4", bg:"red",id: 0 },
 {title:"video 2",details:"details2", video: "./Highlight2.mp4", bg:"green", id: 1 },
 {title:"video 3",details:"details3", video: "./Highlight3.mp4", bg:"blue", id: 2 },
 ],
 )

 
 const [getVideoValue,setgetVideoValue] =useState<string>("")

  
 const onToggled = () =>{
   setToggle(!toggle)
 };

 const onShowVideo = () =>{
   setshowVideo(!showVideo)
 };

 

 const changeVideo = ()=>{
  setmyVideo(myVideo)
 }

  return( 
    <Container>
       <Main>
        <Text>Codelab</Text>
       {
        myVideo.map((props)=>(
          <Holder>
          <VideoClip bg={props.bg}>
            <div   onClick={() => {
              onShowVideo()
              setgetVideoValue(props.video)
            }}>
           
            <Icon size={38}/>
            </div>
          </VideoClip>
          <Content>
            <Text1>{props.title}</Text1>
            <Text2>{props.details}</Text2>
            </Content>
          <Bios onClick={()=>{
            onToggled();
          }}>
            {toggle ?(<MdFavorite size={30} color="red" />) :( <MdFavoriteBorder size={30}/> )}
          </Bios>
        </Holder> 
        ))
       }
        
        
        
            
          { showVideo ? <Div2>
            <BackDrop onClick={onShowVideo}>
       <Icon1 size={30} onClick={onShowVideo}/>
      </BackDrop>
        <Video 
        src={cliq } controls autoPlay playsInline /> 
        <Video src={cliq1 } controls autoPlay playsInline /> 
        <Video src={cliq2 } controls autoPlay playsInline /> 
      </Div2> 
      : null
          }

       </Main>
    </Container>
  );
};

export default App

const Div2=styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Icon1=styled(AiOutlineClose)`
position:absolute;
right:32px;
top:20px;
transition:All 350ms;
color:red;
:hover{
  cursor: pointer;
  transform:scale(1.09)
}`

const BackDrop=styled.div`
background-color:rgba(0,0,0,0.3);
height:100%;
width:100%;
position:absolute;
top:0;
display:flex;
justify-content:center;
align-items:center;
left:0;
background:rgba(225,225,225,0.25);
box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter:blur(4px);
-webkit-backdrop-filter:blur()(4px);
`
const Video=styled.video`
width:450px;
height:300px;
border-radius:10px;
overflow:hidden;
background-color:black;
object-fit:cover;

z-index:0;
position:absolute;
top:70px;
`

const Icons=styled(MdFavorite)`
color:grey;
`
const Icon=styled(AiFillPlayCircle)`
color:rgba(225,225,225,0.4)
`
const Text1=styled.div`
font-weight:600;
font-size:18px;`

const Text2=styled.div`
color:#959CAA`

const VideoClip=styled.div<{bg:string}>`
width:200px;
height:110px;
background-color:${({bg})=>bg};
border-radius:10px;
color:white;
display:flex;
align-items:center;
justify-content:center;
 
div{
  color:rgba(225,225,225,0.4);
  transition:all 350ms;
}
:hover{
  background-color:#000234;
  cursor:pointer;

  div{
    cursor:pointer;
    color:rgba(225,225,225,0.8)
  }
}`
const Content=styled.div`
flex:1;
margin-left:10px`
const Bios=styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
transition:all 350ms;

:hover{
    background-color:rgba(225,225,225,0.6);
    cursor: pointer;
}`
const Holder=styled.div`
display:flex;
height:110px;
margin-top:15px;
align-items:center;

`
const Container=styled.div`
height:100vh;
width:100%;
background-color:lightblue;
display:flex;
justify-content:center;
align-items:center;`

const Main=styled.div`
height:400px;
width:600px;
background-color:white;
padding:20px;
border:1 solid grey;
border-radius:20px;
overflow:hidden;
position:relative;
`
const Text=styled.div`
font-weight:600;
font-size:21px;`


