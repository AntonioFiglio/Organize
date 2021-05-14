import { Container } from "../styles/pages/Profile";

import { WorkSpace } from "./workSpace";
import { SettingsProfiles } from "./SettingsProfiles";

export const Profile = () => {
  return (
    <Container>
      <WorkSpace />
      <SettingsProfiles />
    </Container>
  );
};
