import html from './index.html?raw';

export default {
  title: "Pages/Timelog/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-timelog action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
