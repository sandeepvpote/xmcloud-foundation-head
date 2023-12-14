import React from 'react';
import { Field, Text, ImageField, RichText, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
  Statement: Field<string>;
  Image: ImageField;
}

type HeroCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeroCardProps): JSX.Element => {
  return (
    <section className="customer-section pb-10">
      <div className="row align-items-center">
        <div className="col-md-7 mb-4">
          <figure>
            <span
              className=" lazy-load-image-background opacity lazy-load-image-loaded"
              style={{ color: 'transparent', display: 'inline-block' }}
            >
              <Image field={props.fields.Image} className="banner-radius" />
            </span>
          </figure>
        </div>
        <div className="col-md-5 mb-4">
          <h5 className="section-subtitle lh-2 ls-md font-weight-normal">
            <Text field={props.fields.Heading} />
          </h5>
          <h4>
            <Text field={props.fields.Statement} />
          </h4>
          <h3 className="section-title lh-1 font-weight-bold">
            <Text field={props.fields.Title} />
          </h3>

          <RichText className="section-desc text-grey" field={props.fields.Description} />

          <a
            className="btn btn-dark btn-link btn-underline ls-m"
            href="/react/riode/demo-8/pages/about-us/#"
          >
            Visit Our Store<i className="d-icon-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
