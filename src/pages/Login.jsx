import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth"; 
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // AuthContext에서 user 가져오기

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);

      // 받은 응답에서 user 정보와 accessToken 가져오기
      const token = response.accessToken;
      const userData = {
        id: response.userId,
        nickname: response.nickname,
        avatar: response.avatar,
      };

      // 토큰을 저장
      localStorage.setItem("accessToken", token);

      // 사용자 상태 업데이트
      setUser(userData);

      // 홈 페이지로 리디렉션
      navigate("/");
    } catch (error) {
      console.error(
        "로그인 오류:",
        error.response ? error.response.data : error.message
      );
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
