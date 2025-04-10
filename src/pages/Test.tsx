import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}

const Test = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error();
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <div>Loading...</div>;
  return <div>{users.map((user: User) => user.name)}</div>;
};

export default Test;
