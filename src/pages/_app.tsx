import React, { useEffect } from "react";
import NProgress from "nprogress";
// layout
import AppLayout from "layouts/app-layout";

// next
import type { AppProps } from "next/app";
import { Router } from "next/router";

// import CSS
import { defaultTheme } from "theme";
import { GlobalStyle } from "theme/global.state";

// context providers
import { ThemeProvider } from "styled-components";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
