import React, { useState, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { Text } from 'react-native';
const adUnitId = "ca-app-pub-5314398130823639/6157698639";

function Banner() {
  const appState = useRef(AppState.currentState);
  const [key, setKey] = useState(`banner-${Date.now()}`);

  // WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // A Google Mobile Ads Advisor suggests requesting a new ad when the app is foregrounded.
  // For more details, see: [https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8]
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/background/) && nextAppState === 'active') {
        setKey(`banner-${Date.now()}`);
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
  <>
  <BannerAd key={key} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
  </>
  )
}
export default Banner;
