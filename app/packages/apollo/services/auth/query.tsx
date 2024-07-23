import { useQuery } from "@apollo/client";
import { AUTH_QUERY, CURRENT_USER_QUERY, GET_OEM_BY_QUERY } from "../../api";

export const useGetOemById = (slug) => {
  const { data: { getOemBySlug: oem } = {}, loading, error } = useQuery(
    GET_OEM_BY_QUERY,
    {
      variables: {
        slug,
      },
    },
  );

  return {
    oem,
    loading,
    error,
  };
};

export const useGetCurrentUser = () => {
  const { data: { currentUser } = {}, loading, error, refetch } = useQuery(
    CURRENT_USER_QUERY,
  );

  return { currentUser, loading, error, refetch };
};

export const useAuthQuery = () => {
  useQuery(AUTH_QUERY, {
    fetchPolicy: "network-only",
  });
};
