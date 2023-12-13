using Microsoft.AspNetCore.SignalR;
 
namespace SignalR_server
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message, string user)
        {
            await this.Clients.All.SendAsync("ReceiveMessage", message, user);
        }
    }
}