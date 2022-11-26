import React from 'react'

// 图标
import { VideoCamera, MagnifyingGlass, Phone, CaretDown } from 'phosphor-react'
import { Stack, Box, Avatar, Typography, IconButton, Divider, Badge } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker';


import { useDispatch } from 'react-redux'
import { toggleSideBar, updateSideBar } from '../../store/slices/app'

// 自定义头像 （圆点）
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));



function Header() {
    const theme = useTheme()
    const dispatch = useDispatch()
    const openContact = () => {
        dispatch(updateSideBar({ type: 'CONTACT' }))
        dispatch(toggleSideBar())
    }

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            padding: 2,
            zIndex: 0
        }}>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{ width: '100%', height: '100%' }}
            >
                {/* 左侧头像和名字 */}
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={2}
                >
                    <Box sx={{ cursor: 'pointer' }} onClick={openContact}>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        </StyledBadge>
                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                        <Typography variant="caption">Online</Typography>
                    </Stack>
                </Stack>
                {/* 右侧图标区 */}
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={3}
                >
                    <IconButton sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                    }}>
                        <VideoCamera />
                    </IconButton>
                    <IconButton sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                    }}>
                        <Phone />
                    </IconButton>
                    <IconButton sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                    }}>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                    }}>
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Header