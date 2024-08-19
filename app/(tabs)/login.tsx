import * as WebBrowser from "expo-web-browser";
import { AuthSessionResult, makeRedirectUri, useAuthRequest, useAutoDiscovery } from "expo-auth-session";
import { Button, Text, View } from "react-native";
import HomeScreen from "@/app/screens/HomeScreen";

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage() {
  const discovery = useAutoDiscovery("https://id.clsa.com/auth/realms/clsa");
  console.log(discovery?.discoveryDocument?.token_endpoint);

  // Create and load an auth request
  const [request, result, promptAsync] = useAuthRequest(
    {
      clientId: "ultra",
      redirectUri: makeRedirectUri({
        scheme: "clsamobile",
        path: "redirect",
      }),
      scopes: ["openid", "profile", "email"],
    },
    discovery
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Login!"
        disabled={!request}
        onPress={() => promptAsync().then((result) => request && queryAuthToken(result, request.codeVerifier || ""))}
      />
      {result && <HomeScreen result={result} />}
    </View>
  );
}

async function queryAuthToken(result: AuthSessionResult, codeverifier: string) {
  if (result.type !== "success") {
    return null;
  }

  const { session_state: sessionState, code: code } = result.params;

  const tokenResponse = await fetch("https://id.clsa.com/auth/realms/clsa/protocol/openid-connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: "ultra",
      redirect_uri: makeRedirectUri({
        scheme: "clsamobile",
        path: "redirect",
      }),
      code_verifier: codeverifier,
    }).toString(),
  });

  const tokens = await tokenResponse.json();

  console.log(JSON.stringify(tokens, null, 2));

  localStorage.setItem("token", tokens.access_token);

  return tokens;
}

