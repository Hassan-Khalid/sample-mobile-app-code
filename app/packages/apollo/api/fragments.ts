import { gql } from "@apollo/client";

export const User = {
  fragments: {
    UserBasicData: gql`
      fragment UserBasicData on User {
        _id
        name
        email
        info
        access
        userCredentialsSent
        isOem
        emailNotification
        chatToken
        chatKeys
        chatUUID
        callChannels
        role
        notification {
          email {
            onNewTicketAssigned
            onAssignedTicketInternalNotePost
            onAssignedWorkOrderUpdate
            onAddedAsWorkOrderFollower
            onMentionedInWorkOrderInternalNote
            onMessageOnAssignedWorkOrder
          }
        }
        firstName
        lastName
        department
        function
        phone
        mobile
        teams {
          _id
          name
          teamColor
        }
      }
    `,
    UserAuthData: gql`
      fragment UserAuthData on User {
        _id
        foldersAccessToken
        fileImporter {
          _id
          licenseKey
          user
          importers {
            fields
            settings
            meta {
              templateId
              templateSection
            }
          }
        }
        name
        email
        intercomHash
        info
        access
        userCredentialsSent
        isOem
        emailNotification
        chatToken
        chatKeys
        chatUUID
        callChannels
        role
        notification {
          email {
            onNewTicketAssigned
            onAssignedTicketInternalNotePost
            onAssignedWorkOrderUpdate
            onAddedAsWorkOrderFollower
            onMentionedInWorkOrderInternalNote
            onMessageOnAssignedWorkOrder
          }
        }
        notificationChannelGroupName
        notificationChannel
        boards {
          boardFor
          customFields {
            _id
            label
            options {
              value
              color
              _id
            }
          }
        }
      }
    `,
  },
};

export const Oem = {
  fragments: {
    OemBasicData: gql`
      fragment OemBasicData on Oem {
        _id
        logo
        thumbnail
        backgroundColor
        brandLogo
        heading
        subHeading
        paragraph
        textColor
        name
        urlOemFacility
        slug
        allowFollowersMyWorkOrders
        statuses {
          _id
          label
          color
        }
        notification {
          email {
            internal
            internalUsers {
              _id
              name
            }
            notifyOnMaintenanceWorkOrderCreation
            maintenanceWorkOrderCreationNotifyTo {
              _id
              name
            }
            notifyOnMessageOnUnassignedWorkOrder
            messageOnUnassignedWorkOrderNotifyTo {
              _id
              name
            }
          }
        }
      }
    `,
  },
};

export const CustomizeField = {
  fragments: {
    AdditionFieldData: gql`
      fragment AdditionFieldData on AdditionalField {
        _id
        type
        slug
        label
        fieldType
        isAdditionalField
        enabled
      }
    `,

    CustomAdditionFieldData: gql`
      fragment CustomAdditionFieldData on CustomAdditionalField {
        _id
        type
        slug
        label
        fieldType
        isAdditionalField
        enabled
        created_at
        order
        oem {
          _id
          name
        }
        options {
          _id
          value
          color
        }
      }
    `,
  },
};

export const MachineBasicData = gql`
  fragment MachineBasicData on Machine {
    _id
    name
    serialNumber
    image
    thumbnail
    description
    slug
    oem {
      logo
      thumbnail
    }
    teams {
      _id
      name
    }
  }
`;

export const Customer = {
  fragments: {
    CustomerBasicData: gql`
      fragment CustomerBasicData on Customer {
        _id
        name
        isQRCodeEnabled
        facilityId
        createdAt
        updatedAt
        customFields {
          _id
          fieldId {
            ...CustomAdditionFieldData
          }
          value
        }
        teams {
          _id
          name
          teamColor
        }
      }
      ${CustomizeField.fragments.CustomAdditionFieldData}
    `,
    CustomerFullData: gql`
      fragment CustomerFullData on Customer {
        _id
        facilityId
        name
        isQRCodeEnabled
        generalAccessUrl
        description
        customFields {
          _id
          fieldId {
            ...CustomAdditionFieldData
          }
          value
        }
        teams {
          _id
          name
          teamColor
        }
      }
      ${CustomizeField.fragments.CustomAdditionFieldData}
    `,
  },
};

