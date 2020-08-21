import styled from 'styled-components';
import { Loader as Loader$1, ChevronDownSVG } from 'brown-university-components';
import { colors } from 'brown-university-styles';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import moment from 'moment';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n\n  #cover {\n    stroke: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Loader = /*#__PURE__*/styled(Loader$1)( /*#__PURE__*/_templateObject(), colors.white);

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  animation: 750ms ease fadeInUp;\n\n  @keyframes fadeInUp {\n    0% {\n      opacity: 0;\n      transform: translateY(0.75rem);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$1());

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

var URLS = {
  qa: "https://webservices-proxy.cis-qas.brown.edu",
  prod: "https://webservices-proxy.brown.edu"
};

export { CourseField, Filter, FilterWrapper, Loader, MeetingDetails, URLS, Wrapper };
//# sourceMappingURL=drupal-react-courses-shared.esm.js.map
