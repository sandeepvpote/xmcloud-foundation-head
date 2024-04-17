import React from 'react';
import {
  Image as JssImage,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  smallImage: ImageField;
  Description: Field<string>;
  Button: LinkField;
  Title: Field<string>;
  Detail: Field<string>;
}

type ImageTextCTAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: ImageTextCTAProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <div className="main-div">
        <div className="high-yield">
          {sitecoreContext.pageState === 'edit' ? (
            <JssImage field={props.fields.smallImage} />
          ) : (
            <img src={props.fields.smallImage.value?.src} alt="bolt-image" />
          )}
          <JssRichText field={props.fields.Description} tag="span" className="high-heading-text" />
        </div>
        <div className="sub-text">
          <span>{props.fields.Title.value}</span>
        </div>
        <div>
          {sitecoreContext.pageState === 'edit' ? (
            <JssImage field={props.fields.Image} />
          ) : (
            <img src={props.fields.Image.value?.src} alt="mobile-image" className="mobile-image" />
          )}
        </div>
        <div>
          <button>{props.fields.Button.value.text}</button>
        </div>
      </div>
    </>
  );
};

export const RightImageVariant = (props: ImageTextCTAProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <div className="main-container">
        {sitecoreContext.pageState === 'edit' ? (
          <JssImage field={props.fields.smallImage} />
        ) : (
          <img src={props.fields.smallImage.value?.src} alt="lines-image" className="line-image" />
        )}
        <div className="streamline-main-text">
          <JssRichText field={props.fields.Description} tag="span" />
          <p className="streamline-sub-text">{props.fields.Title.value}</p>
        </div>
        {sitecoreContext.pageState === 'edit' ? (
          <JssImage field={props.fields.Image} />
        ) : (
          <img src={props.fields.Image.value?.src} alt="phone-image" className="phone-image" />
        )}
      </div>
      <button className="start-trading-btn">{props.fields.Button.value.text}</button>
    </>
  );
};

export const LeftImageVariant = (props: ImageTextCTAProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <div>
        {sitecoreContext.pageState === 'edit' ? (
          <JssImage field={props.fields.Image} />
        ) : (
          <img src={props.fields.Image.value?.src} alt="laptop-image" className="laptop-image" />
        )}

        <div className="trading-heading">
          <JssRichText field={props.fields.Description} tag="div" />
          <p className="sub-text">{props.fields.Title.value}</p>
        </div>
        <div className="trading-text">
          <JssRichText field={props.fields.Detail} tag="div" className="grid-item" />
          <button className="btn-primary">{props.fields.Button.value.text}</button>
        </div>
      </div>
    </>
  );
};

export const LeftImageVariant2 = (props: ImageTextCTAProps) => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <div className="elevate-main-div">
        {sitecoreContext.pageState === 'edit' ? (
          <JssImage field={props.fields.Image} />
        ) : (
          <img src={props.fields.Image.value?.src} alt="coin-image" className="coin-image" />
        )}
        <div className="elevate-text-btn">
          <JssRichText
            field={props.fields.Description}
            tag="div"
            className="elevate-heading-text"
          />

          <span className="elevate-sub-text">{props.fields.Title.value}</span>
          <button className="elevate-btn">{props.fields.Button.value.text}</button>
        </div>
      </div>
    </>
  );
};
