export default function Giphos(props) {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img className="gifcard" src={props.img} alt="error" />
      </a>
    </div>
  );
}
