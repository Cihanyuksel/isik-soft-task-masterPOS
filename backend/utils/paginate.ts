export const paginate = (page: number, totalItems: number, limit = 12) => {
  const totalPages = Math.ceil(totalItems / limit);
  const skip = (page - 1) * limit;
  return { totalPages, skip, limit };
};
