import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* 원형 네비게이션 메뉴 */}
      <nav class="circular_nav">
        <div class="nav_content">
            {/* 메뉴토글 버튼 */}
          <div class="toggle_btn">
            <i class="bx bx-plus"></i>
          </div>
          {/* 1. 홈버튼 */}
          <span style="--i:1">
            <Link to="/">
              <i class="bx bxs-home"></i>
            </Link>
          </span>
          {/* 2. 갤러리버튼 */}
          <span style="--i:2">
            <Link to="/ga">
              <i class="bx bxs-camera"></i>
            </Link>
          </span>
          {/* 3. 비디오버튼 */}
          <span style="--i:3">
            <Link to="/vd">
              <i class="bx bxs-video"></i>
            </Link>
          </span>
          {/* 4. 앨범버튼 */}
          <span style="--i:4">
            <Link to="/al">
              <i class="bx bxs-music"></i>
            </Link>
          </span>
          {/* 5. 프로필버튼 */}
          <span style="--i:5">
            <Link to="/pf">
              <i class="bx bxs-user-rectangle"></i>
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Layout;