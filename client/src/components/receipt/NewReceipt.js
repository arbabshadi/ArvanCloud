import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../layout/Landing';
import './NewReceipt.css';

const NewReceipt = props => {

  return (
    <Fragment>
      <Landing NewReceipt={true} />
      <section className="new-receipt">
        <p>برای شروع یکی از محصولات را انتخاب کنید و بعدی را بزنید</p>
      </section>
    </Fragment>
  )
}

NewReceipt.propTypes = {

}

export default NewReceipt
