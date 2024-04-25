import React from 'react';
import { Field, Text, RichText, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
  ShortDescription: Field<string>;
  'Background Image': ImageField;
}

type TextTileProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const Banner = (props: TextTileProps): JSX.Element => {
  let backgroundImage = props.fields['Background Image'] as string;
  console.log('backgroundImage -1');
  console.log(backgroundImage);
  let backgroundStyle: { [key: string]: string } = {};
  console.log('backgroundImage');
  console.log(backgroundImage);
  backgroundImage = backgroundImage?.value?.src;
  if (backgroundImage) {
    backgroundStyle = {
      backgroundImage: `url('${backgroundImage}')`,
    };
  }

  console.log(backgroundStyle);
  return (
    <div className="page-header pl-4 pr-4 pt-0" style={backgroundStyle}>
      <h3 className="page-subtitle font-weight-bold">
        <Text field={props.fields.Heading} />
      </h3>
      <h1 className="page-title font-white-bold lh-1 text-white text-capitalize">
        <Text field={props.fields.Title} />
      </h1>
      <RichText className="page-desc text-white mb-0" field={props.fields.Description} />
    </div>
  );
};

export default Banner;
