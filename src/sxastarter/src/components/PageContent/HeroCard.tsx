import React from 'react';
import {
  Field,
  Text,
  ImageField,
  RichText,
  Image,
  LinkField,
  Link,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
  CTALink: LinkField;
  Image: ImageField;
}

type HeroCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeroCardProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const linkValue = !sitecoreContext?.pageEditing ? props.fields?.CTALink?.value?.text : '';

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
          <h3 className="section-title lh-1 font-weight-bold">
            <Text field={props.fields.Title} />
          </h3>
          <RichText className="section-desc text-grey" field={props.fields.Description} />
          <Link className="btn btn-dark btn-link btn-underline ls-m" field={props.fields?.CTALink}>
            {linkValue} <i className="d-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const RightHero = (props: HeroCardProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const linkValue = !sitecoreContext?.pageEditing ? props.fields?.CTALink?.value?.text : '';

  return (
    <section className="store-section pb-10">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-first mb-4">
          <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1">
            <Text field={props.fields.Heading} />
          </h5>
          <h3 className="section-title lh-1 font-weight-bold">
            <Text field={props.fields.Title} />
          </h3>
          <RichText className="section-desc text-grey" field={props.fields.Description} />
          <Link className="btn btn-dark btn-link btn-underline ls-m" field={props.fields?.CTALink}>
            {linkValue} <i className="d-icon-arrow-right"></i>
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <figure>
            <span
              className=" lazy-load-image-background opacity lazy-load-image-loaded"
              style={{ color: 'transparent', display: 'inline-block' }}
            >
              <Image
                field={props.fields.Image}
                className="banner-radius"
                style={{ backgroundColor: 'rgb(222, 230, 232);' }}
              />
            </span>
          </figure>
        </div>
      </div>
    </section>
  );
};
