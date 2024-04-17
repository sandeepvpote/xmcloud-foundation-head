/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

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

export const Default = () => {
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

export const M2FooterMobile = () => {
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
