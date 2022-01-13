import React from 'react'
import styled from 'styled-components'

function School() {
  return (
   <Container>
     <Wrapper>
       <Title>
         School fees, other charges and payment modalities.

       </Title>

     </Wrapper>
   </Container>
  )
}

export default School

const Title = styled.div`
color: white;
font-weight: 500;
width: 40%;
text-align: center;
display: flex;
justify-content:center;
align-items: center;
font-size: 30px;

@media screen and (max-width:425px){
  font-size: 15px;
  width: 90%;

}
` 


const Container = styled.div``
const Wrapper = styled.div`
width: 100%;
height: 100px;
background-color:#01409d;
margin-top: 50px;
display: flex;
justify-content:center;
align-items: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

@media screen and (max-width:425px){
  height: 50px;
}


`