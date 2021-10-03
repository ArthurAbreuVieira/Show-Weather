import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #ebebeb;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  background-color: #fff;
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

export const Title = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: bold;
`;

export const Card = styled.View`
  background-color: #0055ff;
  width: 95%;
  height: 200px;
  border-radius: 20px;
  margin-top: 25px;
`;