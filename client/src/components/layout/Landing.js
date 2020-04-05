import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css';
import CalculatorIcon from '../../img/Calculator-icon.png';
import NewReceipt from '../receipt/NewReceipt';
import ListReceipt from '../receipt/ListReceipt';


const Landing = ({ NewReceipt, ListReceipt, isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }


  return (
    <Fragment>
      <section className="landing">
        <h2><img src={CalculatorIcon} alt="" />ماشین‌حساب</h2>
        <div className="sub-landing">
          <ul className="receipt-actions">
            <li>
              <Link className={NewReceipt ? 'active' : ''} to="/newReceipt" ><span className={`radio-btn icon-Home ${NewReceipt ? 'active' : ''}`}></span>ایجاد صورتحساب جدید</Link></li>
            <li ><Link className={ListReceipt ? 'active' : ''} to="/listReceipt"><span className={`radio-btn icon-Home ${ListReceipt ? 'active' : ''}`}></span>لیست صورتحساب‌ها</Link></li>
          </ul>
        </div>
      </section>
    </Fragment >
  )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
