import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../layout/Landing';
import image from '../../img/Logo.png';
import { Container, Button, Alert } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';

import './NewReceipt.css';



const NewReceipt = props => {

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Fragment>
      <Landing NewReceipt={true} />
      <section className="new-receipt">
        <p>برای شروع یکی از محصولات را انتخاب کنید و بعدی را بزنید</p>
        <div className="products">
          <ul>
            <li>DNS ابری</li>
            <li>شبکه توزیع محتوا</li>
            <li>امنیت‌ابری</li>
            <li>رایانش‌ابری</li>
            <li>فضای‌ابری</li>
            <li>ویدیو</li>
            <li>پخش‌زنده</li>
            <li>تبلیغات</li>
          </ul>
        </div>
      </section>
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
          classNames="alert"
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
    </Fragment >
  )
}

NewReceipt.propTypes = {

}

export default NewReceipt;
