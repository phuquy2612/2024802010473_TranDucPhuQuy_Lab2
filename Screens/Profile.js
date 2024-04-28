import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactThumbnail from '../Components/ContactThumbnail';
import DetailListItem from '../Components/DetailListItem';
import colors from '../utility/Cols';

const Profile = ({ route }) => {
  // Destructuring the contact details from the route params
  const { contact } = route.params;
  const { avatar, name, email, phone, cell } = contact;

  return (
    <View style={styles.container}>
      {/* Avatar Section */}
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>

      {/* Details Section */}
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Profile;