export const Machine = {
  fragments: {
    MachineData: gql`
      fragment MachineData on Machine {
        _id
        customer {
          _id
          name
          facilityId
        }
        slug
        name
        serialNumber
        image
        thumbnail
        description
        oem {
          _id
          name
          slug
        }
        template {
          _id
          title
          type
          image
          thumbnail
        }
      }
    `,
    MachineFullData: gql`
      fragment MachineFullData on Machine {
        _id
        slug
        oem {
          _id
          name
          statuses {
            _id
            label
            color
          }
          logo
          thumbnail
        }
        customer {
          _id
          name
          facilityId
        }
        productionLine {
          _id
          name
          customer {
            _id
            name
          }
        }
        name
        folderId
        serialNumber
        isBoxFoldersDisabled
        isQRCodeEnabled
        generalAccessUrl
        customFields {
          _id
          fieldId {
            _id
            type
            label
            fieldType
            isAdditionalField
            enabled
            created_at
            order
            options {
              _id
              value
              color
            }
          }
          value
        }
        image
        thumbnail
        description
        template {
          _id
          title
          type
          image
          thumbnail
          description
          documentFolders {
            internalId
            externalId
          }
        }
        inventoryParts {
          part {
            _id
            name
            articleNumber
            description
            image
            thumbnail
            oem {
              _id
              name
            }
            customFields {
              _id
              fieldId {
                _id
                type
                label
                fieldType
                isAdditionalField
                enabled
                created_at
                order
                options {
                  _id
                  value
                  color
                }
              }
              value
            }
          }
        }
        createdAt
        documentFolders {
          internalId
          externalId
        }
        teams {
          _id
          name
          teamColor
        }
      }
    `,
    MachineListData: gql`
      fragment MachineListData on Machine {
        _id
        name
        serialNumber
        image
        createdAt
        updatedAt
        thumbnail
        teams {
          _id
          name
          teamColor
        }
        productionLine {
          _id
          name
          lineId
          customer {
            _id
            name
          }
        }
        customer {
          _id
          name
        }
        customFields {
          _id
          fieldId {
            _id
            type
            label
            fieldType
            isAdditionalField
            enabled
            created_at
            order
            options {
              _id
              value
              color
            }
          }
          value
        }
        template {
          _id
          title
          type
          image
          thumbnail
        }
        oem {
          _id
          logo
          thumbnail
        }
      }
    `,
  },
};

export const ProductionLine = {
  fragments: {
    ProductionLineData: gql`
      fragment ProductionLineData on ProductionLine {
        _id
        oem {
          _id
          logo
          thumbnail
          name
        }
        customer {
          _id
          name
          isQRCodeEnabled
          facilityId
        }
        customFields {
          _id
          fieldId {
            ...CustomAdditionFieldData
          }
          value
        }
        name
        lineId
        description
        createdAt
        teams {
          _id
          name
          teamColor
        }
      }
      ${CustomizeField.fragments.CustomAdditionFieldData}
    `,

    ProductionLineListData: gql`
      fragment ProductionLineListData on ProductionLine {
        _id
        customer {
          _id
          name
        }
        numberOfMachines
        name
        lineId
        description
        createdAt
        customFields {
          _id
          fieldId {
            ...CustomAdditionFieldData
          }
          value
        }
        teams {
          _id
          name
          teamColor
        }
      }
      ${CustomizeField.fragments.CustomAdditionFieldData}
    `,
  },
};

