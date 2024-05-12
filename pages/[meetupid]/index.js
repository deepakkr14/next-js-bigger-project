import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails({meetupData}) {
  const router = useRouter();
  const { meetupid } = router.query;
  // console.log(meetupData)
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupid: "m1" },
      },
      {
        params: { meetupid: "m1" },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is first meet up ",
        id: meetupid,
      },
    },
  };
}
export default MeetupDetails;
