import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
// Just Hard Code Conversation ID for Testing
const conversationID = 'temp1';

const Chat = (props) => {
    // Auth0
    const { user } = useAuth0();

    // Socket.io
    const socket = io("http://localhost:8080", {
      auth: {
        token: `Bearer ${props.accessToken}`
      }
    });

    const [isConnected, setIsConnected] = useState(socket.connected);

    // Message State
    const[message, setMessage] = useState('')
    const[messages, setMessages] = useState([])
  
    useEffect(() => {
        // Get Initial Messages
        const fetchMessages = async () => {
            let localMessages = []
            let res = await axios({
                method: 'get',
                url: 'http://localhost:8080/api/getMessages',
                headers: {
                  Authorization: `Bearer ${props.accessToken}`,
                },
                params: {
                    conversationID: conversationID
                }
              })
              .then(async function (response) {
                localMessages = response.data
                localMessages.sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp));

                await setMessages(localMessages)
                console.log("Loaded Messages")
            });

            // Handle Socket.IO
            socket.on('connect', () => {
                setIsConnected(true);
                console.log("Connected")
                socket.emit("joinConvo", conversationID)
            });
  
          
            socket.on('newMessage', (data) => {
                console.log("New Message!")
                localMessages = localMessages.concat(data)

                localMessages.sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp));

                setMessages(localMessages)
            })
  
            socket.on('pong', () => {
                console.log("PONG")
            });
          
          return () => {
            socket.off('connect');
            socket.off('newMessage');
          };
        }

        fetchMessages().catch(console.error);
    }, []);
        
    function sendMessage(e) {
        e.preventDefault();
        console.log(messages)

        let messageData = {
            conversationID: conversationID,
            content: message
        }
        
        socket.emit("sendMessage", messageData);
    }

    return (
        <div>
            <p>Connected to Server: { '' + isConnected }</p>
            {isConnected &&
            <div>
                <h3>Send Message</h3>
                <form onSubmit={sendMessage}>
                    <input type="text" onChange={e => {setMessage(e.target.value)}}/>
                    <button>Send</button>
                </form>

                <hr />
                <h3>Messages</h3>
                <ul>
                {messages.map((message) =>
                    <li key={message._id.toString()}>{message.senderID}: {message.content}</li>
                )}
                </ul>
            </div>
            }
        </div>
    );
};

export default Chat;