import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  padding: 8px;
`;

export const OptionText = styled.Text`
  font-size: 18px;
  color: ${({ focused }) => focused ? '#000' : '#bbb'};
  font-weight: 700;
  margin: 0 8px;
`;