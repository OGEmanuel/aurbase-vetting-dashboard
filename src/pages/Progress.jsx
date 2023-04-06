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
    } else if (page === 2) {
      return <Assessment />;
    } else if (page === 3) return <Interview />;
  };

  return <section>{switchPages()}</section>;
};

export default Progress;
