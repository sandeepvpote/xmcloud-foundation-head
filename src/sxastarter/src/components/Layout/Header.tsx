/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import {
  Field,
  ImageField,
  LinkField,
  Link as JssLink,
  Image as JssImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { OneColumnNav } from './OneColumnNav';
interface Fields {
  TopHeaderNavLinks: Array<TopHeaderNavigationLink>;
  WishListLink: LinkField;
  CompareLink: LinkField;
  SiteLanguages: Array<SiteLanguage>;
  DarkThemeLogo: ImageField;
  LightThemeLogo: ImageField;
  NavigationLinks: Array<NavigationItems>;
  EnableSearch: Field<boolean>;
  LoginLink: LinkField;
  MyProfileLink: LinkField;
  CartText: Field<string>;
  ProceedToCheckoutLink: LinkField;
  ViewShoppingCartLink: LinkField;
  LogoLink: LinkField;
}

export interface SiteLanguage {
  fields: {
    LanguageCode: Field<string>;
    LanguageText: Field<string>;
  };
}

export interface TopHeaderNavigationLink {
  fields: {
    Link: LinkField;
  };
}
interface NavigationItems {
  fields: NavigationItem;
}

export interface NavigationItem {
  Link: LinkField;
  SubMenuItems: Array<SubMenuItems>;
  ShowTrendingProduct?: Field<boolean>;
  ShowPopularProduct?: Field<boolean>;
  index?: number;
}

export interface SubMenuItems {
  fields: SubMenuItem;
}

export interface SubMenuItem {
  Title: Field<string>;
  SubMenuLinks: Array<SubMenuLinks>;
  Link: LinkField;
}

export interface SubMenuLinks {
  fields: SubMenuLink;
}

export interface SubMenuLink {
  SubMenuLink: LinkField;
}

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps) => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <>
      <header className="main-header header-style-one">
        {/*Header-Main Box*/}
        <div className="header-mainbox">
          <div className="container ptn pbn">
            <div className="clearfix">
              <div className="logo-box">
                <div className="logo">
                  {sitecoreContext.pageState === 'edit' ? (
                    <JssImage field={props.fields?.LightThemeLogo} className="img-responsive" />
                  ) : (
                    <JssLink field={props.fields.LogoLink}>
                      <JssImage field={props.fields?.LightThemeLogo} />
                    </JssLink>
                  )}
                </div>
              </div>
              <ul className="social-top list-inline">
                {props.fields.TopHeaderNavLinks.map(
                  (navigationLink: TopHeaderNavigationLink, key: number) => (
                    <li
                      key={key}
                      className={
                        key == 0 ? 'lang-item lang-item-72 lang-item-ar lang-item-first' : ''
                      }
                    >
                      {sitecoreContext.pageState === 'edit' ? (
                        <JssLink
                          field={navigationLink.fields.Link}
                          showLinkTextWithChildrenPresent={false}
                        />
                      ) : (
                        <a
                          href={navigationLink.fields.Link?.value?.href}
                          className={navigationLink.fields.Link?.value?.class}
                        ></a>
                      )}
                    </li>
                  )
                )}
              </ul>
              <div className="outer-box clearfix">
                {/* Main Menu */}
                <nav className="main-menu logo-outer">
                  <div className="navbar-header">
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul id="menu-home-menu" className="navigation clearfix">
                      {props.fields.NavigationLinks.map((navigation, index: number) => (
                        <>
                          {navigation &&
                          navigation.fields.SubMenuItems &&
                          navigation.fields.SubMenuItems.length > 1 ? (
                            <OneColumnNav
                              Link={navigation.fields.Link}
                              SubMenuItems={navigation.fields.SubMenuItems}
                              index={index}
                            ></OneColumnNav>
                          ) : (
                            <OneColumnNav
                              Link={navigation.fields.Link}
                              SubMenuItems={navigation.fields.SubMenuItems}
                              index={index}
                            ></OneColumnNav>
                          )}
                        </>
                      ))}
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
            </div>
          </div>
        </div>
        {/*Header Main Box End*/}
      </header>
    </>
  );
};

export const M2Header = (props: HeaderProps) => {
  return (
    <>
      <header className="css-pjfvhq">
        <div></div>
        <div className="css-upn7fq"></div>

        <div className="css-1jssxcu">
          <div className="css-1v3z295">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1q01leq"
              type="button"
            >
              <p className="css-195z8ju" data-testid="menu-login">
                {props.fields.LoginLink?.value?.text}
              </p>
            </button>
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium register css-q0c041"
              type="button"
            >
              <p className="css-1uq6dkb" data-testid="menu-register">
                {props.fields.MyProfileLink?.value?.text}
              </p>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
