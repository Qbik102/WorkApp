import React, {useState}from "react";
import { View, Text, StyleSheet, TextInput, Pressable, FlatList, KeyboardAvoidingView } from "react-native";  

// typ pojedynczej wiadomości
type Message = {
    id: string;
    text: string;
    sender: "me" | "other";
    timestamp: string;
};

export default function ChatScreen() {

    // pole wpisywania nowej wiadomości
    const [inputText, setInputText] = useState('');

    // Początkowa, udawana historia czatu
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Dzień dobry, czy ogłoszenie o naprawie kranu jest aktualne?', sender: 'other', timestamp: '10:00' },
        { id: '2', text: 'Dzień dobry! Tak, jak najbardziej.', sender: 'me', timestamp: '10:05' },
        { id: '3', text: 'Kiedy miałby Pan czas podjechać na Mokotów?', sender: 'other', timestamp: '10:06' },
    ]);

    // Funkcja wysłania wiadomości
    const handleSend = () => {
        if (inputText.trim() === '') return; // nie wysyłaj pustych wiadomości

        const newMessage: Message = {
            id: (messages.length + 1).toString(),
            text: inputText,
            sender: 'me',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        //Dodajemy nową wiadomość do istniejącej listy
        setMessages([...messages, newMessage]);
        setInputText(''); // wyczyść pole tekstowe
    }

    const renderMessage = ({ item }: { item: Message }) => {
        if (item.sender === 'me') {
            return(
                <View style={[styles.messageRow, styles.myMessageRow]}>
                    <View style={[styles.messageBubble, styles.myBubble]}>
                        <Text style={[styles.messageText, styles.myMessageText]}>{item.text}</Text>
                        <Text style={[styles.timestamp, styles.myTimestamp]}>{item.timestamp}</Text>
                    </View>
                </View>
            );   
        }

        return(
            <View style={[styles.messageRow, styles.otherMessageRow]}>
                <View style={[styles.messageBubble, styles.otherBubble]}>
                    <Text style={[styles.messageText, styles.otherMessageText]}>{item.text}</Text>
                    <Text style={[styles.timestamp, styles.otherTimestamp]}>{item.timestamp}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Tutaj można dodać nagłówek z imieniem wykonawcy */}
            <View style={styles.topBar}>
                <Text>Jan Kowalski</Text>
            </View>

            <KeyboardAvoidingView style={styles.keyboardAvoid} >
                {/* Lista wiadomości */}
                <FlatList
                    style={styles.chatContent}
                    data={messages}
                    renderItem={renderMessage}
                    keyExtractor={(item) => item.id}
                />
                {/* Pole do wpisywania nowej wiadomości i przycisk wysyłania */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={inputText}
                        onChangeText={setInputText}
                        placeholder="Napisz wiadomość..."
                    />
                    <Pressable style={styles.sendButton} onPress={handleSend}>
                        <Text style={styles.sendButtonText}>Wyślij</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7', // Główne tło aplikacji
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
    backButton: { width: 80 },
    backButtonText: { color: '#007AFF', fontSize: 16, fontWeight: '600' },
    topBarTitle: { fontSize: 17, fontWeight: 'bold', color: '#1a1a1a' },
    spacer: { width: 80 },
    
    keyboardAvoid: {
        flex: 1,
    },
    chatContent: {
        padding: 16,
        paddingBottom: 20,
    },
    
    // Układ całego wiersza wiadomości
    messageRow: {
        marginBottom: 12,
        flexDirection: 'row',
    },
    myMessageRow: {
        justifyContent: 'flex-end', // Moje do prawej
    },
    otherMessageRow: {
        justifyContent: 'flex-start', // Inne do lewej
    },
    
    // Style dymków
    messageBubble: {
        maxWidth: '75%',
        padding: 12,
        borderRadius: 18,
    },
    myBubble: {
        backgroundColor: '#007AFF',
        borderBottomRightRadius: 4, // Efekt ogonka z prawej
    },
    otherBubble: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 4, // Efekt ogonka z lewej
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    
    // Teksty w dymkach
    messageText: {
        fontSize: 15,
        lineHeight: 20,
    },
    myMessageText: { color: '#fff' },
    otherMessageText: { color: '#1a1a1a' },
    
    // Godziny pod wiadomością
    timestamp: {
        fontSize: 11,
        marginTop: 4,
        alignSelf: 'flex-end',
    },
    myTimestamp: { color: 'rgba(255, 255, 255, 0.7)' },
    otherTimestamp: { color: '#999' },
    
    // Pasek wpisywania na dole
    inputContainer: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#F5F5F7',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 15,
        color: '#333',
        maxHeight: 100,
    },
    sendButton: {
        marginLeft: 12,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#007AFF',
        borderRadius: 20,
    },
    sendButtonDisabled: {
        backgroundColor: '#B0D4FF', // Jaśniejszy kolor, gdy nie można kliknąć
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});