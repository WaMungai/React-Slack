import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../../firebase";
import { doc, collection, addDoc, serverTimestamp } from "firebase/firestore";

function ChatInput({ chatRef, channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    const message = input;

    setInput("");
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    const docRef = doc(db, "rooms", channelId);
    
    addDoc(collection(docRef, "messages"), {
      message,
      timestamp: serverTimestamp(),
      user: "Adams Okode",
      userImage:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHekuP5YZCMCA/profile-displayphoto-shrink_100_100/0/1550932957201?e=1646265600&v=beta&t=oq0Du0BzZn9L5c3m1jmPAlyn0otj-SGKSKtzcifveZc",
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <>
      <ChatInputContainer>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <Button hidden type="submit" onClick={sendMessage}>
            SEND
          </Button>
        </form>
      </ChatInputContainer>
    </>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
