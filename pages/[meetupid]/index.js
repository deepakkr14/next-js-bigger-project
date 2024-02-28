import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
    const router = useRouter();
    const { meetupid } = router.query;
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is first meet up "
    />
  );
}

export default MeetupDetails;
