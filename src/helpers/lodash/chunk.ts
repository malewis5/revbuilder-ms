const chunk = (arr: any, chunkSize = 1, cache: any[] = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) {
    return cache;
  }
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
};

export default chunk;
