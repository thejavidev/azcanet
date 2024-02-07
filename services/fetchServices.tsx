import { setSession } from "@/helpers/utils";

export const Get = async () => {
  const cacheTime = 60000; // Önbellekteki verinin geçerlilik süresi (milisaniye cinsinden)
  const refetchOnmount = false;

  const cacheKey = "myCacheKey";
  const cachedData = localStorage?.getItem(cacheKey);

  const currentTime = new Date().getTime();

  if (cachedData && !refetchOnmount) {
    const cachedTime = JSON.parse(cachedData).timestamp;

    // Eğer önbellekteki veri varsa ve refetchOnmount false ise, cacheTime kontrolü yap
    if (currentTime - cachedTime < cacheTime) {
      return JSON.parse(cachedData);
    }
  }

  try {
    // Eğer önbellekte veri yoksa veya refetchOnmount true ise, yeni bir istek yap
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}`);
    const jsonData = await res.json();

    // Eğer önbellekteki veri aynıysa, tekrar yükleme yapmadan mevcut veriyi döndür
    if (
      cachedData &&
      JSON.stringify(jsonData) === JSON.stringify(JSON.parse(cachedData))
    ) {
      return JSON.parse(cachedData);
    }

    // Elde edilen veriyi önbelleğe ekle
    setSession(cacheKey, jsonData);

    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return a placeholder value indicating that the data couldn't be fetched
    return { error: "Data couldn't be fetched" };
  }
};
