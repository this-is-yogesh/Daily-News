import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalArticles] = useState(0);

  const capitalization = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalization(props.category)} - Headlines`;
    updateNews();
     // eslint-disable-next-line
  },[]);

  const updateNews = async () => {
    props.bar(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1b4f56e3cae04f3ca0b94464d77b2034&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url);
    props.bar(30);
    let parsedData = await data.json();
    props.bar(40);  
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    props.bar(100);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    props.bar(10);
    setPage(page + 1);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1b4f56e3cae04f3ca0b94464d77b2034&page=${page + 1}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
    props.bar(100);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        Top {capitalization(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
         <div className="container">
      <div className="row">
        {articles.map((element) => {
          return  <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          
        })}
      </div>
      </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "technology",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
