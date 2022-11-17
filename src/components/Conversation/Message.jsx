import React from 'react'

import { Box, Stack } from '@mui/material'
// 消息 静态资源
import { Chat_History } from '../../data'
// 消息组件
import { TimeLine, TextMsg, ImgMsg, ReplyMsg, LinkMsg, DocMsg } from './MessageTypes'

function Message() {
    return (
        <Box sx={{ padding: 3 }}>
            <Stack spacing={3} >
                {Chat_History.map((message, index) => {
                    switch (message.type) {
                        case 'divider':
                            return <TimeLine msg={message} key={index} />
                        case 'msg':
                            switch (message.subtype) {
                                case 'img':
                                    return <ImgMsg msg={message} key={index} />
                                case 'doc':
                                    return <DocMsg msg={message} key={index} />
                                case 'link':
                                    return <LinkMsg msg={message} key={index} />
                                case 'reply':
                                    return <ReplyMsg msg={message} key={index} />
                                default:
                                    return <TextMsg msg={message} key={index} />
                            }
                        default:
                            return <></>
                    }
                })}
            </Stack>
        </Box>
    )
}

export default Message