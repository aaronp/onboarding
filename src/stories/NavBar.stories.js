import NavBar from '../lib/NavBar.svelte';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

const Template = ({ ...args }) => ({
  Component: NavBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: { name: "John Doe", loggedIn: true }
};
