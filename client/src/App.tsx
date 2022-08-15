import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer} from './components';
const apiKey = '';

const client = StreamChat.getInstance(apiKey);
function App() {
  return (
    <div className="App">
     <Chat client={client} theme="team light">
       <ChannelListContainer/>

       <ChannelContainer/>
     </Chat>
    </div>
  );
}

export default App;
