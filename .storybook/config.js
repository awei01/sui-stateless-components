import { configure } from '@kadira/storybook'
import '../styles.css';

function loadStories() {
  require('../elements/Button/.stories')
  require('../elements/Container/.stories')
  require('../elements/Divider/.stories')
  require('../elements/Header/.stories')
  require('../elements/Label/.stories')
  require('../elements/List/.stories')
  require('../elements/Icon/.stories')
  require('../elements/Segment/.stories')

  require('../collections/Form/.stories')
  require('../collections/Grid/.stories')
  require('../collections/Menu/.stories')
  require('../collections/Message/.stories')

  require('../modules/Dimmer/.stories')
  require('../modules/Modal/.stories')
  require('../modules/Popup/.stories')
}

configure(loadStories(), module);
