import React from 'react';
import { Field, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
}

type HeroCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeroCardProps): JSX.Element => {
  return (
    <section className="customer-section pb-10">
      <div className="row align-items-center">
        <div className="col-md-5 mb-4">
          <h5 className="section-subtitle lh-2 ls-md font-weight-normal">
            <Text field={props.fields.Heading} />
          </h5>
          <h3 className="section-title lh-1 font-weight-bold">
            <Text field={props.fields.Title} />
          </h3>
          <RichText className="section-desc text-grey" field={props.fields.Description} />
        </div>
      </div>
    </section>
  );
};
