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

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
