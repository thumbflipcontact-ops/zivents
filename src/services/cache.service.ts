export const saveCache = (key: string, data: any) => {
  global[key] = {
    data,
    ts: Date.now(),
  };
};

export const getCache = (key: string, ttl: number) => {
  const item = global[key];
  if (!item) return null;

  if (Date.now() - item.ts > ttl) return null;

  return item.data;
};