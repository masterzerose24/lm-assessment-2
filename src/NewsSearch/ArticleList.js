import React, { useState } from 'react';
import { Segment, Loader, List } from 'semantic-ui-react';

const Article = props => {
  const { details } = props;
  const { url, urlToImage, description, title } = details;
  const [isImgLoaded, setImgLoaded] = useState(false)

  const onImageLoad = (e) => {
    setImgLoaded(true);
  };

  return (
    <List.Item style={{ display: 'flex' }}>
      {urlToImage && (
        <img className="ui small image" 
        src={urlToImage} 
        alt={title}
        onLoad={onImageLoad} 
        style={{ display: isImgLoaded ? '' : 'none'}}
        />
      )}
      <List.Content>
        <List.Header>
          <a href={url}>{title}</a>
        </List.Header>
        <List.Description>{description}</List.Description>
      </List.Content>
    </List.Item>
  );
};

const ArticleList = props => {
  const { articles, loading } = props;
  let key = 0;
  return (
    <div>
      <Segment>
        {loading && <Loader></Loader>}
        {!loading && articles.length && (
          <List divided relaxed>
            {articles.map(article => {
              key++;
              return <Article key={key} details={article}></Article>;
            })}
          </List>
        )}
      </Segment>
    </div>
  );
};

export default ArticleList;
