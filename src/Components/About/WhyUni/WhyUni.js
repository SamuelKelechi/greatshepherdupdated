import React from 'react'
import Styled from 'styled-components'
import Award from '../Images/Award.png'
import {Link} from 'react-router-dom'

function WhyUni() {
    return (
        <>
            <WhyContainer>
                <WhyContent>
                    <Why>Why Great Shepherd University?</Why>
                    <DownBorder></DownBorder>
                    <Text>
                    We have a unique and conducive environment for learning.
*	We have qualified and experienced team of lecturers.
*	There are no strike actions that threaten our academic calendar.
*	There is instant admission for students with Five (5) O’level credits
*	We are the only University in Benin Republic that offers Scholarship for students with Five (5) credits within the age (18) and 19 years of age.
*	We have been offering   scholarships to qualified applicants since 2014 till date.
*	Our fee structure is affordable with flexible payments arrangements that can be spread within the academic year.
*	Students graduate within record time and are mobilized for the NYSC almost immediately.
*	Most of our graduate are gainfully employed in the public as well as the private sectors.
*	We assist our graduates in gaining admission as well as scholarship into Foreign Universities in France, Europe, UK, USA, and Canada etc.
*	Our students are engaged in weekly academic workshops and seminars.
*	We have one of the best hostel facilities with bunks and mattresses, WIFI, constant water & light for our students (optional) at affordable amount.
*	There is standard library, computer and language laboratories.
*	Our school stands out as the best overall winner in inter-Schools debate Competition among Anglophone Schools in Benin Republic (2018) till date.
*	Our students have records of excellent performance in public and private sectors and in other foreign Universities in Europe, UK, USA, Canada etc.
*	We encourage and sponsor talented students insocial, cognitive, and spiritual activities in line with our vision and mission.
*	NCE, OND, University diploma holders are qualified for direct entry into our University.
*	Meanwhile. ND, HND (Higher diploma as well as professional qualifications are admissible for (BA), (BSc) degree CONVERSION.
*	Masters degree: 3 semesters minimum for degree ND or professional certificate holders.
                    </Text>
                    <Link to='/admission' style={{textDecoration:"none"}}>
                        <ButtonStyle>
                            READ HOW YOU CAN JOIN
                        </ButtonStyle>
                    </Link>
                </WhyContent>
            </WhyContainer>
            
        </>
    )
}

export default WhyUni


const WhyContainer = Styled.div`
    width: 100%;
    // height: 400px;
    color: white;
    margin-top: 20px;
    background-image: url(${Award});
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
`

const WhyContent = Styled.div`
    width: 100%;
    // height: 400px;
    background-color: #D7192B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    padding: 20px 0;
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
    width: 90%;
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