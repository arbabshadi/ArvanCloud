import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../layout/Landing';

const NewReceipt = props => {

  return (
    <Fragment>
      <Landing />
      New Receipt here!
    </Fragment>
  )
}

NewReceipt.propTypes = {

}

export default NewReceipt
