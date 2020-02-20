import componentMap from "./componentMap";

const createPage = post => {
  if (post.elements === undefined) {
    return [];
  }
  return post.elements.map((element, index) =>
    componentMap[element.type](element.data, index)
  );
};

export default createPage;
