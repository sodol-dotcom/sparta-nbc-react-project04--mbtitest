import axios from 'axios'

const API_URL = 'http://localhost:5000/testResults';

// 테스트 결과를 가져오는 함수
export const getTestResults = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// 새로운 테스트 결과를 생성하는 함수
export const createTestResult = async (resultData) => {
    const response = await axios.post(API_URL, resultData);
    return response.data;
};

// 특정 테스트 결과를 삭제하는 함수
export const deleteTestResult = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

// 특정 테스트 결과의 가시성을 업데이트하는 함수
export const updateTestResultVisibility = async (id, visibility) => {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility });
    return response.data;
};
