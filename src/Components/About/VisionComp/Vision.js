import React from 'react'
import Styled from 'styled-components'



function Vision() {
    return (
        <>
            <VisionContain>
                <VisionWrapper>
                    <Title>
                        OUR VISION
                    </Title>
                    <Text>
                    Our Vision is "To remain a reference institution of higher education focused on creating genuine graduates equipped with dinstinctive academic and professional competence".
                    </Text>
                </VisionWrapper>
            </VisionContain>
        </>
    )
}

export default Vision


const VisionContain = Styled.div`
    width: 100%;
    background-color:  #00CED1;
    color: white;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
`

const VisionWrapper = Styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 430px){
        width: 90%
    }
`

const Title = Styled.div`
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 18px;
`

const Text = Styled.div`
    line-height: 1.5;
    font-weight: bold;
`




