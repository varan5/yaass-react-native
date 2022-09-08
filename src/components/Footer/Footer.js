import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppImages from '../../utils/AppImages'
import AppConstants from '../../utils/AppConstants'

const Footer = () => {
  return (
    <View>
      <Text style={styles.footerTitleStyle}>{AppConstants.APP_FOOTER_TITLE}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  footerTitleStyle: {
    alignSelf: 'center'
  }
})

export default Footer