import React from 'react';
import { FlatList, StyleSheet, Text, Image, View, RefreshControl } from 'react-native';

const programmingLanguages = [
    {
      name: 'JavaScript',
      experience: '2 года изучения и 3 года практики',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png',
    },
    {
      name: 'Python',
      experience: '2 года изучения и 10 лет практики',
      logo: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
    },
    {
      name: 'GoLang',
      experience: '1 год изучения и 4 года практики',
      logo: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    },
  ];

function ProgrammingLanguageCard({ name, experience, logo }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} resizeMode="contain" />
      <Text style={styles.languageName}>{name}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  );
}

export default function MyProgrammingLanguages() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <FlatList
      data={programmingLanguages}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ProgrammingLanguageCard
          name={item.name}
          experience={item.experience}
          logo={item.logo}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 64,
  },
  card: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  experience: {
    fontSize: 16,
    color: '#555',
  },
});
