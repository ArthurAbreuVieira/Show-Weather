import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 50px;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};
  font-size: 15px;
  font-weight: bold;
`;