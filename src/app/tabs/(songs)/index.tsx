import { View, ScrollView } from "react-native";
import { defaultStyles } from "@/styles";
import { TracksList } from "@/components/TracksList";

const SongsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView>
                <TracksList scrollEnabled={false}/>
            </ScrollView>
        </View>
    );
};

export default SongsScreen;