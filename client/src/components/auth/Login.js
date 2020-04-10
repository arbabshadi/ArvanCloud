import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../action/auth';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Button, Alert } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';

import './Login.css';

const Login = ({ login, isAuthenticated }) => {

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);

    //Example of request with axios in react without Redux
    // const newUser = {
    //   email,
    //   password
    // }
    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-auth-token': ''
    //     }
    //   };
    //   const body = JSON.stringify(newUser);
    //   const res = await axios.post('/api/users/login', body, config);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data);
    // }
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
          <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minlength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>

      <Container style={{ paddingTop: '2rem' }}>
        <h1>Hi my friends</h1>
        {showButton && (
          <Button
            onClick={() => setShowMessage(true)}
            size="lg"
          >
            Show Message
          </Button>
        )}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="login"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Alert
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>
              Animated alert message
        </Alert.Heading>
            <p>
              This alert message is being transitioned in and
              out of the DOM.
        </p>
            <Button onClick={() => setShowMessage(false)}>
              Close
        </Button>
          </Alert>
        </CSSTransition>
      </Container>
    </Fragment>
  )
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);