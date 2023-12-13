import * as signalR from "@microsoft/signalr";

const URL = "https://localhost:7001/chat";

class Connector {
    static instance;

    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();

        this.connection.start().catch(err => document.write(err));

        this.events = (onMessageReceived) => {
            this.connection.on("ReceiveMessage", (username, message) => {
                onMessageReceived(username, message);
            });
        };
    }

    newMessage = async (message, user) => {
        try {
            await this.connection.send("SendMessage", message, user)
        } catch (err) {
            return console.error(err.toString());
        }
    }

    static getInstance() {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }
}

export default Connector.getInstance;
