import Connector from "../signalr-connection.js";
import {useEffect, useRef, useState} from "react";
import {Message} from "./Message.jsx";
import {Flex} from "antd";
import {grey} from "@ant-design/colors";


export const ChatMessages = ({myUserName}) => {
    const {events} = Connector();

    const [messages, setMessages] = useState([]);
    const ref = useRef();

    useEffect(() => {
        events((message, user) => {
            setMessages(prev => [...prev, {message, user}]);
            setTimeout(() => {
                ref.current.scrollTo(0, ref.current.scrollHeight);
            })
        });
    }, []);

    return (
        <Flex
            ref={ref}
            style={{
                display: "flex",
                flexDirection: 'column',
                border: `1px solid ${grey[1]}`,
                borderRadius: 10,
                padding: 10,
                height: 400,
                overflowY: 'auto',
            }}
            gap={10}
        >
            {messages.map(({message, user}, index) => (
                <Message
                    user={user}
                    belongsMe={user === myUserName}
                    message={message}
                />
            ))}
        </Flex>
    );
};
