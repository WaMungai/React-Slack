import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import AddIcon from "@material-ui/icons/Add";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { db } from "../../firebase";

import { SideBarOption } from "..";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

function SideBar() {
  const [channels, loading, error] = useCollection(collection(db, "rooms"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return (
    <>
      <SideBarContainer>
        <SideBarHeader>
          <SideBarInfo>
            <h2> ELLAVILE HQ</h2>
            <h3>
              <FiberManualRecordIcon />
              Adams Okode
            </h3>
          </SideBarInfo>
          <CreateIcon />
        </SideBarHeader>

        <SideBarOption Icon={InsertCommentIcon} title="Threads"></SideBarOption>
        <SideBarOption
          Icon={InboxIcon}
          title="Mentions & Reactions"
        ></SideBarOption>
        <SideBarOption Icon={DraftsIcon} title="Saved Items"></SideBarOption>
        <SideBarOption
          Icon={BookmarkBorderIcon}
          title="Channel browser"
        ></SideBarOption>
        <SideBarOption
          Icon={PeopleAltIcon}
          title="People & user groups"
        ></SideBarOption>
        <SideBarOption Icon={AppsIcon} title="Apps"></SideBarOption>
        <SideBarOption Icon={FileCopyIcon} title="File Browser"></SideBarOption>
        <SideBarOption Icon={ExpandLessIcon} title="Show less"></SideBarOption>
        <hr />
        <SideBarOption Icon={ExpandMoreIcon} title="Show More"></SideBarOption>
        <hr />
        <SideBarOption
          Icon={AddIcon}
          title="Add Channel"
          addChannelOption
        ></SideBarOption>

        {channels?.docs.map((channel) => (
          <SideBarOption
            key={channel.id}
            id={channel.id}
            title={channel.data().name}
            addChannelOption
          ></SideBarOption>
        ))}
      </SideBarContainer>
    </>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  max-width: 236px;
  margin-top: 60px;

  > hr {
    border: solid 1px #49274b;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: solid 1px #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    color: #49274b;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 500;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
