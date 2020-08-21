import * as React from "react";
import { Loader, Filter, Wrapper } from "../../../dist";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const stopLoading = () => setIsLoading(false);
  setTimeout(stopLoading, 2500);
  const filterData = {
    FIRST: "First Value",
    SECOND: "Second Value",
    LAST: "Third Value",
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Filter data={filterData} />
      <Wrapper>Hello, world!</Wrapper>
    </>
  );
};

export default App;
