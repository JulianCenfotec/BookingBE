import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ActivityReservation from '../forms/ActivityReservation';
import FlightReservation from '../forms/FlightReservation';
import { ChakraProvider } from '@chakra-ui/react';
import RestaurantReservation from '../forms/RestaurantReservaion';
import HotelReservation from '../forms/HotelReservation';
import ListAll from '../forms/ListAllReservations';

const Header = () => {
  return(
      <div>

      <ChakraProvider>
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList>
            <Tab>Hotel</Tab>
            <Tab>Flight</Tab>
            <Tab>Restaurant</Tab>
            <Tab>Activity</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <HotelReservation/>
            </TabPanel>
            <TabPanel>
              <FlightReservation/>
            </TabPanel>
            <TabPanel>
              <RestaurantReservation/>
            </TabPanel>
            <TabPanel>
              <ActivityReservation/>
            </TabPanel>
             <TabPanel>
              <ListAll/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
      </div>
)}

export default Header;