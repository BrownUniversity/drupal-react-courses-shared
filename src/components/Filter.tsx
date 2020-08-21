import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownSVG } from "brown-university-components";

const Filter = ({ data }: { data: Record<string, string> }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderFilter = (label: string, code: string) => (
    <li className="sub_nav_item" key={label}>
      <NavLink
        exact
        to={`/${code}`}
        className="sub_nav_link sub_nav_link_label"
        data-testid={`${code}-filter`}
        activeStyle={{ color: "#C00404" }}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <nav
      className="sub_nav"
      aria-label="Courses"
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="sub_nav_header">
        <h2 className="sub_nav_title">Courses</h2>
        <button
          className={`sub_nav_handle ${isExpanded ? "fs-swap-active" : ""}`}
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="sub_nav_handle_icon">
            <svg className="icon icon_chevron_down">
              <ChevronDownSVG />
            </svg>
          </span>
          <span className="sub_nav_handle_label">
            {isExpanded ? "Close" : "In This Section"}
          </span>
        </button>
      </div>
      <ul
        className={`sub_nav_list ${isExpanded ? "fs-swap-active" : ""}`}
        aria-label="Courses"
        aria-hidden="false"
      >
        {renderFilter("All Courses", "")}
        {Object.entries(data).map(([code, description]) =>
          renderFilter(description, code)
        )}
      </ul>
    </nav>
  );
};

export default Filter;
