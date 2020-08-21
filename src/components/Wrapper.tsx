import styled from "styled-components";

const Wrapper = styled.div`
  animation: 750ms ease fadeInUp;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(0.75rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Wrapper;
