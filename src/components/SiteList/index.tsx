import React from 'react';
import { ftpdb } from '../../db/ftp';
import { SiteViewer } from '../SiteViewer';

export const SiteList = () => {
  return (
    <div className="site-list-container">
      {ftpdb.map(site => (
        <SiteViewer key={site.name} site={site} />
      ))}
    </div>
  );
};
