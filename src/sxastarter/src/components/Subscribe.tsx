import React, { useState } from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
  Text,
  useSitecoreContext,
  Text as JssText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
  ButtonText: Field<string>;
  Description: Field<string>;
  PlaceholderText: Field<string>;
  Heading: Field<string>;
  HeaderText: Field<string>;
  DownloadAppLabel: Field<string>;
  ComponentImage: ImageField;
  ImageList: Array<ImageList>;
}

type ImageList = {
  fields: Images;
};

type Images = {
  Icon: ImageField;
  Link: LinkField;
};

type SubscribeNewsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: SubscribeNewsProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [requestMsg, setRequestMsg] = useState('');
  return (
    <div className="subscribe-area ptb-60">
      <div className="container ">
        <div className="row align-items-center">
          <div className="row-lg-6">
            <div className="banner-content">
              <JssRichText field={props.fields.HeaderText} tag="span" className="banner-title" />
              {/* <span className="banner-title">
                <span className="gradient-text">Boost</span> your <br /> Crypto Portfolio
              </span> */}
              <br />
              <span>{props.fields.Description.value}</span>
              {/* <span>Sign up now and start earning more </span> */}
            </div>
          </div>

          <div className="col-lg-6 banner-form">
            <input
              aria-describedby="email"
              autocomplete="on"
              id="email"
              placeholder={props.fields.PlaceholderText?.value}
              type="email"
              class="MuiInputBase-input form-input"
              value=""
            />
            <button className="join-button">{props.fields.ButtonText.value}</button>
            {/* <button className="join-button">Join Now</button> */}
            {/* <label>{requestMsg}</label> */}
          </div>
          <div className="apps">
            <span>{props.fields.DownloadAppLabel.value}</span>
            <div className="app-icon">
              {props.fields.ImageList.map((img: ImageList) => (
                <JssImage field={img.fields.Icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <JssImage field={props.fields.ComponentImage} className="crypto-image" />
        {/* <img
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7d/8e/25/7d8e251b-b9d2-dfcb-88c4-87c2cd7eb8b0/5e732b74-cc8f-4ef5-9b87-80534430e112_18.png/643x0w.jpg"
          alt="crypto-image"
          className="crypto-image"
        /> */}
      </div>
    </div>
  );
};

export const Subscribe = (props: SubscribeNewsProps) => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <div className="css-1lnl577">
        <div className="css-16xtxzx">
          <div className="css-1ulybjx">
            {sitecoreContext.pageState === 'edit' ? (
              <JssImage field={props.fields.ComponentImage} />
            ) : (
              <img
                src={props.fields.ComponentImage.value?.src}
                alt="background"
                className="css-bftb0x"
              />
            )}
            {/* <img
              src="https://static.m2.com/resource/static/images/m2-logo-background.svg?w=2048&q=75"
              alt="background"
              className="css-bftb0x"
            /> */}
            <h2 className="css-1dljz1v">
              <JssText field={props.fields.Heading} />
              {/* Custodise and Trade your Virtual Assets with M2 */}
            </h2>
            <div className="css-17hrcjh">
              <div className="css-pbk08x">
                <div className="m2-inner-input css-oasusv">
                  <input placeholder={props.fields.PlaceholderText.value} className="css-mnn31" />
                </div>
              </div>
              <button className="css-e6ox4v">{props.fields.ButtonText.value}</button>
              {/* <p class="css-1na2ypk" color="typePrimary">
                Email address is not valid, please check the spelling.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
