import html from './show.html';

export default {
  title: "Pages/Boards/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-boards action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
