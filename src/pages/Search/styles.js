import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  width: 100%;
  /* margin-top: 50px; */
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  margin: 20px 0;
  border-radius: 5px;
  background-color: #ddd;
  padding: 0 12px;
  font-size: 20px;
  color: #777;
  font-weight: 700;
`;

export const Title = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '22px'};
  text-align: ${({ align }) => align || 'center'};
  ${({ fullWidth }) => fullWidth && `width: 100%;padding: 0 10px;`}
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '18px'};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const List = styled.FlatList`
  background-color: #fff;
  width: 100%;
  height: 75%;
`;

export const Div = styled.View`
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
  background-color: ${({ color }) => color || '#fff'};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || "100%" };
  height: ${({ height }) => height || 'auto'};
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ hover }) => hover && 10 || 0};
  top: 0;
`;

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

export const RowItem = styled.View`
  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  /* background-color: aliceblue; */
  width: 38%;
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

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#49577a'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100px;
  margin: 0 20px;
  position: absolute;
  ${({ left }) => left && 'left: 0;'}
  ${({ right }) => right && 'right: 0;'}
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#4ac0ff'};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

