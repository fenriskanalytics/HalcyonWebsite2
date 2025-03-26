'use client';

import * as React from 'react';
import { PlasmicHalcyonFooter } from './plasmic/halcyon_website/PlasmicHalcyonFooter';

import type { PlasmicHalcyonFooter__OverridesType } from './plasmic/halcyon_website/PlasmicHalcyonFooter';

type HalcyonFooterProps = PlasmicHalcyonFooter__OverridesType & React.ComponentProps<typeof PlasmicHalcyonFooter>;

const HalcyonFooter_ = (props: HalcyonFooterProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <PlasmicHalcyonFooter
      footerTop={{ ref }}
      {...props}
      membershipsPage={{
        props: {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = 'https://www.halcyonstudio.us/memberships/buy/';
          },
        },
      }}
      schedulePage={{
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

const HalcyonFooter = React.forwardRef(HalcyonFooter_);

export default HalcyonFooter;

