import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(39, 83, 70);

  @media (min-width: 1300px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: transparent;
  margin-bottom: 20px;
  margin-left: 200px;
`;

export const Quote = styled.p`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 47px;
  margin: 20px;
  background-color: transparent;

  @media (min-width: 768px) {
    width: auto;
    text-align: right;
    margin-bottom: 0px;
  }
`;

export const Title = styled.p`
  width: 100%;
  flex-shrink: 0;
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px;

  @media (min-width: 1300px) {
    width: auto;
  }
`;

export const LogoWrapper = styled.div`
  margin-left: 0px;
  background-color: transparent;

  img {
    background-color: transparent;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 1300px) {
    width: 300px;
    margin-left: 30px;
    margin: 0 auto;
  }
`;
