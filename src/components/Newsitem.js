import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl, date}=this.props
    return (
      <>
      <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imageUrl?imageUrl:"https://cdn.abcotvs.com/dip/images/13309224_052723-kgo-state-farm-img.jpg?w=1600"} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        {/* <h5 className="card-title">{title?title:"No title"}</h5> */}
        <a href={newsUrl} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); window.open(newsUrl, '_blank'); }}>
  <h5 className="card-title">{title ? title : "No title"}</h5>
</a>

        <p className="card-text">{description?description:"No heading"}</p>
        <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>
      </div>
    </div>
  </div>
</div>
      </>
    )
  }
}

export default Newsitem