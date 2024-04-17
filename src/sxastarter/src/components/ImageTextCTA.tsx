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
          {/* <img
            src="https://static.m2.com/resource/static/images/icons/boost.svg"
            alt="bolt-image"
          /> */}
          <JssRichText field={props.fields.Description} tag="span" className="high-heading-text" />
          {/* <span className="heading-text">
            <span className="gradient-text">High-Yield</span> Crypto Investments
          </span> */}
        </div>
        <div className="sub-text">
          <span>{props.fields.Title.value}</span>
          {/* Maximize your earnings with M2 with up to 10.5% on BTC and ETH */}
        </div>
        <div>
          {sitecoreContext.pageState === 'edit' ? (
            <JssImage field={props.fields.Image} />
          ) : (
            <img src={props.fields.Image.value?.src} alt="mobile-image" className="mobile-image" />
          )}
          {/* <img
            src="https://static.m2.com/resource/static/images/phones-mockup.webp?w=828&q=75"
            alt="mobile-image"
            className="mobile-image"
          /> */}
        </div>
        <div>
          <button>{props.fields.Button.value.text}</button>
        </div>
        {/* <div>
          <span className="footer-text">
            Invest in <span className="gradient-text">Over 40</span> <br />
            Verified Crypto Assets
          </span>
          <br />
          <span className="sub-text">Diversify your portfolio with curated crypto assets</span>
        </div> */}
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
        {/* <img
          src="https://static.m2.com/resource/static/images/trading-background.webp?w=3840&q=75"
          alt="lines-image"
          className="line-image"
        /> */}
        <div className="streamline-main-text">
          <JssRichText field={props.fields.Description} tag="span" />
          {/* <span>
            Streamline Your Trades
            <br /> with <br />
            <span className="gradient-text">Smart Trading</span>
          </span> */}
          <p className="streamline-sub-text">{props.fields.Title.value}</p>
        </div>
        {sitecoreContext.pageState === 'edit' ? (
          <JssImage field={props.fields.Image} />
        ) : (
          <img src={props.fields.Image.value?.src} alt="phone-image" className="phone-image" />
        )}
        {/* <img
          src="https://static.m2.com/resource/static/images/trading-smartphone-mockup.webp?w=3840&q=75"
          alt="phone-image"
          className="phone-image"
        /> */}
      </div>
      <button className="start-trading-btn">{props.fields.Button.value.text}</button>
    </>
  );
};

export const LeftImageVariant = (props: ImageTextCTAProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    // <div>
    //   <div className="trading-text">
    //     <JssRichText field={props.fields.Description} />
    //     {/* <span className="gradient-text">Smart Trading</span> Features */}
    //   </div>

    //   <div className="sub-text">
    //     <span>{props.fields.Title.value}</span>
    //   </div>

    //   <div className="grid-container">
    //     <div>
    //       {sitecoreContext.pageState === 'edit' ? (
    //         <JssImage field={props.fields.Image} />
    //       ) : (
    //         <img src={props.fields.Image.value?.src} alt="laptop-image" className="laptop-image" />
    //       )}
    //       {/* <img
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1j2lQZJafIRk6zrkW-ge1EQw9AkquN5fMSg&usqp=CAU"
    //         alt="laptop-image"
    //         width={'490px'}
    //       /> */}
    //     </div>
    //     <div>
    //       <JssRichText field={props.fields.Detail} tag="div" className="grid-item" />
    //       {/* <div className="grid-item">
    //       <div>
    //         <div className="border-text">
    //           <div className="side-bar"></div>
    //           <h4 className="heading-text">Enhanced Markets and Trading Instruments</h4>
    //         </div>
    //         <p>
    //           Optimize your trading journey with M2&apos;s comprehensive crypto market offerings,
    //           including Spot and Futures markets. Harness cutting-edge technology for a seamless and
    //           profitable experience
    //         </p>
    //       </div>
    //       <div>
    //         <div className="border-text">
    //           <div className="side-bar"></div>
    //           <h4 className="heading-text">Advanced Order Types</h4>
    //         </div>
    //         <p>
    //           Achieve greater precision and control in executing your trades <br /> TWAP Orders{' '}
    //           <br /> Evenly executes trades over time to minimize market impact and achieve a better
    //           average price with TWAP Order Type <br /> Dynamic Orders <br /> Adjust order
    //           parameters based on market conditions, optimizing trade execution and minimizing risks
    //           with Dynamic order Type
    //         </p>
    //       </div>
    //       <button className="btn-primary">Start Trading</button>
    //     </div> */}

    //       <div>
    //         <button className="btn-primary">{props.fields.Button.value.text}</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
        {/* <img
          src="https://static.m2.com/resource/static/images/mmx-coin.webp?w=828&q=75"
          alt="coin-image"
          className="coin-image"
        /> */}
        <div className="elevate-text-btn">
          <JssRichText
            field={props.fields.Description}
            tag="div"
            className="elevate-heading-text"
          />
          {/* <span className="elevate-heading-text">
            Elevate Your M2 <br /> Experience with <span className="gradient-text">MMX</span>
          </span> */}

          <span className="elevate-sub-text">
            {props.fields.Title.value}
            {/* Enjoy Exclusive Benefits and Enhanced Earnings within the M2 Ecosystem. */}
          </span>
          <button className="elevate-btn">{props.fields.Button.value.text}</button>
        </div>
      </div>
    </>
  );
};
