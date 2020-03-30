import styled from 'styled-components';

export default styled.div`
  
  flex-grow:1; /* 4 */
  
  .left-home {
    /* background-color: blue; */
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right-home {
    background-image:url(/img/background/home.jpg);
    background-repeat:no-repeat;
  }

  .start-block {
    width: 100%;
    margin-top: 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .start-btn {
    margin: 20px;
    font-size: 1.5rem;
    width: 35%;
    height: 70px;
    border-radius: 15px;
    border: transparent;
  }

  .advanced-start-btn {

  }
`;
