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
                Students expectations and aspirations are readily met on time record
           
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
                Focused on the total transformation of human capacity using qualified
                team of staff and modern technological devices
              "
          />
          <Card 
          background="#ef9f26" 
          color="#fffeff" 
          flexdirection="column" 
          imgpath={pix3}
          text="Interative student union"
          con=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed "
          />
          <Card 
          background="#30a8fc" 
          color="#fffeff" 
          flexdirection="column-reverse;" 
          imgpath={pix4}
          text="Conducive  Learning Environment"
          con=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed "
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
