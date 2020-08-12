import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../global';
import NavBar from '../NavBar/NavBar';
import { Form } from '../Form/Form';
import ErrorBoundary from '../../ErrorBoundary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Switch>
        <Route path="/" exact>
          <ThemeProvider theme={themeMode}>
            <>
              <GlobalStyles />
              <NavBar theme={theme} toggleTheme={toggleTheme} />
              <Form />
              <footer>
                <span>Credits:</span>
                <small>
                  <b>Sun</b> icon made by{' '}
                  <a href="https://www.flaticon.com/authors/smalllikeart">
                    smalllikeart
                  </a>{' '}
                  from <a href="https://www.flaticon.com">www.flaticon.com</a>
                </small>
                <small>
                  <b>Moon</b> icon made by{' '}
                  <a href="https://www.freepik.com/home">Freepik</a> from{' '}
                  <a href="https://www.flaticon.com">www.flaticon.com</a>
                </small>
              </footer>
            </>
          </ThemeProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default function AppWithErrorBoundary(props: any) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
