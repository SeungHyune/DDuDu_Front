import "../src/app/_styles/globals.css";

import React from "react";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, { args }) => {
      return (
        <main id="app">
          <Story args={args} />
        </main>
      );
    },
  ],
};

export default preview;