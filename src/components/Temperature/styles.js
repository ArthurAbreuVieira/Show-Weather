import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  width: 90%;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-evenly'};
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#444":"#ebebeb"};
  border-radius: 20px;
  padding: 5px 0 0 0;
  width: 49%;
`;

export const RowItem = styled.View`
  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color ? color : theme.t==='dark'?"#fff":"#000"};
  font-size: ${({ size }) => size || '18px'};
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;