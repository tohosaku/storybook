import html from './index.html?raw';

export default {
  title: "Pages/Issues/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-issues action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
