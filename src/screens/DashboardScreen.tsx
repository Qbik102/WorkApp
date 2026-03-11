import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import ListScreen from "./ListScreen";
import AddOrderScreen from "./AddOrderScreen";
import ProfileScreen from "./ProfileScreen";
import ChatScreen from "./ChatScreen";

type Tab = 'Home' | 'Lista' | 'Dodaj' | 'Profil' | 'Wiadomości';

export default function DashboardScreen({navigation}: any) {
  const [name] = useState("Karol");
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  const route = useRoute<any>();

  useEffect(() => {
        // Jeśli dostaliśmy parametr "targetTab", przełączamy na tę zakładkę!
        if (route.params?.targetTab) {
            setActiveTab(route.params.targetTab);
        }
    }, [route.params?.targetTab]); // Nasłuchuj zmian tego konkretnego parametru
    
// KLUCZOWA ZMIANA: Funkcja, która decyduje co pokazać na środku
  const renderContent = () => {
        switch (activeTab) {
            case 'Home':
                return (
                    <View style={styles.centerContent}>
                        <View style={styles.header}>
                            <Text style={styles.welcomeTitle}>Witaj {name}</Text>
                            <Text>Miło cię widzieć</Text>
                        </View>
                        <View style={styles.centerContent}>
                            <Text>Witaj na ekranie głównym!</Text>
                        </View>
                    </View>
                );
            case 'Lista':
                return <ListScreen />; 
            case 'Wiadomości':
                return <ChatScreen />; 
            case 'Profil':
                return <ProfileScreen />; 
            case 'Dodaj':
                return <AddOrderScreen />; 
            default:
                return null;
        }
  };
  
  return (
    <SafeAreaView style={styles.container}>

      {/* Środek ekranu - pusta przestrzeń */}
      <View style={styles.mainContent}>
        {renderContent()}
      </View>

      {/* DOLNA NAWIGACJA */}
      <View style={styles.bottomBar}>
        {/* Zakładka Home */}
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('Home')}>
          <Text style={[styles.tabText, activeTab === 'Home' && styles.activeTabText]}>🏠</Text>
          <Text style={[styles.labelMini, activeTab === 'Home' && styles.activeTabText]}>Home</Text>
        </Pressable>

        {/* Zakładka Lista */}
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('Lista')}>
          <Text style={[styles.tabText, activeTab === 'Lista' && styles.activeTabText]}>📋</Text>
          <Text style={[styles.labelMini, activeTab === 'Lista' && styles.activeTabText]}>Lista</Text>
        </Pressable>

        {/* Przycisk DODAJ */}
        <Pressable style={styles.addBtn} onPress={() => setActiveTab('Dodaj')}>
          <Text style={styles.addBtnText}>+</Text>
        </Pressable>

        {/* Zakładka Wiadomości */}
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('Wiadomości')}>
          <Text style={[styles.tabText, activeTab === 'Wiadomości' && styles.activeTabText]}>✉️</Text>
          <Text style={[styles.labelMini, activeTab === 'Wiadomości' && styles.activeTabText]}>Wiadomości</Text>
        </Pressable>
        
        {/* Zakładka Profil */}
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('Profil')}>
          <Text style={[styles.tabText, activeTab === 'Profil' && styles.activeTabText]}>👤</Text>
          <Text style={[styles.labelMini, activeTab === 'Profil' && styles.activeTabText]}>Profil</Text>
        </Pressable>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ROZCIĄGA NA CAŁY EKRAN
    backgroundColor: '#F5F5F7',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    width: '100%', // Wymusza pełną szerokość
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1, // To wypełnia przestrzeń między headerem a paskiem na dole
  },  
bottomBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    // To jest kluczowe dla rozciągnięcia ikon:
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabText: {
    fontSize: 20, // Rozmiar "ikony" emoji
    color: '#999',
  },
  labelMini: {
    fontSize: 10,
    color: '#999',
  },
  activeTabText: {
    color: '#007AFF', // Kolor dla aktywnej zakładki
  },
  addBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30, // Lekkie uniesienie przycisku nad pasek
    elevation: 5,   // Cień na Android
    shadowColor: '#000', // Cień na iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  addBtnText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});