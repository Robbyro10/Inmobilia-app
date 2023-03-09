import { IProperty } from "@/interfaces";

interface Filter {
  address: string;
  type: string;
  rent: string;
  sale: string;
}

// this is so ugly lol
export const filterData = (data: IProperty[], filter: Filter) => {
  let filteredData = data.filter((prop: IProperty) => {
    if (
      prop.address.toLowerCase().includes(filter.address.toLowerCase().trim())
    )
      return true;
  });

  filteredData = filteredData.filter((prop: IProperty) => {
    if (filter.type === "any") return true;
    if (prop.type === filter.type) return true;
  });

  filteredData = filteredData.filter((prop: IProperty) => {
    if (!filter.rent) return true;
    if (prop.rent) {
      if (prop.rent > 0 && filter.rent) return true;
    }
  });

  filteredData = filteredData.filter((prop: IProperty) => {
    if (!filter.sale) return true;
    if (prop.sale) {
      if (prop.sale > 0 && filter.sale) return true;
    }
  });

  return filteredData;
};
