import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        무료 성격 테스트
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link
        to="/test"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        테스트 하기
      </Link>
    </div>
  );
};

export default Home;
