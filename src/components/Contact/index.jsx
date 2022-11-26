import React, { useState } from 'react'
// 图标
import { X, Phone, VideoCamera, CaretRight, Star, Bell, Prohibit, Trash } from 'phosphor-react'
import { Box, Stack, Typography, IconButton, Avatar, Divider, Button, ImageList, ImageListItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// 开关
import AntSwitch from '../AntSwitch'
// Dialogs
import { BlockDialog, DeleteDialog } from './Dialogs'

import { useSideBar } from '../../store/exports'
import { faker } from '@faker-js/faker'

function Contact() {
    const theme = useTheme()
    const { useToggleSideBar, useUpdateSideBar } = useSideBar()

    const [blockDialog, setBlockDialog] = useState(false)
    const [deleteDialog, setDeleteDialog] = useState(false)

    const closeBlockDialog = () => {
        setBlockDialog(false)
    }
    const closeDeleteDialog = () => {
        setDeleteDialog(false)
    }

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
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{ width: '100%', height: '100%', padding: 2 }}
                >
                    <Typography variant='subtitle2'>Contact Info</Typography>
                    <IconButton onClick={useToggleSideBar}><X /></IconButton>
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
                {/* UserInfo */}
                <Stack direction={'row'} alignItems={'center'} spacing={2} >
                    <Avatar
                        sx={{ height: 64, width: 64 }}
                        src={faker.image.avatar()} alt={faker.name.fullName()}
                    />
                    <Stack spacing={0.5}>
                        <Typography variant='article' fontWeight={600}>{faker.name.fullName()}</Typography>
                        <Typography variant='body2' fontWeight={500}>{'+91 723 3792 2901'}</Typography>
                    </Stack>
                </Stack>
                {/* Phone and Video */}
                <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                    <Stack alignItems={'center'} spacing={1}>
                        <IconButton ><Phone /></IconButton>
                        <Typography variant='overline'>Vioce</Typography>
                    </Stack>
                    <Stack alignItems={'center'} spacing={1}>
                        <IconButton ><VideoCamera /></IconButton>
                        <Typography variant='overline'>Video</Typography>
                    </Stack>
                </Stack>
                <Divider />
                {/* Essays */}
                <Stack spacing={0.5}>
                    <Typography variant='article'>Essays</Typography>
                    <Typography variant='body2'>Nothing starts with N and ends with G</Typography>
                </Stack>
                <Divider />
                {/* Shared Message */}
                <Stack spacing={1}>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Typography variant="subtitle1">Media, Links $ Docs</Typography>
                        <Button endIcon={<CaretRight />}
                            onClick={useUpdateSideBar({ type: 'SHARED' })}
                        >401</Button>
                    </Stack>
                    <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={'100%'}>
                        {[1, 2, 3].map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={faker.image.animals()}
                                    alt={faker.name.fullName()}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Stack>
                <Divider />
                {/* Starred Message */}
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Star size={22} />
                        <Typography variant='subtitle1'>Starred Messages</Typography>
                    </Stack>
                    <IconButton sx={{
                        color: theme.palette.mode === 'light'
                            ? '#000'
                            : theme.palette.text.primary
                    }}
                        onClick={useUpdateSideBar({ type: 'STARRED' })}
                    ><CaretRight /></IconButton>
                </Stack>
                <Divider />
                {/* Mute Notifications */}
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Bell size={22} />
                        <Typography variant='subtitle1'>Mute Notifications</Typography>
                    </Stack>
                    <AntSwitch />
                </Stack>
                <Divider />
                {/* Group */}
                <Typography variant='subtitle1'>1 gruop in common</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2} >
                    <Avatar sx={{ height: 40, width: 40 }}
                        src={faker.image.avatar()} alt={faker.name.fullName()}
                    />
                    <Stack spacing={0.5}>
                        <Typography variant='article' fontWeight={600}>{'Gruop Name'}</Typography>
                        <Typography variant='body2' fontWeight={500}>{'Owl,Parrot,Rabbit,You'}</Typography>
                    </Stack>
                </Stack>
                {/* Buttons */}
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Button startIcon={<Prohibit />} variant='outlined' fullWidth onClick={() => setBlockDialog(true)}>Block</Button>
                    <Button startIcon={<Trash />} variant='outlined' fullWidth onClick={() => setDeleteDialog(true)}>Delete</Button>
                </Stack>
            </Stack>
            {/* Dialogs */}
            {blockDialog && <BlockDialog open={blockDialog} handleClose={closeBlockDialog} />}
            {deleteDialog && <DeleteDialog open={deleteDialog} handleClose={closeDeleteDialog} />}
        </Stack>
    )
}

export default Contact