
import React from 'react'

const NewsItem = (props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">

        <div style={{ display: 'flex',
                      justifyContent: 'flex-end',
                      position: 'absolute',
                      right: 0}}>
          <span className="badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source} </span> 
        </div>

          <img src={!imageUrl?"https://images.unsplash.com/photo-1660995710465-71940611fc35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=60":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author ?  author: "Unknown"} on {new Date(date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem