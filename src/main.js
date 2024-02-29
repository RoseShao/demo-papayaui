import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import papayaui from 'papayaui'
export function createApp() {
	const app = createSSRApp(App);
    app.use(papayaui)
	return {
		app,
	};
}
