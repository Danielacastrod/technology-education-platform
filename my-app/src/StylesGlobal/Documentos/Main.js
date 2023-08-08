import styled from "styled-components";

export const Main = styled.main`
  text-align: center;
  color: #ffffff;
  padding-bottom: 3rem;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  div {
    margin-top: 2rem;
    text-align: start;
    padding: 0 10rem;
  }

  section {
    margin-top: 2rem;
  }

  h2 {
    margin-top: 2rem;
  }

  p {
    margin: 1rem 0;
    color: #ffffff;
  }

  a:hover {
    color: #ffffff;
  }

  li {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 10px;

    h1 {
      font-size: 20px;
    }

    div {
      font-size: 15px;
      margin: 20px;
      padding: 40px;
    }

    section {
      font-size: 15px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }

    ul {
      padding-left: 2rem;
    }

    li {
      font-size: 15px;
    }
  }

  @media (max-width: 430px) {
    font-size: 15px;

    h1 {
      font-size: 16px;
    }

    div {
      font-size: 12px;
      margin: 15px;
      padding: 20px;
    }

    section {
      font-size: 12px;
    }

    h2 {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }

    li {
      font-size: 12px;
    }
  }
`;
