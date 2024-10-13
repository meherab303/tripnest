''
import React from 'react';


const Banner = () => {
    return (
        <div
        className="hero h-[700px]"
        style={{
          backgroundImage:`url("https://live.staticflickr.com/2738/4195504888_edb9cc9fb6_b.jpg")`,
        }}>
        <div ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;