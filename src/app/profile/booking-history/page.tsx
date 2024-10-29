import BookingCard from "@/app/_components/cards/BookingCard";
import EmptyHistory from "./EmptyHistory";


function BookingHistory() {
  return (
    <div className=" ">
      <BookingCard/>
      <EmptyHistory/>
    </div>
  );
}

export default BookingHistory;
