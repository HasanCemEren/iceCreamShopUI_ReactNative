import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets';
import styles from './style';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FEF7F1'}}>
      <View style={styles.header}>
        <View>
          <Image source={Icons.menu} style={styles.headerIcon} />
        </View>
        <View>
          <Image source={Icons.shoppingCart} style={styles.headerIcon} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View>
          <Image source={Icons.search} style={styles.searchIcon} />
        </View>
        <View>
          <TextInput
            placeholderTextColor={'white'}
            style={styles.searchTextInput}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={styles.categoryMenu}>
        <View style={styles.buttonPress}>
          <Text style={styles.textPress}>All</Text>
        </View>
        <View style={styles.buttonUnPress}>
          <Text style={styles.textUnPress}>New</Text>
        </View>
        <View style={styles.buttonUnPress}>
          <Text style={styles.textUnPress}>Category</Text>
        </View>
      </View>
      <View style={styles.list}>
        <View style={styles.grup}>
          <View style={styles.grupProduct1}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon1Bar}>
                <Image source={Icons.hearth} style={styles.productIcon1} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
          <View style={styles.grupProduct2}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon2Bar}>
                <Image source={Icons.hearth} style={styles.productIcon2} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
        </View>
        <View style={styles.grup}>
          <View style={styles.grupProduct2}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon2Bar}>
                <Image source={Icons.hearth} style={styles.productIcon2} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
          <View style={styles.grupProduct2}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon2Bar}>
                <Image source={Icons.hearth} style={styles.productIcon2} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabMenu}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.menu} style={styles.tabMenuIcon1} />
          </View>
          <View>
            <Text style={styles.tabMenuText1}>Shop</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.giftbox} style={styles.tabMenuIcon2} />
          </View>
          <View>
            <Text style={styles.tabMenuText2}>gift</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.discount} style={styles.tabMenuIcon2} />
          </View>
          <View>
            <Text style={styles.tabMenuText2}>Offer</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.user} style={styles.tabMenuIcon2} />
          </View>
          <View>
            <Text style={styles.tabMenuText2}>Me</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
