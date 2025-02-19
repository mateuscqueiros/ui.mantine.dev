import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { NavbarNested } from './NavbarNested';

storiesOf('NavbarNested', module).add('NavbarNested', () => (
  <StoryWrapper attributes={attributes} component={NavbarNested} />
));
