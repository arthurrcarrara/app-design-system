/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import CssBaseline from '@mui/material/CssBaseline';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
