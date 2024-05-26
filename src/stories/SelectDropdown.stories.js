import SelectDropdown from '../lib/SelectDropdown.svelte';

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
      'label': 'One'
    },
    {
      'value': '2',
      'label': 'Two'
    },
    {
      'value': '3',
      'label': 'Three'
    }
  ],
  placeholder: 'Select one..',
};
