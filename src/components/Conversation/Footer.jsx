import React, { useState } from 'react'

// 图标
import { LinkSimple, Smiley, PaperPlaneTilt, Image, Sticker, Camera, File, User } from 'phosphor-react'
import { Stack, Box, IconButton, TextField, InputAdornment, Fab, Tooltip } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
// emoji
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

// Actions组件的资源
const ActionLists = [
    // y值代表 绝对定位的top值
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 62,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 132,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 202,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 272,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 342,
        title: "Contact",
    },
];
// 自定义输入框
const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: '12px 0',
    }
}))

// EmojiCart组件
const EmojiCart = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            // fixed定位，相对于浏览器窗口
            position: 'fixed',
            right: 100,
            bottom: 82,
            zIndex: 999
        }}>
            {/* 参照文档使用 */}
            <Picker
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={console.log}
            />
        </Box>
    )
}

// Actions组件
const ActionCom = () => {
    return (
        <Box sx={{
            // fixed定位，相对于浏览器窗口
            position: 'fixed',
            left: 445,
            bottom: 82,
            zIndex: 999,
            width: 'max-content',
            height: 'max-content'
        }}>
            <Stack sx={{ position: 'relative' }}>
                {ActionLists.map(item => {
                    return (
                        // Tooltip 提示文字
                        <Tooltip
                            title={item.title}
                            placement='right'
                            key={item.title}>
                            {/* Fab 圆形图标 */}
                            <Fab
                                sx={{
                                    position: 'absolute',
                                    top: -item.y,
                                    backgroundColor: item.color
                                }}
                            >
                                {item.icon}
                            </Fab>
                        </Tooltip>
                    )
                })}
            </Stack>
        </Box>
    )
}

function Footer() {
    const theme = useTheme()
    // 默认隐藏
    const [emojiCart, setEmojiCart] = useState(false)
    const [actionCom, setActionCom] = useState(false)
    // toggle
    const toggle = (type) => {
        if (type === 'action') {
            setEmojiCart(false)
            setActionCom(pre => !pre)
        } else {
            setActionCom(false)
            setEmojiCart(pre => !pre)
        }
    }

    return (
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
                            // InputAdornment的position(start|end)必须要有
                            <InputAdornment position='end' onClick={() => toggle('action')}>
                                <IconButton ><LinkSimple /></IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='end' onClick={() => toggle('emoji')}>
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
            {/* EmojiCart */}
            {emojiCart && <EmojiCart />}
            {/* ActionCom */}
            {actionCom && <ActionCom />}
        </Box>
    )
}

export default Footer