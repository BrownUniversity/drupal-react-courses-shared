import styled from "styled-components";
import { Loader as BrownLoader } from "brown-university-components";
import { colors } from "brown-university-styles";

const Loader = styled(BrownLoader)`
  text-align: center;

  #cover {
    stroke: ${colors.white};
  }
`;

export default Loader;
