import { useState } from 'react';


const AuthForm = ({ mode, onSubmit }) => {

    // 무엇을 formData에 넣어야 할까요?
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        nickname: '',
    });

    // 각 입력 필드의 값이 변경될 때 호출 될 handleChange 함수
    // 입력이 변경될 때 formData를 업데이트하는 역할을 함
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 폼을 제출할 때 호출되는 함수 handleSubmit 함수
    // 입력된 데이터 검증하고, 서버로 보내기 전에 준비하는 역할, 구체적인 처리 방법은 onSubmit에 따라 달라짐
    const handleSubmit = (e) => {
        e.preventDefault();  // 폼의 기본 동작(페이지 새로고침) 막기
        onSubmit(formData);  // 부모 컴포넌트에서 전달받은 onSubmit 함수에 formData 전달
    };


  return (
    <form onSubmit={handleSubmit}>

        {/* id 입력 로직 */}
        <input onSubmit={handleSubmit}
            type="text"
            name="id"
            value={formData.id}
            onchange={handleChange}
            placeholder="아이디"
            required
        />
        
        {/* 비밀번호 입력 로직 */}
        <input 
            type=
            
        />

        {/* 닉네임 입력 로직 */}
        {mode === "signup" && (
            <input 
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="닉네임"
                required
                className="w-full p-4 border border-gray-300 rounded-lg"
            />
        )}
        <button type="submit">
            {mode === "login" ? "로그인" : "회원가입"}
        </button>


    </form>
  )
}
export default AuthForm