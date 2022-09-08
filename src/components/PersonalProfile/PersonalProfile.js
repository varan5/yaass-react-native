import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppConstants from '../../utils/AppConstants'
import AppImages from '../../utils/AppImages'

const PersonalProfile = () => {
  return (
    <View>
      <View style={styles.profileContainerStyle}>
        <TouchableOpacity>
          <Image style={styles.profileImageStyle} source={AppImages.user1} />
        </TouchableOpacity>
        <Text>{AppConstants.YOUR_STORY}</Text>
        <TouchableOpacity style={styles.plusIconStyle} >
          <Image source={AppImages.plusIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainerStyle: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 10
  },
  profileImageStyle: {
    width: 75,
    height: 75,
  },
  plusIconStyle: {
    position: 'absolute',
    marginLeft: 50,
    marginTop: 50
  }
})

export default PersonalProfile