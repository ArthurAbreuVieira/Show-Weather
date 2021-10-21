import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: ${({ screenWidth }) => (screenWidth*95/100)+'px'};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#444":"#ebebeb"};
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const MainRow = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#0051ba'};
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
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};
  font-size: 35px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#fff":"#000"};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;