import { useMutation } from "@apollo/client";
import {
  UPDATE_OWN_OEM_TICKET_MUTATION,
  CREATE_OWN_OEM_TICKET_MUTATION,
  Ticket,
  ADD_OWN_OEM_PART_TO_TICKET_MUTATION,
  ADD_TICKET_TIME_TRACKER_LOG_MUTATION,
  NOTIFY_ON_INTERNAL_POST_MUTATION,
  REMOVE_OWN_OEM_PART_FROM_TICKET_MUTATION,
  REMOVE_TIME_TRACKER_LOG_FROM_TICKET_MUTATION,
  UPDATE_TICKET_TIME_TRACKER_LOG_MUTATION,
  UPDATE_TICKET_KANBAN_OWN_OEM_TICKET_MUTATION,
  GET_OWN_OEM_TICKET_BY_ID,
} from "../../api";
// import client from "../../../app/packages/apollo/client";

export const updateTicket = () => {
  const [updateOwnOemTicket, { error, loading }] = useMutation(
    UPDATE_OWN_OEM_TICKET_MUTATION,
  );

  return {
    mutation: (data) =>
      updateOwnOemTicket({
        variables: {
          input: {
            ...data,
          },
        },

        update(cache, { data: { updateOwnOemTicket: ref } }) {
          cache.modify({
            id: cache.identify({ __typename: "Ticket", id: ref._id }),
            fields: {
              listOwnOemOpenTickets(existingRefs = []) {
                const newRef = cache.writeFragment({
                  data: ref,
                  fragment: Ticket.fragments.TicketListData,
                  fragmentName: "TicketListData",
                });

                return [newRef, ...existingRefs];
              },
            },
          });

          cache.evict({
            id: "ROOT_QUERY",
            fieldName: "listOwnOemAllTickets",
          });
          cache.gc();

          if (data.status) {
            cache.evict({
              id: "ROOT_QUERY",
              fieldName: "getOwnOemAnalytics",
            });

            cache.gc();
          }
        },
      }),
    loading,
    error,
  };
};

export const createTicket = () => {
  const [
    createOwnOemTicket,
    { error: { networkError } = {}, loading },
  ] = useMutation(CREATE_OWN_OEM_TICKET_MUTATION);

  return {
    mutation: (data) =>
      createOwnOemTicket({
        variables: {
          input: {
            ...data,
          },
        },
        update(cache, { data: { createOwnOemTicket: ref } }) {
          cache.evict({
            id: "ROOT_QUERY",
            fieldName: "listOwnOemAllTickets",
          });
          cache.evict({
            id: "ROOT_QUERY",
            fieldName: "listOwnOemOpenTickets",
          });
          cache.gc();
        },
      }),
    loading,
    serverErrors: networkError,
  };
};

export const notifyOnInternalPost = () => {
  const [
    notifyOnInternalNotePost,
    { error: { networkError } = {}, loading },
  ] = useMutation(NOTIFY_ON_INTERNAL_POST_MUTATION);

  return {
    mutation: ({ ticketId, mentionedUsers, message }) =>
      notifyOnInternalNotePost({
        variables: {
          input: {
            ticketId,
            mentionedUsers,
            message,
          },
        },
      }),
    loading,
    serverErrors: networkError,
  };
};

export const assignPart = () => {
  const [assign, { loading: assigningPart, error }] = useMutation(
    ADD_OWN_OEM_PART_TO_TICKET_MUTATION,
  );

  return {
    assigningPart,
    error,
    assingPartToTicket: async (input) =>
      assign({
        variables: { input },
        skip: !input?.ticketId || !input?.inventoryParts?.length,
        update(cache, { data: { assignOwnOemInventoryPartsToTicket: ref } }) {
          cache.modify({
            id: cache.identify({ __typename: "Ticket", id: ref._id }),
            fields: {
              getOwnOemTicketById(existingRefs = []) {
                const newRef = cache.writeFragment({
                  data: ref,
                  fragment: Ticket.fragments.TicketSingleData,
                  fragmentName: "TicketSingleData",
                });

                return [...existingRefs, newRef];
              },
            },
          });
        },
      }),
  };
};

