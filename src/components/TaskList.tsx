// src/components/UserList.tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/api";

const TaskList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>An error has occurred: " {error.message}</span>;

  return (
    <ul>
      {data?.map((task : any) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default TaskList;