export const Component = {
  fragments: {
    ComponentData: gql`
      fragment ComponentData on Component {
        _id
        oem {
          _id
          logo
          thumbnail
          name
        }
        machine {
          ...MachineBasicData
        }
        name
        componentId
        description
        createdAt
        image
        thumbnail
      }
      ${MachineBasicData}
    `,
    ComponentDetailData: gql`
      fragment ComponentDetailData on Component {
        _id
        oem {
          _id
          logo
          thumbnail
          name
        }
        machine {
          ...MachineBasicData
        }
        inventoryParts {
          part {
            _id
            name
            articleNumber
            description
            image
            thumbnail
          }
        }
        name
        componentId
        description
        createdAt
        image
        thumbnail
      }
      ${MachineBasicData}
    `,
  },
};

const Schedule = {
  fragments: {
    TicketScheduleData: gql`
      fragment TicketScheduleData on Ticket {
        schedule {
          startTime
          endTime
          startTimezone
          endTimezone
          isAllDay
          isTimezoneEnabled
        }
      }
    `,
  },
};

export const Ticket = {
  fragments: {
    TicketData: gql`
      fragment TicketData on Ticket {
        _id
        ticketId
        title
        description
        status
        url
      }
    `,
    TicketListData: gql`
      fragment TicketListData on Ticket {
        _id
        ticketId
        title
        status
        ticketType {
          _id
          name
          color
          icon        
        }
        createdAt
        updatedAt
        maintenanceOn
        hasOriginalEventBeenDeleted
        unread
        assignee {
          _id
          name
        }
        followers {
          _id
        }
        machine {
          _id
          name
          serialNumber
        }
        facility {
          _id
          name
          customFields {
            _id
            fieldId {
              _id
              slug
            }
            value
          }
        }
        ticketChatChannels
        ticketInternalNotesChatChannels
        customFields {
          _id
          fieldId {
            _id
          }
          value
        }
        procedures {
          procedure {
            _id
          }
        }
        user {
          _id
          name
        }
        ...TicketScheduleData
      }
      ${Schedule.fragments.TicketScheduleData}
    `,

    TicketSingleData: gql`
      fragment TicketSingleData on Ticket {
        _id
        ticketId
        ticketType {
          _id
          name
          color
          icon
        }
        title
        description
        status
        unread
        notes
        url
        createdAt
        updatedAt
        lastUpdatedAt
        maintenanceOn
        hasOriginalEventBeenDeleted
        teams {
          _id
          name
          teamColor
          members {
            _id
            name
          }
        }
        assignee {
          ...UserBasicData
        }
        followers {
          ...UserBasicData
        }
        user {
          ...UserBasicData
        }
        machine {
          ...MachineFullData
        }
        facility {
          ...CustomerBasicData
        }
        customFields {
          _id
          fieldId {
            ...CustomAdditionFieldData
          }
          value
        }
        ticketChatChannels
        ticketInternalNotesChatChannels
        inventoryParts {
          quantity
          addedBy {
            _id
            role
          }
          part {
            _id
            name
            articleNumber
            description
            image
            thumbnail
            oem {
              _id
              thumbnail
            }
          }
        }
        timeTrackerLogs {
          _id
          description
          startDateTime
          endDateTime
          isBillable
          timeElapsedInSeconds
          ticketTag {
            _id
            label
            color
          }
          createdBy {
            _id
            name
          }
        }
        totalTimeLoggedInSeconds
        procedures {
          procedure {
            _id
            name
            createdAt
            state
          }
          addedBy {
            name
            _id
          }
        }
        ...TicketScheduleData
      }
      ${User.fragments.UserBasicData}
      ${Machine.fragments.MachineFullData}
      ${Customer.fragments.CustomerBasicData}
      ${CustomizeField.fragments.CustomAdditionFieldData}
      ${Schedule.fragments.TicketScheduleData}
    `,
  },
};

export const CallInfo = {
  fragments: {
    CallInfoData: gql`
      fragment CallInfoData on CallInfo {
        _id
        uid
        token
        channel
        caller
        receiver
      }
    `,
  },
};

