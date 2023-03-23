import { MdOutlineKitchen as Kitchen } from "react-icons/md";
import { IoCar as Car } from "react-icons/io5";
import { FaTv as Tv } from "react-icons/fa";
import { FaSwimmer as Pool } from "react-icons/fa";
import { IoSnow as AirConditioning } from "react-icons/io5";
import { IoIosWifi as  Wifi} from "react-icons/io";
import { IoPawSharp as  PawPrint} from "react-icons/io5";
import { GiBarbecue as  Parrilla} from "react-icons/gi";
import { GiWashingMachine as  Lavadora} from "react-icons/gi";
import { FaBath as  BanioPrivado} from "react-icons/fa";
import { MdOutlineSmokeFree as  NoFumar} from "react-icons/md";
import { FaCity as  VistaCiudad} from "react-icons/fa";


const iconDictionary = {
  "Cocina": <Kitchen />,
  "Estacionamiento gratuito": <Car />,
  "Televisor": <Tv />,
  "Pileta": <Pool />,
  "Aire acondicionado": <AirConditioning />,
  "Wifi": <Wifi />,
  "Apto mascotas": <PawPrint />,
  "Parrilla": <Parrilla />,
  "Lavadora": <Lavadora />,
  "Baño privado": <BanioPrivado />,
  "No fumar": <NoFumar />,
  "Vistas a la ciudad": <VistaCiudad />
};

export const caracteristicIconMapper = caracteristic => {
  return iconDictionary[caracteristic] && iconDictionary[caracteristic];
};