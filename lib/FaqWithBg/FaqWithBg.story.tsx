import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { FaqWithBg } from './FaqWithBg';

storiesOf('FaqWithBg', module).add('FaqWithBg', () => (
  <StoryWrapper attributes={attributes} component={FaqWithBg} />
));
