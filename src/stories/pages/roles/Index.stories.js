import html from './index.html?raw';

export default {
  title: "Pages/Roles/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-roles action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
