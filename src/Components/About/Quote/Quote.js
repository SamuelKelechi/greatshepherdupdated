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
                        <h2>FROM THE VICE-CHANCELLOR'S DESK</h2>
                            Great Shepherd University whose principal partner institution in Benin Republic since 2012 till date is Esep -Le Berger ,has continued to carry out innovative initiatives in our effort to raise the standard of education,an attribute that has made us the preferred destination for those who crave for quality education in the Republic of Benin.
                            Our maiden edition of Great Shepherd University/Esep-le Berger Newsletter is a proof of this efforts.
                            The University ensures readers are assured of being well-informed ......skill development opportunities which make the University unique in its own way...."
                            Great Shepherd has maintained a frontline position in the provision of quality education in the West African region. To our numerous students who come from different parts of Nigeria,we owe them a duty to provide them a first class education. 
                            Hence,our practical approach to teaching and learning leaves no room for half-baked products.
                            We take cognisance of the demands of the society for graduates that are problem solving and result oriented.
                            We are also keenly aware of the  rising need for graduates to be self-empowered and be ready to be a catalyst for change.
                            That famous quote by JF Kennedy -"Ask not what your country can do for you,but rather ask what you can do for your country"-rings truer now than ever.
                            The reality of today demands that students should upon graduation be prepared to face life's challenges. 
                            To this end,we have strengthened our courses with value- added study modules in our IT, entrepreneurship and French  such that our graduates are equipped with skills that enable them  to take advantage of the vast opportunities that globalisation offers.
                            We are proud to declare that our graduates  have not dissapointed our institution or the society at large.
                            Since the past seven years, we have produced graduates that turned out to be thorough bred professionals meeting the challenges of the 21st century market place in Nigeria and elsewhere.
                            Besides,we have thrown open a Schorlarship scheme tagged "2021 SPECIAL SCHOLARSHIP SCHEME ", to enable many young ones within the age brackets of 18 and 19 years with Five(5) O'Level credits (English Language & Mathematics inclusive with basic French language as an advantage )to enrol and be educated for the greater  good of the society.
                            This scholarship scheme is to run for three consecutive years  viz 2021/2022, 2022/2023 and 2023/2024 academic sessions respectively. 
                            Eligible persons are therefore advised to seize this opportunity and enrol online.
                            As an Institution,therefore,we take great care to ensure that we are properly certified with various pertinent accrediting bodies .
                            We have a good relationship with Nigeria's Ministry of Education. Our curriculum is approved and in order with provisions of the National Universities Commission (NUC) and the Ministry of Higher Education and Scientific Research  Benin Republic. 
                            Since 2014, our graduates have been participating in the National Youth Service Scheme (NYSC) in Nigeria. 
                            We have taken unprecedented giant strides in the past years. For instance, between 2017 and 2021, the Institute of Entrepreneurs,Nigeria inducted over 62 students into various categories of membership. Another set of students will soon be inducted. 
                            The stride is a testament to our unflagging commitment to academic excellence and skill development. 
                            Our standard is quality and it is flying high.
                            We at Great Shepherd/Esep_Le Berger pride ourselves as "God's Own Project".
                            We will not relent our effort to produce graduate that are excellent in academics and character. 
                            We Invite students and parents who love academic excellence and functional education to come on board.At Great Shepherd /Esep_Le  Berger  Porto-Novo, We have our eyes on the future.
                            <br/>

                            <h3>Dr.(Barr.)Augustine Pekana.N
                            Vice Chancellor.
                            </h3>
     
                    </Quoted>
                </QuoteWrap>
            </QuoteContain>   
        </>
    )
}

export default Quote


const QuoteContain = Styled.div`
    width: 100%;
    // background-image: url(${Back});
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

const QuoteWrap = Styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    opacity: 0.7;

    @media screen and (max-width: 430px) {
        width: 100%;
    }
`

const Pix = Styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: red;
    margin: 5px;
`

const Quoted = Styled.div`
    font-weight: bolder;
    width: 80%;
    padding-top: 10px;
    margin: 10px;

    @media screen and (max-width: 850px) {
        width: 95%;
    }
`


