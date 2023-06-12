import { Text } from 'react-native'
const ProfileScreen = ({ navigation, route }) => {
    return (
        <>
            <Text> This is the { route.params.name } </Text>
        </>
 )


}

export default ProfileScreen