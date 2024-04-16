import { useRouter } from 'next/router';

import ALink from '../custom-link';

//import CartMenu from '../partials/cart-menu';
//import MainMenu from '../partials/main-menu';
//import SearchBox from '~/components/common/partials/search-box';
//import LoginModal from '~/components/features/modals/login-modal';

//import { headerTransprentList } from '~/utils/data/menu';

export default function Header(props) {
  const router = useRouter();

  const showMobileMenu = () => {
    document.querySelector('body').classList.add('mmenu-active');
  };

  return (
    <div className="header-middle sticky-header fix-top sticky-content has-center">
      <div className="container-fluid">
        <div className="header-left">
          <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
            <i className="d-icon-bars2"></i>
          </ALink>

          <ALink href="/" className="logo d-block d-lg-none">
            <img src="./images/home/logo.png" alt="logo" width="154" height="44" />
          </ALink>
        </div>

        <div className="header-center d-none d-lg-block">
          <ALink href="/" className="logo">
            <img src="./images/home/logo.png" alt="logo" width="154" height="44" />
          </ALink>
        </div>

        <div className="header-right">
          <ALink href="/pages/wishlist" className="wishlist d-block">
            <i className="d-icon-heart"></i>
          </ALink>
          /
        </div>
      </div>
    </div>
  );
}
