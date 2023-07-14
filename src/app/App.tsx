import { FC } from 'react'
import { Provider } from 'react-redux';
import { StyledEngineProvider, ThemeProvider, styled } from '@mui/material/styles';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './theme';


const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>

      </StyledEngineProvider>
      <div>dddđ</div>
      {/* <BrowserRouter>
        llllll */}
      {/* <Routes>
  <Route path="/" >
    ddđ
  </Route>
</Routes> */}
      {/* </BrowserRouter> */}
    </ThemeProvider>

  )
}

export default App;