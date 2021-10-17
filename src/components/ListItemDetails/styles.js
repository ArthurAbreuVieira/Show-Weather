import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 345px;
  justify-content: flex-start;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 20px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: 20px;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: ${({ color }) => color || '#000'};;
  font-size: 22px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ card }) => card && '#fff' || '#ebebeb'};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ card }) => card && '10px 0px' || 0};
  margin: ${({ card }) => card && '10px 0px' || 0};
  width: ${({ card }) => card && '90%' || '100%'};
`;

export const RowItem = styled.View`

  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  /* background-color: aliceblue; */
  width: ${({ large }) => large && '90%' || '38%'};
`;