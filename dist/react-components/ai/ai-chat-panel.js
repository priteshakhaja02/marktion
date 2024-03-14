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
    const [key, setKey] = useState(NO_CONTEXT);a
    const chatMenuWrapperRef = useRef(null);
    const { token } = theme.useToken();
    const pm = usePMRenderer();
    useEffect(() => {
        const selection = window.getSelection();
        function handleMouseUp() {
            const selectedText = selection.toString().trim();
            if (selectedText && !popoverProps.open) {
              setSelectedText(selectedText);
            }
        }
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("keyup", handleMouseUp);
        return () => {
          window.removeEventListener("mouseup", handleMouseUp);
          window.removeEventListener("keyup", handleMouseUp);
        };
        
      }, [popoverProps.open]);
    const { messages, input, isLoading, handleInputChange, handleSubmit, setMessages, stop } = useChat({
        api: gptConfig.baseUrl + 'chat/editor-chat?initiative_id='+ gptConfig.initid + '&type='+ key,
        initialMessages: defaultInitialMessages,
        headers: {
            Authorization: `Bearer ${gptConfig?.token || ''}`
        },
        ...gptConfig
    });
    const [selectedText, setSelectedText] = useState("");
    
    const [isComposingInput, setIsComposingInput] = useState(false);
    useEffect(() => {
        if (!popoverProps.open) {
            setMessages(defaultInitialMessages);
            setSelectedText("")
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
            setSelectedText("");
            return;
        }
        if (messages.length >= 2) {
            setChatMenuOpen(true);
        }
    }, [messages.length >= 2, popoverProps.open, isLoading]);
    useEffect(() => {
        if (!isLoading) {
            inputRef.current?.focus();
              popoverProps.onOpenChange?.(false);
            // insertMessages(pm, messages, selection);
        }
    }, [isLoading]);
    useEffect(() => {
        if (!popoverProps.open) {
            return;
        }
        const onKeydown = (e) => {
            if (e.key === 'Escape') {
                popoverProps.onOpenChange?.(false);
                setSelectedText("");
                pm.focus();
            }
        };
        window.addEventListener('keydown', onKeydown);
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [popoverProps.onOpenChange, popoverProps.open , selectedText]);
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
    const inputEl = (_jsx(Input, { style: { boxShadow: '0px' },
            bordered: false,
            value: isLoading ? "Generating..." :selectedText,
            disabled: isLoading,
            ref: inputRef,
            prefix: isLoading ? "" : _jsx(SparklesIcon, { onClick: () => setChatMenuOpen(!chatMenuOpen), style: {
                cursor: 'pointer',
                color:"#FBBF24",
                marginRight: token.marginXS,
                color: token.purple
            } }),
            suffix: (
                // Added a Fragment to contain both buttons
                _jsxs(_Fragment, {
                    children: [
                        // Loader Button
                        _jsx(Button, {
                            loading: isLoading,
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border : '0px solid transparent',
                                boxShadow: '0px' // Adding shadow none
                            },
                        })
                    ]
                })
            ), 
            placeholder:isLoading ? "Generate...." : "Ask AI to write anything", 
            disabled : isLoading,
            onChange:(e) => {handleInputChange(e);setSelectedText(e.target.value)}, 
            onKeyDown: (e)=>{
                const isCmdKey =  e.ctrlKey || (e?.metaKey && navigator?.platform?.toUpperCase()?.indexOf("MAC") >= 0);
                if(isCmdKey && e.shiftKey && e.code == "Enter"){
                    onSubmit(e,LARGE_CONTEXT)
                }else if(isCmdKey && e.code == "Enter"){
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
        return (_jsxs(_Fragment, { children: [_jsx("div", { style: { borderBottom: `0px solid ${token.colorBorderSecondary}` } }), _jsx("div", { ref: chatMenuWrapperRef, style: { position: 'relative' }, children: _jsx(ChatMenu, {children: _jsx("div", { children: inputEl }) }) })] }));
    };
    const content = (_jsx("div", { style: {
            width: isLoading ? 187 : 600
        }, onWheel: e => {
            e.stopPropagation();
        }, children: messages.length > 0 ? renderChatMode() : renderInputMode() }));
    return (_jsx(Popover, { placement: "bottomLeft", trigger:isLoading ? "" :"click", arrow: false, overlayInnerStyle: {
            padding: 0,
 boxShadow : isLoading ? "none" :""
        }, ...popoverProps, content: content, children: children }));
}
