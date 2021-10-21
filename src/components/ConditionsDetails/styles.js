import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ card }) => card && '10px 0px' || 0};
  width: ${({ card }) => card && '90%' || '100%'};
`;

export const RowItem = styled.View`
  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  width: 38%;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;