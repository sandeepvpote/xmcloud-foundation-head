/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';
import {
  Field,
  ImageField,
  LinkField,
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
  return (
    <>
      <div className="css-1iufzrx">
        <div className="css-62o2z6">
          <footer className="css-n1ampd"></footer>
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
          <footer className="css-n1ampd"></footer>
        </div>
      </div>
    </>
  );
};
