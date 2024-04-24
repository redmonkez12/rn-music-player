import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { SafeAreaProvider } from "expo-dev-menu/vendored/react-native-safe-area-context/src";

const App = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation/>

			<StatusBar style="auto"/>
		</SafeAreaProvider>
	);
}

const RootNavigation = () => {
	return (
		<Stack>

		</Stack>
	);
}

export default App;