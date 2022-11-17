import React, { useState } from 'react'
// 图标
import { Image, DownloadSimple, DotsThreeVertical } from 'phosphor-react'
import { Stack, Divider, Box, Typography, Link, IconButton, Menu, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { Message_options } from '../../data'


// MessageOptions组件
const MessageOptions = ({ msg }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Stack>
            <Box
                id="basic-button"
                sx={{ cursor: 'pointer' }}
                onClick={handleClick}
            >
                <DotsThreeVertical size={20} />
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                // 以id="basic-button"的元素为参照，以该元素的哪个点为起始参照点
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                // MenuItem与参照元素的起始点的贴边
                transformOrigin={{
                    vertical: 'top',
                    horizontal: msg.incoming ? 'left' : 'right',
                }}
            >
                {Message_options.map(item => {
                    return (
                        <MenuItem key={item.title} onClick={handleClose}>{item.title}</MenuItem>
                    )
                })}
            </Menu>
        </Stack>
    )
}

// 公共部分
const CommonCom = ({ msg, children }) => {
    const theme = useTheme()
    return (
        <Stack
            direction={msg.incoming ? 'row' : 'row-reverse'}
            spacing={0.8}
            justifyContent={msg.incoming ? 'start' : 'end'}
        >
            <Box sx={{
                padding: 1.5,
                backgroundColor: msg.incoming
                    ? theme.palette.background.default
                    : theme.palette.primary.main,
                borderRadius: 1.5,
                width: 'max-content'
            }}
            >
                {children}
            </Box>
            {/* MessageOptions */}
            <MessageOptions msg={msg} />
        </Stack>
    )
}

// 时间分割线组件
export const TimeLine = ({ msg }) => {
    const theme = useTheme()
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Divider sx={{ width: '46%' }}></Divider>
            <Typography
                variant='caption'
                sx={{ color: theme.palette.text }}
            >
                {msg.text}
            </Typography>
            <Divider sx={{ width: '46%' }}></Divider>
        </Stack>
    )
}

// 文字消息
export const TextMsg = ({ msg }) => {
    const theme = useTheme()
    return (
        <CommonCom msg={msg}>
            <Typography variant="body2"
                color={msg.incoming ? theme.palette.text : '#fff'}
            >
                {msg.message}
            </Typography>
        </CommonCom>

    )
}

// 图片消息
export const ImgMsg = ({ msg }) => {
    const theme = useTheme()
    return (
        <CommonCom msg={msg}>
            <Stack spacing={2}>
                <img src={msg.img} alt={msg.message}
                    style={{ maxHeight: 210, borderRadius: '10px' }} />
                <Typography variant="body2"
                    color={msg.incoming ? theme.palette.text : '#fff'}
                >
                    {msg.message}
                </Typography>
            </Stack>
        </CommonCom>
    )
}

// 回复消息
export const ReplyMsg = ({ msg }) => {
    const theme = useTheme()
    return (
        <CommonCom msg={msg}>
            <Stack spacing={2}>
                {/* 被回复的消息 */}
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={3}
                    sx={{
                        padding: 2,
                        borderRadius: 1,
                        backgroundColor: theme.palette.background.paper
                    }}
                >
                    <Typography variant="body2"
                        color={theme.palette.text}
                    >
                        {msg.message}
                    </Typography>
                </Stack>
                {/* 回复主体 */}
                <Typography variant="body2"
                    color={msg.incoming ? theme.palette.text : '#fff'}
                >
                    {msg.message}
                </Typography>
            </Stack>
        </CommonCom>
    )
}

// 链接消息
export const LinkMsg = ({ msg }) => {
    const theme = useTheme()
    return (
        <CommonCom msg={msg}>
            <Stack spacing={2}>
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={3}
                    sx={{
                        padding: 2,
                        borderRadius: 1,
                        backgroundColor: theme.palette.background.neutral
                    }}
                >
                    <img src={msg.preview} alt={msg.message} style={{ maxHeight: 210, borderRadius: '10px' }} />
                    <Stack spacing={2}>
                        <Typography variant="subtitle2">Create a chat app</Typography>
                        <Typography variant="subtitle2"
                            component={Link}
                            to='https://www.youtube.com'
                            sx={{ color: theme.palette.primary.main }}
                        >
                            www.youtube.com
                        </Typography>
                    </Stack>
                </Stack>
                {/* 附加消息 */}
                <Typography variant="body2"
                    color={msg.incoming ? theme.palette.text : '#fff'}
                >
                    {msg.message}
                </Typography>
            </Stack>
        </CommonCom >
    )
}

// 文件消息
export const DocMsg = ({ msg }) => {
    const theme = useTheme()
    return (
        <CommonCom msg={msg}>
            <Stack spacing={2}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={3}
                    sx={{
                        padding: 2,
                        borderRadius: 1,
                        backgroundColor: theme.palette.background.neutral
                    }}
                >
                    <Image size={48} />
                    <Typography variant="caption">Abstract.png</Typography>
                    <IconButton >
                        <DownloadSimple />
                    </IconButton>
                </Stack>
                {/* 附加消息 */}
                <Typography variant="body2"
                    color={msg.incoming ? theme.palette.text : '#fff'}
                >
                    {msg.message}
                </Typography>
            </Stack>
        </CommonCom>
    )
}