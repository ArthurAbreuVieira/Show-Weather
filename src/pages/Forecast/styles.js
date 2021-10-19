import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#444":"#ededed"};
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

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ card }) => (card && theme.t==='dark'?"#222":"#ededed") || theme.t==='dark'?"#000":"#fff"};
  border-radius: ${({ card }) => card && '20px' || 0};
  padding: ${({ card }) => card && '10px 0px' || 0};
  width: ${({ card }) => card && '90%' || '100%'};
`;

export const RowItem = styled.View`
  flex-direction: ${({ column }) => column && 'column' || 'row'};
  justify-content: ${({ center }) => center && 'center' || 'space-between'};
  align-items: ${({ center }) => center && 'center' || 'flex-start'};
  /* background-color: aliceblue; */
  width: 38%;
`;

export const Text = styled.Text`
  color: ${({ color }) => color || theme.t==='dark'?"#fff":"#000"};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
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

