import html from './index.html?raw';

export default {
  title: "Pages/Users/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-users action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
