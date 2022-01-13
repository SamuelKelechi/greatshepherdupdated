import React from 'react'
import Styled from 'styled-components'
import Back from '../Images/Back.jpg'


function AboutUni() {
    return (
        <>
            <KnowContain>
                <KnowWrapper>
                    <LeftCard>
                    </LeftCard>
                    <RightCard>
                        The Great Shepherd University Republic of Benin is a private institution established by law. Approved and Accredited on the 18 October,1999 by Decree No:0136/MENRS/CAB/DC/SP.
                        It has an operational license given by the government of Benin Republic and has graduated several
                        sets since its establishment in 1999.
                        <br/>
                        <br/>
                        Great Shepherd University provides the opportunity for interactive activities with students of 
                        affiliated Universities in African and other parts of the World. Some of our foreign partner universities/institutions includes;
                        University of Yaounde Cameroon, International University of Bamenda Cameroon, Bamenda University of Science & Technology(BUST), The Institute
                        of Entrepreneurs Nigeria, The Chartered Institute of Marketing Nigeria, Merchant Marine Training Academy Apapa, Lagos Nigeria, The Chartered 
                        Institute of Administration Nigeria.
                        <br/>
                        <br/>  
                        We provide students with access to knowledge through cognitive, social and spiritual understanding.
                        <br/>
                        <br/>
                        <b>Our Motto: Knowledge, Fear of God and Service to Humanity</b>
                    </RightCard>
                </KnowWrapper>
            </KnowContain>
          
        </>
    )
}

export default AboutUni

const KnowContain = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
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

const LeftCard = Styled.div`
    height: 400px;
    width: 650px;
    background-color: pink;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    margin: 10px;
    background-image: url(${Back});
    background-size: cover;
    background-position: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 425px){
        width: 100%;
        height: 350px;
    }
`

const RightCard = Styled.div`
    height: 400px;
    width: 650px;
    // background-color: red;
    border-radius: 5px;
    margin: 10px;
    letter-spacing: 1.2px;

    @media screen and (max-width: 425px){
        width: 100%;
        height: auto;
        padding: 5px;
    }
`
