import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../constants';

export const Container = styled.View`
  flex: 1;
`;

export const Requirements = styled.View`
  flex: 1;
  margin-top: -40px;
  background-color: ${COLORS.lightGray};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding-vertical: ${SIZES.padding}px;
`;
