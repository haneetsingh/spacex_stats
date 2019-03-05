import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">Mission: <span className={launch_success ? "text-success" : "text-danger"}>{mission_name}</span></h3>
        <p>Date: <Moment format="Do MMMM YYYY HH:mm">{launch_date_local}</Moment></p>
        <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Details</Link>
      </div>
    </div >
  )
}
