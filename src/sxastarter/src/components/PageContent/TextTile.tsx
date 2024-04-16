import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
}

type TextTileProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TextTile = (props: TextTileProps): JSX.Element => (
  <div className="counter text-center text-dark">
    <div className="count-to finished">
      <span>
        <Text field={props.fields.Heading} />{' '}
      </span>
      <button className="d-none">Start</button>
    </div>
    <h5 className="count-title font-weight-bold text-body ls-md">
      <Text field={props.fields.Title} />{' '}
    </h5>
    <p className="text-grey mb-0">
      <Text field={props.fields.Description} />
    </p>
  </div>
);

export default TextTile;
