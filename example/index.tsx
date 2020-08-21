import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Loader, Wrapper } from "../.";

const App = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
