import React, { useState } from 'react'

import Logo from '../../assets/Images/logo.ico'
import { Nav_Buttons } from '../../data';

// Box: 类似div
// Stack: 使子组件、子元素水平或垂直分布
// Divider: 分隔线
import { Box, Stack, IconButton, Divider, Avatar } from '@mui/material'
import { Gear } from 'phosphor-react'
import { useTheme } from '@mui/material/styles'
import { faker } from "@faker-js/faker";

import MaterialUISwitch from '../../components/MaterialUISwitch';

function SideBar() {
    // console.log(theme);
    // 单位：8px
    // paddong: 2 即 padding: 16px
    // borderRadius: 1.5 即 borderRadius: 1.5 * 8(12)px
    const theme = useTheme()

    // 默认选中第一个
    const [selected, setSelected] = useState(0)

    return (
        <Box sx={{
            background: theme.palette.background.paper,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            height: '100vh',
            width: 100,
            padding: 2
        }}
        >
            <Stack
                direction={'column'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{ width: '100%', height: '100%' }}
            >
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={3}
                >
                    {/* Logo */}
                    <Box sx={{
                        background: theme.palette.primary.main,
                        height: 64,
                        width: 64,
                        borderRadius: 1.5
                    }}>
                        <img src={Logo} alt="Chat App Logo" />
                    </Box>
                    {/* 上侧四个图标 */}
                    <Stack
                        direction={'column'}
                        alignItems={'center'}
                        spacing={3}
                        sx={{ width: 'max-content' }}
                    >
                        {
                            Nav_Buttons.map(el =>
                                el.index === selected ?
                                    <Box
                                        key={el.index}
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            borderRadius: 1.5,
                                            padding: 1
                                        }}
                                    >
                                        <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                                            {el.icon}
                                        </IconButton>
                                    </Box>
                                    :
                                    <IconButton key={el.index}
                                        sx={{
                                            width: 'max-content',
                                            color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                                        }}
                                        onClick={() => setSelected(el.index)}>
                                        {el.icon}
                                    </IconButton>
                            )
                        }
                        <Divider sx={{ width: '48px' }} />
                        {
                            selected === 3 ?
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5,
                                        padding: 1
                                    }}
                                >
                                    <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                                        <Gear></Gear>
                                    </IconButton>
                                </Box>
                                :
                                <IconButton
                                    sx={{
                                        width: 'max-content',
                                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                                    }}
                                    onClick={() => setSelected(3)}
                                >
                                    <Gear></Gear>
                                </IconButton>
                        }
                    </Stack>
                </Stack>
                {/* 开关和头像 */}
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={4}
                >
                    <MaterialUISwitch />
                    <Avatar src={faker.image.avatar()}></Avatar>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar