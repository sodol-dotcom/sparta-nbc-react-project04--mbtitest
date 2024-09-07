import { useEffect } from React;

const Layout = ({ childeren }) => {
    const navigate = useNavigate();

    // 이 곳에서 로그인 하지 않은 사용자를 login 페이지로 보내주기
    useEffect(() => {
    
    }, [])

    const handleLogout = () => {
        
    };

    return(
        <div>
            <header>
                <nav>
                    <Link to="/">홈</Link>
                    <div className="space-x-4">
                        {user ? (
                        <>
                        {* 다른 페이지로 가는 버튼 필요 *}
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