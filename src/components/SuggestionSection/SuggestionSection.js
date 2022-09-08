import React, { useState } from 'react'
import { FlatList, Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, Modal } from 'react-native'
import AppColors from '../../utils/AppColors'
import AppConstants from '../../utils/AppConstants'
import AppFonts from '../../utils/AppFonts'
import AppImages from '../../utils/AppImages'
import PersonalProfile from '../PersonalProfile/PersonalProfile'

const SuggestionSection = () => {

  const [suggestedUserImageSize, setSuggestedUserImageSize] = useState([150, 100])
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const friendsData = [
    {
      key: 1,
      name: 'Abhishek',
      imageName: AppImages.suggestion1,
    },
    {
      key: 2,
      name: 'Abhishek',
      imageName: AppImages.suggestion1,
    },
    {
      key: 3,
      name: 'Abhishek',
      imageName: AppImages.suggestion1,
    },
    {
      key: 4,
      name: 'Abhishek',
      imageName: AppImages.suggestion1,
    },
    {
      key: 5,
      name: 'Abhishek',
      imageName: AppImages.suggestion1,
    },
    {
      key: 6,
      name: 'Abhishek',
      imageName: AppImages.suggestion1,
    },
  ]

  const handleImageOnPress = () => {
    // setSuggestedUserImageSize([500, 360])
    setIsImageZoomed(true)
  }

  const handleImageOnPressOut = () => {
    setSuggestedUserImageSize([150, 100])
    setIsImageZoomed(false)
  }

  const handleImagePopUpClose = () => {
    setSuggestedUserImageSize([150, 100])
    setIsImageZoomed(false)
  }

  const imageModal = (currentSuggestion) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isImageZoomed}
        onRequestClose={() => {
          setModalVisible(!isImageZoomed);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.userImageZoomedViewStyle}>
            <Image style={styles.userImageZoomedStyle} source={currentSuggestion.imageName} />
          </View>

          <View style={styles.crossIconViewStyle}>
            <TouchableOpacity onPress={handleImagePopUpClose}>
              <Image style={styles.crossIconZoomedStyle} source={AppImages.crossIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.userZoomedTextViewStyle}>
            <Text style={styles.userZoomedTextStyle}>{currentSuggestion.name}</Text>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.suggestionContainerStyle}>
      <View style={styles.suggestionDetailsContainerStyle}>
        <View>
          <Text style={styles.suggestionsForYouTextStyle}>{AppConstants.SUGGESTIONS_FOR_YOU}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.showLaterTextStyle}>{AppConstants.SHOW_LATER_BUTTON}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.friendsStatusViewStyle}>
        <FlatList
          data={friendsData}
          numColumns={friendsData.length}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) =>
            <View style={styles.friendsStatusIndividualViewStyle}>
              <TouchableOpacity onPressIn={handleImageOnPress} onPressOut={handleImageOnPressOut}>
                <Image style={styles.userImageStyle(suggestedUserImageSize)} source={item.imageName} />
              </TouchableOpacity>

              {isImageZoomed && imageModal(item)}

              <View style={styles.crossIconViewStyle}>
                <TouchableOpacity onPress={handleImagePopUpClose}>
                  <Image style={styles.crossIconStyle} source={AppImages.crossIcon} />
                </TouchableOpacity>
              </View>

              <View style={styles.connectButtonStyle(isImageZoomed)}>
                <Text style={styles.connectButtonTextStyle}>Connect</Text>
              </View>
              <View style={styles.suggestionNameViewStyle}>
                <Text style={styles.suggestionNameStyle}>{item.name}</Text>
              </View>
            </View>
          }
        />
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  suggestionContainerStyle: {
    backgroundColor: AppColors.WHITE,
    paddingVertical: 10,
    marginTop: 10,
  },
  friendsStatusIndividualViewStyle: {
    margin: 10
  },
  userImageStyle: suggestedUserImageSize => ({
    width: suggestedUserImageSize[1],
    height: suggestedUserImageSize[0],
    borderRadius: 10
  }),
  userImageZoomedStyle: {
    width: 380,
    height: 500,
    marginTop: 130,
    borderWidth: 10,
    borderRadius: 20,
    borderColor: AppColors.WHITE,
  },
  userImageZoomedViewStyle: {
    borderRadius: 20,
    borderColor: AppColors.WHITE,
  },
  userZoomedTextStyle: {
    color: AppColors.WHITE,
    fontSize: 20,
    fontWeight: AppFonts.BOLD,
    marginLeft: 10,
    marginTop: 10,
  },
  userZoomedTextViewStyle: {
    backgroundColor: AppColors.GRADIENT_GREY,
    height: 50,
    width: 350,
    marginTop: 570,
    marginLeft: 10,
    position: 'absolute',
  },
  suggestionNameStyle: {
    textAlign: 'center',
    color:  AppColors.WHITE,
    fontSize: 14,
  },
  suggestionNameViewStyle: {
    backgroundColor: 'white',
    height: 30,
    width: 100
  },
  crossIconViewStyle: {
    position: 'absolute',
  },
  crossIconStyle: {
    height: 15,
    width: 15,
    marginLeft: 75,
    marginTop: 10
  },
  crossIconZoomedStyle: {
    width: 20,
    height: 20,
    marginTop: 150,
    marginLeft: 340,
  },
  connectButtonStyle: isImageZoomed => ({
    display: isImageZoomed ? 'none' : 'flex',
    position: 'absolute',
    backgroundColor: AppColors.PURPLE,
    width: 70,
    height: 20,
    marginTop: 120,
    marginLeft: 17,
    borderRadius: 8,
  }),
  connectButtonTextStyle: {
    color: AppColors.WHITE,
    textAlign: 'center'
  },
  suggestionDetailsContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showLaterTextStyle: {
    color: AppColors.BLUE,
    marginRight: 10
  },
  suggestionsForYouTextStyle: {
    marginLeft: 10,
  },
})

export default SuggestionSection;