export const PreventiveMaintenance = {
  fragments: {
    PreventiveEventData: gql`
      fragment PreventiveEventData on PreventiveMaintenance {
        _id
        title
        startDate
        eventDate
        frequency
        repeatInNumber
        repeatIn
        ticketCreationNumber
        ticketCreationIn
        description
        nextCreationDate
        oem {
          _id
        }
        machine {
          _id
        }
      }
    `,
  },
};

export const MachineTemplate = {
  fragments: {
    MachineTemplateData: gql`
      fragment MachineTemplateData on MachineTemplate {
        _id
        title
        type
        description
        image
        thumbnail
        oem {
          ...OemBasicData
        }
        machines {
          _id
        }
      }
      ${Oem.fragments.OemBasicData}
    `,
    MachineTemplateFullData: gql`
      fragment MachineTemplateFullData on MachineTemplate {
        _id
        title
        type
        description
        image
        thumbnail
        oem {
          ...OemBasicData
        }
        documentFolders {
          internalId
          externalId
        }
      }
      ${Oem.fragments.OemBasicData}
    `,
  },
};

export const InventoryPart = {
  fragments: {
    InventoryPartBasicData: gql`
      fragment InventoryPartBasicData on InventoryPart {
        _id
        name
        articleNumber
        description
        image
        thumbnail
        oem {
          ...OemBasicData
        }
        customFields {
          _id
          fieldId {
            ...CustomAdditionFieldData
          }
          value
        }
      }
      ${Oem.fragments.OemBasicData}
      ${CustomizeField.fragments.CustomAdditionFieldData}
    `,
  },
};

export const TimeTracker = {
  fragments: {
    TimeTrackerBasicData: gql`
      fragment TimeTrackerBasicData on TimeTracker {
        _id
        type
        slug
        label
        fieldType
        color
      }
    `,
  },
};

const ProcedureTemplateChildrenNode = {
  fragments: {
    ProcedureTemplateChildren: gql`
      fragment ProcedureTemplateChildren on ProcedureTemplateNode {
        _id
        name
        type
        description
        isRequired
        attachments {
          _id
          name
          type
          url
          size
        }
        options {
          _id
          name
        }
        tableOption {
          _id
          columns {
            _id
            heading
            width
          }
          rowCount
        }
      }
    `,
  },
};
const ProcedureInstanceChildrenNode = {
  fragments: {
    ProcedureInstanceChildren: gql`
      fragment ProcedureInstanceChildren on ProcedureNode {
        _id
        name
        type
        description
        isRequired
        value
        attachments {
          _id
          name
          type
          url
          size
        }
        options {
          _id
          name
        }
        tableOption {
          _id
          columns {
            _id
            heading
            width
          }
          rowCount
        }
      }
    `,
  },
};
export const ProcedureTemplate = {
  fragments: {
    ProcedureTemplateFullData: gql`
      fragment ProcedureTemplateFullData on ProcedureTemplate {
        _id
        name
        description
        createdAt
        updatedAt
        pageHeader {
          name
          size
          type
          url
        }
        createdBy {
          _id
          name
        }
        signatures {
          _id
          signatoryTitle
        }
        children {
          ...ProcedureTemplateChildren
          children {
            ...ProcedureTemplateChildren
          }
        }
      }
      ${ProcedureTemplateChildrenNode.fragments.ProcedureTemplateChildren}
    `,
  },
};
export const ProcedureInstance = {
  fragments: {
    ProcedureInstanceFullData: gql`
      fragment ProcedureInstanceFullData on Procedure {
        _id
        name
        state
        description
        createdAt
        updatedAt
        pdfUrl
        signatures {
          _id
          signatoryTitle
          name
          date
          signatureUrl
        }
        submittedBy {
          _id
          name
        }
        children {
          ...ProcedureInstanceChildren
          children {
            ...ProcedureInstanceChildren
          }
        }
      }
      ${ProcedureInstanceChildrenNode.fragments.ProcedureInstanceChildren}
    `,
  },
};

export const Team = {
  fragments: {
    TeamData: gql`
      fragment TeamData on Team {
        _id
        oem {
          _id
          name
        }
        name
        description
        teamColor
      }
    `,
  },
};
