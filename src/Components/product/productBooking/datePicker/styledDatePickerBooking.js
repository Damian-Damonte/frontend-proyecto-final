import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const DatePickerBookingContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;

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
    background-color: transparent;
    color: white;
  }

  .react-datepicker__day {
    cursor: default;
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

  /* baja las flechas para pasar de mes */
  .react-datepicker__navigation {
    top: 15px;
  }

  @media (min-width: 350px) {
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
  @media (min-width: 400px) {
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

  @media (min-width: 768px) {
    .linea-divisoria {
      height: 90%;
      width: 1px;
      background-color: #a8a8a8a9;
      position: absolute;
      top: 5%;
      left: 343px;
      z-index: 1000;
    }
  }

  @media (min-width: 1200px) {
    min-width: 850px;
    width: 850px;

    /* cambiamos la posicion y color de las flechas para pasar de mes */
    .react-datepicker__navigation {
      top: 45%;
      background-color: ${PRIMARY_COLOR};
      border-radius: 50px;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-datepicker__navigation--next {
      right: -50px;
    }

    .react-datepicker__navigation--previous {
      left: -50px;
    }

    .react-datepicker__navigation-icon::before {
      border-color: #fff;
      left: -5px;
      top: 8px;
    }
  }
`;
