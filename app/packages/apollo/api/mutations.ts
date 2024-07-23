import { gql } from "@apollo/client";
import {
  CallInfo,
  Component,
  Customer,
  CustomizeField,
  InventoryPart,
  Machine,
  MachineTemplate,
  Oem,
  PreventiveMaintenance,
  ProcedureInstance,
  ProcedureTemplate,
  ProductionLine,
  Team,
  Ticket,
  TimeTracker,
  User,
} from "./fragments";

// REMOTE
export const LOGIN_MUTATION = gql`
  mutation loginOemDashboard($userCredentials: userOemCredentials!) {
    loginOemDashboard(input: $userCredentials)
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const CREATE_OEM_SUPPORT_ACCOUNT_MUTATION = gql`
  mutation createOemSupportAccount($input: InputCreateOemSupportAccount!) {
    createOemSupportAccount(input: $input) {
      ...UserBasicData
    }
  }
  ${User.fragments.UserBasicData}
`;

export const UPDATE_OEM_SUPPORT_ACCOUNT_MUTATION = gql`
  mutation updateOemSupportAccount($input: InputUpdateOemSupportAccount!) {
    updateOemSupportAccount(input: $input) {
      ...UserBasicData
    }
  }
  ${User.fragments.UserBasicData}
`;

export const DELETE_OEM_SUPPORT_ACCOUNT_MUTATION = gql`
  mutation deleteOemSupportAccount($id: ID!) {
    deleteOemSupportAccount(id: $id)
  }
`;

export const CREATE_OEM_CUSTOMER_MUTATION = gql`
  mutation createOemCustomer($input: InputCreateOemCustomer!) {
    createOemCustomer(input: $input) {
      ...CustomerBasicData
    }
  }
  ${Customer.fragments.CustomerBasicData}
`;

export const CREATE_OEM_CUSTOMER_V2_MUTATION = gql`
  mutation createOemCustomerV2($input: InputCreateOemCustomerV2!) {
    createOemCustomerV2(input: $input) {
      ...CustomerFullData
    }
  }
  ${Customer.fragments.CustomerFullData}
`;

export const UPDATE_OEM_CUSTOMER_MUTATION = gql`
  mutation upadateOemCustomer($input: InputUpdateOemCustomer!) {
    updateOemCustomer(input: $input) {
      ...CustomerBasicData
    }
  }
  ${Customer.fragments.CustomerBasicData}
`;

export const DELETE_OEM_CUSTOMER_MUTATION = gql`
  mutation deleteOemCustomer($customerId: ID!) {
    deleteOemCustomer(customerId: $customerId)
  }
`;

export const UPDATE_OWN_OEM_MUTATION = gql`
  mutation updateOwnOem($input: InputUpdateOwnOem!) {
    updateOwnOem(input: $input) {
      ...OemBasicData
    }
  }
  ${Oem.fragments.OemBasicData}
`;

export const CREATE_OEM_FACILITY_USER_MUTATION = gql`
  mutation createOemFacilityUser($input: InputCreateFacilityUser!) {
    createOemFacilityUser(input: $input) {
      ...UserBasicData
    }
  }
  ${User.fragments.UserBasicData}
`;

export const UPDATE_OEM_FACILITY_USER_MUTATION = gql`
  mutation updateOemFacilityUser($input: InputUpdateFacilityUser!) {
    updateOemFacilityUser(input: $input) {
      ...UserBasicData
    }
  }
  ${User.fragments.UserBasicData}
`;

export const DELETE_OEM_FACILITY_USER_MUTATION = gql`
  mutation deleteOemFacilityUser($id: ID!) {
    deleteOemFacilityUser(id: $id)
  }
