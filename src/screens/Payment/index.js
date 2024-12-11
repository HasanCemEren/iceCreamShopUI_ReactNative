import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Styles from './style';
import {Icons, Images} from '../../assets';
const index = () => {
  return (
    <View style={Styles.background}>
      <View style={Styles.navbarIconBar}>
        <Image source={Icons.back} style={Styles.navbarIcon} />
      </View>
      <View style={Styles.titleTextBar}>
        <Text style={Styles.titleText}>My Cart</Text>
      </View>
      <View style={Styles.orders}>
        <View style={Styles.order}>
          <View>
            <Image source={Images.iceCream} style={Styles.orderImage} />
          </View>
          <View style={Styles.orderRight}>
            <View style={Styles.orderRightTop}>
              <View style={Styles.orderRightTopTextBar}>
                <Text style={Styles.orderRightTopText}>
                  Blue Moon Popsicle Stick
                </Text>
              </View>
              <View style={Styles.orderRightTopIconBar}>
                <Image source={Icons.trash} style={Styles.orderRightTopIcon} />
              </View>
            </View>
            <View style={Styles.orderRightBottom}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>1</Text>
              </View>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>$ 3.99</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.order}>
          <View>
            <Image source={Images.iceCream} style={Styles.orderImage} />
          </View>
          <View style={Styles.orderRight}>
            <View style={Styles.orderRightTop}>
              <View style={Styles.orderRightTopTextBar}>
                <Text style={Styles.orderRightTopText}>
                  Blue Moon Popsicle Stick
                </Text>
              </View>
              <View style={Styles.orderRightTopIconBar}>
                <Image source={Icons.trash} style={Styles.orderRightTopIcon} />
              </View>
            </View>
            <View style={Styles.orderRightBottom}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>1</Text>
              </View>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>$ 3.99</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.order}>
          <View>
            <Image source={Images.iceCream} style={Styles.orderImage} />
          </View>
          <View style={Styles.orderRight}>
            <View style={Styles.orderRightTop}>
              <View style={Styles.orderRightTopTextBar}>
                <Text style={Styles.orderRightTopText}>
                  Blue Moon Popsicle Stick
                </Text>
              </View>
              <View style={Styles.orderRightTopIconBar}>
                <Image source={Icons.trash} style={Styles.orderRightTopIcon} />
              </View>
            </View>
            <View style={Styles.orderRightBottom}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>1</Text>
              </View>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>$ 3.99</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.bottomDeliverPicker}>
          <View>
            <Text style={Styles.bottomLeftText}>Deliver to</Text>
          </View>
          <TouchableOpacity style={Styles.bottomButton}>
            <View>
              <Text style={Styles.bottomButtonText}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.bottomOrderScene}>
          <View style={Styles.bottomOrderSceneTexts}>
            <View>
              <Text style={Styles.bottomOrderSceneTopText}>$ 13.96</Text>
            </View>
            <View>
              <Text style={Styles.bottomOrderSceneBottomText}>
                View Details
              </Text>
            </View>
          </View>
          <TouchableOpacity style={Styles.bottomOrderSceneButton}>
            <View>
              <Text style={Styles.bottomOrderSceneButtonText}>Buy Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
/*
 <View style={Styles.orders}>
        <View style={Styles.order}>
          <View style={Styles.orderImageBar}>
            <Image source={Images.iceCream} style={Styles.orderImage} />
          </View>
          <View style={Styles.orderRightBar}>
            <View style={Styles.orderTopBar}>
              <View style={Styles.orderDescTextBar}>
                <Text style={Styles.orderDescText}>
                  Blue Moon Popsicle Stick
                </Text>
              </View>
              <View style={Styles.orderDeleteBar}>
                <Image source={Icons.discount} style={Styles.orderIcon} />
              </View>
            </View>
            <View style={Styles.buttons}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>1</Text>
              </View>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>$ 3.99</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
*/
