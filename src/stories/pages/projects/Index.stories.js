import html from './index.html?raw';
import htmlList from './index_list.html?raw';

export default {
  title: "Pages/Projects/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-projects action-projects avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
export const IndexList = () => htmlList;
