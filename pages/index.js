import Meetuplist from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a Fist meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 some city",
    description: "This is a Second meetup!",
  },
];
const Homepage = (props) => {
  return (
    <div>
      <h1>i am home page</h1>
      <Meetuplist meetups={props.meetups} />
    </div>
  );
};
export async function getStaticProps() {
  // fetchin the data
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate:10
  };
}

export default Homepage;
