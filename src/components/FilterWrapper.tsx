import ReactDOM from "react-dom";
import { ReactNode } from "react";

const FilterWrapper = ({ children }: { children: ReactNode }) =>
  process.env.NODE_ENV !== "production"
    ? children
    : ReactDOM.createPortal(
        children,
        document.getElementsByClassName("page_sub_nav")[0]
      );

export default FilterWrapper;
