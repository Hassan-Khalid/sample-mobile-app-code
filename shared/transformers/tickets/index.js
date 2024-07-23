export const ticketTransformer = {
  /**
   * Grouped messages by date.
   *
   * @param {Object} data Ticket.
   * @return Object
   */
  groupedByDate: function(data = {}) {
    const { chat } = data;

    if (!chat) return data;

    const { messages } = chat;

    const grouped = messages.reduce((obj, message) => {
      const date = new Date(message.createdAt);
      const key =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      if (!obj[key]) obj[key] = [];
      obj[key].push(message);
      return obj;
    }, {});

    if (Object.keys(grouped).length === 0) return data;

    const transformed = {
      ...data,
      chat: {
        grouped: Object.entries(grouped)
          .map(([key, messages]) => ({
            date: new Date(key),
            messages,
          }))
          ?.sort((a, b) => a.date.getTime() - b.date.getTime()),
      },
    };

    return transformed;
  },
  makeOptions: function(data = []) {
    return data?.map((item) => ({
      ...(item.teams && { teams: item.teams }),
      ...(item.customer && { customers: [item.customer] }),
      ...(item.inventoryParts && { inventoryParts: item.inventoryParts }),
      value: item._id,
      label: `${item.name}${item.deleted ? " - Deleted" : ""}${
        item.serialNumber ? " • " + item.serialNumber : ""
      }`,
    }));
  },
};
