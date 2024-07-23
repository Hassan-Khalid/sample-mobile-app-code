import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY, LOGIN_MUTATION ,FORGOT_PASSWORD_MUTATION} from '../../api';

export const forgotPassword = () => {
  const [forgotPassword, { error = {}, loading }] = useMutation(
    FORGOT_PASSWORD_MUTATION,
  );

  return {
    mutation: (values) =>
      new Promise((resolve, reject) => {
        const { email, username, ...rest } = values;
        return forgotPassword({
          variables: {
            ...rest,
            ...(email ? { email: email?.toLowerCase() } : {}),
            ...(username ? { username: username?.toLowerCase() } : {}),
          },
        })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }),
    loading,
    error,
  };
};

export const useUserLogin = () => {
  const [login, { error, loading }] = useMutation(LOGIN_MUTATION);

  return {
    error,
    loading,
    submitLogin: async (variables) =>
      login({
        variables,
        refetchQueries: [
          {
            query: CURRENT_USER_QUERY,
          },
        ],
      }),
  };
};
