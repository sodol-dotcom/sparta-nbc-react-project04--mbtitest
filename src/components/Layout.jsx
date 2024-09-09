import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  // 로그인하지 않은 사용자를 로그인 페이지로 리디렉션
  useEffect(() => {
    if (!user) {
      navigate("/login"); // 로그인 페이지로 리디렉션
    }
  }, [user, navigate]);

  // 로그아웃 처리 로직
  const handleLogout = () => {
    setUser(null); // 로그아웃 시 user 상태를 null로 변경
    navigate("/login"); // 로그인 페이지로 리디렉션
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="space-x-4">
            <Link to="/" className="hover:underline">홈</Link>
            <Link to="/profile" className="hover:underline">프로필</Link>
            <Link to="/test" className="hover:underline">테스트</Link>
            <Link to="/results" className="hover:underline">결과보기</Link>
          </div>
          <div className="space-x-4">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                로그인
              </Link>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-1 container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
