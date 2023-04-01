import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Button title="Login" onPress={() => navigation.navigate()}>

        </Button>
      <Text>This is the homepage</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
