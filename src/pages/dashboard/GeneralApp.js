import React from "react";

import { Stack, Box } from '@mui/material'

import Chats from '../../components/Chats'
import Conversation from "../../components/Conversation";
import Contacts from "../../components/Contacts";

const GeneralApp = () => {

  return (
    <Stack direction={'row'} sx={{ width: '100%' }} >
      <Chats></Chats>
      <Box sx={{
        height: '100%',
        width: '100%'
      }}>
        <Conversation></Conversation>
      </Box>
      <Contacts></Contacts>
    </Stack>
  );
};

export default GeneralApp;
