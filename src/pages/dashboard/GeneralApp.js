import React from "react";

import { Stack, Box } from '@mui/material'

import Chats from '../../components/Chats'
import Conversation from "../../components/Conversation";
import Contacts from "../../components/Contacts";

import { useSideBar } from '../../store/exports'

const GeneralApp = () => {
  const { sidebar } = useSideBar()

  return (
    <Stack direction={'row'} sx={{ width: '100%' }} >
      <Chats></Chats>
      <Box sx={{
        height: '100%',
        flexGrow: 1
      }}>
        <Conversation></Conversation>
      </Box>
      {sidebar.open && <Contacts />}
    </Stack>
  );
};

export default GeneralApp;
