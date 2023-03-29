import { useSiteContext } from '@/contexts/site'
import { Avatar, Button, Mentions, Drawer, FloatButton, Input, InputRef, App, Popconfirm, Space, theme as antdTheme, Tooltip, Typography, Popover } from 'antd'
import {
  AlignRightOutlined,
  AlignLeftOutlined,
  DownloadOutlined,
  DeleteOutlined,
  SendOutlined,
  ApiOutlined,
  DisconnectOutlined,
  LinkOutlined,
  ControlOutlined,
  EllipsisOutlined,
  MoreOutlined,
} from '@ant-design/icons'
import { useTranslation } from '@/locales'
import type { MentionsOptionProps } from 'antd/es/mentions'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import Empty from './Empty'
import Box from './Box'
import Option from './Option'
import { Chat, Message, ConversationRequest } from '@/types/chat'
import Setting from './Setting'
import { useEventTarget, useSize } from 'ahooks'
import { useChatContext } from '@/contexts/chat'
import { uuidv4 } from '@/utils/uuid'
import { usePromptContext } from '@/contexts'
import { useChat } from '@/hooks/useChat'

const _data: Chat = {
  uuid: '1679282990940',
  name: '小冰',
  avatar: '',
  description: '你的私人小秘书',
  type: 'robot',
  status: 'online',
  lastMessage: {
    uuid: '1679282990940',
    text: '你好，我是小冰，你的私人小秘书，有什么可以帮到你的吗？',
    dateTime: '2021-08-12T09:30:00.000Z',
    inversion: false,
    error: false,
    conversationOptions: null,
    requestOptions: null,
  },
  messageList: [
    {
      dateTime: '2023/3/20 11:32:26',
      text: '帮我用js写一个登录请求的方法',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '帮我用js写一个登录请求的方法',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 11:33:00',
      text: "当用户提交登录表单时，您可以使用JavaScript编写一个登录请求方法来向服务器发送请求以验证用户凭据。以下是一个示例函数，它使用Fetch API发送一个POST请求到服务器，以便将用户名和密码发送给服务器：\n\n```javascript\nasync function login(username, password) {\n  const url = 'https://example.com/login'; // 修改为实际的登录地址\n  const data = { username: username, password: password };\n  const options = {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  };\n\n  try {\n    const response = await fetch(url, options);\n    const json = await response.json();\n    // 处理服务器返回的JSON响应\n    console.log(json);\n  } catch (error) {\n    // 处理错误\n    console.error(error);\n  }\n}\n```\n\n在这个函数中，我们使用Fetch API发送一个POST请求到服务器，将用户名和密码作为JSON对象发送到服务器。请注意，这个函数是异步的，因为我们需要等待服务器的响应。如果请求成功，我们使用await关键字从响应中解析JSON数据，并将其打印到控制台上。如果请求失败，我们使用try...catch语句来捕获错误并打印到控制台上。\n\n当您调用这个函数时，您需要将用户名和密码作为参数传递给它：\n\n```javascript\nlogin('myusername', 'mypassword');\n```\n\n请注意，这个示例函数只是一个基本的登录请求方法，您需要将其修改为与您的实际应用程序和服务器端点相匹配。您可能需要调整URL、请求头和请求主体等参数，以确保请求正确地发送到服务器。",
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '34132d2a-0aec-49a8-a70f-ca0133cfbdee',
        parentMessageId: '1ab429f3-c7a4-42f5-ba5c-6a479fdef018',
      },
      requestOptions: {
        prompt: '帮我用js写一个登录请求的方法',
        options: {},
      },
    },
    {
      dateTime: '2023/3/20 11:34:13',
      text: '用axios这个库',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '用axios这个库',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 11:34:43',
      text: "当用户提交登录表单时，您可以使用axios库来编写一个登录请求方法，以向服务器发送请求以验证用户凭据。以下是一个示例函数，它使用axios发送一个POST请求到服务器，以将用户名和密码发送给服务器：\n\n```javascript\nasync function login(username, password) {\n  const url = 'https://example.com/login'; // 修改为实际的登录地址\n  const data = { username: username, password: password };\n  const config = {\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  };\n\n  try {\n    const response = await axios.post(url, data, config);\n    // 处理服务器返回的数据\n    console.log(response.data);\n  } catch (error) {\n    // 处理错误\n    console.error(error);\n  }\n}\n```\n\n在这个函数中，我们使用axios发送一个POST请求到服务器，将用户名和密码作为JSON对象发送到服务器。请注意，这个函数是异步的，因为我们需要等待服务器的响应。如果请求成功，我们将服务器返回的数据打印到控制台上。如果请求失败，我们使用try...catch语句来捕获错误并打印到控制台上。\n\n当您调用这个函数时，您需要将用户名和密码作为参数传递给它：\n\n```javascript\nlogin('myusername', 'mypassword');\n```\n\n请注意，这个示例函数只是一个基本的登录请求方法，您需要将其修改为与您的实际应用程序和服务器端点相匹配。您可能需要调整URL、请求头和请求主体等参数，以确保请求正确地发送到服务器。",
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '34132d2a-0aec-49a8-a70f-ca0133cfbdee',
        parentMessageId: 'c41041a8-b67a-4a2d-a303-43ccb59c0a04',
      },
      requestOptions: {
        prompt: '用axios这个库',
        options: {
          conversationId: '34132d2a-0aec-49a8-a70f-ca0133cfbdee',
          parentMessageId: '1ab429f3-c7a4-42f5-ba5c-6a479fdef018',
        },
      },
    },
    {
      dateTime: '2023/3/20 11:39:31',
      text: '😂',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '😂',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 11:39:34',
      text: "I'm glad I made you laugh! Is there anything I can help you with today?",
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '2f331b40-2270-487f-90f4-1a2e7407b352',
        parentMessageId: '7b8be987-6cdf-49a2-83b4-c3dbe66c72da',
      },
      requestOptions: {
        prompt: '😂',
        options: {},
      },
    },
    {
      dateTime: '2023/3/20 11:39:42',
      text: '翻译上面的内容',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '翻译上面的内容',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 11:39:48',
      text: '我是ChatGPT，一个由OpenAI训练的大型语言模型，基于GPT-3.5架构。\n知识截止日期为2021年9月，当前日期为2023年3月20日。',
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
        parentMessageId: 'a97cb290-5b15-4f0c-b1f2-039f8ada3da6',
      },
      requestOptions: {
        prompt: '翻译上面的内容',
        options: {},
      },
    },
    {
      dateTime: '2023/3/20 11:40:09',
      text: '😂',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '😂',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 11:40:13',
      text: '看起来您在开玩笑，请问有什么我可以帮助您的吗？',
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
        parentMessageId: 'ce5c8716-cea2-4c9e-a82b-f22dc584f6ee',
      },
      requestOptions: {
        prompt: '😂',
        options: {
          conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
          parentMessageId: 'a97cb290-5b15-4f0c-b1f2-039f8ada3da6',
        },
      },
    },
    {
      dateTime: '2023/3/20 11:44:35',
      text: '发一张js的logo图',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '发一张js的logo图',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 11:44:41',
      text: '很抱歉，作为语言模型，我无法直接提供图片。但是，你可以在互联网上搜索“JavaScript logo”以获取相关的图片结果。',
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
        parentMessageId: '1175daaf-20ef-4c75-aa72-ad2526965cad',
      },
      requestOptions: {
        prompt: '发一张js的logo图',
        options: {
          conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
          parentMessageId: 'ce5c8716-cea2-4c9e-a82b-f22dc584f6ee',
        },
      },
    },
    {
      dateTime: '2023/3/20 16:29:48',
      text: '用fetch请求测试接口的\n\n代码示例',
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: {
        prompt: '用fetch请求测试接口的代码示例',
        options: null,
      },
    },
    {
      dateTime: '2023/3/20 16:30:30',
      text: "好的，以下是使用 JavaScript fetch API 进行 API 请求的示例代码：\n\n```javascript\nfetch('https://example.com/api/data')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    return response.json();\n  })\n  .then(data => {\n    console.log(data);\n    // 这里可以对获取到的数据进行处理\n  })\n  .catch(error => {\n    console.error('There was a problem with the fetch operation:', error);\n  });\n```\n\n在这个例子中，我们使用 `fetch()` 函数来发送 HTTP GET 请求，并将 API URL 作为参数传递给该函数。 `fetch()` 函数返回一个 Promise 对象，可以通过 `then()` 方法来获取响应对象。\n\n在第一个 `then()` 中，我们检查响应对象的 `ok` 属性，以确保响应成功。如果响应不成功，我们使用 `throw` 关键字抛出一个自定义错误。\n\n如果响应成功，我们可以通过 `json()` 方法将响应转换为 JSON 格式的数据，并在第二个 `then()` 中处理这些数据。在这个例子中，我们只是简单地将数据打印到控制台中。\n\n最后，如果请求出现任何问题，我们可以通过 `catch()` 方法来捕获错误，并将其记录在控制台中。",
      inversion: false,
      error: false,
      loading: false,
      conversationOptions: {
        conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
        parentMessageId: 'c7a68fee-ba02-47ab-8324-7483c5922bc2',
      },
      requestOptions: {
        prompt: '用fetch请求测试接口的代码示例',
        options: {
          conversationId: '272d6d5d-d213-44c4-b78f-1b9cd554848f',
          parentMessageId: '1175daaf-20ef-4c75-aa72-ad2526965cad',
        },
      },
    },
  ],
}

