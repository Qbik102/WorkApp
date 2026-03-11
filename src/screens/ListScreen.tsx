import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Item = {
  id: string;
  title: string;
  category: string;
  location: string;
  price: string; // zastanowić się czy powinno być number czy string (np. "20 zł")
  date: string;
  description: string;
};

const sampleData: Item[] = [
  { id: '1', title: 'Naprawa cieknącego kranu', category: 'Hydraulik', location: 'Warszawa, Mokotów', price: '150 PLN', date: 'Dzisiaj', description: 'Naprawa cieknącego kranu w łazience' },
  { id: '2', title: 'Montaż gniazdek i lampy', category: 'Elektryk', location: 'Kraków, Centrum', price: '250 PLN', date: 'Jutro', description: 'Montaż gniazdek i lampy w salonie' },
  { id: '3', title: 'Malowanie pokoju (15m2)', category: 'Remont', location: 'Poznań, Rataje', price: '800 PLN', date: 'Za 2 dni', description: 'Malowanie pokoju o powierzchni 15m2' },
  { id: '4', title: 'Skręcenie szafy z IKEI', category: 'Montaż', location: 'Wrocław, Krzyki', price: '200 PLN', date: 'W ten weekend', description: 'Skręcenie szafy z IKEI' },
];

export default function ListScreen() {

    const navigation = useNavigation<any>();

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.priceTag}>{item.price}</Text>
            </View>
                
            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>🛠️{item.category}</Text>
                <Text style={styles.detailText}>📍{item.location}</Text>
            </View>

            <View style={styles.cardFooter} >
                <Text style={styles.dateText}>📅{item.date}</Text>
                <Pressable style={styles.actionButton} onPress={() => navigation.navigate("OrderDetails", { order: item })}>
                    <Text style={styles.actionButtonText}>Szczegóły</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Lista zleceń</Text>
                <Text style={styles.headerSubtitle}>Znajdź fachowca w swojej okolicy</Text>
            </View>

            <FlatList 
                style={styles.listContent}
                data={sampleData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7', // Spójne tło aplikacji
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  listContent: {
    padding: 20,
    paddingBottom: 40, // Miejsce na dole, żeby ostatnia karta nie przyklejała się do brzegu
  },
  
  // Style pojedynczej karty
  card: {
    backgroundColor: '#fff',
    borderRadius: 16, // Zaokrąglone rogi spójne z formularzami
    padding: 16,
    marginBottom: 16, // Odstęp między kartami
    // Delikatny cień dodający głębi
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1, // Pozwala cenie zająć miejsce po prawej, a tytuł łamie się na nowe linie
    paddingRight: 10,
  },
  priceTag: {
    fontSize: 16,
    fontWeight: '800',
    color: '#007AFF', // Niebieski akcent
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  dateText: {
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#EEF4FF', // Bardzo jasny niebieski dla przycisku wewnątrz karty
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#007AFF',
    fontWeight: '700',
    fontSize: 13,
  }
});