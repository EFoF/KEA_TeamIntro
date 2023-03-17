import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top : 20px; 
  display : flex;     
  justify-content : right;

  .container {
    ${({ theme }) => theme.flexCenter};
    flex-direction: row;
    justify-content: space-around;
    background: ${({ theme }) => theme.color.white};
    border-radius: 14px;
    width: 56px;
    height: 100px;

    img {
      cursor: pointer;
      width: 38px;
      height: 38px;
    }
  }
`;
