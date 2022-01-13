import React from 'react'
import Styled from 'styled-components'

function Objective() {
    return (
        <>
           <KnowContain>
             <Obectives>OUR OBJECTIVES</Obectives>
                <KnowWrapper>
                    <RightCard>
                        Left Card
                    </RightCard>
                    <RightCard>
                        Right Card
                    </RightCard>
                </KnowWrapper>
            </KnowContain>  
        </>
    )
}

export default Objective


const KnowContain = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
    flex-direction: column;
`
const Obectives = Styled.div`
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 425px){
    font-size: 20px;
  }
`

const KnowWrapper = Styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 425px){
        width: 95%;
    }
`

const RightCard = Styled.div`
    height: 400px;
    width: 650px;
    // background-color: red;
    border-radius: 5px;
    margin: 10px;

    @media screen and (max-width: 425px){
        width: 100%;
        height: auto;
        padding: 5px;
    }
`
