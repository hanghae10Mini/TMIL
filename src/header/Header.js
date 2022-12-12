import styled from 'styled-components';

function Header() {
  return (
    <StHeader>
      <StText>TMIL</StText>
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 80px;
  width: 1920px;
  padding-left: 20px;
  font-size: 30px;
  background-color: #c9eff9;
  display: table-cell;
  vertical-align: middle;
`;

const StText = styled.p`
  margin: 0px;
`;

export default Header;
