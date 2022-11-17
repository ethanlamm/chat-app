import React from "react";

import { Stack, Box } from '@mui/material'

import Chats from '../../components/Chats'
import Conversation from "../../components/Conversation";

const GeneralApp = () => {

  return (
    <Stack direction={'row'} sx={{ width: '100%' }} >
      <Chats></Chats>
      <Box sx={{
        height: '100%',
        width: 'calc(100% - 320px)'
      }}>
        <Conversation></Conversation>
      </Box>
    </Stack>
  );
};

export default GeneralApp;
