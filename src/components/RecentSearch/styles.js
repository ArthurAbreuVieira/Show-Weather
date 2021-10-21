import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({ screenWidth }) => (screenWidth*96/100)+'px'};
  height: 135px;
  justify-content: center;
  align-items: center;
  /* background-color: #242cffaa; */
  background-color: ${({ theme }) => theme.t==='dark'?"#444":"#ededed"};
  border: 2px solid ${({error}) => error?"orangered":"#4aaaff"};
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${({ color, theme }) => color ? color : theme.t==='dark'?"#fff":"#000"};;
  font-size: 35px;
  font-weight: bold;
`;

export const Div = styled.View`
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
  background-color: ${({ color, theme }) => color ? color : theme.t==='dark'?"#fff":"#000"};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || "100%" };
  height: ${({ height }) => height || 'auto'};
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ hover }) => hover && 10 || 0};
  top: -5px;
`;

export const HalfBG = styled.View`
  background-color: ${({ color, theme }) => color ? color : theme.t==='dark'?"#626262":"#cbcbcb"};
  width: 98%;
  height: 44%;
  border-top-left-radius: ${({ tlr }) => tlr || 0};
  border-top-right-radius: ${({ trr }) => trr || 0};
  border-bottom-left-radius: ${({ blr }) => blr || 0};
  border-bottom-right-radius: ${({ brr }) => brr || 0};
  border: 2px solid ${({ theme }) => theme.t==='dark'?"#222":"#888"};
  border-bottom-width: 0px;
  position: absolute;
  bottom: ${({ position }) => position==="bottom"?0:'50%'};
  z-index: -1;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#eee":"#777"};
  font-size: ${({ size }) => size || '18px'};
  font-weight: bold;
  margin-bottom: 15px;
`;