import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';

function Topbar({ title, buttonName }) {
  return (
    <StTopbar>
      <StArrowBackIcon fontSize="50px" />
      {title}
      <StButton>{buttonName}</StButton>
    </StTopbar>
  );
}

const StTopbar = styled.div`
  height: 60px;
  padding: 20px;
  border-bottom: solid 5px #07a4b5;
  font-size: 42px;
`;

const StArrowBackIcon = styled(ArrowBackIcon)`
  float: left;
  display: table-cell;
  vertical-align: middle;
  font-size: 50px;
`;

const StButton = styled.button`
  height: 50px;
  width: 120px;
  border: 0px;
  border-radius: 10px;
  background-color: #c9eff9;
  font-size: 28px;
  float: right;
`;

export default Topbar;
