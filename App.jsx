import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { Element3, Receipt21, Clock, Message, SearchNormal } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

// Import images
const images = {
    GlassesCase: require('./src/assets/images/img1.jpg'),
    SticksDecor: require('./src/assets/images/img2.jpg'),
    DeskOrganizer: require('./src/assets/images/img3.jpg'),
};

const LandingPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>TinkerTime!</Text>
                <Text style={styles.subtitle}>Build, Create, Inspire Your DIY Journey</Text>
                <View style={styles.searchContainer}>
                    <SearchNormal size="20" color={colors.deepBlue()} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for projects..."
                        placeholderTextColor={colors.deepBlue(0.5)}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Building</Text>
                <Text style={styles.sectionTitle}>Furniture</Text>
                <Text style={styles.sectionTitle}>Decoration</Text>
            </View>

            <View style={styles.tutorials}>
                <Text style={styles.tutorialTitle}>Find some TinkerTime tutorials →</Text>
                <View style={styles.tutorialCard}>
                    <Image source={images.GlassesCase} style={styles.tutorialImage} />
                    <Text style={styles.tutorialName}>Glasses Case</Text>
                    <Text style={styles.tutorialDetails}>Simple Hand Sewing</Text>
                    <Text style={styles.tutorialDetails}>03.02.21 9:7-33</Text>
                </View>
                <View style={styles.tutorialCard}>
                    <Image source={images.SticksDecor} style={styles.tutorialImage} />
                    <Text style={styles.tutorialName}>Stick Wall Decoration</Text>
                    <Text style={styles.tutorialDetails}>Made by Popsicle Sticks</Text>
                    <Text style={styles.tutorialDetails}>03.02.21 16:15</Text>
                </View>
                <View style={styles.tutorialCard}>
                    <Image source={images.DeskOrganizer} style={styles.tutorialImage} />
                    <Text style={styles.tutorialName}>Cute Desk Organizer</Text>
                    <Text style={styles.tutorialDetails}>DIY Ceramic Basket</Text>
                    <Text style={styles.tutorialDetails}>05.02.22 14:12</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>COPY/2022    01:50</Text>
                <Pressable style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Post another tutorial</Text>
                </Pressable>
                <Pressable style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Ask Carmela a question</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
    },
    header: {
        padding: 20,
        backgroundColor: colors.lightBlue(), // Updated to lightBlue
    },
    title: {
        fontSize: 30,
        fontFamily: fontType['Otf-ExtraBold'],
        color: colors.deepBlue(), // Updated to deepBlue
    },
    subtitle: {
        fontSize: 20,
        fontFamily: fontType['Otf-Regular'],
        color: colors.darkBlue(), // Updated to darkBlue
        marginTop: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white(),
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fontType['Otf-Regular'],
        color: colors.deepBlue(), // Updated to deepBlue
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: colors.lightBlue(0.2), // Updated to lightBlue with opacity
    },
    sectionTitle: {
        fontFamily: fontType['Otf-SemiBold'],
        color: colors.darkBlue(), // Updated to darkBlue
    },
    tutorials: {
        padding: 20,
    },
    tutorialTitle: {
        fontSize: 20,
        fontFamily: fontType['Otf-Bold'],
        color: colors.deepBlue(), // Updated to deepBlue
        marginBottom: 10,
    },
    tutorialCard: {
        backgroundColor: colors.white(),
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: colors.black(),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    tutorialImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    tutorialName: {
        fontSize: 18,
        fontFamily: fontType['Otf-SemiBold'],
        color: colors.deepBlue(), // Updated to deepBlue
    },
    tutorialDetails: {
        fontSize: 14,
        fontFamily: fontType['Otf-Regular'],
        color: colors.darkBlue(), // Updated to darkBlue
    },
    footer: {
        padding: 20,
        backgroundColor: colors.lightBlue(0.2), // Updated to lightBlue with opacity
        alignItems: 'center',
    },
    footerText: {
        fontFamily: fontType['Otf-Regular'],
        color: colors.darkBlue(), // Updated to darkBlue
    },
    footerButton: {
        backgroundColor: colors.mediumBlue(), // Updated to mediumBlue
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    footerButtonText: {
        fontFamily: fontType['Otf-Medium'],
        color: colors.deepBlue(), // Updated to deepBlue
    },
});

export default LandingPage;