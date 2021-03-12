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

export const SingleRequirementWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${SIZES.padding}px;
  padding-horizontal: ${SIZES.padding}px;
`;

export const Title = styled.Text`
  padding-horizontal: ${SIZES.padding}px;
  color: ${COLORS.secondary};
`;

export const RequirementsItems = styled.View`
  flex: 2.5;
  margin-top: ${SIZES.padding}px;
  padding-horizontal: ${SIZES.padding}px;
  justify-content: space-around;
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${COLORS.primary};
  padding-horizontal: ${SIZES.padding}px;
`;

export const DetailHeader = styled.View`
  position: absolute;
  top: 20px;
  left: ${SIZES.padding}px;
  right: ${SIZES.padding}px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;
