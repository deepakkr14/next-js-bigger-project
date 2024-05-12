import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router'
const NewMeetup = () => {
  const router=useRouter()
   async function addMetupHandler(data) {
// console.log(data)
const response=await fetch('/api/new-meetup',{method:'POST',
body:JSON.stringify(data),
headers:{
  'content-Type':'application/json'
}})
const final=await response.json();
console.log(final);
router.push('/')
// alert(data)
    }
  return <NewMeetupForm  onAddMeetup={addMetupHandler}/>
}

export default NewMeetup;
