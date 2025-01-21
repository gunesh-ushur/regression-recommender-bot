import React, { useEffect } from "react";
import TestAutomation from "./components/TestAutomation";

function App() {
  useEffect(() => {
    console.log("✅ React App Loaded!");
  }, []);

  return (
    <div>
        <TestAutomation />
    </div>
  );
}

export default App;
