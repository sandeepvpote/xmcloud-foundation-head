import { useRouter } from 'next/router';

import ALink from '../custom-link';
/*
import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerTransprentList } from '~/utils/data/menu';*/

export default function HeaderStripe(props) {
  /*const router = useRouter();

  const showMobileMenu = () => {
    document.querySelector('body').classList.add('mmenu-active');
  };*/

  return (
    /* <header
      className={`header header-transparent ${
        headerTransprentList.includes(router.pathname) ? 'p-relative bg-dark' : ''
      }`}
    >*/

    <div className="header-top header header-transparent p-relative bg-dark">
      <div className="container-fluid">
        <div className="header-left">
          <div className="social-links inline-links d-lg-show">
            <ALink
              href="#"
              className="social-link social-twitter fab fa-twitter"
              title="twitter"
            ></ALink>
            <ALink
              href="#"
              className="social-link social-linkedin fab fa-linkedin-in"
              title="linkedin"
            ></ALink>
            <ALink
              href="#"
              className="social-link social-facebook fab fa-facebook-f"
              title="facebook"
            ></ALink>
            <ALink
              href="#"
              className="social-link social-pinterest fab fa-pinterest-p"
              title="pinterest"
            ></ALink>
          </div>
          <p className="welcome-msg ls-normal">Welcome to store message or remove it!</p>
        </div>

        <div className="header-right">
          <ALink className="call d-lg-show" href="#">
            <span>Call us: </span>123-456-7890
          </ALink>
          <div className="dropdown ml-4 d-lg-show">
            <ALink href="#">USD</ALink>
            <ul className="dropdown-box">
              <li>
                <ALink href="#">USD</ALink>
              </li>
              <li>
                <ALink href="#">EUR</ALink>
              </li>
            </ul>
          </div>
          <span className="divider ml-3 d-lg-show"></span>
          <div className="dropdown language-dropdown d-lg-show">
            <ALink href="#">ENG</ALink>
            <ul className="dropdown-box">
              <li>
                <ALink href="#">ENG</ALink>
              </li>
              <li>
                <ALink href="#">FRH</ALink>
              </li>
            </ul>
          </div>
          <ALink
            href="/pages/contact-us"
            className="btn btn-primary btn-sm contact font-weight-normal mr-0 ml-4"
          >
            Contact us
          </ALink>
        </div>
      </div>
    </div>

    /* </header>*/
  );
}
