import html from './index.html?raw';

export default {
  title: "Pages/Groups/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-groups action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
