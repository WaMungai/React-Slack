import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../../services/reducers/appSlice";
import { ChatInput, ChatMessage } from "../../components";
import { doc, collection, query, orderBy } from "firebase/firestore";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails, loading] = useDocument(
    roomId && doc(db, "rooms", roomId)
  );
  const [roomMessages] = useCollection(
    roomId &&
      query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      )
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <strong>#{roomId && roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined></StarBorderOutlined>
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <p>
                <InfoOutlined></InfoOutlined> Details
              </p>
            </ChatHeaderRight>
          </ChatHeader>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              // console.log(timestamp?.toDate())
              return (
                <ChatMessage
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatMessages = styled.div``;

// const ChatInput = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const ChatContainer = styled.div`
  float: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: solid 1px gray;
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 16px;
  }
`;
