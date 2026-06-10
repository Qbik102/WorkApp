import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegistrationScreen({navigation}: any) {
    //stany dla formularza rejestracji 
    const [email, setEmail] = useState("");
    const [useName, setUseName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [city, setCity] = useState("");
    
    const handleRegister = () => {
        if(password !== confirmPassword){
            Alert.alert("Hasła nie są takie same!");
            return;
        }

        if(password.length < 6){
            Alert.alert("Hasło musi mieć co najmniej 6 znaków!");
            return;
        }

        Alert.alert("Sukces! Zarejestrowano użytkownika: " + useName);
    }

    return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}
         style={styles.keyboardAvoid}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Zarejestruj się</Text>
        {/* Pole email */}
        <Text style={styles.label}>Podaj email</Text>
        <TextInput
            style={styles.input}
            placeholder='E-mail'
            value={email}
            onChangeText={setEmail}
        />
        {/* Pole nazwa użytkownika */}
        <Text style={styles.label}>Podaj nazwę użytkownika</Text>
        <TextInput
            style={styles.input}
            placeholder='Nazwa użytkownika'
            value={useName}
            onChangeText={setUseName}
        />
        <Text style={styles.label}>Podaj hasło</Text>
        {/* Pole hasło */}
        <TextInput
            style={styles.input}
            placeholder='Hasło'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        {/*Potwierdzenie hasła */}
        <Text style={styles.label}>Powtórz hasło</Text>
        <TextInput
            style={styles.input}
            placeholder='Powtórz hasło'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true} // Również musi ukrywać znaki
        />
        
        <Text style={styles.label}>Podaj specjalizację</Text>
        {/* Pole specjalizacja */}
        <TextInput
            style={styles.input}
            placeholder='np. hydraulik, elektryk'
            value={specialization}
            onChangeText={setSpecialization}
        />
        <Text style={styles.label}>Podaj miasto</Text>
        {/* Pole miasto */}
        <TextInput
            style={styles.input}
            placeholder='np.Kraków, Warszawa'
            value={city}
            onChangeText={setCity}
        />
        {/* Przycisk rejestracji */}
        <Pressable style={styles.primaryButton}  onPress={handleRegister}>
            <Text style={styles.primaryButtonText}>Zarejestruj się</Text>
        </Pressable>
        {/* Przycisk powrotu do logowania */}
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.secondaryButtonText}>Masz już konto? Zaloguj się</Text>
        </Pressable>

        </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7', // To samo jasnoszare tło co w Dashboardzie
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a', // Ciemny tekst nagłówka
        marginBottom: 30,
        marginTop: 20,
    },
    keyboardAvoid: {
        flex: 1,
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 40,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666', // Szary odcień etykiet
        marginBottom: 6,
        marginLeft: 4,
    },
    input: {
        height: 50, // Wyższe, bardziej przyjazne dla palca pola
        backgroundColor: '#fff', // Białe wypełnienie ładnie odcina się od szarego tła
        borderRadius: 12, // Zaokrąglone rogi spójne z aplikacją
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 16,
        color: '#333',
    },
    primaryButton: {
        backgroundColor: '#007AFF', // Niebieski akcent nawigacji z Dashboardu
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        // Delikatny cień
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
        color: '#007AFF', // Niebieski tekst dla linków
        fontSize: 15,
        fontWeight: '600',
    }
});