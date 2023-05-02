import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { FC } from 'react';
// import localFont from 'next/font/local'
import createEmotionCache from 'lib/createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { WithGraphQL } from 'lib/api';
import theme from 'styles/theme';
import "styles/global.scss"
import { globalVariables } from 'styles/var';
import { wrapper } from "../stores";
import { Provider } from "react-redux";
import Header from "layout/Header";
import Footer from "layout/Footer";

// const DIN2014Demi = localFont({
//   src: [
//     {
//       path: '../public/fonts/DIN_2014_Demi.eot',
//       weight: 'normal',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/DIN_2014_Demi.otf',
//       weight: 'normal',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/DIN_2014_Demi.ttf',
//       weight: 'normal',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/DIN_2014_Demi.woff',
//       weight: 'normal',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/DIN_2014_Demi.woff2',
//       weight: 'normal',
//       style: 'normal',
//     },
//   ],
// })

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = ({ Component, ...rest }) => {

  const { store, props } = wrapper.useWrappedStore(rest);
  const clientSideEmotionCache = createEmotionCache();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={{ ...theme, ...globalVariables }}>
          <CssBaseline />
          <WithGraphQL>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </WithGraphQL>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
