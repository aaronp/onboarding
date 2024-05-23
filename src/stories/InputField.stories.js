import InputField from '../components/InputField.svelte';

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
  placeholder: 'Enter your name',
};
