import html from './tabs.html?raw';

export default {
  title: "Components/Tabs",
  decorators: [
    (Story) => (
      `<div id="content">${Story()}</div>`
    ),
  ],
};

export const Tabs = () => html;
