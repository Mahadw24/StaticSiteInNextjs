const randomasdas = (props) => {
  return (
    <div>
      <h1>This is my resume page!</h1>
      {props.data.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://dummyjson.com/user");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default randomasdas;