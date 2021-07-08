export const formatPhone = (phone) => {
    return phone.replace(/[^0-9.]/gim, "");
}