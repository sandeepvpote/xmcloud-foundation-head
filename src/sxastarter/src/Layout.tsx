/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  /*const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing
    ? 'editing-mode'
    : 'prod-mode home page-template-default page page-id-5 wpb-js-composer js-comp-ver-6.7.0 vc_responsive';*/

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>

        <link rel="preload" href={`${publicUrl}/m2staticcss/css/2078a3222c4309aa.css`} />
        <link rel="stylesheet" href={`${publicUrl}/m2staticcss/css/2078a3222c4309aa.css`} />
        <link rel="preload" href={`${publicUrl}/m2staticcss/css/90e040a8628ad418.css`} />
        <link rel="stylesheet" href={`${publicUrl}/m2staticcss/css/90e040a8628ad418.css`} />
        <link rel="preload" href={`${publicUrl}/m2staticcss/css/subscribe.css`} />
        <link rel="stylesheet" href={`${publicUrl}/m2staticcss/css/subscribe.css`} />

        <noscript data-n-css=""></noscript>
        <script
          defer
          src={`${publicUrl}/m2staticcss/scripts/chunks/polyfills-c67a75d1b6f99dc8.js`}
        />
        {/* <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/webpack-1eec1d52731db2c1.js`} /> */}
        <script
          defer
          src={`${publicUrl}/m2staticcss/scripts/chunks/framework-ca706bf673a13738.js`}
        />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/main-b9998805a8c74979.js`} />
        <script
          defer
          src={`${publicUrl}/m2staticcss/scripts/chunks/pages/_app-febf91489de8ae5a.js`}
        />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/1494-8a3b0db817ebb1ab.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/7490-39e3cca933a0e65d.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/5829-9d3ba2e53ce18dab.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/7942-d93df9f95ea8d3dc.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/7487-4da0a37be9ba0bfd.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/7833-bd511b85c1ec6cce.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/8793-deeda6721f95ebd3.js`} />
        <script
          defer
          src={`${publicUrl}/m2staticcss/scripts/chunks/pages/index-6af6640d5bc98aa8.js`}
        />
        <script
          defer
          src={`${publicUrl}/m2staticcss/scripts/ZO3nlBqB1GkksDxPVSh6E/_buildManifest.js`}
        />
        <script
          defer
          src={`${publicUrl}/m2staticcss/scripts/ZO3nlBqB1GkksDxPVSh6E/_ssgManifest.js`}
        />

        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/polyfills.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/polyfills.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/polyfills.js`} />
        <script defer src={`${publicUrl}/m2staticcss/scripts/chunks/polyfills.js`} />

        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>
      {/* root placeholder for the app, which we add components to using route data */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
        id="__SVG_SPRITE_NODE__"
      >
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 24" id="icon-logo">
          <g>
            <path d="m68.3997 0h-21.5998c-2.6503 0-4.8004 2.14808-4.8004 4.8004v1.68418c0 .39533.3207.71602.716.71602h3.3684c.3953 0 .716-.32069.716-.71602v-1.07908c0-.33482.2703-.6051.6051-.6051h20.3896c.3348 0 .6051.27028.6051.6051v1.75073c0 .27633-.1876.51836-.4538.58694l-24.952 6.40393c-.5849.1492-.9924.6777-.9924 1.2808v3.7737l27.3321-7.015c2.2771-.585 3.8685-2.63622 3.8685-4.986v-2.4002c0-2.6503-2.148-4.8004-4.8004-4.8004z"></path>
            <path d="m46.7999 24.0001h25.6842c.3953 0 .716-.3207.716-.716v-3.3684c0-.3953-.3207-.716-.716-.716h-30.4846v4.0844c0 .3953.3207.716.716.716z"></path>
            <path d="m33.3991 0h-4.2941c-.5486 0-1.0388.336835-1.2344.849147l-8.3866 21.888253c-.0988.2581-.4659.2581-.5648 0l-8.3886-21.888253c-.1956-.512312-.68776-.849147-1.23436-.849147h-8.580213c-.395328 0-.716027.320699-.716027.716027v22.567973c0 .3953.320699.716.716027.716h3.771743c.39533 0 .71603-.3207.71603-.716v-21.11978c0-.33684.46592-.42155.58694-.10892l8.08406 21.0956c.1956.5123.6878.8491 1.2344.8491h8.1849c.5486 0 1.0387-.3368 1.2344-.8491l8.082-21.0956c.121-.31465.5869-.22792.5869.10892v21.11978c0 .3953.3207.716.716.716h3.7718c.3953 0 .716-.3207.716-.716v-22.567973c0-.395328-.3207-.716027-.716-.716027z"></path>
            <path d="m44.3977 19.1995h-2.3982l2.3236-.595c-.3449.0887-.2804.595.0746.595z"></path>
          </g>
        </symbol>
      </svg>
      <div>
        <div
          id="content"
          className="css-vh09jx"
          style={{ pointerEvents: 'initial', overflow: 'auto' }}
        >
          <div id="main-container" className="css-6k6q35">
            <div id="layout-grid" className="css-1sxw06h">
              <div className="css-1czabdj">
                {route && <Placeholder name="headless-header" rendering={route} />}
              </div>
              <main className="css-cssveg">
                {route && <Placeholder name="headless-main" rendering={route} />}
              </main>
            </div>
          </div>
          {route && <Placeholder name="headless-footer" rendering={route} />}
          {/* <div className="css-1iufzrx">
            <div className="css-62o2z6">
              <footer className="css-n1ampd"></footer>
            </div>
          </div> */}
        </div>
      </div>
      {/* <FooterScripts></FooterScripts> */}
    </>
  );
};

export default Layout;
