import styled from 'styled-components';

export default styled.div`

flex-grow:1; /* 4 */


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image:url(/img/background/home.jpg);
background-repeat:no-repeat;
background-size:100% auto;

.left-register-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-form-element{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px white solid;

}

.input {
  height: 3rem;
  width: 20rem;
  border: transparent;
  border: 2px solid gray;
  border-radius: 5px;
  padding-left: 8px;
  margin: .5rem;
}

.input-container {
  padding: 0 5px;
}

.login-submit-button{
  height: 3rem;
  width: 15rem;
  color: white;
  font-weight: bold;
  background-color: orange;
  border: none;
  margin: 2rem;
  border-radius: 5px;
}

.split {
  border: .5px white solid;
  width: 10%;
  margin: 1.2rem;
}


`;
