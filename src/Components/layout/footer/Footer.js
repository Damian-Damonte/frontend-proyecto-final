import React from "react";
import {
  FooterIconContainer,
  FooterStyled,
  FooterTextContainer,
  WidthLimitContainer,
} from "./styledFooter";
import { ReactComponent as Facebook } from "../../../img/fb.svg";
import { ReactComponent as LinkedIn } from "../../../img/linkedin.svg";
import { ReactComponent as Twitter } from "../../../img/tweet.svg";
import { ReactComponent as Instgram } from "../../../img/ig.svg";

export default function Footer() {

  const toSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <WidthLimitContainer>
      <FooterStyled>
        <FooterTextContainer>
          <p>&copy; 2023 Digital Booking</p>
        </FooterTextContainer>
        <FooterIconContainer>
          <Facebook onClick={() => toSocialMedia("https://www.facebook.com/")} />
          <LinkedIn onClick={() => toSocialMedia("https://www.linkedin.com/")} />
          <Twitter onClick={() => toSocialMedia("https://twitter.com/")} />
          <Instgram onClick={() => toSocialMedia("https://www.instagram.com/")} />
        </FooterIconContainer>
      </FooterStyled>
    </WidthLimitContainer>
  );
}
