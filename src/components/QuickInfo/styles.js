import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color || 'transparent'};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Float = styled.Text`
  font-size: 55px;
  color: #000;
  font-weight: 700;
  margin-left: 18px;
`;

export const Date = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 700;
`;

export const Location = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 500;
`;