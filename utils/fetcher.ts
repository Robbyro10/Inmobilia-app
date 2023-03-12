import { inmobiliaApi } from "@/api/inmobiliaApi";

export const fetcher = (url: string) => inmobiliaApi.get(url).then(res => res.data);