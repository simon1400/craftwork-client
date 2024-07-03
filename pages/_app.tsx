import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { FC } from 'react';
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
import HeaderTop from "layout/HeaderTop";

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
            <HeaderTop />
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
