/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
import {
  ImageField,
  Field,
  LinkField,
  RichText as JssRichText,
  Image as JssImage,
  Text as JssText,
  Link as JssLink,
  DateField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  NewsSlides: Array<NewsSlides>;
}

type NewsSlides = {
  fields: News;
};

type News = {
  Image: ImageField;
  NewsByLink: LinkField;
  NewsDescription: Field<string>;
  NewsHeading: Field<string>;
  NewsReadMoreLink: LinkField;
  NewsShortDescription: Field<string>;
  NewsPublishedDate: Field<string>;
};
type NewsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: NewsProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">News</span>
    </div>
  </div>
);

export const Default = (props: NewsProps): JSX.Element => {
  const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      480: {
        items: 1,
        margin: 30,
      },
      600: {
        items: 1,
        margin: 30,
      },
      750: {
        items: 2,
      },
      960: {
        items: 2,
        margin: 30,
      },
      1170: {
        items: 3,
        margin: 30,
      },
      1300: {
        items: 3,
        margin: 30,
      },
    },
  };

  if (props.fields) {
    return (
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <section className=" ">
                <div className="container">
                  <div className="section-title">
                    <JssRichText
                      field={props.fields.Heading}
                      tag="h2"
                      className="small-line"
                    ></JssRichText>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="clearfix carousel-col-2 owl-drag">
                        <OwlCarousel
                          responsive={options.responsive}
                          loop={options.loop}
                          autoplay={options.autoplay}
                          nav={options.nav}
                          dots={options.dots}
                        >
                          {props.fields.NewsSlides.map((newsItem: NewsSlides) => (
                            <>
                              <div className="item">
                                <div className="team-item">
                                  <JssLink field={newsItem.fields.NewsByLink}>
                                    <div className="team-img">
                                      <JssImage
                                        field={newsItem.fields.Image}
                                        className="img-fullwidth img-responsive"
                                      ></JssImage>
                                    </div>
                                    <div className="img-title">
                                      <h4>Hotels</h4>
                                      <JssText
                                        tag="h4"
                                        field={newsItem.fields.NewsHeading}
                                      ></JssText>
                                      <JssRichText
                                        field={newsItem.fields.NewsShortDescription}
                                        tag="p"
                                        className="shortcaption"
                                      ></JssRichText>
                                      <JssRichText
                                        field={newsItem.fields.NewsDescription}
                                        tag="p"
                                      ></JssRichText>
                                    </div>
                                  </JssLink>
                                </div>
                              </div>
                            </>
                          ))}
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const NewsContent = (props: NewsProps): JSX.Element => {
  const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 500,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      480: {
        items: 1,
        margin: 30,
      },
      600: {
        items: 2,
        margin: 30,
      },
      750: {
        items: 2,
      },
      960: {
        items: 2,
        margin: 30,
      },
      1170: {
        items: 2,
        margin: 30,
      },
      1300: {
        items: 2,
        margin: 30,
      },
    },
  };
  if (props.fields) {
    return (
      <section className="vc_section blog">
        <div className="vc_row wpb_row vc_row-fluid container">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="section-title">
                  <JssRichText
                    field={props.fields.Heading}
                    tag="h2"
                    className="small-line"
                  ></JssRichText>
                </div>
                <div className="clearfix carousel-col-21 owl-drag">
                  <OwlCarousel
                    responsive={options.responsive}
                    loop={options.loop}
                    autoplay={options.autoplay}
                    nav={options.nav}
                    dots={options.dots}
                  >
                    {props.fields.NewsSlides.map((newsItem: NewsSlides) => (
                      <>
                        <div className="item">
                          <article className="post clearfix">
                            <a href="https://www.taiba.com.sa/105634/" className="clearfix">
                              <div className="post-overlay">
                                <JssImage
                                  field={newsItem.fields.Image}
                                  className="img-responsive"
                                ></JssImage>
                                <i className="fa fa-link" aria-hidden="true" />
                              </div>
                              <div className="post-body">
                                <div className="post-content">
                                  <JssText
                                    field={newsItem.fields.NewsHeading}
                                    className="title"
                                    tag="h3"
                                  ></JssText>
                                  <div className="date">
                                    <i className="icofont icofont-calendar" />
                                    <DateField
                                      field={newsItem.fields.NewsPublishedDate}
                                      render={(NewsPublishedDate) =>
                                        NewsPublishedDate?.toUTCString()
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </a>
                          </article>
                        </div>
                      </>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const M2EdgeNews = (props: NewsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <div>
        <div>
          <div className="experience-heading-text">
            Experience the <span className="gradient-text">M2 Edge</span>
          </div>
          <span className="experience-sub-text">The Right Choice for Experienced Traders</span>
        </div>
        <div className="experience-img-text">
          {props.fields.NewsSlides.map((newsItem: NewsSlides, index) => (
            <div className="experience-div-image" key={index}>
              {sitecoreContext.pageState === 'edit' ? (
                <JssImage field={newsItem.fields.Image} />
              ) : (
                <img
                  src={newsItem.fields.Image.value?.src}
                  alt="stack-lock-image"
                  className="experience-image"
                />
              )}
              <div>
                <span className="title-text">
                  <JssText field={newsItem.fields.NewsHeading} />
                </span>
                <p className="experience-paragraph">
                  <JssText field={newsItem.fields.NewsDescription} />
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="css-8jyfry">Sign up now</button>
      </div>
    </>
  );
};
