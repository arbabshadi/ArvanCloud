import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css';
import CalculatorIcon from '../../img/Calculator-icon.png';


const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <section className="landing">
      <h2><img src={CalculatorIcon} alt="" />ماشین‌حساب</h2>
      <div className="sub-landing">
        <ul className="receipt-actions">
          <li><Link to="/newReceipt">ایجاد صورتحساب جدید</Link></li>
          <li><Link to="/listReceipt">لیست صورتحساب‌ها</Link></li>
        </ul>
      </div>
    </section>
  )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
