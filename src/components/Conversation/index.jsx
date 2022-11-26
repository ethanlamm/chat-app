import React from 'react'

import { Stack, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Header from './Header'
import Footer from './Footer'
import Message from './Message'

function Conversation() {
    const theme = useTheme()
    return (
        <Stack sx={{ width: 'auto', height: '100vh' }}
        >
            {/* Header */}
            <Header />
            {/* Message */}
            <Box sx={{
                flexGrow: 1,
                width: '100%',
                backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
                overflowY: 'scroll'
            }}>
                <Message menu />
            </Box>
            {/* Footer */}
            <Footer />
        </Stack>
    )
}

export default Conversation