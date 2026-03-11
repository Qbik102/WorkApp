import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
    
    const navigation = useNavigation<any>();
    
    //przykładowe dane użytkownika - w przyszłości będą pobierane z backendu
    const user = {
    name: "Karol Kowalski",
    email: "karol.kowalski@przyklad.pl",
    specialization: "Elektryk / Hydraulik",
    }

    const handleLogout = () => {
        navigation.replace("Login"); 
    }

    const handleEditProfile = () => {
        // Tutaj dodamy logikę edycji profilu użytkownika
        navigation.navigate("EditProfile");
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>KK</Text>
                </View>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.spec}>{user.specialization}</Text>
            </View>

            <View style={styles.actionContainer}>
                <Pressable style={styles.editButton} onPress={handleEditProfile}>
                    <Text style={styles.editButtonText}>Edytuj profil</Text>
                </Pressable>

                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Wyloguj się</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F5F5F7', // Spójne tło
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  spec: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },
  email: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  actionContainer: {
    marginTop: 30, // Odstęp między kartą a przyciskami
  },
  editButton: {
    backgroundColor: '#007AFF', // Standardowy niebieski akcent
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // Odstęp między przyciskami
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FFF0F0', // Jasnoczerwone tło (ostrzegawcze)
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFDBDB',
  },
  logoutButtonText: {
    color: '#FF3B30', // Czerwony tekst
    fontSize: 16,
    fontWeight: 'bold',
  },
})