import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, idx)=>{
              return(
                <div key={idx} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a target="_blank" href="https://haoxianz.github.io/recipe-search/">
                      <img alt="Screenshot of the App" 
                      src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a target="_blank" href={item.link}>Live Demo</a>
                  <br/>
                  <a target="_blank" href={item.repo}>Repo</a>

                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}