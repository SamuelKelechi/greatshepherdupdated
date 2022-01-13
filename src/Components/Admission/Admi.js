import React from 'react'
import styled from 'styled-components'
import img from "./img/Group12.png"

function Admi() {
  return (
   <Container>
     <Wrapper >
       <img src={img}/>
     </Wrapper>
   </Container>
 
  )
}

export default Admi

const Container = styled.div`
width: 100%;
height: 650px;
display: flex;
justify-content:center;
align-items: center;
margin-top: 50px;



@media screen and (max-width:425px){

  width: 100%;
  height: 350px;

  
}

`
const Wrapper = styled.div`
width: 83%;
height: 600px;


img{
  width: 100%;
height: 600px;
border-radius:5px


}

@media screen and (max-width:425px){
   
  width: 95%;
  overflow-x: scroll;
  height: 400px;

  img{
    width: 600px;
    height: 350px;
  }
  
}
`
