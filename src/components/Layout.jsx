import { useEffect } from react;
import { useNavigate, Link } from 'react-router-dom'; // useNavigate와 Link를 import


const Layout = ({ children }) => {
    const navigate = useNavigate();

    // 이 곳에서 로그인 하지 않은 사용자를 login 페이지로 보내주기
    useEffect(() => {
        if (!user) { // 로그인이 안 된 경우
            navigate("/login") // 로그인 페이지로 리디렉션
        }
    }, [user]); // user 상태가 바뀔 때마다 실행

    // 로그아웃 처리 로직 추가
    // 로그아웃 버튼을 클릭하면 사용자의 로그인 정보를 삭제하고 로그인 페이지로 리디렉션
    const handleLogout = () => {
        
    };

    return(
        <div>
            <header>
                <nav>
                    <Link to="/">홈</Link>
                    <Link to="/profile">프로필</Link>
                    <Link to="/test">테스트</Link>
                    <Link to="results">결과보기</Link>
                    <div className="space-x-4">
                        {user ? (
                        <>
                        {/* 다른 페이지로 가는 버튼 필요 */}
                             <button onClick={handleLogout}>로그아웃</button>
                        </>
                        ):(
                            <Link to="/login">로그인</Link>
                        )}
                    </div>
                </nav>
            </header>
            <main className="container mx-auto pt-10 main">{children}</main>
        </div>
    );
};

export default Layout;