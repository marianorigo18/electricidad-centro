import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import { topic, iluminacionT, logos} from "../exports/data";
const LayoutHome = styled.div`
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  margin: 120px auto 5px auto;
  @media(min-width: 768px){
    margin: 140px auto 5px auto;
  }
`;
const Hidden = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;
  background-color: #151515;
  margin-bottom: 20px;
  @media(min-width:768px){
    margin-bottom: 70px;
    grid-template-rows: 280px;
  }
`;
const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;
const HiddenTitle = styled.h2`
  font-size: 15px;
  color: #ffffff;
  font-weight:100;
  @media (min-width: 768px) {
    font-size: 30px;
    padding-left: 34px;
  }
  `;
  const HiddenParagraph = styled.p`
  font-size: 9px;
  color: #838383;
  font-weight:100;
  @media (min-width: 768px) {
    font-size: 12px;
    padding-left: 34px;
  }
`;
const ImgHiddenContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const ImgHidden = styled.img`
  height: 80% ;
`
const TitleSelection = styled.h1`
  font-size: 18px;
  font-weight: 100;
  padding-left: 5px;
  margin-bottom: 15px;
  text-transform: uppercase;
  @media(min-width: 768px){
    font-size: 26px;
    margin-bottom: 40px;
  }
`
const ButtonContact = styled.div`
  a{
    display: block;
    width: max-content;
    padding: 2px 5px;
    color: #FFFFFF;
    border: 1px solid #ffffff;
    margin-top: 10px;
    font-size: 12px;
  }
`
const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 450px);
  justify-content: center;
  @media (max-width: 968px) {
    grid-template-rows: repeat(4, 400px);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(4, 300px);
  }
  @media (max-width: 568px) {
    grid-template-rows: repeat(4, 200px);
  }
  @media (max-width: 338px) {
    grid-template-rows: repeat(4, 150px);
  }
`;
const GridItem = styled.div`
  border-radius: 2px;
  &:nth-child(4n + 2) {
    box-shadow: -4px 7px 12px rgb(0 0 0 / 10%);
    background-color: #151515;
    padding: 70px;
    @media (max-width: 768px) {
      padding: 27px;
    }
    );
  }
  &:nth-child(4n + 3) {
    box-shadow: -4px 7px 12px rgb(0 0 0 / 10%);
    padding: 70px;
    background-color: #151515;
    @media (max-width: 768px) {
      padding: 27px;
    }
  }  
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InfoContImages = styled.div`
  display: flex;
  justify-content: center;
  /*background-color: tomato;*/
  width: 100%;
  height: 50%;
  padding: 5px;
  margin-top: 18px;
`;
const InfoContSingleImage = styled.div`
  height: 100%;
  /*background-color: lightgreen;*/
  /*border: 1px solid black;*/
`;
const InfoContTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: yellow;*/
  width: 100%;
  height: 50%;
  font-size: 30px;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 520px) {
    font-size: 20px;
  }
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
const Home = () => {
  return (
    <LayoutHome>
      <Hidden>
        <HiddenContainer>
          <HiddenTitle>
            SOMOS LIDERES EN MATERIALES ELECTRICOS E ILUMINACION.
          </HiddenTitle>
          <HiddenParagraph>
            PRODUCTOS DE PRIMERA LINEA Y CALIDAD PROCEDENTES DE UNA COMPLETA
            VARIEDAD DE MARCAS.
            <ButtonContact><Link to="/electricidad-centro/contacto">contacto</Link></ButtonContact>
          </HiddenParagraph>
        </HiddenContainer>
        <ImgHiddenContainer>
          <ImgHidden src={logos[2].img}></ImgHidden>
        </ImgHiddenContainer>
      </Hidden>
        <TitleSelection>seleccion categorias</TitleSelection>
      <LayoutContainer>
        <GridItem>
          <InfoContainer>
            <InfoContImages>
              <InfoContSingleImage>
                <Img src={iluminacionT[4].img} alt={topic[4].title}></Img>
              </InfoContSingleImage>
              <InfoContSingleImage>
                <Img src={iluminacionT[2].img} alt={topic[5].title}></Img>
              </InfoContSingleImage>
            </InfoContImages>
            <InfoContTitle>
              <p>BIDIRECCIONAL</p>
            </InfoContTitle>
          </InfoContainer>
        </GridItem>

        <GridItem>
          <ImageContainer>
            <Img src={topic[2].img} alt={topic[0].title}></Img>
          </ImageContainer>
        </GridItem>

        <GridItem>
          <ImageContainer>
            <Img src={topic[1].img} alt={topic[0].title}></Img>
          </ImageContainer>
        </GridItem>

        <GridItem>
          <InfoContainer>
            <InfoContImages>
              <InfoContSingleImage>
                <Img src={iluminacionT[1].img} alt={topic[4].title}></Img>
              </InfoContSingleImage>
              <InfoContSingleImage>
                <Img src={iluminacionT[4].img} alt={topic[5].title}></Img>
              </InfoContSingleImage>
            </InfoContImages>
            <InfoContTitle>
              <p>BIDIRECCIONAL</p>
            </InfoContTitle>
          </InfoContainer>
        </GridItem>
        {/*Duplicate*/}
        <GridItem>
          <InfoContainer>
            <InfoContImages>
              <InfoContSingleImage>
                <Img src={iluminacionT[4].img} alt={topic[4].title}></Img>
              </InfoContSingleImage>
              <InfoContSingleImage>
                <Img src={iluminacionT[2].img} alt={topic[5].title}></Img>
              </InfoContSingleImage>
            </InfoContImages>
            <InfoContTitle>
              <p>BIDIRECCIONAL</p>
            </InfoContTitle>
          </InfoContainer>
        </GridItem>

        <GridItem>
          <ImageContainer>
            <Img src={topic[0].img} alt={topic[0].title}></Img>
          </ImageContainer>
        </GridItem>

        <GridItem>
          <ImageContainer>
            <Img src={topic[0].img} alt={topic[0].title}></Img>
          </ImageContainer>
        </GridItem>

        <GridItem>
          <InfoContainer>
            <InfoContImages>
              <InfoContSingleImage>
                <Img src={iluminacionT[1].img} alt={topic[4].title}></Img>
              </InfoContSingleImage>
              <InfoContSingleImage>
                <Img src={iluminacionT[4].img} alt={topic[5].title}></Img>
              </InfoContSingleImage>
            </InfoContImages>
            <InfoContTitle>
              <p>BIDIRECCIONAL</p>
            </InfoContTitle>
          </InfoContainer>
        </GridItem>
      </LayoutContainer>
      <Footer></Footer>
    </LayoutHome>
  );
};

export default Home;
