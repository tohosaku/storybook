import html from './new.html?raw';

export default {
  title: "Pages/AuthSources/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-auth_sources action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
