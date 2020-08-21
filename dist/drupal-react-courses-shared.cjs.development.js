'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var brownUniversityComponents = require('brown-university-components');
var brownUniversityStyles = require('brown-university-styles');

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
var Loader = /*#__PURE__*/styled(brownUniversityComponents.Loader)( /*#__PURE__*/_templateObject(), brownUniversityStyles.colors.white);

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  animation: 750ms ease fadeInUp;\n\n  @keyframes fadeInUp {\n    0% {\n      opacity: 0;\n      transform: translateY(0.75rem);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$1());

exports.Loader = Loader;
exports.Wrapper = Wrapper;
//# sourceMappingURL=drupal-react-courses-shared.cjs.development.js.map
