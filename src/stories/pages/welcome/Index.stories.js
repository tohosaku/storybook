import html from './index.html?raw';

export default {
  title: "Pages/Welcome/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-welcome action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
