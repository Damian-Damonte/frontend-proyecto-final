import { GiCookingPot as Kitchen } from "react-icons/gi";
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
import { BsCupHot as  Desayuno} from "react-icons/bs";
import { BsThermometerSun as  Calefaccion} from "react-icons/bs";
import { BiDumbbell as  Gimnasio} from "react-icons/bi";
import { Ri24HoursLine as  Resepcion24hs} from "react-icons/ri";
import { BiSpa as  Spa} from "react-icons/bi";
import { MdSecurity as  Seguridad} from "react-icons/md";
import { BsBicycle as  Bicicleta} from "react-icons/bs";
import { FaChalkboardTeacher as  Conferencias} from "react-icons/fa";
import { RiRestaurantFill as  Restaurant} from "react-icons/ri";
import { FaUmbrellaBeach as  Playa} from "react-icons/fa";
import { FaChild as  Infantil} from "react-icons/fa";
import { GiMartini as  Bar} from "react-icons/gi";
import { BsSafe2 as  CajaFuerte} from "react-icons/bs";
import { MdOutlineKitchen as  Minibar} from "react-icons/md";
import { GiFireplace as  Chimenea} from "react-icons/gi";



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
  "Vistas a la ciudad": <VistaCiudad />,
  "Desayuno incluido": <Desayuno />,
  "Calefaccion": <Calefaccion />,
  "Gimnasio": <Gimnasio />,
  "Recepcion 24hs" : <Resepcion24hs />,
  "Spa": <Spa />,
  "Seguridad las 24hs": <Seguridad />,
  "Alquiler de bicicletas": <Bicicleta />,
  "Sala de conferencias": <Conferencias />,
  "Restaurant": <Restaurant />,
  "Acceso a la playa": <Playa />,
  "Zona infantil": <Infantil />,
  "Bar":<Bar />,
  "Caja fuerte": <CajaFuerte />,
  "Minibar": <Minibar />,
  "Chimenea": <Chimenea />
};

export const caracteristicIconMapper = (caracteristic) => {
  return iconDictionary[caracteristic] && iconDictionary[caracteristic];
};