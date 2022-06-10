import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 15px;
  border-left-width: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.View`
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
  border-radius: 10px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BadgeLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 6;
`;
