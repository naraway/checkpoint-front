import * as React from "react";
import {configure, isObservableArray} from 'mobx';
import {AppContext, dialogUtil} from "@nara-way/prologue";
import {darkTheme, lightTheme} from './config/theme';
import {default as DialogView} from './config/dialog';
import {ThemeProvider} from "@mui/material";

configure({
  useProxies: 'ifavailable',
  isolateGlobalState: true,
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
});

(() => {
  const isArray = Array.isArray;
  Object.defineProperty(Array, 'isArray', {
    value: (target) => (isObservableArray(target) || isArray(target)),
  });
})();

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = darkMode ? darkTheme : lightTheme;

export const decorators = [
  Story => {
    window.document.body.style.backgroundColor = theme.palette.background.default;
    return (
      <div style={{color: theme.palette.text.primary}}>
        <AppContext.Provider>
          <ThemeProvider theme={theme}>
            <dialogUtil.Viewer renderDialog={(params) => (<DialogView {...params} />)}/>
            <Story/>
          </ThemeProvider>
        </AppContext.Provider>
      </div>
    );
  },
];
