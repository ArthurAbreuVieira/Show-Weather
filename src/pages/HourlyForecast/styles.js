import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  
  background-color: #fff;
  /* margin-top: 50px; */
`;

export const List = styled.FlatList`
  background-color: #fff;
  width: 100%;
  padding-top: 10px;
`;

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

export const Title = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ card }) => card && '#ebebeb' || '#fff'};
  border-radius: ${({ card }) => card && '20px' || 0};
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
  color: ${({ color }) => color || '#777'};
  font-size: 18px;
  font-weight: bold;
  padding: 0 0 20px 0;
  background-color: #ededed;
  width: 100%;
  text-align: center;
  /* border-bottom: 2px solid #888; */
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#49577a'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  padding-top: 15px;
  margin: 20px 0;
`;

