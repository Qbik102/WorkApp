import React, { useState } from "react";
import { View, Text,TextInput,Pressable, StyleSheet, KeyboardAvoidingView, ScrollView, Alert, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function AddOrderScreen() {
    // Tutaj będziemy przechowywać dane z formularza
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    // Stan do przechowywania wybranego zdjęcia
    const [image, setImage] = useState<string | null>(null);

    const takePhoto = async () => {
        // Prośba o pozwolenie na dostęp do aparatu
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if(permissionResult.granted === false){
            Alert.alert("Brak dostępu do kamery!");
            return;
        }

        // Uruchamiamy aparat
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true, // przycinanie zdjęcia
            aspect: [4, 3], // proporcje zdjęcia
            quality: 0.5, // kompresja zdjęcia
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); // zapisujemy URI zdjęcia w stanie
        }
    }
    
    const handleSubmit = () => {
        if (!title || !category || !location || !price || !date) {
            alert("Proszę wypełnić wszystkie wymagane pola!");
            return;
        }
        // Tutaj dodamy logikę wysyłania danych do backendu
        console.log("Zlecenie dodane:", { title, category, location, price, date, description });
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Dodaj nowe zlecenie</Text>
                <Text style={styles.subtitle}>Wypełnij szczegóły zlecenia</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.formCard}>
            {/* Tytuł zlecenia */}
                <Text style={styles.label}>Tytuł zlecenia</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Napisz tytuł zlecenia"
                    value={title}
                    onChangeText={setTitle}
                />
            {/* Kategoria */}
                <Text style={styles.label}>Kategoria</Text>
                <TextInput
                    style={styles.input}
                    placeholder="np. Hydraulik, Elektryk"
                    value={category}
                    onChangeText={setCategory}
                />
            {/* Lokalizacja */}
                <Text style={styles.label}>Lokalizacja</Text>
                <TextInput
                    style={styles.input}
                    placeholder="np. Kraków, Warszawa"
                    value={location}
                    onChangeText={setLocation}
                />
            {/* Cena */}
                <Text style={styles.label}>Cena</Text>
                <TextInput
                    style={styles.input}
                    placeholder="np. 150 PLN"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />
            {/* Termin wykonania */}
                <Text style={styles.label}>Termin wykonania</Text>
                <TextInput
                    style={styles.input}
                    placeholder="np. 2023-03-15"
                    value={date}
                    onChangeText={setDate}
                />
            {/* Opis zlecenia */}
                <Text style={styles.label}>Opis zlecenia (opcjonalnie)</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Dodatkowe informacje o zleceniu"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                    numberOfLines={4}
            />

            {/* Sekcja dodawania zdjęcia */}
            <Text style={styles.label}>Dodaj zdjęcie (opcjonalnie)</Text>
            {/* Podgląd wybranego zdjęcia */}
            {image && (
                <View >
                    <Image source={{ uri: image }} style={{ width: 200, height: 150}} />
                </View>
            )}
            {/* Przycisk do robienia zdjęcia */}
            <Pressable style={styles.primaryButton} onPress={takePhoto}>
                <Text style={styles.primaryButtonText}>Zrób zdjęcie</Text>
            </Pressable>

            {/* Przycisk dodaj */}
            <Pressable style={styles.primaryButton} onPress={handleSubmit}>
                <Text style={styles.primaryButtonText}>Dodaj zlecenie</Text>
            </Pressable>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7', // Jasnoszare tło zgodne z Dashboardem
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        marginBottom: 20,
        marginTop: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 15,
        color: '#666',
        marginTop: 5,
    },
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 16, // Zaokrąglone rogi karty
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        marginBottom: 20, // Odstęp między polami
    },
    textArea: {
        minHeight: 100, // Wysokość dla pola wieloliniowego
        paddingTop: 16,
    },
    primaryButton: {
        backgroundColor: '#007AFF', // Flagowy niebieski akcent
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: "#007AFF",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});