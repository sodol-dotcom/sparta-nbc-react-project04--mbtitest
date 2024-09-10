// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/Routes"; 

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppRoutes /> {/* 분리된 Routes 컴포넌트 사용 */}
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
