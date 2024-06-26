import InputField from '../lib/InputField.svelte';

export default {
  title: 'Components/InputField',
  component: InputField,
};

const Template = ({ ...args }) => ({
  Component: InputField,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  value: '',
  errorMessage: '',
  placeholder: 'Enter your name',
};
