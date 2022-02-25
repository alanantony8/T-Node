import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import '../src/materialize.css';
// import Skeleton from '@mui/material/Skeleton';
import { fetchBible, deleteBible } from "./redux/bible/bibleActions";
import { get } from 'lodash'

const Book = ({ userData, fetchBible }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBible()
  }, [])
  const navigate = useNavigate();
  return (
    <>
      <strong>Response:</strong>
      {console.log("---0---",userData)}
      {userData && userData.loading===true && <><h3>Loading...</h3></>}
      {userData && userData.error!=='' && <><h3>Error</h3></>}
      {userData && userData.data.data!=[] ? get(userData, 'data.data', []).map(datum => 

        <div class="col s12 m7">
          <h4 class="header"> 
            {datum.id}</h4>
          <div class="card horizontal"  >
            <div class="card-image">
              <p>{datum.abbreviation}</p>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>{datum.nameLong} <button type="button" onClick={()=>{dispatch(deleteBible(datum.id))}}>Delete</button></p>
              </div>
              <div class="card-action">
                <a href="#" onClick={() => { navigate('/chapters/' + datum.id) }}>view</a>
              </div>
            </div>
          </div>
        </div>
      ) : <></>}

    </>
  );
}


const mapStateToProps = state => {
  console.log(state.bible,"---");
  return {
    userData: state.bible
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchBible: () => dispatch(fetchBible())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);