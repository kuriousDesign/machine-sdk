export function machineIdToTopicMap(id: string): string {
  const topicMap: { [key in string]: string } = {
    "BendPro G2 Demo": "BendProG2/2286/198C/#",
  };
  return topicMap[id];
}
