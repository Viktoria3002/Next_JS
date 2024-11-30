import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
  return (
    <MainContainer keywords={'users next js'}>
      <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link legacyBehavior href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
