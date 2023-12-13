import {UserOutlined} from '@ant-design/icons';
import {Form, Input} from 'antd';

export const UserNameInput = ({value, onChange}) => {
    const fields = [{
        name: ['userName'],
        value,
    }]

    const handleChange = (fields) => {
        onChange(fields[0].value)
    }

    return (
        <Form
            fields={fields}
            onFieldsChange={(_, allFields) => handleChange(allFields)}

        >
            <Form.Item
                name={'userName'}
                label={'Ваш ник:'}
            >
                <Input
                    size="large"
                    prefix={<UserOutlined/>}
                />
            </Form.Item>
        </Form>
    )
}
