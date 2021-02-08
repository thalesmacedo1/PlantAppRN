/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../constants';

export const Container = styled.View`
  flex: 1;
`;

export const NewPlants = styled.View`
  height: 30%;
  background-color: ${COLORS.white};
`;

export const InnerContainer = styled.View`
  flex: 1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${COLORS.primary};
`;

export const InnerContainer2 = styled.View`
  margin-top: 12px;
  margin-horizontal: ${SIZES.padding}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FlatWrapper = styled.View`
  margin-top: ${SIZES.base}px;
`;

export const TextLabel = styled.Text`
  color: white;
  font-size: 16px;
`;

export const FlatListItemLabel = styled.View`
  position: absolute;
  bottom: 17%;
  right: 0;
  background-color: ${COLORS.primary};
  padding-horizontal: ${SIZES.base}px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 20px;
`;

export const ItemLabelText = styled.Text`
  color: ${COLORS.white};
`;

export const SessionWrapper = styled.View`
  height: 50%;
  background-color: ${COLORS.lightGray};
`;

export const TodaysShare = styled.View`
  flex: 1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${COLORS.white};
`;

export const TSHeader = styled.View`
  margin-top: ${SIZES.font}px;
  margin-horizontal: ${SIZES.padding}px;
`;
