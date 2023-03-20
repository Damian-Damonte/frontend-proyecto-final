import React from "react";
import {
  FormArribalTimeContainer,
  FormArribalTimeStyled,
  SelectContainer,
  SubtitleContainer,
} from "./styledFormArribalTima";
import { BiCheckCircle as Check } from "react-icons/bi";

const selectOptions = [
  { value: "01:00", text: "01:00 AM" },
  { value: "02:00", text: "02:00 AM" },
  { value: "03:00", text: "03:00 AM" },
  { value: "04:00", text: "04:00 AM" },
  { value: "05:00", text: "05:00 AM" },
  { value: "06:00", text: "06:00 AM" },
  { value: "07:00", text: "07:00 AM" },
  { value: "08:00", text: "08:00 AM" },
  { value: "09:00", text: "09:00 AM" },
  { value: "10:00", text: "10:00 AM" },
  { value: "11:00", text: "11:00 AM" },
  { value: "12:00", text: "12:00 AM" },
  { value: "13:00", text: "01:00 PM" },
  { value: "14:00", text: "02:00 PM" },
  { value: "15:00", text: "03:00 PM" },
  { value: "16:00", text: "04:00 PM" },
  { value: "17:00", text: "05:00 PM" },
  { value: "18:00", text: "06:00 PM" },
  { value: "19:00", text: "07:00 PM" },
  { value: "20:00", text: "08:00 PM" },
  { value: "21:00", text: "09:00 PM" },
  { value: "22:00", text: "10:00 PM" },
  { value: "23:00", text: "11:00 PM" },
  { value: "24:00", text: "12:00 PM" },
];

export default function FormArribalTime({ formData, setFormData, formErrors }) {
  const { arribalTime } = formData;
  const handleChangeSelect = (e) => {
    setFormData({ ...formData, arribalTime: e.target.value });
  };

  function hourConverter(hora24, agregarHora = false) {
    const fecha = new Date(`2000-01-01T${hora24}:00`);
    if (agregarHora) fecha.setHours(fecha.getHours() + 1);
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    let hora12 = hora % 12;
    if (hora12 === 0) hora12 = 12;
    const periodo = hora >= 12 ? "PM" : "AM";
    return `${hora12.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")} ${periodo}`;
  }

  return (
    <FormArribalTimeStyled>
      <h3>Tu horario de llegada</h3>
      <FormArribalTimeContainer>
        <SubtitleContainer>
          <Check />
          <p>
            {`Tu habitación va a estar lista para el check-in entre las ${
              arribalTime ? hourConverter(arribalTime) : "--:--"
            } y las ${
              arribalTime ? hourConverter(arribalTime, true) : "--:--"
            }`}
          </p>
        </SubtitleContainer>

        <SelectContainer $error={formErrors.arribalTime}>
          <label htmlFor="selectTime">
            Indicá tu horario estimado de llegada
          </label>
          <select
            id="selectTime"
            placeholder="Seleccionar hora de llegada"
            value={formData.arribalTime}
            onChange={handleChangeSelect}
          >
            <option value="" defaultValue>
              Seleccionar hora de llegada
            </option>
            {selectOptions.map((e) => (
              <option key={e.value} value={e.value}>
                {e.text}
              </option>
            ))}
          </select>
        </SelectContainer>
      </FormArribalTimeContainer>
    </FormArribalTimeStyled>
  );
}
