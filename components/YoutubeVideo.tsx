interface IYoutubeVideoProps {
    videoId: string;
}


const YoutubeVideo = ({ videoId }: IYoutubeVideoProps) => {
    return (
        <div
            className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                width: "100%",
                paddingTop: 25,
                height: 0
            }}
        >
            <iframe
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
            />
        </div>
    );
};

export default YoutubeVideo;