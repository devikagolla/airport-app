import Home from '@spectrum-icons/workflow/Home'
import Apps from '@spectrum-icons/workflow/Apps'
import {
  ListBox,
  Item,
  Section,
  Provider,
  defaultTheme,
  Text,
} from '@adobe/react-spectrum'
import './index.css'

const NavigationTab = () => (
  <div className='sidebar-container'>
    <Provider theme={defaultTheme} colorScheme='light'>
      <ListBox
        width='size-2400'
        aria-label='Pick your favorite'
        selectionMode='single'
      >
        <Section>
          <Item key="home">
            <Home
              aria-label='XXS Home'
              size='XXS'
              height='20px'
              width='20px'
              margin='0px 10px 0px 0px'
            />
            <Text>Home</Text>
          </Item>
          <Item key="Dashboard">
            <Apps
              aria-label='XXS Apps'
              size='XXS'
              height='20px'
              width='20px'
              margin='0px 10px 0px 0px'
            />
            <Text>Dashboard</Text>
          </Item>
        </Section>
        <Section title='Services' margin='10px 0px 0px 0px'>
          <Item key='Airports'>Airports</Item>
          <Item key='Videos'>Videos</Item>
        </Section>
        <Section title='Others' margin='50px 0px 0px 0px'>
          <Item key='List 1'>List 1</Item>
          <Item key='List 2'>List 2</Item>
          <Item key='List 3'>List 3</Item>
        </Section>
      </ListBox>
    </Provider>
  </div>
)
export default NavigationTab
