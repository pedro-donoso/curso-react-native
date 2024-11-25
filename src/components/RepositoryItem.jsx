import React from 'react';
import {View, Text} from 'react-native'

const RepositoryItem = (props) => (
  <View key={props.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
 <Text style={{ fontWeight: "bold", marginBottom: 5 }}>id: {props.fullName}</Text>
 <Text>FullName: {props.id}</Text>
 <Text>Description: {props.description}</Text>
 <Text>Language: {props.language}</Text>
 <Text>Stars: {props.stargazersCount}</Text>
 <Text>Forks: {props.forksCount}</Text>
 <Text>Review: {props.reviewCount}</Text>
 <Text>Rating: {props.ratingAverage}</Text>
</View>
)

export default RepositoryItem
