interface task {
  id: string;
}

export const findListId = <T extends task>(lists: T[], index: string) => {
  return lists.findIndex((item: T) => item.id === index);
};
