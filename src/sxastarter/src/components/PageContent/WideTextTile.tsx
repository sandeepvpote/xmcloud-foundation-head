import React from 'react';
import { Field, Text, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
}

type WideTextTileProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const WideTextTile = (props: WideTextTileProps): JSX.Element => (
  <div>
    <h5 className="section-subtitle lh-2 ls-md font-weight-normal">
      <Text field={props.fields.Heading} />
    </h5>
    <h3 className="section-title lh-1 font-weight-bold">
      <Text field={props.fields.Title} />
    </h3>
    <p className="section-desc">
      <Text field={props.fields.Description} />
    </p>
  </div>
  /*<div className="css-gyrmn">
    <section className="about-section pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-10 mb-lg-4">
            <h5 className="section-subtitle lh-2 ls-md font-weight-normal">01. What We Do</h5>
            <h3 className="section-title lh-1 font-weight-bold">
              Provide perfect and practical services
            </h3>
            <p className="section-desc">
              Lorem quis bibendum auctar, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            </p>
          </div>
          <div className="col-lg-8 ">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="counter text-center text-dark">
                  <div className="count-to finished">
                    <span>35</span>
                    <button className="d-none">Start</button>
                  </div>
                  <h5 className="count-title font-weight-bold text-body ls-md">Business Year</h5>
                  <p className="text-grey mb-0">
                    Lorem ipsum dolor sitamet, conctetur adipisci elit. viverra erat orci.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="counter text-center text-dark">
                  <div className="count-to finished">
                    <span>50</span>
                    <button className="d-none">Start</button>
                  </div>
                  <h5 className="count-title font-weight-bold text-body ls-md">Design Brands</h5>
                  <p className="text-grey mb-0">
                    Lorem ipsum dolor sitamet, conctetur adipisci elit. viverra erat orci.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="counter text-center text-dark">
                  <div className="count-to finished">
                    <span>130</span>
                    <button className="d-none">Start</button>
                  </div>
                  <h5 className="count-title font-weight-bold text-body ls-md">Team Members</h5>
                  <p className="text-grey mb-0">
                    Lorem ipsum dolor sitamet, conctetur adipisci elit. viverra erat orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>*/
);

export default WideTextTile;
