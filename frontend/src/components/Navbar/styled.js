import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 20px;
`;

export const LogoWrapper = styled.div`
  img {
    max-height: 80px;
    width: 80px;
    height: 80px;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-self: center;
  flex-wrap: wrap;
  width: 657px;
  list-style-type: none;

  a {
    color: rgb(255, 255, 255);

    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px;
    margin: 10px;
    text-decoration: none;
    position: relative;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: rgb(255, 255, 255);
    }
  }
`;

export const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleSlider = styled.span`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 14px;
  background: linear-gradient(
    92deg,
    rgba(0, 206, 44, 1) 0%,
    rgba(174, 223, 35, 1) 49.26%,
    rgba(163, 220, 0, 1) 100%
  );
  border-radius: 7px;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    left: 0;
    top: -3px;
    transition: transform 0.3s ease;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleSlider} {
    background: linear-gradient(
      92deg,
      rgba(0, 206, 44, 1) 0%,
      rgba(174, 223, 35, 1) 49.26%,
      rgba(163, 220, 0, 1) 100%
    );

    &:before {
      transform: translateX(22px);
    }
  }
`;

export const ExitButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 20px; /* половина высоты */
  background-color: rgb(39, 83, 70); /* цвет кнопки */
  color: #ffffff; /* цвет текста */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 40px; /* для центрирования текста */
  // text-transform: uppercase; /* для приведения текста к верхнему регистру */
  cursor: pointer;
  border: none; /* удалить границу */

    &:hover {
      background-color: rgb(47, 150, 127);
    }

    &:focus {
      outline: none; /* удалить рамку фокуса */
    }

  }
`;
