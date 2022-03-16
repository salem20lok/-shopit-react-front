import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./app/App";

import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";

import "bootstrap/dist/css/bootstrap.min.css";

// i18n
import en from "./i18n/en.json";
import ar from "./i18n/ar.json";
import fr from "./i18n/fr.json";

import { Provider } from "react-redux";
import store from "./store/config/configureStore";

interface I18n {
  en: Record<string, string>;
  fr: Record<string, string>;
  ar: Record<string, string>;
}

const allMessages: I18n = { en, fr, ar };

const userLang: string = navigator.language.slice(0, 2);
// @ts-ignore
const messages: Record<string, string> = allMessages[userLang];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={messages} locale={"ar"} defaultLocale="fr">
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
