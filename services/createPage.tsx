import Title from "../components/Title";
const componentMap = {
    title: (data, index) => <Title title={data.title} key={index} />,
}

const createPage = (post) => {
    console.log("POST -> ", post);
    if (post.elements === undefined) {
        return [];
    }
    return post.elements.map((element, index) => componentMap[element.type](element.data, index))
}

export default createPage;