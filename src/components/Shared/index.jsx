import React, { useState } from 'react'

// 图标
import { CaretLeft } from 'phosphor-react'
import { Box, Stack, Typography, IconButton, Tabs, Tab, Grid } from '@mui/material'
import { faker } from '@faker-js/faker'
import { useTheme } from '@mui/material/styles'

// 静态资源
import { Shared_Links, shared_Docs } from '../../data'
import { LinkMsg, DocMsg } from '../Conversation/MessageTypes'
import { useSideBar } from '../../store/exports'

function Shared() {
    const theme = useTheme()
    const { useUpdateSideBar } = useSideBar()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                    <Typography variant='subtitle2'>Shared Messages</Typography>
                </Stack>
            </Box>
            {/* Tabs */}
            <Tabs sx={{ padding: 2, paddingBottom: 0 }}
                value={value} onChange={handleChange} centered
            >
                <Tab label="Media" />
                <Tab label="Links" />
                <Tab label="Docs" />
            </Tabs>
            {/* Body */}
            <Stack sx={{
                position: 'relative',
                flexGrow: 1,
                overflowY: 'scroll',
                padding: 3,
            }}
                spacing={value === 1 ? 1 : 3}
            >
                {(() => {
                    switch (value) {
                        case 0:
                            // Media
                            return (
                                <Grid container spacing={2}>
                                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                        <Grid item xs={4} key={index}>
                                            <img
                                                src={faker.image.animals()}
                                                alt={faker.name.fullName()}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            )
                        case 1:
                            // Links
                            return (
                                Shared_Links.map((item, index) =>
                                    <LinkMsg msg={item} key={index} />)
                            )
                        case 2:
                            // Docs
                            return (
                                shared_Docs.map((item, index) =>
                                    <DocMsg msg={item} key={index} />)
                            )
                        default:
                            break;
                    }
                })()}
            </Stack>
        </Stack>
    )
}

export default Shared