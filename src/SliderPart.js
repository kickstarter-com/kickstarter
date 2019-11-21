import React from 'react';
import Slider from 'infinite-react-carousel';
import './SliderPart.css'
class SliderPart extends React.Component {
  render() {
    const settings =  {
      arrows: false,
      centerPadding: 10,
      slidesToShow: 5
    };
    return (
      <div>
        
        <div className="slider-section"> 
        <div>
          <p className="slider-title">TAKING OFF</p>
        </div> 
        <Slider { ...settings } className="slider">
          <div className="slider-unit-2">
            <div><img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/190/512/cd869836057e305fd26e2dc9f5337535_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1573582074&auto=format&frame=1&q=92&s=30ef75a052b256db29b91f568463d3f3"></img></div>
            <div className="mark-div"></div>
            <div>
            <h3>The Other View: Drone Photography Collection Book</h3>
            </div>
            <div>
              <p>Be Gay, Do Comics will be 250 pages of queer history, memoir and satire from The Nib, printed and shipped right to your doorstep.</p>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">Austen Gray</a>
             </div>
            </div>
          </div>
          <div className="slider-unit-2">
            <div><img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/190/512/cd869836057e305fd26e2dc9f5337535_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1573582074&auto=format&frame=1&q=92&s=30ef75a052b256db29b91f568463d3f3"></img></div>
            <div className="mark-div"></div>
            <div>
            <h3>The Other View: Drone Photography Collection Book</h3>
            </div>
            <div>
              <p>Be Gay, Do Comics will be 250 pages of queer history, memoir and satire from The Nib, printed and shipped right to your doorstep.</p>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">Austen Gray</a>
             </div>
            </div>
          </div>
          <div className="slider-unit-2">
            <div><img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/190/512/cd869836057e305fd26e2dc9f5337535_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1573582074&auto=format&frame=1&q=92&s=30ef75a052b256db29b91f568463d3f3"></img></div>
            <div className="mark-div"></div>
            <div>
            <h3>The Other View: Drone Photography Collection Book</h3>
            </div>
            <div>
              <p>Be Gay, Do Comics will be 250 pages of queer history, memoir and satire from The Nib, printed and shipped right to your doorstep.</p>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">Austen Gray</a>
             </div>
            </div>
          </div>
          <div className="slider-unit-2">
            <div><img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/190/512/cd869836057e305fd26e2dc9f5337535_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1573582074&auto=format&frame=1&q=92&s=30ef75a052b256db29b91f568463d3f3"></img></div>
            <div className="mark-div"></div>
            <div>
            <h3>The Other View: Drone Photography Collection Book</h3>
            </div>
            <div>
              <p>Be Gay, Do Comics will be 250 pages of queer history, memoir and satire from The Nib, printed and shipped right to your doorstep.</p>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">Austen Gray</a>
             </div>
            </div>
          </div>
          <div className="slider-unit-2">
            <div><img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/190/512/cd869836057e305fd26e2dc9f5337535_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1573582074&auto=format&frame=1&q=92&s=30ef75a052b256db29b91f568463d3f3"></img></div>
            <div className="mark-div"></div>
            <div>
            <h3>The Other View: Drone Photography Collection Book</h3>
            </div>
            <div>
              <p>Be Gay, Do Comics will be 250 pages of queer history, memoir and satire from The Nib, printed and shipped right to your doorstep.</p>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">Austen Gray</a>
             </div>
            </div>
          </div>
          <div className="slider-unit-2">
            <div><img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/190/512/cd869836057e305fd26e2dc9f5337535_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1573582074&auto=format&frame=1&q=92&s=30ef75a052b256db29b91f568463d3f3"></img></div>
            <div className="mark-div"></div>
            <div>
            <h3>The Other View: Drone Photography Collection Book</h3>
            </div>
            <div>
              <p>Be Gay, Do Comics will be 250 pages of queer history, memoir and satire from The Nib, printed and shipped right to your doorstep.</p>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">Austen Gray</a>
             </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}

export default SliderPart;