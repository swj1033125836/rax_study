import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';
import Logo from '../../components/Logo';
import Welcome from '@/components/study_component/HelloWord';
import Welcome1 from '@/components/study_component/HelloWord1';
import Counter from '@/components/study_component/Counter/Counter';

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>
      <Text className={styles.homeInfo}>More information about Rax</Text>
      <Text className={styles.homeInfo}>Visit https://rax.js.org</Text>
      <Welcome name={123} />
      <Welcome1 name={789} />
      <Counter />
    </View>
  );
}
