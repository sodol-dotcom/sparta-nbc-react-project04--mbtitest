import React, { useState } from "react";
import { updateMyPage } from "../api/auth";

const MyPage = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
      const updatedUser = await updateMyPage({ nickname }, token);
      setUser(updatedUser); // 사용자 상태 업데이트
      alert("프로필이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
      alert("프로필 업데이트에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">프로필 수정</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="새로운 닉네임 입력"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
