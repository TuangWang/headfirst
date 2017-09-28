/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-27T18:02:54+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: tileData.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-28T17:23:44+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


 // @flow
 // This file is shared across the demos.

 import React from 'react';
 import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
 import InboxIcon from 'material-ui-icons/MoveToInbox';
 import DraftsIcon from 'material-ui-icons/Drafts';
 import StarIcon from 'material-ui-icons/Star';
 import SendIcon from 'material-ui-icons/Send';
 import MailIcon from 'material-ui-icons/Mail';
 import DeleteIcon from 'material-ui-icons/Delete';
 import ReportIcon from 'material-ui-icons/Report';
 import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom'

 export const mailFolderListItems = (
   <div>
     <Link to="/home">Home</Link>
     <Link to="/config">Config</Link>
     <ListItem button>
       <ListItemIcon>
         <InboxIcon />
       </ListItemIcon>
       <ListItemText primary="Inbox" />
     </ListItem>
     <ListItem button>
       <ListItemIcon>
         <StarIcon />
       </ListItemIcon>
       <ListItemText primary="Starred" />
     </ListItem>
     <ListItem button>
       <ListItemIcon>
         <SendIcon />
       </ListItemIcon>
       <ListItemText primary="Send mail" />
     </ListItem>
     <ListItem button>
       <ListItemIcon>
         <DraftsIcon />
       </ListItemIcon>
       <ListItemText primary="Drafts" />
     </ListItem>
   </div>
 );

 export const otherMailFolderListItems = (
   <div>
     <ListItem button>
       <ListItemIcon>
         <MailIcon />
       </ListItemIcon>
       <ListItemText primary="All mail" />
     </ListItem>
     <ListItem button>
       <ListItemIcon>
         <DeleteIcon />
       </ListItemIcon>
       <ListItemText primary="Trash" />
     </ListItem>
     <ListItem button>
       <ListItemIcon>
         <ReportIcon />
       </ListItemIcon>
       <ListItemText primary="Spam" />
     </ListItem>
   </div>
 );
