import { gql } from "@apollo/client";

const termsQuery = gql`
  {
    terms {
      code
      description
    }
  }
`;

export default termsQuery;
