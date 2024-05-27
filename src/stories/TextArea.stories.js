import TextArea from '../lib/TextArea.svelte';

export default {
  title: 'Components/TextArea',
  component: TextArea,
};

const Template = ({ ...args }) => ({
  Component: TextArea,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Text Area Here',
  value: '',
  errorMessage: '',
  placeholder: 'A lot of text....',
};
