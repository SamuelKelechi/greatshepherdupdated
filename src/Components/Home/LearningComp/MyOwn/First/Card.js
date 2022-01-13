import React from 'react'
import styled from 'styled-components'
import pix from "./img/pix.png"

function Card(props) {
  return (
   <Container>
     <Wrapper bg={props.background} bo={props.border} db={props.flexdirection} >
       <AllFirst>
       <First src={props.imgpath}/>
       </AllFirst>
     
        
       
       <Second>
         <All>
         <Title ct={props.color}>{props.text}</Title>
         <Contentt cl={props.color}>{props.con}</Contentt>
         </All>
        
       </Second>

     </Wrapper>
   </Container>
  )
}

export default Card

const AllFirst = styled.div` 
width: 100%;
height:240px;
display: flex;
justify-content: center;
`

const All = styled.div`
width: 350px;
height: 155px;
flex-direction: column;

@media screen and (max-width:375px){
width: 95%;
height: 155px;
flex-direction: column;

}

@media screen and (max-width:320px){
width: 95%;
height: 155px;
flex-direction: column;

}
`

const Contentt = styled.div`
color:${({cl})=> cl};
width: 350px;
height: 100px;
font-size: 12px;
display: flex;

align-items: center;
display: flex;

align-items: center;
line-height: 13px;

@media screen and (max-width:425px){
   
   width: 95%;
  //  padding-left: 10px;
   font-size: 11.1px;
   line-height: 12px;
 }

@media screen and (max-width:320px){
   
  width: 90%;
  padding-left: 10px;
  font-size: 11px;
  line-height: 12px;
}

`

const Title = styled.div`
color:${({ct})=> ct};
width: 350px;
height: 30px;
display: flex;
margin-top: 10px;
align-items: center;
font-weight: 600;
font-size: 23px;


@media screen and (max-width:425px){
 width: 100%;
 font-size: 20px;
 display: flex;
align-items: center;
font-weight: 600;
font-size: 27px;
// padding: 10px;
}

@media screen and (max-width:320px){
 width: 95%;
 font-size: 20px;
 display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 23px;
}
`

const First = styled.img`
height:260px;
width: 85%;
border-radius: 10px 10px 0px 0px;
object-fit: center;

@media screen and (max-width:425px){
  width: 80%;
  height:230px;
}
@media screen and (max-width:375px){
  width: 90%;
  height:230px;
}

@media screen and (max-width:320px){
  width: 100%;
  height:220px;
}
`
const Second = styled.div`
height:170px;
width: 100%;
border-radius: 0px 0px 10px 10px;
display: flex;
justify-content: center;



`

const Container = styled.div`
`
const Wrapper = styled.div`
height:380px ;
width: 390px;
border-radius: 10px;
background-color:${({bg})=> bg};
padding-top: 15px;
margin: 10px;
margin-bottom: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
flex-direction: ${({db})=> db};
transform: scale(1);
transition: all 350ms;
border: ${({bo})=> bo};



&:hover{
  transform:scale(1.03)
};

@media screen and (max-width:425px){
  height:390px ;
width: 95%;
border-radius: 10px;
background-color:${({bg})=> bg};
margin: 10px;
margin-bottom: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}


@media screen and (max-width:375px){
  height:390px ;
width: 95%;
border-radius: 10px;
background-color:${({bg})=> bg};
margin: 10px;
margin-bottom: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media screen and (max-width:320px){
  height:390px ;
width: 95%;
border-radius: 10px;
background-color:${({bg})=> bg};
margin: 10px;
margin-bottom: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`