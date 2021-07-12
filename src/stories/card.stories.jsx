import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../components/card';

const stories = storiesOf('App Test', module);

stories.add('Card', () => {
    return <Card />;
});
