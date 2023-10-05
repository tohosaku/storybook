import html from './index.html?raw';

export default {
  title: "Pages/Activities/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-activities action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
