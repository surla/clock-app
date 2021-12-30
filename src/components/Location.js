export default function Location(props) {
  const { city, country } = props;
  return (
    <div>
      <p>
        {city} {country}
      </p>
    </div>
  );
}
