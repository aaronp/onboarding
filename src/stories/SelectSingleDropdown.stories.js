import SelectSingleDropdown from '../lib/SelectSingleDropdown.svelte';

export default {
  title: 'Components/SelectSingleDropdown',
  component: SelectSingleDropdown,
};

const Template = ({ ...args }) => ({
  Component: SelectSingleDropdown,
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
