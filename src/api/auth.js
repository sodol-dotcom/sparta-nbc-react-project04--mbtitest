// 회원가입, 로그인, 프로필 조회, 프로필 수정 등과 관련된 모든 API 요청 처리
import axios from 'axios';      // HTTP 요청을 보내기 위한 라이브러리

const API_URL = 'https://moneyfulpublicpolicy.co.kr';       // 주소 확인

// 회원가입 API 요청 처리
export const register = async (userData) => {
    const response = await axiox.post(`${API_URL}/register`, userData);
    return response.data;       // 서버의 응답 데이터 반환     
}

// 로그인 API 요청 처리
export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
}

// 프로필 조회 API 요청 처리
export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`    // JWT 토큰을 헤더에 추가
        }
    });
    return response.data;   // 서버의 응답 데이터 반환
}
