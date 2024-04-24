/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Link as JssLink,
  Text as JssText,
  Image as JssImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
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

// export const Default = (props: HeaderProps) => {
//   const { sitecoreContext } = useSitecoreContext();
//   const menufunc = () => {
//     console.log('on click');
//     const x = document.getElementById('menu-bar');
//     const menu = document.getElementById('menu-icon');
//     const cross = document.getElementById('cross-icon');

//     if (x && menu && cross) {
//       if (x.style.display === 'block') {
//         menu.style.display = 'block';
//         x.style.display = 'none';
//         cross.style.display = 'none';
//       } else {
//         x.style.display = 'block';
//         cross.style.display = 'block';
//         menu.style.display = 'none';
//       }
//     }
//   };
//   return (
//     <>
//       {/* DESKTOP HEADER */}
//       <header className="main-header header-style-one">
//         {/*Header-Main Box*/}
//         <div className="header-mainbox">
//           <div className="container ptn pbn">
//             <div className="clearfix">
//               <div className="logo-box">
//                 <div className="logo">
//                   {sitecoreContext.pageState === 'edit' ? (
//                     <JssImage field={props.fields?.LightThemeLogo} className="img-responsive" />
//                   ) : (
//                     <JssLink field={props.fields.LogoLink}>
//                       <JssImage field={props.fields?.LightThemeLogo} />
//                     </JssLink>
//                   )}
//                 </div>
//               </div>
//               <ul className="social-top list-inline">
//                 {props.fields.TopHeaderNavLinks.map(
//                   (navigationLink: TopHeaderNavigationLink, key: number) => (
//                     <li
//                       key={key}
//                       className={
//                         key == 0 ? 'lang-item lang-item-72 lang-item-ar lang-item-first' : ''
//                       }
//                     >
//                       {sitecoreContext.pageState === 'edit' ? (
//                         <JssLink
//                           field={navigationLink.fields.Link}
//                           showLinkTextWithChildrenPresent={false}
//                         />
//                       ) : (
//                         <a
//                           href={navigationLink.fields.Link?.value?.href}
//                           className={navigationLink.fields.Link?.value?.class}
//                         ></a>
//                       )}
//                     </li>
//                   )
//                 )}
//               </ul>
//               <div className="outer-box clearfix">
//                 {/* Main Menu */}
//                 <nav className="main-menu logo-outer">
//                   <div className="navbar-header">
//                     {/* Toggle Button */}
//                     <button
//                       type="button"
//                       className="navbar-toggle"
//                       data-toggle="collapse"
//                       data-target=".navbar-collapse"
//                     >
//                       <span className="icon-bar" />
//                       <span className="icon-bar" />
//                       <span className="icon-bar" />
//                     </button>
//                   </div>
//                   <div className="navbar-collapse collapse clearfix">
//                     <ul id="menu-home-menu" className="navigation clearfix">
//                       {props.fields.NavigationLinks.map((navigation, index: number) => (
//                         <>
//                           {navigation &&
//                           navigation.fields.SubMenuItems &&
//                           navigation.fields.SubMenuItems.length > 1 ? (
//                             <OneColumnNav
//                               Link={navigation.fields.Link}
//                               SubMenuItems={navigation.fields.SubMenuItems}
//                               index={index}
//                             ></OneColumnNav>
//                           ) : (
//                             <OneColumnNav
//                               Link={navigation.fields.Link}
//                               SubMenuItems={navigation.fields.SubMenuItems}
//                               index={index}
//                             ></OneColumnNav>
//                           )}
//                         </>
//                       ))}
//                     </ul>
//                   </div>
//                 </nav>
//                 {/* Main Menu End*/}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*Header Main Box End*/}
//       </header>
//     </>
//   );
// };

