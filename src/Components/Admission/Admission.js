import React from 'react'
import styled from 'styled-components'
import Admi from './Admi.js'
import Admin2 from './Admin2.js'
import AdmissionComp from './AdmissionComp.js'
import Card from './Card.js'
import Card2 from './Card2.js'
import Card3 from './Card3.js'
import For from './For.js'
import Inter from "./Inter.js"
import Requirements from './Requirements.js'
import School from './School.js'

function Admission() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Wrapper>
          <AdmissionComp/>
          <Inter/>
          <School/>
          <Admi/>
          <Admin2/>
          {/* <Card/>
          <Card2/>
          <Card3/> */}
          <Requirements/>
          <For/>
        </Wrapper>
      </Container>
      
    </div>
  )
}
export default Admission


const Container = styled.div``
const Wrapper = styled.div`


`
