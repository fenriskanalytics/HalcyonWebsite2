'use client';

import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import MarianaIntegration from '../components/marianaIntegration';
import AuthButton from '../components/customAuthButton';

registerComponent(MarianaIntegration, {
  name: 'MarianaIntegration',
  displayName: 'Mariana Integration Link',
  importPath: '../components/marianaIntegration',
  props: {
    path: {
      type: 'string',
      defaultValue: '/account',
      description: 'Base path for the Mariana link (e.g. /account)',
    },
    login: {
      type: 'boolean',
      defaultValue: false,
      description: 'Append ?login=true to URL if true',
    },
    logout: {
      type: 'boolean',
      defaultValue: false,
      description: 'Append ?logout=true to URL if true',
    },
    hasBreadcrumbs: {
      type: 'boolean',
      description: 'Disable breadcrumbs by setting false',
    },
    sections: 'string',
    activeProduct: 'string',
    activeSection: 'string',
    classroom: 'string',
    classType: 'string',
    instructors: 'string',
    locations: 'string',
    loggedInText: {
      type: 'string',
      defaultValue: 'My Account',
    },
    loggedOutText: {
      type: 'string',
      defaultValue: 'Login',
    },
  },
});

registerComponent(AuthButton, {
  name: 'AuthButton',
  displayName: 'Auth Button (Login/Account)',
  importPath: '../components/AuthButton',
  props: {},
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
