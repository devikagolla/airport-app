import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavigationTab from '../NavigationTab'
import Edit from '@spectrum-icons/workflow/Edit'
import Delete from '@spectrum-icons/workflow/Delete'
import {
  Provider,
  defaultTheme,
  Button,
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  ActionButton,
  Cell,
} from '@adobe/react-spectrum'
import './index.css'

const airportList = [
  {
    id: 1,
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminal: '3',
  },
  {
    id: 2,
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminal: '5',
  },
  {
    id: 3,
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminal: '6',
  },
  {
    id: 4,
    name: 'Istanbul Airport',
    country: 'Turkey',
    code: 'IST',
    terminal: '3',
  },
  {
    id: 5,
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminal: '14',
  },
]
function Home() {
  const [airports, setAirports] = useState(airportList)
  const navigate = useNavigate()

  const handleDetails = id => {
    navigate(`/airport/${id}`)
  }

  const handleEdit = id => {}

  const handleDelete = id => {
    setAirports(airports.filter(airport => airport.id !== id))
  }

  return (
    <div className='container'>
      <NavigationTab />
      <div className='airport-container'>
        <div className='home-header'>
          <h1>Airports</h1>
          <Button
            width='Hug (96px) px'
            height='Fixed (32px) px'
            top='20px'
            left='1px'
            padding='6px 17px 7px 17px'
            border-radius='50px 0px 0px 0px'
            opacity='0px'
          >
            + Add New
          </Button>
        </div>
        <Provider theme={defaultTheme}>
          <TableView aria-label='Airport List' selectionMode='multiple'>
            <TableHeader>
              <Column minWidth={100}>All Airports</Column>
              <Column width={100}>Country</Column>
              <Column width={100}>Code</Column>
              <Column width={100}>Terminal</Column>
              <Column></Column>
            </TableHeader>
            <TableBody>
              {airportList.map(airport => (
                <Row key={airport.id}>
                  <Cell onPress={() => handleDetails(airport.id)}>
                    {airport.name}
                  </Cell>
                  <Cell onPress={() => handleDetails(airport.id)}>
                    {airport.country}
                  </Cell>
                  <Cell onPress={() => handleDetails(airport.id)}>
                    {airport.code}
                  </Cell>
                  <Cell onPress={() => handleDetails(airport.id)}>
                    {airport.terminal}
                  </Cell>
                  <Cell>
                    <>
                      <ActionButton
                        onPress={() => handleEdit(airport.id)}
                        isQuiet
                      >
                        <Edit aria-label='Edit' />
                      </ActionButton>
                      <ActionButton
                        onPress={() => handleDelete(airport.id)}
                        isQuiet
                      >
                        <Delete aria-label='Delete' />
                      </ActionButton>
                    </>
                  </Cell>
                </Row>
              ))}
            </TableBody>
          </TableView>
        </Provider>
      </div>
    </div>
  )
}

export default Home
