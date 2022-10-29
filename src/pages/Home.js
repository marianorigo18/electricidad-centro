import styled from "styled-components";
import { topic, iluminacionT } from "../exports/data";
const LayoutHome = styled.div`
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  margin: 120px auto 5px auto;
`;
const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(10, 500px);
  justify-content: center;
`;
const GridItem = styled.div`
  padding: 50px;
  &:nth-child(4n + 2) {
    background-color: rgba(98, 206, 60, 0.7);
    padding: 70px;
    );
  }
  &:nth-child(4n + 3) {
    padding: 70px;
    background-color: #151515;
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
  background-color: tomato;
  width: 100%;
  height: 50%;
  padding: 5px;
`;
const InfoContSingleImage = styled.div`
  width: 50%;
  height: 100%;
  background-color: lightgreen;
  border: 1px solid black;
`;
const InfoContTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  width: 100%;
  height: 50%;
  font-size: 40px;
`;
const Home = () => {
  return (
    <LayoutHome>
      <h1>Helo World</h1>
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
            <Img src={topic[3].img} alt={topic[0].title}></Img>
          </ImageContainer>
        </GridItem>

        <GridItem>
          <ImageContainer>
            <Img src={topic[4].img} alt={topic[0].title}></Img>
          </ImageContainer>
        </GridItem>

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

      </LayoutContainer>
    </LayoutHome>
  );
};

export default Home;
