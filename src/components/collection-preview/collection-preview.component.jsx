import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import TitleContainer from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, match, location, history }) => (
  <div className='collection-preview'>
    <TitleContainer
      onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
