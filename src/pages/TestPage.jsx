import React from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // AuthContext에서 user 가져오기

const Test = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // AuthContext에서 user 가져오기

  const handleTestSubmit = async (answers) => {
    if (!user || !user.id) {
      console.error("사용자 정보가 없습니다.");
      alert("로그인이 필요합니다.");
      return;
    }

    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
