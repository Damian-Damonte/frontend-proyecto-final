import { MdOutlineKitchen as Kitchen } from "react-icons/md";
import { IoCar as Car } from "react-icons/io5";
import { FaTv as Tv } from "react-icons/fa";
import { FaSwimmer as Pool } from "react-icons/fa";
import { IoSnow as AirConditioning } from "react-icons/io5";
import { IoIosWifi as  Wifi} from "react-icons/io";
import { IoPawSharp as  PawPrint} from "react-icons/io5";
import { Caracteristic } from "../Components/productPage/productCaracteristics/styledProductCaracteristics";

const iconDictionary = {
  "Cocina": <Kitchen />,
  "Estacionamiento gratuito": <Car />,
  "Televisor": <Tv />,
  "Pileta": <Pool />,
  "Aire acondicionado": <AirConditioning />,
  "Wifi": <Wifi />,
  "Apto mascotas": <PawPrint />
};

export const caracteristicIconMapper = caracteristic => {
  return iconDictionary[caracteristic] && iconDictionary[caracteristic];
};