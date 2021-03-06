import { Provider } from "react-redux";
import "../styles/style.css";

import store from "../redux/store";


function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
