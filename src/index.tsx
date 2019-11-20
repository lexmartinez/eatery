import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Colors } from './config/Constant';
import I18n from './config/i18n';
import {
  Scene,
  Tabs,
  Stack,
  Router,
  Overlay,
  Modal,
  Lightbox
} from 'react-native-router-flux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { LocationModal, ErrorModal, DemoModal } from './components/Modal';
import { Profile, Login, Register, Search, Results } from './screens';
import TabBarIcon from './components/TabBarIcon';
import styles from './style';
import { checkPermission } from './config/Utilities';
import { Permissions } from './config/Constant';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
const Eatery = () => {
  useEffect(() => { checkPermission(Permissions.LOCATION); });
  return (
    <Provider store={store}>
      <Router sceneStyle={{backgroundColor: 'white'}}>
        <Overlay key={'overlay'}>
          <Modal key={'modal'} hideNavBar={true}>
            <Lightbox key={'lightbox'}>
              <Stack key={'root'} hideNavBar={true}>
                <Scene hideNavBar={true} panHandlers={null} initial={true}>
                  <Tabs key={'main'} tabBarStyle={styles.tabBar} labelStyle={styles.tabLabel} tabStyle={styles.tab}
                    activeTintColor={Colors.primary_green} inactiveTintColor={Colors.secondary_green}>
                    <Stack key={'home'} hideNavBar={true} title={I18n.t('home.home')}
                      icon={(props: any)=>(<TabBarIcon {...props} name={'home'}/>)}>
                      <Scene key={'search'} component={Search} hideNavBar={true}/>
                      <Scene key={'results'} component={Results} hideNavBar={true}/>
                    </Stack>
                    {/*<Scene key={'favorites'} component={Dummie} hideNavBar={true} title={I18n.t('favs.favs')}
                      icon={(props: any)=>(<TabBarIcon {...props} name={'heart'}/>)}/>*/}
                    <Scene key={'profile'} component={Profile} hideNavBar={true} title={I18n.t('profile.profile')}
                      icon={(props: any)=>(<TabBarIcon {...props} name={'user'}/>)}/>
                  </Tabs>
                </Scene>
              </Stack>
            </Lightbox>
            <Scene key={'register'} component={Register} />
            <Scene key={'login'} component={Login} panHandlers={null}  />
            <Scene key={'error'} component={ErrorModal} />
            <Scene key={'location'} component={LocationModal} />
            <Scene key={'demo'} component={DemoModal} />
          </Modal>
        </Overlay>
      </Router>
    </Provider>
  );
};

export default Eatery;
