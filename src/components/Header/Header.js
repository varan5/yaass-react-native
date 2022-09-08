import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import AppColors from '../../utils/AppColors'
import AppImages from '../../utils/AppImages'

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainerStyle}>
        <TouchableOpacity>
          <Image style={styles.drawerButtonStyle} source={AppImages.drawer} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.yaassLogoStyle} source={AppImages.yaassLogo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.notificationIconStyle} source={AppImages.notification} />
        </TouchableOpacity>
      </View>
      <View style={styles.seperationLineStyle}></View>
    </View>

  )
}

const styles = StyleSheet.create({
  headerContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: AppColors.WHITE
  },
  drawerButtonStyle: {
    marginTop: 20
  },
  yaassLogoStyle: {
    height: 50,
    width: 50
  },
  notificationIconStyle: {
    marginTop: 10
  },
  seperationLineStyle: {
    borderColor: AppColors.WHITE,
    borderWidth: 1
  }
})

export default Header