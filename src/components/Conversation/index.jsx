import React from 'react'
// 图标
import { VideoCamera, MagnifyingGlass, Phone, CaretDown, LinkSimple, Smiley, PaperPlaneTilt } from 'phosphor-react'
import { Stack, Box, Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker';

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

// 自定义输入框
const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: '12px 0',
    }
}))

function Conversation() {
    const theme = useTheme()
    return (
        <Stack sx={{ width: 'auto', height: '100vh' }}
        >
            {/* Header */}
            <Box sx={{
                width: '100%',
                backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                padding: 2
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
                        <Box>
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
                        <IconButton ><VideoCamera /></IconButton>
                        <IconButton ><Phone /></IconButton>
                        <IconButton ><MagnifyingGlass /></IconButton>
                        <Divider orientation='vertical' flexItem />
                        <IconButton ><CaretDown /></IconButton>
                    </Stack>
                </Stack>
            </Box>
            {/* MSG */}
            <Box sx={{ flexGrow: 1, width: '100%' }}></Box>
            {/* Footer */}
            <Box sx={{
                width: '100%',
                backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                padding: 2
            }}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={3}
                >
                    {/* 自定义input框 */}
                    <StyledInput
                        fullWidth
                        variant='filled'
                        placeholder='Type some message...'
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton ><LinkSimple /></IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton ><Smiley /></IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {/* 发送按钮 */}
                    <Box sx={{
                        height: 48,
                        width: 48,
                        borderRadius: 1.5,
                        backgroundColor: theme.palette.primary.main
                    }}
                    >
                        <Stack
                            sx={{ width: '100%', height: '100%' }}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <IconButton ><PaperPlaneTilt color='#fff' /></IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Conversation