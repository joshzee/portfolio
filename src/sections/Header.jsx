import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll classname="base-bold text-p-4 uppercase transition-colors duration-500 cursor-pointer hover: text-p1 max-lg:my4 max:5">
    {title}
  </LinkScroll>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex-h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={155} height={55} alt="xora" />
        </a>
        <div className="w-full max-lg:fixed max-lg:top-0 max-lg:left:0 max-lg:w-full max-lg:s-2 max-lg: opacity-0">
          <div className="w-full max-lg:relaive max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:px-12">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll>
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="xora"
                    />
                  </LinkScroll>
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
