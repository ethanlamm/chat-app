import React from 'react'
import { Box, Stack, Typography, IconButton, InputBase, Button, Divider, Avatar, Badge } from '@mui/material'
// 搜索框
import { styled, alpha, useTheme } from '@mui/material/styles'
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react'

// constant资源
import { ChatList } from '../../data'

// import { SimpleBarStyle } from '../../components/Scrollbar'

// 自定义search搜索框
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));

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

// 单个联系人卡片
const ChatElement = (data) => {
    let { img, name, msg, time, unread, online } = data
    const theme = useTheme()
    return (
        <Box sx={{
            width: '100%',
            borderRadius: 1,
            backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
            padding: 2
        }}>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Stack
                    direction={'row'}
                    spacing={2}
                    alignItems={'center'}
                >
                    {/* 头像 */}
                    {
                        online ?
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={img}></Avatar>
                            </StyledBadge>
                            :
                            <Avatar src={img}></Avatar>
                    }
                    {/* 名字和内容 */}
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg}</Typography>
                    </Stack>
                </Stack>
                {/* 时间和消息数目 */}
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={2}
                >
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {time}
                    </Typography>
                    <Badge color='primary' badgeContent={unread}></Badge>
                </Stack>
            </Stack>
        </Box>
    )
}

function Chats() {
    const theme = useTheme()
    return (
        <Box sx={{
            position: 'relative',
            width: '320px',
            height: '100vh',
            backgroundColor: theme.palette.mode === 'light' ? '#F8fAFF' : theme.palette.background.paper,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
        }}>
            <Stack
                direction={'column'}
                spacing={2}
                sx={{ padding: 3, height: '100vh' }}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Typography variant='h5'>Chats</Typography>
                    <IconButton >
                        <CircleDashed></CircleDashed>
                    </IconButton>
                </Stack>
                {/* 搜索框 */}
                <Stack sx={{ width: '100%' }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search.." />
                    </Search>
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                        <ArchiveBox size={24} />
                        {
                            theme.palette.mode === 'light' ?
                                <Button variant='outlined'>
                                    Archived
                                </Button>
                                :
                                <Button variant='outlined'
                                    sx={{ color: '#fff' }}>
                                    Archived
                                </Button>
                        }
                    </Stack>
                    <Divider />
                </Stack>
                <Stack
                    direction={'column'}
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        height: '100%'
                    }}
                >
                    {/* 固定的(类似置顶的) */}
                    <Stack spacing={2.4}>
                        <Typography
                            variant="subtitle2"
                            color={theme.palette.mode === 'light' ? "#676767" : "#fff"}>
                            Pinned
                        </Typography>
                        {
                            ChatList.filter(item => item.pinned).map(Item => {
                                // 过滤出pinned(固定的，类似"置顶"),然后遍历渲染同时传入整体数据
                                return <ChatElement {...Item} key={Item.id} />
                            })
                        }
                    </Stack>
                    {/* 所有联系人 */}
                    <Stack spacing={2.4}>
                        <Typography
                            variant="subtitle2"
                            color={theme.palette.mode === 'light' ? "#676767" : "#fff"}>
                            All Chats
                        </Typography>
                        {
                            ChatList.filter(item => !item.pinned).map(Item => {
                                // 过滤出不pinned(固定的，类似"置顶"),然后遍历渲染同时传入整体数据
                                return <ChatElement {...Item} key={Item.id} />
                            })
                        }
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Chats