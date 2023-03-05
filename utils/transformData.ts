
export const transformData = (data: any) => {
    return {
        ...data,
        rooms: Number(data.rooms),
        bath: Number(data.bath),
        parking: Number(data.parking),
        sale: Number(data.sale),
        rent: Number(data.rent),
        size: Number(data.size),
        terrain: Number(data.terrain),
    }
}