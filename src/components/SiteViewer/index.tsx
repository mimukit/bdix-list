import React from 'react';

interface SiteViewerProps {
  site: {
    name: string;
    url: string;
  };
}

export const SiteViewer = ({ site }: SiteViewerProps) => (
  <div>
    <h3 className="center">
      <a href={site.url} target="_blank" rel="noopener noreferrer">
        {site.name}
      </a>
    </h3>
    <br />
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%' /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        title={site.name}
        style={{
          boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.2)',
          borderRadius: 5,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 600,
        }}
        src={site.url}
        frameBorder="0"
      />
    </div>
  </div>
);
