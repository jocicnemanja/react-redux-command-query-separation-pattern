import React from "react";
import "./App.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import Page from "./pages/Page/Page";
import { uiPendingSelector } from "./state/ui/selectors";

function App() {
  const pending = useSelector(uiPendingSelector);

  const linearProgress = pending ? <LinearProgress /> : null;

  return (
    <div className="App">
      {linearProgress}
      <Page />
    </div>
  );
}

export default App;
