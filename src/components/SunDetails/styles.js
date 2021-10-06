import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: flex-start;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ color }) => color || '#ebebeb'};
  border-radius: 20px;
  padding: ${({ card }) => card && '10px 0px' || 0};
  width: ${({ card }) => card && '90%' || '100%'};
`;

export const RowItem = styled.View`
  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  /* background-color: aliceblue; */
  width: 38%;
`;

export const Text = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;