import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  top: {
    height: '55%',
    backgroundColor: '#e57c38',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  navbarIconBack: {
    tintColor: 'white',
    width: 30,
    height: 30,
  },
  navbarIconHearth: {
    tintColor: '#e57c38',
    opacity: 1,
    width: 30,
    height: 30,
    padding: 10,
  },
  heartBar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fed89a',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },

  productScene: {
    height: '85%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productSceneBar: {
    alignItems: 'flex-end',
    marginRight: 40,
  },
  productSceneImage: {
    width: 225,
    height: 325,
  },
  shopButtons: {},
  productSceneIconBar: {
    width: 50,
    height: 50,
    backgroundColor: '#fcac6c',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  productSceneIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  rates: {
    alignItems: 'flex-end',
    marginTop: 70,
  },
  priceText: {
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
  },
  starsBar: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  stars: {
    margin: 5,
    width: 20,
    height: 20,
    tintColor: 'white',
    opacity: 0.6,
  },

  starsBar: {
    flexDirection: 'row',
  },

  bottom: {
    height: '45%',
    backgroundColor: '#fff8f2',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomTitle: {width: '70%', marginVertical: 10},
  bottomTitleText: {
    fontWeight: '700',
    fontSize: 28,
    color: '#31302f',
  },
  bottomDesc: {width: '70%'},
  bottomDescText: {
    fontSize: 12,
    color: '#e87e37',
    opacity: 0.4,
    lineHeight: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomButton1: {
    width: 130,
    height: 70,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton2: {
    width: 130,
    height: 70,
    backgroundColor: '#E87E37',
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonsText1: {
    color: '#E87E37',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
  bottomButtonsText2: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },

  dotMenu: {
    flexDirection: 'row',
  },
  dotsActive: {
    marginHorizontal: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fcac6c',
  },
  dots: {
    marginHorizontal: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fcac6c',
  },

  tabMenu: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  tabMenuIcon1: {width: 40, height: 40, tintColor: '#F9A46C'},
  tabMenuText1: {color: '#F9A46C'},
  tabMenuIcon2: {width: 40, height: 40, tintColor: '#FAE3D3'},
  tabMenuText2: {color: '#FAE3D3'},
});
