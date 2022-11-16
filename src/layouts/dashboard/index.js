// Logo
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Logo from '../../assets/Images/logo.ico'
import { Nav_Buttons } from '../../data';

// Box: 类似div
// Stack: 使子组件、子元素水平或垂直分布
// Divider: 分隔线
import { Box, Stack, IconButton, Divider, Avatar, Switch } from '@mui/material'
import { Gear } from 'phosphor-react'
import { useTheme, styled } from '@mui/material/styles'
import { faker } from "@faker-js/faker";

import useSettings from '../../hooks/useSettings'

// 自定义 Switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



const DashboardLayout = () => {
  // console.log(theme);
  // 单位：8px
  // paddong: 2 即 padding: 16px
  // borderRadius: 1.5 即 borderRadius: 1.5 * 8(12)px
  const theme = useTheme()

  // 默认选中第一个
  const [selected, setSelected] = useState(0)

  const { onToggleMode } = useSettings()

  return (
    <>
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
            spacing={3}>
            <Box sx={{
              background: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5
            }}>
              <img src={Logo} alt="Chat App Logo" />
            </Box>
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
          <Stack
            direction={'column'}
            alignItems={'center'}
            spacing={4}
          >
            <MaterialUISwitch
              onChange={onToggleMode}
              checked={theme.palette.mode === 'light' ? false : true}
            />
            <Avatar src={faker.image.avatar()}></Avatar>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
