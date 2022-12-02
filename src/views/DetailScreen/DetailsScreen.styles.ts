import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: 400,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
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
});
