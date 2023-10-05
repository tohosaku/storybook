import html from './activity.html?raw';

export default {
  title: "Components/Activity",
  decorators: [
    (Story) => (
      `<div class="avatars-on">${Story()}</div>`
    ),
  ],
};

export const Activity = () => html;
