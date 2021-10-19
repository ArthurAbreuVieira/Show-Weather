import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 210px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color, theme }) => color || theme.t==='dark'?"#444":"#ededed"};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Temperature = styled.Text`
  font-size: 55px;
  color: ${({ theme }) => theme.t==='dark'?"#fff":"#000"};
  font-weight: 700;
  margin-left: 18px;
`;

export const Date = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.t==='dark'?"#fff":"#000"};
  font-weight: 700;
`;

export const Location = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.t==='dark'?"#fff":"#000"};
  font-weight: 500;
`;