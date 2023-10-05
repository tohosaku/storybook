import layout from './layout_has-main-menu.html?raw';

export default {
  title: "Layout/Layout/LayoutHasMainMenu",
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      `<div class="has-main-menu">${Story()}</div>`
    ),
  ],
};

export const LayoutHasMainMenu = () => layout;
