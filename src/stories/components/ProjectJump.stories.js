import html from './project-jump.html?raw';

export default {
  title: "Components/ProjectJump",
  decorators: [
    (Story) => (
      `<div style="width: max-content; margin: 0 auto;">${Story()}</div>`
    ),
  ],
};

export const ProjectJump = () => html;
