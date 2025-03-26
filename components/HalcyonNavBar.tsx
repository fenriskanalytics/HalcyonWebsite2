'use client';

import * as React from 'react';
import { PlasmicHalcyonNavBar } from './plasmic/halcyon_website/PlasmicHalcyonNavBar';
import type { PlasmicHalcyonNavBar__OverridesType } from './plasmic/halcyon_website/PlasmicHalcyonNavBar';

type HalcyonNavBarProps = PlasmicHalcyonNavBar__OverridesType &
  React.ComponentProps<typeof PlasmicHalcyonNavBar>;

const HalcyonNavBar_ = (
  props: HalcyonNavBarProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <PlasmicHalcyonNavBar
      root={{ ref }}
      {...props}
      loginLink={{
        props: {
          'data-mariana-auth-link': true,
          'data-mariana-logged-out-text': 'Login',
          'data-mariana-logged-in-text': 'Account',
          href: '/account',
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = 'https://www.halcyonstudio.us/account/';
          },
        },
      }}
      membershipsLink={{
        props: {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = 'https://www.halcyonstudio.us/memberships/buy/';
          },
        },
      }}
      scheduleLink={{
        props: {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = 'https://www.halcyonstudio.us/schedule/';
          },
        },
      }}
    />
  );
};

const HalcyonNavBar = React.forwardRef(HalcyonNavBar_);

export default HalcyonNavBar;
