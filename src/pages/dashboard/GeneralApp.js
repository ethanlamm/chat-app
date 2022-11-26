import React from "react";

import { Stack, Box } from '@mui/material'

import Chats from '../../components/Chats'
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

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
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
