
import Cardril from  "./components/Cardril"



const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?pid=Api&P=0&h=180",
    nameOfCompany: "Google",
    date: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45, 
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?pid=Api&P=0&h=180",
    nameOfCompany: "Meta",
    date: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?pid=Api&P=0&h=180",
    nameOfCompany: "Amazon",
    date: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.CGfjkv0FTiXyKc1n25wLlAHaE_?pid=Api&P=0&h=180",
    nameOfCompany: "Apple",
    date: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
    nameOfCompany: "Netflix",
    date: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.M3DpBvUfn4YP5TYXFx-iNwHaGB?pid=Api&P=0&h=180",
    nameOfCompany: "Microsoft",
    date: "4 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.gZDxjUV8FoFq5FidWJB1dwHaEK?pid=Api&P=0&h=180",
    nameOfCompany: "Tesla",
    date: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 58,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.zDbJfohjoZkSx8i9gj-bYgHaE0?pid=Api&P=0&h=180",
    nameOfCompany: "NVIDIA",
    date: "2 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?pid=Api&P=0&h=180",
    nameOfCompany: "Adobe",
    date: "5 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.NF9pXP4AlXPqSgrCBRhnsQHaHa?pid=Api&P=0&h=180",
    nameOfCompany: "Uber",
    date: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Mumbai, India"
  }
];



  return (

    <div className="parent">


      {jobOpenings.map(function (elem, idx){

        return <div key={idx}>
          <Cardril company = {elem.nameOfCompany} date = {elem.date} location= {elem.location} post = {elem.post} pay={elem.pay}
         logo = {elem.brandLogo} tag1 = {elem.tag1} tag2 = {elem.tag2} />
        </div>
      })}

    </div>
  )
}

export default App