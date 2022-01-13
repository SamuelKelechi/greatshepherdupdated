import React from 'react'
import Styled from 'styled-components'
import Award from '../Images/Award.png'

function WhyUni() {
    return (
        <>
            <WhyContainer>
                <WhyContent>
                    <Why>Why Great Shepherd University?</Why>
                    <DownBorder></DownBorder>
                    <Text>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                    </Text>
                    <ButtonStyle>
                        READ HOW YOU CAN JOIN
                    </ButtonStyle>
                </WhyContent>
            </WhyContainer>
            
        </>
    )
}

export default WhyUni


const WhyContainer = Styled.div`
    width: 100%;
    height: 400px;
    color: white;
    margin-top: 20px;
    background-image: url(${Award});
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
`

const WhyContent = Styled.div`
    width: 100%;
    height: 400px;
    background-color: #D7192B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
`


const Why = Styled.div`
    font-weight: bold;
    font-size: 25px;

    @media screen and (max-width: 425px){
        font-size: 20px;
    }
`

const DownBorder = Styled.div`
    width: 60px;
    height: 8px;
    background-color: #EF9F26;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Text = Styled.div`
    width: 500px;
    text-align: center;
    margin-bottom: 25px;

    @media screen and (max-width: 425px) {
        width: 95%;
    }
`

const ButtonStyle = Styled.div`
    height: 43px;
    background-color: white;
    width: 270px;
    color: #D7192B;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    margin-top: 20px
`