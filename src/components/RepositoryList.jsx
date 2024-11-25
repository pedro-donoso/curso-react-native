import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";

const RepositoryList = () => {
 return (
  <FlatList
   data={repositories}
   renderItem={({ item: repo }) => (
    <View key={repo.id}>
     <Text>id: {repo.fullName}</Text>
     <Text>FullName: {repo.id}</Text>
     <Text>Description: {repo.description}</Text>
     <Text>Language: {repo.language}</Text>
     <Text>Stars: {repo.stargazersCount}</Text>
     <Text>Forks: {repo.forksCount}</Text>
     <Text>Review: {repo.reviewCount}</Text>
     <Text>Rating: {repo.rating}</Text>
    </View>
   )}
  />
 );
}

export default RepositoryList
