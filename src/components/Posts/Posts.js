import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AppColors from '../../utils/AppColors'
import AppImages from '../../utils/AppImages'

const Posts = () => {

  const postsList = [
    {
      key: 1,
      userName: 'Apporva Chaturvedi',
      postTime: '3h ago',
      likeCount: '8.5k',
      userImageName: 'user-post-1',
      postImageName: 'post-1',
    }
  ]

  return (
    <View style={styles.postsContainerStyle}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal>
        <FlatList
          data={postsList}
          numColumns={postsList.length}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) =>
            <View>
              <View style={styles.postHeaderContainerStyle}>
                <TouchableOpacity>
                  <Image style={styles.userImageStyle} source={AppImages.user2} />
                </TouchableOpacity>
                <View style={styles.postNameTimeContainerStyle}>
                  <View>
                    <Text>{item.userName}</Text>
                  </View>
                  <View>
                    <Text style={styles.postTimeTextStyle}>{item.postTime}</Text>
                  </View>
                </View>

                <TouchableOpacity>
                  <Image style={styles.moreDetailsIconStyle} source={AppImages.moreDetailsIcon} />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <View>
                    <Image style={styles.postImageStyle} source={AppImages.post1} />
                  </View>
                </View>
              </View>

              <View style={styles.likeCommentContainerStyle}>
                <TouchableOpacity style={styles.likeContainerStyle}>
                  <Image style={styles.likeIconStyle} source={AppImages.likeIcon} />
                  <Text style={styles.likeCountTextStyle}>{item.likeCount}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commentContainerStyle}>
                  <Image style={styles.commentIconStyle} source={AppImages.commentIcon} />
                </TouchableOpacity>
              </View>

              <View style={styles.captionContainerStyle}>
                <Text style={styles.captionStyle}>Rays of happiness on the way</Text>
              </View>
            </View>
          }
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  postsContainerStyle: {
    backgroundColor: AppColors.WHITE,
    marginTop: 20,
    margin: 20,
    borderRadius: 20,
  },
  postHeaderContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  postNameTimeContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 90,
  },
  likeCommentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 12
  },
  likeContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: AppColors.GREY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 80,
    height: 30
  },
  likeIconStyle: {
    height: 25,
    width: 25,
    tintColor: AppColors.DARK_GREY,
    marginRight: 5,
  },
  likeCountTextStyle: {
    color: AppColors.DARK_GREY,
    fontSize: 15
  },
  commentIconStyle: {
    height: 25,
    width: 25,
    tintColor: AppColors.DARK_GREY,
    marginLeft: 20
  },
  captionContainerStyle: {
    marginTop: 12,
    marginLeft: 10,
    marginBottom: 20
  },
  postImageStyle: {
    height: 330,
    width: 350,
    borderRadius: 10,
  },
  postTimeTextStyle: {
    color: AppColors.DARK_GREY,
    marginTop: 10
  },
  userImageStyle: {
    height: 50,
    width: 50
  },
  moreDetailsIconStyle: {
    marginRight: 20,
  }
})

export default Posts