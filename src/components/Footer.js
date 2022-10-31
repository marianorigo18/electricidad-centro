import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterS = styled.div``;
const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content max-content max-content;
  background-color: #000;
  text-transform: uppercase;
  color: #ffffff;
  @media(min-width: 580px){
      grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 920px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;
const GridItem = styled.div`
`
const Title = styled.h4`
    margin: 40px 0;
    padding-left: 15px;
    color: yellow;
`
const ListItemContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 12px;
  li{
    margin: 5px 0;
    padding-left: 15px;
    color: #FFFFFF;
  }
  li a{
    color: #ffffff;
  }
`;
const ListItemContact = styled.div`
display: grid;
grid-template-columns: 1fr;
text-transform: lowercase;
li{
  margin: 5px 0;
  padding-left: 15px;
}
`

const Footer = () => {
  return (
    <FooterS>
      <FooterContainer>
        <GridItem>
          <Title>contenido</Title>
          <ListItemContent>
            <li><Link to="/electricidad-centro/industria">industria</Link></li>
            <li><Link to="/electricidad-centro/iluminacion">iluminacion</Link></li>
            <li><Link to="/electricidad-centro/conductores">cables</Link></li>
            <li><Link to="/electricidad-centro/terminales">terminales</Link></li>
            <li><Link to="/electricidad-centro/normalizados">normalizados</Link></li>
            <li><Link to="/electricidad-centro/instrumentos-de-medicion">medidores</Link></li>
            <li><Link to="/electricidad-centro/linea-aerea">linea aerea</Link></li>
            <li><Link to="/electricidad-centro/conjuntos-armados">puntos y tomas</Link></li>
            <li><Link to="/electricidad-centro/luces-emergencia">emergencia</Link></li>
            <li><Link to="/electricidad-centro/herramientas">herramientas</Link></li>
            <li><Link to="/electricidad-centro/morceteria">morceteria</Link></li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>contacto</Title>
          <ListItemContact>
            <li>info@electricidad-centro.com.ar</li>
            <li>3755-500004</li>
            <li>3755-421425</li>
            <li>Av. Beltrame 1493 - Obera-Misiones</li>
          </ListItemContact>
        </GridItem>
        <GridItem>
          <Title>compania</Title>
          <ListItemContent>
            <li>sobre nosotros</li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>social</Title>
          <ListItemContent>
            <li>instagram</li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>hello</Title>
        </GridItem>
      </FooterContainer>
    </FooterS>
  );
};

export default Footer;
