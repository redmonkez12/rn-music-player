import { Stack } from "expo-router";
import { View } from "react-native";

import { defaultStyles } from "@/styles";
import { StackScreenWithSearchBar } from "@/constants/layout";

const FavoritesScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: "Playlists",
                    }}/>
            </Stack>
        </View>
    );
};

export default FavoritesScreenLayout;