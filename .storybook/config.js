import { configure } from '@kadira/storybook'
import '../styles.css';

function loadStories() {
  require('../elements/Button/.stories')
  require('../elements/Container/.stories')
  require('../elements/Divider/.stories')
  require('../elements/Header/.stories')
  require('../elements/Icon/.stories')
  require('../elements/Image/.stories')
  require('../elements/Input/.stories')
  require('../elements/Label/.stories')
  require('../elements/List/.stories')
  require('../elements/Loader/.stories')
  require('../elements/Segment/.stories')
  require('../elements/Steps/.stories')

  require('../collections/Form/.stories')
  require('../collections/Grid/.stories')
  require('../collections/Menu/.stories')
  require('../collections/Message/.stories')
  require('../collections/Table/.stories')

  require('../modules/Checkbox/.stories')
  require('../modules/Dimmer/.stories')
  require('../modules/Dropdown/.stories')
  require('../modules/Modal/.stories')
  require('../modules/Popup/.stories')
  require('../modules/Search/.stories')

  require ('../views/Card/.stories')
  require('../views/Statistic/.stories')
}

configure(loadStories(), module);
