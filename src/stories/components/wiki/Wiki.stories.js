import html from './wiki.html?raw';
import html2 from './wiki_with_contextual.html?raw';

export default {
  title: "Components/Wiki/Wiki",
};

export const Wiki = () => html;
export const WikiWithContextual= () => html2;