function Message() {
  const router = useRouter()
  const { token } = antdTheme.useToken()
  const { theme } = useSiteContext()
  const { message, modal, notification } = App.useApp()
  const { activeChat, newChat, newMessage, delChat, upChat } = useChatContext()
  const { promptList } = usePromptContext()
  const { t } = useTranslation()
  const { sendMessage, loading } = useChat()
  const [input, setInput] = useState<string>('')
  const [canSend, setCanSend] = useState<boolean>(false)
  const [coiled, setCoiled] = useState<boolean>(true)
  const [openSet, setOpenSet] = useState<boolean>(false)
  const [place, setPlace] = useState<'left' | 'right'>('right')
  const [uuid, setUuid] = useState<string>('')
  const [info, setInfo] = useState<Chat>()
  const [list, setList] = useState<Message[]>([])
  const [plist, setPlist] = useState<{ label: string; value: string }[]>([])
  const bodySize = useSize(typeof document !== 'undefined' ? document?.querySelector('body') : null)

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    // height: 200,
    // padding: 48,
    // overflow: 'hidden',
    // textAlign: 'center',
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  }

  useEffect(() => {
    if (promptList) {
      const list = promptList.map((item) => {
        return {
          key: item.uuid as string,
          label: item.name as string,
          value: item.prompt as string,
        }
      })
      setPlist(list)
    }
  }, [promptList])

  useEffect(() => {
    console.log(activeChat, activeChat?.uuid)
    if (activeChat) {
      setUuid(activeChat?.uuid as string)
      setInfo(activeChat as Chat)
      setList(activeChat?.messageList || [])
      setPlace(activeChat?.place || 'right')
      setTimeout(() => {
        // 滚动到最底部
        const ele = document.getElementById('messageBox')
        if (ele) {
          ele.scrollTo(0, ele.scrollHeight)
        }
      }, 150)
    } else {
      setUuid('')
      setInfo(undefined)
      setList([])
    }
  }, [activeChat])

  // send message
  const sendMessageText = (input: string, options?: { [key: string]: string } | ConversationRequest) => {
    // @ts-ignore
    let text = input || ''
    // 替换富文本换行\n为\n\n
    text = text.replace(/\n/g, '\n\n')
    console.log('text', text)
    // !todo 过滤输入字符串
    if (!text) return
    // 是否联系上下文,最后一条消息的conversationOptions
    const newOptions = {
      ...(coiled
        ? {
            conversationId: activeChat?.lastMessage?.uuid,
            parentMessageId: activeChat?.lastMessage?.id,
          }
        : {}),
      ...options,
    }
    const nMessage = {
      id: uuidv4(),
      uuid: activeChat?.uuid,
      dateTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
      text,
      inversion: true,
      error: false,
      conversationOptions: newOptions,
      requestOptions: {
        prompt: text,
        options: newOptions,
      },
    }
    // 如果初始化刚进来，没有新聊天，则自动创建一个新聊天
    if (!activeChat) {
      const _uuid = uuidv4()
      setUuid(_uuid)
      newChat({
        uuid: _uuid,
        name: 'ChatGPT',
        lastMessage: nMessage,
        lastMessageText: 'No message',
        lastMessageTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
        messageList: [nMessage],
      })
    } else {
      const _list = [...list]
      _list.push(nMessage)
      setList(_list)
      newMessage(uuid, nMessage)
    }

    setCanSend(false)
    setInput('')
    // 滚动到最底部
    scrollBottom()
    setTimeout(() => {
      // 发送请求
      sendMessageRequest(text, newOptions)
    }, 200)
  }

  const sendMessageRequest = (text: string, newOptions?: { [key: string]: string } | ConversationRequest) => {
    // 添加提示符
    const dateTime = dayjs().format('YYYY/MM/DD HH:mm:ss')
    // 接收到回复消息，添加临时-消息列表
    const tempMesasge = {
      id: uuidv4(),
      uuid: uuid,
      dateTime: dateTime,
      text: "I'm thinking...",
      inversion: false,
      temp: true,
      error: false,
    }
    const _list = [...list]
    _list.push(tempMesasge)
    setList(_list)
    scrollBottom()

    // 发送ChatGPT消息
    sendMessage({
      text,
      options: newOptions,
      onProgress: (e: any, scene: any, body?: any) => {
        console.log('onProgress', e, scene, body)
        switch (scene) {
          case 'error':
            message.error(body?.err)
            // 接收到回复消息，添加到消息列表
            const errorMesasge = {
              id: body?.id || uuidv4(),
              uuid: body?.conversationId,
              dateTime: dateTime,
              text: body?.err || 'Error',
              inversion: false,
              error: true,
              conversationOptions: newOptions,
              requestOptions: {
                prompt: text,
                options: newOptions,
              },
              conversationRequest: {
                conversationId: newOptions?.conversationId,
                parentMessageId: newOptions?.parentMessageId,
              },
              conversationResponse: body,
            }
            newMessage(uuid, { ...errorMesasge })
            scrollBottom()
            break
          case 'receive':
            // 接收到回复消息，添加临时-消息列表
            if (!body?.text) return
            const tempMesasge = {
              id: body?.id || uuidv4(),
              uuid: body?.conversationId,
              dateTime: dateTime,
              text: body?.text + '  I ',
              inversion: false,
              temp: true,
              error: false,
            }
            // 如果最后一条数据是临时的，则替换否则添加
            const _list = [...list]
            // @ts-ignore
            const isTemp = _list[_list.length - 1]?.temp
            if (isTemp) {
              _list.pop()
            }
            _list.push(tempMesasge)
            setList(_list)
            scrollBottom()
            break
          case 'complete':
            // 接收到回复消息，添加到消息列表
            const newMesasge = {
              id: body?.id || uuidv4(),
              uuid: body?.conversationId,
              dateTime: dateTime,
              text: body?.text,
              inversion: false,
              error: false,
              conversationOptions: newOptions,
              requestOptions: {
                prompt: text,
                options: newOptions,
              },
              conversationRequest: {
                conversationId: newOptions?.conversationId,
                parentMessageId: newOptions?.parentMessageId,
              },
              conversationResponse: body,
            }
            newMessage(uuid, { ...newMesasge })
            scrollBottom()
            break
          default:
            break
        }
      },
    })
  }

  const scrollBottom = () => {
    const ele = document.getElementById('messageBox')
    if (ele) {
      setTimeout(() => {
        ele.scrollTo(0, ele.scrollHeight)
      }, 50)
    }
  }

  const editName = (_name: string) => {
    upChat(uuid, {
      name: _name,
    })
  }
  const editDesc = (_description: string) => {
    upChat(uuid, {
      description: _description,
    })
  }

  const switchPlace = () => {
    const _place = place == 'right' ? 'left' : 'right'
    setPlace(_place)
    upChat(uuid, {
      place: _place,
    })
  }

  return (
    <div style={{ border: '0px solid #efeff5', flex: 1, padding: '16 16 0 16', display: 'flex', flexDirection: 'column', overflow: 'auto', width: '100%' }}>
      <div
        style={{
          height: 64,
          // borderRight: `${theme === 'dark' ? 0 : 1}px solid ${token.colorBorder}`,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: theme == 'dark' ? token.colorBgContainer : '#fff',
          color: theme === 'dark' ? '#eee' : undefined,
          borderBottom: `1px solid ${theme == 'dark' ? '#424242' : '#e8e8e8'}`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 9,
          right: 0,
          left: 0,
          padding: '16px',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Avatar shape={'circle'} size={42} style={{ padding: 4 }} src={<Image src={info?.avatar || require('@/assets/openai.png')} width={42} height={42} alt="avatar" />} />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
            <Typography.Paragraph
              editable={
                activeChat
                  ? {
                      autoSize: true,
                      onChange: (val) => {
                        console.log(val)
                        editName(val)
                      },
                      onEnd: () => {},
                      text: info?.name,
                    }
                  : false
              }
              style={{ fontSize: 16, width: '100%', fontWeight: 500, color: theme === 'dark' ? '#eee' : undefined, margin: 0, display: (bodySize?.width as number) < 400 ? 'none' : 'block' }}
            >
              {info?.name}
            </Typography.Paragraph>
            <Typography.Paragraph
              editable={
                activeChat
                  ? {
                      autoSize: true,
                      onChange: (val) => {
                        editDesc(val)
                      },
                      onEnd: () => {},
                    }
                  : false
              }
              style={{ fontSize: 12, width: '100%', color: theme === 'dark' ? '#eee' : undefined, margin: 0, display: (bodySize?.width as number) < 500 ? 'none' : 'block' }}
            >
              {info?.description || info?.uuid}
            </Typography.Paragraph>
          </div>
        </div>
        <Space>
          <Popover
            content={() => {
              return <Option chat={activeChat as Chat} />
            }}
            title={t('chat.optionTitle')}
            getPopupContainer={(triggerNode) => triggerNode?.parentElement as HTMLElement}
            trigger="click"
            destroyTooltipOnHide={true}
          >
            <Button type={'default'} size="middle" icon={<ControlOutlined />}></Button>
          </Popover>
          <Button
            type={'default'}
            size="middle"
            icon={<ApiOutlined />}
            onClick={() => {
              message.warning(t('chat.api_warning'))
            }}
          ></Button>
          <Tooltip trigger={['hover']} title={t('chat.coiledText', { status: coiled ? t('c.open') : t('c.close') })}>
            <Button
              type={coiled ? 'default' : 'dashed'}
              size="middle"
              style={{ color: coiled ? token.colorPrimary : undefined }}
              icon={coiled ? <LinkOutlined rotate={-45} /> : <DisconnectOutlined rotate={-45} />}
              onClick={() => setCoiled(!coiled)}
            ></Button>
          </Tooltip>
          <Popconfirm
            key="del"
            title="Delete the chat"
            description="Are you sure to delete this chat?"
            onConfirm={(e?: React.MouseEvent<HTMLElement>) => {
              delChat(uuid)
              return
            }}
            onCancel={(e?: React.MouseEvent<HTMLElement>) => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button type={'default'} size="middle" style={{ color: token.colorError }} icon={<DeleteOutlined />}></Button>
          </Popconfirm>
          <Button type={'default'} size="middle" icon={place === 'left' ? <AlignLeftOutlined /> : <AlignRightOutlined />} onClick={switchPlace}></Button>
          <Button
            type={'default'}
            size="middle"
            icon={<DownloadOutlined />}
            onClick={() => {
              message.info(t('c.devBuilding'))
            }}
          ></Button>
          {/* <Button
            type={'default'}
            size="middle"
            icon={<MoreOutlined />}
            onClick={() => {
              // setOpenSet(!openSet)
            }}
          ></Button> */}
        </Space>
      </div>
      <div id="messageBox" style={{ flex: 1, padding: '16 16 0 16', position: 'relative', overflowX: 'hidden', overflowY: openSet ? 'hidden' : 'auto' }}>
        {list.length <= 0 ? (
          <Empty style={{ flex: 1 }}></Empty>
        ) : (
          <div style={{ flex: 1 }}>
            {list.map((item: Message) => {
              return (
                <Box
                  key={item.id}
                  uuid={uuid}
                  item={item}
                  place={item.inversion == false ? 'left' : place}
                  resendMessage={(mm: Message) => {
                    sendMessageText(mm.text, mm?.conversationOptions as ConversationRequest)
                  }}
                />
              )
            })}
          </div>
        )}

        <Drawer title={t('chat.setting')} placement="right" maskClosable zIndex={0} open={openSet} onClose={() => setOpenSet(false)} getContainer={false}>
          <Setting uuid={uuid}></Setting>
        </Drawer>
        <FloatButton.BackTop
          style={{ marginBottom: 105, marginRight: 16 }}
          // @ts-ignore
          target={() => {
            return document.getElementById('messageBox')
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          minHeight: '70px',
          textAlign: 'center',
          padding: '15px 0',
          position: 'sticky',
          display: 'inline-flex',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          backgroundColor: theme === 'dark' ? undefined : '#fff',
          justifyContent: 'center',
        }}
      >
        <Tooltip trigger={['hover']} title={t('chat.coiledText', { status: coiled ? t('c.open') : t('c.close') })}>
          <Button
            type={coiled ? 'default' : 'dashed'}
            size="large"
            style={{ marginLeft: 10, marginRight: 10, color: coiled ? token.colorPrimary : undefined }}
            icon={coiled ? <LinkOutlined rotate={-45} /> : <DisconnectOutlined rotate={-45} />}
            onClick={() => setCoiled(!coiled)}
          ></Button>
        </Tooltip>
        <Mentions
          style={{ width: '100%', paddingRight: -5, textAlign: 'left' }}
          autoFocus={true}
          placeholder={t('chat.inputPlaceholder') || ''}
          autoSize={true}
          value={input}
          prefix={['/']}
          onChange={(e) => {
            setInput(e)
            if (e) {
              setCanSend(true)
            } else {
              setCanSend(false)
            }
          }}
          options={[...plist]}
        />
        {/* <Input.TextArea
          ref={refInput}
          autoFocus={true}
          allowClear
          autoSize={true}
          style={{ width: 'calc(80% - 20px)', paddingRight: -5 }}
          placeholder={t('chat.inputPlaceholder') || ''}
          size={'large'}
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            if (e.target.value) {
              setCanSend(true)
            } else {
              setCanSend(false)
            }
          }}
          onPressEnter={(e) => {
            sendMessageText(input)
          }}
        ></Input.TextArea> */}
        <Button
          type="primary"
          ghost={false}
          size="large"
          icon={<SendOutlined rotate={-45} />}
          disabled={canSend ? false : true}
          style={{ marginLeft: 10, marginRight: 10 }}
          onClick={() => sendMessageText(input)}
        >
          {t('chat.send')}
        </Button>
      </div>
    </div>
  )
}

export default Message
