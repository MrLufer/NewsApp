import {StyleSheet} from 'react-native';

const StyleCard = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'grey',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  containerChip: {
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'baseline',
  },
  textChip: {
    color: 'white',
  },
});
export default StyleCard;
