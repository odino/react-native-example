import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {StyleGuide} from '../constants';
import {SnippetLogo} from './Icons';

interface Props {
  price: string; // 300
  currency: 'AED' | 'SAR' | 'KWD' | 'BDH';
  lang: 'en' | 'ar';
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

type Loc = {en: string; ar: string};

const STRINGS: {[key: string]: Loc} = {
  promoMessage: {
    en: 'or 4 interest-free payments of',
    ar: 'ةيرهش طاسقأ ٣ ىلع يقابلا طسّقو ،مويلا غلبملا عبر عفدا',
  },
  learnMore: {
    en: 'Learn more',
    ar: 'ةيواستم',
  },
};

const decimals = {
  AED: 2,
  SAR: 2,
  KWD: 3,
  BDH: 3,
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  withShadow: {
    elevation: 3,
    backgroundColor: StyleGuide.colors.white,
    shadowColor: StyleGuide.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  underline: {textDecorationLine: 'underline'},
  text: {fontSize: 12},
  spacer: {width: 8},
  rowReverse: {flexDirection: 'row-reverse'},
});

const NBSP = '\u00A0';
const SPACE = ' ';

const TabbySnippet: React.FC<Props> = ({
  lang,
  price,
  currency,
  containerStyle,
  textStyle,
}: Props) => {
  const splittedPrice = (parseFloat(price) / 4).toFixed(decimals[currency]);
  return (
    <View
      style={[
        styles.container,
        styles.withShadow,
        containerStyle,
        lang === 'ar' ? styles.rowReverse : undefined,
      ]}>
      <View
        style={[styles.flex, lang === 'ar' ? styles.rowReverse : undefined]}>
        <Text
          style={[
            styles.text,
            textStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            {textAlign: lang === 'ar' ? 'right' : 'left'},
          ]}>
          {STRINGS.promoMessage[lang]}
          <Text style={[styles.text, textStyle]}>{SPACE}</Text>
          <Text>{splittedPrice}</Text>
          <Text>{NBSP}</Text>
          <Text>{currency}</Text>
          <Text>{SPACE}</Text>
          <Text style={styles.underline}>{STRINGS.learnMore[lang]}</Text>
        </Text>
      </View>
      <View style={styles.spacer} />
      <SnippetLogo />
    </View>
  );
};

export {TabbySnippet};
