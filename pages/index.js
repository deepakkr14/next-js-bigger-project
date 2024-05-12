import Meetuplist from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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
  const client = await MongoClient.connect(
    "mongodb+srv://deep:wLx96Hj65FGYiQpn@cluster0.rpjyrmi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetups");
// console.log
  const final = await meetupCollections.find().toArray();
  // console.log(final,'ye wal')
  client.close();
  return {
    props: {
      meetups: final.map(meetup => ({
        title: meetup.data.title,
        id: meetup._id.toString(),
        address: meetup.data.address,
        description: meetup.data.description,
        image:meetup.data.image
      })),
    },
    revalidate: 1, //no of seconds nextjs will wait until it regenerate its inocoming request
  };
}

//  export async function getServerSideProps(context){
//   //runs at every request
//   const req =context.req;
//   const res= context.res;
//   // fetch data from an api
//   return {
//     props: {meetups:DUMMY_MEETUPS}
//   }
//  }
export default Homepage;
