import styled from "styled-components";
import { theme } from "./constants/theme";

const {
  colors: { primaryColor },
  fonts: { size, lh, family },
  spacing,
} = theme;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing(4)};
  margin: 0 auto;
  padding: ${spacing(5)};
  font-family: ${family};
  font-size: ${size};
  line-height: ${lh};
  color: ${primaryColor};
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: ${spacing(2)};
`;

export const Title = styled.h1`
  display: flex;
  margin: 0;
  font-size: 1.8em;
`;
