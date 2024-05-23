import Checkbox from '../components/Checkbox.svelte';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = ({ ...args }) => ({
  Component: Checkbox,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Check Me',
  value: '',
  placeholder: 'Check the box',
};
