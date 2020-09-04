import gql from "graphql-tag";

const termsQuery = gql`
  {
    terms {
      code
      description
    }
  }
`;

export default termsQuery;