export const removePart = () => {
  const [remove, { loading: removingPart, error }] = useMutation(
    REMOVE_OWN_OEM_PART_FROM_TICKET_MUTATION,
  );

  return {
    removingPart,
    error,
    removePartFromTicket: async (input) =>
      remove({
        variables: { input },
        skip: !input?.ticketId || !input?.partId,
        update(cache, { data: { removeOwnOemInventoryPartFromTicket: ref } }) {
          cache.modify({
            id: cache.identify({ __typename: "Ticket", id: ref._id }),
            fields: {
              getOwnOemTicketById(existingRefs = []) {
                const newRef = cache.writeFragment({
                  data: ref,
                  fragment: Ticket.fragments.TicketSingleData,
                  fragmentName: "TicketSingleData",
                });

                return [...existingRefs, newRef];
              },
            },
          });
        },
      }),
  };
};

export const addTimeTrackerLog = () => {
  const [add, { loading: addingTimeLog, error }] = useMutation(
    ADD_TICKET_TIME_TRACKER_LOG_MUTATION,
  );

  return {
    addingTimeLog,
    error,
    addTimeLog: async (input) =>
      add({
        variables: { input },
        skip:
          !input?.ticketId || !Object.keys(input?.timeTrackerLog || {}).length,
        update(cache, { data: { addTimeTrackerLog: ref } }) {
          cache.modify({
            id: cache.identify({ __typename: "Ticket", id: ref._id }),
            fields: {
              getOwnOemTicketById(existingRefs = []) {
                const newRef = cache.writeFragment({
                  data: ref,
                  fragment: Ticket.fragments.TicketSingleData,
                  fragmentName: "TicketSingleData",
                });

                return [...existingRefs, newRef];
              },
            },
          });
        },
      }),
  };
};

export const updateTimeTrackerLog = () => {
  const [update, { loading: updatingTimeLog, error }] = useMutation(
    UPDATE_TICKET_TIME_TRACKER_LOG_MUTATION,
  );

  return {
    updatingTimeLog,
    updateTimeLogError: error,
    updateTimeLog: async (input) =>
      update({
        variables: { input },
        skip: !input?.ticketId || !input.timeLogId,
        update(cache, { data: { updateTimeTrackerLog: ref } }) {
          cache.modify({
            id: cache.identify({ __typename: "Ticket", id: ref._id }),
            fields: {
              getOwnOemTicketById(existingRefs = []) {
                const newRef = cache.writeFragment({
                  data: ref,
                  fragment: Ticket.fragments.TicketSingleData,
                  fragmentName: "TicketSingleData",
                });

                return [...existingRefs, newRef];
              },
            },
          });
        },
      }),
  };
};

export const removeTimeTrackerLog = () => {
  const [remove, { loading: removingTimeLog, error }] = useMutation(
    REMOVE_TIME_TRACKER_LOG_FROM_TICKET_MUTATION,
  );

  return {
    removingTimeLog,
    error,
    removeTimeLogFromTicket: async (input) =>
      remove({
        variables: { input },
        skip: !input?.ticketId || !input?.timeLogId,
        update(cache, { data: { removeTimeTrackerLogFromTicket: ref } }) {
          cache.modify({
            id: cache.identify({ __typename: "Ticket", id: ref._id }),
            fields: {
              getOwnOemTicketById(existingRefs = []) {
                const newRef = cache.writeFragment({
                  data: ref,
                  fragment: Ticket.fragments.TicketSingleData,
                  fragmentName: "TicketSingleData",
                });

                return [...existingRefs, newRef];
              },
            },
          });
        },
      }),
  };
};

export const useWorkOrderKanbanMutation = () => {
  const [update] = useMutation(UPDATE_TICKET_KANBAN_OWN_OEM_TICKET_MUTATION, {
    refetchQueries: ["listOwnOemAllTickets"],
  });

  return {
    workOrderKanbanMutation: async (input) => {
      return update({
        variables: {
          input,
        },
      });
    },
  };
};

// export const updateTicketCacheOnProcedureAttached = async (
//   id,
//   procedure,
//   addedBy,
// ) => {
//   const ticket = client.readQuery({
//     query: GET_OWN_OEM_TICKET_BY_ID,
//     variables: { id },
//   });
//   if (!ticket) return false;
//
//   const { getOwnOemTicketById: cachedTicket } = ticket;
//   if (cachedTicket) {
//     const cloned = JSON.parse(JSON.stringify(cachedTicket));
//     cloned.procedures = cloned.procedures || [];
//     cloned.procedures.push({
//       procedure,
//       addedBy,
//     });
//
//     client.writeQuery({
//       query: GET_OWN_OEM_TICKET_BY_ID,
//       variables: { id },
//       data: {
//         getOwnOemTicketById: cloned,
//       },
//     });
//     return true;
//   }
//
//   return false;
// };
