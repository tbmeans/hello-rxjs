export default function reportStatus(x: number) {
    return (x === 0 && "awaiting 1st turn" || x % 2 === 1 && 
            "piece selected" || "cancel piece or move made");
}