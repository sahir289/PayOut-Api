export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    return date.toLocaleDateString('en-US', options);
}

