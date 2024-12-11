import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from './style';
import {Icons, Images} from '../../assets';
const index = () => {
  return (
    <View>
      <View style={Styles.top}>
        <View style={Styles.navbar}>
          <View>
            <Image source={Icons.back} style={Styles.navbarIconBack} />
          </View>
          <View style={Styles.heartBar}>
            <Image source={Icons.hearth} style={Styles.navbarIconHearth} />
          </View>
        </View>

        <View style={Styles.productScene}>
          <View>
            <Image source={Images.iceCream} style={Styles.productSceneImage} />
          </View>
          <View style={Styles.productSceneBar}>
            <View style={Styles.shopButtons}>
              <View style={Styles.productSceneIconBar}>
                <Image
                  source={Icons.shoppingCart}
                  style={Styles.productSceneIcon}
                />
              </View>
              <View style={Styles.productSceneIconBar}>
                <Image source={Icons.plus} style={Styles.productSceneIcon} />
              </View>
            </View>
            <View style={Styles.rates}>
              <View>
                <Text style={Styles.priceText}>$ 3.99</Text>
              </View>
              <View style={Styles.starsBar}>
                <View>
                  <Image source={Icons.star} style={Styles.stars} />
                </View>
                <View>
                  <Image source={Icons.star} style={Styles.stars} />
                </View>
                <View>
                  <Image source={Icons.star} style={Styles.stars} />
                </View>
                <View>
                  <Image source={Icons.star} style={Styles.stars} />
                </View>
                <View>
                  <Image source={Icons.star} style={Styles.stars} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.bottomTitle}>
          <Text style={Styles.bottomTitleText}>Blue Moon Popsicle Stick</Text>
        </View>
        <View style={Styles.bottomDesc}>
          <Text style={Styles.bottomDescText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
        <View style={Styles.bottomButtons}>
          <View style={Styles.bottomButton1}>
            <Text style={Styles.bottomButtonsText1}>View Ingredients</Text>
          </View>
          <View style={Styles.bottomButton2}>
            <Text style={Styles.bottomButtonsText2}>Order</Text>
          </View>
        </View>
        <View style={Styles.dotMenu}>
          <View style={Styles.dotsActive}></View>
          <View style={Styles.dots}></View>
          <View style={Styles.dots}></View>
          <View style={Styles.dots}></View>
        </View>

        <View style={Styles.tabMenu}>
          <View style={{alignItems: 'center'}}>
            <View>
              <Image source={Icons.menu} style={Styles.tabMenuIcon1} />
            </View>
            <View>
              <Text style={Styles.tabMenuText1}>Shop</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View>
              <Image source={Icons.giftbox} style={Styles.tabMenuIcon2} />
            </View>
            <View>
              <Text style={Styles.tabMenuText2}>gift</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View>
              <Image source={Icons.discount} style={Styles.tabMenuIcon2} />
            </View>
            <View>
              <Text style={Styles.tabMenuText2}>Offer</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View>
              <Image source={Icons.user} style={Styles.tabMenuIcon2} />
            </View>
            <View>
              <Text style={Styles.tabMenuText2}>Me</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
