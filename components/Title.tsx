export interface IButtonProps {
    title: string;
}

const Title = ({ title }: IButtonProps) => (
    <>
        <div className="title-container">
            <h1>{title}</h1>
        </div>
        <style jsx>{`
      .title-container {
        width: 100%
      }
    `}</style>
    </>
);

export default Title;
