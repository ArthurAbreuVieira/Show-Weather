import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  margin: 20px 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.t==='dark'?"#666":"#ddd"};
  padding: 0 12px;
  font-size: 20px;
  color: ${({ theme }) => theme.t==='dark'?"#ddd":"#777"};
  font-weight: 700;
`;

export const Title = styled.Text`
  color: ${({ color, theme }) => color || theme.t==='dark'?"#fff":"#000"};
  font-size: ${({ size }) => size || '22px'};
  text-align: ${({ align }) => align || 'center'};
  ${({ fullWidth }) => fullWidth && `width: 100%;padding: 0 10px;`}
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color || theme.t==='dark'?"#fff":"#000"};
  font-size: ${({ size }) => size || '18px'};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const List = styled.FlatList`
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
  width: 100%;
  height: 75%;
`;

export const Div = styled.View`
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
  background-color: ${({ color, theme }) => color || theme.t==='dark'?"#222":"#fff"};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || "100%" };
  height: ${({ height }) => height || 'auto'};
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ hover }) => hover && 10 || 0};
  right: ${({ right }) => right || 'auto'};
  top: ${({ top }) => top || 0};
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ color, theme }) => color ? color : theme.t==='dark'?"#0051ba":"#4ac0ff"};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: transparent;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  top: -5px;
`;