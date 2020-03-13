import React from 'react';
import { Message } from 'semantic-ui-react';

const ResultMessage = (props) => {
  const { resultCount } = props;
  return ( 
    <Message>
      <Message.Header>Search Results!</Message.Header>
      <p>
        Found {resultCount || 0} articles.
      </p>
    </Message>
  );
}

export default ResultMessage;
