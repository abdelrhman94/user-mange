import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

const SidebarComponent = ({
  animation = 'push',
  direction = 'left',
  visible = true,
}) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
  >
    <Menu.Item as="a">
      <Icon name="users" />
      Users
    </Menu.Item>
  </Sidebar>
);

export default SidebarComponent;
