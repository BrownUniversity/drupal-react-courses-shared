import React from "react";
import renderWithRouter from "../src/test_utils/renderWithRouter";
import Filter from "../src/components/Filter";

const renderFilter = (route = "/") => {
  const data = {
    A: "Value A",
    B: "Value B",
    C: "Value C",
    D: "Value D"
  };
  const rtlUtils = renderWithRouter(<Filter data={data} />, {
    route
  });
  return rtlUtils;
};

describe("Filter", () => {
  describe("links", () => {
    it("renders a link for each entry", () => {
      const { getByText } = renderFilter();
      getByText("Value A");
      getByText("Value B");
      getByText("Value C");
      getByText("Value D");
    });

    it("links to key hash", () => {
      const rtlUtils = renderFilter();
      rtlUtils.getByText("Value B").click();
      expect(rtlUtils.history.location.pathname).toBe("/B");
    });
  });

  describe("All Courses link", () => {
    it("is rendered", () => {
      const { getByText } = renderFilter();
      getByText("All Courses");
    });

    it("empties hash on click", () => {
      const { getByText, history } = renderFilter("/B");
      getByText("All Courses").click();
      expect(history.location.pathname).toBe("/");
    });
  });

  describe("expand/collapse", () => {
    it("toggles navigation text on click", () => {
      const { getByText } = renderFilter();
      getByText("In This Section").click();
      getByText("Close").click();
      getByText("In This Section");
    });
  });
});
