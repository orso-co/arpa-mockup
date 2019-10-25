import { UserState } from './user-state.enum';
import { OrsoState } from './orso-state.enum';
import { Project } from './project';
import { OrchestraPosition } from './position.enum';

export interface UserProject {
  project: Project;
  position: OrchestraPosition;
  orsoState: OrsoState;
  userState: UserState;
  comment: string;
  id: string;
}
