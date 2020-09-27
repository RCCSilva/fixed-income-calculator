export const getTaxRate = (days) => {
    if (days > 720) {
        return 0.15;
    } else if (days > 360) {
        return 0.175;
    } else if (days > 180) {
        return 0.20;
    } else {
        return 0.225;
    }
}