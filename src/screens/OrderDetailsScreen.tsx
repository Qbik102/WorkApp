import React from "react";
import { View, Text, StyleSheet, Alert, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function OrderDetailsScreen() {

    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    // Dane z listy 
    const order = route.params?.order;

    const handleCOntact = () => {
        // Tutaj dodamy logikę kontaktu z wykonawcą (np. otwarcie czatu lub dzwonienie)
        navigation.navigate("Dashboard", {targetTab:"Wiadomości"});
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleAcceptOrder = () => {
        // Tutaj dodamy logikę akceptacji zlecenia przez wykonawcę
        Alert.alert("Zlecenie zaakceptowane");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={handleGoBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Powrót</Text>
                </Pressable>
                <Text style={styles.topBarTitle}>Szczegóły zlecenia</Text>
            </View>

            <ScrollView style={styles.scrollContent} showsHorizontalScrollIndicator={false}>
                <View style={styles.headerSection}>
                    <Text style={styles.title}>{order?.title}</Text>
                    <Text style={styles.price}>{order?.price}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Informacje o zleceniu</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Kategoria:</Text>
                        <Text style={styles.infoValue}>{order?.category}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Lokalizacja:</Text>
                        <Text style={styles.infoValue}>{order?.location}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Data:</Text>
                        <Text style={styles.infoValue}>{order?.date}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Opis zlecenia</Text>
                    <Text style={styles.descriptionText}>{order?.description}</Text>
                </View>

            </ScrollView>
            <View style={styles.bottomActionContainer}>
                <Pressable style={styles.primaryButton} onPress={handleAcceptOrder}>
                    <Text style={styles.primaryButtonText}>Zaakceptuj zlecenie</Text>
                </Pressable>

                <Pressable style={styles.secondaryButton} onPress={handleCOntact}>
                    <Text style={styles.secondaryButtonText}>Skontaktuj się z wykonawcą</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7', // Spójne tło aplikacji
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
        width: 80, // Ustalona szerokość, żeby tytuł był na środku
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
        width: 80, // Tyle samo co backButton
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    headerSection: {
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    price: {
        fontSize: 22,
        fontWeight: '800',
        color: '#007AFF',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infoLabel: {
        fontSize: 15,
        color: '#666',
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    descriptionText: {
        fontSize: 15,
        color: '#444',
        lineHeight: 22,
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
        marginBottom: 12, // Odstęp między przyciskami
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
    secondaryButton: {
        backgroundColor: 'transparent',
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#007AFF', // Niebieska ramka zamiast tła
    },
    secondaryButtonText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});