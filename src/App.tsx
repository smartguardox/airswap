import { Suspense } from "react";

import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import { ThemeProvider } from "styled-components/macro";

import { useAppSelector } from "./app/hooks";
import Page from "./components/Page/Page";
import TradeContainer from "./components/TradeContainer/TradeContainer";
import Balances from "./features/balances/Balances";
import { Orders } from "./features/orders/Orders";
import { Transactions } from "./features/transactions/Transactions";
import { selectUserSettings } from "./features/userSettings/userSettingsSlice";
import "./i18n/i18n";
import GlobalStyle from "./style/GlobalStyle";
import { darkTheme, lightTheme } from "./style/themes";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const App = (): JSX.Element => {
  const { theme } = useAppSelector(selectUserSettings);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        {/* Suspense needed here for loading i18n resources */}
        <Suspense fallback={"Loading..."}>
          <Page>
            <TradeContainer>
              <Orders />
            </TradeContainer>
          </Page>
        </Suspense>
      </Web3ReactProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
