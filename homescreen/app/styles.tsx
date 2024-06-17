import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'black',
  },
  image: {
    width: '30%',
    height: 200,
    resizeMode: 'contain',
    marginLeft: -230,
    marginTop: -120,
  },
  icon: {
    marginRight: -220,
    marginTop: -109,
  },
  messenger: {
    marginRight: -300,
    marginTop: -19,
  },
  storyImage: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 50,
    zIndex:1
  },

  flatListContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  storyText: {
    color: 'white',
    marginTop: 9,
    marginLeft: 4
  },
  containeresquerda: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -80,
  },
  fotoperfil: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 15,
    marginLeft: -160
  },
  nomeinsta: {
    color: 'white',
    fontSize: 13,
    marginLeft: 9,
    marginBottom: 15
  },
  postImage: {
    width: 370,
    height:350,
    marginBottom: '17%'
  },
});
