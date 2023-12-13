import {SendOutlined} from "@ant-design/icons";
import {Button, Form, Input} from "antd";

import Connector from "../signalr-connection.js";

export const SendMessage = ({userName}) => {
    const {newMessage} = Connector();

    const onFinish = (values) => {
        console.log(values.messageContent, ' ', userName);
        newMessage(values.messageContent, userName);
    };

    return (
        <Form
            align={'end'}
            onFinish={onFinish}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 20,
            }}
        >
            <Form.Item
                name={'messageContent'}
                style={{
                    flex: '1 0 auto',
                    margin: 0,
                }}
                rules={[{
                    required: true,
                    message: 'Напишите сообщение перед его отправкой!',
                }]}
            >
                <Input.TextArea
                    autoSize={{minRows: 1, maxRows: 6}}
                />
            </Form.Item>
            <Button
                type="primary"
                htmlType={'submit'}
                shape="circle"
                icon={<SendOutlined/>}
            />
        </Form>
    )
}
