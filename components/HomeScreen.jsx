import { Button }  from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("ShitHead", { name: "Jane" })}
    />
  );
};



export default HomeScreen 