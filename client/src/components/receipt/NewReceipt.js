import React, { Fragment, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../layout/Landing';
import image from '../../img/Logo.png';
// import { Container, Button, Alert } from 'react-bootstrap';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { TweenMax, Power3 } from 'gsap';

import './NewReceipt.scss';



const NewReceipt = props => {

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const ulItem = useRef(null);

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [])

  return (
    <Fragment>
      <Landing NewReceipt={true} />
      <section className="new-receipt">
        <p>برای شروع یکی از محصولات را انتخاب کنید و بعدی را بزنید</p>
        {/* <div className="products">
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
        </div> */}
      </section>


      {/* <TransitionGroup className="products">
        {showTitle && products.map(item => (
          <CSSTransition timeout={300} classNames="transition">
            <div {...item}>{item.title}</div>
          </CSSTransition>
        ))}
      </TransitionGroup> */}

      <div style={{ paddingTop: '2rem' }}>
        {showButton && (
          <button onClick={() => setShowMessage(true)} className="continue-btn">Show Message</button>
        )}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <div className="alert-section">
            <h3>Animated alert message</h3>
            <p>
              This alert message is being transitioned in and
              out of the DOM.
            </p>
            <button onClick={() => setShowMessage(false)}>Close</button>
          </div>
        </CSSTransition>
        <ul>
          <li ref={el => { ulItem = el }}>mehran</li>
          <li>mahdi</li>
          <li>hadise</li>
        </ul>
      </div>
    </Fragment >
  )
}

NewReceipt.propTypes = {

}

export default NewReceipt;
