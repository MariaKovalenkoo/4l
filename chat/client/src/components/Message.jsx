import {Flex, Typography} from "antd";
import {blue, green} from "@ant-design/colors";

const DefaultBorderRadius = 10;

export const Message = ({user, message, belongsMe}) => {
    return (
        <Flex
            vertical
            style={{
                maxWidth: 320,
                alignSelf: belongsMe ? 'end' : 'start',
                background: green["1"],
                borderRadius: DefaultBorderRadius,
                borderBottomLeftRadius: !belongsMe ? 0 : DefaultBorderRadius,
                borderBottomRightRadius: belongsMe ? 0 : DefaultBorderRadius,
                padding: 7,
            }}
        >
            {!belongsMe &&
                <Typography.Title
                    level={5}
                    style={{
                        color: blue["9"],
                        margin: 0
                    }}
                >
                    {user}
                </Typography.Title>
            }
            <Typography>
                {message}
            </Typography>
        </Flex>
    )
}
