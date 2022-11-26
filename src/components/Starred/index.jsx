import React from 'react'

// 图标
import { CaretLeft } from 'phosphor-react'
import { Box, Stack, Typography, IconButton, } from '@mui/material'
import { useTheme } from '@mui/material/styles'


import Message from '../Conversation/Message'

import { useSideBar } from '../../store/exports'

function Starred() {
    const theme = useTheme()
    const { useUpdateSideBar } = useSideBar()

    return (
        <Stack sx={{ width: 320, height: '100vh' }}>
            {/* Header */}
            <Box sx={{
                width: '100%',
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                backgroundColor: theme.palette.mode === 'light'
                    ? '#F8FAFF'
                    : theme.palette.background,
            }}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    sx={{ width: '100%', height: '100%', padding: 2 }}
                >
                    <IconButton onClick={useUpdateSideBar({ type: 'CONTACT' })}><CaretLeft /></IconButton>
                    <Typography variant='subtitle2'>Starred Messages</Typography>
                </Stack>
            </Box>
            {/* Body */}
            <Stack sx={{
                position: 'relative',
                flexGrow: 1,
                overflowY: 'scroll',
                padding: 3,
            }}
                spacing={3}
            >
                <Message />
            </Stack>
        </Stack>
    )
}

export default Starred