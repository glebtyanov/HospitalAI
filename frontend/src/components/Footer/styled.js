import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1300px;
  margin: 50px auto;
`;

export const FooterWrapper = styled.section`
  padding: 0 20px;
  display: flex;
  flex-direction: row;

  @media (mix-width: 1300) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 120;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.div`
  width: 500px;

  @media (max-width: 1300px) {
    &:first-child {
      margin-left: 100px};
    }

    &:last-child {
      margin-right: 100px;
    }
  }

  @media (max-width: 700px) {
    margin: 0px auto;
    width: 300px;

    &:first-child {
      margin: 0 auto;
    }

    &:last-child {
      margin: 0 auto;
    }
  }
`;

export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin-right: 10px;
  }

  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: linear-gradient(
      92deg,
      rgba(0, 206, 44, 1) 0%,
      rgba(174, 223, 35, 1) 49.26%,
      rgba(163, 220, 0, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 1300px) {
    margin-bottom: 0;
  }
`;

export const Quote = styled.div`
  width: 100%;

  p {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  text-align: center;

  > div {
    margin: 30px;
  }

  @media (min-width: 1300px) {
    flex-direction: row;
    gap: 0;
    margin-top: 0px;
  }
`;

export const MainLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const SubLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: rgba(137, 137, 137, 1);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: rgba(137, 137, 137, 1);
    }
  }
`;

export const FooterCopyright = styled.p`
  height: 36px;
  color: white;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin: 50px auto;
`;
