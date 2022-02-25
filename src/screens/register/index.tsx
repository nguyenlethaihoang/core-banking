import { scaleSize } from '@core/utils';
import { IMAGES } from '@src/assets';
import { COLORS } from '@src/assets/const';
import { RegisterScreenProps } from '@src/navigation/RootStackParams';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageBackground from '../login/components/ImageBackground';
import LogoButton from '../login/components/LogoButton';
import RegisterForm from './components/RegisterForm';

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const handleFacebookLogin = () => {};
  const handleGoogleLogin = async () => {
    // const {user, error} = await googleSignIn();
    // if (user) {
    //     Alert.alert('Notice', 'Success: ' + user.email);
    // } else {
    //     Alert.alert('Error', error ?? 'Something went wrong!');
    // }
  };
  return (
    <ImageBackground source={IMAGES.bg_intro_step_1}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {/* TODO: Change 'Back' to Icon */}
        <Text style={styles.backIcon}>Back</Text>
      </TouchableOpacity>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Let's get started</Text>
        </View>

        <RegisterForm />
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: COLORS.black_1,
              fontSize: scaleSize(20),
              marginVertical: scaleSize(20),
            }}>
            {t('Or')}
          </Text>
          <View style={styles.logoWrapper}>
            <LogoButton
              source={IMAGES.facebook_logo}
              onPress={handleFacebookLogin}
            />
            <LogoButton
              source={IMAGES.google_logo}
              onPress={handleGoogleLogin}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    paddingHorizontal: scaleSize(36),
    marginTop: scaleSize(100),
  },
  textWrapper: {
    width: '100%',
    marginLeft: scaleSize(10),
    marginBottom: scaleSize(6),
  },
  title: {
    fontSize: scaleSize(44),
    fontWeight: 'bold',
    marginVertical: scaleSize(6),
    color: '#193566',
  },
  subtitle: {
    fontSize: scaleSize(24),
    fontWeight: '500',
    marginVertical: scaleSize(4),
    color: COLORS.dark_blue_1,
  },

  button: {
    width: scaleSize(200),
  },
  logoWrapper: {
    flexDirection: 'row',
    marginBottom: scaleSize(30),
  },
  footer: {
    width: scaleSize(280),
    justifyContent: 'center',
    paddingBottom: scaleSize(50),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: scaleSize(30),
  },
  footerText: {
    fontSize: scaleSize(18),
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: COLORS.black_1,
    marginRight: scaleSize(5),
  },
  backIcon: {
    position: 'absolute',
    top: scaleSize(10),
    left: scaleSize(10),
    fontSize: scaleSize(20),
    fontWeight: '700',
  },
});
