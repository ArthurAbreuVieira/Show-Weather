import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 230px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  width: 90px;
  height: 180px;
  background-color: ${({ color }) => color || '#fff'};
  border-radius: 20px;
  margin: 0 8px;
`;

export const HalfBG = styled.View`
  background-color: ${({ color }) => color || '#bbb'};
  width: 100%;
  height: 50%;
  border-top-left-radius: ${({ tlr }) => tlr || 0};
  border-top-right-radius: ${({ trr }) => trr || 0};
  border-bottom-left-radius: ${({ blr }) => blr || 0};
  border-bottom-right-radius: ${({ brr }) => brr || 0};
  position: absolute;
  top: ${({ position }) => position==="top"?0:'50%'};
  z-index: -1;
`;

export const Content = styled.View`
  z-index: 2;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Hour = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const Temperature = styled.Text`
  color: #fff;
  font-size: 20px;
`;