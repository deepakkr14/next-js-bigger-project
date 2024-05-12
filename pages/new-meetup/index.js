import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetup = () => {
    function addMetupHandler(data) {
console.log(data)
alert(data)
    }
  return <NewMeetupForm  onAddMeetup={addMetupHandler}/>
}

export default NewMeetup;
