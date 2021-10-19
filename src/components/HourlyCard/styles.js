import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
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

export const Text = styled.Text`
  color: ${({ color }) => color || '#000'};
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  text-shadow: 1px 1px 10px #000;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#49577a'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin: 5px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ buttonRow }) => buttonRow && '60px' || '200px'};
`;