import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import {
  TitleContainer,
  CollectionPreviewContainer,
  PreviewContainer
} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, match, location, history }) => (
  <CollectionPreviewContainer>
    <TitleContainer
      onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
