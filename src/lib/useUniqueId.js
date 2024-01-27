export default function useUniqueId() {
    const timestamp = new Date().getTime();
    const randomPart = Math.random().toString(36).substr(2, 5);
    const uniqueId = `${timestamp}-${randomPart}`;

    return uniqueId;
}
