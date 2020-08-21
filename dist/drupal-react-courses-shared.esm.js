import styled from 'styled-components';
import { Loader as Loader$1 } from 'brown-university-components';
import { colors } from 'brown-university-styles';

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

export { Loader, Wrapper };
//# sourceMappingURL=drupal-react-courses-shared.esm.js.map
