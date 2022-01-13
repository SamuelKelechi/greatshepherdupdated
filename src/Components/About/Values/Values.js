import React from 'react'
import Styled from 'styled-components'
import Value1 from '../Images/Value1.jpg'
import Value2 from '../Images/Value2.jpg'
import Value3 from '../Images/Value3.jpg'
import Value4 from '../Images/Value4.jpg'
import Value5 from '../Images/Value5.jpg'



function Values() {
    return (
        <>
           <VisionContain>
                <VisionWrapper>
                    <Title>
                        OUR CORE VALUES
                    </Title>
                    <Text>
                    it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                    </Text>
                </VisionWrapper>
                <ImgWrapper>
                    <Holder><HolderWrap>Integrity</HolderWrap></Holder>
                    <Holder1><HolderWrap>Transparency</HolderWrap></Holder1>
                    <Holder2><HolderWrap>Accountability</HolderWrap></Holder2>
                    <Holder3><HolderWrap>Moral Rectitude</HolderWrap></Holder3>
                    <Holder4><HolderWrap>Freedom of Communication</HolderWrap></Holder4>
                </ImgWrapper>
            </VisionContain>
        </>
    )
}

export default Values



const VisionContain = Styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`
const ImgWrapper = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 90%;
    flex-wrap: wrap;
`

const Holder = Styled.div`
    height: 90px;
    width: 170px;
    margin: 15px;
    background-image: url(${Value1});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 430px){
        width: 250px
    }
`

const Holder1 = Styled.div`
    height: 90px;
    width: 170px;
    background-color: yellow;
    margin: 15px;
    background-image: url(${Value2});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 430px){
        width: 250px
    }
`

const Holder2 = Styled.div`
    height: 90px;
    width: 170px;
    background-color: yellow;
    margin: 15px;
    background-image: url(${Value3});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 430px){
        width: 250px
    }
`

const Holder3 = Styled.div`
    height: 90px;
    width: 170px;
    background-color: yellow;
    margin: 15px;
    background-image: url(${Value4});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 430px){
        width: 250px
    }
`

const Holder4 = Styled.div`
    height: 90px;
    width: 170px;
    background-color: yellow;
    margin: 15px;
    background-image: url(${Value5});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 430px){
        width: 250px
    }
`

const HolderWrap = Styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00243A;
    font-weight: bold;
    color: white;
    opacity: 0.8;
    text-align: center;
`