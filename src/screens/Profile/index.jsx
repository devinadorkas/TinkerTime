import React from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Edit, Heart, Bookmark, Setting, Logout } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { userData, recentActivities } from '../../data';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Profile */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
          <Pressable style={styles.editButton}>
            <Edit size={18} color={colors.purple()} />
          </Pressable>
        </View>
        
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <Text style={styles.userBio}>{userData.bio}</Text>
        <Text style={styles.joinedDate}>{userData.joinedDate}</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userData.stats.workshops}</Text>
          <Text style={styles.statLabel}>Workshops</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userData.stats.collections}</Text>
          <Text style={styles.statLabel}>Collections</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userData.stats.favorites}</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {recentActivities.map(activity => (
          <View key={activity.id} style={styles.activityItem}>
            <View style={styles.activityIcon}>
              {activity.type === 'workshop' && <Heart size={20} color={colors.pink()} />}
              {activity.type === 'collection' && <Bookmark size={20} color={colors.purple()} />}
              {activity.type === 'favorite' && <Heart size={20} color={colors.darkPink()} variant="Bold" />}
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Settings (tetap di sini karena bukan data dinamis) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <Pressable style={styles.menuItem}>
          <Setting size={24} color={colors.purple()} />
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>
        <Pressable style={styles.menuItem}>
          <Logout size={24} color={colors.darkPink()} />
          <Text style={styles.menuText}>Log Out</Text>
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
    alignItems: 'center',
    padding: 25,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPurple(0.3),
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.pink(),
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.white(),
    borderRadius: 15,
    padding: 5,
    elevation: 3,
    shadowColor: colors.purple(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userName: {
    fontFamily: fontType['Otf-Bold'],
    fontSize: 22,
    color: colors.darkPurple(),
    marginBottom: 5,
  },
  userEmail: {
    fontFamily: fontType['Otf-Medium'],
    fontSize: 14,
    color: colors.gray(0.7),
    marginBottom: 10,
  },
  userBio: {
    fontFamily: fontType['Otf-MediumItalic'],
    fontSize: 14,
    color: colors.darkPurple(),
    textAlign: 'center',
    marginBottom: 5,
    paddingHorizontal: 30,
  },
  joinedDate: {
    fontFamily: fontType['Otf-Light'],
    fontSize: 12,
    color: colors.gray(0.6),
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPurple(0.3),
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: fontType['Otf-ExtraBold'],
    fontSize: 24,
    color: colors.pink(),
    marginBottom: 5,
  },
  statLabel: {
    fontFamily: fontType['Otf-Medium'],
    fontSize: 14,
    color: colors.darkPurple(),
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPurple(0.3),
  },
  sectionTitle: {
    fontFamily: fontType['Otf-Bold'],
    fontSize: 18,
    color: colors.darkPurple(),
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightPink(0.3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontFamily: fontType['Otf-SemiBold'],
    fontSize: 16,
    color: colors.darkPurple(),
    marginBottom: 2,
  },
  activityDate: {
    fontFamily: fontType['Otf-Light'],
    fontSize: 12,
    color: colors.gray(0.6),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPurple(0.2),
  },
  menuText: {
    fontFamily: fontType['Otf-Medium'],
    fontSize: 16,
    color: colors.darkPurple(),
    marginLeft: 15,
  },
});

export default Profile;