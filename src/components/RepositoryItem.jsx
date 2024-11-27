import React from 'react';
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItem = (props) => (
<View key={props.id} style={styles.container}>
  <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
  <StyledText>{props.description}</StyledText>
  <StyledText style={styles.language}>{props.language}</StyledText>
  <RepositoryStats {...props} />
</View>
)

const styles = StyleSheet.create({
 container: {
  padding: 20,
  paddingBottom: 5,
  paddingTop: 5,
 },
 language: {
  padding: 4,
  color: theme.colors.white,
  backgroundColor: theme.colors.primary,
  alignSelf: 'flex-start'
 }
});

export default RepositoryItem
