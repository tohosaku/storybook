import html from './index.html?raw';

export default {
  title: "Pages/Workflows/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-workflows action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
