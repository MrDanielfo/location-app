'use client';
import Button from "./components/Button";
import { useState, useEffect } from 'react';
import LocationInfo from "./components/LocationInfo";
import { Record } from "./types/RecordType";

export default function Home() {
  const [locations, setLocations] = useState([])
  const [totalRecords, setTotalRecords] = useState<Record[]>([])

  useEffect(()  => {
    if (typeof window !== "undefined") {
      let records = JSON.parse(localStorage.getItem("totalLocations") as string)
      console.log(typeof records)
      if (records.length > 0) {
        setTotalRecords(records)
      }
    }
  }, [locations])
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <Button setLocations={setLocations} locations={locations} />
      <LocationInfo totalRecords={totalRecords} />
    </main>
  );
}
