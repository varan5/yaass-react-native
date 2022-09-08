import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Footer from '../../components/Footer/Footer';
import FriendsStatusList from '../../components/FriendsStatusList/FriendsStatusList';
import Header from '../../components/Header/Header';
import PersonalProfile from '../../components/PersonalProfile/PersonalProfile';
import Posts from '../../components/Posts/Posts';
import SuggestionSection from '../../components/SuggestionSection/SuggestionSection';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <View>
        <FriendsStatusList />
      </View>
      <SuggestionSection />
      <Posts />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
})

export default HomeScreen;