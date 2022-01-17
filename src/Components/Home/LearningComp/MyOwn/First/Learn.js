import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import pix from "./img/pix.png"
import pix2 from "./img/pix2.png"
import pix3 from "./img/pix3.png"
import pix4 from "./img/pix4.png"


function Learn() {
  return (
    <Container>
      <Wrapper>
        <DivCon>
          <Card 
          background="#fc1028"
           color="#fffeff" 
           flexdirection="column"  
           imgpath={pix}
           text="Flexible Teaching Structure"
           con="
              
           
              "
           />
          <Card 
          background="" 
          border="1px solid #aeaeae" 
          color="black" 
          flexdirection="column-reverse;" 
          imgpath={pix2}
          text="Learning made easy"
          con="
               
              "
          />
          <Card 
          background="#ef9f26" 
          color="#fffeff" 
          flexdirection="column" 
          imgpath={pix3}
          text="Interactive student union"
          con=""
          />
          <Card 
          background="#30a8fc" 
          color="#fffeff" 
          flexdirection="column-reverse;" 
          imgpath={pix4}
          text="Conducive  Learning Environment"
          con="  "
          />
        </DivCon>

        {/* <DivCon2>
         
       <Card/>
        <Card/>
       </DivCon2> */}


      </Wrapper>
    </Container>
  )
}

export default Learn

const DivCon = styled.div`
width: 870px;

display: flex;
justify-content: space-around;

flex-wrap: wrap;

@media screen and (max-width:425px){
height: auto;
width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
}

`

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;

`
const Wrapper = styled.div`
 
 width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;

`
