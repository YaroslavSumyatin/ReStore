import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstrore-service";
import { BookstoreProvider } from "./components/bookstore-context";

import store from "./store";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookstoreProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreProvider>
		</ErrorBoundry>
	</Provider>
);
