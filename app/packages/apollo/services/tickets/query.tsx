/* eslint-disable react-hooks/rules-of-hooks */
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_OWN_OEM_TICKETS_BY_STATUS,
  GET_OWN_OEM_TICKET_BY_ID,
  LIST_OWN_OEM_ALL_TICKETS_QUERY,
  LIST_OWN_OEM_CUSTOM_ADDITIONAL_FIELDS_QUERY,
  LIST_OWN_OEM_OPEN_TICKETS_QUERY,
  LIST_OWN_OEM_SUPPORT_ACCOUNTS_QUERY,
  LIST_OWN_OEM_USER_CLOSED_TICKETS_QUERY,
  LIST_OWN_OEM_USER_OPEN_TICKETS_QUERY,
} from "../../api";

import { ticketTransformer } from '../../transformers';

export const getTicketById = (id:string) => {
  const {
    data: { getOwnOemTicketById } = {},
    loading,
    refetch: refetchGetOwnOemTicketById,
    error
  } = useQuery(GET_OWN_OEM_TICKET_BY_ID, {
    variables: {
      id,
    },
    skip: !id,
    fetchPolicy: "network-only",
  });

  return {
    groupedByDate: getOwnOemTicketById,
    ticket: getOwnOemTicketById,
    loading,
    refetch: refetchGetOwnOemTicketById,
    error
  };
};

export const listCustomAdditionalFields = () => {
  const {
    data: { listOwnOemCustomFields: customAdditionalFields = [] } = {},
    loading,
  } = useQuery(LIST_OWN_OEM_CUSTOM_ADDITIONAL_FIELDS_QUERY, {
    variables: {
      type: "tickets",
    },
    fetchPolicy: "network-only",
  });

  return {
    customAdditionalFields,
    loading,
  };
};

export const listSupportAccounts = (variables) => {
  const {
    data: { listOwnOemSupportAccounts = [] } = {},
    loading,
    error,
  } = useQuery(LIST_OWN_OEM_SUPPORT_ACCOUNTS_QUERY, {
    variables,
  });

  return {
    error,
    loading,
    listOwnOemSupportAccounts,
    supportAccountOptions: ticketTransformer.makeOptions(
      listOwnOemSupportAccounts,
    ),
  };
};

export const listOwnOemAllTickets = (activeFilters) => {
  // const filterConditions = generateOpenTicketQueryWhereCond(activeFilters);
  // const hasFilter = Object.keys()?.length;
  const variables = {};

  const {
    data: { listOwnOemAllTickets: data = [] } = {},
    loading,
    error,
    refetch,
  } = useQuery(LIST_OWN_OEM_ALL_TICKETS_QUERY, {
    variables,
  });
  return {
    loading,
    error,
    data,
    refetch,
  };
};

export const listOwnUserOemOpenTickets = () => {
  const variables = {};
  const {
    data: { listOwnOemUserOpenTickets: data = [] } = {},
    loading,
    refetch,
  } = useQuery(LIST_OWN_OEM_USER_OPEN_TICKETS_QUERY, {
    variables,
  });

  return {
    loading,
    data,
    refetch
  };
};

export const listOwnUserOemClosedTickets = () => {
  const variables = {};

  const {
    data: { listOwnOemUserClosedTickets: data = [] } = {},
    loading,
  } = useQuery(LIST_OWN_OEM_USER_CLOSED_TICKETS_QUERY, { variables });

  return {
    loading,
    data,
  };
};

export const useListOwnOemOpenTickets = (_variables) => {
  const variables = {
    limit:2

  };
  const {
    data: { listOwnOemOpenTickets = [] } = {},
    loading,
    error,
  } = useQuery(LIST_OWN_OEM_OPEN_TICKETS_QUERY, { variables });
  return {
    loading,
    error,
    listOwnOemOpenTickets,
  };
};

export const useCheckTicketHasStatus = () => {
  const [getTickets, { loading, error }] = useLazyQuery(
    GET_OWN_OEM_TICKETS_BY_STATUS,
  );

  return {
    loading,
    error,
    checkIfStatusIsUsed: async (statusId) => {
      const { data: { checkTicketHasStatus: isUsed } = {} } = await getTickets({
        variables: {
          statusId,
        },
        fetchPolicy: "network-only",
      });

      return isUsed;
    },
  };
};
