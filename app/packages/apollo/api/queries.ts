import { gql } from "@apollo/client";
import {
  Customer,
  CustomizeField,
  InventoryPart,
  Machine,
  MachineTemplate,
  Oem,
  PreventiveMaintenance,
  Ticket,
  TimeTracker,
  ProcedureTemplate,
  ProcedureInstance,
  User,
  ProductionLine,
  Component,
  Team,
} from "./fragments";

// REMOTE
export const CONENCTION_QUERY = gql`
  query connection {
    connection
  }
`;

export const AUTH_QUERY = gql`
  query authenticate {
    _checkAuth
  }
`;

export const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      oem {
        _id
        urlOem
        name
        slug
        paidFeatures
        allowFollowersMyWorkOrders
        emailAccountLinked
        emailAccountStatus
        linkedEmailAddress
        statuses {
          _id
          label
          color
        }
        admin {
          _id
        }
      }
      teams {
        _id
        name
        teamColor
      }
      ...UserAuthData
    }
  }
  ${User.fragments.UserAuthData}
`;
export const GET_CURRENT_USER_BOX_ACCESS_TOKEN_QUERY = gql`
  query currentUser {
    currentUser {
      _id
      foldersAccessToken
    }
  }
`;

export const GET_CURRENT_USER_CHAT_ACCESS_TOKEN_QUERY = gql`
  query currentUser {
    currentUser {
      _id
      chatToken
      chatKeys
      chatUUID
      callChannels
    }
  }
`;

export const GET_OEM_BY_QUERY = gql`
  query getOemBySlug($slug: String!) {
    getOemBySlug(slug: $slug) {
      ...OemBasicData
    }
  }
  ${Oem.fragments.OemBasicData}
`;

export const GET_OWN_OEM_QUERY = gql`
  query getOwnOem {
    getOwnOem {
      ...OemBasicData
    }
  }
  ${Oem.fragments.OemBasicData}
`;

export const LIST_OWN_OEM_SUPPORT_ACCOUNTS_QUERY = gql`
  query listOwnOemSupportAccounts(
    $team: String
    $excludeTeam: String
    $withoutTeam: Boolean
  ) {
    listOwnOemSupportAccounts(
      team: $team
      excludeTeam: $excludeTeam
      withoutTeam: $withoutTeam
    ) {
      ...UserBasicData
    }
  }
  ${User.fragments.UserBasicData}
`;

export const GET_OWN_OEM_CUSTOMER_BY_ID_QUERY = gql`
  query getOwnOemCustomerById($id: ID!) {
    getOwnOemCustomerById(id: $id) {
      ...CustomerFullData
    }
  }
  ${Customer.fragments.CustomerFullData}
`;

export const LIST_OWN_OEM_FACILITY_USERS_QUERY = gql`
  query listOwnOemFacilityUsers($params: InputQueryParams) {
    listOwnOemFacilityUsers(params: $params) {
      currentPage
      limit
      skip
      totalCount
      users {
        ...UserBasicData
      }
    }
  }
  ${User.fragments.UserBasicData}
`;

export const GET_OWN_OEM_MACHINE_BY_ID_QUERY = gql`
  query getOwnOemMachineById($id: ID!) {
    getOwnOemMachineById(id: $id) {
      ...MachineFullData
    }
  }
  ${Machine.fragments.MachineFullData}
`;

export const LIST_OWN_OEM_CLOSED_TICKETS_QUERY = gql`
  query listOwnOemClosedTickets {
    listOwnOemClosedTickets {
      ...TicketListData
    }
  }
  ${Ticket.fragments.TicketListData}
`;

export const LIST_OWN_OEM_USER_CLOSED_TICKETS_QUERY = gql`
  query listOwnOemUserClosedTickets {
    listOwnOemUserClosedTickets {
      ...TicketListData
    }
  }
  ${Ticket.fragments.TicketListData}
`;

export const LIST_OWN_OEM_OPEN_TICKETS_QUERY = gql`
  query listOwnOemOpenTickets($params: InputQueryParams) {
    listOwnOemOpenTickets(params: $params) {
      ...TicketListData
    }
  }
  ${Ticket.fragments.TicketListData}
`;

export const LIST_OWN_OEM_ALL_TICKETS_QUERY = gql`
  query listOwnOemAllTickets($params: InputQueryParams) {
    listOwnOemAllTickets(params: $params) {
      ...TicketListData
    }
  }
  ${Ticket.fragments.TicketListData}
`;

export const LIST_OWN_OEM_USER_OPEN_TICKETS_QUERY = gql`
  query listOwnOemUserOpenTickets {
    listOwnOemUserOpenTickets {
      ...TicketListData
    }
  }
  ${Ticket.fragments.TicketListData}
