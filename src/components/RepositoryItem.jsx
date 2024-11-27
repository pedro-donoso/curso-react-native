import React from 'react';
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText';

const RepositoryStats = props => {
  return (
   <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    <View>
     <StyledText fontWeight='bold'>Stars</StyledText>
     <StyledText>{props.stargazersCount}</StyledText>
    </View>
    <View>
     <StyledText fontWeight='bold'>Forks</StyledText>
     <StyledText>{props.forksCount}</StyledText>
    </View>
    <View>
     <StyledText fontWeight='bold'>Review</StyledText>
     <StyledText>{props.reviewCount}</StyledText>
    </View>
    <View>
     <StyledText fontWeight='bold'>Rating</StyledText>
     <StyledText>{props.ratingAverage}</StyledText>
    </View>
   </View>
  );
}

const RepositoryItem = (props) => (
<View key={props.id} style={styles.container}>
  <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
  <StyledText bold>{props.description}</StyledText>
  <StyledText blue>{props.language}</StyledText>
  <RepositoryStats {...props} />
</View>
)

const styles = StyleSheet.create({
 container: {
  padding: 20,
  paddingBottom: 5,
  paddingTop: 5,
 }
});

export default RepositoryItem