// export const M2Header = (props: HeaderProps) => {
//   const { sitecoreContext } = useSitecoreContext();
//   return (
//     <>
//       <header className="css-pjfvhq">
//         <div>
//           <a aria-label="M2 Exchange" className="css-10oxagg" href="#">
//             <div
//               className="m2-icon undefined css-1i0n0ae"
//               style={{ width: '74px', height: '24px' }}
//               data-testid="logo"
//             >
//               {sitecoreContext.pageState === 'edit' ? (
//                 <JssImage field={props.fields?.LightThemeLogo} className="img-responsive" />
//               ) : (
//                 <JssLink field={props.fields.LogoLink}>
//                   <JssImage field={props.fields?.LightThemeLogo} />
//                 </JssLink>
//               )}
//               {/* <svg fill="#08EBAA" width="74px" height="24px" className="css-1l3vixo">
//                 <use xlinkHref="#icon-logo"></use>
//               </svg> */}
//             </div>
//           </a>
//         </div>
//         <div className="css-upn7fq">
//           {props.fields.NavigationLinks.map((navigation) => (
//             <>
//               <span className="css-156k2z1">
//                 {sitecoreContext.pageState === 'edit' ? (
//                   <JssLink field={navigation.fields.Link} />
//                 ) : (
//                   <a
//                     data-testid={`menu-${navigation.fields.Link?.value?.text}}`}
//                     href={navigation.fields.Link?.value?.href}
//                     className={navigation.fields.Link?.value?.class}
//                   >
//                     <div className="css-1iyoj2o">
//                       <div className="css-1sg2lsz">
//                         <p className="css-lykmnt" color="typePrimary">
//                           {navigation.fields.Link?.value?.text}
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 )}
//               </span>
//             </>
//           ))}
//         </div>

//         <div className="css-1jssxcu">
//           <div className="css-1v3z295">
//             <a target="" className="css-1ulgukf" href="#">
//               <span className="css-1gblbjx" color="text">
//                 <JssText field={props.fields.CartText} />
//               </span>
//             </a>
//             <button
//               className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1q01leq"
//               type="button"
//             >
//               <p className="css-195z8ju" data-testid="menu-login">
//                 {props.fields.LoginLink?.value?.text}
//               </p>
//             </button>
//             <button
//               className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium register css-q0c041"
//               type="button"
//             >
//               <p className="css-1uq6dkb" data-testid="menu-register">
//                 {props.fields.MyProfileLink?.value?.text}
//               </p>
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

