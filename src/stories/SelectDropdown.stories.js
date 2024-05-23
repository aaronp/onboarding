import SelectDropdown from '../components/SelectDropdown.svelte';

export default {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
};

const Template = ({ ...args }) => ({
  Component: SelectDropdown,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Select One',
  value: '',
  options: [
    {
      'value': '1',
      'text': 'One'
    },
    {
      'value': '2',
      'text': 'Two'
    },
    {
      'value': '3',
      'text': 'Three'
    }
  ],
  placeholder: 'Select one..',
};
