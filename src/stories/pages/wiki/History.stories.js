import html from './history.html?raw';

export default {
  title: "Pages/Wiki/History",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-history avatars-on">${Story()}</div>`
    ),
  ],
};

export const History = () => html;
