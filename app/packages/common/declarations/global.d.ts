 export interface currentUser {
  __typename: string;
  _id: string;
  access: boolean;
  boards: any[];
  callChannels: string[];
  chatKeys: {
    publishKey: string;
    subscribeKey: string;
  };
  chatToken: string;
  chatUUID: string;
  email: string;
  emailNotification: boolean;
  fileImporter: {
    __typename: string;
    _id: string;
    importers: any[];
    licenseKey: string;
    user: {
      companyId: string;
      companyName: string;
      email: string;
      id: string;
      name: string;
    };
  };
  foldersAccessToken: string;
  info: string;
  intercomHash: string;
  isOem: boolean;
  name: string;
  notification: {
    __typename: string;
    email: {
      __typename: string;
      onAddedAsWorkOrderFollower: boolean;
      onAssignedTicketInternalNotePost: boolean;
      onAssignedWorkOrderUpdate: boolean;
      onMentionedInWorkOrderInternalNote: boolean;
      onMessageOnAssignedWorkOrder: boolean;
      onNewTicketAssigned: boolean;
    };
  };
  notificationChannel: string;
  notificationChannelGroupName: string;
  oem: {
    __typename: string;
    _id: string;
    admin: {
      __typename: string;
      _id: string;
    };
    allowFollowersMyWorkOrders: boolean;
    emailAccountLinked: boolean;
    emailAccountStatus: string | null;
    linkedEmailAddress: string | null;
    name: string;
    paidFeatures: string[];
    slug: string;
    statuses: any[][];
    urlOem: string;
  };
  role: string;
  teams: any[];
  userCredentialsSent: boolean;
}

export interface WorkOrderListTypeObject {
   __typename: string;
   _id: string;
   assignee: {
     __typename: string;
     _id: string;
     name: string;
   };
   createdAt: string;
   customFields: any[]; // You might want to specify the type for customFields
   facility: {
     __typename: string;
     _id: string;
     customFields: any[]; // You might want to specify the type for customFields
     name: string;
   };
   followers: any[]; // You might want to specify the type for followers
   hasOriginalEventBeenDeleted: null | boolean;
   machine: {
     __typename: string;
     _id: string;
     name: string;
     serialNumber: string;
   };
   maintenanceOn: string | null; // You might want to specify the type for maintenanceOn
   procedures: any[]; // You might want to specify the type for procedures
   schedule: string | null; // You might want to specify the type for schedule
   status: string;
   ticketChatChannels: string[]; // You might want to specify the type for ticketChatChannels
   ticketId: string;
   ticketInternalNotesChatChannels: string[]; // You might want to specify the type for ticketInternalNotesChatChannels
   ticketType:{
     _id: string
     name:string
     icon:string
     color:string
   };
   title: string;
   unread: boolean;
   updatedAt: string;
   user: any; // You might want to specify the type for user
 }
 
 type workOrderTicketObjectType = {
   __typename: string;
   _id: string;
   assignee: {
     __typename: string;
     _id: string;
     access: boolean;
     callChannels: string[];
     chatKeys: {
       publishKey: string;
       subscribeKey: string;
     };
     chatToken: string | null;
     chatUUID: string;
     department: string | null;
     email: string;
     emailNotification: boolean;
     firstName: string | null;
     function: string | null;
     info: string;
     isOem: boolean;
     lastName: string | null;
     mobile: string | null;
     name: string;
     notification: {
       __typename: string;
       email: any; // You need to define the structure for this
     };
     phone: string | null;
     role: string;
     teams: any[]; // You need to define the structure for this
     userCredentialsSent: boolean;
   };
   createdAt: string;
   customFields: any[]; // You need to define the structure for this
   description: string;
   facility: {
     __typename: string;
     _id: string;
     createdAt: string;
     customFields: any[][]; // You need to define the structure for this
     facilityId: string;
     isQRCodeEnabled: boolean;
     name: string;
     teams: any[]; // You need to define the structure for this
     updatedAt: string;
   };
   followers: any[]; // You need to define the structure for this
   hasOriginalEventBeenDeleted: any;
   inventoryParts: any[]; // You need to define the structure for this
   lastUpdatedAt: string;
   machine: {
     __typename: string;
     _id: string;
     createdAt: string;
     customFields: any[][]; // You need to define the structure for this
     customer: {
       __typename: string;
       _id: string;
       facilityId: string;
       name: string;
     };
     description: string;
     documentFolders: {
       __typename: string;
       externalId: string;
       internalId: string;
     };
     folderId: string | null;
     generalAccessUrl: string;
     image: string;
     inventoryParts: any[]; // You need to define the structure for this
     isBoxFoldersDisabled: boolean;
     isQRCodeEnabled: boolean;
     name: string;
     oem: {
       __typename: string;
       _id: string;
       logo: string;
       name: string;
       statuses: any[]; // You need to define the structure for this
       thumbnail: string;
     };
     productionLine: any; // You need to define the structure for this
     serialNumber: string;
     slug: string;
     teams: any[]; // You need to define the structure for this
     template: any; // You need to define the structure for this
     thumbnail: string;
   };
   maintenanceOn: any;
   notes: any;
   procedures: any[]; // You need to define the structure for this
   schedule: any;
   status: string;
   teams: any[]; // You need to define the structure for this
   ticketChatChannels: string[];
   ticketId: string;
   ticketInternalNotesChatChannels: string[];
   ticketType: {
     __typename: string;
     _id: string;
     color: string;
     icon: string;
     name: string;
   };
   timeTrackerLogs: {
     __typename: string;
     _id: string;
     createdBy: any; // You need to define the structure for this
     description: string;
     endDateTime: string;
     isBillable: boolean;
     startDateTime: string;
     ticketTag: any; // You need to define the structure for this
     timeElapsedInSeconds: number;
   }[];
   title: string;
   totalTimeLoggedInSeconds: number;
   unread: boolean;
   updatedAt: string;
   url: string | null;
   user: {
     __typename: string;
     _id: string;
     access: boolean;
     callChannels: string[];
     chatKeys: {
       publishKey: string;
       subscribeKey: string;
     };
     chatToken: string | null;
     chatUUID: string;
     department: string | null;
     email: string;
     emailNotification: boolean;
     firstName: string | null;
     function: string | null;
     info: string;
     isOem: boolean;
     lastName: string | null;
     mobile: string | null;
     name: string;
     notification: {
       __typename: string;
       email: any; // You need to define the structure for this
     };
     phone: string | null;
     role: string;
     teams: any[]; // You need to define the structure for this
     userCredentialsSent: boolean;
   };
 };
