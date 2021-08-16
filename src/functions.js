export const formatPhone = (phone) => phone.replace(/[^0-9.]/gim, "");
export const stringFromArray = (array, field) => array.map(el => el[field]).join(", ");