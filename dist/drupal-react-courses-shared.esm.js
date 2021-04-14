import styled from 'styled-components';
import { Loader as Loader$1, ChevronDownSVG } from 'brown-university-components';
import { colors } from 'brown-university-styles';
import React, { useState } from 'react';
import { NavLink, MemoryRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import moment from 'moment';
import gql from 'graphql-tag';
import { render } from '@testing-library/react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var Loader = /*#__PURE__*/styled(Loader$1)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  text-align: center;\n\n  #cover {\n    stroke: ", ";\n  }\n"])), colors.white);

var _templateObject$1;
var Wrapper = /*#__PURE__*/styled.div(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  animation: 750ms ease fadeInUp;\n\n  @keyframes fadeInUp {\n    0% {\n      opacity: 0;\n      transform: translateY(0.75rem);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"])));

var CourseField = function CourseField(_ref) {
  var label = _ref.label,
      href = _ref.href,
      value = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? "" : _ref$defaultValue;
  return React.createElement("div", {
    className: "course_item_row"
  }, label && React.createElement("span", {
    className: "course_item_row_label"
  }, label, ": "), React.createElement("span", {
    className: "course_item_row_content"
  }, href && value ? React.createElement("a", {
    href: href,
    className: "course_item_row_content",
    target: "_blank",
    rel: "noopener noreferrer"
  }, value) : value || defaultValue));
};

var Filter = function Filter(_ref) {
  var data = _ref.data;

  var _useState = useState(false),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var renderFilter = function renderFilter(label, code) {
    return React.createElement("li", {
      className: "sub_nav_item",
      key: label
    }, React.createElement(NavLink, {
      exact: true,
      to: "/" + code,
      className: "sub_nav_link sub_nav_link_label",
      "data-testid": code + "-filter",
      activeStyle: {
        color: "#C00404"
      }
    }, label));
  };

  return React.createElement("nav", {
    className: "sub_nav",
    "aria-label": "Courses",
    itemType: "http://schema.org/SiteNavigationElement"
  }, React.createElement("div", {
    className: "sub_nav_header"
  }, React.createElement("h2", {
    className: "sub_nav_title"
  }, "Courses"), React.createElement("button", {
    className: "sub_nav_handle " + (isExpanded ? "fs-swap-active" : ""),
    type: "button",
    onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    }
  }, React.createElement("span", {
    className: "sub_nav_handle_icon"
  }, React.createElement("svg", {
    className: "icon icon_chevron_down"
  }, React.createElement(ChevronDownSVG, null))), React.createElement("span", {
    className: "sub_nav_handle_label"
  }, isExpanded ? "Close" : "In This Section"))), React.createElement("ul", {
    className: "sub_nav_list " + (isExpanded ? "fs-swap-active" : ""),
    "aria-label": "Courses",
    "aria-hidden": "false"
  }, renderFilter("All Courses", ""), Object.entries(data).map(function (_ref2) {
    var code = _ref2[0],
        description = _ref2[1];
    return renderFilter(description, code);
  })));
};

var FilterWrapper = function FilterWrapper(_ref) {
  var children = _ref.children;
  return process.env.NODE_ENV !== "production" ? children : ReactDOM.createPortal(children, document.getElementsByClassName("page_sub_nav")[0]);
};

var formatDate = function formatDate(date) {
  return moment(date, "YYYY-MM-DD").format("MMM D, YYYY");
};

var formatMeeting = function formatMeeting(meeting) {
  var buildingDescription = meeting.buildingDescription,
      roomCode = meeting.roomCode,
      startTime = meeting.startTime,
      endTime = meeting.endTime,
      daysToMeet = meeting.daysToMeet,
      startDate = meeting.startDate,
      endDate = meeting.endDate;
  var weekdays = {
    U: "Sun",
    M: "Mon",
    T: "Tue",
    W: "Wed",
    R: "Thu",
    F: "Fri",
    S: "Sat"
  };
  var location = (buildingDescription || "") + " " + (roomCode || "");
  var times = startTime && endTime ? startTime + " - " + endTime : "";
  var days = daysToMeet ? daysToMeet.split("").map(function (day) {
    return weekdays[day];
  }).join(", ") : "";
  var dates = startDate && endDate ? "from " + formatDate(startDate) + " to " + formatDate(endDate) : "";
  return location + " " + times + " " + days + " - " + dates;
};

var MeetingDetails = function MeetingDetails(_ref) {
  var meetings = _ref.meetings;
  return meetings.length > 0 ? React.createElement(React.Fragment, null, meetings.map(function (m, i) {
    return React.createElement(CourseField, {
      label: i === 0 ? "Meetings" : undefined,
      key: m.startDate + "-" + m.daysToMeet + "-" + m.startTime,
      value: formatMeeting(m)
    });
  })) : React.createElement(CourseField, {
    label: "Meetings",
    value: "Meeting Details Not Available."
  });
};

var SelectedSectionContext = /*#__PURE__*/React.createContext({});
var SelectedSectionProvider = function SelectedSectionProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(null),
      selectedSection = _useState[0],
      setSelectedSection = _useState[1];

  return React.createElement(SelectedSectionContext.Provider, {
    value: {
      selectedSection: selectedSection,
      setSelectedSection: setSelectedSection
    }
  }, children);
};

var URLS = {
  qa: "https://webservices-proxy.cis-qas.brown.edu",
  prod: "https://webservices-proxy.brown.edu"
};

var _templateObject$2;
var termsQuery = /*#__PURE__*/gql(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  {\n    terms {\n      code\n      description\n    }\n  }\n"])));

var makeMeeting = function makeMeeting(subset) {
  if (subset === void 0) {
    subset = {};
  }

  return _extends({
    buildingCode: "CIT",
    buildingDescription: "Center for Information Technology",
    daysToMeet: "MWF",
    endDate: "2019-05-07",
    endTime: "10:50",
    roomCode: "368",
    startDate: "2019-01-23",
    startTime: "10:00"
  }, subset);
};

var makeMeetings = function makeMeetings(subset, numMeetings) {
  if (subset === void 0) {
    subset = {};
  }

  if (numMeetings === void 0) {
    numMeetings = 1;
  }

  var meetings = [];

  for (var i = 0; i < numMeetings; i += 1) {
    meetings.push(makeMeeting(subset));
  }

  return meetings;
};

var renderWithRouter = function renderWithRouter(ui, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$route = _ref.route,
      route = _ref$route === void 0 ? "/" : _ref$route;

  var testHistory = {
    location: {
      pathname: "",
      search: "",
      state: "",
      hash: ""
    },
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

  var Wrapper = function Wrapper(_ref2) {
    var children = _ref2.children;
    return React.createElement(MemoryRouter, {
      initialEntries: [route]
    }, React.createElement(Route, {
      path: "*",
      render: function render(_ref3) {
        var history = _ref3.history;
        testHistory = history;
        return null;
      }
    }), React.createElement(SelectedSectionProvider, null, children));
  };

  return _extends({}, render(ui, {
    wrapper: Wrapper
  }), {
    history: testHistory
  });
};

export { CourseField, Filter, FilterWrapper, Loader, MeetingDetails, SelectedSectionContext, SelectedSectionProvider, URLS, Wrapper, makeMeeting, makeMeetings, renderWithRouter, termsQuery };
//# sourceMappingURL=drupal-react-courses-shared.esm.js.map
