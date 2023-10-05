import html1 from './list_issues1.html?raw';
import html2 from './list_issues2.html?raw';

export default {
  title: "Components/List",
  decorators: [
    (Story) => (
      `<div class="autoscroll">${Story()}</div>`
    ),
  ],
};

export const Issues = () => html1;
export const IssuesGroup = () => html2;
