import html from './index.html?raw';

export default {
  title: "Pages/CustomFields/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-custom_fields action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
