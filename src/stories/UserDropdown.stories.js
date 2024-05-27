import UserDropdown from '../lib/UserDropdown.svelte';

export default {
  title: 'Components/UserDropdown',
  component: UserDropdown,
};

const Template = ({ ...args }) => ({
  Component: UserDropdown,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
   user: { name: "John Doe", loggedIn: true }
};