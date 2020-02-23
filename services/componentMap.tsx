import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import SubTitle from "../components/SubTitle";
import Gist from "../components/Gist";
import YoutubeVideo from "../components/YoutubeVideo";

const componentMap = {
  title: (data, index) => <Title title={data.title} key={index} />,
  paragraph: (data, index) => <Paragraph text={data.text} key={index} />,
  subTitle: (data, index) => <SubTitle title={data.title} key={index} />,
  gist: (data, index) => <Gist url={data.url} key={index} />,
  youtubeVideo: (data, index) => <YoutubeVideo videoId={data.videoId} key={index} />
};

export default componentMap;