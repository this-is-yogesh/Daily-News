import React from 'react'
import loader from '../loader.gif'

 const Spinner = ()=> {

    return (
      <div className="text-center"  >
        <img src={loader} alt="loader" />
      </div>
    )
  //`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ff2f7b4040c24d649dd937c2286d030c&page=${page}&pageSize=${props.pagesize}`;
  //`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ff2f7b4040c24d649dd937c2286d030c&page=${page}&pageSize=${props.pagesize}`;
}

export default Spinner