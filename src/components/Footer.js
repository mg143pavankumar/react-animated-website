import React from "react";
import styled from "styled-components";
import { FooterOfficeData } from "../data/FooterData";
import { Button } from "./Button";

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000d1a;
  overflow: hidden;

  @media screen and (max-width: 768px){
      height: 90%;
  }
`;
const FooterContent = styled.div`
  padding: 6rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 50%;

  @media screen and (max-width: 768px) {
    padding: 6rem 4rem;
    flex-direction: column;
    // height: 80%;
  }
`;
const FooterContentLeft = styled.div`
  width: 60%;

  h1 {
    color: #fff;
    font-size: clamp(1.6rem, 6vw, 4rem);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const FooterContentRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    flex-direction: column;
  }
`;

const FooterListSection = styled.div`
  margin-bottom: 2rem;
`;
const Title = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

const ContactList = styled.li`
  color: #fff;
  list-style: none;
  padding: 0.4rem 0;
  font-size: 1rem;
`;
const OfficeList = styled.li`
  color: #fff;
  list-style: none;
  padding: 0.4rem 0;
  font-size: 1rem;
`;

const BtnWrapper = styled.div`
  
`;

const Footer = ({
  ContactTitle,
  subTitle1,
  subTitle2,
  subTitle3,
  OfficeTitle,
  place1,
  place2,
  place3,
}) => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContentLeft>
          <h1>
            Let's find <br /> your Dream Home
          </h1>
        </FooterContentLeft>

        <FooterContentRight>
          <FooterListSection>
            <Title>{ContactTitle}</Title>
            <ContactList>{subTitle1}</ContactList>
            <ContactList>{subTitle2}</ContactList>
            <ContactList>{subTitle3}</ContactList>
          </FooterListSection>
          <FooterListSection isOfficeDetails="true">
            <Title>{OfficeTitle}</Title>
            <OfficeList>{place1}</OfficeList>
            <OfficeList>{place2}</OfficeList>
            <OfficeList>{place3}</OfficeList>
          </FooterListSection>
        </FooterContentRight>
        <BtnWrapper>
          <Button to = "/letschat">Let's Chat</Button>
        </BtnWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
