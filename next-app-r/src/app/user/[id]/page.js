'use client'
    
import { useParams } from 'next/navigation';

export default function UserID() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <h1>Dynamic Routing</h1>
      <p>Done by: {id}</p>
    </>
  );
}
