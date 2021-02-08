import React, { useEffect, useState } from "react";
import "./App.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import Page from "./pages/Page/Page";
import { store } from "./state/store";

function App() {
  const [loader, setLoader] = useState<Boolean>(false);
  useEffect(() => {
    store.subscribe(() => {
      console.log('LOADER CHANGE', loader)
      setLoader(store.getState().ui.pending);
    });
  });

  const spinner = loader ? <LinearProgress /> : null;

  return (
    <div className="App">
      {spinner}
      <Page />
    </div>
  );
}

export default App;