`;

export const CREATE_OWN_OEM_MACHINE_MUTATION = gql`
  mutation createOwnOemMachine($input: InputCreateOwnOemMachine!) {
    createOwnOemMachine(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const UPDATE_OWN_OEM_MACHINE_MUTATION = gql`
  mutation updateOwnOemMachine($input: InputUpdateOwnOemMachine!) {
    updateOwnOemMachine(input: $input) {
      ...MachineFullData
    }
  }
  ${Machine.fragments.MachineFullData}
`;

export const DELETE_OEM_MACHINE_MUTATION = gql`
  mutation deleteOwnOemMachine($machineId: ID!) {
    deleteOwnOemMachine(machineId: $machineId)
  }
`;

export const ASSIGN_OWN_OEM_MACHINE_TO_OWN_OEM_CUSTOMER = gql`
  mutation assignOwnOemMachineToOwnOemCustomer(
    $input: InputAssignOwnOemMachineToOwnOemCustomer!
  ) {
    assignOwnOemMachineToOwnOemCustomer(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const REMOVE_OWN_OEM_MACHINE_FROM_OWN_OEM_CUSTOMER = gql`
  mutation removeOwnOemMachineFromOwnOemCustomer(
    $input: InputRemoveOwnOemMachineFromOwnOemCustomer!
  ) {
    removeOwnOemMachineFromOwnOemCustomer(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const UPDATE_OWN_OEM_TICKET_MUTATION = gql`
  mutation updateOwnOemTicket($input: InputUpdateOwnOemTicket!) {
    updateOwnOemTicket(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const UPDATE_TICKET_KANBAN_OWN_OEM_TICKET_MUTATION = gql`
  mutation updateOwnOemKanbanBoardTicketCard(
    $input: InputUpdateOwnOemKanbanBoardTicketCard!
  ) {
    updateOwnOemKanbanBoardTicketCard(input: $input)
  }
`;

export const CREATE_OWN_OEM_TICKET_MUTATION = gql`
  mutation createOwnOemTicket($input: InputCreateOwnOemTicket!) {
    createOwnOemTicket(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const HANDLE_OWN_OEM_MACHINE_QR_ACCESS_MUTATION = gql`
  mutation handleOwnOemMachineQRAccess(
    $input: InputHandleOwnOemMachineQRAccess!
  ) {
    handleOwnOemMachineQRAccess(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const JOIN_CALL_FOR_TICKET_FROM_FACILITY_MUTATION = gql`
  mutation joinCallForTicketFromFacility($channel: String!) {
    joinCallForTicketFromFacility(channel: $channel) {
      ...CallInfoData
    }
  }
  ${CallInfo.fragments.CallInfoData}
`;

export const ASSIGN_OWN_OEM_MULTIPLE_MACHINES_TO_OWN_OEM_CUSTOMER = gql`
  mutation assignOwnOemMultiplerMachinesToOwnOemCustomer(
    $input: InputAssignOwnOemMultiplerMachinesToOwnOemCustomer!
  ) {
    assignOwnOemMultiplerMachinesToOwnOemCustomer(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const UPDATE_PERSONAL_SETTINGS = gql`
  mutation updatePersonalSettings(
    $personalSettings: InputUpdatePersonalSettings
    $emailNotificationSettings: InputEmailNotificationSettings
  ) {
    updatePersonalSettings(
      personalSettings: $personalSettings
      emailNotificationSettings: $emailNotificationSettings
    ) {
      ...UserBasicData
    }
  }
  ${User.fragments.UserBasicData}
`;

export const CHECK_VALID_FACILITY_USER_MUTATION = gql`
  mutation checkValidFacilityUser($userId: ID!) {
    checkValidFacilityUser(userId: $userId)
  }
`;
export const ACTIVE_INACTIVE_OWN_OEM_ADDITIONAL_FIELD = gql`
  mutation activeInactiveOwnOemAdditionalField($id: ID!, $enabled: Boolean!) {
    activeInactiveOwnOemAdditionalField(_id: $id, enabled: $enabled) {
      ...CustomAdditionFieldData
    }
  }
  ${CustomizeField.fragments.CustomAdditionFieldData}
`;

export const CREATE_OWN_OEM_CUSTOM_ADDITION_FIELD = gql`
  mutation createOwnOemCustomField($input: InputInsertCustomAdditionalField) {
    createOwnOemCustomField(input: $input) {
      ...CustomAdditionFieldData
    }
  }
  ${CustomizeField.fragments.CustomAdditionFieldData}
`;
export const UPDATE_OWN_OEM_CUSTOM_ADDITION_FIELD = gql`
  mutation updateOwnOemCustomField($input: InputUpdateCustomAdditionalField) {
    updateOwnOemCustomField(input: $input) {
      ...CustomAdditionFieldData
    }
  }
  ${CustomizeField.fragments.CustomAdditionFieldData}
`;
export const UPDATE_OWN_OEM_CUSTOM_FIELDS_ORDER = gql`
  mutation updateOwnOemCustomFieldsOrder($input: InputUpdateCustomFieldsOrder) {
    updateOwnOemCustomFieldsOrder(input: $input)
  }
`;

export const DELETE_OWN_OEM_CUSTOM_ADDITIONAL_FIELD = gql`
  mutation deleteOwnOemCustomAdditionalField(
    $input: InputDeleteOwnOemCustomAdditionalField
  ) {
    deleteOwnOemCustomAdditionalField(input: $input)
  }
`;
export const DELETE_OWN_OEM_MACHINE_IMAGE = gql`
  mutation deleteOwnOemMachineImage($machineId: ID!) {
    deleteOwnOemMachineImage(machineId: $machineId) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const VERIFY_WEB_FORM_TOKEN_MUTATION = gql`
  mutation verifyWebFormToken($token: String!) {
    verifyWebFormToken(token: $token) {
      _id
      machineId
      userId
      templateId
      facilityId
      inspectionDate
      templateName
      oemId
    }
  }
`;

export const DELETE_SUBMITTED_DOCUMENT_MUTATION = gql`
  mutation deleteOwnOemSubmissionById($submissionId: ID!) {
    deleteOwnOemSubmissionById(submissionId: $submissionId)
  }
`;

export const CREATE_PREVENTIVE_MAINTENANCE_EVENT = gql`
  mutation createPreventiveMaintenanceEvent(
    $input: InputCreatePreventiveMaintenanceEvent!
  ) {
    createPreventiveMaintenanceEvent(input: $input) {
      ...PreventiveEventData
    }
  }
  ${PreventiveMaintenance.fragments.PreventiveEventData}
`;

export const UPDATE_PREVENTIVE_MAINTENANCE_EVENT = gql`
  mutation updatePreventiveMaintenanceEvent(
    $input: InputUpdatePreventiveMaintenanceEvent!
  ) {
    updatePreventiveMaintenanceEvent(input: $input) {
      ...PreventiveEventData
    }
  }
  ${PreventiveMaintenance.fragments.PreventiveEventData}
`;

export const DELETE_PREVENTIVE_MAINTENANCE_EVENT = gql`
  mutation deletePreventiveMaintenanceEvent($id: ID!) {
    deletePreventiveMaintenanceEvent(id: $id) {
      _id
      oem {
        _id
      }
    }
  }
`;

export const CREATE_OWN_OEM_MACHINE_TEMPLATE_MUTATION = gql`
  mutation createOwnOemMachineTemplate($input: InputCreateMachineTemplate!) {
    createOwnOemMachineTemplate(input: $input) {
      ...MachineTemplateData
    }
  }
  ${MachineTemplate.fragments.MachineTemplateData}
`;

export const UPDATE_OWN_OEM_MACHINE_TEMPLATE_MUTATION = gql`
  mutation updateOwnOemMachineTemplate($input: InputUpdateMachineTemplate!) {
    updateOwnOemMachineTemplate(input: $input) {
      ...MachineTemplateData
    }
  }
  ${MachineTemplate.fragments.MachineTemplateData}
`;

export const DELETE_OWN_OEM_MACHINE_TEMPLATE_MUTATION = gql`
  mutation deleteOwnOemMachineTemplate($templateId: ID!) {
    deleteOwnOemMachineTemplate(templateId: $templateId) {
      _id
    }
  }
`;

export const NOTIFY_ON_INTERNAL_POST_MUTATION = gql`
  mutation notifyOnInternalNotePost($input: InputNotifyOnInternalNotePost!) {
    notifyOnInternalNotePost(input: $input)
  }
`;

export const CREATE_OWN_OEM_INVENTORY_PART_MUTATION = gql`
  mutation createOwnOemInventoryPart($input: InputCreateInventoryPart!) {
    createOwnOemInventoryPart(input: $input) {
      ...InventoryPartBasicData
    }
  }
  ${InventoryPart.fragments.InventoryPartBasicData}
`;

export const UPDATE_OWN_OEM_INVENTORY_PART_MUTATION = gql`
  mutation updateOwnOemInventoryPart($input: InputUpdateInventoryPart!) {
    updateOwnOemInventoryPart(input: $input) {
      ...InventoryPartBasicData
    }
  }
  ${InventoryPart.fragments.InventoryPartBasicData}
`;

export const DELETE_OWN_OEM_INVENTORY_PART_MUTATION = gql`
  mutation deleteOwnOemInventoryPart($id: ID!) {
    deleteOwnOemInventoryPart(id: $id) {
      _id
    }
  }
`;

export const ASSIGN_OWN_OEM_PARTS_TO_MACHINE_MUTATION = gql`
  mutation assignOwnOemInventoryPartsToMachine(
    $input: InputAssignInventoryParts
  ) {
    assignOwnOemInventoryPartsToMachine(input: $input) {
      ...MachineFullData
    }
  }
  ${Machine.fragments.MachineFullData}
`;

export const ASSIGN_OWN_OEM_COMPONENTS_TO_MACHINE_MUTATION = gql`
  mutation assignOwnOemMultipleComponentsToMachine(
    $input: InputAssignOwnOemMultipleComponentsToMachine
  ) {
    assignOwnOemMultipleComponentsToMachine(input: $input) {
      ...ComponentData
    }
  }
  ${Component.fragments.ComponentData}
`;

export const UNASSIGN_OWN_OEM_COMPONENT_FROM_MACHINE_MUTATION = gql`
  mutation unassignOwnOemComponentFromMachine(
    $input: InputUnassignOwnOemComponentFromMachine!
  ) {
    unassignOwnOemComponentFromMachine(input: $input) {
      ...ComponentData
    }
  }
  ${Component.fragments.ComponentData}
`;

export const REMOVE_OWN_OEM_PART_FROM_MACHINE_MUTATION = gql`
  mutation removeOwnOemInventoryPartFromMachine(
    $input: InputRemoveInventoryPart
  ) {
    removeOwnOemInventoryPartFromMachine(input: $input) {
      ...MachineFullData
    }
  }
  ${Machine.fragments.MachineFullData}
`;

export const ADD_OWN_OEM_PART_TO_TICKET_MUTATION = gql`
  mutation assignOwnOemInventoryPartsToTicket(
    $input: InputAssignInventoryPartsToTicket!
  ) {
    assignOwnOemInventoryPartsToTicket(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const REMOVE_OWN_OEM_PART_FROM_TICKET_MUTATION = gql`
  mutation removeOwnOemInventoryPartFromTicket(
    $input: InputRemoveInventoryPartFromTicket!
  ) {
    removeOwnOemInventoryPartFromTicket(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const CREATE_TIME_TRACKER_TAG_MUTATION = gql`
  mutation createOwnOemTimeTrackerTag($input: InputInsertTag!) {
    createOwnOemTimeTrackerTag(input: $input) {
      ...TimeTrackerBasicData
    }
  }
  ${TimeTracker.fragments.TimeTrackerBasicData}
`;

export const UPDATE_TIME_TRACKER_TAG_MUTATION = gql`
  mutation updateOwnOemTimeTrackerTag($input: InputUpdateTag!) {
    updateOwnOemTimeTrackerTag(input: $input) {
      ...TimeTrackerBasicData
    }
  }
  ${TimeTracker.fragments.TimeTrackerBasicData}
`;

export const DELETE_TIME_TRACKER_TAG_MUTATION = gql`
  mutation deleteOwnOemTimeTrackerTag($id: ID!) {
    deleteOwnOemTimeTrackerTag(id: $id) {
      ...TimeTrackerBasicData
    }
  }
  ${TimeTracker.fragments.TimeTrackerBasicData}
`;

export const ADD_TICKET_TIME_TRACKER_LOG_MUTATION = gql`
  mutation addTimeTrackerLog($input: InputAddTimeTrackerLog!) {
    addTimeTrackerLog(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const UPDATE_TICKET_TIME_TRACKER_LOG_MUTATION = gql`
  mutation updateTimeTrackerLog($input: InputUpdateTimeTrackerLog!) {
    updateTimeTrackerLog(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const REMOVE_TIME_TRACKER_LOG_FROM_TICKET_MUTATION = gql`
  mutation removeTimeTrackerLogFromTicket($input: InputRemoveTimeTrackerLog!) {
    removeTimeTrackerLogFromTicket(input: $input) {
      ...TicketSingleData
    }
  }
  ${Ticket.fragments.TicketSingleData}
`;

export const HANDLE_IMPORT_UPLOAD_ID_MUTATION = gql`
  mutation handleImportUploadId($input: InputHandleImportUploadId!) {
    handleImportUploadId(input: $input)
  }
`;

export const REMOVE_CHANNELS_MEMBERSHIPS = gql`
  mutation removeChannelsMemberships($input: InputRemoveChannelsMemberships!) {
    removeChannelsMemberships(input: $input)
  }
`;

export const SAVE_OWN_OEM_PROCEDURE_TEMPLATE = gql`
  mutation SaveOwnOemProcedureTemplate($input: InputSaveProcedureTemplate!) {
    saveOwnOemProcedureTemplate(input: $input) {
      ...ProcedureTemplateFullData
    }
  }
  ${ProcedureTemplate.fragments.ProcedureTemplateFullData}
`;

export const DELETE_OWN_OEM_PROCEDURE_TEMPLATE = gql`
  mutation deleteOwnOemProcedureTemplate($id: ID!) {
    deleteOwnOemProcedureTemplate(id: $id) {
      _id
    }
  }
`;
export const DUPLICATE_OWN_OEM_PROCEDURE_TEMPLATE = gql`
  mutation duplicateOwnOemProcedureTemplate($id: ID!) {
    duplicateOwnOemProcedureTemplate(id: $id)
  }
`;

export const ATTACH_OWN_OEM_PROCEDURE_TO_WORK_ORDER = gql`
  mutation attachOwnOemProcedureToWorkOrder(
    $input: InputAttachProcedureToWorkOrder!
  ) {
    attachOwnOemProcedureToWorkOrder(input: $input)
  }
`;

export const DETACH_OWN_OEM_PROCEDURE_TO_WORK_ORDER = gql`
  mutation detachOwnOemProcedureFromWorkOrder(
    $input: InputDetachProcedureFromWorkOrder!
  ) {
    detachOwnOemProcedureFromWorkOrder(input: $input) {
      _id
    }
  }
`;

export const SAVE_OWN_OEM_PROCEDURE_INSTANCE = gql`
  mutation saveOwnOemProcedure($input: InputSaveProcedure!) {
    saveOwnOemProcedure(input: $input) {
      ...ProcedureInstanceFullData
    }
  }
  ${ProcedureInstance.fragments.ProcedureInstanceFullData}
`;

export const FINALIZE_OWN_OEM_PROCEDURE_INSTANCE = gql`
  mutation finalizeOwnOemProcedure($input: InputFinalizeProcedure!) {
    finalizeOwnOemProcedure(input: $input)
  }
`;

export const ADD_USER_BOARD = gql`
  mutation addUserBoard($board: InputUserBoard!) {
    addUserBoard(board: $board) {
      ...UserAuthData
    }
  }
  ${User.fragments.UserAuthData}
`;

export const REMOVE_USER_BOARD = gql`
  mutation removeUserBoard($board: InputUserBoard!) {
    removeUserBoard(board: $board) {
      ...UserAuthData
    }
  }
  ${User.fragments.UserAuthData}
`;

export const CREATE__OWN_OEM_PRODUCTION_LINE_MUTATION = gql`
  mutation createOwnOemProductionLine(
    $input: InputCreateOwnOemProductionLine!
  ) {
    createOwnOemProductionLine(input: $input) {
      ...ProductionLineData
    }
  }
  ${ProductionLine.fragments.ProductionLineData}
`;

export const DELETE_OEM_PRODUCTION_LINE_MUTATION = gql`
  mutation deleteOwnOemProductionLine($id: ID!) {
    deleteOwnOemProductionLine(id: $id)
  }
`;

export const UPDATE_OEM_PRODUCTION_LINE_MUTATION = gql`
  mutation updateOwnOemProductionLine(
    $input: InputUpdateOwnOemProductionLine!
  ) {
    updateOwnOemProductionLine(input: $input) {
      ...ProductionLineData
    }
  }
  ${ProductionLine.fragments.ProductionLineData}
`;

export const ASSIGN_OWN_OEM_MULTIPLE_MACHINES_TO_PRODUCTION_LINE_MUTATION = gql`
  mutation assignOwnOemMultipleMachinesToProductionLine(
    $input: InputAssignOwnOemMultipleMachinesToProductionLine!
  ) {
    assignOwnOemMultipleMachinesToProductionLine(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const UNASSIGN_OWN_OEM_MACHINE_FROM_PRODUCTION_LINE_MUTATION = gql`
  mutation unassignOwnOemMachineFromProductionLine(
    $input: InputUnassignOwnOemMachineFromProductionLine!
  ) {
    unassignOwnOemMachineFromProductionLine(input: $input) {
      ...MachineData
    }
  }
  ${Machine.fragments.MachineData}
`;

export const CREATE_OWN_OEM_COMPONENT_MUTATION = gql`
  mutation createOwnOemComponent($input: InputCreateOwnOemComponent!) {
    createOwnOemComponent(input: $input) {
      ...ComponentData
    }
  }
  ${Component.fragments.ComponentData}
`;

export const DELETE_OEM_COMPONENT_MUTATION = gql`
  mutation deleteOwnOemComponent($id: ID!) {
    deleteOwnOemComponent(id: $id)
  }
`;

export const UPDATE_OWN_OEM_COMPONENT_MUTATION = gql`
  mutation updateOwnOemComponent($input: InputUpdateOwnOemComponent!) {
    updateOwnOemComponent(input: $input) {
      ...ComponentData
    }
  }
  ${Component.fragments.ComponentData}
`;

export const ASSIGN_OWN_OEM_PARTS_TO_COMPONENT_MUTATION = gql`
  mutation assignOwnOemMultiplePartsToComponent(
    $input: InputAssignOwnOemMultiplePartsToComponent
  ) {
    assignOwnOemMultiplePartsToComponent(input: $input) {
      ...ComponentDetailData
    }
  }
  ${Component.fragments.ComponentDetailData}
`;

export const REMOVE_OWN_OEM_PART_FROM_COMPONENT_MUTATION = gql`
  mutation unassignOwnOemPartFromComponent(
    $input: InputUnassignOwnOemPartFromComponent
  ) {
    unassignOwnOemPartFromComponent(input: $input) {
      ...ComponentDetailData
    }
  }
  ${Component.fragments.ComponentDetailData}
`;

export const ASSIGN_OWN_OEM_PRODUCTION_LINES_TO_CUSTOMER_MUTATION = gql`
  mutation assignOwnOemMultipleProductionLinesToCustomer(
    $input: InputAssignOwnOemMultipleProductionLinesToCustomer
  ) {
    assignOwnOemMultipleProductionLinesToCustomer(input: $input) {
      ...ProductionLineListData
    }
  }
  ${ProductionLine.fragments.ProductionLineListData}
`;

export const UNASSIGN_OWN_OEM_PRODUCTION_LINE_FROM_FACILITY_MUTATION = gql`
  mutation unassignOwnOemProductionLineFromCustomer(
    $input: InputUnassignOwnOemProductionLineFromCustomer!
  ) {
    unassignOwnOemProductionLineFromCustomer(input: $input) {
      ...ProductionLineData
    }
  }
  ${ProductionLine.fragments.ProductionLineData}
`;

export const LINK_EMAIL_ACCOUNT_MUTATION = gql`
  mutation linkEmailAccount($code: String!) {
    linkEmailAccount(code: $code) {
      emailAccountLinked
      linkedEmailAddress
      emailAccountStatus
    }
  }
`;

export const UNLINK_EMAIL_ACCOUNT_MUTATION = gql`
  mutation unlinkEmailAccount {
    unlinkEmailAccount {
      emailAccountLinked
      linkedEmailAddress
      emailAccountStatus
    }
  }
`;

export const UPDATE_EMAIL_THREAD_MUTATION = gql`
  mutation updateEmailThread($input: InputUpdateEmailThread) {
    updateEmailThread(input: $input) {
      thread
      ticket {
        _id
        ticketId
      }
    }
  }
`;

export const SEND_EMAIL_MUTATION = gql`
  mutation sendEmail($input: InputSendEmail) {
    sendEmail(input: $input) {
      message
      fileUrl
    }
  }
`;

export const CREATE_TEAM_MUTATION = gql`
  mutation createTeam($input: InputCreateTeam) {
    createTeam(input: $input) {
      oem {
        _id
      }
      name
      description
      createdAt
      _id
    }
  }
`;

export const DELETE_TEAM_MUTATION = gql`
  mutation deleteTeam($id: ID!) {
    deleteTeam(id: $id)
  }
`;

export const UPDATE_TEAM_MUTATION = gql`
  mutation updateTeam($input: InputUpdateTeam!) {
    updateTeam(input: $input) {
      ...TeamData
    }
  }
  ${Team.fragments.TeamData}
`;

export const ASSIGN_MULTIPLE_MACHINES_TO_TEAM_MUTATION = gql`
  mutation assignMultipleMachinesToTeam(
    $input: InputAssignMultipleMachinesToTeam!
  ) {
    assignMultipleMachinesToTeam(input: $input) {
      _id
    }
  }
`;

export const ASSIGN_MULTIPLE_PRODUCTION_LINES_TO_TEAM_MUTATION = gql`
  mutation assignMultipleProductionLinesToTeam(
    $input: InputAssignMultipleProductionLinesToTeam!
  ) {
    assignMultipleProductionLinesToTeam(input: $input) {
      _id
    }
  }
`;

export const ASSIGN_MULTIPLE_CUSTOMERS_TO_TEAM_MUTATION = gql`
  mutation assignMultipleCustomersToTeam(
    $input: InputAssignMultipleCustomersToTeam!
  ) {
    assignMultipleCustomersToTeam(input: $input) {
      _id
    }
  }
`;

export const ASSIGN_MULTIPLE_USERS_TO_TEAM_MUTATION = gql`
  mutation assignMultipleUsersToTeam($input: InputAssignMultipleUsersToTeam!) {
    assignMultipleUsersToTeam(input: $input) {
      _id
    }
  }
`;

export const UNASSIGN_CUSTOMER_FROM_TEAM_MUTATION = gql`
  mutation unassignCustomerFromTeam($input: InputUnassignCustomerFromTeam!) {
    unassignCustomerFromTeam(input: $input) {
      _id
    }
  }
`;

export const UNASSIGN_PRODUCTION_LINE_FROM_TEAM_MUTATION = gql`
  mutation unassignProductionLineFromTeam(
    $input: InputUnassignProductionLineFromTeam!
  ) {
    unassignProductionLineFromTeam(input: $input) {
      _id
    }
  }
`;

export const UNASSIGN_MACHINE_FROM_TEAM_MUTATION = gql`
  mutation unassignMachineFromTeam($input: InputUnassignMachineFromTeam!) {
    unassignMachineFromTeam(input: $input) {
      _id
    }
  }
`;

export const UNASSIGN_USER_FROM_TEAM_MUTATION = gql`
  mutation unassignUserFromTeam($input: InputUnassignUserFromTeam!) {
    unassignUserFromTeam(input: $input) {
      _id
    }
  }
`;
