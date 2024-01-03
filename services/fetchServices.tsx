import axios, { AxiosResponse } from "axios";
import { apiFetch } from "@/types/apiType";

let cache: { timestamp: number; data: apiFetch } | null = null;
const CACHE_TIME = 5 * 60 * 1000; // 5 dakika (ms cinsinden)

// export const Get = (): Promise<apiFetch> => {
//   return new Promise((resolve, reject) => {
//     const now = Date.now();
//     if (cache && now - cache.timestamp < CACHE_TIME) {
//       resolve(cache.data);
//     } else {
//       axios
//         .get(`${process.env.NEXT_PUBLIC_API}`)
//         .then((response: AxiosResponse<apiFetch>) => {
//           cache = { timestamp: now, data: response.data };
//           resolve(response.data);
//         })
//         .catch((error) => {
//           console.log(error.response.data);
//           reject(error);
//         });
//     }
//   });
// };
export const Get = async () => {
  const cacheTime = 60000; // Önbellekteki verinin geçerlilik süresi (milisaniye cinsinden)
  const refetchOnmount = false;

  const cacheKey = "myCacheKey";
  const cachedData = sessionStorage.getItem(cacheKey);
  const currentTime = new Date().getTime();

  if (cachedData && !refetchOnmount) {
    const cachedTime = JSON.parse(cachedData).timestamp;

    // Eğer önbellekteki veri varsa ve refetchOnmount false ise, cacheTime kontrolü yap
    if (currentTime - cachedTime < cacheTime) {
      return JSON.parse(cachedData).data;
    }
  }

  // Eğer önbellekte veri yoksa veya refetchOnmount true ise, yeni bir istek yap
  const res = await fetch(`https://azcanet.ca/api/home`);
  const jsonData = await res.json();

  // Eğer önbellekteki veri aynıysa, tekrar yükleme yapmadan mevcut veriyi döndür
  if (
    cachedData &&
    JSON.stringify(jsonData) === JSON.stringify(JSON.parse(cachedData).data)
  ) {
    return JSON.parse(cachedData).data;
  }

  // Elde edilen veriyi önbelleğe ekle
  sessionStorage.setItem(
    cacheKey,
    JSON.stringify({ data: jsonData, timestamp: currentTime })
  );

  return jsonData;
};
