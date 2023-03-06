import React from 'react'
import { FooterIconContainer, FooterStyled, FooterTextContainer } from "./styledFooter"
import { ReactComponent as Facebook } from "../../../img/fb.svg";
import { ReactComponent as LinkedIn } from "../../../img/linkedin.svg";
import { ReactComponent as Twitter } from "../../../img/tweet.svg";
import { ReactComponent as Instgram } from "../../../img/ig.svg";


export default function Footer() {
  return (
    <FooterStyled>
      <FooterTextContainer>
      <p>&copy; 2023 Digital Booking</p>
      </FooterTextContainer>
      <FooterIconContainer>
        <Facebook />
        <LinkedIn />
        <Twitter />
        <Instgram />
      </FooterIconContainer>
    </FooterStyled>
  )
}
