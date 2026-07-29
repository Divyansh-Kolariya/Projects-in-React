import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selectedTabs = {selectedTab}/>
      <div className="content">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <Form />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
