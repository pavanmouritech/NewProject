import React from "react";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/rootnavigation";
import { store } from "./src/redux/store/store";


export default function RootApp () {
  return(
    <Provider store={store}>
        <RootNavigation />
    </Provider>
  );
}