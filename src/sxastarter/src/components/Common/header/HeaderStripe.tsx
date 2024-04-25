/*
import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerTransprentList } from '~/utils/data/menu';*/

export default function HeaderStripe() {
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
          <div className="social-links inline-links d-lg-show"></div>
          <p className="welcome-msg ls-normal">Welcome to store message or remove it!</p>
        </div>

        <div className="header-right">
          <div className="dropdown ml-4 d-lg-show"></div>
          <span className="divider ml-3 d-lg-show"></span>
          <div className="dropdown language-dropdown d-lg-show"></div>
        </div>
      </div>
    </div>

    /* </header>*/
  );
}
