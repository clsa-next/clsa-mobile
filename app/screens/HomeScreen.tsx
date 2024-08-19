import { AuthSessionResult } from "expo-auth-session";
import { Text } from "react-native";

export default function HomeScreen({ result }: { result: AuthSessionResult}) {

  return (
    <Text>
      HERE from there: <Text>{JSON.stringify(result, null, 2)}</Text>
    </Text>
  );
}
