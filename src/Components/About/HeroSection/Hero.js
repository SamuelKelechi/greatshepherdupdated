import React from 'react'
import Styled from 'styled-components'
import HeroImg from '../Images/AboutHero.jpg'


function Hero() {
    return (
        <>
            <MainContainer>
                <ContainWrapper>
                    <ContentHolder>
                        <TextHolder>
                            About Us
                        </TextHolder>
                        <DownBorder>

                        </DownBorder>
                    </ContentHolder>
                </ContainWrapper>       
            </MainContainer>
        
        </>      
    )
}

export default Hero


const MainContainer = Styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${HeroImg});
    background-position: center;
    background-size: cover;
    padding-top: 50px;

    @media screen and (max-width: 430px){
        height: 300px;
    }
`

const ContainWrapper = Styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00243A;
    opacity: 0.8;

    @media screen and (max-width: 430px){
        height: 300px;
    }
`

const ContentHolder = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextHolder = Styled.div`
    font-weight: bold;
    font-size: 100px;
    color: white;
    opacity: 1;

    @media screen and (max-width: 430px){
        font-size: 35px;
    }
`

const DownBorder = Styled.div`
    width: 200px;
    border: 1px solid #EF9F26;
    margin-top: -15px;

    @media screen and (max-width: 430px){
        width: 80px;
        margin-top: 0px;
    }
`
