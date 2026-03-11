import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function EditProfileScreen() {

    const navigation = useNavigation<any>();

    const [name, setName] = useState("Karol Kowalski");
    const [email, setEmail] = useState("karol.kowalski@przyklad.pl");
    const [specialization, setSpecialization] = useState("Elektryk / Hydraulik");

    const handleSave = () => {
        // Tutaj dodamy logikę zapisywania zmian (np. wysłanie danych do backendu)
        alert("Zmiany zapisane!");
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Powrót</Text>
                </Pressable>
                <Text style={styles.topBarTitle}>Edytuj profil</Text>
            </View>

            <ScrollView>
                <Text style={styles.label}>Imię i nazwisko</Text>
                <TextInput 
                    value={name}
                    onChangeText={setName}
                    placeholder="Wpisz swoje imię i nazwisko"
                />

                <Text style={styles.label}>Email</Text>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Wpisz swój email"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Specjalizacja</Text>
                <TextInput 
                    value={specialization}
                    onChangeText={setSpecialization}
                    placeholder="Wpisz swoją specjalizację (np. Elektryk, Hydraulik)"
                />
            </ScrollView>

            <View style={styles.bottomActionContainer}>
                <Pressable onPress={handleSave} style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Zapisz zmiany</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        width: 80,
    },
    backButtonText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
    topBarTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    spacer: {
        width: 80,
    },
    formContainer: {
        padding: 24,
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
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 20,
        color: '#333',
    },
    bottomActionContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    primaryButton: {
        backgroundColor: '#007AFF',
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#007AFF",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});