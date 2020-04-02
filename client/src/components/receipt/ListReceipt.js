import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../layout/Landing';

const ListReceipt = props => {
  return (
    <Fragment>
      <Landing />
      List of receipt
    </Fragment>
  )
}

ListReceipt.propTypes = {

}

export default ListReceipt
