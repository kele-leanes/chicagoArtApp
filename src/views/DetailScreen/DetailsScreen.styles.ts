import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 3,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
  },
  bold: {
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 8,
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
