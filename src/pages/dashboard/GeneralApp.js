import React from "react";

import { Stack, Box } from '@mui/material'

import Chats from '../../components/Chats'
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import Shared from '../../components/Shared'
import Starred from '../../components/Starred'

import { useSelector } from 'react-redux'

const GeneralApp = () => {
  const { sidebar } = useSelector(state => state.app)

  return (
    <Stack direction={'row'} sx={{ width: '100%' }} >
      <Chats></Chats>
      <Box sx={{
        height: '100%',
        flexGrow: 1
      }}>
        <Conversation></Conversation>
      </Box>
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case 'CONTACT':
            return <Contact />
          case 'SHARED':
            return <Shared />
          case 'STARRED':
            return <Starred />
          default:
            return <></>
        }
      })()}
    </Stack>
  );
};

export default GeneralApp;
