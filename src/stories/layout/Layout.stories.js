import layout from './layout.html?raw';
import layoutLogout from './layout_logout.html?raw';

export default {
  title: "Layout/Layout",
  parameters: {
    layout: 'fullscreen'
  },
};

export const Layout = () => layout;
export const LayoutLogout = () => layoutLogout;
