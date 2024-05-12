// /api/new-meetup
// only POST
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    // console.log(data);
   const client=await MongoClient.connect(
      "mongodb+srv://deep:wLx96Hj65FGYiQpn@cluster0.rpjyrmi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db=client.db()
    const meetupCollections=db.collection('meetups');
 const result=   await meetupCollections.insertOne({data})
 console.log(result);
 client.close()

 res.status(200).json({message:'meetup inserted'})
  }
}
export default handler;
