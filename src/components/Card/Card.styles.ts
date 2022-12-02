import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 180,
  },
  textContainer: {
    marginLeft: 16,
    flexShrink: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 4,
  },
});
