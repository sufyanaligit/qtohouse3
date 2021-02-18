import React from 'react';
//import Loader from '../Loader';
//import InfiniteListView from '../ListItem';
import './FeaturedProjects.scss';

const FeaturedProjects = (props) => {  

  
  return (
    
  <div className='current-projects-container'>
    <div className='demo-infinite-container'>
      <div className='content-wrapper ng-scope render-active' bind-tab-content="true">
        <section className='content-tiles grid'>
            <div className='container'>
              <div className='grid-row'>
                <div className='grid-item grid-item-1-3' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                    <div className='grid-item-content'>
                        <div className='grid-item-content-wrapper bottom left'>
                          <h2 style={{color:'#e09900'}}>Bedford Park Boulevard Station</h2>                                                  
                        </div>
                      </div>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/1.jpg" + ")"}}>                        
                          <div className='grid-item-overlay'></div>
                      </div>    
                      
                    </div>
                </div>
                <div className='grid-item grid-item-1-3' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/2.png" + ")"}}>
                      background 2
                          <div className='grid-item-overlay'>Overlay 2</div>
                      </div>                              
                    </div>
                </div>
                <div className='grid-item grid-item-1-3' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/4.jpg" + ")"}}>
                      background 3
                          <div className='grid-item-overlay'>Overlay 2</div>
                      </div>                              
                    </div>
                </div>                
              </div>

              <div className='grid-row'>
                <div className='grid-item grid-item-1-1'>
                  <div className='grid-item-inner'>
                    <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/3.jpg" + ")"}}>
                      <div className='grid-item-overlay'></div>
                    </div>                  
                  </div>              
                </div>
              </div>

              <div className='grid-row'>
                <div className='grid-item grid-item-1-2 half-height' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/5.jpg" + ")"}}>
                        background 1
                          <div className='grid-item-overlay'>Overlay 1</div>
                      </div>                              
                    </div>
                </div>
                <div className='grid-item grid-item-1-2 half-height' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/6.jpg" + ")"}}>
                      background 2
                          <div className='grid-item-overlay'>Overlay 2</div>
                      </div>                              
                    </div>
                </div>                              
              </div>

              <div className='grid-row grid-row-half'>
                <div className='grid-item grid-item-1-2-half' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/7.jpeg" + ")"}}>
                        background 1
                          <div className='grid-item-overlay'>Overlay 1</div>
                      </div>                              
                    </div>
                </div>
                <div className='grid-item grid-item-1-2-half' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/8.jpg" + ")"}}>
                      background 2
                          <div className='grid-item-overlay'>Overlay 2</div>
                      </div>                              
                    </div>
                </div>                       
              </div>
              <div className='grid-item grid-item-1-2' show-item-mobile=''>
                <div className='grid-item-inner-2' showonmobile='true' content-tile-clickable='true'>
                  <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/9.jpg" + ")"}}>
                  background 3
                      <div className='grid-item-overlay'>Overlay 2</div>
                  </div>                              
                </div>
              </div>

              <div className='grid-row'>
                <div className='grid-item grid-item-1-3' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/10.jpg" + ")"}}>
                        background 1
                          <div className='grid-item-overlay'>Overlay 1</div>
                      </div>                              
                    </div>
                </div>
                <div className='grid-item grid-item-1-3' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/11.jpg" + ")"}}>
                      background 2
                          <div className='grid-item-overlay'>Overlay 2</div>
                      </div>                              
                    </div>
                </div>
                <div className='grid-item grid-item-1-3' show-item-mobile=''>
                    <div className='grid-item-inner' showonmobile='true' content-tile-clickable='true'>
                      <div className='grid-item-background' style={{backgroundImage:"url(" + "http://qtohousemvcweb.qto.house/Qtohouse/ProjectsImages/Featured/12.jpg" + ")"}}>
                      background 3
                          <div className='grid-item-overlay'>Overlay 2</div>
                      </div>                              
                    </div>
                </div>                
              </div>

            </div>
          </section>
        </div>
      </div>      
    </div>
    
  );
};
export default FeaturedProjects;
