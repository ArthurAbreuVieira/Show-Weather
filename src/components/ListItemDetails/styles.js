import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 345px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};
  font-size: 20px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ card, theme }) => card && theme.t==='dark'?"#222":"#fff"};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ card }) => card && '10px 0px' || 0};
  margin: ${({ card }) => card && '10px 0px' || 0};
  width: ${({ card }) => card && '90%' || '100%'};
`;

export const RowItem = styled.View`

  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  width: ${({ large }) => large && '90%' || '38%'};
`;