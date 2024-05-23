import RadioButton from '../lib/RadioButton.svelte';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = ({ ...args }) => ({
  Component: RadioButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Switch Me',
  value: '',
  placeholder: 'Choose One',
};
