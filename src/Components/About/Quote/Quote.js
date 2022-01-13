import React from 'react'
import Styled from 'styled-components'
import Back from '../Images/Quote.webp'


function Quote() {
    return (
        <>
            <QuoteContain>
                <QuoteWrap>
                    <Pix />
                    <Quoted>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Quoted>
                </QuoteWrap>
            </QuoteContain>   
        </>
    )
}

export default Quote


const QuoteContain = Styled.div`
    width: 100%;
    background-image: url(${Back});
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

const QuoteWrap = Styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    opacity: 0.5;

    @media screen and (max-width: 430px) {
        width: 100%;
    }
`

const Pix = Styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: red;
    margin: 10px;
`

const Quoted = Styled.div`
    font-weight: bolder;
    width: 500px;
    height: 400px;
    padding-top: 10px;
    margin: 10px;

    @media screen and(max-width: 430px) {
        width: 95%;
    }
`


