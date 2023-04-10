import React from "react";
import { BtnContainer, ImgItemStyled, PrincipalImg } from "./styledProductImg";
import { BsTrash3Fill as  Remove} from "react-icons/bs";


const ImgItem = React.forwardRef((props, ref) => {
  const { img, removeImg, isPrincipal, ...rest } = props;

  return (
    <ImgItemStyled ref={ref} {...rest}>
       <img
        src={img.url}
        alt="img"
      />
      <BtnContainer onClick={() => removeImg(img.id)}>
        <Remove />
      </BtnContainer>
      {isPrincipal && <PrincipalImg><p>Portada</p></PrincipalImg>}
    </ImgItemStyled>
  );
});

export default ImgItem;
