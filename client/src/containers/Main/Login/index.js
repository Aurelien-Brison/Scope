import { connect } from 'react-redux';

import { changeValue, logIn } from 'src/actions/auth';

import Login from 'src/components/Main/Login';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  redirectUrl: state.auth.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeValue(name, value));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
