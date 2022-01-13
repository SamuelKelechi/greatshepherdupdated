import React from 'react'
import styled from 'styled-components'
import Learn from "../MyOwn/First/Learn"
import Think from './Second/Think'

function Allcom() {
  return (
   <Container>
     <Wrapper>
       <Learn/>
       <Think/>
     </Wrapper>
   </Container>
  )
}

export default Allcom

const Container = styled.div``
const Wrapper = styled.div`


`