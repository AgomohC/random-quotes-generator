import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const SingleQuote = ({ author, quote, fetchData }) => {
  console.log(typeof fetchData);
  return (
    <section className="container">
      <div className="row">
        <div className="col d-flex align-items-center height">
          <article className="col-md-6 mx-auto p-5 shadow-lg bg-light rounded">
            <blockquote className="mb-3 blockquote h2 text-primary  d-flex">
              <p className="h5">
                <FaQuoteLeft className="mr-3" />
                {quote}
              </p>
            </blockquote>
            <p className="text-primary text-right">- {author}</p>
            <div className="btn-container row mt-4">
              {/* 
                todo: add onclick and style buttons
                */}
              <div className="social-btns col-6 ">
                <a
                  href={`https://twitter.com/intent/tweet?text=${quote}\n
                -${author}
                `}
                  className="btn bg-primary rounded"
                  target="blank"
                >
                  <FaTwitter className="h2 text-light" />
                </a>
              </div>
              {/* 
              todo: Add onclick
              */}
              <button
                className="col-6 btn text-capitalize text-light bg-primary"
                onClick={fetchData}
              >
                new quote
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleQuote;
