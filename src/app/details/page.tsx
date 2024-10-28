import Expect from "./Expect"
import Form from "./Form"
import Gallery from "./Gallery"
import Heading from "./Heading"
import MeetingPoint from "./MeetingPoint"
import Overview from "./Overview"
import Queries from "./Queries"

function Details() {
  return (
    <div className="px-20">
        <Heading/>
        <Gallery/>
        <div className="flex w-full">
            <div className="w-3/4">
                <Overview/>
                <MeetingPoint/>
                <Expect/>
                <Queries />
            </div>
            <div className="w-1/4 ">
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Details