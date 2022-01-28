import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Order from './Order';


const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #969DB6;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: white;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:focus {
    color: #969DB6;
    border-radius: 3px;
    outline: 2px solid #06d6a0;
    background-color: #06d6a0;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #06D6A0;
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  width: 80%;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function HorizontalTab() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Order</Tab>
        <Tab>Ongoing Orders</Tab>
        <Tab>Table View</Tab>
        <Tab>Pay Later View</Tab>
      </TabsList>
      <TabPanel value={0}><Order /></TabPanel>
      <TabPanel value={1}>Ongoing Orders</TabPanel>
      <TabPanel value={2}>Table View</TabPanel>
      <TabPanel value={3}>Pay Later View</TabPanel>
    </TabsUnstyled>
  );
}
