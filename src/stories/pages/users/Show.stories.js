import html from './show.html?raw';

export default {
  title: "Pages/Users/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-users action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
