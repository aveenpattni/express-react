import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";

const u = units;

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${u({
    backgroundColor: "primary"
  })};
`

function App() {
  return (
    <AppWrapper>
      Aveen
    </AppWrapper>
  );
}

export default App;
