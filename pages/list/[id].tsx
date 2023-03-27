// This will contain a form to edit list and assign users
import { useRouter } from 'next/router'

export default function List() {
    const router = useRouter();
    const { id } = router.query;
    // console.log(id);
    
  return (
    <div>
      {id}
    </div>
  );
}
