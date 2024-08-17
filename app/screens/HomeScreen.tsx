import { AuthSessionResult } from "expo-auth-session";
import { Text } from "react-native";

export default function HomeScreen({ result }: { result: AuthSessionResult}) {

  return (
    <Text>
      HERE from there: <Text>{JSON.stringify(result, null, 2)}</Text>
    </Text>
  );
}

function extractToken(result: AuthSessionResult) {
  if (result.type !== "success") {
    return null;
  }

  const { session_state, code } = result.params;

  return `${session_state} ${session_state}`;
}