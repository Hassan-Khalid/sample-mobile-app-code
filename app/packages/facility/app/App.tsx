import React, { useEffect } from 'react';
import ApplicationContainer from '../AppNavigator';
import i18n from "../../common/translation/TranslationManager"
if (__DEV__) {
  // const whyDidYouRender = require('@welldone-software/why-did-you-render');
  // whyDidYouRender(React, {
  //   trackAllPureComponents: true,
  //   exclude: [/Icon/]
  // });
}
const initI18n = i18n;
function App() {
  
  const setup = async () => {};

  useEffect(() => {
    (async () => setup())();
  }, []);

  return <ApplicationContainer />;
}

export default App;
