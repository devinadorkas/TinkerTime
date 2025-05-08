import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { MagicStar, Medal } from 'iconsax-react-native';
import { challengeList } from '../../data';
import { fontType, colors } from '../../theme';

const Challenge = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎉 Weekly Challenges</Text>
        <Text style={styles.subtitle}>Join a fun craft challenge and win sweet rewards!</Text>
      </View>

      {challengeList.map(challenge => (
        <View key={challenge.id} style={styles.card}>
          <Image source={{ uri: challenge.image }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{challenge.title}</Text>
            <Text style={styles.cardDesc}>{challenge.description}</Text>
            <Text style={styles.deadline}>🗓 Until {challenge.deadline}</Text>
            <View style={styles.rewardRow}>
              <Medal size={18} color={colors.yellow()} variant="Bold" />
              <Text style={styles.rewardText}> {challenge.reward}</Text>
            </View>
            <Pressable style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Challenge</Text>
            </Pressable>
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <MagicStar size="20" color={colors.purple()} variant="Bold" />
        <Text style={styles.footerText}>More fun every week, stay tuned! 💫</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream(),
  },
  header: {
    backgroundColor: colors.lightPink(0.4),
    padding: 25,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.pink(),
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontType['Otf-Regular'],
    color: colors.darkPink(),
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.white(),
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: colors.purple(),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: fontType['Otf-Bold'],
    color: colors.purple(),
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    fontFamily: fontType['Otf-Regular'],
    color: colors.gray(),
    marginBottom: 10,
  },
  deadline: {
    fontSize: 13,
    color: colors.darkPink(),
    marginBottom: 5,
    fontFamily: fontType['Otf-Medium'],
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rewardText: {
    fontSize: 14,
    color: colors.yellow(),
    fontFamily: fontType['Otf-Medium'],
  },
  joinButton: {
    backgroundColor: colors.pink(),
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    color: colors.white(),
    fontFamily: fontType['Otf-Bold'],
    fontSize: 15,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.gray(),
    fontFamily: fontType['Otf-MediumItalic'],
  },
});

export default Challenge;
