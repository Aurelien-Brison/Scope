import { connect } from 'react-redux';

import { changeValue, logIn } from 'src/actions/auth';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  // email: state.auth.email,
  // password: state.auth.password,
  token: state.auth.token,
  loggedMessage: state.auth.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  // changeValue: (name, value) => {
  //   dispatch(changeValue(name, value));
  // },
  // handleLogin: () => {
  //   dispatch(logIn());
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
