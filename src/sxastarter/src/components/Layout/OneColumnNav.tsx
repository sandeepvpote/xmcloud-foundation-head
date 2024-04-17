/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { NavigationItem, SubMenuItems, SubMenuLinks } from './Header';

export const OneColumnNav = (props: NavigationItem) => {
  function renderSubMenuLink(subMenuItems: SubMenuItems, Firstindex: number) {
    return (
      <li
        className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${Firstindex} ${
          subMenuItems.fields.SubMenuLinks.length > 0 ? 'menu-item-has-children dropdown' : ''
        }`}
      >
        <JssLink field={subMenuItems.fields.Link}></JssLink>
        {
          <ul className="sub-menu">
            {subMenuItems.fields.SubMenuLinks.map((subMenuLink: SubMenuLinks, index: number) => {
              return (
                <>
                  <li
                    key={index}
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${index}`}
                  >
                    <JssLink
                      field={subMenuLink.fields.SubMenuLink}
                      id={`menu-item-${index}`}
                    ></JssLink>
                  </li>
                </>
              );
            })}
          </ul>
        }
        {subMenuItems.fields.SubMenuLinks.length > 0 && (
          <div className="dropdown-btn">
            <span className="icofont icofont-navigation-menu" />
          </div>
        )}
      </li>
    );
  }
  return (
    <>
      <li
        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-100"
        key={props.index}
        id={`menu-item-${props.index}`}
      >
        {props?.SubMenuItems.length > 0 ? (
          <JssLink field={props?.Link} />
        ) : (
          <JssLink field={props?.Link}></JssLink>
        )}
        {props?.SubMenuItems.length > 0 && (
          <ul className="sub-menu" key={props.index || Math.random()}>
            {props?.SubMenuItems.map((_submenu: SubMenuItems, index: number) => {
              return renderSubMenuLink(_submenu, index);
            })}
          </ul>
        )}
        <div className="dropdown-btn">
          <span className="icofont icofont-navigation-menu" />
        </div>
      </li>
    </>
  );
};
