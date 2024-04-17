/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';
import {
  Field,
  ImageField,
  LinkField,
  Image as JssImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  LogoLink: LinkField;
  DarkThemeLogo: ImageField;
  LightThemeLogo: ImageField;
  ContactUs: Array<Contacttype>;
  QuickLinksTitle: Field<string>;
  PageLinks: Array<FooterNavigationLink>;
  CopyrightText: Field<string>;
  LinkLabel: Field<string>;
  ImageList: Array<FooterNavigationLink>;
  NavItems: Array<NavItems>;
}

export interface NavItems {
  fields: {
    MainNavLabel: Field<string>;
    MainNavLinks: Array<FooterNavigationLink>;
  };
}

export interface FooterNavigationLink {
  fields: {
    Link: LinkField;
    IconCls: Field<string>;
  };
}

export interface Contacttype {
  fields: {
    Label: Field<string>;
    Content: Field<string>;
    iconcls: Field<string>;
  };
}

type FooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps) => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <>
      <div className="css-1iufzrx">
        <div className="css-62o2z6">
          <footer className="css-n1ampd">
            {sitecoreContext.pageState === 'edit' ? (
              <JssImage field={props.fields?.LightThemeLogo} className="img-responsive" />
            ) : (
              <a
                aria-label="M2 Exchange"
                className={props.fields.LogoLink?.value?.class}
                href={props.fields.LogoLink?.value?.href}
              >
                <div
                  className="m2-icon undefined css-1i0n0ae"
                  style={{ width: '98px', height: '32px' }}
                  data-testid="footer-logo"
                >
                  {/* <JssImage field={props.fields?.LightThemeLogo} /> */}
                  <svg fill="#08EBAA" width="98px" height="32px" className="css-envrt4">
                    <use xlinkHref="#icon-logo"></use>
                  </svg>
                </div>
              </a>
            )}
            <div className="css-fw3j3z">
              {props.fields.NavItems.map((item) => (
                <>
                  <div className="css-em9in">
                    <p
                      className="css-1v92fbq"
                      color="secondaryText"
                      data-testid="footer-header-company"
                    >
                      {item.fields.MainNavLabel.value}
                    </p>
                    {item.fields.MainNavLinks.map((nav) => (
                      <>
                        <a
                          data-testid={`menu-${nav.fields.Link?.value?.text}}`}
                          href={nav.fields.Link?.value?.href}
                          className={nav.fields.Link?.value?.class}
                        >
                          <p className="css-7qotk5" color="secondaryText">
                            {nav.fields.Link?.value?.text}
                          </p>
                        </a>
                      </>
                    ))}
                  </div>
                </>
              ))}
            </div>

            <p className="css-xe812p" color="secondaryText" data-testid="footer-label-disclaimer">
              {props.fields.CopyrightText?.value}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export const M2FooterMobile = (props: FooterProps) => {
  //const { sitecoreContext } = useSitecoreContext();

  return (
    <>
      <div className="css-1iufzrx">
        <div className="css-62o2z6">
          <footer className="css-n1ampd">
            {/* <a aria-label="M2 Exchange" className="css-1ciiac" href="/en_AE/">
              <div
                className="m2-icon undefined css-1i0n0ae"
                style={{ width: '98px', height: '32px' }}
                data-testid="footer-logo"
              >
                <svg fill="#08EBAA" width="98px" height="32px" className="css-envrt4">
                  <use xlinkHref="#icon-logo"></use>
                </svg>
              </div>
            </a>
            <div className="css-1l0w9xw">
              <div className="css-em9in">
                <p
                  className="css-1v92fbq"
                  color="secondaryText"
                  data-testid="footer-header-company"
                >
                  Company
                </p>
                <a data-testid="footer-link-m2-adgm" className="css-1v2qnox" href="/en_AE/adgm/">
                  <p className="css-7qotk5" color="secondaryText">
                    M2 ADGM
                  </p>
                </a>
                <a
                  data-testid="footer-link-affiliate"
                  className="css-1v2qnox"
                  href="/en_AE/affiliate/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Affiliate program
                  </p>
                </a>
              </div>

              <div className="css-em9in">
                <p
                  className="css-1v92fbq"
                  color="secondaryText"
                  data-testid="footer-header-company"
                >
                  Company
                </p>
                <a data-testid="footer-link-m2-adgm" className="css-1v2qnox" href="/en_AE/adgm/">
                  <p className="css-7qotk5" color="secondaryText">
                    M2 ADGM
                  </p>
                </a>
                <a
                  data-testid="footer-link-affiliate"
                  className="css-1v2qnox"
                  href="/en_AE/affiliate/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Affiliate program
                  </p>
                </a>
              </div>

              <div className="css-em9in">
                <p
                  className="css-1v92fbq"
                  color="secondaryText"
                  data-testid="footer-header-company"
                >
                  Company
                </p>
                <a data-testid="footer-link-m2-adgm" className="css-1v2qnox" href="/en_AE/adgm/">
                  <p className="css-7qotk5" color="secondaryText">
                    M2 ADGM
                  </p>
                </a>
                <a
                  data-testid="footer-link-affiliate"
                  className="css-1v2qnox"
                  href="/en_AE/affiliate/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Affiliate program
                  </p>
                </a>
              </div>

              <div className="css-em9in">
                <p
                  className="css-1v92fbq"
                  color="secondaryText"
                  data-testid="footer-header-company"
                >
                  Company
                </p>
                <a data-testid="footer-link-m2-adgm" className="css-1v2qnox" href="/en_AE/adgm/">
                  <p className="css-7qotk5" color="secondaryText">
                    M2 ADGM
                  </p>
                </a>
                <a
                  data-testid="footer-link-affiliate"
                  className="css-1v2qnox"
                  href="/en_AE/affiliate/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Affiliate program
                  </p>
                </a>
              </div>

              <div className="css-em9in">
                <p
                  className="css-1v92fbq"
                  color="secondaryText"
                  data-testid="footer-header-products"
                >
                  Products
                </p>
                <a data-testid="footer-link-earn" className="css-1v2qnox" href="/en_AE/earn/">
                  <p className="css-7qotk5" color="secondaryText">
                    Earn
                  </p>
                </a>
                <a data-testid="footer-link-convert" className="css-1v2qnox" href="/en_AE/convert/">
                  <p className="css-7qotk5" color="secondaryText">
                    Convert
                  </p>
                </a>
                <a
                  data-testid="footer-link-smartspot"
                  className="css-1v2qnox"
                  href="/en_AE/smart-trade/spot/BTC-USDT/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Smart Spot
                  </p>
                </a>
                <a
                  data-testid="footer-link-smartfuture"
                  className="css-1v2qnox"
                  href="/en_AE/smart-trade/futures/BTC-USDT/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Smart Futures
                  </p>
                </a>
                <a data-testid="footer-link-otc" className="css-1v2qnox" href="/en_AE/otc/">
                  <p className="css-7qotk5" color="secondaryText">
                    OTC
                  </p>
                </a>
                <a
                  data-testid="footer-link-institutional"
                  className="css-1v2qnox"
                  href="/en_AE/institutional/"
                >
                  <p className="css-7qotk5" color="secondaryText">
                    Institutional
                  </p>
                </a>
              </div>

              <div className="css-14rugl7">
                <p
                  className="css-1v92fbq"
                  color="secondaryText"
                  data-testid="footer-header-followus"
                >
                  Follow us on
                </p>
                <div className="css-1f6qz8t">
                  <a
                    target="_blank"
                    data-testid="footer-link-facebook"
                    aria-label="facebook"
                    className="css-1v2qnox"
                    href="https://www.facebook.com/people/M2/100089593208333/"
                  >
                    <div className="m2-icon undefined css-1i0n0ae">F</div>
                  </a>
                  <a
                    target="_blank"
                    data-testid="footer-link-facebook"
                    aria-label="facebook"
                    className="css-1v2qnox"
                    href="https://www.facebook.com/people/M2/100089593208333/"
                  >
                    <div className="m2-icon undefined css-1i0n0ae">F</div>
                  </a>
                  <a
                    target="_blank"
                    data-testid="footer-link-facebook"
                    aria-label="facebook"
                    className="css-1v2qnox"
                    href="https://www.facebook.com/people/M2/100089593208333/"
                  >
                    <div className="m2-icon undefined css-1i0n0ae">F</div>
                  </a>
                </div>
              </div>
            </div> */}

            <p className="css-xe812p" color="secondaryText" data-testid="footer-label-disclaimer">
              {props.fields.CopyrightText?.value}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};
