import React from 'react'
import {useParams} from 'react-router-dom'
import {
  Breadcrumbs,
  Item,
  TabList,
  TabPanels,
  Tabs,
  Flex,
  Image,
  Menu,
  MenuTrigger,
  ActionButton,
  Button,
  Text,
  TextField,
  Picker,
  Switch,
  TableBody,
  TableView,
  Row,
  Cell,
  DialogTrigger,
  AlertDialog,
} from '@adobe/react-spectrum'
import Share from '@spectrum-icons/workflow/Share'

const AirportDetailsPage = () => {
  const {id} = useParams()
  const handleAddTermminal = () => (
    <DialogTrigger>
      <ActionButton>Save</ActionButton>
      <AlertDialog
        title='Terminal title'
        variant='warning'
        primaryActionLabel='Continue'
        cancelLabel='Cancel'
      >
        Description
      </AlertDialog>
    </DialogTrigger>
  )
  return (
    <div>
      <Breadcrumbs>
        <Item key='Airports'>Airports</Item>
        <Item key='{id}'>{id}</Item>
      </Breadcrumbs>
      <h1>{id}</h1>
      <Tabs aria-label='History of Ancient Rome'>
        <TabList>
          <Item key='Terminals'>Terminals</Item>
          <Item key='Tansport'>Tansport</Item>
          <Item key='Cd'>Contact details</Item>
        </TabList>
        <TabPanels>
          <Item key='Terminals'>
            <Flex direction='row' height='size-800'>
              <Image
                src='https://res.cloudinary.com/dbusahm1c/image/upload/v1720170529/9fa67efdaff0836c6b48500e00b4f1f6_gsul1j.jpg'
                alt='iamge'
                height='40px'
                width='30px'
              />
              <Flex direction='column'>
                <Flex direction='row'>
                  <p>Terminal 1</p>
                  <MenuTrigger>
                    <ActionButton>...</ActionButton>
                    <Menu onAction={key => alert(key)}>
                      <Item key='cut'>Cut</Item>
                      <Item key='copy'>Copy</Item>
                      <Item key='paste'>Paste</Item>
                      <Item key='replace'>Replace</Item>
                    </Menu>
                  </MenuTrigger>
                </Flex>
                <p>optional metadatashould be two lines.</p>
              </Flex>
            </Flex>
            <Flex direction='row' height='size-800'>
              <Image
                src='https://res.cloudinary.com/dbusahm1c/image/upload/v1720170529/9fa67efdaff0836c6b48500e00b4f1f6_gsul1j.jpg'
                alt='image'
                height='40px'
                width='30px'
              />
              <Flex direction='column'>
                <Flex direction='row'>
                  <p>Terminal 2</p>
                  <MenuTrigger>
                    <ActionButton>...</ActionButton>
                    <Menu onAction={key => alert(key)}>
                      <Item key='cut'>Cut</Item>
                      <Item key='copy'>Copy</Item>
                      <Item key='paste'>Paste</Item>
                      <Item key='replace'>Replace</Item>
                    </Menu>
                  </MenuTrigger>
                </Flex>
                <p>optional metadatashould be two lines.</p>
              </Flex>
            </Flex>
            <Button variant='primary' onPress={() => handleAddTermminal()}>
              <Text>+ Add Terminal</Text>
            </Button>
          </Item>
          <Item key='Tansport'>Senatus Populusque Romanus.</Item>
          <Item key='Cd'>Alea jacta est.</Item>
        </TabPanels>
      </Tabs>
      <Text>Services</Text>
      <p>Lost&found</p>
      <hr />
      <Flex gap='size-150' wrap>
        <TextField label='Service Name' defaultValue='Lost & found' />
        <Picker label='Category'>
          <Item key='Option 1'>Option 1</Item>
          <Item key='Option 2'>Option 2</Item>
          <Item key='Option 3'>Option 3</Item>
        </Picker>
        <Picker label='Sub Category'>
          <Item key='Option 1'>Option 1</Item>
          <Item key='Option 2'>Option 2</Item>
          <Item key='Option 3'>Option 3</Item>
        </Picker>
        <Button variant='secondary'>
          <Share />
          <Text>upload image</Text>
        </Button>
        <Switch>Show image</Switch>
        <TextField label='Description' defaultValue='Type here' />
      </Flex>
      <TableView
        aria-label='Example table with static contents'
        selectionMode='multiple'
      >
        <TableBody>
          <Row>
            <Cell>Lounge</Cell>
          </Row>
          <Row>
            <Cell>Money Exchange</Cell>
          </Row>
        </TableBody>
      </TableView>
    </div>
  )
}

export default AirportDetailsPage
