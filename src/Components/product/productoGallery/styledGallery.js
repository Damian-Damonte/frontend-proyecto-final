import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const GalleryMobileContainer = styled.div`
  position: relative;
`

export const BtnsContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 15px;

  svg {
    cursor: pointer;
  }
`