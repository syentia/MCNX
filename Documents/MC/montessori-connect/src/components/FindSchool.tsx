'use client';

import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input, Checkbox, Button, Card, CardBody } from "@nextui-org/react";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxmcmVkLWEiLCJhIjoiY20xbGltYnNzMDVqbjJwb3c4Zzlvd2MxeCJ9.FjuhyBEszWYwf38VFncKNg';

interface School {
  id: number;
  name: string;
  logo: string;
  address: string;
  ages: string;
  students: number;
  summerProgram: boolean;
  memberParents: number;
  hiring: boolean;
  latitude: number;
  longitude: number;
  isMember?: boolean;
}

const FindSchool: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [summerProgramFilter, setSummerProgramFilter] = useState(false);
  const [hiringFilter, setHiringFilter] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [viewport, setViewport] = useState({
    latitude: 32.7767,
    longitude: -96.7970,
    zoom: 10
  });

  useEffect(() => {
    const fetchSchools = async () => {
      // Replace this with actual API call
      setSchools([
        {
          id: 1,
          name: "The Family School",
          logo: "/family-school-logo.png",
          address: "323 E 47th St, New York, NY 10017-2313",
          ages: "18 months - 12 years",
          students: 75,
          summerProgram: true,
          memberParents: 20,
          hiring: true,
          latitude: 32.7767,
          longitude: -96.7970,
          isMember: true,
        },
        // Add more school data here
      ]);
    };

    fetchSchools();
  }, []);

  useEffect(() => {
    const filtered = schools.filter(school => 
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!summerProgramFilter || school.summerProgram) &&
      (!hiringFilter || school.hiring)
    );
    setFilteredSchools(filtered);
  }, [schools, searchTerm, summerProgramFilter, hiringFilter]);

  const handleSchoolClick = (school: School) => {
    setSelectedSchool(school);
    setViewport({
      latitude: school.latitude,
      longitude: school.longitude,
      zoom: 14
    });
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/3">
        <Map
          {...viewport}
          onMove={evt => setViewport(evt.viewState)}
          style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {filteredSchools.map(school => (
            <Marker
              key={school.id}
              latitude={school.latitude}
              longitude={school.longitude}
            >
              <div 
                className="marker"
                onClick={() => handleSchoolClick(school)}
              >📍</div>
            </Marker>
          ))}
          {selectedSchool && (
            <Popup
              latitude={selectedSchool.latitude}
              longitude={selectedSchool.longitude}
              onClose={() => setSelectedSchool(null)}
            >
              <div>
                <h3>{selectedSchool.name}</h3>
                <p>{selectedSchool.address}</p>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <div className="w-1/3 overflow-y-auto p-4">
        <Input
          placeholder="Search schools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="flex mb-4">
          <Checkbox
            checked={summerProgramFilter}
            onChange={() => setSummerProgramFilter(!summerProgramFilter)}
          >
            Summer Program
          </Checkbox>
          <Checkbox
            checked={hiringFilter}
            onChange={() => setHiringFilter(!hiringFilter)}
          >
            Hiring
          </Checkbox>
        </div>
        {filteredSchools.map(school => (
          <Card key={school.id} className="mb-4">
            <CardBody>
              <div className="flex items-center mb-2">
                <img src={school.logo} alt={school.name} className="w-12 h-12 mr-4" />
                <h2 className="text-xl font-bold">{school.name}</h2>
                {school.isMember && <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">Member</span>}
              </div>
              <p>{school.address}</p>
              <ul className="mt-2">
                <li>Ages: {school.ages}</li>
                <li>Number of students: {school.students}</li>
                <li>Summer Program: {school.summerProgram ? 'Yes' : 'No'}</li>
                <li>Member parents: {school.memberParents}</li>
              </ul>
              {school.hiring && <p className="text-green-500 mt-2">Hiring</p>}
              <Button className="mt-2" color="primary">VIEW PROFILE</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FindSchool;