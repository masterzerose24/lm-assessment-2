import React, { Component } from 'react';
import axios from 'axios';
import FiltersControl from './FiltersControl';
import ResultMessage from './ResultMessage';
import { CONTROL, API_KEY } from './Config';
import ArticleList from './ArticleList';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export class NewsSearch extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchKey: '',
      sourceType: 'top-headlines',
      country: '',
      resultCount: 0,
      articles: []
    };
  }

  async searchArticles() {
    const { searchKey: q, sourceType, country } = this.state;
    this.setState({ articlesLoading: true });
    const finalCountry = sourceType === 'everything' ? '' : country;
    await axios
      .get(`http://newsapi.org/v2/${sourceType}`, {
        params: {
          country: finalCountry,
          q,
          apiKey: API_KEY
        },
        cancelToken: this.CancelToken
      })
      .then(res => {
        const { data } = res;
        console.log('res', res)
        this.setState({
          articlesLoading: false,
          resultCount: data.articles.length,
          articles: data.articles
        });
      })
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Cancelled call');
        }
        console.log('', thrown);
      });
  }

  onControlChange = async (key, data) => {
    await this.setState({ [key]: data });
    source.cancel();
    const { searchKey, sourceType, country } = this.state;
    const isParamsComplete = searchKey && sourceType && country;
    isParamsComplete && this.searchArticles();
  };

  render() {
    return (
      <div>
        <FiltersControl
          filters={CONTROL}
          action={this.onControlChange}
          parentState={this.state}
        ></FiltersControl>
        <ResultMessage resultCount={this.state.resultCount}></ResultMessage>
        { !!this.state.resultCount && <ArticleList
          articles={this.state.articles}
          loading={this.state.articlesLoading}
        ></ArticleList>}
      </div>
    );
  }
}

export default NewsSearch;
