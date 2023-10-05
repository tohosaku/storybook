import html from './show.html?raw';

export default {
  title: "Pages/Issues/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-issues action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
