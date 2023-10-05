import html from './show.html?raw';

export default {
  title: "Pages/Projects/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-projects action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
