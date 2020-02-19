import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/checkout-item/checkout-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
  <div className='collection-page'>
    <h2>Colllection Page</h2>
  </div>
);

// ownProps is props of the component that we're wrapping in connect
// necessary because unlike other selectors, this selector needs a part of the state depending on the URL parameter

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
