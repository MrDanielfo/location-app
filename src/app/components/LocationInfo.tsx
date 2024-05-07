'use client'

import { Record } from "../types/RecordType"

interface LocationInfoProps {
  totalRecords: Record[],
  
}

const LocationInfo = ({ totalRecords }: LocationInfoProps) => {

  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {totalRecords?.length > 0 ? totalRecords?.map((record, index) => (
        <div key={index} className="py-3 bg-slate-500 rounded-lg px-3">
          <p>Record: {index + 1}</p>
          <p>Longitude: {record.longitude}</p>
          <p>Latitude: {record.latitude}</p>
          <p>Zipcode: {record.zipCode}</p>
        </div>
      ))  : 'No records yet'}
      
    </div>
  )
}

export default LocationInfo