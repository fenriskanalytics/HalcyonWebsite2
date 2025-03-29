import * as React from "react";
import {
  PlasmicHomeSection,
  DefaultHomeSectionProps
} from "./plasmic/halcyon_website/PlasmicHomeSection";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface HomeSectionProps extends DefaultHomeSectionProps {}

function HomeSection_(
  props: HomeSectionProps,
  ref: HTMLElementRefOf<"section">
) {
  return (
    <PlasmicHomeSection
      root={{ ref }}
      {...props}
      membershipsButton={{
        props: {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = "https://www.halcyonstudio.us/memberships/";
          },
        },
      }}
    />
  );
}

const HomeSection = React.forwardRef(HomeSection_);
export default HomeSection;
