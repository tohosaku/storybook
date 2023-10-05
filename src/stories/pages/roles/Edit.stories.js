import html from './edit.html?raw';
import htmlAnonymous from './edit_anonymous.html?raw';

export default {
  title: "Pages/Roles/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-roles action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
export const EditAnonymous = () => htmlAnonymous;
