import { Link, Outlet } from "react-router-dom";
import "./scss/layout.css";
import { handleToggle } from "./js/commonFn";

const Layout = () => {
  return (
    <>
    {/* 1. 메인영역 */}
      {/* 1-1. 우측 메인(원형 GNB 토글러) */}
      <nav className="circular_nav">
        <div className="nav_content">
          {/* 메뉴토글 버튼 */}
          <div className="toggle_btn" onClick={handleToggle}>
            <i className="bx bx-plus"></i>
          </div>
          {/* 1. 홈버튼 */}
          <span style={{"--i":1}}>
            <Link to="/">
              <i className="bx bxs-home"></i>
            </Link>
          </span>
          {/* 2. 갤러리버튼 */}
          <span style={{"--i":2}}>
            <Link to="/ga">
              <i className="bx bxs-camera"></i>
            </Link>
          </span>
          {/* 3. 비디오버튼 */}
          <span style={{"--i":3}}>
            <Link to="/vd">
              <i className="bx bxs-video"></i>
            </Link>
          </span>
          {/* 4. 앨범버튼 */}
          <span style={{"--i":4}}>
            <Link to="/al">
              <i className="bx bxs-music"></i>
            </Link>
          </span>
          {/* 5. 프로필버튼 */}
          <span style={{"--i":5}}>
            <Link to="/pf">
              <i className="bx bxs-user-rectangle"></i>
            </Link>
          </span>
        </div>
      </nav>
      {/* 1-2. 좌측 메인(배너) */}
      <Outlet/>
    </>
  );
};

// 함수호출!
handleToggle();

export default Layout;