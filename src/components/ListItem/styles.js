import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 345px;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const List = styled.FlatList`
  background-color: #fff;
  width: 100%;
`;

export const MainRow = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#49577a'};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  padding-top: 15px;
  margin: 20px 0;
`;

export const Title = styled.Text`
  color: ${({ color }) => color || '#000'};;
  font-size: 35px;
  font-weight: bold;
`;

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

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

