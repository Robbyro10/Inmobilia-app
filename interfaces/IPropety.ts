
export interface IProperty {
    _id: string;
    address: string;
    description: string;
    rent?: number;
    sale?: number;
    bath: number;
    rooms: number;
    size: number;
    terrain?: number;
    parking?: number;
    addOns?: string;
    img?: string[];
    type: string;
}