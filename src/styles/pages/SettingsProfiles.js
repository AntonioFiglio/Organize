import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .center {
    text-align: center;
    padding: 20px;
    margin: 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 15px;

  && :nth-child(2) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 10px;
  }
`;
