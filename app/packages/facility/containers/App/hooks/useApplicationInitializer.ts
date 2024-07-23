// import { useCallback, useEffect, useRef, useState } from 'react';
// import { AppState, AppStateStatus } from 'react-native';
// import { AsyncCallRequestResponse } from 'common/declaration/types';
// import SCREENS from 'common/constants/Screens';
// import { setConnectionMode } from 'common/features/Common/CommonSlice';
// import NavigationService from 'common/services/NavigationService';
//
//
// const useApplicationInitializer = () => {
//
//
//
//   // const renewSessionIfApplicable = async () => {
//   //   // guard clause - not set up
//   //   const isConfigured = await StorageService.isSetUpComplete();
//   //   if (!isConfigured) {
//   //     return;
//   //   }
//   //
//   //   // guard clause - session not expired
//   //   const isExpired = await SessionRenewalContextImpl.isSessionExpired();
//   //   if (!isExpired) {
//   //     return;
//   //   }
//   //
//   //   // await reAuthenticateRequest.trigger();
//   };
//
//   const handleReAuthenticateRequest = (authenticateResult: AsyncCallRequestResponse<boolean>) => {
//     // if (authenticateResult.isSuccessful) {
//     //   if (currentRoute !== SCREENS.DASHBOARD && currentRoute !== SCREENS.LANDING) {
//     //     NavigationService.navigateTop(SCREENS.LANDING);
//     //   }
//     // } else if (authenticateResult.hasError) {
//     //   NavigationService.navigateTop(SCREENS.CONFIG_LOGON);
//     // }
//   };
//
//
//   const handleAppStateChange = useCallback(
//     async (nextAppState: AppStateStatus) => {
//       if (transitiveAppState.current === 'inactive') {
//         transitiveAppState.current = nextAppState;
//         return;
//       }
//
//       transitiveAppState.current = nextAppState;
//
//       if (isOffline === true || isOffline === undefined) {
//         return;
//       }
//
//       if (nextAppState !== 'active') {
//         await startBackgroundDownload();
//         return;
//       }
//
//       await checkForUpdates();
//       await renewSessionIfApplicable();
//     },
//     [isOffline]
//   );
//
//   const mount = async () => {
//     await checkForUpdates();
//     await PinEncryptionHelper.encryptCredentialsInLocalStorageOnAppUpdate();
//   };
//
//   const unmount = async () => {};
//
//   const handleConnectionModeChange = (connection: NetInfoState) => {
//     const { isConnected } = connection;
//     if (isOffline !== !isConnected) {
//       dispatch(setConnectionMode(!isConnected));
//     }
//     if (isConnected && !NavigationService.isMatching(SCREENS.LANDING)) {
//       NavigationService.navigateTop(SCREENS.LANDING);
//     } else if (!isConnected && !NavigationService.isMatching(SCREENS.OFFLINE_LANDING)) {
//       NavigationService.navigateTop(SCREENS.OFFLINE_LANDING);
//     }
//   };
//
//   useEffect(() => {
//     AppState.addEventListener('change', handleAppStateChange);
//
//     return () => {
//       AppState.removeEventListener('change', handleAppStateChange);
//     };
//   }, [isOffline]);
//
//   useEffect(() => {
//     handleReAuthenticateRequest(reAuthenticateRequest);
//   }, [reAuthenticateRequest.state.loading]);
//
//   useEffect(() => {
//     (async () => mount())();
//     const unsubscribe = NetInfo.addEventListener(handleConnectionModeChange);
//     return () => {
//       (async () => unmount())();
//       unsubscribe();
//     };
//   }, []);
//
//   return {
//     checkForUpdates,
//     currentRoute,
//     isAppLoading: updater.isLoading || reAuthenticateRequest.state.loading || isLoading || isProcessingData,
//     handleAppStateChange,
//     handleConnectionModeChange,
//     renewSessionIfApplicable,
//     setCurrentRoute,
//     showSlowRequestAlert,
//     transitiveAppState
//   };
// };
//
// export default useApplicationInitializer;
