import React, { useState } from 'react'
import { CaretLeft, Bell, Lock, Key, PencilCircle, Image, Note, Keyboard, Info } from 'phosphor-react'
import { Stack, Box, IconButton, Typography, Avatar, Divider } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker';

import Shortcuts from '../components/SettingsDialogs/Shortcuts';
import Theme from '../components/SettingsDialogs/Theme';

function Settings() {
    const theme = useTheme()
    const [openShortcuts, setOpenShortcuts] = useState(false)
    const [openTheme, setOpenTheme] = useState(false)

    // options
    const list = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: 'Notification',
            onClick: () => { }
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: 'Privacy',
            onClick: () => { }
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: 'Security',
            onClick: () => { }
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: 'Theme',
            onClick: () => setOpenTheme(true)
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: 'Chat Wallpaper',
            onClick: () => { }
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: 'Request Account Info',
            onClick: () => { }
        },
        {
            key: 6,
            icon: <Keyboard size={20} />,
            title: 'Keyboard Shortcuts',
            onClick: () => setOpenShortcuts(true)
        },
        {
            key: 7,
            icon: <Info size={20} />,
            title: 'Help',
            onClick: () => { }
        }
    ]


    return (
        <>
            <Stack direction={'row'} sx={{ width: '100%' }}>
                {/* left */}
                <Box sx={{ overflowY: 'scroll', height: '100vh', width: 320, backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}>
                    <Stack sx={{ padding: 4 }} spacing={5}>
                        {/* header */}
                        <Stack direction={'row'} alignItems={'cenetr'} spacing={3}>
                            <IconButton>
                                <CaretLeft />
                            </IconButton>
                            <Typography variant='h6'>Settings</Typography>
                        </Stack>
                        {/* profile */}
                        <Stack direction={'row'} spacing={3}>
                            <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} alt={faker.name.fullName()} />
                            <Stack spacing={0.5}>
                                <Typography variant='article'>{faker.name.fullName()}</Typography>
                                <Typography variant='body2'>{faker.random.words()}</Typography>
                            </Stack>
                        </Stack>
                        {/* options */}
                        <Stack spacing={4}>
                            {list.map(item => (
                                <Stack spacing={2} sx={{ cursor: 'pointer' }} onClick={item.onClick} key={item.key}>
                                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                        {item.icon}
                                        <Typography variant='body2'>{item.title}</Typography>
                                    </Stack>
                                    {item.key !== 7 && <Divider />}
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
                {/* right */}
            </Stack>
            {/* keyboard shortcuts */}
            {openShortcuts && <Shortcuts open={openShortcuts} handleClose={() => setOpenShortcuts(false)} />}
            {/* theme */}
            {openTheme && <Theme open={openTheme} handleClose={() => setOpenTheme(false)} />}
        </>
    )
}

export default Settings