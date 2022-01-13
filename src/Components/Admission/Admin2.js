import React from 'react'
import styled from 'styled-components'
import img from "./img/Group110.png"
import {CgEditBlackPoint} from "react-icons/cg"

function Admin2() {
  return (
    <Container>
    <Wrapper >
      <img src={img}/>
    </Wrapper>
    <Accom>
    ACCOMODATION PER SEMESTER 55,000F CFA (₦55,000)
    </Accom>
    <Point>
      <span><CgEditBlackPoint/>CONSTANT LIGHT AND WATER SUPPLY</span>
      <span><CgEditBlackPoint/>BUNKS AND MATTRESS</span>
      <span><CgEditBlackPoint/>WIFI</span>
    </Point>
    <AllNotice>
    PAY YOUR TUITION AND OTHER CHARGES OF THE NAIRA EQUIVALENT INTO THIS AUTHORIZED ACCOUNT IN NIGERIA, TELLERS SHOULD BE KEPT AS IT WILL BE EXCHNAGED WITH SCHOOL RECEIPT 
    <br/>
ACCOUNT NUMBNER: NDIENOBI WORLD HORIZONE SERVICES 
<br/>
ACCOUNT NUMBER: 012290484<br/>
BANK : WEMA BANK.<br/>
THE CFA SHOULD BE PAID AT THE BURSERY IN THE SCHOOL 

    </AllNotice>
  </Container>
  )
}

export default Admin2

const AllNotice = styled.div`
width: 52%;

height: auto;
font-weight:600;
padding: 10px;
border: 1px solid lightgray;
border-radius:5px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
margin-top: 10px;
margin-bottom: 10px;
@media screen and (max-width:425px){
 width: 90%;
 font-size: 10px;
}
`

const Point = styled.div`
display: flex;
flex-direction: column;

span{
  font-size: 25px;
}

@media screen and (max-width:425px){
 

  span{
    font-size: 15px;
  /* text-align: center; */
}
}
`

const Accom = styled.div`
font-weight: 700;
font-size: 30px;
margin-top: 10px;

@media screen and (max-width:425px){
  font-size:15px;
  text-align: center;
}
`

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 20px;
margin-bottom: 10px;




@media screen and (max-width:425px){

  width: 100%;
  height: auto;

  
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
  height: 350px;

  img{
    width: 600px;
    height: 350px;
  }
  
}
`
