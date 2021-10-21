import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
`;

export const List = styled.FlatList`
  background-color: ${({ theme }) => theme.t==='dark'?"#222":"#fff"};
  width: 100%;
  padding-top: 10px;
`;

export const Text = styled.Text`
  color: ${({ color, theme }) => color?color:theme.t==='dark'?"#777":"#777"};
  font-size: 18px;
  font-weight: bold;
  padding: 0 0 20px 0;
  background-color: ${({ theme }) => theme.t==='dark'?'#444':'#ededed'};
  width: 100%;
  text-align: center;
  /* border-bottom: 2px solid #888; */
`;