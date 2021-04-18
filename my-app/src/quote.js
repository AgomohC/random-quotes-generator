import React from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";

const SingleQuote = (quotes) => {
  const { author, quote } = quotes;

  return (
    <section className="container">
      <div className="row">
        <div className="col d-flex align-items-center height">
          <article className="col-md-6 bg-primary mx-auto p-5">
            <h2 className="mb-3">{quote}</h2>
            <h5>{author}</h5>
            <div className="btn-container">
              <div className="social-btns">
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaTumblr />
                </a>
              </div>
              <button>new quote</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleQuote;
