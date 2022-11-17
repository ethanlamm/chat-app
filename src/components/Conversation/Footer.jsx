import React from 'react'

// 图标
import { LinkSimple, Smiley, PaperPlaneTilt } from 'phosphor-react'
import { Stack, Box, IconButton, TextField, InputAdornment } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

// 自定义输入框
const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: '12px 0',
    }
}))

function Footer() {
    const theme = useTheme()

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
    )
}

export default Footer