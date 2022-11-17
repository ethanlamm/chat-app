import React from 'react'
// 图标
import { Image, DownloadSimple } from 'phosphor-react'
import { Stack, Divider, Box, Typography, Link, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// 公共部分
const CommonCom = ({ msg, children }) => {
    const theme = useTheme()
    return (
        <Stack
            direction={'row'}
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