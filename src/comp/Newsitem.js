import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsurl,descriptionStyle}=this.props;
    return (
      <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                <img  height="150" src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdB-WnuSsZm06UzWouLBPpEp7-Q6CUO5tsxA&usqp=CAU" :imgurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 style={{height: '50px', 
      overflow: 'hidden'}} className="card-title">{title}...</h5>
                    <p style={descriptionStyle} className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
