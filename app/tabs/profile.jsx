import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';


const favoriteCharacters = [

];

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/images/pfp.jpg')} 
                style={styles.profileImage} 
            />
            <Text style={styles.name}>Bernard Dela Cerna</Text>
            <Text style={styles.bio}>
            "Unlock the power of flowers."
            </Text>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>

            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {favoriteCharacters.map(character => (
                    <View key={character.id} style={styles.characterContainer}>
                        <Image 
                            source={character.image} 
                            style={styles.characterImage} 
                        />
                        <Text style={styles.characterName}>{character.name}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.socialMediaContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Instagram</Text>
                </TouchableOpacity>
            </View>

      
            <TouchableOpacity style={styles.settingsButton}>
                <Text style={styles.settingsButtonText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f06090',
        padding: 10,
    },
    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bio: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    editButton: {
        backgroundColor: '#adaee9',
        borderRadius: 25,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    favoriteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollView: {
        marginBottom: 20,
    },
    characterContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    characterImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    characterName: {
        textAlign: 'center',
        fontSize: 14,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: '#adaee9',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    socialButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    settingsButton: {
        backgroundColor: '#bdc3c7',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    settingsButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#bdc3c7',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default Profile;
