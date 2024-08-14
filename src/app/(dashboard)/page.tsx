import React from 'react';

// Components
import { FeatureContent, NotFound } from '@/components';

// Constants
import { NOTFOUND } from '@/constants';

const Dashboard = () => {
  return (
    <>
      <NotFound
        src="/no_notification.png"
        title={NOTFOUND.STUDENT.TITLE}
        description={NOTFOUND.STUDENT.DESCRIPTION}
      />
      <FeatureContent />;
    </>
  );
};

export default Dashboard;
