import html from './show.html?raw';

export default {
  title: "Pages/Documents/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-documents action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
