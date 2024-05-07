'use client';
import { accessToken, retrieveUrl } from '@/utils/apiKey';
import { useEffect, MouseEvent } from 'react';
import { Record } from '../types/RecordType';

interface ButtonProps {
  locations: Record[],
  setLocations: (locations: any) => void
}

const Button = ({ setLocations, locations }: ButtonProps) => {

  async function getData(longitude: number, latitude: number) {
    const response = await fetch(
      retrieveUrl(longitude, latitude, accessToken)
    );
    const data = await response.json();
    const zipcode = data?.features[1]?.properties?.name;
    const personalRecord = {
      longitude,
      latitude,
      zipCode: zipcode ? zipcode : 'none'
    }
    setLocations((prevValue: any) => [...prevValue, personalRecord])
  }

  useEffect(() => {
    localStorage.setItem("totalLocations", JSON.stringify(locations))
  }, [locations])


  function onClickLocation(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position)
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      getData(longitude, latitude)
      
    });
  }

  return (
    <button onClick={onClickLocation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">
      LOCATION NOW
    </button>
  )
}

export default Button