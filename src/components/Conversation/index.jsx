import React from 'react'

import { Stack } from '@mui/material'

import Header from './Header'
import Footer from './Footer'
import Message from './Message'


function Conversation() {
    return (
        <Stack sx={{ width: 'auto', height: '100vh' }}
        >
            {/* Header */}
            <Header />
            {/* Message */}
            <Message />
            {/* Footer */}
            <Footer />
        </Stack>
    )
}

export default Conversation