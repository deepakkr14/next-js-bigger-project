import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetup = () => {
    function addMetupHandler(data) {
console.log(data)
    }
  return <NewMeetupForm  onAddMeetup={addMetupHandler}/>
}

export default NewMeetup;
