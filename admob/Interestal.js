import { useState, useEffect } from 'react';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
const adUnitId =  "ca-app-pub-5314398130823639/8044218690";
import { Button } from 'react-native';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
  });
  const Admob = ()=>{
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
        setLoaded(true);
      });
  
      // Start loading the interstitial straight away
      interstitial.load();
  
      // Unsubscribe from events on unmount
      return unsubscribe;
    }, []);
    return (
        <Button
          title={!loaded ? "Loading..." : "Show Interstitial"}
          onPress={() => {
            interstitial.show();
          }}
        />
      );
    
  }
  export default Admob;