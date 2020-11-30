import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import "@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-enterprise/all-modules/dist/styles/ag-theme-alpine.css";
import { AllModules, LicenseManager, ModuleRegistry} from  "@ag-grid-enterprise/all-modules";

import 'src/assets/styles/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


LicenseManager.setLicenseKey("");
ModuleRegistry.registerModules(AllModules);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
