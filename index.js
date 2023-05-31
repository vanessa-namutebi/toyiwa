import { registerRootComponent } from "expo";

import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const Application = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
registerRootComponent(Application);
