import React, { useState } from 'react'
import { FlatList, Image, Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import AppColors from '../../utils/AppColors'
import AppImages from '../../utils/AppImages'
import PersonalProfile from '../PersonalProfile/PersonalProfile'

const FriendsStatusList = () => {

  const friendsData = [
    {
      key: 1,
      name: 'Abhishek',
      imageName: AppImages.user2,
    },
    {
      key: 2,
      name: 'Harry',
      imageName: AppImages.user3
    },
    {
      key: 3,
      name: 'Ron',
      imageName: AppImages.user4,
    },
    {
      key: 4,
      name: 'Hermione',
      imageName: AppImages.user2,
    },
    {
      key: 5,
      name: 'Tommy',
      imageName: AppImages.user3,
    },
    {
      key: 6,
      name: 'Shivam',
      imageName: AppImages.user4,
    }
  ]

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      automaticallyAdjustContentInsets={false}
      style={styles.friendsStatusViewStyle}>
      <PersonalProfile />
      <FlatList
        data={friendsData}
        numColumns={friendsData.length}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.friendsStatusIndividualViewStyle}>
            {
              item && <Image style={styles.userImageStyle} source={item.imageName} />
            }
            <Text style={styles.friendsNameStyle}>{item.name}</Text>
          </TouchableOpacity>
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  friendsStatusViewStyle: {
    display: 'flex',
    flexDirection: 'row'
  },
  friendsStatusIndividualViewStyle: {
    margin: 10
  },
  userImageStyle: {
    width: 75,
    height: 75,
    borderColor: AppColors.PURPLE,
    borderWidth: 3,
    borderRadius: 50
  },
  friendsNameStyle: {
    textAlign: 'center'
  }
})

export default FriendsStatusList;