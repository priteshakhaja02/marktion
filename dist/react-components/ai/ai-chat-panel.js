import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useChat } from 'ai/react';
import { SparklesIcon, SendHorizonalIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Popover, Input, Button, theme } from 'antd';
import { usePMRenderer } from '../../react-hooks';
import { ChatMessages } from './ai-chat-messages';
import { ChatMenu, ChatMenuKey } from './ai-chat-menu';
import { insertMessages } from './helper';
import getConfig from "next/config";

// const APICALL_KEY_OPENAI = 'openai'
// const APICALL_KEY_FILE = 'file'
// const defaultInitialMessages = DEBUG_MESSAGE;
const NO_CONTEXT = 'no-context'
const SMALL_CONTEXT = 'small-context'
const LARGE_CONTEXT = 'large-context'
const defaultInitialMessages = [];

export function AIChatPanel({ children, gptConfig, selection, ...popoverProps }) {

    const inputRef = useRef(null);
    const [chatMenuOpen, setChatMenuOpen] = useState(false);
    const [inputEvent, setInputEvent] = useState({});
    const [key, setKey] = useState(NO_CONTEXT);
    // const [isOpenAiCall, setIsOpenAiCall] = useState(APICALL_KEY_FILE);
    const chatMenuWrapperRef = useRef(null);
    const { token } = theme.useToken();
    const pm = usePMRenderer();

    // console.log("gptConfig",gptConfig)

    const { messages, input, isLoading, handleInputChange, handleSubmit, setMessages, stop } = useChat({
        api: gptConfig.baseUrl + '?type='+ key,
        initialMessages: defaultInitialMessages,
        headers: {
            Authorization: `Bearer ${gptConfig?.token || ''}`
        },
        ...gptConfig
    });

    const [isComposingInput, setIsComposingInput] = useState(false);

    useEffect(() => {
        if (!popoverProps.open) {
            setMessages(defaultInitialMessages);
            stop();
        }
        else {
            requestAnimationFrame(() => {
                inputRef.current?.focus();
            });
        }
    }, [popoverProps.open]);

    useEffect(() => {
        if (!popoverProps.open) {
            setChatMenuOpen(false);
            return;
        }
        if (messages.length >= 2) {
            setChatMenuOpen(true);
        }
    }, [messages.length >= 2, popoverProps.open, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            inputRef.current?.focus();
        }
    }, [isLoading]);

    useEffect(() => {
        if (!popoverProps.open) {
            return;
        }
        const onKeydown = (e) => {
            if (e.key === 'Escape') {
                popoverProps.onOpenChange?.(false);
                pm.focus();
            }
        };
        window.addEventListener('keydown', onKeydown);
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [popoverProps.onOpenChange, popoverProps.open]);

    const onSubmit = (e,key) => {
        if (isComposingInput)
            return;
        // if (e?.shiftKey)
        //     return;
        setKey(key)
        setInputEvent(e)
    };

    useEffect(()=>{
        if (Object.keys(inputEvent)?.length > 0) {
            handleSubmit(inputEvent);
        }
    },[inputEvent])

    const onSelectMenu = useCallback(key => {
        if (key === ChatMenuKey.InsertToContent) {
            popoverProps.onOpenChange?.(false);
            insertMessages(pm, messages, selection);
        }
    }, [pm, messages]);

    const inputEl = (_jsx(Input, { style: { boxShadow: 'none' },
            bordered: false,
            value: input,
            disabled: isLoading,
            ref: inputRef,
            prefix: _jsx(SparklesIcon, { onClick: () => setChatMenuOpen(!chatMenuOpen), style: {
                cursor: 'pointer',
                marginRight: token.marginXS,
                color: token.purple
            } }),
            //  suffix: (
            //     // Added a Fragment to contain both buttons
            //     _jsxs(_Fragment, {
            //         children: [
            //             // First Button (SparklesIcon)
            //             _jsx(Button, {
            //                 children: "OpenAI",
            //                 id: APICALL_KEY_OPENAI,
            //                 loading: isLoading,
            //                 style: {
            //                     display: 'flex',
            //                     alignItems: 'center',
            //                     justifyContent: 'center',
            //                     marginRight: '8px' // Adjust margin as needed
            //                 },
            //                 icon: _jsx(SparklesIcon, {
            //                     width: 16,
            //                     height: 16
            //                 }),
            //                 onClick: (e)=> {
            //                     buttonRef.current = APICALL_KEY_OPENAI
            //                     setIsOpenAiCall(APICALL_KEY_OPENAI);
            //                     onSubmit(e);
            //                 }
            //             }),
            //             // Second Button (SendHorizonalIcon)
            //             _jsx(Button, {
            //                 children: "File",
            //                 loading: isLoading,
            //                 id: APICALL_KEY_FILE,
            //                 style: {
            //                     display: 'flex',
            //                     alignItems: 'center',
            //                     justifyContent: 'center'
            //                 },
            //                 icon: _jsx(SendHorizonalIcon, {
            //                     width: 16,
            //                     height: 16
            //                 }),
            //                 onClick: (e)=> {
            //                     buttonRef.current = APICALL_KEY_FILE
            //                     setIsOpenAiCall(APICALL_KEY_FILE);
            //                     onSubmit(e);
            //                 }
            //             })
            //         ]
            //     })
            // ), 
            placeholder: "OpenAI GPT-3 Playground", 
            onChange: handleInputChange, 
            onKeyDown: (e)=>{
                if(e.metaKey && e.shiftKey && e.code == "Enter"){
                    onSubmit(e,LARGE_CONTEXT)
                }else if(e.metaKey && e.code == "Enter"){
                    onSubmit(e,SMALL_CONTEXT)
                }else if(e.code == "Enter") {
                    onSubmit(e,NO_CONTEXT)
                }
            }, 
            onCompositionStart: () => setIsComposingInput(true), 
            onCompositionEnd: () => setIsComposingInput(false) 
        }));

    const renderInputMode = () => {
        return _jsx("div", { style: { padding: token.paddingXS }, children: inputEl });
    };

    const renderChatMode = () => {
        return (_jsxs(_Fragment, { children: [_jsx("div", { style: { borderBottom: `1px solid ${token.colorBorderSecondary}` }, children: _jsx(ChatMessages, { messages: messages }) }), _jsx("div", { ref: chatMenuWrapperRef, style: { position: 'relative' }, children: _jsx(ChatMenu, { open: chatMenuOpen, onSelectMenu: onSelectMenu, getPopupContainer: () => chatMenuWrapperRef.current || document.body, children: _jsx("div", { style: { padding: token.paddingXS }, children: inputEl }) }) })] }));
    };

    const content = (_jsx("div", { style: {
            width: 600
        }, onWheel: e => {
            e.stopPropagation();
        }, children: messages.length > 0 ? renderChatMode() : renderInputMode() }));

    return (_jsx(Popover, { placement: "bottomLeft", trigger: "click", arrow: false, overlayInnerStyle: {
            padding: 0
        }, ...popoverProps, content: content, children: children }));
}

function messagesToMarkdown(messages) {
    return messages
        .map(message => {
        if (message.role === 'assistant') {
            return message.content;
        }
        return `**Q: ${message.content}**`;
    })
        .join('\n\n');
}
