import React,{ useState } from "react";
import { View , Text, Pressable, Alert, TextInput, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen( {navigation}: any) {
    const [useEmail, setUseEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
        if (useEmail === "Kk" && password === "Kk") {
            navigation.replace("Dashboard");
        } else {
            Alert.alert("Nieprawidłowy email lub hasło");
        }
    };

    return(
    <SafeAreaView style={styles.container} >
        <Text style={styles.title}>Zaloguj się</Text>
        {/* Pole nazwa użytkownika */}
        <Text style={styles.label}>Podaj nazwę użytkownika</Text>
        <TextInput
            style={styles.input}
            placeholder="Nazwa użytkownika"
            value={useEmail}
            onChangeText={setUseEmail}
        />
        {/* Pole hasło */}
        <Text style={styles.label}>Podaj hasło</Text>
        <TextInput
            style={styles.input}
            placeholder="Hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        {/* Przycisk logowania */}
        <Pressable style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Zaloguj się</Text>
        </Pressable>
        {/* Przycisk rejestracji */}
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.secondaryButtonText}>Zarejestruj się</Text>
        </Pressable>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7', // Spójne jasnoszare tło
        padding: 24,
        justifyContent: 'center', // Wyśrodkowanie pionowe, idealne dla ekranu logowania
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 40, // Trochę więcej miejsca pod tytułem
        textAlign: 'center', // Wyśrodkowany tytuł wygląda lepiej na ekranie logowania
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
        marginBottom: 6,
        marginLeft: 4,
    },
    input: {
        height: 50,
        backgroundColor: '#fff', // Białe pola na szarym tle
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 20,
        color: '#333',
    },
    primaryButton: {
        backgroundColor: '#007AFF', // Ten sam niebieski akcent
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#007AFF',
        fontSize: 15,
        fontWeight: '600',
    }
});
    