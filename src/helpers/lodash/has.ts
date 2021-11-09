const has = (objectToCheckt: any, nestedPropertiesToCheckt: any[]) =>
  nestedPropertiesToCheckt.reduce((xs: any, x: any) => (xs && xs[x] ? xs[x] : null), objectToCheckt)

export default has
