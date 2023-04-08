import { CaracteristicStyled, IconContainer } from "./styledCaracteristics";
import { ImCheckboxChecked as Check } from "react-icons/im";

export default function Caracteristic2({ caracteristica, isChecked, handleCheck }) {
  return (
    <CaracteristicStyled $check={isChecked} onClick={handleCheck}>
      
      {isChecked
        ? <Check />
        : <IconContainer $check={isChecked}></IconContainer>
      }
      <p onClick={handleCheck}>{caracteristica.nombre}</p>
    </CaracteristicStyled>
  );
}
