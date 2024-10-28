import Image from "next/image";
import React from "react";

function MeetingPoint() {
  return (
    <div>
      <h2 className="text-xl font-extrabold">Meeting Point</h2>
      <div className="flex mt-4 ml-2  gap-4 items-center">
        <div className="">
          <Image
            src="/location-favourite-02.png"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <p className="text-[#DD2509] text-[15px] font-bold">1-Day Ticket Unlimited Hop-on and Hop-off Access</p>
      </div>
      <p className=" bg-[#F4F4F4] mt-3 p-6 mr-2 rounded-lg text-[#010A15B2] text-[15px]">
        Green Line Tours bus route starts from Terminal Station at Piazza dei
        Cinquecento, corner Via Cavour. The other stops include: Santa Maria
        Maggiore (Piazza dell'Esquilino, 12), Colosseum (Via di San Gregorio-
        close to the entrance of Palatine), Circus Maximus (Via del Circo
        Massimo- Belvedere Romolo e Remo), Piazza Venezia (Via del Teatro
        Marcello in front of civic numbers 32 -34), Vatican City (Lungotevere
        Tor di Nona 7), Villa Borghese (Via Ludovisi, 48), Barberini Square (Via
        Barberini, 14) ,Pyramid/Testaccio quarter, Eataly, Borghese Gallery,
        Bioparco Zoo (Via Mercadante 34), Villa Giulia-National Etruscan
        Museums,(piazza Thorvaldsen, Viale delle Belle Arti) , Auditorium Parco
        della Musica(Via de Coubertin), Maxxi Museum (Via Guido Reni 4/a).
      </p>

      <div className="flex mt-4 ml-2  gap-4 items-center">
        <div className="">
          <Image
            src="/location-favourite-02.png"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <p className="text-[#DD2509] text-[15px] font-bold">24-Hour Ticket</p>
      </div>
      <p className=" bg-[#F4F4F4] mt-3 p-6 mr-2 rounded-lg text-[#010A15B2] text-[15px]">
        Green Line Tours bus route starts from Terminal Station at Piazza dei
        Cinquecento, corner Via Cavour. The other stops include: Santa Maria
        Maggiore (Piazza dell'Esquilino, 12), Colosseum (Via di San Gregorio-
        close to the entrance of Palatine), Circus Maximus (Via del Circo
        Massimo- Belvedere Romolo e Remo), Piazza Venezia (Via del Teatro
        Marcello in front of civic numbers 32 -34), Vatican City (Lungotevere
        Tor di Nona 7), Villa Borghese (Via Ludovisi, 48), Barberini Square (Via
        Barberini, 14) ,Pyramid/Testaccio quarter, Eataly, Borghese Gallery,
        Bioparco Zoo (Via Mercadante 34), Villa Giulia-National Etruscan
        Museums,(piazza Thorvaldsen, Viale delle Belle Arti) , Auditorium Parco
        della Musica(Via de Coubertin), Maxxi Museum (Via Guido Reni 4/a).
      </p>
    </div>
  );
}

export default MeetingPoint;
