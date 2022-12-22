import React from 'react'

const NewsItem = (props)=> {

    let {title, description, imageUrl, newsUrl, author , date, source} = props;
    return (
    <>
    <div className="card my-3" >
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '86%', zIndex:1}}>
 {source}
  </span>
  <img src={!imageUrl? "https://media.cnn.com/api/v1/images/stellar/prod/220621095808-elon-musk-1010-file.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown Source":author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
    </>
    )
  
}

export default NewsItem 