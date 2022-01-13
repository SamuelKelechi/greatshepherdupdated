import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import StartPix from '../../Home/Images/started.jpg';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function Facts() {
    return (
       <FactContainer>
            <QuickContain>
                <Border></Border>
                <Quick>Quick Facts</Quick>
                <Border></Border>
            </QuickContain>
    
            <QuickIcons>
                <QuickIconsWrap>
                    <IconHolder>
                        <AvatHolder><ThumbUpIcon style={{width:"100%", height: "100%"}}/></AvatHolder>
                        <PercentHolder>
                            85%
                        </PercentHolder>
                        <WriteHolder>of graduates are satisfied with their degree experience</WriteHolder>
                    </IconHolder>

                    <IconHolder>
                        <AvatHolder><LibraryBooksIcon style={{width:"100%", height: "100%"}}/></AvatHolder>
                        <PercentHolder>27%</PercentHolder>
                        <WriteHolder>degree Programs with skill-enhancing internships</WriteHolder>
                    </IconHolder>

                    <IconHolder>
                        <AvatHolder><SchoolIcon style={{width:"100%", height: "100%"}}/></AvatHolder>
                        <PercentHolder>97%</PercentHolder>
                        <WriteHolder>who start a degree program graduates</WriteHolder>
                    </IconHolder>

                    <IconHolder>
                        <AvatHolder><PublicIcon style={{width:"100%", height: "100%"}}/></AvatHolder>
                        <PercentHolder>89%</PercentHolder>
                        <WriteHolder>students contributing with faculty toward their research</WriteHolder>
                    </IconHolder>
                </QuickIconsWrap>
            </QuickIcons>


            <ApplyContain>
                <ApplyBack>
                    <StartedHolder>
                        <Started>
                            <Border2></Border2>
                            <Get>GET STARTED</Get>
                            <Border2></Border2>
                        </Started>
                        <VisitContain>VISIT & APPLY</VisitContain>
                        <TextContain>
                            Think Great Shepherd is right for you?  <br />
                            The best way to experience Great
                            Shepherd University is to Apply! And obtain certificates that are not compromised
                            by shortcuts, sharp, and corrupt practices.
                        </TextContain>
                        <Button variant="contained">Find Out How</Button>
                    </StartedHolder>
                </ApplyBack>
            </ApplyContain>
       </FactContainer>
    )
} 

export default Facts


const FactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    padding: 10px 0;
    margin-top: 30px;
`

const QuickContain = styled.div`
    width: 350px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 450px){
        width: 95%;
    }
`
const Border = styled.div`
    width: 32%;
    border: 1px solid red;
    @media screen and (max-width: 428px){
        width: 28%;
    }
`
const Quick = styled.div`
    font-weight: bold;
    font-size: 18px;

    @media screen and (max-width: 425px){
        font-size: 16px;
    }
`

const QuickIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const QuickIconsWrap = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const IconHolder = styled.div`
    width: 250px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin: 15px 0;
`

const AvatHolder = styled.div`
    height: 70px;
    width: 70px;

    @media screen and (max-width: 425px){
        height: 60px;
        width: 60px;
    }
`

const PercentHolder = styled.div`
    font-size: 45px;
    font-weight: bold;
    color: 	#30A8FC;
    margin-top: -15px;
`

const WriteHolder = styled.div`
    width: 100%;
    margin-top: -15px;
`

const ApplyContain = styled.div`
    width: 85%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    background-size: cover;
    background-position: center;
    background-image: url(${StartPix});
    border-radius: 2px;

    @media screen and (max-width: 430px) {
        width: 100%
    }
`
const ApplyBack = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00243A;
    opacity: 0.9;
    border-radius: 2px;
`

const StartedHolder = styled.div`
    height: 300px;
    width: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 425px){
        width: 98%;
    }
`
const Started = styled.div`
    display: flex;
    justify-content: space-around;
    width: 350px;
    align-items: center;

    @media screen and (max-width: 425px) {
        width: 95%
    }
`

const Get = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: white;
`

const Border2 = styled.div`
    width: 30%;
    border: 1px solid blue;

    @media screen and (max-width: 425px){
        width: 25%;
    }
`   

const VisitContain = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-weight: bold;
    font-size: 30px;
`
const TextContain = styled.div`
    width: 97%;
    text-align: center;
    color: white;
    letter-spacing: 1.2px;
`