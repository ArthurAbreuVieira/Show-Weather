import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,.8);
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Title = styled.Text`
  color: ${({ color }) => color || '#000'};;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '18px'};
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 50px;
  width: 60%;
  text-align: center;
  text-shadow: 1px 1px 5px #000;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#4ac0ff'};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 50px;
  padding-top: 15px;
  margin-top: 30px;
`;

export const Card = styled.View`
  width: 90%;
  /* height: 250px; */
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #ededed;
  padding: 15px;
  margin-bottom: 15px;
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