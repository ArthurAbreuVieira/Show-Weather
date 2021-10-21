import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#444":"#ededed"};
`;

export const Section = styled.View`
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const Title = styled.Text`
  color: ${({ color, theme }) => color || theme.t==='dark'?"#fff":"#000"};;
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color || '#0051ba'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  padding-top: 15px;
  margin: 20px 0;
`;