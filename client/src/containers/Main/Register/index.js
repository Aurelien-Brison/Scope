import { connect } from 'react-redux';

import { changeValue, register } from 'src/actions/auth';

import Register from 'src/components/Main/Register';

const mapStateToProps = (state) => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  email: state.auth.email,
  password: state.auth.password,
  verifiedPassword: state.auth.verifiedPassword,
  validateForm: state.auth.validateForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeValue(name, value));
  },
  register: () => {
    dispatch(register());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
