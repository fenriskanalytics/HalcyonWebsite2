import React from 'react';

type MarianaIntegrationProps = {
  path: string;
  login?: boolean;
  logout?: boolean;
  hasBreadcrumbs?: boolean;
  sections?: string;
  activeProduct?: string;
  activeSection?: string;
  classroom?: string;
  classType?: string;
  instructors?: string;
  locations?: string;
  loggedInText?: string;
  loggedOutText?: string;
};

const MarianaIntegration: React.FC<MarianaIntegrationProps> = ({
  path,
  login,
  logout,
  hasBreadcrumbs,
  sections,
  activeProduct,
  activeSection,
  classroom,
  classType,
  instructors,
  locations,
  loggedInText = 'My Account',
  loggedOutText = 'Login',
}) => {
  const queryParams: string[] = [];

  if (login) queryParams.push('login=true');
  if (logout) queryParams.push('logout=true');
  if (hasBreadcrumbs === false) queryParams.push('hasBreadcrumbs=false');
  if (sections) queryParams.push(`sections=${encodeURIComponent(sections)}`);
  if (activeProduct) queryParams.push(`activeProduct=${encodeURIComponent(activeProduct)}`);
  if (activeSection) queryParams.push(`activeSection=${encodeURIComponent(activeSection)}`);
  if (classroom) queryParams.push(`classroom=${encodeURIComponent(classroom)}`);
  if (classType) queryParams.push(`classType=${encodeURIComponent(classType)}`);
  if (instructors) queryParams.push(`instructors=${encodeURIComponent(instructors)}`);
  if (locations) queryParams.push(`locations=${encodeURIComponent(locations)}`);

  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  const dataMarianaIntegrations = path ? `${path}${queryString}` : '';

  return (
    <a
      data-mariana-auth-link
      href={dataMarianaIntegrations}
      data-mariana-logged-out-text={loggedOutText}
      data-mariana-logged-in-text={loggedInText}
    ></a>
  );
};

export default MarianaIntegration;
