import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";

export const DatePickerBookingContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: 282px;
  outline: ${({ $error }) => $error ? "solid 1px #ff0000" : "none"};


  .react-datepicker__day--today {
    color: red;
  }

  .react-datepicker {
    border: none;
  }

  .react-datepicker__current-month {
    font-size: 14px;
    font-weight: 500;
  }

  .react-datepicker__day-name {
    font-weight: 700;
    font-size: 12px;
  }

  .react-datepicker__header {
    background-color: #fff;
    border: none;
    font-size: 14px;
    font-weight: 500;
  }

  .react-datepicker__month-container {
    margin-top: 10px;
  }

  /* dia que aparece seleccionado al abrir */
  .react-datepicker__day--keyboard-selected {
    background-color: #1dbeb367;
    color: white;
  }

  .react-datepicker__day {
    cursor: pointer;
    /* margin: 10px; */
  }

  .react-datepicker__day--001,
  .react-datepicker__day--002,
  .react-datepicker__day--003,
  .react-datepicker__day--004,
  .react-datepicker__day--005,
  .react-datepicker__day--006,
  .react-datepicker__day--007,
  .react-datepicker__day--008,
  .react-datepicker__day--009,
  .react-datepicker__day--010,
  .react-datepicker__day--011,
  .react-datepicker__day--012,
  .react-datepicker__day--013,
  .react-datepicker__day--014,
  .react-datepicker__day--015,
  .react-datepicker__day--016,
  .react-datepicker__day--017,
  .react-datepicker__day--018,
  .react-datepicker__day--019,
  .react-datepicker__day--020,
  .react-datepicker__day--021,
  .react-datepicker__day--022,
  .react-datepicker__day--023,
  .react-datepicker__day--024,
  .react-datepicker__day--025,
  .react-datepicker__day--026,
  .react-datepicker__day--027,
  .react-datepicker__day--028,
  .react-datepicker__day--029,
  .react-datepicker__day--030,
  .react-datepicker__day--031 {
    background-color: #fff;
    color: black;
  }
  .react-datepicker__day--disabled {
    cursor: default;
    color: #ccc;
  }

  .react-datepicker__day:hover {
    border-radius: 50px;
  }

  .react-datepicker__day--disabled {
    cursor: default;
    color: #ccc;
  }

  /* RANGO SELECCIONADO */
  .react-datepicker__day--in-range {
    background-color: #1dbeb4;
    border-radius: 50px;
    font-weight: 500;
    color: white;
  }

  /* hover sobre los dias seleccionados */
  .react-datepicker__day--in-range:hover {
    background-color: #1dbeb4;
    border-radius: 50px;
  }

  /* hover sobre el ultimo dia seleccionado */
  .react-datepicker__day--keyboard-selected:hover {
    background-color: #1dbeb4;
    border-radius: 50px;
  }

  /* color sueva mientras elijo rango */
  .react-datepicker__day--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ) {
    background-color: #1dbeb367;
    border-radius: 50px;
    color: white;
  }

  /* baja las flechas para pasar de mes */
  .react-datepicker__navigation {
    top: 15px;
  }

  @media (min-width: 350px) {
    height: 317px;

    .react-datepicker__day {
      margin: 5px;
    }

    .react-datepicker__day-name {
      margin: 5px;
    }

    .react-datepicker__current-month {
      font-size: 16px;
    }

    .react-datepicker__day-name {
      font-size: 14px;
    }
  }

  /* agrandar el calendario */
  @media (min-width: 400px) and (max-width: 1023px) {
    height: 387px;
    .react-datepicker__day {
      margin: 10px;
      font-size: 16px;
    }

    .react-datepicker__day-name {
      margin: 10px;
    }

    .react-datepicker__current-month {
      font-size: 16px;
    }

    .react-datepicker__day-name {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 387px;
    .linea-divisoria {
      height: 90%;
      width: 1px;
      background-color: #a8a8a8a9;
      position: absolute;
      top: 5%;
      left: 50%;
    }
  }

  @media (min-width: 850px) {
    .react-datepicker__month-container {
      margin: 10px 25px 0 25px;
    }
  }

  @media (min-width: 950px) {
    .react-datepicker__month-container {
      margin: 10px 45px 0 45px;
    }
  }

  @media (min-width: 1024px) {
    min-height: 317px;
    align-items: flex-start;

    .react-datepicker__month-container {
      margin: 10px 5px 0 5px;
    }
  }

  @media (min-width: 1120px) {
    min-height: 329px;

    .react-datepicker__month-container {
      margin: 10px 17px 0 17px;
    }

    .react-datepicker__day {
      margin: 6px;
      font-size: 14px;
    }

    .react-datepicker__day-name {
      margin: 6px;
    }

    .react-datepicker__current-month {
      font-size: 14px;
    }

    .react-datepicker__day-name {
      font-size: 14px;
    }

    /* cambiamos la posicion y color de las flechas para pasar de mes */
    .react-datepicker__navigation {
      top: 140px;
      background-color: ${PRIMARY_COLOR};
      border-radius: 50px;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .react-datepicker__navigation:hover {
      background-color: #15a39a;
    }

    .react-datepicker__navigation--next {
      right: -20px;
    }

    .react-datepicker__navigation--previous {
      left: -20px;
    }

    .react-datepicker__navigation-icon::before {
      border-color: #fff;
      left: -5px;
      top: 8px;
    }
  }

  @media (min-width: 1200px) {
    /* separar los calendarios entre sí */
    .react-datepicker__month-container {
      margin: 10px 20px 0 20px;
    }

    .react-datepicker__navigation--next {
      right: -45px;
    }

    .react-datepicker__navigation--previous {
      left: -45px;
    }
  }

  @media (min-width: 1250px) {
    .react-datepicker__navigation--next {
      right: -50px;
    }

    .react-datepicker__navigation--previous {
      left: -50px;
    }
  }

  @media (min-width: 1300px) {
    .react-datepicker__month-container {
      margin: 10px 30px 0 30px;
    }
    .react-datepicker__navigation--next {
      right: -50px;
    }

    .react-datepicker__navigation--previous {
      left: -50px;
    }
  }
`;
