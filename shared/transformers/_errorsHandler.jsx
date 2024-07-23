export const errorsHandler = (error) => {
  let err = {};

  if (error.networkError) {
    const { message } = error.networkError || {};

    if (typeof message === "object") {
      err = { ...message };
    } else {
      err = message || "Something went wrong!";
    }
  }

  if (error.graphQLErrors?.length) {
    const gqlError = error.graphQLErrors[0];
    if (gqlError?.extensions?.code === "BAD_USER_INPUT") {
      err = {
        ...err,
        ...gqlError?.extensions?.fields,
        status: gqlError.status,
      };
    } else {
      err.message = gqlError.message;
      err.status = gqlError.status;
    }
  }

  return err;
};
