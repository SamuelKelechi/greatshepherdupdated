import React from 'react';
import styled from 'styled-components';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';



const slideImages = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/1.jpg?alt=media&token=1458cc37-674a-4a21-b968-a96e00ce519b',
    // caption: 'Slide 1'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/2.jpeg?alt=media&token=7b9d31f2-12f6-40b5-8408-360bb2a4d49b',
    // caption: 'Slide 2'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/3.jpg?alt=media&token=bb0cad9e-f12e-4b7e-b634-9f95a9071469',
    // caption: 'Slide 3'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/4.jpg?alt=media&token=fd876d35-b6bb-44aa-bfeb-16463de52009',
    // caption: 'Slide 4'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/5.jpeg?alt=media&token=f789ebbc-532c-45cd-9b95-906baefc27db',
    // caption: 'Slide 5'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/6.jpg?alt=media&token=fe3d8286-291e-4e90-8169-da668eb65cf5',
    // caption: 'Slide 6'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/7.jpeg?alt=media&token=984c92cb-f47d-40a2-af61-27f5156ab5f8',
    // caption: 'Slide 7'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/8.jpg?alt=media&token=42302c9b-b683-4770-919a-c27c329edd05',
    // caption: 'Slide 8'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/9.jpeg?alt=media&token=18648492-add4-47b8-98e6-fdd2348d7fe3',
    // caption: 'Slide 9'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/silver-quest-296801.appspot.com/o/10.jpeg?alt=media&token=2bcd0157-1450-4339-b541-3628b6c8c329',
    // caption: 'Slide 10'
  },
];

const Flip = () => {
    return (
      <Container >
        <Fade style={{width: "100%", height:"100%"}}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{width: "100%", height:"500px"}}>
              <div style={{width: "100%", height:"450px", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", objectFit:"cover", borderRadius: "8px", 'backgroundImage': `url(${slideImage.url})`}}>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Fade>
      </Container>
    )
}

export default Flip;

const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
border-radius: 8px;
`