import {ChatMessages} from "./ChatMessages.jsx";
import {UserNameInput} from "./UserNameInput.jsx";
import {useState} from "react";
import {Flex} from "antd";
import {SendMessage} from "./SendMessage.jsx";

export const App = () => {
    const [userName, setUserName] = useState('Unknown user');

    return (
        <Flex
            style={{height: '100vh'}}
            justify={'center'}
            align={'center'}
        >
            <Flex
                style={{
                    width: 400,
                    border: '1px dashed black',
                    borderRadius: 10,
                    padding: 10,
                    gap: 10
                }}
                vertical
            >
                <UserNameInput value={userName} onChange={setUserName}/>
                <ChatMessages myUserName={userName}/>
                <SendMessage userName={userName}/>
            </Flex>
        </Flex>
    );
};
