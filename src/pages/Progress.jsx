import { useState } from 'react';
import Personality from './Personality';
import Language from './Language';
import Assessment from '../dashboard/Assessment';
import Interview from './Interview';
import { useSelector } from 'react-redux';

const Progress = () => {
  const page = useSelector(state => state.progress.page);

  const switchPages = () => {
    if (page === 0) {
      return <Personality />;
    } else if (page === 1) {
      return <Language />;
    }
  };

  return <section>{switchPages()}</section>;
};

export default Progress;