`;

export const GET_OWN_OEM_TICKET_BY_ID = gql`
  query getOwnOemTicketById($id: ID!) {
    getOwnOemTicketById(id: $id) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const LIST_OWN_OEM_MACHINE_TICKET_HISTORY_BY_ID_QUERY = gql`
  query listOwnOemMachineTicketHistoryById($id: ID!) {
    listOwnOemMachineTicketHistoryById(id: $id) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const LIST_OWN_OEM_MACHINE_TICKET_HISTORY_SORTED_DATA_BY_ID_QUERY = gql`
  query listOwnOemMachineAgreggatedHistoryById($id: ID!, $sort: String) {
    listOwnOemMachineAgreggatedHistoryById(id: $id, sort: $sort) {
      _id
      totalTickets
      years {
        year
        months {
          month
          histories {
            _id
            ticketId
            title
            status
            createdAt
            updatedAt
            type
            url
            ticket {
              ticketId
              title
              _id
            }
            machine {
              name
              serialNumber
            }
            facility {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_MACHINE_FOLDER_ID_QUERY = gql`
  query getMachineFolderId($machineId: ID!) {
    getMachineFolderId(machineId: $machineId)
  }
`;

export const LIST_ADDITIONAL_FIELDS_QUERY = gql`
  query listAdditionalFields($type: Types) {
    listAdditionalFields(type: $type) {
      ...AdditionFieldData
    }
  }
  ${CustomizeField.fragments.AdditionFieldData}
`;

export const LIST_OWN_OEM_CUSTOM_ADDITIONAL_FIELDS_QUERY = gql`
  query listOwnOemCustomFields($type: Types) {
    listOwnOemCustomFields(type: $type) {
      ...CustomAdditionFieldData
    }
  }
  ${CustomizeField.fragments.CustomAdditionFieldData}
`;

export const LIST_OEM_DOC_TEMPLATES = gql`
  query listOwnOemTemplates {
    listOwnOemTemplates {
      _id
      templateId
      templateData
      oem {
        _id
        name
      }
    }
  }
`;

export const LIST_OEM_DOCS = gql`
  query listOwnOemSubmissions {
    listOwnOemSubmissions {
      _id
      templateName
      url
      inspectionDate
      machine {
        _id
        name
        serialNumber
      }
      facility {
        _id
        name
      }
      user {
        _id
        name
      }
    }
  }
`;

export const LIST_PREVENTIVE_MAINTENANCE_EVENTS = gql`
  query listPreventiveMaintenanceEvents($params: InputQueryParams!) {
    listPreventiveMaintenanceEvents(params: $params) {
      ...PreventiveEventData
    }
  }
  ${PreventiveMaintenance.fragments.PreventiveEventData}
`;

export const GET_PREVENTIVE_MAINTENANCE_EVENT_BY_ID = gql`
  query getPreventiveMaintenanceEventByID($id: ID!) {
    getPreventiveMaintenanceEventByID(id: $id) {
      ...PreventiveEventData
    }
  }
  ${PreventiveMaintenance.fragments.PreventiveEventData}
`;

export const LIST_OWN_OEM_MACHINE_TEMPLATE_QUERY = gql`
  query listOwnOemMachineTemplates($params: InputQueryParams!) {
    listOwnOemMachineTemplates(params: $params) {
      ...MachineTemplateData
    }
  }
  ${MachineTemplate.fragments.MachineTemplateData}
`;

export const GET_OWN_OEM_MACHINE_TEMPLATE_BY_ID = gql`
  query getOwnOemMachineTemplate($templateId: ID!) {
    getOwnOemMachineTemplate(templateId: $templateId) {
      ...MachineTemplateFullData
    }
  }
  ${MachineTemplate.fragments.MachineTemplateFullData}
`;

export const GET_OWN_OEM_TEMPLATE_FOLDERS_BY_ID = gql`
  query getOwnOemTemplateFolderStructureById($templateId: ID!) {
    getOwnOemTemplateFolderStructureById(templateId: $templateId) {
      _id
      externalFolderId
      internalFolderId
    }
  }
`;
export const GET_MACHINE_FOLDERS_BY_ID = gql`
  query getMachineFoldersIds($machineId: ID!) {
    getMachineFoldersIds(machineId: $machineId) {
      _id
      externalFolderId
      internalFolderId
    }
  }
`;

export const GET_OEM_ANALYTICS_QUERY = gql`
  query GetOwnOemAnalytics($params: InputAnalyticsParams!) {
    getOwnOemAnalytics(params: $params) {
      avgResponseTimeInSeconds
      agentCount
      facilityCount
      machineCount
      topFacilities {
        label
        value
      }
      ticketVolume(params: $params) {
        label
        value
      }
    }
  }
`;

export const LIST_OEM_INVENTORY_PARTS_QUERY = gql`
  query ListOwnOemInventoryPart($params: InputInventoryQueryParams) {
    listOwnOemInventoryPart(params: $params) {
      currentPage
      limit
      skip
      totalCount
      parts {
        ...InventoryPartBasicData
      }
    }
  }
  ${InventoryPart.fragments.InventoryPartBasicData}
`;

export const LIST_OWN_OEM_TIME_TRACKERS_QUERY = gql`
  query ListOwnOemTimeTrackers($type: Types!, $fieldType: FieldTypes!) {
    listOwnOemTimeTrackers(type: $type, fieldType: $fieldType) {
      ...TimeTrackerBasicData
    }
  }
  ${TimeTracker.fragments.TimeTrackerBasicData}
`;

export const LIST_OWN_OEM_MACHINES_SERIAL_NUMBER_DUPLICATES_QUERY = gql`
  query listOwnOemMachinesSerialNumberDuplicates($serialNumbers: [String!]!) {
    listOwnOemMachinesSerialNumberDuplicates(serialNumbers: $serialNumbers)
  }
`;

export const LIST_OWN_OEM_MACHINES_SERIAL_NUMBER_MISSING_QUERY = gql`
  query listOwnOemMachinesSerialNumberMissing($serialNumbers: [String!]!) {
    listOwnOemMachinesSerialNumberMissing(serialNumbers: $serialNumbers)
  }
`;

export const LIST_OWN_OEM_CUSTOMERS_MISSING_CLIENT_IDS_QUERY = gql`
  query listOwnOemCustomersMissingClientIds($clientIds: [String!]!) {
    listOwnOemCustomersMissingClientIds(clientIds: $clientIds)
  }
`;

export const LIST_OWN_OEM_CUSTOMERS_DUPLICATED_CLIENT_IDS_QUERY = gql`
  query listOwnOemCustomersDuplicatedClientIds($clientIds: [String!]!) {
    listOwnOemCustomersDuplicatedClientIds(clientIds: $clientIds)
  }
`;

export const LIST_USERS_DUPLICATED_EMAILS_QUERY = gql`
  query listUsersDuplicatedEmails($emails: [String!]!) {
    listUsersDuplicatedEmails(emails: $emails)
  }
`;

export const LIST_OWN_OEM_CUSTOMERS_DUPLICATED_NAMES_QUERY = gql`
  query listOwnOemCustomersDuplicatedNames($names: [String!]!) {
    listOwnOemCustomersDuplicatedNames(names: $names)
  }
`;

export const LIST_OEM_PROCEDURE_TEMPLATES_QUERY = gql`
  query listOwnOemProcedureTemplates($params: InputQueryParams!) {
    listOwnOemProcedureTemplates(params: $params) {
      _id
      name
      createdAt
      updatedAt
      createdBy {
        _id
        name
      }
    }
  }
`;

export const GET_OWN_OEM_PROCEDURE_TEMPLATE = gql`
  query GetOwnOemProcedureTemplate($id: String) {
    getOwnOemProcedureTemplate(id: $id) {
      ...ProcedureTemplateFullData
    }
  }
  ${ProcedureTemplate.fragments.ProcedureTemplateFullData}
`;
export const GET_OWN_OEM_PROCEDURE_INSTANCE = gql`
  query getOwnOemProcedureById($id: ID!) {
    getOwnOemProcedureById(id: $id) {
      ...ProcedureInstanceFullData
    }
  }
  ${ProcedureInstance.fragments.ProcedureInstanceFullData}
`;

export const DOWNLOAD_PROCEDURE_PDF_BY_ID = gql`
  query downloadProcedurePDF($id: ID!, $uuid: String!) {
    downloadProcedurePDF(id: $id, uuid: $uuid)
  }
`;
export const GET_APP_CONFIG = gql`
  query getAppConfig {
    getAppConfig {
      _id
      features
    }
  }
`;

export const LIST_ALL_OWN_OEM_MACHINES_QUERY = gql`
  query listAllOwnOemMachines($params: InputQueryParams) {
    listAllOwnOemMachines(params: $params) {
      currentPage
      limit
      skip
      totalCount
      machines {
        ...MachineListData
      }
    }
  }
  ${Machine.fragments.MachineListData}
`;

export const LIST_ALL_OWN_OEM_CUSTOMERS_QUERY = gql`
  query listAllOwnOemCustomers($params: InputQueryParams) {
    listAllOwnOemCustomers(params: $params) {
      currentPage
      limit
      skip
      totalCount
      customers {
        ...CustomerBasicData
      }
    }
  }
  ${Customer.fragments.CustomerBasicData}
`;

export const LIST_OWN_OEM_PRODUCTION_LINES_QUERY = gql`
  query listOwnOemProductionLines($params: InputQueryParams) {
    listOwnOemProductionLines(params: $params) {
      currentPage
      limit
      skip
      totalCount
      productionLines {
        ...ProductionLineListData
      }
    }
  }
  ${ProductionLine.fragments.ProductionLineListData}
`;

export const GET_OWN_OEM_TICKETS_BY_STATUS = gql`
  query checkTicketHasStatus($statusId: ID!) {
    checkTicketHasStatus(statusId: $statusId)
  }
`;

export const GET_OWN_OEM_PRODUCTION_LINE_BY_ID_QUERY = gql`
  query getOwnOemProductionLineById($id: ID!) {
    getOwnOemProductionLineById(id: $id) {
      ...ProductionLineData
    }
  }
  ${ProductionLine.fragments.ProductionLineData}
`;

export const LIST_OWN_OEM_COMPONENTS_QUERY = gql`
  query listOwnOemComponents($params: InputQueryParams) {
    listOwnOemComponents(params: $params) {
      currentPage
      limit
      skip
      totalCount
      components {
        ...ComponentData
      }
    }
  }
  ${Component.fragments.ComponentData}
`;

export const GET_OWN_OEM_COMPONENT_BY_ID_QUERY = gql`
  query getOwnOemComponentById($id: ID!) {
    getOwnOemComponentById(id: $id) {
      ...ComponentDetailData
    }
  }
  ${Component.fragments.ComponentDetailData}
`;

export const LIST_OWN_OEM_KANBAN_MACHINES = gql`
  query listOwnOemKanbanMachines($params: InputQueryParams) {
    listOwnOemKanbanMachines(params: $params) {
      totalCount
      columns {
        _id
        boardFor
        type
        customField
        column
        columnIndex
        cards {
          ...MachineListData
        }
        totalCount
        limit
        skip
        currentPage
      }
    }
  }
  ${Machine.fragments.MachineListData}
`;

export const LIST_OWN_OEM_KANBAN_CUSTOMERS = gql`
  query listOwnOemKanbanCustomers($params: InputQueryParams) {
    listOwnOemKanbanCustomers(params: $params) {
      totalCount
      columns {
        _id
        boardFor
        type
        customField
        column
        columnIndex
        cards {
          ...CustomerBasicData
        }
        totalCount
        limit
        skip
        currentPage
      }
    }
  }
  ${Customer.fragments.CustomerBasicData}
`;

export const GET_EMAIL_AUTH_LINK_QUERY = gql`
  query getEmailAuthUrl($redirectUrl: String!) {
    getEmailAuthUrl(redirectUrl: $redirectUrl)
  }
`;

export const LIST_EMAIL_FOLDERS_QUERY = gql`
  query listEmailFolders($page: Int!) {
    listEmailFolders(page: $page) {
      page
      folders
    }
  }
`;

export const LIST_EMAIL_THREADS_BY_FOLDER_QUERY = gql`
  query listEmailThreadsByFolder($page: Int!, $folderId: String!) {
    listEmailThreadsByFolder(page: $page, folder: $folderId) {
      page
      threads
    }
  }
`;

export const LIST_EMAIL_THREADS_BY_TICKET_QUERY = gql`
  query listEmailThreadsByTicket($ticketId: ID!) {
    listEmailThreadsByTicket(ticketId: $ticketId)
  }
`;

export const GET_EMAIL_THREAD_QUERY = gql`
  query getEmailThread($threadId: String!) {
    getEmailThread(threadId: $threadId) {
      thread
      ticket {
        _id
        ticketId
      }
    }
  }
`;

export const GET_EMAIL_MESSAGE_QUERY = gql`
  query getEmailMessage($messageId: String!) {
    getEmailMessage(messageId: $messageId) {
      message
      fileUrl
    }
  }
`;

export const DOWNLOAD_EMAIL_FILE_QUERY = gql`
  query downloadEmailFile($fileId: String!, $uuid: String!) {
    downloadEmailFile(fileId: $fileId, uuid: $uuid)
  }
`;

export const GET_EMAIL_FILE_UPLOAD_URL_QUERY = gql`
  query getEmailFileUploadUrl {
    getEmailFileUploadUrl
  }
`;

export const LIST_EMAIL_CONTACTS_QUERY = gql`
  query listEmailContacts($page: Int!) {
    listEmailContacts(page: $page) {
      page
      contacts
    }
  }
`;

export const LIST_TEAMS_QUERY = gql`
  query listTeams($params: InputQueryParams) {
    listTeams(params: $params) {
      currentPage
      limit
      skip
      totalCount
      teams {
        _id
        name
        description
        numberOfMembers
        teamColor
      }
    }
  }
`;

export const GET_TEAM_QUERY = gql`
  query getTeam($id: ID!) {
    getTeam(id: $id) {
      ...TeamData
    }
  }
  ${Team.fragments.TeamData}
`;
