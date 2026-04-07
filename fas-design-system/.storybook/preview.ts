import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/styles/index.css';
import './preview-styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    layout: 'padded',
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        Light: '',
        Dark: 'dark',
      },
      defaultTheme: 'Light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
