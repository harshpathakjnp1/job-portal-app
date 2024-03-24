import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  const {
    jobTitle,
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <div>
      <section className="card">
        <Link to="/" className="flex gap-4 flex-col sm:flex-row items-start">
          <img src={companyLogo} alt="Logo" />
          <div>
            <h4 className="text-primary mb-1">{companyName}</h4>
            <h3 className="font-semibold text-lg mb-2">{jobTitle}</h3>

            <div className="flex text-primary/70 text-base flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
                {employmentType}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
                {minPrice}-{maxPrice}K
              </span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
                {employmentType}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
                {postingDate}
              </span>
            </div>
            <p className="text-base text-primary/70">{description}</p>
          </div>
        </Link>
      </section>
    </div>
  );
};
