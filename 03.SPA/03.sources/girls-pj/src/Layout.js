import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* 원형 네비게이션 메뉴 */}
      <nav className="circular_nav">
        <div className="nav_content">
            {/* 메뉴토글 버튼 */}
          <div className="toggle_btn">
            <i className="bx bx-plus"></i>
          </div>
          {/* 1. 홈버튼 */}
          <span>
            <Link to="/">
              <i className="bx bxs-home"></i>
            </Link>
          </span>
          {/* 2. 갤러리버튼 */}
          <span>
            <Link to="/ga">
              <i className="bx bxs-camera"></i>
            </Link>
          </span>
          {/* 3. 비디오버튼 */}
          <span>
            <Link to="/vd">
              <i className="bx bxs-video"></i>
            </Link>
          </span>
          {/* 4. 앨범버튼 */}
          <span>
            <Link to="/al">
              <i className="bx bxs-music"></i>
            </Link>
          </span>
          {/* 5. 프로필버튼 */}
          <span>
            <Link to="/pf">
              <i className="bx bxs-user-rectangle"></i>
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Layout;