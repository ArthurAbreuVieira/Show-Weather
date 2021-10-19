import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
`;

export const Card = styled.View`
  width: 90%;
  ${({ height }) => `height: ${height};`}
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.t==='dark'?"#444":"#ededed"};
  padding: 15px;
  margin-bottom: 15px;
`;

export const Div = styled.View`
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
  background-color: ${({ color, theme }) => color?color:theme.t==='dark'?"#000":"#fff"};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || "100%" };
  height: ${({ height }) => height || 'auto'};
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ hover }) => hover && 10 || 0};
  top: 0;
`;

export const Header = styled.View`
  background-color: #fff;
  position: absolute;
  top: 0;
  width: 100%;
  height: 110px;

  justify-content: center;
  align-items: center;
`;

export const Section = styled.View`
  background-color: ${({ theme }) => theme.t==='dark'?"#000":"#fff"};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};;
  font-size: 25px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};
  font-size: ${({ size }) => size || '18px'};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color, theme }) => color ? color : theme.t==='dark'?"#0051ba":"#4ac0ff"};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 50px;
  padding-top: 15px;
`;