export const M2HeaderMobile = (props: HeaderProps) => {
  const { sitecoreContext } = useSitecoreContext();
  //const [menu, setMenu] = useState();

  // useEffect(() => {
  //   console.log('header clicked!');
  // });

  const [menu, setMenu] = useState(false);

  // const menufunc = () => {
  //   console.log('On clicked');
  //   setMenu(!menu);
  // };

  const menufunc = () => {
    console.log('on click');
    const x = document.getElementById('menu-bar');
    const menu = document.getElementById('menu-icon');
    const cross = document.getElementById('cross-icon');

    if (x && menu && cross) {
      if (x.style.display === 'block') {
        menu.style.display = 'block';
        x.style.display = 'none';
        cross.style.display = 'none';
      } else {
        x.style.display = 'block';
        cross.style.display = 'block';
        menu.style.display = 'none';
      }
    }
  };
  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="desktop-header">
        <div>
          {/* <a aria-label="M2 Exchange" className="css-10oxagg" href="#"> */}
          <section
            className="m2-icon undefined css-1i0n0ae css-10oxagg"
            style={{ width: '74px', height: '24px' }}
            data-testid="logo"
          >
            {sitecoreContext.pageState === 'edit' ? (
              <JssImage field={props.fields?.LightThemeLogo} className="img-responsive" />
            ) : (
              <JssLink field={props.fields.LogoLink}>
                <JssImage field={props.fields?.LightThemeLogo} />
              </JssLink>
            )}
          </section>
          {/* </a> */}
        </div>
        <div className="css-upn7fq">
          {props.fields.NavigationLinks.map((navigation) => (
            <>
              <span className="css-156k2z1">
                {sitecoreContext.pageState === 'edit' ? (
                  <JssLink field={navigation.fields.Link} />
                ) : (
                  <a
                    data-testid={`menu-${navigation.fields.Link?.value?.text}}`}
                    href={navigation.fields.Link?.value?.href}
                    className={navigation.fields.Link?.value?.class}
                  >
                    <div className="css-1iyoj2o">
                      <div className="css-1sg2lsz">
                        <p className="css-lykmnt" color="typePrimary">
                          {navigation.fields.Link?.value?.text}
                        </p>
                      </div>
                    </div>
                  </a>
                )}
              </span>
            </>
          ))}
        </div>

        <div className="css-1jssxcu">
          <div className="css-1v3z295">
            <a target="" className="css-1ulgukf" href="#">
              <span className="css-1gblbjx" color="text">
                <JssText field={props.fields.CartText} />
              </span>
            </a>
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
      {/* MOBILE HEADER */}
      <header className="css-pjfvhq">
        <div>
          <a aria-label="M2 Exchange" className="css-10oxagg" href="#">
            <div
              className="m2-icon undefined css-1i0n0ae"
              style={{ width: '74px', height: '24px' }}
              data-testid="logo"
            >
              <svg fill="#08EBAA" width="74px" height="24px" className="css-1l3vixo">
                <use xlinkHref="#icon-logo"></use>
              </svg>
            </div>
          </a>
        </div>

        <div className="css-1sg2lsz">
          <div className="css-1jssxcu">
            <div className="css-1v3z295">
              <a target="" className="css-1ulgukf" href="#">
                <span className="css-1gblbjx" color="text">
                  {props.fields.CartText.value}
                </span>
              </a>
              <div className="css-1sg2lsz">
                <div className="m2-icon css-ih24lg" style={{ width: '24px', height: '24px' }}>
                  <a onClick={() => menufunc()} href="javascript:void(0);" id="menu-icon">
                    <div className="menu-div"></div>
                    <div className="menu-div"></div>
                    <div className="menu-div"></div>
                  </a>
                  <a onClick={() => menufunc()} id="cross-icon">
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="css-olgc7d" style={{ display: 'nones' }}>
        <div className="css-x7kgwd" id="menu-bar">
          <div>
            <div className="css-e3l3cd">
              <div className="css-6r3fxs">
                <h1 className="css-tekvn3" color="typePrimary">
                  Welcome to M2
                </h1>
              </div>
              <div className="css-6r3fxs"></div>
            </div>
            <div className="css-upn7fq">
              <span className="css-156k2z1">
                <a data-testid="menu-earn" className="css-1427d14" href="#">
                  <div className="css-1iyoj2o">
                    <div className="css-1sg2lsz">
                      <p className="css-lykmnt" color="typePrimary">
                        Earn
                      </p>
                    </div>
                  </div>
                </a>
              </span>
              <span className="css-156k2z1">
                <a data-testid="menu-smartTrade" className="css-1427d14" href="#">
                  <div className="css-1iyoj2o">
                    <div className="css-1sg2lsz">
                      <p className="css-lykmnt" color="typePrimary">
                        Smart Trading
                      </p>
                    </div>
                  </div>
                </a>
              </span>
              <span className="css-156k2z1">
                <a data-testid="menu-otc" className="css-1427d14" href="#">
                  <div className="css-1iyoj2o">
                    <div className="css-1sg2lsz">
                      <p className="css-lykmnt" color="typePrimary">
                        OTC
                      </p>
                    </div>
                  </div>
                </a>
              </span>
              <span className="css-156k2z1">
                <a data-testid="menu-markets" className="css-1427d14" href="#">
                  <div className="css-1iyoj2o">
                    <div className="css-1sg2lsz">
                      <p className="css-lykmnt" color="typePrimary">
                        Markets
                      </p>
                    </div>
                  </div>
                </a>
              </span>

              <span className="css-156k2z1">
                <a data-testid="menu-help-center" className="css-1427d14" href="#">
                  <div className="css-1iyoj2o">
                    <div className="css-1sg2lsz">
                      <p className="css-lykmnt" color="typePrimary">
                        Help Center
                      </p>
                    </div>
                  </div>
                </a>
              </span>
              <span className="css-156k2z1">
                <a data-testid="menu-help-center" className="css-1427d14" href="#">
                  <div className="css-1iyoj2o">
                    <div className="css-1sg2lsz">
                      <p className="css-lykmnt" color="typePrimary">
                        M2 UAE
                      </p>
                    </div>
                  </div>
                </a>
              </span>
            </div>
          </div>
          <div className="css-6r3fxs">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1t4yvl7"
              type="button"
            >
              <p className="css-195z8ju">Log In</p>
            </button>
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1lydy3u"
              type="button"
            >
              <p className="css-1uq6dkb">Register</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
