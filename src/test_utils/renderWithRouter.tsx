/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement, ReactNode } from "react";
import { MemoryRouter, Route, RouteComponentProps } from "react-router-dom";
import { render } from "@testing-library/react";
import SectionContextWrapper from "../../src/contexts/SelectedSectionContext";

const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  let testHistory: RouteComponentProps["history"] = {
    location: { pathname: "", search: "", state: "", hash: "" },
    length: 0,
    push: jest.fn(),
    action: "PUSH",
    replace: jest.fn(),
    go: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    block: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn()
  };

  const Wrapper = ({ children }: { children?: ReactNode }) => (
    <MemoryRouter initialEntries={[route]}>
      <Route
        path="*"
        render={({ history }) => {
          testHistory = history;
          return null;
        }}
      />
      <SectionContextWrapper>{children}</SectionContextWrapper>
    </MemoryRouter>
  );

  return {
    ...render(ui, { wrapper: Wrapper }),
    history: testHistory
  };
};

export default renderWithRouter;
